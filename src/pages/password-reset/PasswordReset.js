import React from "react";
import "./PasswordReset.style.css";
import { Button } from "react-bootstrap";
import PasswordResetForm from "../../components/Password-reset-form/PasswordResetForm";

function PasswordReset() {
  return (
    <div className="PasswordReset-page bg-dark login-page">
      <PasswordResetForm />
    </div>
  );
}

export default PasswordReset;
