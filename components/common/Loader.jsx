import {
Box,
CircularProgress
} from "@mui/material";

export default function Loader(){

return(
<Box
sx={{
display:"flex",
justifyContent:"center",
p:5
}}
>
<CircularProgress
sx={{
color:"#A78BFA"
}}
/>
</Box>
)

}