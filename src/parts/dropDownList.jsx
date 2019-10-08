import React from "react";

function ReposDropDown(props) {
  const { filteredRepos, handleSubmit } = props;

  return (
    <React.Fragment>
      {filteredRepos.length > 0 ? (
        filteredRepos.map(filteredRepos => (
          <button
            key={filteredRepos.id}
            value={filteredRepos.name}
            className="repos_dropdown_item"
            onMouseDown={handleSubmit}
          >
            {filteredRepos.name}{" "}
          </button>
        ))
      ) : (
        <div className="repos_dropdown_item">No any repositories.</div>
      )}
    </React.Fragment>
  );
}

export default ReposDropDown;
