import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Dropdown from "./DropDown";
import { useDispatch } from "react-redux";
import { searchOpportunities } from "../features/opportunities/actions/opportunities";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [educationLevel, setEducationLevel] = useState("Select");
  const [type, setType] = useState("Select");
  const [country, setCountry] = useState("Select");

  const [showEducation, setShowEducation] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  const educationOptions = ["POSTGRADUATE", "GRADUATE", "UNDERGRADUATE"];
  const typeOptions = ["Internship", "Scholarship"];
  const countryOptions = ["Ethiopia", "germany", "UK", "USA"];

  const handleSearch = () => {
    const search = {
      educationLevel:
        educationLevel !== "Select" ? educationLevel.toUpperCase() : "",
      country: country !== "Select" ? country.toUpperCase() : "",
      type: type !== "Select" ? type.toUpperCase() : "",
    };
    dispatch(searchOpportunities(search));
  };
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "40px",
        borderRadius: "70px",
        background: "#F7F8F9",
        width: "73vw",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
        margin: "80px auto 30px",
        padding: "10px 30px",
      }}
    >
      <Stack sx={{ flexDirection: "row", gap: "70px" }}>
        <Stack sx={{ flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontWeight: "bold" }}>Education Level</Typography>
          <Typography sx={{ fontWeight: "" }}>
            {educationLevel.toUpperCase()}
          </Typography>
        </Stack>
        <Dropdown
          options={educationOptions}
          anchorEl={showEducation}
          setAnchorEl={setShowEducation}
          setSelected={setEducationLevel}
        />
      </Stack>

      <Stack sx={{ flexDirection: "row", gap: "70px" }}>
        <Stack sx={{ flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontWeight: "bold" }}>Type</Typography>
          <Typography sx={{ fontWeight: "" }}>{type.toUpperCase()}</Typography>
        </Stack>
        <Dropdown
          options={typeOptions}
          anchorEl={showType}
          setAnchorEl={setShowType}
          setSelected={setType}
        />
      </Stack>

      <Stack sx={{ flexDirection: "row", gap: "70px" }}>
        <Stack sx={{ flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontWeight: "bold" }}>Location</Typography>
          <Typography sx={{ fontWeight: "" }}>
            {country.toUpperCase()}
          </Typography>
        </Stack>
        <Dropdown
          options={countryOptions}
          anchorEl={showCountry}
          setAnchorEl={setShowCountry}
          setSelected={setCountry}
        />
      </Stack>

      <Button
        sx={{
          background: "#1D4ED8",
          color: "white",
          borderRadius: "30px",
          padding: "10px 70px",
          fontSize: "1.2rem",
          "&:hover": {
            background: "#1D4ED8",
            color: "white",
            opacity: "0.8",
          },
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchComponent;
