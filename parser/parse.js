const path = require('path');
const fs = require('fs');

const csv = require('csv-parser');
const Vector2 = require('victor');

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

const parse_burgs = async () => {
    const burgs = await getBurgs();
    burgs.forEach(burg => {
        const lon = burg["Longitude"];
        const lat = burg["Latitude"];
        burg.paths = [];
        routes.features.forEach(route => {
            const coords = route.geometry.coordinates;
            const id = route.properties.id;
            coords.forEach(pos => {
                const vec1 = Vector2(pos[0], pos[1]);
                const vec2 = Vector2(lon, lat);
                if (vec1.distance(vec2) < 1) {
                    if (!burg.paths.includes(id)) {
                        burg.paths.push(id);
                    }
                }
            });
        });
    });

    return burgs;
};

const parse_routes = async () => {
    const burgs = await getBurgs();
    const rts = routes;
    rts.features.forEach(route => {
        route.burgs = [];
    });
    rts.features.forEach(route => {
        const coords = route.geometry.coordinates;
        coords.forEach(pos => {
            burgs.forEach(burg => {
                const lon = burg["Longitude"];
                const lat = burg["Latitude"];
                const vec1 = Vector2(pos[0], pos[1]);
                const vec2 = Vector2(lon, lat);
                const id = burg.Id;
                if (vec1.distance(vec2) < 1) {
                    if (!route.burgs.includes(id)) {
                        route.burgs.push(id);
                    }
                }
            });
        });
    });

    return rts;
};

exports.routes = parse_routes;
exports.burgs = parse_burgs;
