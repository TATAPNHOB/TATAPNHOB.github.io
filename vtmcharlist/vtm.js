$("body").on("click", ".dot", function() {
    toggleDot($(this));
})

function toggleDot(dot) {
    if (dot.attr("state") === "0") {
        updateSet(dot.parent(), parseInt(dot.attr('n')));
    }
    else {
        if (Math.abs((parseInt(dot.parent().children('input').attr('value')) - parseInt(dot.attr('n')))) > 0) {
            updateSet(dot.parent(), parseInt(dot.attr('n')));
        }
        else {
            updateSet(dot.parent(), parseInt(dot.attr('n')) - 1);
        }
    }
}

function updateSet(dot_set, value) {
    updateInput(dot_set, value);
    updateDots(dot_set, value);
}

function updateInput(dot_row, value) {
    dot_row.children('input').attr('value', value.toString());
}

function updateDots(dot_set, value) {
    dot_set.children('.dot').each(function () {
        if (value >= parseInt($(this).attr('n'))) {
            $(this).attr('state', '1');
        }
        else {
            $(this).attr('state', '0');
        }
    })
}