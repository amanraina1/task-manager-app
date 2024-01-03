const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(process.env.PORT, (error) => {
      console.log(`Server is listening on PORT : ${process.env.PORT}...`);
    });
  } catch (error) {
    console.log("Error", error);
  }
};
start();
// app.get("/api/v1/tasks");  - get all tasks
// app.post("/api/v1/tasks");  - create a new task
// app.get("/api/v1/tasks/:id");  - get a single task
// app.patch("/api/v1/tasks/:id");  - update a single task
// app.delete("/api/v1/tasks/:id");  - delete task
