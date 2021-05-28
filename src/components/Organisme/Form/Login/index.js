import React, { useState } from "react";
import { Button, TextField } from "../../../atom";

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log("data", values);
  };

  if (props.regis)
    return (
      <form className="d-flex flex-column">
        <h1 className="mb-4">Sign In</h1>
        <TextField
          className="mt-5"
          type="text"
          placeholder="UserName"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <TextField
          className="mt-5"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          className="mt-5"
          name="passoword"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
        <Button className="btn mt-5" isPrimary type="button" hasShadow>
          Sign In
        </Button>
        <Button className="btn mt-4" isSecondary type="button" hasShadow>
          Sign Up
        </Button>
      </form>
    );

  return (
    <form className="d-flex flex-column">
      <h1 className="mb-4">Sign In</h1>
      <TextField
        className="mt-5"
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="passoword"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={values.password}
      />
      <Button className="btn mt-5" isPrimary type="button" hasShadow>
        Sign In
      </Button>
      <Button className="btn mt-4" isSecondary type="button" hasShadow>
        Sign Up
      </Button>
    </form>
  );
};

export default Login;
