const util = require("util");
async function hello() {
  console.log("I am a async func");
  return 12;
}
const func = util.callbackify(hello);
func((err, value) => {
  if (!err) {
    console.log(value);
  }
});
console.log(util.types);
