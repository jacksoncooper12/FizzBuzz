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
})
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
})