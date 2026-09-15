import React from "react"
import PriceBlockMain from "../img/price.JPG"

class PriceBlock extends React.Component {
    render() {
      const { setRef } = this.props;
      return(
        <div id="PriceBlock" ref={setRef} className="priceBlock">{this.props.title}
            <div  className="priceBlock_main">
                  <div className="animate1 priceBlock_main__BlockText mx-5">
                    <p className="textHeader1">Цены и услуги</p>
                  </div>
                  <div className="animate2 priceBlock_main__BlockMain d-flex d-flex-row">
                      <div className="priceBlock_main__BlockMain__BlockPicture">
                        <img className="priceBlock_main__BlockMain__picture" src={PriceBlockMain}></img>
                      </div>
                      <div className="priceBlock_main__BlockMain__BlockText d-flex d-flex-col">
                        <p className="priceBlock__textH2 textHeader2 priceBlock__text">Стоимость</p>
                          <span className="priceBlock_border priceBlock__text"></span>
                          <div className="textMain priceBlock__text d-flex d-flex-col gap-15">
                            <div>
                                <p className="priceBlock__text textMain">Чтобы рассчитать стоимость вашей тату напишите мне свою идею, желаемый размер будущей татуировки и место нанесения, 
                                я сориентирую вас по стоимости</p>
                            </div>
                            <div>
                                <p className="priceBlock__text textMain">• Тату - от 6000р</p>                         
                                <p className="priceBlock__text textMain"> Большие работы:</p>
                                <p className="priceBlock__text textMain">• Сеанс - 15000р (5 часов)</p>
                                <p className="priceBlock__text textMain">• Полный день - 20000р </p>
                            </div>
                            <div>
                                <p className="priceBlock__text textMain">• Заживляющая пленка входит в стоимость татуировки</p>
                            </div>
                          </div>
                        <p className="priceBlock__textH2 textHeader2">Обучение</p>
                            <span className="priceBlock_border"></span>
                        <p className="textMain priceBlock__text">Так же, у меня есть 3 тарифа для обучения искусству татуировки</p>

                            <a href="https://chasminkteaching.taplink.ws" target="_blank" className="priceBlock__btn textHeader_btn box link">
                                  Тарифы на обучение и программа
                            </a>
                  
                        <div className="textMain priceBlock__text"> 
                            <p className="priceBlock__text textMain">1) базовый курс подойдет тем, кто хочет быстро и без заморочек влиться в курс дела, 
                                просто попробовать себя и начать работать. </p>
                            <p className="priceBlock__text textMain">2) расширенный курс даст очень крутой старт и базу, будешь чувствовать себя сразу уверенно, 
                                потому что вся нужная информация будет у тебя на блюдечке </p>
                            <p className="priceBlock__text textMain">3) повышение квалификации или обучение цветной татуировке подойдет тем, кто уже работает в чб, 
                                но боится цветных пигментов и не понимает как с ними работать</p>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
      )
    }
}

export default PriceBlock