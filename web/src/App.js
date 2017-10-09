import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import { FixDoc } from './fixdoc';
import { parseFixData } from './fixparser';
import { Button, Checkbox, Container, Divider, Form, Grid, Input, Label, Menu, Table } from 'semantic-ui-react'

// initialise google analytics
ReactGA.initialize('UA-106929065-2', {titleCase: false}); 
ReactGA.pageview('/');

class FixInput extends Component {
  state = { fixData: '' };
  onFixTextChange = (e, data) => {
    this.onParseFix(data.value);
  }
  onClear = () => {
    ReactGA.event({category: 'fix_input', action: 'clear'});
    this.onParseFix('');
  }
  onProcess = () => {
    ReactGA.event({category: 'fix_input', action: 'process'});
  }
  onSampleData = () => {
    ReactGA.event({category: 'fix_input', action: 'sample_data'});
    const fixsession = '' +
      '8=FIX.4.2|9=76|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|95=4|96=1234|98=0|108=60|10=134|\n' +
      '8=FIX.4.2|9=59|35=A|49=XYZ|56=ABC|34=710|52=20100130-10:52:36|98=0|108=60|10=103|\n';
    this.onParseFix(fixsession);
  }
  onParseFix = (fixData) => {
    this.setState({fixData: fixData});
    let messages = parseFixData(fixData);
    this.props.onMessages(messages);
  }
  render() {
    const { fixData } = this.state;
    return (
      <Form>
        <Form.TextArea onChange={this.onFixTextChange} onBlur={this.onProcess} placeholder={'Paste FIX messages here'} name='fixData' value={fixData} />
        <Button size='tiny' onClick={this.onProcess}>Process</Button>
        <Button size='tiny' onClick={this.onClear}>Clear</Button>
        <Button size='tiny' onClick={this.onSampleData}>Sample Data</Button>
      </Form>
    )
  }
}

class FixMsgType extends Component {
  render() {
    const msg = this.props.msg;
    const msgtype = msg.tag(35).value;
    const msgtypedoc = FixDoc.msgtypedoc(msg);
    const name = msg.msgtype();
    const msgcat = msg.msgcat();

    let color = null;
    let text = name;

    if (msgtype === '8') { // execution report
      // fid: 150 = exec type
      text = 'ER ' + msg.tag(150).enum.replace(/_/g, ' ');
      let value = msg.tag(150).value;
      if (['0', '8'].includes(value)) {
        color = 'red';
      } else if (['2', 'F'].includes(value)) {
        color = 'blue';
      } else {
        color = 'teal';
      }
    } else if (msgtype === 'AE') { // trade capture report
      color = 'violet';
      // fid: 573 = match status
      text = 'TCR ' + msg.tag(573).enum.replace(/_/g, ' '); 
    } else if (msgtype === 'D') { // new order
      color = 'green';
    } else if (msgtype === '3') { // reject
      color = 'red';
    } else if (msgcat === 'app') { // application message 
      color = 'teal';
    }

    return (
      <Label as='a' color={color} href={msgtypedoc} size='tiny'>{text}</Label>
    );
  }
}

class FixMsgSummary extends Component {
  formattedNumber(number) {
    return parseFloat(number).toLocaleString(); 
  }
  render() {
    const msg = this.props.msg;
    const msgtype = msg.tag(35).value;

    let summary = [];

    if (['D', 'F', 'G'].includes(msgtype)) {
      if (msg.hasTag(54)) { // buy or sell
        summary.push(<Label key='side' color='green' size='tiny'>{msg.tag(54).enum}</Label>);
      }

      if (msg.hasTag(38)) { // qty
        summary.push(<span key='qty'>{' ' + this.formattedNumber(msg.tag(38).value)}</span>);
      }

      if (msg.hasTag(55)) { // symbol
        summary.push(<Label key='sym' color='blue' size='tiny'>{' ' + msg.tag(55).value}</Label>); 
      }

      if (msg.hasTag(44)) { // px
        summary.push(<span key='px'>{' @ ' + this.formattedNumber(msg.tag(44).value)}</span>);
      }
    }

    if (msg.hasTag(58)) {
      summary = <span key='text'>{msg.tag(58).value}</span>;
    }

    return <span>{summary}</span>;
  }
} 

