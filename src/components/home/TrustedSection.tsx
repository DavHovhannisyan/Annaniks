import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import parse from 'html-react-parser';
import {Box, Grid} from "@mui/material";
import img from "../../../public/images/trusted/download.svg";
import Home from "../../styles/Home.module.css";


const TrustedSection: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.trusted}>
            <div className={Home.trustedBg}>
                <Grid className={Home.trustedBlock} container>
                    <Grid item lg={6}>
                        <Box className={Home.trustedContentBlock}>
                            <Grid container>
                                <Grid item lg={12}>
                                    <h2 data-aos="fade-up"
                                        data-aos-duration="2000" className={Home.trustedTitle}>
                                        {
                                            parse(t('common:areTrusted:title'))
                                        }
                                    </h2>
                                </Grid>
                                <Grid data-aos="fade-up"
                                      data-aos-duration="2000" item display={"flex"} lg={12} alignItems={"flex-start"}>
                                    <Image src={img} width={"36px"} height={"36px"}/>
                                    <p className={Home.trustedList}>
                                        {
                                            parse(t('common:areTrusted:info:0'))
                                        }
                                    </p>
                                </Grid>
                                <Grid data-aos="fade-up"
                                      data-aos-duration="2500" item display={"flex"} lg={12} alignItems={"flex-start"}>
                                    <Image src={img} width={"36px"} height={"36px"}/>
                                    <p className={Home.trustedList}>
                                        {
                                            parse(t('common:areTrusted:info:1'))
                                        }
                                    </p>
                                </Grid>
                                <Grid data-aos="fade-up"
                                      data-aos-duration="2500" item display={"flex"} lg={12} alignItems={"flex-start"}>
                                    <Image src={img} width={"36px"} height={"36px"}/>
                                    <p className={Home.trustedList}>
                                        {
                                            parse(t('common:areTrusted:info:2'))
                                        }
                                    </p>
                                </Grid>
                                <Grid data-aos="fade-up"
                                      data-aos-duration="2000" item lg={12} display={"flex"} alignItems={"flex-start"}>
                                    <Image src={img} width={"36px"} height={"36px"}/>
                                    <p className={Home.trustedList}>
                                        {
                                            parse(t('common:areTrusted:info:3'))
                                        }
                                    </p>
                                </Grid>
                                <Grid data-aos="fade-up"
                                      data-aos-duration="2000" item lg={12} display={"flex"} alignItems={"flex-start"}>
                                    <Image src={img} width={"36px"} height={"36px"}/>
                                    <p className={Home.trustedList}>
                                        {
                                            parse(t('common:areTrusted:info:4'))
                                        }
                                    </p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </Box>
    )
}

export default TrustedSection;