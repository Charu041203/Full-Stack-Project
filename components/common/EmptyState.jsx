import {
Paper,
Typography
} from "@mui/material";

export default function EmptyState({
message="No data found"
}){

return(
<Paper
elevation={0}
sx={{
p:5,
textAlign:"center",
borderRadius:5,
background:"#FAF5FF"
}}
>
<Typography
variant="h6"
fontWeight={700}
>
{message}
</Typography>

</Paper>
)

}