import React from 'react'

const Header = ({ children }) => {
  return (
    <header>
      <h1>{children || 'Be The Hero!'}</h1>
    </header>
  )
}

export default Header
