import { Request, Response } from "express";
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const addressRoutes = require("./routes/address.routes");
const authRoutes = require("./routes/auth.routes");
const paymentRoutes = require("./routes/payment.routes");
const bookingRoutes = require("./routes/booking.routes");
const packageRoutes = require("./routes/package.routes");
const forumRoutes = require("./routes/forum.routes");

//configs
require("./configs/database");

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://prerokglobal.web.app"],
    credentials: true,
  })
);
app.use(cookieParser());

//routes
app.use("/api/users", userRoutes);
app.use("/api/addressbook", addressRoutes);
app.use(authRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/forum", forumRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

module.exports = app;
