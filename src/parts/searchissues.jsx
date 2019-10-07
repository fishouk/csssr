import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap/";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { githubActions } from "../actions/fetchGithub";
import ReposDropDownContainer from "./reposdropdowncontainer";

class SearchIssues extends Component {
  state = {
    searchUserName: "",
    searchReposString: "",
    searchUserRepo: "",
    showReposDropdown: false,
    itemsOnPage: 25,
    submitted: false
  };

  trigerReposDropdown = bool => {
    this.setState({ showReposDropdown: bool });
  };

  loadReposList = () => {
    const { loadReposByUserName, dropLastRepos } = this.props;
    const { searchUserName } = this.state;
    dropLastRepos();
    this.setState({ searchReposString: "", searchUserRepo: "" });
    this.trigerReposDropdown(true);
    if (searchUserName) {
      loadReposByUserName(searchUserName);
    }
  };

  reposSearch = e => {
    this.setState({
      searchReposString: e.target.value.trim().toLowerCase()
    });
    this.handleChange(e);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { loadIssues, dropLastIssues, countIssuesForPagination } = this.props;
    this.setState({ submitted: true });

    let { searchUserName, searchUserRepo, itemsOnPage } = this.state;
    const { value } = e.target;
    if (value) {
      this.setState({ searchUserRepo: value });
      searchUserRepo = value;
    }

    if (searchUserName && searchUserRepo && itemsOnPage) {
      dropLastIssues();
      countIssuesForPagination(searchUserName, searchUserRepo, itemsOnPage);
      loadIssues(searchUserName, searchUserRepo, itemsOnPage);
      this.trigerReposDropdown(false);
    }

    e.preventDefault();
  };

  render() {
    const {
      searchUserName,
      searchUserRepo,
      showReposDropdown,
      searchReposString,
      itemsOnPage,
      submitted
    } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <Form className="search_issues">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User name"
                  aria-label="User name"
                  name="searchUserName"
                  value={searchUserName}
                  onChange={this.handleChange}
                />
                <ReposDropDownContainer
                  searchUserName={searchUserName}
                  reposSearch={this.reposSearch}
                  searchUserRepo={searchUserRepo}
                  showReposDropdown={showReposDropdown}
                  searchReposString={searchReposString}
                  trigerReposDropdown={this.trigerReposDropdown}
                  loadReposList={this.loadReposList}
                  handleSubmit={this.handleSubmit}
                />
                <select
                  className="form-control"
                  name="itemsOnPage"
                  value={itemsOnPage}
                  onChange={this.handleChange}
                >
                  <option onClick={this.handleSubmit}>25</option>
                  <option>50</option>
                  <option>75</option>
                  <option>100</option>
                </select>
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-primary"
                    onClick={this.handleSubmit}
                  >
                    Search isssues
                  </button>
                </div>
              </div>
              {submitted && !searchUserName && (
                <div className="text-danger">User name is required</div>
              )}
              {submitted && !searchUserRepo && (
                <div className="text-danger">Repo name is required</div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadIssues: githubActions.getIssues,
      dropLastIssues: githubActions.dropLastIssues,
      countIssuesForPagination: githubActions.countIssuesForPagination,
      loadReposByUserName: githubActions.loadReposByUserName,
      dropLastRepos: githubActions.dropLastRepos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIssues);
