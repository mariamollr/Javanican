var tl;

function onLoad() {
    var info = [ Timeline.createBandInfo ({
        width: "70%",
        intervalUnit: Timeline.DateTime.MONTH,
        intervalPixels: 100
    }),
    Timeline.createBandInfo ({
        width: "30%",
        intervalUnit: Timeline.DateTime.YEAR,
        intervalPixels: 200
    })
    ];
}