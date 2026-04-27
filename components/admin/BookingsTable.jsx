import {
Table,TableBody,TableCell,
TableContainer,TableHead,
TableRow,Paper
} from "@mui/material";

export default function BookingsTable(){

const bookings=[
{
user:"Shiwani",
service:"Cleaning",
status:"Completed"
}
];

return(
<TableContainer component={Paper}>
<Table>

<TableHead>
<TableRow>
<TableCell>User</TableCell>
<TableCell>Service</TableCell>
<TableCell>Status</TableCell>
</TableRow>
</TableHead>

<TableBody>

{bookings.map((b,i)=>(

<TableRow key={i}>
<TableCell>{b.user}</TableCell>
<TableCell>{b.service}</TableCell>
<TableCell>{b.status}</TableCell>
</TableRow>

))}

</TableBody>

</Table>
</TableContainer>
)
}