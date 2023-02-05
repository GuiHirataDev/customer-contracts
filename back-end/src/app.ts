import "reflect-metadata";
import express from "express";
import customerRoutes from "./routes/customers.routes";
import contactsRoutes from "./routes/contacts.routes";
import sessionRoutes from "./routes/sessions.routes";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;
