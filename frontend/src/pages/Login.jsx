import { useState } from "react";
import toast from "react-hot-toast";
import API from "../api/axios";

import Input from "../components/common/Input";

import Button from "../components/common/Button";

import "../styles/auth.css";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
    loginSuccess,
} from "../redux/authSlice";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] =
        useState({
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
            const { data } =
                await API.post(
                    "/auth/login",
                    formData
                );

            // Save token
            localStorage.setItem(
                "token",
                data.token
            );

            // Save user
            localStorage.setItem(
                "user",
                JSON.stringify(
                    data.user
                )
            );

            // Redux dispatch
            dispatch(
                loginSuccess({
                    user: data.user,

                    token: data.token,
                })
            );

            // Navigate
            toast.success(
                "Login Successful"
            );

            navigate("/");
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Login Failed"
            );
        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>

            <form
                onSubmit={handleSubmit}
                className="auth-form"
            >
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
                    text="Login"
                    type="submit"
                />

                <p>
                    Don't have an
                    account?
                </p>

                <button
                    type="button"
                    onClick={() =>
                        navigate(
                            "/register"
                        )
                    }
                    className="auth-btn"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Login;