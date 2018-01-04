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

class Peer extends Component {
  state = {
    credentialFilename: '',
  }

  handleFileChange = (name, value) => this.setState({
    [name]: value,
  })

  render() {
    const { credentialFilename } = this.state

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Step 1: Peer Information</strong>
            {/* <small> - configuration for peer</small> */}
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Row>
                  <Col xs="9">
                    <Label for="exampleEmail" readOnly>Configuration File *:</Label>{'  '}
                    <Input
                      placeholder="Configuration File"
                      value={credentialFilename}
                    />
                  </Col>
                  <Col xs="3">
                    <Label for="exampleEmail" >&nbsp;</Label>{'  '}
                    <Input
                      type="file"
                      placeholder="Port"
                      onChange={({ target: { value } }) => this.handleFileChange('credentialFilename', value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Channel Name *:</Label>{'  '}
                <Input placeholder="Channel Name" />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div >
    )
  }
}

const form = reduxForm({
  form: 'peerForm',
})(Peer)

export default withRouter(form)
