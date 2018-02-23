var numberOfRows = 20;
var numberOfColumns = 30;

var doodleContainer = document.getElementById('doodle');

function init() {
    var row;
    var currentRow
    var checkbox;

    for (var i = 0; i < numberOfRows; i++) {
        row = document.createElement('div');
        row.setAttribute('className', 'row');
        row.setAttribute('id', 'row-' + i);
        doodleContainer.appendChild(row);
        currentRow = document.getElementById('row-' + i);

        for(var k = 0; k < numberOfColumns; k++) {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', 'row-'+ i + 'col-' + k);
            currentRow.appendChild(checkbox);
        }
    }
}

init();

function getChecked() {
    var checkboxes = document.getElementsByTagName('input');
    var checked = [];
    for (var i=0; i< checkboxes.length; i++){
        if (checkboxes[i].checked) {
            checked.push(checkboxes[i].id);
        }
    }

    return checked;
}

function draw(pattern) {
    pattern.forEach(checkboxId => {
        document.getElementById(checkboxId).checked = true;
    });
}

function clear() {
    var checkboxes = document.getElementsByTagName('input');
    for (var i=0; i< checkboxes.length; i++){
        if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
        }
    }
}

function animate() {
    clear();
    setTimeout(function() {
        draw(heart);
    }, 100);
    setTimeout(function() {
        draw(bigHeart);
    }, 400);
    setTimeout(function() {
        animate();
    }, 800);
}

animate();




