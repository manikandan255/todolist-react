import React from 'react'
import img from '../src/images/icon.png'

const Header = (props) => {
  return (
    <header>
        <h1>{props.title} <img src={img} alt="icon" /></h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Todo-List"
}
export default Header

