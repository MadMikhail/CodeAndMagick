'use strict';
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 260;
var CLOUD_Y = 190;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 13;
var BAR_HEIGHT = 100;
var barWidth = 50;

// var renderCloud = function(ctx, x, y, color){
//     ctx.fillStyle = color;
//     ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };

var getMaxElement = function(arr){
    var maxElement = arr[0];

    for(var i =1; i < arr.length; i ++){
        if(arr[i] > maxElement){
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, names, times){
   
    //Квадратное облако
    //renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    //renderCloud(ctx, CLOUD_X, CLOUD_Y, 'grey');

    ctx.beginPath();
    ctx.moveTo(90 + GAP, 80 + GAP);
    ctx.lineTo(130 + GAP, 40 + GAP );
    ctx.lineTo(160 + GAP, 30 + GAP );
    ctx.lineTo(190 + GAP, 40 + GAP );
    ctx.lineTo(250 + GAP, 50 + GAP );
    ctx.lineTo(300 + GAP, 55 + GAP );
    ctx.lineTo(500 + GAP, 48 + GAP );
    ctx.lineTo(550 + GAP, 55 + GAP );
    ctx.lineTo(595 + GAP, 75 + GAP );
    ctx.lineTo(620 + GAP, 100 + GAP );
    ctx.lineTo(626 + GAP, 115 + GAP );
    ctx.lineTo(620 + GAP, 140 + GAP );
    ctx.lineTo(520 + GAP, 220 + GAP );
    ctx.lineTo(300 + GAP, 230 + GAP );
    ctx.lineTo(200 + GAP, 210 + GAP );
    ctx.lineTo(90 + GAP, 200 + GAP );
    ctx.lineTo(90 + GAP, 80 + GAP  );
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(80, 80);
    ctx.lineTo(130, 40 );
    ctx.lineTo(160, 30 );
    ctx.lineTo(190, 40 );
    ctx.lineTo(250, 50 );
    ctx.lineTo(300, 55 );
    ctx.lineTo(500, 48 );
    ctx.lineTo(550, 55 );
    ctx.lineTo(595, 75 );
    ctx.lineTo(620, 100 );
    ctx.lineTo(626, 115 );
    ctx.lineTo(620, 140 );
    ctx.lineTo(520, 220 );
    ctx.lineTo(300, 230 );
    ctx.lineTo(200, 210 );
    ctx.lineTo(85, 200 );
    ctx.lineTo(80, 80  );
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "rgba(0, 0, 255, 0.6 )";
    ctx.stroke();
    ctx.fill();
    // Цвет текста
    ctx.fillStyle = 'black';

    ctx.fillText('Ура выпобедили!\n', 80, 90 );
    ctx.fillText('Список результатов:', 80, 120 );
    var maxTime = getMaxElement(times);

    
    
    
    function getRandomBlue(){
        var randomColor = 'rgba(0, 0, 255,'   + Math.random(1).toFixed(2)  + ' )';
        return randomColor;
    }

  
    for (var i = 0; i < names.length; i++){
        ctx.fillStyle = "black";
        ctx.fillText(names[i], CLOUD_X + GAP   + ((GAP + barWidth + FONT_GAP) * i), CLOUD_Y + GAP);
        ctx.fillStyle = getRandomBlue();
        ctx.fillRect(CLOUD_X + GAP  + ((GAP + barWidth + FONT_GAP ) * i), CLOUD_Y - GAP , barWidth, (-BAR_HEIGHT * times[i] / maxTime));
    }
    names[1] = ctx.fillStyle = 'black';
    
};