import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import {Box, Grid} from "@mui/material";
import Home from "../../styles/Home.module.css";


const TowsSection: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.tows}>
            Tows section
        </Box>
    )
}

export default TowsSection;