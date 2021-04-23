
import express from "express";

// Connecting to database
import "./config/dbconnect";

//importing routes
import postRoutes from "./routers/postRoutes";
import authRoutes from "./routers/authRoutes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

//catch all routes not on the server
app.all("*", (req, res, next) => {
    res
    .status(404)
    .json({ message: `cannot find ${req.originalUrl} on the server`});
})

//
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message});
})

app.listen(4000, () => console.log("Server up and running"));