class FixTimeline extends Component {
  state = { 
    filterAdmin: false,
    filterHeartbeats: false 
  }
  onFilterAdmin = () => {
    ReactGA.event({category: 'filter', action: 'filter_admin'});
    this.setState({filterAdmin: !this.state.filterAdmin});
  }
  onFilterHeartbeats = () => {
    ReactGA.event({category: 'filter', action: 'filter_heartbeats'});
    this.setState({filterHeartbeats: !this.state.filterHeartbeats});
  }
  onFilterMessages = () => {
    ReactGA.event({category: 'filter', action: 'filter_messages'});
  }
  render() {
    const selected = this.props.selectedMessage;

    let rows = this.props.messages
      .filter(msg => {
        const type = msg.tag(35).value;
        if (this.state.filterHeartbeats && type === '0') {
          return false;
        }
        const cat = msg.msgcat();
        if (this.state.filterAdmin && cat === 'admin') {
          return false;
        }
        if (this.state.filterMessages) { 
          try {
            const regex = new RegExp(this.state.filterMessages, 'gi');
            const matches = (
              regex.test(msg.sendingTime()) 
              || regex.test(msg.tag(49).value) 
              || regex.test(msg.tag(56).value) 
              || regex.test(msg.msgtype())
              || regex.test(msg.tag(150).enum) 
              || regex.test(msg.tag(11).value) 
            );
            if (!matches) {
              return false;
            }
          } catch (e) {
            // filter is badly formed - do nothing
          }
        }
        return true;
      })
      .map((msg, idx) => {
        const isSelectedMessage = msg === selected;

        // look at ClOrdId and OrigClOrdId to find if two messages are related
        const msgOrderId = msg.hasTag(41) ? msg.tag(41).value : msg.hasTag(11) ? msg.tag(11).value : null;
        const selectedOrderId = selected.hasTag(41) ? selected.tag(41).value : selected.hasTag(11) ? selected.tag(11).value : null;
        const isRelatedMessage = msgOrderId != null && msgOrderId === selectedOrderId;

        return (
          <Table.Row key={idx} active={isSelectedMessage} positive={isRelatedMessage} onClick={e => this.props.onMessageSelected(msg)}>
            <Table.Cell>{msg.sendingTime()}</Table.Cell>
            <Table.Cell>{msg.tag(49).value}</Table.Cell>
            <Table.Cell>{msg.tag(56).value}</Table.Cell>
            <Table.Cell><FixMsgType msg={msg}/></Table.Cell>
            <Table.Cell>{msg.tag(11).value}</Table.Cell>
            <Table.Cell><FixMsgSummary msg={msg}/></Table.Cell>
          </Table.Row>
        );
      });
      
    return (
      <Container>
        <Menu attached='top' secondary size='tiny'>
          <Menu.Item>
            <Menu.Header as='h4'>Timeline</Menu.Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Checkbox label='Filter admin' onClick={this.onFilterAdmin} />
            </Menu.Item>
            <Menu.Item>
              <Checkbox label='Filter heartbeats' onClick={this.onFilterHeartbeats} />
            </Menu.Item>
            <Menu.Item>
              <Input icon='filter' type='search' placeholder='Filter messages...' onBlur={this.onFilterMessages} onChange={e => this.setState({filterMessages: e.target.value})}/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Table attached='bottom' compact='very' selectable size='small' striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Sender</Table.HeaderCell>
              <Table.HeaderCell>Target</Table.HeaderCell>
              <Table.HeaderCell>Message</Table.HeaderCell>
              <Table.HeaderCell>Client order id</Table.HeaderCell>
              <Table.HeaderCell>Detail</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>  
            {rows}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

class FixFieldName extends Component {
  render() {
    const msg = this.props.msg;
    const tag = this.props.tag;
    const def = tag.def;
    
    let fieldtype = def.tags.includes('header') ? 'header' : 'body';
    fieldtype = def.number === 35 ? 'type' : fieldtype;
    fieldtype = def.number === 150 ? 'type' : fieldtype;

    const tagdoc = FixDoc.tagdoc(msg, tag);

    let color = null;
    if (fieldtype === 'header') {
      // do nothing
    } else if (fieldtype === 'type') {
      color = 'green';
    } else {
      color = 'blue';
    }

    return (
      <Label as='a' color={color} href={tagdoc} size='tiny'>{def.name}</Label>
    );
  }
}

class FixFieldDescription extends Component {
  render() {
    let enumValue = this.props.tag.enum || ''; 
    enumValue = enumValue.replace(/_/g, ' ');
    return (<span>{enumValue}</span>);
  }
}

class FixMessageDetail extends Component {
  state = {
    filterHeader: false
  }
  onFilterHeader = () => {
    ReactGA.event({category: 'filter', action: 'filter_header'});
    this.setState({filterHeader: !this.state.filterHeader});
  }
  onFilterFields = () => {
    ReactGA.event({category: 'filter', action: 'filter_fields'});
  }
  render() {
    const msg = this.props.selectedMessage;
    const rows = msg.fieldList
      // map the field array to tags
      .map(field => {
          const tagnum = field[0];
          const value = field[1];
          return msg.tagWithValue(tagnum, value);
      })
      // filter out any header fields
      .filter(tag => {
        if (this.state.filterHeader && tag.def.tags.includes('header')) {
          return false;
        }
        if (this.state.filterFields) {
          try { 
            const regex = new RegExp(this.state.filterFields, 'gi');
            const matches = (regex.test(tag.def.number) || regex.test(tag.def.name) || regex.test(tag.enum) || regex.test(tag.value));
            if (!matches) {
              return false;
            }
          } catch (e) {
            // filter is badly formed - do nothing
          }
        }
        return true;
      })
      // build a list 
      .map((tag, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.Cell>{tag.def.number}</Table.Cell>
              <Table.Cell><FixFieldName msg={msg} tag={tag}/></Table.Cell>
              <Table.Cell>{tag.value}</Table.Cell>
              <Table.Cell><FixFieldDescription tag={tag}/></Table.Cell>
            </Table.Row>
        );
      });

    return (
      <Container>
        <Menu attached='top' secondary size='tiny'>
          <Menu.Item>
            <Menu.Header as="h4">Detail</Menu.Header>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Checkbox label='Filter header' onClick={this.onFilterHeader} />
            </Menu.Item>
            <Menu.Item>
              <Input icon='filter' type='search' placeholder='Filter fields...' onBlur={this.onFilterFields} onChange={e => this.setState({filterFields: e.target.value})} />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Table attached='bottom' compact='very' selectable size='small' striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tag</Table.HeaderCell>
              <Table.HeaderCell>Tag Description</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Value Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

class App extends Component {
  NULL_MESSAGE = { fieldList: [] }
  state = { messages: [], selectedMessage: this.NULL_MESSAGE };
  onMessages = (messages) => {
    this.setState({
      messages: messages,
      selectedMessage: messages.length > 0 ? messages[0] : this.NULL_MESSAGE
    });
  }
  onMessageSelected = (message) => {
    this.setState({selectedMessage: message});
  }
  render() {
    return (
      <Grid centered columns={16}>
        <Grid.Row>
          <Grid.Column width={14}>
            <h1>viewfix</h1>
            <FixInput onMessages={this.onMessages}/>
            <Divider/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={9}>
                  <FixTimeline messages={this.state.messages} selectedMessage={this.state.selectedMessage} onMessageSelected={this.onMessageSelected}/>
                </Grid.Column>
                <Grid.Column width={7}>
                  <FixMessageDetail selectedMessage={this.state.selectedMessage}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
