import { useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

import Input from "../components/common/Input";

import Button from "../components/common/Button";

import "../styles/auth.css";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        formData
      );

      toast.success(
        "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>

      <form
        onSubmit={handleSubmit}
        className="auth-form"
      >
        <Input
          type="text"
          placeholder="Name"
          name="name"
          onChange={
            handleChange
          }
        />

        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={
            handleChange
          }
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={
            handleChange
          }
        />

        <Button
          text="Register"
          type="submit"
        />

        <p>
          Already have an
          account?
        </p>

        <button
          type="button"
          onClick={() =>
            navigate(
              "/login"
            )
          }
          className="auth-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;