$("#btnFB").on("click", function () {
    let fizzNum = parseInt($("#fbInput1").val());
    let buzzNum = parseInt($("#fbInput2").val());
    let fizzMod = 0;
    let buzzMod = 0;
    let output = new Array();
    let loopnum = 100;
    if (parseInt($("#loopInput").val()) > 0) {
        loopnum = parseInt($("#loopInput").val());
    }
    for (let loop = 1; loop <= loopnum; loop++) {
        fizzMod = loop % fizzNum;
        buzzMod = loop % buzzNum;
        if (fizzMod == 0 && buzzMod == 0) {
            output.push(`${loop} : <span class='fizzbuzz'>FizzBuzz</span>`)
        }
        else if (fizzMod == 0)
            output.push(`${loop} : <span class='fizz'>Fizz</span>`)
        else if (buzzMod == 0)
            output.push(`${loop} : <span class='buzz'>Buzz</span>`)
        else
            output.push(`${loop} : none`);
    }
    $("#fbOut").html(output.join(" | "));
});
$(document).ready(function () {
    $("#fbInput1").keydown(function (event) {
        if (event.which === 13) {
            $("#btnFB").click();
        }
    }
    )
    $("#fbInput2").keydown(function (event) {
        if (event.which === 13) {
            $("#btnFB").click();
        }
    }
    )
    $("#loopInput").keydown(function (event) {
        if (event.which === 13) {
            $("#btnFB").click();
        }
    }
    )
});
$(document).ready(function () {
    $("#fbInput1").keydown(function (event) {
        if (event.which === 46) {
            $("#clear").click();
        }
    }
    )
    $("#fbInput2").keydown(function (event) {
        if (event.which === 46) {
            $("#clear").click();
        }
    }
    )
    $("#loopInput").keydown(function (event) {
        if (event.which === 46) {
            $("#clear").click();
        }
    }
    )
});
$("#clear").on("click", function () {
    $("#fbOut").text("");
    $("#fbInput1").val("");
    $("#fbInput2").val("");
    $("#loopInput").val("");
});
function produce() {
    let fizzNum = parseInt($("#fbInput1").val());
    let buzzNum = parseInt($("#fbInput2").val());
    let fizzMod = 0;
    let buzzMod = 0;
    let output = new Array();
    let loopnum = 100;
    let fout = 0;
    let bout = 0;
    let nout = 0;
    let fbout = 0;
    if (parseInt($("#loopInput").val()) > 0) {
        loopnum = parseInt($("#loopInput").val());
    }
    for (let loop = 1; loop <= loopnum; loop++) {
        fizzMod = loop % fizzNum;
        buzzMod = loop % buzzNum;
        if (fizzMod == 0 && buzzMod == 0) {
            fbout += 1
        }
        else if (fizzMod == 0)
            fout += 1
        else if (buzzMod == 0)
            bout += 1
        else
            nout += 1
    }
    zingchart.render({
        id: "myChart",
        output: "svg",
        height: 400,
        width: '100%',
        data: {
            type: "pie3d",
            plot: {
                borderColor: "#2B313B",
                borderWidth: 4,
                // slice: 90,
                valueBox: {
                    fontSize: '18',
                    placement: 'out',
                    text: '%t\n%npv%',
                    fontFamily: "Open Sans",
                },
                tooltip: {
                    fontSize: '22',
                    fontFamily: "Open Sans",
                    padding: "5 10",
                },
            },
            title: {
                text: "Percentages and Amounts"
            },
            backgroundColor: "transparent",
            series: [
                {
                    values: [fout],
                    text: "Fizz"
                },
                {
                    text: "Buzz",
                    values: [bout],
                },
                {
                    values: [nout],
                    text: "None",
                    palette: 7
                },
                {
                    values: [fbout],
                    text: "Fizz-Buzz",
                    palette: 2
                }
            ]
        }
    });
};