Plotly.d3.csv("https://raw.githubusercontent.com/jameschou365/LottoApp/master/data/bc49_stars_match_merge.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var trace3 = {
        type: "bar",
        name: 'S3',
        x: unpack(rows, 'DrawDate'),
        y: unpack(rows, 'S3')
    }

    var trace4 = {
        type: "bar",
        name: 'S4',
        x: unpack(rows, 'DrawDate'),
        y: unpack(rows, 'S4')
    }

    var trace5 = {
        type: "bar",
        name: 'S5',
        x: unpack(rows, 'DrawDate'),
        y: unpack(rows, 'S5')
    }

    var trace6 = {
        type: "bar",
        name: 'S6',
        x: unpack(rows, 'DrawDate'),
        y: unpack(rows, 'S6')
    }

    var data = [trace3,trace4,trace5,trace6];

    var layout = {
        barmode: 'relative',
        title: 'BC49 Wining Number Drawing Times'
    };

    Plotly.newPlot('myDiv', data, layout);
})
