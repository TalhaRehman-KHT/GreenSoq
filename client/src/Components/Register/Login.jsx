import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password },
                { withCredentials: true }
            );

            // make sure backend sends: { user, token }
            login(res.data.user, res.data.token);

            setMessage("Login successful!");
            navigate("/fav");
        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#a1d132] px-4">
            <h2 className="text-3xl font-bold mb-6 text-white">GreenSouq</h2>

            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    Login
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-600 cursor-pointer font-semibold"
                    >
                        Sign Up
                    </span>
                </p>

                {message && (
                    <p className="text-center text-red-600 mt-3">{message}</p>
                )}
            </form>
        </div>
    );
}
