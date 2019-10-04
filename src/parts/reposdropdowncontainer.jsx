import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues, getTotalIssuesForPagination, getRepos } from '../reducers/index';
import { githubActions } from '../actions/fetchGithub';
import ReposDropDown from './reposdropdown'

class SearchIssues extends Component {

    render() {
        let { repos } = this.props;
        const { search_user_repo, search_repos_string, reposSearch, trigerReposDropdown, loadReposList, show_repos_dropdown, handleSubmit } = this.props;

        if (search_repos_string.length > 0) {
            repos = repos.filter(repos => {
              return repos.name.toLowerCase().match(search_repos_string);
            });
        }
        
        return (
            <div className="repos_dropdown form-control ">                     
                <input type="text" autoComplete="off" className="repos_dropdown_input" placeholder="Repo name" aria-label="Repo name" list="search_user_repo" name="search_user_repo" value={search_user_repo} onChange={reposSearch} onClick={loadReposList} onBlur={()=>trigerReposDropdown(false)} />
                {show_repos_dropdown?(   
                    <div className="repos_dropdown_menu">
                        <ReposDropDown filteredRepos={repos} handleSubmit={handleSubmit} />
                    </div>
                    ) : null
                }
            </div>   
        );
    }
}

const mapStateToProps = state => ({
    repos: getRepos(state),
});
  
export default connect(
    mapStateToProps
)(SearchIssues);
