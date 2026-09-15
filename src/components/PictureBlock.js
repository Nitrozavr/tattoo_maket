import React, { useState } from "react";
import Slider from "../components/Slider";
import Fancybox from "../components/Fancybox";

import PictureWork_1 from "../img/work_picture/work_picture-1.jpg";
import PictureWork_2 from "../img/work_picture/work_picture-2.jpg";
import PictureWork_3 from "../img/work_picture/work_picture-3.jpg";
import PictureWork_4 from "../img/work_picture/work_picture-4.jpg";
import PictureWork_5 from "../img/work_picture/work_picture-5.jpg";
import PictureWork_6 from "../img/work_picture/work_picture-6.jpg";
import PictureWork_7 from "../img/work_picture/work_picture-7.jpg";
import PictureWork_8 from "../img/work_picture/work_picture-8.jpg";
import PictureWork_9 from "../img/work_picture/work_picture-9.JPG";
import PictureWork_10 from "../img/work_picture/work_picture-10.jpg";
import PictureWork_11 from "../img/work_picture/work_picture-11.jpg";

const PictureBlock = (props) => {
  const { setRef } = props;
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <>
      <Slider />
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div ref={setRef} className="workBlock_main__mainPicture">
          <div className="workBlock_main__BlockPicture">
            <div className="workBlock_main__BlockPicture__BlockGrid">
              {/* Фотографии, которые всегда показываются */}
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_1}
                  alt="Work Picture 1"
                  loading=" lazy"
                />
              </div>
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_2}
                  alt="Work Picture 2"
                  loading=" lazy"
                />
              </div>
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_3}
                  alt="Work Picture 3"
                  loading=" lazy"
                />
              </div>
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_4}
                  alt="Work Picture 4"
                  loading=" lazy"
                />
              </div>
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_5}
                  alt="Work Picture 5"
                  loading=" lazy"
                />
              </div>
              <div className="gridBlock">
                <img
                  data-fancybox="gallery"
                  className="animate1 gridBlock_picture"
                  src={PictureWork_6}
                  alt="Work Picture 6"
                  loading=" lazy"
                />
              </div>
              {/* Дополнительные фотографии, которые появляются при нажатии на кнопку */}
              {showMore && (
                <>
                  <div className="gridBlock fade-in">
                    <img
                      data-fancybox="gallery"
                      className="animate1 gridBlock_picture"
                      src={PictureWork_7}
                      alt="Work Picture 7"
                      loading=" lazy"
                    />
                  </div>
                  <div className="gridBlock fade-in">
                    <img
                      data-fancybox="gallery"
                      className="animate1 gridBlock_picture"
                      src={PictureWork_8}
                      alt="Work Picture 8"
                      loading=" lazy"
                    />
                  </div>
                  <div className="gridBlock fade-in">
                    <img
                      data-fancybox="gallery"
                      className="animate1 gridBlock_picture"
                      src={PictureWork_9}
                      alt="Work Picture 9"
                      loading=" lazy"
                    />
                  </div>
                  <div className="gridBlock fade-in">
                    <img
                      data-fancybox="gallery"
                      className="animate1 gridBlock_picture"
                      src={PictureWork_10}
                      alt="Work Picture 10"
                      loading=" lazy"
                    />
                  </div>
                  <div className="gridBlock fade-in">
                    <img
                      data-fancybox="gallery"
                      className="animate1 gridBlock_picture"
                      src={PictureWork_11}
                      alt="Work Picture 11"
                      loading=" lazy"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Кнопка для отображения дополнительных фотографий */}
          {!showMore && (
            <div className="animate1 workBlock_main__BlockBtn">
              <button
                className="workBlock_main__BlockBtn__button p_pointer"
                onClick={handleShowMore}
              >
                Больше работ
              </button>
            </div>
          )}
        </div>
      </Fancybox>
    </>
  );
};

export default PictureBlock;
