import {
  issuesPending,
  getIssuesSuccess,
  issuesLoadingMessages,
  issuesStopPending,
  getIssuesError,
  dropIssues,
  countIssues,
  loadRepos,
  dropRepos
} from "./index";
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export const githubActions = {
  getIssues,
  countIssuesForPagination,
  dropLastIssues,
  loadReposByUserName,
  dropLastRepos
};

function getIssues(
  searchUserName,
  searchUserRepo,
  itemsOnPage = 100,
  page = 1
) {
  const url = `${GITHUB_API_URL}/repos/${searchUserName}/${searchUserRepo}/issues?state=open&per_page=${itemsOnPage}&page=${page}`;
  return dispatch => {
    dispatch(issuesPending());
    axios
      .get(url)
      .then(result => {
        if (result.data && result.data.length) {
          dispatch(getIssuesSuccess(result.data));
          dispatch(
            issuesLoadingMessages(
              `№${page}. Good loading result. Got ${result.data.length} issues from github`
            )
          );
          dispatch(issuesLoadingMessages(`Stop loading. Got all data.`));
          dispatch(issuesStopPending());
        } else {
          dispatch(issuesLoadingMessages(`Stop loading. No data.`));
          dispatch(issuesStopPending());
        }
      })
      .catch(error => dispatch(getIssuesError(error.response)));
  };
};

function countIssuesForPagination(
  searchUserName,
  searchUserRepo,
  itemsOnPage = 100,
  page = 1
) {
  const url = `${GITHUB_API_URL}/repos/${searchUserName}/${searchUserRepo}/issues?state=open&per_page=${itemsOnPage}&page=${page}`;
  return dispatch => {
    axios
      .get(url)
      .then(result => {
        if (result.data && result.data.length) {
          resumeGetIssues(
            dispatch,
            searchUserName,
            searchUserRepo,
            itemsOnPage,
            ++page
          );
        } else {
          dispatch(countIssues(page));
        }
      })
      .catch(error => dispatch(getIssuesError(error.response)));
  };
};

function resumeGetIssues(
  dispatch,
  searchUserName,
  searchUserRepo,
  itemsOnPage,
  page
) {
  return dispatch(
    countIssuesForPagination(searchUserName, searchUserRepo, itemsOnPage, page)
  );
};

function loadReposByUserName(userName) {
  const url = `${GITHUB_API_URL}/users/${userName}/repos`;

  return dispatch => {
    axios
      .get(url)
      .then(result => {
        if (result.data && result.data.length) {
          dispatch(loadRepos(result.data));
        }
      })
      .catch(error => console.log(error));
  };
};

function dropLastIssues() {
  return dispatch => dispatch(dropIssues());
};

function dropLastRepos() {
  return dispatch => dispatch(dropRepos());
};