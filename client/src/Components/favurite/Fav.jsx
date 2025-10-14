import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Fav() {
    const [plantName, setPlantName] = useState("");
    const { user, token } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!plantName.trim()) return alert("Please enter a plant name");

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/fav",
                { plantName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("🌿 Favorite plant added successfully!");
            setPlantName("");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Something went wrong");
        }
    };


    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen text-center">
                <h2 className="text-xl font-semibold">
                    Please <a href="/login" className="text-green-600 underline">login</a> to add your favorite plant 🌱
                </h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#a1d132]">
            <div className="bg-white p-8  rounded-md w-[90%] sm:w-[400px]">
                <h2 className="text-2xl font-bold text-center mb-6">Add Favorite Plant</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter plant name..."
                        value={plantName}
                        onChange={(e) => setPlantName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                        Save Favorite
                    </button>
                </form>
            </div>
        </div>
    );
}
