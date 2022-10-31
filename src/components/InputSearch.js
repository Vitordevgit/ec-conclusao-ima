import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/InputSearch.css";

function InputSearch() {
  return (
    <div className="containerInputSearch">
      <InputBase
        className="onInputSearch"
        placeholder="Pesquisar produtos..."
      />
      <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
}
export default InputSearch;
