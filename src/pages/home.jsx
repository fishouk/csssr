import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import HomeInro from "../parts/homeIntro";
import SearchIssues from "../parts/searchIssues";
import Preload from "../parts/preload";
import IssuesList from "../parts/issuesList";

function Home(props) {
  return (
    <React.Fragment>
      <HomeInro />
      <SearchIssues {...props} />

      <Preload>
        <IssuesList />
      </Preload>
      
    </React.Fragment>
  );
}

export default Home;
