const path = require('path');
const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'clanky.json'));

if(!db.has('next_id')) {
    db.set('next_id', 1);
}

exports.pridat = (nadpis, datum, telo, autor) => {
    let id = db.get('next_id');
     
    db.set('next_id', id + 1);
    db.set(id, {
        "autor": nadpis,
        "datum": datum,
        "telo": telo,
        "autor": autor,
    });

};

exports.nacistVsechnyPrispevky = () => {
    
    let prispevky = db.JSON();
    return prispevky;
};
