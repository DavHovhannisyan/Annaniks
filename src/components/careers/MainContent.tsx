import React, {FC} from 'react';
import {Box} from "@mui/material";
import OurValues from "./OurValues";
import Life from "./Life";
import FindPosition from "./FindPosition";
import styles from '../../styles/Careers.module.css'

interface IData {
    id: string
    position_type: string
    position_type_background: string
    position_type_color: string
    title: string
    description: string
    location: string
    work_time: string
    language: string
    slug: string
}

interface IProps {
    data: Array<IData>
}

const MainContent: FC<IProps> = ({data}) => {
    return (
        <Box className={styles.careers_main_contain}>
            <OurValues/>
            <Life/>
            <FindPosition data={data}/>
        </Box>
    );
};

export default MainContent;