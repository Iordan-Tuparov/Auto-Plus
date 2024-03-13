const router = require("express").Router();

const authService = require("../services/authService");

router.post("/register", async (req, res) => {
    try {
        const createdUser = await authService.register(req.body);

        res.status(200).json({
            username: createdUser.username,
            _id: createdUser._id,
        });
    } catch (error) {
        res.status(404).json({ Error: "Somethings is wrong" });
    }
});

module.exports = router;
