const express = require("express");
const additionRouter = require("./routes/addition.js");
const multiplicationRouter = require("./routes/multiplication.js");
const subtractionRouter = require("./routes/subtraction.js");
const divisionRouter = require("./routes/division.js");
const modulusRouter = require("./routes/modulus.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(additionRouter);
app.use(multiplicationRouter);
app.use(subtractionRouter);
app.use(divisionRouter);
app.use(modulusRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
