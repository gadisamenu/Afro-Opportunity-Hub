import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

function Dropdown({ options, anchorEl, setAnchorEl, setSelected }) {
  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const options = ['Postgraduate', 'Undergraduate', 'Grad'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    // setSelected(event.target.value);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ArrowDropDown />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleClose();
              setSelected(option);
            }}
          >
            {option.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Dropdown;
