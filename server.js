const run = require('./app/models');
const { queriesDrilling } = require('./app/utils/utils');

async function init(){
    await run();
    await queriesDrilling();
};

init();