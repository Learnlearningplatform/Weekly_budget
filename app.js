var t;
var x;
$(".val1").click(function () {
    x = $("#budget").val();
    if (x == '') { alert("YOU MUST ENTER SOMETHING"); }
    else {
        console.log(x);
    }
    $(".d1").text(x);
    $(".d2").text(x);
});

$(".val2").click(function () {
    t = $("#item").val();
    if (t == '') { alert("YOU MUST ENTER SOMETHING"); }
    else {
        console.log(t);
    }
});

$(".val3").click(function () {
    var y = $("#spent").val();
    if (y == '') { alert("YOU MUST ENTER SOMETHING"); }
    else {
        console.log(y);
        add(t, y);
        update(x, y);

    }
});

function add(t, y) {
    $("#main").append(`<li class="list-group-item d-flex justify-content-between align-items-center">
   ${t}
   <span class="badge badge-primary badge-pill">${y}</span>
</li>`)
}

function update(x, y) {
    var z;
    if (y < x) 
    {
        z = x - y;
        $(".left").text(z);
    }
    else { alert("insufficient balance"); }
}