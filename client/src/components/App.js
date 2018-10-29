import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import ChatBox from './ChatBox';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        {/* <a href="\auth\google">Login With Google+</a> */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />            
            <Route exact path="/chatbox" component={ this.props.auth == false ? Landing : ChatBox } />
            <Route path="/survey/new" component={ this.props.auth == false ? Landing : SurveyNew} />             
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
