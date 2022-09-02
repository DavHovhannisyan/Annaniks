import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box, Container, useMediaQuery} from "@mui/material";
import SwiperCore,{A11y, Navigation, Pagination, Scrollbar} from "swiper";
import CarouselItem from "./CarouselItem";
import {IOurTeam, IProps} from "../../../types/home/type";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Home from "../../../styles/Home.module.css";

 interface IOurTeamCarousel extends IProps{
    ourTeamData: Array<IOurTeam>;
}

SwiperCore.use([Pagination])

const OurTeamCarousel: FC<IOurTeamCarousel> = ({ourTeamData}) => {
    const matches = useMediaQuery('(max-width:1400px)', {noSsr: true});
    const matches1024 = useMediaQuery('(max-width:1100px)', {noSsr: true});
    const matches768 = useMediaQuery('(max-width:770px)', {noSsr: true});
    const matchesMobile = useMediaQuery('(max-width:700px)', {noSsr: true});
    const matches425 = useMediaQuery('(max-width:430px)', {noSsr: true});
    const matches320 = useMediaQuery('(max-width:330px)', {noSsr: true});

    return (
        <Box className={Home.ourTeamCarousel}>
            <Container sx={{
                maxWidth: matches320 ? "318px!important" :matches425 ? "370px!important" : matchesMobile ? "580px!important" :matches768 ? "700px!important" : matches1024 ? "980px!important" : matches ? "1220px!important" : "1700px!important",
            }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={18}
                    slidesPerView={4}
                    pagination={
                        {
                            type: "bullets",
                            clickable: true,
                        }
                    }
                    scrollbar={{draggable: true, dragSize: 80, horizontalClass: "dragInCarousel"}}
                    breakpoints={{
                        800: {
                            slidesPerView: 4,
                        },
                        700: {
                            slidesPerView: 3,
                        },
                        320: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {
                        ourTeamData.map((ourTeamItem)=>(
                            <SwiperSlide key={ourTeamItem.id}>
                                <CarouselItem desc={ourTeamItem.description}
                                              name={ourTeamItem.last_name}
                                              image={ourTeamItem.image}
                                              profesia={ourTeamItem.profesia}/>
                            </SwiperSlide>
                        ))

                    }

                </Swiper>
            </Container>
        </Box>
    )
}

export default OurTeamCarousel;