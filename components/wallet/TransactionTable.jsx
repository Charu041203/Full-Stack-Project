import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Typography,
  Chip,
} from "@mui/material";

const transactions = [
  { id: 1, type: "Debit", amount: 50, date: "10 Apr 2026", status: "Completed" },
  { id: 2, type: "Credit", amount: 120, date: "09 Apr 2026", status: "Added" },
  { id: 3, type: "Debit", amount: 75, date: "08 Apr 2026", status: "Completed" },
  { id: 4, type: "Credit", amount: 40, date: "07 Apr 2026", status: "Added" },
];

export default function TransactionTable() {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 5,
        border: "1px solid #eee4f3",
        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#5C5470", px: 3, pt: 3 }}
      >
        Recent Transactions
      </Typography>

      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#fcf8ff" }}>
            <TableCell sx={{ color: "#6D5D7B", fontWeight: 700 }}>Type</TableCell>
            <TableCell sx={{ color: "#6D5D7B", fontWeight: 700 }}>Amount</TableCell>
            <TableCell sx={{ color: "#6D5D7B", fontWeight: 700 }}>Date</TableCell>
            <TableCell sx={{ color: "#6D5D7B", fontWeight: 700 }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((t) => (
            <TableRow key={t.id} hover>
              <TableCell sx={{ color: "#5C5470", fontWeight: 600 }}>
                {t.type}
              </TableCell>

              <TableCell sx={{ color: "#7A708A" }}>
                {t.amount}
              </TableCell>

              <TableCell sx={{ color: "#7A708A" }}>
                {t.date}
              </TableCell>

              <TableCell>
                <Chip
                  label={t.status}
                  size="small"
                  sx={{
                    backgroundColor:
                      t.status === "Added" ? "#EAF4FF" : "#E2F0CB",
                    color: "#5C5470",
                    fontWeight: 600,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}