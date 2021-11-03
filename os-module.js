const os = require("os");
// OS general information
const user_info = os.userInfo();
console.log(user_info);
const currentOS = {
  name: os.type(),
  version: os.version(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
