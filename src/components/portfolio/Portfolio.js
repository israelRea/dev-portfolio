import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import PortfolioBlock2 from "./PortfolioBlock2";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <h1 style={{marginTop: 50, marginBottom: 20}}>Web development</h1>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolioWeb.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock2 _width={440} _height={260} image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            <h1 style={{marginTop: 50}}>Mobile Apps</h1>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock _width={460} _height={480} image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};