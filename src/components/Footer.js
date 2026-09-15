import React from "react"

class Footer extends React.Component {
    render() {
      return(
        <footer id="Footer" className="footer">{this.props.title}</footer>
      )
    }
}

export default Footer