const express = require("express");
const app = express();

const tasks = require("./routes/tasks.routes");

const port = 5000;

//middleware

app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')          -   get all the tasks
// app.post('/api/v1/tasks')         -   create a new tasks
// app.get('/api/v1/tasks/:id')      -   get single task
// app.patch('/api/v1/tasks/:id')    -   update task
// app.delete('/api/v1/tasks/:id')   -   delete task

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
