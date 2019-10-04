export const ISSUES_PENDING = 'ISSUES_PENDING';
export const ISSUES_STOP_PENDING = 'ISSUES_STOP_PENDING';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const DROP_ISSUES = 'DROP_ISSUES';
export const ISSUES_LOADING_MESSAGES = 'ISSUES_LOADING_MESSAGES';
export const GET_ISSUES_ERROR = 'GET_ISSUES_ERROR';
export const COUNT_ISSUES = 'COUNT_ISSUES';
export const LOAD_REPOS = 'LOAD_REPOS';
export const DROP_REPOS = 'DROP_REPOS';

export function issuesPending() {
    return {
        type: ISSUES_PENDING
    }
}

export function getIssuesSuccess(issues) {
    return {
        type: GET_ISSUES_SUCCESS,
        payload: issues
    }
}

export function dropIssues() {
    return {
        type: DROP_ISSUES
    }
}

export function issuesLoadingMessages(message) {
    return {
        type: ISSUES_LOADING_MESSAGES,
        payload: message
    }
}

export function issuesStopPending() {
    return {
        type: ISSUES_STOP_PENDING
    }
}

export function getIssuesError(error) {
    return {
        type: GET_ISSUES_ERROR,
        payload: error
    }
}

export function countIssues(total) {
    return {
        type: COUNT_ISSUES,
        payload: total
    }
}

export function loadRepos(repos) {
    return {
        type: LOAD_REPOS,
        payload: repos
    }
}

export function dropRepos() {
    return {
        type: DROP_REPOS
    }
}

