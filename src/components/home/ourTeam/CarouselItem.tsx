import {FC} from "react";
import {Box, useMediaQuery} from "@mui/material";
import Home from "../../../styles/Home.module.css";


interface ICarouselItem {
    title: string;
    desc: string;
}

const CarouselItem: FC<ICarouselItem> = (props) => {

    const matches425 = useMediaQuery('(max-width:430px)', {noSsr: true});

    return (
        <>
            <Box className={Home.swiperSlideItem}>
                <Box className={Home.ourTeamCarouselItemContext}>
                    {!matches425 && (<><h2 className={Home.ourTeamCarouselItemTitle}>
                        {props.title}
                    </h2>
                        <p className={Home.ourTeamCarouselItemDesc}>
                            {props.desc}
                        </p>
                        <p className={Home.ourTeamCarouselItemInfo}>
                            sdfbdsfbdsfbdsfvbsdfvb sdfvsdfv dfvbdfv
                            fvfdvdfvsdc sdfv
                        </p></>)}
                </Box>
            </Box>
            {matches425 && (<><h2 className={Home.ourTeamCarouselItemTitle}>
                {props.title}
            </h2>
                <p className={Home.ourTeamCarouselItemDesc}>
                    {props.desc}
                </p></>)}
        </>
    )
}

export default CarouselItem;