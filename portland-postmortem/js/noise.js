var canvas = document.getElementById('noise');
var width = 960;
var height = 540;

var ctx = canvas.getContext('2d');

var imgData = ctx.createImageData(width, height);
var data = imgData.data;

function updateNoiseMap() {
    for (i = 0; i < width * height; i++) {
        var px = Math.random() * 256 | 0;
        data[i*4+0] = px; // Red
        data[i*4+1] = px; // Green
        data[i*4+2] = px; // Blue
        data[i*4+3] = 175; // Alpha
    }
    ctx.putImageData(imgData,0,0);
}

setInterval(updateNoiseMap, 20);