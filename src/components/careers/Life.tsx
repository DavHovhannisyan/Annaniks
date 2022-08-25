import React from 'react';
import {useTranslation} from "next-i18next";
import {Box, Typography} from "@mui/material";
import styles from '../../styles/Careers.module.css'

const Life = () => {
    const {t} = useTranslation('common');

    return (
        <>
            <Typography sx={{textAlign: 'center'}}
                        className={styles.careers_bold_text}>{t("common:careersPage:lifeAtAnnaniksTitle")}</Typography>
            <Typography
                className={styles.our_values_subtitle}>{t("common:careersPage:lifeAtAnnaniksSubtitle")}</Typography>
            <Box className={styles.life_annaniks_cart_block}>
                <Box className={styles.life_annaniks_cart_container}>
                    <Box className={styles.life_annaniks_cart_small_block}></Box>
                    <Box className={styles.life_annaniks_cart_medium_block}></Box>
                    <Box className={styles.life_annaniks_cart_larg_block}></Box>
                </Box>
                <Box className={styles.life_annaniks_cart_container}>
                    <Box className={styles.life_annaniks_cart_small_block}></Box>
                    <Box className={styles.life_annaniks_cart_medium_block}></Box>
                    <Box className={styles.life_annaniks_cart_larg_block}></Box>
                </Box>
                <Box className={styles.life_annaniks_cart_container}>
                    <Box className={styles.life_annaniks_cart_small_block}></Box>
                    <Box className={styles.life_annaniks_cart_medium_block}></Box>
                    <Box className={styles.life_annaniks_cart_larg_block}></Box>
                </Box>
                <Box className={styles.life_annaniks_cart_container}>
                    <Box className={styles.life_annaniks_cart_small_block}></Box>
                    <Box className={styles.life_annaniks_cart_medium_block}></Box>
                    <Box className={styles.life_annaniks_cart_larg_block}></Box>
                </Box>
            </Box>
        </>
    );
};

export default Life;