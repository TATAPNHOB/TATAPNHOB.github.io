$("body").on("click", ".dot", function() {
    toggleDot($(this));
})

function toggleDot(dot) {
    if (dot.attr("state") === "1") {
        dot.attr("state", "0");
        dot.parent().children("input").attr("value", (parseInt(dot.attr("n")) - 1).toString());
        for (i = dot.parent().attr("max") - 1; i > dot.attr("n"); i--) {
            dot.parent().children(".dot[n=" + i.toString() + "]").attr("state", "0");
        }
    }
    else {
        dot.attr("state", "1");
        dot.parent().children("input").attr("value", (parseInt(dot.attr("n"))).toString());
        for (i = 0; i < dot.attr("n"); i++) {
            dot.parent().children(".dot[n=" + i.toString() + "]").attr("state", "1");
        }
    }
}