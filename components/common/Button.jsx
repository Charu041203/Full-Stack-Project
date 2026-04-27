import { Button as MuiButton } from "@mui/material";

export default function Button({
children,
variant="contained",
...props
}){

return(
<MuiButton
variant={variant}
{...props}

sx={{
borderRadius:12,
textTransform:"none",
fontWeight:600,
px:3,
py:1.2,

background:
variant==="contained"
?"linear-gradient(90deg,#A78BFA,#F472B6)"
:"#FAF5FF",

color:
variant==="contained"
?"white"
:"#7C3AED",

borderColor:"#C4B5FD",

"&:hover":{
transform:"translateY(-2px)",
background:
variant==="contained"
?"linear-gradient(90deg,#8B5CF6,#EC4899)"
:"#F3E8FF"
}
}}
>
{children}
</MuiButton>
)

}