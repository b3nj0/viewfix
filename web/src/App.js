import React, { Component } from 'react';
import './App.css';
import { parseFixData } from './fixparser';
import { Button, Container, Divider, Form, Grid, Header, Label, Table } from 'semantic-ui-react'

class FixInput extends Component {
  state = { fixData: '' };
  onFixTextChange = (e, data) => {
    this.onParseFix(data.value);
  }
  onClear = () => {
    this.onParseFix('');
  }
  onSampleData = () => {
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
        <Form.TextArea onChange={this.onFixTextChange} placeholder={'Paste FIX messages here'} name='fixData' value={fixData} />
        <Button>Process</Button>
        <Button onClick={this.onClear}>Clear</Button>
        <Button onClick={this.onSampleData}>Sample Data</Button>
      </Form>
    )
  }
}

class FixMsgType extends Component {
  render() {
    const msg = this.props.msg;
    const msgtype = msg.tag(35).value;
    const name = msg.msgtype();
    const msgcat = msg.msgcat();

    let lbl = {}
    let text = name;

    if (msgtype === '8') { // execution report
      // fid: 150 = exec type
      text = 'ER ' + msg.tag(150).enum.replace(/_/g, ' ');
      let value = msg.tag(150).value;
      if (['0', '8'].includes(value)) {
        lbl.color = 'red';
      } else if (['2', 'F'].includes(value)) {
        lbl.color = 'blue';
      } else {
        lbl.color = 'teal';
      }
    } else if (msgtype === 'AE') { // trade capture report
      lbl.color = 'violet';
      // fid: 573 = match status
      text = 'TCR ' + msg.tag(573).enum.replace(/_/g, ' '); 
    } else if (msgtype === 'D') { // new order
      lbl.color = 'green';
    } else if (msgtype === '3') { // reject
      lbl.color = 'red';
    } else if (msgcat === 'app') { // application message 
      lbl.color = 'teal';
    }

    return (
      <Label {...lbl}>{text}</Label>
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
        summary.push(<Label key='side' color='green'>{msg.tag(54).enum}</Label>);
      }

      if (msg.hasTag(38)) { // qty
        summary.push(<span key='qty'>{' ' + this.formattedNumber(msg.tag(38).value)}</span>);
      }

      if (msg.hasTag(55)) { // symbol
        summary.push(<Label key='sym' color='blue'>{' ' + msg.tag(55).value}</Label>); 
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
  render() {
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
        return true;
      })
      .map((msg, idx) => {
        return (
          <Table.Row key={idx} active={msg === this.props.selectedMessage} onClick={e => this.props.onMessageSelected(msg)}>
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
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3">Timeline</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={8}>
              <Form>
                <Form.Group inline>
                  <Form.Checkbox label='Filter admin' onClick={e => this.setState({filterAdmin: !this.state.filterAdmin})} />
                  <Form.Checkbox label='Filter heartbeats' onClick={e => this.setState({filterHeartbeats: !this.state.filterHeartbeats})} />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Table selectable size='small' striped>
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
    const def = this.props.tag.def;
    
    let fieldtype = def.tags.includes('header') ? 'header' : 'body';
    fieldtype = def.number === 35 ? 'type' : fieldtype;
    fieldtype = def.number === 150 ? 'type' : fieldtype;

    let lbl = {};
    if (fieldtype === 'header') {
      // do nothing
    } else if (fieldtype === 'type') {
      lbl.color = 'green';
    } else {
      lbl.color = 'blue';
    }

    return (
      <Label {...lbl}>{def.name}</Label>
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
        return true;
      })
      // build a list 
      .map((tag, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.Cell>{tag.def.number}</Table.Cell>
              <Table.Cell><FixFieldName tag={tag}/></Table.Cell>
              <Table.Cell>{tag.value}</Table.Cell>
              <Table.Cell><FixFieldDescription tag={tag}/></Table.Cell>
            </Table.Row>
        );
      });

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              <Header as="h3">Detail</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Form>
                <Form.Checkbox label='Filter header' onClick={e => this.setState({filterHeader: !this.state.filterHeader})} />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Table selectable size='small' striped>
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