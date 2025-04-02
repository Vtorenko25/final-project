import express from "express";
import * as mongoose from "mongoose";

import { config } from "./configs/config";

const app = express();
app.use(express.json());

app.listen(config.port, async () => {
  await mongoose.connect(config.mongoUrl);
  console.log(`Server has been started on port ${config.port}`);
});
