import {FC} from "react";
import {useTranslation} from "next-i18next";
import {Box} from "@mui/material";
import OurTeamCarousel from "./ourTeam/OurTeamCarousel";
import Home from "../../styles/Home.module.css";
import {IOurTeam, IProps} from "../../types/home/type";


interface IOurTeamCarousel extends IProps{
    ourTeamData: Array<IOurTeam>;
}

const MeetOurTeam: FC<IOurTeamCarousel> = ({ourTeamData,locale}) => {
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
            <OurTeamCarousel ourTeamData={ourTeamData}  locale={locale}/>
        </Box>
    )
}

export default MeetOurTeam;