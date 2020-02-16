
const path = require('path');
const connect = require('./connect');
const merge = require('./merge');

let trees = await connect.tree(path.join(__dirname, '../../../data/burgs.csv'), path.join(__dirname, '../../../data/routes.geojson'));

console.log(trees);
// let data = merge.getStart(trees);
// console.log(data);

(async () => {
    let trees = await connect.tree();
    let obj = await getStart();
    console.log(obj);
})();
