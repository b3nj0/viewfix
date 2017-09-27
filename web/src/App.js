import React, { Component } from 'react';
import './App.css';
import { parseFixData } from './fixparser';
import { Button, Container, Divider, Form, Grid, Header, Table } from 'semantic-ui-react'

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
    this.props.onFixMessages(messages);
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

class FixTimeline extends Component {
  render() {
    let rows = this.props.fixMessages.map((msg, idx) => {
        return (
          <Table.Row key={idx}>
            <Table.Cell>{msg.sendingTime()}</Table.Cell>
            <Table.Cell>{msg.tag(49)}</Table.Cell>
            <Table.Cell>{msg.tag(56)}</Table.Cell>
            <Table.Cell>{msg.msgtype()}</Table.Cell>
            <Table.Cell>{msg.tag(11)}</Table.Cell>
            <Table.Cell>{''}</Table.Cell>
          </Table.Row>
        );
    });

    return (
      <Container>
        <Header as="h3">Timeline</Header>
        <Table selectable>
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


class FixMessageDetail extends Component {
  render() {
    return (
      <Container>
        <Header as="h3">Detail</Header>
        <Table selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tag</Table.HeaderCell>
              <Table.HeaderCell>Tag Description</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Value Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

class App extends Component {
  state = { fixMessages: [] };
  onFixMessages = (messages) => {
    this.setState({fixMessages: messages});
  }
  onFixMessageSelected = (message) => {
    this.setState({fixMessage: message});
  }
  render() {
    return (
      <Container>
        <h1>viewfix</h1>
        <FixInput onFixMessages={this.onFixMessages}/>
        <Divider/>
        <Grid>
          <Grid.Row>
          <Grid.Column width={9}>
            <FixTimeline fixMessages={this.state.fixMessages}/>
          </Grid.Column>
          <Grid.Column width={7}>
            <FixMessageDetail/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
