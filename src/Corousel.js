import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Data from "./data.json";
import { ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"

function PreviousBtn(props) {
    
    const { className,  onClick } = props;
    console.log(props)
    return (
        <div className={className} onClick={onClick}  >
            <ArrowBackIos style={{color:"black" }} />
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

 
const Corousel = () => {


    const style = {
                     autoplay:true,
                    autoplaySpeed:3000,
                    fade: true,
                    // lazyLoad: true,
                    dots:true,
                    // navButtonsAlwaysVisible:false,
                    infinite:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <Nextbtn />,
                    prevArrow: <PreviousBtn />,
                   
                    
    };

    return (
        
        <div >
            <h1>React Corousel.....</h1>
            <Slider {...style}>
                    {
                        Data.map((element) => (

                            <img src={element.image} className="images"/>
                        ))
                    }
            </Slider>
        </div>
    )
}

export default Corousel
