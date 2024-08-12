import { Box, Typography } from "@mui/material";
import { data } from "../data";

function AboutMe() {
    return (
        <>
            <Box my={2}>
                <Typography variant="h5" fontFamily={"fantasy"}>
                    About Me
                </Typography>
                <Typography letterSpacing={1}>
                    {data.about_me}
                </Typography>
            </Box>
        </>
    );
}

export default AboutMe;