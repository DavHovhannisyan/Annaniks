import {FC, useCallback, useState} from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {Box, Grid} from "@mui/material";
import Home from "../../styles/Home.module.css";
import {CustomModal} from "../index";


const ContactUs: FC = () => {
    const {t} = useTranslation('common');
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleOpenModal = useCallback(() => {
        setShowModal(true)
    }, [])
    return (
        <Box className={Home.contactUsBlock}>
            <Grid container>
                <Grid item container justifyContent={"center"} xs={12}>
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000" className={Home.contactUsQuestion}>
                        {t("common:question")}
                    </h2>
                </Grid>
                <Grid container justifyContent={"center"} item xs={12}>
                    <p data-aos="fade-up"
                       data-aos-duration="3000" className={Home.contactUsHelp}>
                        {t("common:help")}
                    </p>
                </Grid>
                <Grid item container xs={12} display={"flex"} justifyContent={"center"}>
                    <button onClick={handleOpenModal} data-aos="fade-up"
                            data-aos-duration="3000" className={Home.contactUsBtn}>
                        {t("common:contactUs")}
                    </button>
                </Grid>

            </Grid>
            {showModal ? <CustomModal showModal={showModal} setShowModal={setShowModal}/> : null}
        </Box>
    )
}

export default ContactUs;