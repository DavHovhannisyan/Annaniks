import {FC} from "react";
import {Box, Grid} from "@mui/material";
import Home from "../../../styles/Home.module.css";
import Link from "next/link";

interface ICarouselItem {
    title: string;
    desc: string;
}

const CarouselItem: FC<ICarouselItem> = (props) => {

    return (
        <Link href={"ourProject/12"}>
            <Box className={Home.carouselItem} data-aos="zoom-in"  data-aos-duration="2000">
                <Box className={Home.carouselItemImageBlock}>
                    <Box className={Home.carouselItemImage}></Box>
                    {/*<Image src={}/>*/}
                </Box>
                <h2 className={Home.carouselItemTitle}>
                    {props.title}
                </h2>
                <p className={Home.carouselItemDesc}>
                    {props.desc}
                </p>
            </Box>
        </Link>
    )
}

export default CarouselItem;