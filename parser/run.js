const parse = require('./parse');

(async () => {
    const res = await parse();

    res.forEach(burg => {
        console.log(burg.paths);
    });
})();
