import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIssues, getTotalIssuesForPagination, getRepos } from '../reducers/index';
import { githubActions } from '../actions/fetchGithub';


class ReposDropDown extends Component {

    render() {
        const { filteredRepos, handleSubmit} = this.props;
        
        return(
            <React.Fragment>
                { (filteredRepos.length > 0) ? (
                    filteredRepos.map( filteredRepos => 
                        <button key={filteredRepos.id} value={filteredRepos.name} className="repos_dropdown_item" onMouseDown={handleSubmit}>{filteredRepos.name} </button>
                    ) ) : 
                    <div className="repos_dropdown_item">No any repositories.</div>                
                }
            </ React.Fragment>
        );    
    }
}

const mapStateToProps = state => ({
    repos: getRepos(state),
});
  
export default connect(
    mapStateToProps    
)(ReposDropDown);
