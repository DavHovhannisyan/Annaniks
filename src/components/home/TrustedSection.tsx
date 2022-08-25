import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import parse from 'html-react-parser';
import {Box, Grid, useMediaQuery} from "@mui/material";
import img from "../../../public/images/trusted/download.svg";
import Home from "../../styles/Home.module.css";

const TrustedSection: FC = () => {
    const {t} = useTranslation('common');
    const matches768 = useMediaQuery('(max-width:770px)', {noSsr: true});
    const matches425 = useMediaQuery('(max-width:430px)', {noSsr: true});

    return (
        <Box className={Home.trusted}>
            <Box className={Home.trustedTopBg}/>
            <Box className={Home.trustedContent}>
                <div className={Home.trustedBg}>
                    <Grid className={Home.trustedBlock} container>
                        <Grid item lg={8} sm={12}>
                            <Box className={Home.trustedContentBlock}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item container lg={12} md={12} sm={12} xs={12}
                                          justifyContent={matches768 ? "center" : "unset"}>
                                        <h2 data-aos="fade-up"
                                            data-aos-duration="2000" className={Home.trustedTitle}>
                                            {
                                                parse(t('common:areTrusted:title'))
                                            }
                                        </h2>
                                    </Grid>
                                    <Grid data-aos="fade-up"
                                          data-aos-duration="2000" item display={"flex"}
                                          flexDirection={matches768 ? "column" : "unset"} lg={12} md={12} sm={4}
                                          alignItems={matches768 ? "center" : "flex-start"}>
                                        <Image src={img} width={matches425 ? "32" : "36px"}
                                               height={matches425 ? "32" : "36px"}/>
                                        <p className={Home.trustedList}>
                                            {
                                                parse(t('common:areTrusted:info:0'))
                                            }
                                        </p>
                                    </Grid>
                                    <Grid data-aos="fade-up"
                                          data-aos-duration="2500" item
                                          display={"flex"}
                                          lg={12} md={12} sm={4}
                                          flexDirection={matches768 ? "column" : "unset"}
                                          alignItems={matches768 ? "center" : "flex-start"}>
                                         <Image src={img} width={matches425 ? "32" : "36px"}
                                               height={matches425 ? "32" : "36px"}/>
                                        <p className={Home.trustedList}>
                                            {
                                                parse(t('common:areTrusted:info:1'))
                                            }
                                        </p>
                                    </Grid>
                                    <Grid data-aos="fade-up"
                                          data-aos-duration="2500" item
                                          display={"flex"}
                                          flexDirection={matches768 ? "column" : "unset"}
                                          lg={12} md={12} sm={4}
                                          alignItems={matches768 ? "center" : "flex-start"}>
                                         <Image src={img} width={matches425 ? "32" : "36px"}
                                               height={matches425 ? "32" : "36px"}/>
                                        <p className={Home.trustedList}>
                                            {
                                                parse(t('common:areTrusted:info:2'))
                                            }
                                        </p>
                                    </Grid>
                                    <Grid data-aos="fade-up"
                                          data-aos-duration="2000" item lg={12} md={12} sm={4}
                                          display={"flex"}
                                          flexDirection={matches768 ? "column" : "unset"}
                                          alignItems={matches768 ? "center" : "flex-start"}>
                                         <Image src={img} width={matches425 ? "32" : "36px"}
                                               height={matches425 ? "32" : "36px"}/>
                                        <p className={Home.trustedList}>
                                            {
                                                parse(t('common:areTrusted:info:3'))
                                            }
                                        </p>
                                    </Grid>
                                    <Grid data-aos="fade-up"
                                          data-aos-duration="2000" item lg={12} md={12} sm={4}
                                          display={"flex"}
                                          alignItems={matches768 ? "center" : "flex-start"}
                                          flexDirection={matches768 ? "column" : "unset"}>
                                         <Image src={img} width={matches425 ? "32" : "36px"}
                                               height={matches425 ? "32" : "36px"}/>
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
        </Box>
    )
}

export default TrustedSection;