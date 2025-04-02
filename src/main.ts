import express from "express";

import { config } from "./configs/config";
import * as mongoose from "mongoose";

const app = express();
app.use(express.json());

app.listen(config.port, async () => {
  await mongoose.connect(config.mongoUrl);
  console.log(`Server has been started on port ${config.port}`);
});
