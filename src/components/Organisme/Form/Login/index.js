import React, { useState } from "react";
import { Fade } from "react-reveal";
import { useHistory } from "react-router";
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
  };
  const history = useHistory();
  const handleClick = () => {
    console.log("data", values);
    history.push("/home");
  };

  if (props.regis)
    return (
      <Fade delay={150}>
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
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <Button
            className="btn mt-5"
            isPrimary
            type="button"
            hasShadow
            onClick={handleClick}
            href="/home"
          >
            Sign Up
          </Button>
          <Button
            className="btn mt-4"
            isSecondary
            type="link"
            hasShadow
            href="/signin"
          >
            Sign In
          </Button>
        </form>
      </Fade>
    );

  return (
    <Fade delay={150}>
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
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
        <Button
          className="btn mt-5"
          isPrimary
          type="button"
          hasShadow
          onClick={handleClick}
          href="/home"
        >
          Sign In
        </Button>
        <Button
          className="btn mt-4"
          isSecondary
          type="link"
          hasShadow
          href="/signup"
        >
          Sign Up
        </Button>
      </form>
    </Fade>
  );
};

export default Login;
