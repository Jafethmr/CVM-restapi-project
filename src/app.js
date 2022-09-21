import express from "express";
import indexRoutes from "./routes/index.routes.js";
import devocionalesRoutes from "./routes/devocionales.routes.js";

const app = express();

app.use(express.json());

app.use("/api", indexRoutes);
app.use("/api", devocionalesRoutes);

app.use((req, res, next) => {
  res.status(400).json({ message: "endpoint Not Found" });
});

export default app;
