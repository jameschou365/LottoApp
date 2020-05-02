function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/jameschou365/LottoApp/master/data/bc49_stars_match_merge.csv",
        function(data){ processData(data) } );
};

function processData(allRows) {
    console.log(allRows);
    let x = [], y6 = [], y5 = [], y4 = [], y3 = [];

    let row;
    for (let i = 0; i < allRows.length; i++) {
        row = allRows[i];
        x.push(row['DrawDate']);
        y6.push(row['S6']);
        y5.push(row['S5']);
        y4.push(row['S4']);
        y3.push(row['S3'])
    }
    console.log( 'X',x, 'Y6',y6, 'Y5',y5, 'Y4',y4, 'Y3',y3);
    makePlotly( x, y6, y5, y4, y3);
}

function makePlotly(x, y6, y5, y4, y3) {
    var plotDiv = document.getElementById("plot");
    var traces = [{ x: x, y: y6 }, { x: x, y: y5 }, { x: x, y: y4 },
        { x: x, y: y3 }];

    var layout = {
        barmode: 'relative',
        title: 'BC49 Wining Number Drawing Times'
    };
    Plotly.newPlot('myDiv', traces, layout);
};
makeplot();
