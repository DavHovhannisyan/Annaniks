import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import WebSolutionItem from "./WebSolutionItem";
import {Box, Grid} from "@mui/material";
import img1 from "../../../public/images/tows/Group28.svg";
import img2 from "../../../public/images/tows/Group33.svg";
import img3 from "../../../public/images/tows/Group25.svg";
import img4 from "../../../public/images/tows/iconography.svg";
import img5 from "../../../public/images/tows/Group32.svg";
import Home from "../../styles/Home.module.css";


const TowsSection: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.tows}>
            <div className={Home.towsContent}>
                <Grid paddingTop={"95px"} container alignItems={"center"} justifyContent={"center"} position={"relative"} rowSpacing={"30px"}>
                    <Grid item lg={4} position={"relative"} top={"-100px"}>
                        <Grid container>
                            <Grid item lg={12}>
                                <h2 data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className={Home.towsTitle}>
                                    {
                                        t("common:typesSolutions:title")
                                    }
                                </h2>
                            </Grid>
                            <Grid item lg={12} data-aos="zoom-in"  data-aos-duration="2000">
                                <WebSolutionItem img={img1} title={t("common:typesSolutions:info:0:infoTitle")}
                                                 desc={t("common:typesSolutions:info:0:infoDescriptions")}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <Grid container>
                            <Grid item lg={12} zIndex={1} data-aos="zoom-in"  data-aos-duration="2000">
                                <WebSolutionItem img={img2} title={t("common:typesSolutions:info:1:infoTitle")}
                                                 desc={t("common:typesSolutions:info:1:infoDescriptions")}/>
                            </Grid>
                            <Grid marginTop={"20px"} zIndex={1} item lg={12} data-aos="zoom-in"  data-aos-duration="2000">
                                <WebSolutionItem img={img3} title={t("common:typesSolutions:info:2:infoTitle")}
                                                 desc={t("common:typesSolutions:info:2:infoDescriptions")}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} data-aos="zoom-in"  data-aos-duration="2000">
                        <WebSolutionItem img={img4} title={t("common:typesSolutions:info:3:infoTitle")}
                                         desc={t("common:typesSolutions:info:3:infoDescriptions")}/>
                    </Grid>
                    <Box className={Home.imgMatrix}>
                        <Image src={img5}/>
                    </Box>
                </Grid>
            </div>
        </Box>
    )
}

export default TowsSection;