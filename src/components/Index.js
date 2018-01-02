import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert'

import NotFound from '../components/errors/NotFound'
import InternalServerError from '../components/errors/InternalServerError'
import UrlRecover from '../containers/UrlRecover'
import Email from '../containers/Email'
import UrlShortener from '../containers/UrlShortener'
import Login from '../containers/Login'
import Layout from '../containers/Layout'

const Index = () =>
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login" component={Login} />
        <Route exact path="/configs/peer" name="Peer" render={() => <Layout><UrlShortener /></Layout>} />
        <Route exact path="/configs/profile" name="Profile" render={() => <Layout><Email /></Layout>} />
        <Route exact path="/configs/api" name="Recovery" component={UrlRecover} />
        <Route exact path="/404" name="NotFound" component={NotFound} />
        <Route exact path="/500" name="InternalServerError" component={InternalServerError} />
        <Redirect from="/" to="/login" />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
    <Alert stack={{ limit: 3 }} />
  </div>

export default Index
