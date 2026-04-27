import {
TextField,
InputAdornment
} from "@mui/material";

import SearchIcon
from "@mui/icons-material/Search";

export default function SearchBar(props){

return(
<TextField
fullWidth
placeholder="Search..."
{...props}

InputProps={{
startAdornment:(
<InputAdornment position="start">
<SearchIcon/>
</InputAdornment>
)
}}

sx={{
"& .MuiOutlinedInput-root":{
borderRadius:4,
background:"#FAF5FF"
}
}}
/>
)

}