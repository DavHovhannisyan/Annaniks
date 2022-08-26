import {FC} from "react";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import parse from 'html-react-parser';
import {Box} from "@mui/material";
import OurProjectCarousel from "./ourProject/OurProjectCarousel";
import Home from "../../styles/Home.module.css";


const OurProject: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.ourProject}>
            <Box className={Home.bg} />
            <Box className={Home.ourProjectBlock}>
                <h2 data-aos="fade-up"
                    data-aos-duration="2000"  className={Home.ourProjectTitle}>
                    {t("common:OurProjects:title")}
                </h2>
                <p data-aos="fade-up"
                   data-aos-duration="2000"  className={Home.ourProjectDesc}>
                    {
                        parse(t("common:OurProjects:descriptions"))
                    }
                </p>
                <Box data-aos="fade-up"
                     data-aos-duration="2000"  className={Home.ourProjectBtn}>
                    <Link href={"/ourProject"}>
                        <a className={Home.Link}>
                            {t("common:OurProjects:buttonText")}
                        </a>
                    </Link>
                </Box>
                <Box className={Home.ourProjectCarouselBLock}>
                    <OurProjectCarousel />
                </Box>
                <Box className={Home.bgRevers} />
            </Box>
        </Box>
    )
}

export default OurProject;