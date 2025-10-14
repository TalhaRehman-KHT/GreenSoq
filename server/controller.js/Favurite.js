import Favorite from "../model/Favorite.js";

export const favuriteAdd = async (req, res) => {
    try {
        const { plantName } = req.body;
        const userId = req.user.id;


        const existing = await Favorite.findOne({ user: userId, plantName });
        if (existing) {
            return res.status(400).json({ message: "Already added to favorites" });
        }

        // create new favorite
        const favorite = new Favorite({
            user: userId,
            plantName,
        });

        await favorite.save();

        res.status(201).json({
            message: "Added to favorites",
            favorite,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding favorite",
            error: error.message,
        });
    }
};
