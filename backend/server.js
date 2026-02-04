const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Discord Booster Backend is alive!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Mock login for testing
app.get("/auth/mock-login", (req, res) => {
  req.session.user = {
    id: "123456",
    username: "TestUser",
    discriminator: "0001",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png"
  };
  res.redirect(process.env.FRONTEND_URL + "/dashboard");
});
