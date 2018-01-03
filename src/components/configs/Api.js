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
  Label,
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

class Profile extends Component {
  state = { copied: false }

  render() {
    const { shortening, cancel, history } = this.props

    return (
      <div className="animated fadeIn">

        <Card>
          <CardHeader>
            <strong>Company Profile</strong>
            <small> configuration of peer information</small>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Field
                    name="server"
                    component={renderField}
                    validate={[required]}
                    label="Server"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Label htmlFor="longUrl">HTTPS Certificate</Label>
                <FormGroup>
                  <Field
                    name="certificate"
                    component={renderField}
                    validate={[required]}
                    label="HTTPS Certificate"
                    type="file"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Label htmlFor="longUrl">HTTPS Key</Label>
                <FormGroup>
                  <Field
                    name="certificate"
                    component={renderField}
                    validate={[required]}
                    label="HTTPS Key"
                    type="file"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  {/* <Field
                    name="certificate"
                    component={renderField}
                    validate={[required]}
                    label="Authentication Type"
                    type="select"
                  /> */}
                  <select>
                    <option value="grapefruit">Authentication Type</option>
                    <option value="lime">API Key</option>
                    <option selected value="coconut">JWT</option>
                    <option value="mango">LDAP</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <div className="form-actions" style={{ textAlign: 'right' }}>

              <Button
                name="pervious"
                color="primary"
                className="px-4"
                onClick={() => history.push('/configs/profile')}
              >
                <Icon spin name={shortening ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Back
              </Button>
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
                name="next"
                color="primary"
                className="px-4"
                onClick={() => { }}
              >
                <Icon spin name={shortening ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Finish
              </Button>

            </div>
          </CardBody>
        </Card>
      </div >
    )
  }
}

const form = reduxForm({
  form: 'profileForm',
})(Profile)

export default withRouter(form)
