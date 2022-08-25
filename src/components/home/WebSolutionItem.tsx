import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import {Box, Grid, useMediaQuery} from "@mui/material";
import Home from "../../styles/Home.module.css";

interface IWebSolutionItem {
    img: string;
    title: string;
    desc: string;
}


const WebSolutionItem: FC<IWebSolutionItem> = (props) => {
    const {t} = useTranslation('common');
    const matches = useMediaQuery('(max-width:1400px)', {noSsr: true});
    const matches1024 = useMediaQuery('(max-width:1100px)', {noSsr: true});
    const matchesMobile = useMediaQuery('(max-width:700px)', {noSsr: true});
    return (
        <Box className={Home.webSolutionItem}>
            <Grid container >
                <Grid item container justifyContent={matchesMobile ? "center": "unset"} xs={12}>
                    <Image src={props.img} width={matches1024 ? "102px" : matches ? "125px" : "165"}
                           height={matches1024 ? "105px" : matches ? "125px" : "170"}/>
                </Grid>
                <Grid item justifyContent={matchesMobile ? "center": "unset"} xs={12}>
                    <h2 className={Home.webSolutionItemTitle}>{props.title}</h2>
                </Grid>
                <Grid item justifyContent={matchesMobile ? "center": "unset"} xs={12}>
                    <p className={Home.webSolutionItemDesc}>{props.desc}</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WebSolutionItem;