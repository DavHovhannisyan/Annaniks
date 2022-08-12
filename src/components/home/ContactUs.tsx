import {FC} from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {Box, Grid} from "@mui/material";
import Home from "../../styles/Home.module.css";


const ContactUs: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Box className={Home.contactUsBlock}>
            <Grid container>
                <Grid item xs={12}>
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000" className={Home.contactUsQuestion}>
                        {t("common:question")}
                    </h2>
                </Grid>
                <Grid item xs={12}>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactUsHelp}>
                        {t("common:help")}
                    </p>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Link href={'./'}>
                        <a data-aos="fade-up"
                           data-aos-duration="3000" className={Home.contactUsBtn}>
                            {t("common:contactUs")}
                        </a>
                    </Link>
                </Grid>

            </Grid>
        </Box>
    )
}

export default ContactUs;