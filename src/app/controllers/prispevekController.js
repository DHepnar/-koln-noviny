exports.zobrazDetail = (dotaz, odpoved) => {
    odpoved.render('prispevky/detail');
};
exports.zobrazPrehled = (dotaz, odpoved) => {
    odpoved.render('prispevky/prehled');
};
exports.zobrazPridani = (dotaz, odpoved) => {
    odpoved.render('prispevky/pridani');
}
exports.zobrazOdebrat = (dotaz, odpoved) => {
    odpoved.render('prispevky/odebrat');
}