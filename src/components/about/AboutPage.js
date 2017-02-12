import React from 'react';
import { Link, IndexLink } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
        <br/>
        <Link to="/courses" className="btn btn-primary btn-lg">Go to Courses</Link>
      </div>
    );
  }
}

export default AboutPage;
