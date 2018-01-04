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

const Peer = (/*{ shortening, cancel, history }*/) =>
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
        {/* <div className="form-actions" style={{ textAlign: 'right' }}>

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
            onClick={() => history.push('/configs/chaincode')}
          >
            <Icon spin name={shortening ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Next
          </Button>

        </div> */}
      </CardBody>
    </Card>
  </div >

const form = reduxForm({
  form: 'peerForm',
})(Peer)

export default withRouter(form)
