import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
const ArAccordionMenu = ({ question, answer }) => {
  return (
    <Accordion
      sx={{
        borderRadius: "8px !important",
        ":before": { content: "none" },
        marginBottom: "22px !important",
        padding: "8px !important",
      }}
    >
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography sx={{ fontWeight: "bold !important" }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ArAccordionMenu;
