import React from 'react'
import State from '../hooks/State'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'
import { UserContext1 } from '../hooks/UserContext1'
const About = () => {
  const name=useContext(UserContext)
  const User=useContext(UserContext1)
  return (
    <div>
        <h1>Hi {User.name}</h1>
        <h1>{name}</h1>
        <Link to='/state'>UseState Example</Link><br />
        <Link to='/form'>Controlled Form</Link><br />
        <Link to='/effect'>UseEffect Example</Link><br />
        <Link to='/reducer'>UseReducer Example</Link>
    </div>
  )
}

export default About