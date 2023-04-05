import cookieParser from "cookie-parser";
import express from "express";
const app = express();

import errorMiddleware from "./middleware/error.js";

app.use(express.json());
app.use(cookieParser());

// Route Imports
import product from "./routes/product.routes.js";
import user from "./routes/user.routes.js";
import order from "./routes/order.routes.js";

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for errors
app.use(errorMiddleware);

export default app;
