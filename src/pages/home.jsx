import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import HomeInro from "../parts/homeintro";
import SearchIssues from "../parts/searchissues";
import Preload from "../parts/preload";
import IssuesList from "../parts/issueslist";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeInro />
        <SearchIssues />
        <Preload>
          <IssuesList />
        </Preload>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <ul className="pagination">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <span className="page-link"> 2 </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    5
                  </a>
                </li>
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
