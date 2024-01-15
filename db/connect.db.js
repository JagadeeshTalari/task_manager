const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://<username>:<password>@cluster0.wed2olg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to the DB....`);
  })
  .catch((err) => console.log(err));
