import {
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper,
Chip
} from "@mui/material";

export default function UsersTable(){

const users=[
{
name:"Shiwani",
role:"User",
status:"Active"
},

{
name:"Rohit",
role:"Provider",
status:"Pending"
},

{
name:"Priya",
role:"User",
status:"Blocked"
}
];

return(

<TableContainer
component={Paper}
sx={{borderRadius:4}}
>

<Table>

<TableHead>
<TableRow>

<TableCell>Name</TableCell>

<TableCell>Role</TableCell>

<TableCell>Status</TableCell>

</TableRow>
</TableHead>


<TableBody>

{users.map((u,i)=>(

<TableRow key={i}>

<TableCell>
{u.name}
</TableCell>

<TableCell>
{u.role}
</TableCell>

<TableCell>

<Chip
label={u.status}

color={
u.status==="Active"
? "success"

: u.status==="Pending"
? "warning"

: "error"
}
/>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</TableContainer>

);

}