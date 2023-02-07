import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { React } from "react";

import { ContactForm } from "../components/ContactForms";

export const Contact = () => {
  return (
    <Container>
      <Stack gap={5}>
        <div>Contact!</div>
        <ContactForm />
      </Stack>
    </Container>
  );
};
