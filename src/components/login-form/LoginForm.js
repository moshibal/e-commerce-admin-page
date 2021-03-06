import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./longinForm.style.css";
const initialState = {
  email: "",
  password: "",
};

function LoginForm() {
  const [login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <div className="loginform">
      <Card className="p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
              value={login.email}
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/reset-password">Forgot Password?</a>
      </Card>
    </div>
  );
}

export default LoginForm;
