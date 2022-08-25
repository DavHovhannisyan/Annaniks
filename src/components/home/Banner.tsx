import {FC} from "react";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import {Box, useMediaQuery} from "@mui/material";
import bannerImg1 from "../../../public/images/banner/Group69114.png";
import bannerImg2 from "../../../public/images/banner/Group69189.png";
import bannerImg3 from "../../../public/images/banner/Group69188.png";
import Home from "../../styles/Home.module.css";

const Banner: FC = () => {
    const {t} = useTranslation('common');
    const matches = useMediaQuery('(max-width:1400px)', {noSsr: true});
    const matches1024 = useMediaQuery('(max-width:1100px)', {noSsr: true});
    const matches768 = useMediaQuery('(max-width:770px)', {noSsr: true});

    return (
        <Box className={Home.banner}>
            <Box className={Home.bannerBlock}>
                <h1 data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="4000" className={Home.headingTitle}>
                    {t('common:headingTitle')}
                </h1>
                <h3 data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="4000" className={Home.headingSubTitle}>
                    {t('common:Subheading')}
                </h3>
                <div className={Home.bannerImg}>
                    <div data-aos="fade-up"
                         data-aos-duration="2500" className={Home.imgItem1}>
                        <Image src={bannerImg1} alt={"img"} width={matches1024 ? "180px" : matches ? "200px" : "235px"}
                               height={matches1024 ? "264px" : matches ? "293px" : "344px"}/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="1800" className={Home.imgItem2}>
                        <Image src={bannerImg2} alt={"img"}
                               width={matches768 ? "464" : matches1024 ? "494px" : matches ? "600px" : "704px"}
                               height={matches768 ? "296" : matches1024 ? "315px" : matches ? "383px" : "450px"}/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="1700" className={Home.imgItem3}>
                        <Image src={bannerImg3} alt={"img"}
                               width={matches768 ? "720" : matches1024 ? "784px" : matches ? "887px" : "1027px"}
                               height={matches768 ? "422" : matches1024 ? "459px" : matches ? "519px" : "601px"}/>
                    </div>

                </div>
            </Box>
        </Box>
    )
}

export default Banner;