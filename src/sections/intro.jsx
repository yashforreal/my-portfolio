import { Typography } from "@mui/material";
import { data } from "../data";

export function Intro() {
    return (
        <>
            <Typography variant="h2" fontFamily={"monospace"}>
                Hi, I'm {data.name}
            </Typography>
        </>
    )
}