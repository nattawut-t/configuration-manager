import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert'

import NotFound from '../components/errors/NotFound'
import InternalServerError from '../components/errors/InternalServerError'
// import UrlRecover from '../containers/UrlRecover'
// import Email from '../containers/Email'
import Peer from '../containers/configs/Peer'
import Profile from '../containers/configs/Profile'
import Api from '../containers/configs/Api'

import Login from '../containers/Login'
import Layout from '../containers/Layout'

const Index = () =>
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login" component={Login} />
        <Route exact path="/configs/peer" name="Peer" render={() => <Layout><Peer /></Layout>} />
        <Route exact path="/configs/profile" name="Profile" render={() => <Layout><Profile /></Layout>} />
        <Route exact path="/configs/api" name="Recovery" render={() => <Layout><Api /></Layout>} />
        <Route exact path="/404" name="NotFound" component={NotFound} />
        <Route exact path="/500" name="InternalServerError" component={InternalServerError} />
        <Redirect from="/" to="/login" />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
    <Alert stack={{ limit: 3 }} />
  </div>

export default Index
