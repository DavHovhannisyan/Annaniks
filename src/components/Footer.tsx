import {FC} from "react";
import {Grid, Container} from "@mui/material";
import {useTranslation} from "next-i18next";

const Footer: FC = () => {
    const {t} = useTranslation('common');
    return (
        <footer>
            <Container maxWidth={"lg"}>
                <Grid container>
                    <Grid padding={"20px"} item xs={12}>
                        <p className={"footer-content"}>
                            {t("common:copyright")}
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;