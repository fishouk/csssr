import {issuesPending, getIssuesSuccess, issuesLoadingMessages, issuesStopPending, getIssuesError, dropIssues, countIssues, loadRepos, dropRepos} from './index';
import axios from 'axios';

export const githubActions = {
  getIssues,
  countIssuesForPagination,
  dropLastIssues,
  loadReposByUserName,
  dropLastRepos,
};


function getIssues(search_user_name, search_user_repo, items_on_page = 100, page = 1) {
    const url = `https://api.github.com/repos/${search_user_name}/${search_user_repo}/issues?state=open&per_page=${items_on_page}&page=${page}`;
    return dispatch => {
      dispatch(issuesPending());
      axios.get(url)
      .then(result =>{
          if (result.data && result.data.length) {
              dispatch(getIssuesSuccess(result.data));  
              dispatch(issuesLoadingMessages(`№${page}. Good loading result. Got ${result.data.length} issues from github`)); 
              dispatch(issuesLoadingMessages(`Stop loading. Got all data.`));  
              dispatch(issuesStopPending());
          }  else {
              dispatch(issuesLoadingMessages(`Stop loading. No data.`));  
              dispatch(issuesStopPending());
          }      
      })
    .catch(error => dispatch(getIssuesError(error.response)) );    
    }  
}

function countIssuesForPagination(search_user_name, search_user_repo, items_on_page = 100, page = 1 ) {
    const url = `https://api.github.com/repos/${search_user_name}/${search_user_repo}/issues?state=open&per_page=${items_on_page}&page=${page}`;
    return dispatch => {
      axios.get(url)
      .then(result =>{
          if (result.data && result.data.length) {
                resumeGetIssues(dispatch, search_user_name, search_user_repo, items_on_page, ++page);
          } else {
                dispatch(countIssues(page));
          }        
      })
    .catch(error => dispatch(getIssuesError(error.response)) );    
    }  
}

function resumeGetIssues(dispatch, search_user_name, search_user_repo, items_on_page, page ) {
    return dispatch(countIssuesForPagination(search_user_name, search_user_repo, items_on_page, page));
}

function loadReposByUserName(user_name) {
    const url = `https://api.github.com/users/${user_name}/repos`;

    return dispatch => {
        axios.get(url)
        .then(result =>{
            if (result.data && result.data.length) {
                dispatch(loadRepos(result.data));  
            }  
        })
      .catch(error => console.log(error) );    
    } 
}

function dropLastIssues() {
    return dispatch => dispatch(dropIssues());
}
function dropLastRepos() {
    return dispatch => dispatch(dropRepos());
}
