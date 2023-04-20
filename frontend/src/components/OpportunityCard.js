import React from "react";
import { Card, Avatar, Stack, Typography, Drawer } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const OpportunityCard = ({ opportunity }) => {
  const values = [
    {
      name: "Education Level",
      level:
        opportunity?.educationLevel.length && opportunity?.educationLevel[0],
    },
    {
      name: "Location",
      level: opportunity?.country,
    },
    {
      name: "Type",
      level: opportunity?.type,
    },
    {
      name: "Application Deadline",
      level: opportunity?.deadLine,
    },
    {
      name: "Duration",
      level: opportunity?.duration,
    },
  ];
  return (
    <Stack
      sx={{
        background: "#F7F8F9",
        borderRadius: "70px",
        padding: "50px 70px",
        width: "70vw",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "left",
          gap: "20px",
        }}
      >
        <Avatar
          sx={{ height: "60px", width: "60px" }}
          alt="Remy Sharp"
          src={opportunity?.image?.imageAdress}
          variant="rounded"
        ></Avatar>
        <Stack sx={{ gap: "10px" }}>
          <Typography>{opportunity?.provider}</Typography>
          <Typography>Organization</Typography>
        </Stack>
      </Stack>

      <Typography sx={{ margin: "20px 0px", fontSize: "1.1rem" }}>
        {opportunity?.description?.slice(0, 800)}
      </Typography>
      <hr style={{ width: "100%" }} />

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {values?.map((entry, index) => {
          return (
            <Stack key={index} sx={{ gap: "10px" }}>
              <Typography sx={{ color: "#64748B" }}>{entry?.name}</Typography>
              <Typography sx={{ color: "" }}>{entry?.level}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default OpportunityCard;
