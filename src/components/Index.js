import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert'

import NotFound from '../components/errors/NotFound'
import InternalServerError from '../components/errors/InternalServerError'

import Peer from '../containers/configurationManagements/Peer'
import Chaincode from '../containers/configurationManagements/Chaincode'
import Database from '../containers/configurationManagements/Database'
import Api from '../containers/configurationManagements/Api'

import Login from '../containers/Login'
import Layout from '../containers/Layout'
import Wizard from './wizards/Index'

const Index = () =>
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/wizard" name="Login" component={Wizard} />
        <Route exact path="/login" name="Login" component={Login} />
        <Route exact path="/configs/peer" name="Peer" render={() => <Layout><Peer /></Layout>} />
        <Route exact path="/configs/chaincode" name="Peer" render={() => <Layout><Chaincode /></Layout>} />
        <Route exact path="/configs/database" name="Profile" render={() => <Layout><Database /></Layout>} />
        <Route exact path="/configs/api" name="Recovery" render={() => <Layout><Api /></Layout>} />
        <Route exact path="/404" name="NotFound" component={NotFound} />
        <Route exact path="/500" name="InternalServerError" component={InternalServerError} />
        <Redirect from="/" to="/wizard" />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
    <Alert stack={{ limit: 3 }} />
  </div>

export default Index
