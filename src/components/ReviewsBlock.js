import React from "react"

class ReviewsBlock extends React.Component {
    render() {
      return(
        <div id="ReviewsBlock" className="reviewsBlock">{this.props.title}</div>
      )
    }
}

export default ReviewsBlock