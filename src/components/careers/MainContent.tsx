import React, {FC} from 'react';
import {Box} from "@mui/material";
import OurValues from "./OurValues";
import Life from "./Life";
import FindPosition from "./FindPosition";

const MainContent:FC = () => {
    return (
        <Box sx={{paddingX:'6.9rem'}}>
            <OurValues/>
            <Life/>
            <FindPosition/>
        </Box>
    );
};

export default MainContent;