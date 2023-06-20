const app = require("./src/app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

// server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
