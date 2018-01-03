import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // Label,
  Input,
} from 'reactstrap'
import { Icon } from 'react-fa'
// import { CopyToClipboard } from 'react-copy-to-clipboard'

// const url = path => `${window.location.origin}/#/url/recover/${path}`
const required = value => (value ? undefined : 'Required')
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) =>
  <div>
    <Input
      {...input}
      type={type}
      placeholder={label}
      required
    />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>

class Peer extends Component {
  state = { copied: false }

  render() {
    const { shortening, cancel, history } = this.props

    return (
      <div className="animated fadeIn">

        <Card>
          <CardHeader>
            <strong>Peer Setting</strong>
            <small> configuration of peer information</small>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12">
                <FormGroup>
                  {/* <Label htmlFor="longUrl">Long URL</Label> */}
                  <Field
                    name="ownServer"
                    component={renderField}
                    validate={[required]}
                    label="Own Server"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  {/* <Label htmlFor="longUrl">Long URL</Label> */}
                  <Field
                    name="peerServer"
                    component={renderField}
                    validate={[required]}
                    label="Peer Server"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  {/* <Label htmlFor="longUrl">Long URL</Label> */}
                  <Field
                    name="chaincodeId"
                    component={renderField}
                    validate={[required]}
                    label="Chaincode ID"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="form-actions" style={{ textAlign: 'right' }}>

              {shortening ?
                <Button
                  className="px-4"
                  onClick={cancel}
                >
                  Cancel
                </Button> : ''
              }
              &nbsp;&nbsp;
              <Button
                name="submit"
                color="primary"
                className="px-4"
                onClick={() => history.push('/configs/profile')}
              >
                <Icon spin name={shortening ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Next
              </Button>

            </div>
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
