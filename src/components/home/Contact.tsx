import {FC} from "react";
import {useTranslation} from "next-i18next";
import {Box, Grid} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import fb from "../../../public/images/social/facebook.svg";
import insta from "../../../public/images/social/instagram.svg";
import tw from "../../../public/images/social/twiter.svg";
import Home from "../../styles/Home.module.css";



const Contact: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.contactBlock}>
            <Grid container>
                <Grid display={"flex"} flexDirection={"column"} alignItems={"center"} item xl={6} lg={6} md={6} sm={6}   xs={12}>
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000" className={Home.contactTitle}>
                        {t("common:GetInTouch")}
                    </h2>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactNum}>
                        {t("common:phone")}
                    </p>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactEmail}>
                        {t("common:email")}
                    </p>
                    <Box className={Home.contactSocialInfo}>
                        <ul data-aos="fade-up"
                            data-aos-duration="3000">
                            <li>
                                <Link target={"_blank"} href="">
                                    <a>
                                        <Image src={tw} />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link target={"_blank"} href="">
                                    <a>
                                        <Image  src={fb} />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link target={"_blank"} href="">
                                    <a>
                                        <Image src={insta} />
                                    </a>
                                </Link>
                            </li>
                        </ul>

                    </Box>
                </Grid>
                <Grid display={"flex"} flexDirection={"column"} alignItems={"center"} item xl={6} lg={6} md={6} sm={6}  xs={12}>
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000" className={Home.contactTitle}>
                        {t("common:comeMeetUs")}
                    </h2>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactPlace}>
                        {t("common:city")}
                    </p>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactPlaceInfo}>
                        {t("common:addres")}
                    </p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact;