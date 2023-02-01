import "reflect-metadata";
import express from "express";
import customerRoutes from "./routes/customers.routes";
import contactsRoutes from "./routes/contacts.routes";
import "express-async-errors"
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();

app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware)
app.listen(3000, () => {
  console.log("Server running in port 3000");
});
