const path = require('path');
const fs = require('fs');

const csv = require('csv-parser');
const Vector2 = require('victor');

const getBurgs = (filename) => {
    return new Promise((fulfill) => {
        const results = [];
        fs.createReadStream(filename)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                fulfill(results);
            });
    });
};

const getRoutes = (filename) => {
    return JSON.parse(fs.readFileSync(filename));
};

const parse_burgs = async (filename, routesFilename) => {
    const burgs = await getBurgs(filename);
    const routes = await getRoutes(routesFilename);
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

const parse_routes = async (filename, routesFilename) => {
    const burgs = await getBurgs(filename);
    const routes = await getRoutes(routesFilename);
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
