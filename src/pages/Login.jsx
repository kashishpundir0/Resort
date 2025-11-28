import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Reset error
        setErrorMsg("");

        // Fake Auth Logic
        let role = "user";

        if (email === "admin@gmail.com" && password === "admin123") {
            role = "admin";
        } else if (email === "user@gmail.com" && password === "user123") {
            role = "user";
        } else {
            setErrorMsg("Invalid email or password");
            return;
        }

        // Save to localStorage
        localStorage.setItem("token", "dummy-token-123");
        localStorage.setItem("role", role);

        // Redirect
        if (role === "admin") {
            navigate("/admin-dashboard");
        } else {
            navigate("/");   // user → homepage
        }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
                    Login
                </h2>

                {errorMsg && (
                    <p className="text-red-500 text-center mb-3">{errorMsg}</p>
                )}

                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />

                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    className="w-full p-2 border rounded mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
