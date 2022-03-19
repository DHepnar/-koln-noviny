$(document).ready(() =>{
    $('#pridat').click(pridat);
});
function pridat() {
    let nadpis = $('#input_nadpis').val().trim();
    let datum = $('#input_datum').val().trim();
    let telo = $('#input_clanek').val().trim();
    let autor = $('#input_autor').val().trim();

        if(!nadpis) {
            $('#hlaseni').html('Nadpis není zadaný!');
        } else if (!datum) {
            $('#hlaseni').html('Datum není zadaný!');
        } else if (!telo) {
            $('#hlaseni').html('Článek není napsán!');
        } else if (!autor) {
            $('#hlaseni').html('Autor není zadaný!');
        } else {
            $('#hlaseni').html('')

            fetch('/prispevky/pridat', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify ({
                    nadpis,
                    datum,
                    telo,
                    autor,
                }),
            })
            .then(odpoved => odpoved.json())
            .then(reakce => {
                if(uspech) {
                    location.hred = reakce.url;
                }
            });
        }

}