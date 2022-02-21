import {ThemeUpdateContext } from '../../useContext/ThemeContext.js'
import React, { useContext } from 'react'

function Theme() {
  const toggleTheme = useContext(ThemeUpdateContext)

  return (
    <div>
      <p>Light</p>
      <p onClick={toggleTheme}>Dark</p>
    </div>
  )
}

export default Theme