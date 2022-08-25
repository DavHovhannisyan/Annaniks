import React, {FC} from 'react';
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {Box,Typography} from "@mui/material";
import styles from '../../styles/Careers.module.css'


const Banner:FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={styles.careers_top_container}>
            <Box className={styles.careers_main_contain}>
                <Typography sx={{textAlign:'left'}} className={styles.careers_bold_text}>{t("common:careersPage:title")}</Typography>
                <Typography className={styles.careers_small_text}>{t("common:careersPage:subTitle")}</Typography>
                <Box className={styles.join_button}>
                    <Link className={styles.join_button_link} href={'#join'}>{t("common:careersPage:joinUsButton")}</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;