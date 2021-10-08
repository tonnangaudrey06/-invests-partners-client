import React from 'react'

const Layout = (props) => {
  return (
    <div className="Layout">
      <hr />
      {props.children}
      <div className="icons">
        <i className="bi bi-hand-thumbs-up-fill"></i> <span>7</span>
      </div>
      <hr />
    </div>
  )
}

export default Layout;

