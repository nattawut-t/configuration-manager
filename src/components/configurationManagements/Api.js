import React from 'react'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import {
  // Row,
  // Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // InputGroup,
  Input,
  Label,
  Form,
} from 'reactstrap'

const Api = () =>
  <div className="animated fadeIn">
    <Card>
      <CardHeader>
        <strong>Step 1: API Information</strong>
        {/* <small> - configuration for peer</small> */}
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Server *:</Label>{'  '}
            <Input placeholder="Server" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Https Certificate *:</Label>{'  '}
            <Input placeholder="Https Certificate" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Https Key *:</Label>{'  '}
            <Input placeholder="Https Key" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Authentication Type *:</Label>{'  '}
            <select name="method" id="method" placeholder="Method" >
              <option>Authentication Type</option>
              <option>API Key</option>
              <option>Jwt</option>
              <option>LDAP</option>
            </select>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  </div >

const form = reduxForm({
  form: 'peerForm',
})(Api)

export default withRouter(form)
