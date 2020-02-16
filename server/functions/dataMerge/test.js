
const path = require('path');
const connect = require('./connect');
const merge = require('./merge');

// let data = merge.getStart(trees);
// console.log(data);

(async () => {
    let trees = await connect.tree(path.join(__dirname, '../../../data/burgs.csv'), path.join(__dirname, '../../../data/routes.geojson'));
    let obj = await merge.getStart(trees);
    // console.log(obj.text + "\n\n\n");
    // obj = await merge.makeChoice(obj.enNum, obj.event, obj.choices[0], obj.city, trees);
    // obj = await merge.makeChoice(obj.enNum, obj.event, obj.choices[0], obj.city, trees);
    // obj = await merge.makeChoice(obj.enNum, obj.event, obj.choices[0], obj.city, trees);
    console.log(obj.choices);
    // obj = await merge.makeChoice(obj.enNum, obj.event, obj.choices[0], obj.city);
    // console.log(obj);
})();
