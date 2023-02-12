import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function SliderCom(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoscroll: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {props.data.map((item) => (
            <div>
              <h3>{item.heading}</h3>
              <p>{item.title}</p>
              {item.method ? (<p>{item.method.pet}</p>) : (<></>)}
            </div>
          ))}

          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default SliderCom;
