import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"centre"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h4" padding={3} textAlign={"center"}>
            {!isSignup ? "Login" : "Signup"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              margin="normal"
              placeholder="Name"
              type={"text"}
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            margin="normal"
            placeholder="Email"
            type={"email"}
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            margin="normal"
            placeholder="Password"
            type={"password"}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            sx={{ borderRadius: 10, marginTop: 3 }}
          >
            Submit
          </Button>
          <Button
            sx={{ borderRadius: 10, marginTop: 3 }}
            onClick={() => setIsSignup(!isSignup)}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
