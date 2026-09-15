import React from "react"

import Aboutme_img from "../img/ab-me.JPEG"

class AboutmeBlock extends React.Component {
    render() {
      const { setRef } = this.props;
      return(
        <div id="AboutmeBlock" ref={setRef} className="aboutmeBlock d-flex d-flex-col">{this.props.title}
                  <div className="workBlock_main__BlockText mx-5">
                    <p className="animate1 textHeader1">Обо мне</p>
                  </div>
            <div className="animate4 aboutmeBlockup d-flex d-flex-row">
                <div  className="animate3 aboutmeBlock_Block__BlockText d-flex d-flex-col">             
                        <p className="textMain aboutmeBlock__text">Привет! Меня зовут Маша, и я тату-мастер художественной татуировки. 
                            Для меня татуировка - это про уверенность в себе, смелость, самовыражение и искренность перед самим собой.</p>
                        <p className="textMain aboutmeBlock__text">Я рисую сколько себя помню, окончила художественную школу и долгое время писала картины на заказ. 
                            Но поняла, что я на своем месте только тогда, когда начала заниматься дизайном тела - татуировкой. 
                            Благодаря художественной школе я прекрасно знаю анатомию человека и могу очень выгодно подчеркнуть красоту мышц и изгибов.</p>
                        <p className="textHeader2 aboutmeBlock__textH2">Почему именно я?</p>
                        <span className="aboutmeBlock_border"></span>
                        <div>
                            <p className="textMain aboutmeBlock__text">•Индивидуальный подход к каждому клиенту и его запросу </p>
                            <p className="textMain aboutmeBlock__text">•С большим удовольствием разработаю эксклюзивный дизайн для вашего тела </p> 
                            <p className="textMain aboutmeBlock__text">•Современное и качественное оборудование и расходники </p> 
                            <p className="textMain aboutmeBlock__text">•Стерильность </p> 
                            <p className="textMain aboutmeBlock__text">•Бесплатная консультация и уютная атмосфера</p>  
                        </div>
                </div>
                <div className="animate2 aboutmeBlock_Block__BlockImg" >
                    <div className="aboutmeBlock_Block__BlockImg__absolute">
                        <img className="aboutmeBlock_Block__img" src={Aboutme_img}></img>  
                    </div>                  
                </div>
            </div>
            <div className="aboutmeBlockdown"></div>
        </div>
      )
    }
}

export default AboutmeBlock