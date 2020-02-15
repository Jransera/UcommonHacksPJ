//const parser = require('../parser/parse');
const connect = require ('./connect');

//const connections = parser.burgs();
//const loc = {};
(async () => {
    const trees = await connect.tree();

    console.log(trees);
})();
