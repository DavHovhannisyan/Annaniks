import {FC} from "react";
import {Box} from "@mui/material";
import Home from "../../../styles/Home.module.css";


interface ICarouselItem {
    title: string;
    desc: string;
}

const CarouselItem: FC<ICarouselItem> = (props) => {
    return (
        <Box className={Home.swiperSlideItem}>
            <Box className={Home.ourTeamCarouselItemContext}>
                <h2 className={Home.ourTeamCarouselItemTitle}>
                    {props.title}
                </h2>
                <p className={Home.ourTeamCarouselItemDesc}>
                    {props.desc}
                </p>
                <p className={Home.ourTeamCarouselItemInfo}>
                    sdfbdsfbdsfbdsfvbsdfvb sdfvsdfv dfvbdfv
                    fvfdvdfvsdc sdfv
                </p>
            </Box>
            <Box className={Home.layer} />
        </Box>
    )
}

export default CarouselItem;