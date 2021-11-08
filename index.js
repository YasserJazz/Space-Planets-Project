const fs = require("fs");
const parse = require("csv-parse");

const result = [];

fs.createReadStream("./kepler_data.csv")
  .on("data", (data) => {
    result.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(result);
  });
