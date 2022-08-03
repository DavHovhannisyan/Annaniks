import {FC} from "react";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import {Box, Grid} from "@mui/material";
import Home from "../../styles/Home.module.css";

interface IWebSolutionItem {
    img: string;
    title: string;
    desc: string;
}


const WebSolutionItem: FC<IWebSolutionItem> = (props) => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.webSolutionItem}>
            <Grid container>
                <Grid item xs={12}>
                    <Image src={props.img}/>
                </Grid>
                <Grid item xs={12}>
                    <h2 className={Home.webSolutionItemTitle} >{props.title}</h2>
                </Grid>
                <Grid item xs={12}>
                    <p className={Home.webSolutionItemDesc} >{props.desc}</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WebSolutionItem;