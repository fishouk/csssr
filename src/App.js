import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./parts/navigation";
import Home from "./pages/home";
import IssueContainer from "./parts/issueContainer";
import Page404 from "./pages/404";
import { connect } from "react-redux";
import { getIssues } from "./reducers/index";

class App extends Component {
  render() {
    const { match, issues } = this.props;
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/issue/:id"
            render={props => (
              <IssueContainer
                issues={issues}
                issueId={parseInt(props.match.params.id, 10)}
                {...props}
              />
            )}
          />
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  issues: getIssues(state)
});

export default connect(mapStateToProps)(App);
