const parse = require('./parse');

(async () => {
    const res = await parse.burgs();

    res.forEach(burg => {
        console.log(burg.paths);
    });
})();
