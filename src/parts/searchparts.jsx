import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues, getTotalIssuesForPagination, getRepos } from '../reducers/index';
import { githubActions } from '../actions/fetchGithub';
import ReposDropDownContainer from './reposdropdowncontainer'

class SearchIssues extends Component {
    state = {        
        search_user_name: '',
        search_repos_string: '',
        search_user_repo: '',
        show_repos_dropdown: false,
        items_on_page: 25,
        submitted: false,
    }
    trigerReposDropdown = (bool) => {
        this.setState({ show_repos_dropdown: bool });
    }  

    loadReposList = () => {
        const { loadReposByUserName, dropLastRepos} = this.props;
        const { search_user_name } = this.state;
        dropLastRepos();
        this.setState({ search_repos_string: '', search_user_repo: '' });
        this.trigerReposDropdown(true);
        console.log(search_user_name);
        if (search_user_name) {
            loadReposByUserName(search_user_name);
        }
    }

    reposSearch = e => {      
        this.setState({        
          search_repos_string: e.target.value.trim().toLowerCase()
        });
        this.handleChange(e);
    }

    handleChange = e => {
        const { name, value } = e.target;              
        this.setState({ [name]: value });
    }
    
    handleSubmit = e => {
        const { loadIssues, dropLastIssues, countIssuesForPagination } = this.props;        
        this.setState({ submitted: true });

        let { search_user_name, search_user_repo, items_on_page } = this.state;
        const { value } = e.target; 
        if (value) {
            this.setState({ search_user_repo: value }); 
            search_user_repo = value;
        }

        if (search_user_name && search_user_repo && items_on_page) {
            dropLastIssues();
            countIssuesForPagination(search_user_name, search_user_repo, items_on_page);
            loadIssues(search_user_name, search_user_repo, items_on_page);
            this.trigerReposDropdown(false);
        }
        
        e.preventDefault();           
    }   

    render() {
        const { search_user_name, search_user_repo, show_repos_dropdown, search_repos_string, items_on_page, submitted } = this.state;
        const { issues, totalIssuesForPagination } = this.props;
        console.log(issues);
        // console.log(search_user_repo);
        return (
            <Container>
                <Row>
                    <Col>
                        <Form className="search_issues">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="User name" aria-label="User name" name="search_user_name" value={search_user_name} onChange={this.handleChange}  />
                                <ReposDropDownContainer 
                                    search_user_name={search_user_name}
                                    reposSearch={this.reposSearch} 
                                    search_user_repo={search_user_repo}
                                    show_repos_dropdown={show_repos_dropdown}
                                    search_repos_string={search_repos_string}
                                    trigerReposDropdown={this.trigerReposDropdown}
                                    loadReposList={this.loadReposList}
                                    handleSubmit = {this.handleSubmit} /> 
                                <select className="form-control" name="items_on_page" value={items_on_page} onChange={this.handleChange}>
                                    <option onClick={this.handleSubmit}>25</option>
                                    <option>50</option>
                                    <option>75</option>
                                    <option>100</option>                                        
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" onClick={this.handleSubmit}>Search isssues</button>
                                </div>                                
                            </div>
                            {submitted && !search_user_name && <div className="text-danger">User name is required</div> }
                            {submitted && !search_user_repo && <div className="text-danger">Repo name is required</div> }
                        </Form>
                    </Col>
                </Row>
               
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    issues: getIssues(state),
    totalIssuesForPagination: getTotalIssuesForPagination(state),
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
    loadIssues: githubActions.getIssues,
    dropLastIssues: githubActions.dropLastIssues,
    countIssuesForPagination: githubActions.countIssuesForPagination,
    loadReposByUserName: githubActions.loadReposByUserName,
    dropLastRepos: githubActions.dropLastRepos
}, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchIssues);
