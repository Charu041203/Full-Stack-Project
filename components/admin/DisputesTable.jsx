import {
Table,TableBody,TableCell,
TableContainer,TableHead,
TableRow,Paper,Button
} from "@mui/material";

export default function DisputesTable(){

return(
<TableContainer component={Paper}>
<Table>

<TableHead>
<TableRow>
<TableCell>Issue</TableCell>
<TableCell>Status</TableCell>
<TableCell>Action</TableCell>
</TableRow>
</TableHead>

<TableBody>

<TableRow>
<TableCell>Late Arrival</TableCell>
<TableCell>Open</TableCell>

<TableCell>
<Button>
Resolve
</Button>
</TableCell>

</TableRow>

</TableBody>

</Table>
</TableContainer>
)
}