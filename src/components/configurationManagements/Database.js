import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // InputGroup,
  Input,
  Label,
  Form,
} from 'reactstrap'

class database extends Component {
  state = {
    datasource: 0,
  }

  handleChange = (name, value) => {
    console.log(name, value, typeof value)
    return this.setState({
      [name]: Number.parseInt(value) || 0,
    })
  }

  render() {
    const { datasource } = this.state
    return (
      <div className="animated fadeIn">

        <Card>
          <CardHeader>
            <strong>Step 3: Database Connection</strong>
            {/* <small> - configuration for database</small> */}
          </CardHeader>
          <CardBody>
            <FormGroup tag="fieldset">
              {/* <legend>Step 3: Database Connection</legend> */}
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="datasource"
                    value={0}
                    onChange={({ target: { name, value } }) => this.handleChange(name, value)}
                    checked={datasource === 0}
                  />{' '}
                  &nbsp;Use built-in maria database (default)
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="datasource"
                    value={1}
                    onChange={({ target: { name, value } }) => this.handleChange(name, value)}
                    checked={datasource === 1}
                  />{' '}
                  &nbsp;Use external maria database
                </Label>
              </FormGroup>
            </FormGroup>

            {datasource === 1 ?
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Method *:</Label>{'  '}
                  <select name="method" id="method" placeholder="Method" >
                    <option>Standard (TCP/IP)</option>
                    <option>Local Socket/Pipe</option>
                    <option>Standard TCP/IP over SSH</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col xs="9">
                      <Label for="exampleEmail">Host *:</Label>{'  '}
                      <Input placeholder="Host" />
                    </Col>
                    <Col xs="3">
                      <Label for="exampleEmail" >Port:</Label>{'  '}
                      <Input placeholder="Port" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Username *:</Label>{'  '}
                  <Input placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password *:</Label>{'  '}
                  <Input placeholder="Password" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Default Database:</Label>{'  '}
                  <Input placeholder="Default Database" />
                </FormGroup>
              </Form> : ''
            }
          </CardBody>
        </Card>
      </div >
    )
  }
}

const form = reduxForm({
  form: 'databaseForm',
})(database)

export default withRouter(form)
