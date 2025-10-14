import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Register() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                { fullName, email, password },
                { withCredentials: true }
            );

            // make sure backend sends: { user, token }
            login(res.data.user, res.data.token);

            setMessage("Account created successfully!");
            navigate("/fav");
        } catch (err) {
            setMessage(err.response?.data?.message || "Registration failed");
        }
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#a1d132] px-4">
            <h2 className="text-3xl font-bold mb-6 text-white">GreenSouq</h2>

            <form
                onSubmit={handleRegister}
                className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
            >
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                />
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-2 mb-4 rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    Create Account
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 cursor-pointer font-semibold"
                    >
                        Login
                    </span>
                </p>

                {message && (
                    <p className="text-center text-red-600 mt-3">{message}</p>
                )}
            </form>
        </div>
    );
}
