import React from 'react'
import { withRouter } from 'react-router'
import { reduxForm } from 'redux-form'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroup,
  Input,
} from 'reactstrap'

const Peer = () =>
  <div className="animated fadeIn">
    <Card>
      <CardHeader>
        <strong>Step 1: Peer</strong>
        <small> - configuration for peer</small>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs="12">
            <FormGroup>
              <InputGroup>
                <Input placeholder="Credential" />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <FormGroup>
              <InputGroup>
                <Input placeholder="Channel" />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div >

const form = reduxForm({
  form: 'peerForm',
})(Peer)

export default withRouter(form)
