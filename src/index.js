const express = require("express");
const config = require("./shared/config");
const {usersRouter,} = require("./routers");
const { errorMiddlewareFunc } = require("./shared/error");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(usersRouter);

app.use(errorMiddlewareFunc);

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti`);
});
