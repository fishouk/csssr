import React, { Component } from "react";
import { connect } from 'react-redux';
import { getError, getIssuesPending, getPendingMessages } from '../reducers/index';

import { Row, Col } from 'react-bootstrap/';

class Preload extends Component {
  render() {
    const { error, isLoading, loadingMessages, children } = this.props;
    if (error) {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        {error.status? (<p>Error code: <b>{error.status}</b>.</p>): null}
                        {error.statusText? (<p>Error message: <b>{error.statusText || null}</b>.</p>): null}
                    </Col>
                </Row>
            </React.Fragment>            
        );
    }
    if (isLoading) {
        return (
            <React.Fragment>
                <Row>
                    <Col className="issues_pending">
                        <p>Start to load issues...</p>
                        {loadingMessages? loadingMessages.map( (message, index) => <p key={index}>{message}</p>) : null}
                    </Col>
                </Row>
            </React.Fragment> 
        );
    }
    return true;
    // return children;
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getIssuesPending(state),
  loadingMessages: getPendingMessages(state),
});

export default connect(mapStateToProps)(Preload);