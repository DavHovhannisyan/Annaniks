import {FC} from "react";
import {Box, Container, Grid} from "@mui/material";

const Logo: FC = () => {
    return (
        <Box sx={{
            width: "40px",
            height: "40px",
        }}>
            <Grid container spacing={0.25}>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#FDFDFD",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#FDFDFD",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor:"#9ED946",
                    }}/>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{
                        width: "12px",
                        height: "11px",
                        backgroundColor: "#9ED946",
                        transform: "translate(3px, 3px)"
                    }}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Logo;