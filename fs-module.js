const fs = require("fs");
// synchronous or non-blocking
const data = fs.readFileSync("./directory/data.txt", "utf-8");
console.log(data);
fs.writeFileSync("./directory/clone.txt", data, { flag: "a" });

// a-synchronous (call back)
fs.readFile("./directory/data.txt", "utf-8", (err, res) => {
  if (err) return;
  console.log(res);
  fs.writeFile("./directory/clone.txt", res, { flag: "a" }, (err, res) => {
    if (err) return;
  });
});
