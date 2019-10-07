import React from "react";
import { connect } from "react-redux";
import { getRepos } from "../reducers/index";
import ReposDropDown from "./reposdropdown";

function SearchIssues(props) {
  let { repos } = props;
  const {
    searchUserRepo,
    searchReposString,
    reposSearch,
    trigerReposDropdown,
    loadReposList,
    showReposDropdown,
    handleSubmit
  } = props;

  if (searchReposString.length > 0) {
    repos = repos.filter(repos => {
      return repos.name.toLowerCase().match(searchReposString);
    });
  }

  return (
    <div className="repos_dropdown form-control ">
      <input
        type="text"
        autoComplete="off"
        className="repos_dropdown_input"
        placeholder="Repo name"
        aria-label="Repo name"
        list="searchUserRepo"
        name="searchUserRepo"
        value={searchUserRepo}
        onChange={reposSearch}
        onClick={loadReposList}
        onBlur={() => trigerReposDropdown(false)}
      />
      {showReposDropdown ? (
        <div className="repos_dropdown_menu">
          <ReposDropDown filteredRepos={repos} handleSubmit={handleSubmit} />
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => ({
  repos: getRepos(state)
});

export default connect(mapStateToProps)(SearchIssues);
