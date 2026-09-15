import React from "react"
import Navbar from "./Navbar"


class Header extends React.Component {
    render() {
      const { setRef } = this.props;
      return(
        <div id="Header" ref={setRef} className="header">{this.props.title}
          <Navbar />
        </div>
      )
    }
}

export default Header