const parser = require('../parser/parse');


const burgObject = (burg, burgs, routes) => {
    let obj =  {
        name: burg.Burg,
        pop: burg.Population,
        capital: burg.Capital,
        port: burg.Port,
        citadel: burg.Citadel,
        walls: burg.Walls,
        plaza: burg.Plaza,
        temple: burg.Temple,
        st: burg['Shanty Town'],
        neighbors: []
    };

    routes.features.forEach(route => {
        route.burgs.forEach(brg => {
            if (brg === burg.Id) {
                let index = route.burgs.indexOf(brg);
                if (index === -1) {
                    return;
                }

                route.burgs[index] = null;
                if (index !== 0 && route.burgs[index - 1] !== null) {
                    let prev = undefined;
                    burgs.forEach(brg => {
                        if (brg.Id === route.burgs[index - 1]) {
                            prev = brg;
                        }
                    });
                    if (prev !== undefined) {
                        obj.neighbors.push(burgObject(prev, burgs, routes));
                    }
                }
                if (index !== (route.burgs.length - 1) && route.burgs[index + 1] !== null) {
                    let next = undefined;
                    burgs.forEach(brg => {
                        if (brg.Id === route.burgs[index + 1]) {
                            next = brg;
                        }
                    });
                    if (next !== undefined) {
                        obj.neighbors.push(burgObject(next, burgs, routes));
                    }
                }
            }
        });
    });

    return obj;
};

const createTree = async (filename, routesFilename) => {
    const burgs = await parser.burgs(filename, routesFilename);
    const routes = await parser.routes(filename, routesFilename);
    const sets = [];
    while (burgs != null && burgs.length !== 0) {
        let burg = burgs[0];
        let obj = burgObject(burg, burgs, routes);
        obj.init = function () {
            this.neighbors.forEach(neighbor => {
                neighbor.init = this.init;
                neighbor.init();
                neighbor.parent = this;
            });
            return this;
        };
        obj.init();
        obj.allNeighbors = function () {
            this.neighbors.forEach(neighbor => {
                neighbor.allNeighbors = this.allNeighbors;
                neighbor.allNeighbors();
                if (this.parent) {
                    this.neighbors.push(this.parent);
                }
            });
            return this;
        };
        obj.allNeighbors();
        sets.push(obj);
        burgs.splice(0, 1);
    }
    return sets;
};

exports.tree = createTree;
