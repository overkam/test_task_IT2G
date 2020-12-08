import React from 'react'
import { NavLink } from 'react-router-dom'
import './Description.css'

function Description({description}) {
  return (
    <div>
    <p>{description}</p>
    <button>
    <NavLink to='/'>Go back</NavLink>
    </button>
    </div>
  )
}

export default Description