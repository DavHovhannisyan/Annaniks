import {FC} from "react";
import {Box} from "@mui/material";
import Home from "../../styles/Home.module.css";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import bannerImg1 from "../../../public/images/banner/Group 69114.png";
import bannerImg2 from "../../../public/images/banner/Group 69189.png";
import bannerImg3 from "../../../public/images/banner/Group 69188.png";

const Banner: FC = () => {
    const {t} = useTranslation('common');

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
                         data-aos-duration="3000" className={Home.imgItem1}>
                        <Image src={bannerImg1} alt={"img"} width={"235px"} height={"344px"}/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="2000" className={Home.imgItem2}>
                        <Image src={bannerImg2} alt={"img"} width={"704px"} height={"450px"}/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="1000" className={Home.imgItem3}>
                        <Image src={bannerImg3} alt={"img"} width={"1027px"} height={"601px"}/>
                    </div>

                </div>
            </Box>
        </Box>
    )
}

export default Banner;