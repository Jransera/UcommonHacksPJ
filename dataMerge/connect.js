const parser = require('../parser/parse');


const burg_object = (id, rte, burgs) => {
    let burg = {};
    burgs.forEach(brg => {
        if (brg.Id === id) {
            burg = brg;
        }
    });

    let index = rte.burgs.indexOf(id);
    if (index === -1) {
        return;
    }

    rte.burgs.splice(index, 1);

    return {
        name: burg.Burg,
        pop: burg.Population,
        capital: burg.Capital,
        port: burg.Port,
        citadel: burg.Citadel,
        walls: burg.Walls,
        plaza: burg.Plaza,
        temple: burg.Temple,
        st: burg['Shanty Town'],
        prev: index !== 0 ? burg_object(rte.burgs[index - 1], rte, burgs) : undefined,
        next: index !== rte.burgs.length ? burg_object(rte.burgs[index + 1], rte,  burgs) : undefined
    };
};

const create_tree = async () => {
    const burgs = await parser.burgs().then();
    const routes = await parser.routes().then();
    const sets = [];
    while (burgs != null && burgs.length !== 0) {
        let burg = burgs[0];
        burg.paths.forEach(path => {
            routes.features.forEach(route => {
                if (path === route.properties.id) {
                    let index = route.burgs.indexOf(burg.Id);
                    if (index !== -1) {
                        let obj = (burg_object(burg.Id, route, burgs));
                        obj.init = function () {
                            for (let i in this) {
                                if (typeof this[i] == 'object') {
                                    if (this[i] != null) {
                                        this[i].init = this.init;
                                        this[i].init();
                                        this[i].parent = this;
                                    }
                                }
                            }
                            return this;
                        };
                        obj.init();
                        sets.push(obj);
                    }
                }
            })
        });
        burgs.splice(0, 1);
    }
    return sets;
};

exports.tree = create_tree;
