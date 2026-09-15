import React from "react"
import logo_bandw from "../img/logo_bandw.jpg"

class MainBlock extends React.Component {
    render() {
      return(
        <div id="MainBlock"  className="mainBlock">{this.props.title}
            <div className="mainBlock__blockup mx-5">
                <div className="mainText_block playfair-display">
                  <div className="animate__animated animate__fadeInLeft animate__slow animate__delay-2s mainText_block__absolute">
                    <p className="mainText_block__textMain mainText_block__textMain__Name">Мария</p>
                    <p className="mainText_block__textMain mainText_block__textMain__LName">Стяжкина</p>
                    <p className="mainText_block__textAdd">Тату-мастер</p>  
                  </div>                                      
                </div>
                <div className="mainImg_block">
                    <div className="mainImg_block__absolute">
                        <img className="animate__animated animate__fadeIn animate__slower animate__delay-1s  mainImg_block__img" src={logo_bandw}></img>
                    </div>                    
                </div>
            </div>
            <div className="mainBlock__blockdown"></div>
        </div>
      )
    }
}

export default MainBlock