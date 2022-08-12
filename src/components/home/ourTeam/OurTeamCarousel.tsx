import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box, Grid, Container} from "@mui/material";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import CarouselItem from "./CarouselItem";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Home from "../../../styles/Home.module.css";


const OurTeamCarousel: FC = () => {

    return (
        <Box className={Home.ourTeamCarousel}>
            <Container sx={{
                maxWidth: "1700px!important",
            }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                     spaceBetween={18}
                    slidesPerView={4}
                    scrollbar={{draggable: true, dragSize:80, horizontalClass:"dragInCarousel"}}
                >
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CarouselItem desc={"description"} title={"title"} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    )
}

export default OurTeamCarousel;