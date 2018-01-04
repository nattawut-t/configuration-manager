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
  Form,
  Label,
} from 'reactstrap'

const Chaincode = () =>
  <div className="animated fadeIn">

    <Card>
      <CardHeader>
        <strong>Step 2: Chaincode Information</strong>
        {/* <small> - configuration for chaincode</small> */}
      </CardHeader>
      <CardBody>
        {/* <Row>
          <Col xs="12">
            <FormGroup>
              <InputGroup>
                <Input placeholder="Chaincode ID" />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <FormGroup>
              <InputGroup>
                <Input placeholder="Chaincode Version" />
              </InputGroup>
              leave blank for default latest version
            </FormGroup>
          </Col>
        </Row> */}

        <Form>
          <FormGroup>
            <Label for="exampleEmail">Chaincode ID *:</Label>{'  '}
            <Input placeholder="Chaincode ID" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Chaincode Version:</Label>{'  '}
            <Input placeholder="Chaincode Version" />
          </FormGroup>
          leave &#34;Chaincode Version&#34; blank for default latest version
        </Form>
      </CardBody>
    </Card>
  </div >

const form = reduxForm({
  form: 'chaincodeForm',
})(Chaincode)

export default withRouter(form)
