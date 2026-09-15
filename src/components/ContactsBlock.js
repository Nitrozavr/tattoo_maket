import React from "react"
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

import { ReactComponent as IconMarker} from "../svg/socials/marker.svg";
import { ReactComponent as IconPhone} from "../svg/socials/phone.svg";
import { ReactComponent as IconInstagram } from "../svg/socials/instagramm.svg";
import { ReactComponent as IconTelegram } from "../svg/socials/telegramm.svg";
import { ReactComponent as IconVk} from "../svg/socials/vk.svg";
import { ReactComponent as IconYoutube} from "../svg/socials/youtube.svg";
import customMarkerImage from '../svg/tattoo.svg';
class ContactsBlock extends React.Component {
    render() {
      const { setRef } = this.props;
      return(
        <div ref={setRef} id="ContactsBlock"  className="contactsBlock">
          <div className="animate1 contactsBlock__BlockText mx-5">
              <p  className="textHeader1">Контакты</p>
          </div>
            <div className="animate2 contactsBlock__mainBlock d-flex d-flex-row">
            <div className="contactsBlock_maps">
            <YMaps>
                <Map
                  defaultState={{
                    center: [55.761852, 37.631892],
                    zoom: 14,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Placemark
                    geometry={[55.761852, 37.631892]}
                    properties={{
                      iconCaption: 'Custom Placemark'
                    }}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: customMarkerImage,
                      iconImageSize: [45, 60],
                      iconImageOffset: [-15, -30]
                    }}
                  />
                </Map>
              </YMaps>
            </div>
            <div className="animate2 contactsBlock_BlockText d-flex d-flex-col">
                  <div className="d-flex d-flex-row d-flex_al-it-center gap-30">
                    <IconMarker></IconMarker>
                    <p className="textMain contactsBlock__Text p_pointer">г.Москва, Милютинский переулок, 6с1</p>   
                  </div>                  
                  <span className="contactsBlock_border"></span>
                  <div className="d-flex d-flex-row d-flex_al-it-center gap-30">
                    <IconPhone></IconPhone>
                    <a href="tel:+7(925)225-10-47" style={{textDecoration: 'none'}}><p className="textMain contactsBlock__Text p_pointer">+7(925)225-10-47</p></a>
                  </div>
                  <span className="contactsBlock_border"></span>
                  <div className="contactsBlock__BlockSvg d-flex gap-30">
                      <a href="https://www.instagram.com/chasm.ink?igsh=eDU3eGs0azcxYmRu" target="_blank"><IconInstagram></IconInstagram></a>
                      <a href="https://t.me/chasm_ink" target="_blank"><IconTelegram></IconTelegram></a>
                      <a href="https://vk.com/chasm_ink" target="_blank"><IconVk></IconVk></a>
                      <a href="https://youtube.com/@halcyon2979?si=rrFoBY4op7EV4XSz" target="_blank"><IconYoutube></IconYoutube></a>
                  </div>    
            </div>
            </div>


        </div>
      )
    }
}

export default ContactsBlock