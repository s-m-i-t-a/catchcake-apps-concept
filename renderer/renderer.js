const appPath = process.argv[2];
const dataString = process.argv[3];

const getRenderOutput = async (appPath, data) => {
  const render = require(appPath);
  const result = await render(data);
  console.log(result);
};

if (appPath && dataString) {
  getRenderOutput(appPath, JSON.parse(dataString));
}
