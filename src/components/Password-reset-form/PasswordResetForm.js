import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./passwordResetForm.style.css";

function PasswordResetForm() {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { email, value } = e.target;
    console.log(value);

    setEmail({
      value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="password-reset-form">
      <Card className="p-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
              value={email.email}
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/">Login Now.</a>
      </Card>
    </div>
  );
}

export default PasswordResetForm;
