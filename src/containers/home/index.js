import React from 'react'
import { Jumbotron } from 'reactstrap';

import StudentDetails from '../student-details'

const Home = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Student Dashboard</h1>
    </Jumbotron>

    <StudentDetails />
  </div>
);

export default Home;