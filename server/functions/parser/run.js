const path = require('path');
const parse = require('./parse');

(async () => {
    const res = await parse.burgs(path.join(__dirname, '../../../data/burgs.csv'), path.join(__dirname, '../../../data/routes.geojson'));
    const res2 = await parse.routes(path.join(__dirname, '../../../data/burgs.csv'), path.join(__dirname, '../../../data/routes.geojson'));
    // console.log(res);
    console.log(res2);
    // res.forEach(burg => {
    //     console.log(burg.paths);
    // });
})();
