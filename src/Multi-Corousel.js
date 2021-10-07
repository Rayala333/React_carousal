import React from 'react';
import Slider from "react-slick";
import Data from "./data.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"



function PreviousBtn(props) {
    
    const { className,  onClick } = props;
    console.log(props)
    return (
        <div className={className} onClick={onClick}  >
            <ArrowBackIos style={{color:"black",}}/>
        </div>
    );
  }
  
  function Nextbtn(props) {
    const { className, onClick} = props;
    return (
        <div className={className} onClick={onClick} >
            <ArrowForwardIos style={{color:"black"}}/>
        </div>
    );
  }

export const MultiCorousel = () => {


    const settings = {
        autoplay:true,
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        rtl: true,
        nextArrow: <Nextbtn />,
        prevArrow: <PreviousBtn />,
      };
    return (
        <div>
            
            <h1>React multi Corousel.....</h1>
            <Slider {...settings}>
                    {
                        Data.map((element) => (
                            <div className="box">

                            <img src={element.image} className="images-1" />

                            </div>
                        ))
                    }
            </Slider>
        </div>
    )
}
