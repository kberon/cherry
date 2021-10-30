import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SliderComponent from "./SliderComponent";
import { Typography } from "@mui/material";

const SliderBox = (props) => {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <Typography variant="h5" sx={{padding:1}}>
                    Preferences
                </Typography>
                <CardContent>
                    <SliderComponent label='Rate My Professor' defaultValue={30} min={10} max={100} step={10} />
                    <SliderComponent label='Average GPA' defaultValue={3.0} min={0} max={4} step={0.1} />
                </CardContent>
            </Card>
        </>
    )
}

export default SliderBox;