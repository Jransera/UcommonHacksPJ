const parser = require('../parser/parse');


const burg_object = (burg, burgs, routes) => {
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
        //prev: index !== 0 ? burg_object(rte.burgs[index - 1], rte, burgs) : undefined,
        //next: index !== rte.burgs.length ? burg_object(rte.burgs[index + 1], rte,  burgs) : undefined
    };

    routes.features.forEach(route => {
        route.burgs.forEach(brg => {
            if (brg === burg.Id) {
                let index = route.burgs.indexOf(brg);
                if (index === -1) {
                    return;
                }

                if (index !== 0 && route.burgs[index - 1] !== null) {
                    let prev = undefined;
                    burgs.forEach(brg => {
                        if (brg.Id === route.burgs[index - 1]) {
                            prev = brg;
                        }
                    });
                    route.burgs[index] = null;
                    if (prev !== undefined) {
                        obj.neighbors.push(burg_object(prev, burgs, routes));
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
                        obj.neighbors.push(burg_object(next, burgs, routes));
                    }
                }
            }
        });
    });

    return obj;
};

const create_tree = async () => {
    const burgs = await parser.burgs().then();
    const routes = await parser.routes().then();
    const sets = [];
    while (burgs != null && burgs.length !== 0) {
        let burg = burgs[0];
        let obj = burg_object(burg, burgs, routes);
        obj.init = function () {
            this.neighbors.forEach(neighbor => {
                neighbor.init = this.init;
                neighbor.init();
                neighbor.parent = this;
            });
            /*for (let i in this) {
                if (typeof this[i] == 'object') {
                    if (this[i] != null || this[i] !== undefined) {
                        for (let j in this[i]) {
                            this[j].init = this.init;
                            this[j].init();
                            this[j].parent = this;
                        }
                    }
                }
            }*/
            return this;
        };
        obj.init();
        sets.push(obj);
        burgs.splice(0, 1);
    }
    return sets;
};

exports.tree = create_tree;
