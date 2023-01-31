import "reflect-metadata"
import express from "express";
import customerRoutes from "./routes/customers.routes";

const app = express();

app.use(express.json());
app.use("/customers", customerRoutes);

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
