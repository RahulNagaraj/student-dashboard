import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Header from '../header'
import StudentInformation from '../student-information'

const App = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={StudentInformation} />
    </main>
  </div>
)

export default App
