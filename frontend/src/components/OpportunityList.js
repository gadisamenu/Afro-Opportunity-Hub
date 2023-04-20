import React from "react";
import { Stack } from "@mui/material";
import OpportunityCard from "./OpportunityCard";
import { useSelector } from "react-redux";

const OpportunityList = () => {
  const { opportunities } = useSelector((state) => state.opportunities);

  return (
    <Stack
      sx={{
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      {opportunities.length &&
        opportunities.map((opportunity, index) => {
          return <OpportunityCard index={index} opportunity={opportunity} />;
        })}
    </Stack>
  );
};

export default OpportunityList;
