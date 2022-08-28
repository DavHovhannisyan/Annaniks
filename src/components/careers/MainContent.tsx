import React, {FC} from 'react';
import {Box} from "@mui/material";
import OurValues from "./OurValues";
import Life from "./Life";
import FindPosition from "./FindPosition";
import styles from '../../styles/Careers.module.css'

const MainContent:FC = () => {
    return (
        <Box className={styles.careers_main_contain}>
            <OurValues/>
            <Life/>
            <FindPosition/>
        </Box>
    );
};

export default MainContent;