import {FC} from "react";
import Slider from "react-slick";
import {ourProjectSliderData} from "../../../constants/home/constants";
import CarouselItem from "./CarouselItem";
import Image from "next/image";
import {Box, Grid, Container} from "@mui/material";
import nextIcon from "../../../../public/images/carousel/Group69184.svg"
import prevIcon from "../../../../public/images/carousel/Group69185.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../../../styles/Home.module.css";

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",

                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0px 0px 23px -4px rgba(0,0,0,0.55)",
                textAlign: "center"
            }}
            onClick={onClick}>
            <div style={{
                position: "relative",
                left: "-3px"
            }}>
                <Image src={nextIcon} width={"14px"} height={"14px"}/>
            </div>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0px 0px 23px -4px rgba(0,0,0,0.55)",
                textAlign: "center"
            }}
            onClick={onClick}>
            <div style={{
                position: "relative",
                right: "5px"
            }}>
                <Image src={prevIcon} width={"14px"} height={"14px"}/>
            </div>
        </div>
    );
}

const settings = {
    className: Home.slider,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const OurProjectCarousel: FC = () => {

    return (
        <Box className={Home.ourProjectCarousel}>
            <Slider {...settings} >
                {
                    ourProjectSliderData.map((val) => (
                        <div key={val.title}>
                            <CarouselItem title={val.title} desc={val.desc}/>
                        </div>
                    ))
                }
            </Slider>
        </Box>
    )
}

export default OurProjectCarousel;