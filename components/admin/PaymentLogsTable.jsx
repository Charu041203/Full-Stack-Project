import {
Table,TableBody,TableCell,
TableContainer,TableHead,
TableRow,Paper
} from "@mui/material";

export default function PaymentLogsTable(){

return(
<TableContainer component={Paper}>
<Table>

<TableHead>
<TableRow>
<TableCell>User</TableCell>
<TableCell>Amount</TableCell>
<TableCell>Type</TableCell>
</TableRow>
</TableHead>

<TableBody>

<TableRow>
<TableCell>Shiwani</TableCell>
<TableCell>₹300</TableCell>
<TableCell>Cash</TableCell>
</TableRow>

</TableBody>

</Table>
</TableContainer>
)
}