import React, { Component } from 'react';
import './App.css';
import { fixdict } from './fixdict';
import { Button, Container, Divider, Form, Grid, Header, Table } from 'semantic-ui-react'

class FixInput extends Component {
  render() {
    return (
      <Form>
        <Form.TextArea />
        <Button>Process</Button>
        <Button>Clear</Button>
        <Button>Sample Data</Button>
      </Form>
    )
  }
}

class FixTimeline extends Component {
  render() {
    return (
      <Container>
        <Header as="h3">Timeline</Header>
        <Table>
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
        <Table>
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
  render() {
    return (
      <Container>
        <h1>viewfix</h1>
        <FixInput/>
        <Divider/>
        <Grid>
          <Grid.Row>
          <Grid.Column width={9}>
            <FixTimeline/>
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
