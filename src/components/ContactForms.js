import { React } from "react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";

export const ContactForm = () => {
  const [query, setQuery] = useState();

  const titles = [
    {
      value: "Mr",
      label: "Mr.",
    },
    {
      value: "Mrs",
      label: "Mrs.",
    },
    {
      value: "Ms",
      label: "Ms.",
    },
    {
      value: "Dr",
      label: "Dr.",
    },
  ];

  const initialValues = {
    title: "Mr",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    feedback: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter a first name.")
      .min(2, "Please enter a valid first name."),
    lastName: Yup.string()
      .required("Please enter a last name.")
      .min(2, "Please enter a valid last name."),
    age: Yup.number()
      .required("Please enter your age.")
      .min(18, "User must be 18 and over.")
      .max(100, "User cannot be over 100."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
    feedback: Yup.string()
      .min(10, "Please enter a minimum of 10 characters.")
      .max(250, "250 characters max"),
  });

  const onSubmit = ({ title, firstName, lastName, age, email, feedback }) => {
    const query = {
      title,
      age,
      firstName,
      lastName,
      email,
      feedback,
    };

    setQuery(query);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(query);

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={3}>
          <Box>
            <TextField
              sx={{
                background: "#ffffff",
                mr: 2,
                width: "10vw",
              }}
              select
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              helperText={formik.touched.title && formik.errors.title}
            >
              {titles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{
                background: "#FFFFFF",
                ml: 2,
              }}
              id="age"
              name="age"
              label="Age"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </Box>

          <TextField
            sx={{ background: "#ffffff" }}
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            type="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            sx={{
              background: "#ffffff",
            }}
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            type="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            sx={{
              background: "#FFFFFF",
            }}
            color="secondary"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            multiline
            rows={4}
            sx={{
              background: "#FFFFFF",
            }}
            fullWidth
            id="feedback"
            name="feedback"
            label="feedback"
            type="feedback"
            value={formik.values.feedback}
            onChange={formik.handleChange}
            error={formik.touched.feedback && Boolean(formik.errors.feedback)}
            helperText={formik.touched.feedback && formik.errors.feedback}
            inputProps={{ maxLength: 250 }}
          />

          <Button color="warning" variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
