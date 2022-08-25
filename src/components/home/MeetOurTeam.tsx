import {FC} from "react";
import {useTranslation} from "next-i18next";
import {Box} from "@mui/material";
import OurTeamCarousel from "./ourTeam/OurTeamCarousel";
import Home from "../../styles/Home.module.css";


const MeetOurTeam: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.ourTeamBlock}>
            <Box className={Home.ourTeamTitle}>
                <h2 data-aos="fade-up"
                    data-aos-duration="3000">
                    {t("common:MeetOurTeam:title")}
                </h2>
            </Box>
            <Box className={Home.ourTeamDesc}>
                <p data-aos="fade-up"
                   data-aos-duration="3000">
                    {t("common:MeetOurTeam:descriptions")}
                </p>
            </Box>
            <OurTeamCarousel />
        </Box>
    )
}

export default MeetOurTeam;