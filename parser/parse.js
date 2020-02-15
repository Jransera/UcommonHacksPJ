const path = require('path');
const fs = require('fs');

const csv = require('csv-parser');

const routes = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/routes.geojson')));

const getBurgs = () => {
    return new Promise((fulfill) => {
        const results = [];
        fs.createReadStream(path.join(__dirname, '../data/burgs.csv'))
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                fulfill(results);
            });
    });
};

const parse = async () => {
    const burgs = await getBurgs();
    
};

(async () => {
    await parse();
})();
