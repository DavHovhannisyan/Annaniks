import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {useTranslation} from "next-i18next";
import styles from '../../styles/Careers.module.css'

const OurValues: FC = () => {
    const {t} = useTranslation('common');

    return (
        <>
            <Typography
                sx={{textAlign:'center'}} className={styles.careers_bold_text}
                variant={'h3'}>
                {t("common:careersPage:ourValues")}
            </Typography>
            <Typography className={styles.our_values_subtitle}
                        variant={"h4"}>
                {t("common:careersPage:ourValuesSubtitle")}
            </Typography>
            <Box sx={{display: 'flex', flexWrap: "wrap", pb: '150px'}}>
                <Box className={styles.our_value_cart}>
                    <Box className={styles.our_value_cart_item}>
                        <Box className={styles.our_value_cart_image}/>
                        <Box className={styles.our_value_cart_info_block}>
                            <Typography variant='h5' className={styles.our_value_cart_info_block_title}>
                                Ambition
                            </Typography>
                            <Typography variant='h6' className={styles.our_value_cart_info_block_subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.our_value_cart}>
                    <Box className={styles.our_value_cart_item}>
                        <Box className={styles.our_value_cart_image}/>
                        <Box className={styles.our_value_cart_info_block}>
                            <Typography variant='h5' className={styles.our_value_cart_info_block_title}>
                                Ambition
                            </Typography>
                            <Typography variant='h6' className={styles.our_value_cart_info_block_subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.our_value_cart}>
                    <Box className={styles.our_value_cart_item}>
                        <Box className={styles.our_value_cart_image}/>
                        <Box className={styles.our_value_cart_info_block}>
                            <Typography variant='h5' className={styles.our_value_cart_info_block_title}>
                                Ambition
                            </Typography>
                            <Typography variant='h6' className={styles.our_value_cart_info_block_subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.our_value_cart}>
                    <Box className={styles.our_value_cart_item}>
                        <Box className={styles.our_value_cart_image}/>
                        <Box className={styles.our_value_cart_info_block}>
                            <Typography variant='h5' className={styles.our_value_cart_info_block_title}>
                                Ambition
                            </Typography>
                            <Typography variant='h6' className={styles.our_value_cart_info_block_subTitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default OurValues;