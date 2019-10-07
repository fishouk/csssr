import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getError,
  getIssuesPending,
  getPendingMessages
} from "../reducers/index";
import { Row, Col, Container } from "react-bootstrap/";

class Preload extends Component {
  render() {
    const { error, isLoading, loadingMessages, children } = this.props;
    if (error || isLoading) {
      return (
        <Container>
          <Row>
            <Col>
              {error ? (
                <React.Fragment>
                  <p>
                    Error code: <b>{error.status}</b>.
                  </p>
                  <p>
                    Error message: <b>{error.statusText || null}</b>.
                  </p>
                </React.Fragment>
              ) : null}
              {isLoading ? (
                <React.Fragment>
                  <p>Start to load issues...</p>
                  {loadingMessages.map((message, index) => (
                    <p key={index}>{message}</p>
                  ))}
                </React.Fragment>
              ) : null}
            </Col>
          </Row>
        </Container>
      );
    }
    return children;
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  isLoading: getIssuesPending(state),
  loadingMessages: getPendingMessages(state)
});

export default connect(mapStateToProps)(Preload);
