import {FC} from "react";
import {Box, useMediaQuery} from "@mui/material";
import Home from "../../../styles/Home.module.css";


interface ICarouselItem {
    name: string;
    desc: string;
    image: string;
    profesia: string;
}

const CarouselItem: FC<ICarouselItem> = (props) => {
    const matches425 = useMediaQuery('(max-width:430px)', {noSsr: true});

    return (
        <>
            <Box style={{
                backgroundImage: `url(${props.image})`,
            }} className={Home.swiperSlideItem}>
                <Box className={Home.ourTeamCarouselItemContext}>
                    {!matches425 && (<><h2 className={Home.ourTeamCarouselItemTitle}>
                        {props.name}
                    </h2>
                        <p className={Home.ourTeamCarouselItemDesc}>
                            {props.profesia}
                        </p>
                        <p className={Home.ourTeamCarouselItemInfo}>
                            {props.desc}
                        </p></>)}
                </Box>
            </Box>
            {matches425 && (<><h2 className={Home.ourTeamCarouselItemTitle}>
                {props.name}
            </h2>
                <p className={Home.ourTeamCarouselItemDesc}>
                    {props.profesia}
                </p></>)}
        </>
    )
}

export default CarouselItem;