import {
    ISSUES_PENDING,
    GET_ISSUES_SUCCESS,
    ISSUES_LOADING_MESSAGES,
    DROP_ISSUES,
    GET_ISSUES_ERROR,
    ISSUES_STOP_PENDING,
    COUNT_ISSUES,
    LOAD_REPOS,
    DROP_REPOS
  } from '../actions/index'
import initialState from "../store/initialState";

const Reducer = (state = initialState, action) => {  
    switch(action.type) {
        case ISSUES_PENDING: 
            return {
                ...state,
                loadingMessages: [],
                isLoading: true
            }
        case ISSUES_STOP_PENDING: 
            return {
                ...state,
                isLoading: false
            }
        case GET_ISSUES_SUCCESS:
            return {                
                ...state,
                error: null,
                issues: action.payload
            }
        case DROP_ISSUES:
            return {                
                ...state,
                issues: []
            }
        case ISSUES_LOADING_MESSAGES:
            return {
                ...state,                
                loadingMessages: [ ...state.loadingMessages, action.payload]
            }
        case GET_ISSUES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }        
        case COUNT_ISSUES:
            return {
                ...state,
                totalIssuesForPagination: action.payload
            }
        case LOAD_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        case DROP_REPOS:
            return {
                ...state,
                repos: []
            }
        default: 
            return state;
    }
}

export const getIssues = state => state.issues;
export const getIssuesPending = state => state.isLoading;
export const getPendingMessages = state => state.loadingMessages;
export const getError = state => state.error;
export const getRepos = state => state.repos;
export const getTotalIssuesForPagination = state => state.totalIssuesForPagination;

export default Reducer;