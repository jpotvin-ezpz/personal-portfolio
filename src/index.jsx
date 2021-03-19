/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './Header';
import Skills from './Skills';
import ProjectsList from './newProjectsList';
import Certifications from './Certifications';
import Hobbies from './Hobbies';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Skills />
        <ProjectsList />
        <Certifications />
        <Hobbies />
      </div>
    );
  }
}

//= ===============================
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
