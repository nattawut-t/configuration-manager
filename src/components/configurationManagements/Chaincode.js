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

// const required = value => (value ? undefined : 'Required')
// const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning },
// }) =>
//   <div>
//     <Input
//       {...input}
//       type={type}
//       placeholder={label}
//       required
//     />
//     {touched &&
//       ((error && <span>{error}</span>) ||
//         (warning && <span>{warning}</span>))}
//   </div>

const Chaincode = (/*{ shortening, cancel, history }*/) =>
  <div className="animated fadeIn">

    <Card>
      <CardHeader>
        <strong>Step 2: Chaincode Information</strong>
        {/* <small> - configuration for chaincode</small> */}
      </CardHeader>
      <CardBody>
        <Row>
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
        </Row>
        {/* <div className="form-actions" style={{ textAlign: 'right' }}>

          <Button
            name="pervious"
            color="primary"
            className="px-4"
            onClick={() => history.push('/configs/peer')}
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
            onClick={() => history.push('/configs/api')}
          >
            <Icon spin name={shortening ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Next
          </Button>

        </div> */}
      </CardBody>
    </Card>
  </div >

const form = reduxForm({
  form: 'chaincodeForm',
})(Chaincode)

export default withRouter(form)
