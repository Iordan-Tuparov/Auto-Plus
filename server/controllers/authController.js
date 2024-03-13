const router = require("express").Router();

const { SESSION_COOKIE_NAME } = require("../config/env");
const authService = require("../services/authService");

router.post("/login", async (req, res) => {
    try {
        const user = await authService.login(req.body);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ Error: "SomeError" });
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = await authService.register(req.body);
        const token = await authService.createToken(user);

        res.cookie(SESSION_COOKIE_NAME, token);

        res.status(200).json({ email: user.email, _id: user._id });
    } catch (error) {
        res.status(404).json({ Error: "SomeError" });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie(SESSION_COOKIE_NAME);
    res.status(200).json({ status: "ok" });
});

module.exports = router;