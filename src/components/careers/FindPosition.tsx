import React from 'react';
import {useRouter} from "next/router";
import parse from 'html-react-parser';
import {useTranslation} from "next-i18next";
import {Box, Button, Typography} from "@mui/material";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import styles from "../../styles/Careers.module.css";


const FindPosition = () => {
    const {t} = useTranslation('common');
    const router = useRouter()

    const handleClick = () => {
        router.push('1')
    }
    return (
        <>
            <Typography id='join' sx={{textAlign: 'center'}}
                        className={styles.careers_bold_text}>{t("common:careersPage:findeYourPosition")}</Typography>
            <Typography
                className={styles.our_values_subtitle}>{t("common:careersPage:findeYourPositionSubtitle")}</Typography>
            <Box className={styles.position_cart_container}>
                <Box onClick={handleClick} className={styles.position_cart}>
                    <Box className={styles.position_cart_item}>
                        <Box className={styles.position_cart_top_title}>
                            <Box>Teach</Box>
                        </Box>
                        <Typography variant='h5' className={styles.our_value_cart_info_block_title}>
                            Front-end Developer
                        </Typography>
                        <Typography variant='h6' className={styles.our_value_cart_info_block_subTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </Typography>
                        <Box sx={{display: 'flex', marginTop: '10px'}}>
                            <Box sx={{display: 'flex', marginRight: '60px'}}>
                                <FmdGoodOutlinedIcon style={{color: 'hsla(0,0%,100%,.6)'}}/>
                                <Box sx={{
                                    fontFamily: 'OpenSans-Bold,sans-serif',
                                    color: 'hsla(0,0%,100%,.6)',
                                    marginLeft:'8px'
                                }}>Gyumri</Box>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <AccessTimeOutlinedIcon style={{color: 'hsla(0,0%,100%,.6)'}}/>
                                <Box component="span" sx={{
                                    fontFamily: 'OpenSans-Bold,sans-serif',
                                    color: 'hsla(0,0%,100%,.6)',
                                    marginLeft:'8px'
                                }}>FT</Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.load_more_container}>
                <Button className={styles.load_more_button}>
                    {t("common:careersPage:loadMore")}
                </Button>
            </Box>
            <Box sx={{maxWidth:'1268px',margin:'0 auto'}}>
                <Typography id='join' sx={{textAlign: 'center'}} className={styles.careers_bold_text}>
                    {parse(t("common:careersPage:maybeWeWill"))}
                </Typography>
                <Typography
                    className={styles.our_values_subtitle}>
                     {parse(t("common:careersPage:maybeWeWillSubtitle"))}
                </Typography>
            </Box>
            <Box className={styles.send_container}>
                <Button className={styles.load_more_button}>
                    {t("common:careersPage:send")}
                </Button>
            </Box>
        </>
    );
};

export default FindPosition;