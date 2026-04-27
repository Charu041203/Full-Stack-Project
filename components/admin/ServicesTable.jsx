import {
Table,TableBody,TableCell,
TableContainer,TableHead,
TableRow,Paper,Button
} from "@mui/material";

export default function ServicesTable(){

const services=[
{
title:"Kitchen Cleaning",
provider:"Rohit"
},
{
title:"Animal Care",
provider:"Priya"
}
];

return(
<TableContainer component={Paper} sx={{borderRadius:4}}>
<Table>

<TableHead>
<TableRow>
<TableCell>Service</TableCell>
<TableCell>Provider</TableCell>
<TableCell>Action</TableCell>
</TableRow>
</TableHead>

<TableBody>

{services.map((s,i)=>(

<TableRow key={i}>
<TableCell>{s.title}</TableCell>
<TableCell>{s.provider}</TableCell>

<TableCell>
<Button size="small">
Approve
</Button>
</TableCell>

</TableRow>

))}

</TableBody>

</Table>
</TableContainer>
)
}