function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/jameschou365/LottoApp/master/data/bc49_stars_match_merge.csv", function(data){ processData(data) } );

};

function processData(allRows) {

    console.log(allRows);
    var x = [], y = [], standard_deviation = [];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['DrawDate'] );
        y.push( row['S6'] );
    }
    console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
    makePlotly( x, y, standard_deviation );
}

function makePlotly( x, y, standard_deviation ){
    var plotDiv = document.getElementById("plot");
    var traces = [{
        x: x,
        y: y
    }];

    Plotly.newPlot('myDiv', traces,
        {title: 'BC49 Wining Number Drawing Times'});
};
makeplot();
