import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import {browserHistory} from 'react-router';
import AuthorList from './AuthorList';

// Constructor - initialize state and bind functions
class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  // Child function that are called by render
  courseRow(author, index) {
    return <div key={index}>{author.firstName}</div>;
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input type="submit"
                value="Add Author"
                className="btn btn-primary"
                onClick={this.redirectToAddAuthorPage} />
        <AuthorList authors={authors}/>
      </div>
    );
  }
}

// Validation of propTypes
AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// The following 3 sections are the redux connect functions
function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorsPage);
