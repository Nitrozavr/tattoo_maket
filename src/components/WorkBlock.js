import React from "react"
import PictureWorkMain from "../img/pictureWork.jpg"
import Slider from "../components/Slider"

import PictureWork_1 from "../img/work_picture/work_picture-1.jpg"
import PictureWork_2 from "../img/work_picture/work_picture-2.jpg"
import PictureWork_3 from "../img/work_picture/work_picture-3.jpg"
import PictureWork_4 from "../img/work_picture/work_picture-4.jpg"
import PictureWork_5 from "../img/work_picture/work_picture-5.jpg"
import PictureWork_6 from "../img/work_picture/work_picture-6.jpg"
import PictureWork_7 from "../img/work_picture/work_picture-7.jpg"
import PictureWork_8 from "../img/work_picture/work_picture-8.jpg"
import PictureWork_9 from "../img/work_picture/work_picture-9.JPG"
import PictureWork_10 from "../img/work_picture/work_picture-10.jpg"
import PictureWork_11 from "../img/work_picture/work_picture-11.jpg"
import Fancybox from "../components/Fancybox";




class WorkBlock extends React.Component {
    render() {
      const { setRef } = this.props;
      return(
        <div id="WorkBlock"  className="workBlock">
            <div ref={setRef} className="workBlock_main">
                  <div className="workBlock_main__BlockText mx-5">
                    <p className="animate1 textHeader1">Работы</p>
                  </div>
                  <div className="animate2 workBlock_main__BlockMain d-flex d-flex-row">
                      <div className="workBlock_main__BlockMain__BlockPicture">
                        <img className="animate2 workBlock_main__BlockMain picture" src={PictureWorkMain}></img>
                      </div>
                      <div className="animate2 workBlock_main__BlockMain__BlockText d-flex d-flex-col">
                        <p className="workBlock__textH2 textHeader2">Стиль</p>
                          <span className="workBlock_border"></span>
                        <p className="textMain workBlock__text">Я работаю и с цветными и с черно-белыми татуировками. Обожаю индивидуальные решения, граффити, 
                          мультяшек и строгую традиционную Японию. Преимущественно специализируюсь на работах в стиле </p>
                          <div className="textMain workBlock__text">
                            <p>•Неояпония</p>
                            <p>•Нью Скул</p>
                            <p>•Графика</p>
                            <p>•Традиционная японская татуировка </p>
                            <p>•Ориентал </p>
                          </div>

                      </div>
                  </div>
                 
            </div>
        </div>
        
      )
    }
}


export default WorkBlock