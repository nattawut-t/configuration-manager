import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { Icon } from 'react-fa'

import Peer from '../../containers/configurationManagements/Peer'
import Chaincode from '../../containers/configurationManagements/Chaincode'
import Database from '../../containers/configurationManagements/Database'
import Api from '../../containers/configurationManagements/Api'

const map = {
  1: () => <Peer />,
  2: () => <Chaincode />,
  3: () => <Database />,
  4: () => <Api />,
}
const firstStep = 1
const lastStep = 4

class Index extends Component {
  state = {
    modal: false,
    step: 1,
    CurrentComponent: () => <Peer />,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  cancel = () => { }

  back = step => {
    if (step === firstStep) return false

    console.log('step', step)
    const prevStep = --step
    console.log('nextStep', prevStep)
    const CurrentComponent = map[prevStep]

    return this.setState({
      step: prevStep,
      CurrentComponent: () => <CurrentComponent />,
    })
  }

  next = step => {
    if (step === lastStep) return false

    console.log('step', step)
    const nextStep = ++step
    console.log('nextStep', nextStep)
    const CurrentComponent = map[nextStep]

    return this.setState({
      step: nextStep,
      CurrentComponent: () => <CurrentComponent />,
    })
  }

  render() {
    const { loading } = this.props
    const { step, CurrentComponent } = this.state

    return (
      <div>
        <Modal
          isOpen
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>OriginCert - Configuration Wizard</ModalHeader>
          <ModalBody>
            <CurrentComponent />
          </ModalBody>
          <ModalFooter>

            {step > firstStep ?
              <Button
                name="back"
                color="primary"
                className="px-4"
                onClick={() => this.back(step)}
              >
                <Icon spin name={loading ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp;Back
              </Button> : ''
            }

            {loading ?
              <Button
                className="px-4"
                onClick={this.cancel}
              >
                Cancel
              </Button> : ''
            }

            &nbsp;&nbsp;
            <Button
              name="next"
              color="primary"
              className="px-4"
              onClick={() => this.next(step)}
            >
              <Icon spin name={loading ? 'circle-o-notch' : ''} size="lg" />&nbsp;&nbsp; {step === lastStep ? 'Finish' : 'Next'}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Index
