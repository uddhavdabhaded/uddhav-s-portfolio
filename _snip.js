const fs = require("fs");
const lines = fs.readFileSync("index.html", "utf8").split(/\n/);
for (let i = 409; i < 470 && i < lines.length; i++) {
  const l = lines[i];
  console.log((i + 1) + "|" + (l.length > 300 ? l.slice(0, 200) + "..." : l));
}
