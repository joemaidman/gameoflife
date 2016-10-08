window.onresize = function(event) {

var htmlCanvas = document.getElementById('can');
var contex = htmlCanvas.getContext('2d');
html.width = document.getElementById("gameCol").width;
html.height = document.getElementById("gameCol").height;

};

 function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
}
//TODO On resize window, redraw grid and set key vars: grid width & height. Square width and height, divide by 30.

var widthPerSquare = 20;
var heightPerSquare = 20;
var drawnWidth = 18;
var drawnHeight = 18; 

var generationsCount = 0;
var intervalID;
var isAlive = false;
var rows = 20;
var cols = 20;
var isRandom = false;
var cellArrayLast = new Array();
var cellArrayCurr = new Array();

var canvas = document.getElementById("can"),
    c = canvas.getContext("2d");
canvas.addEventListener('click', handleClick);
for (i = 0; i < rows; i++) {
    cellArrayLast[i] = new Array();
}


function initialiseDropdown() {

    $(".dropdown-menu li a").click(function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');


if(isAlive == true){
    removeInterval();
    toggleOff();
}

        switch(selText){

case "None":

drawGrid();
break;

case "Blinker":
removeInterval();
drawGrid();
loadBlinker();
break;

case "Beacon":
removeInterval();
drawGrid();
loadBeacon();
break;

case "Glider":
removeInterval();
drawGrid();
loadGlider();
break;

case "Spaceship":
removeInterval();
drawGrid();
loadSpaceShip();
break;

case "Pentadecathlon":
removeInterval();
drawGrid();
loadPentadecathlon();
break;




        }

    });

}
initialiseDropdown();

function randomColoursToggle(cb) {
    if (cb.checked == true) {
        isRandom = true;
    } else {

        isRandom = false;
    }

}


function drawGrid() {
    generationsCount = 0;
    document.getElementById("counter").innerHTML = 0;
    c.beginPath();
    c.fillStyle = "lightgray";
    c.lineWidth = 1;
    c.strokeStyle = 'Black';
    for (var row = 0; row < 20; row++) {
        for (var column = 0; column < 20; column++) {
            var x = column * 20;
            var y = row * 20;
            c.rect(x, y, 20, 20);
            c.fill();
            c.stroke();
        }
    }
    c.closePath();
    for (i = 0; i < rows; i++) {


        for (j = 0; j < cols; j++) {
            cellArrayLast[i][j] = 0;
        }
    }
}

function establishCell() {

    var customOutput = "";
    for (i = 0; i < rows; i++) {

        customOutput += "<br>";
        for (j = 0; j < cols; j++) {
            cellArrayLast[i][j] = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            customOutput += cellArrayLast[i][j];
            if (cellArrayLast[i][j] == 1) {

                if (isRandom == true) {
                    c.fillStyle = randomColour();
                } else {


                    c.fillStyle = "#F44336";
                }
                c.fillRect((Math.floor(i) * 20) + 1,
                    (Math.floor(j) * 20) + 1,
                    18, 18);
            } else {
                c.fillStyle = "lightgray";

                c.fillRect((Math.floor(i) * 20) + 1,
                    (Math.floor(j) * 20) + 1,
                    18, 18);
            }
        }
        document.getElementById("outputArea").innerHTML = customOutput;
    }

}

function setPattern() {


console.log(document.getElementById('cbPattern').text.trim());
    //pattern = document.getElementById('cbPattern').text.trim();

   // var seedArray 
  //  seedBoard(seedArray);


}



function handleClick(e) {

if(isAlive == true){

    return;
}





generationsCount = 0;
    document.getElementById("counter").innerHTML = 0;
    var theX = Math.floor(e.offsetX / 20);
    var theY = Math.floor(e.offsetY / 20);


    
    if (cellArrayLast[theX][theY] == 1) {
        c.fillStyle = "lightgray";

        c.fillRect((Math.floor((e.offsetX) / 20) * 20) + 1,
            (Math.floor((e.offsetY) / 20) * 20) + 1,
            18, 18);
        cellArrayLast[theX][theY] = 0;
       // console.log(theX);
       // console.log(theY);
       // console.log(cellArrayLast[theX][theY]);
    } else {


        if (isRandom == true) {
            c.fillStyle = randomColour();
        } else {


            c.fillStyle = "#F44336";
        }


        c.fillRect((Math.floor((e.offsetX) / 20) * 20) + 1,
            (Math.floor((e.offsetY) / 20) * 20) + 1,
            18, 18);
        cellArrayLast[theX][theY] = 1;
       // console.log(theX);
        //console.log(theY);
       // console.log(cellArrayLast[theX][theY]);
    }



}

function loadGlider() {

var gliderCoords = [];
storeCoordinate(2, 1, gliderCoords);
storeCoordinate(3, 2, gliderCoords);
storeCoordinate(3, 3, gliderCoords);
storeCoordinate(2, 3, gliderCoords);
storeCoordinate(1, 3, gliderCoords);


loadPattern(gliderCoords);

}

function loadSpaceShip() {

var spaceShipCoords = [];


storeCoordinate(1, 8, spaceShipCoords);
storeCoordinate(4, 8, spaceShipCoords);
storeCoordinate(5, 9, spaceShipCoords);
storeCoordinate(5, 10, spaceShipCoords);
storeCoordinate(5, 11, spaceShipCoords);
storeCoordinate(4, 11, spaceShipCoords);
storeCoordinate(3, 11, spaceShipCoords);
storeCoordinate(2, 11, spaceShipCoords);
storeCoordinate(1, 10, spaceShipCoords);

loadPattern(spaceShipCoords);

}



function loadBeacon() {

var beaconCoords = [];
storeCoordinate(8, 8, beaconCoords);
storeCoordinate(9, 8, beaconCoords);
storeCoordinate(8, 9, beaconCoords);
storeCoordinate(11, 10, beaconCoords);
storeCoordinate(11, 11, beaconCoords);
storeCoordinate(10, 11, beaconCoords);

loadPattern(beaconCoords);

}


function loadBlinker() {

var blinkerCoords = [];
storeCoordinate(9, 9, blinkerCoords);
storeCoordinate(10, 9, blinkerCoords);
storeCoordinate(11, 9, blinkerCoords);



loadPattern(blinkerCoords);

}

function loadPentadecathlon() {

var PentadecathlonCoords = [];


storeCoordinate(7, 8, PentadecathlonCoords);
storeCoordinate(7, 10, PentadecathlonCoords);

storeCoordinate(5, 9, PentadecathlonCoords);
storeCoordinate(6, 9, PentadecathlonCoords);
storeCoordinate(8, 9, PentadecathlonCoords);
storeCoordinate(9, 9, PentadecathlonCoords);
storeCoordinate(10, 9, PentadecathlonCoords);
storeCoordinate(11, 9, PentadecathlonCoords);
storeCoordinate(13, 9, PentadecathlonCoords);
storeCoordinate(14, 9, PentadecathlonCoords);
storeCoordinate(12, 8, PentadecathlonCoords);
storeCoordinate(12, 10, PentadecathlonCoords);


loadPattern(PentadecathlonCoords);

}

function loadPattern(Coords){

   for (var i = 0; i < Coords.length; i++) {

    fillCells(Coords[i].x,Coords[i].y);
    

} 
    

}




function fillCells(theX,theY){

    if (cellArrayLast[theX][theY] == 1) {
        c.fillStyle = "lightgray";

        c.fillRect((Math.floor(theX) * 20) + 1,
                        (Math.floor(theY) * 20) + 1,
                        18, 18);


        cellArrayLast[theX][theY] = 0;
  // console.log("TheX:");
       // console.log(theX);
       //  console.log("TheY:");
       // console.log(theY);
    } else {


        if (isRandom == true) {
            c.fillStyle = randomColour();
        } else {


            c.fillStyle = "#F44336";
        }


         c.fillRect((Math.floor(theX) * 20) + 1,
                        (Math.floor(theY) * 20) + 1,
                        18, 18);
        cellArrayLast[theX][theY] = 1;
      //  console.log("TheX:");
       // console.log(theX);
       //  console.log("TheY:");
       // console.log(theY);
  
    }
}




function doLife() {

var wasChanged = false;

    cellArrayCurr = new Array();
    for (i = 0; i < rows; i++) {
        cellArrayCurr[i] = new Array();
    }

    for (i = 0; i < rows; i++) {


        for (j = 0; j < cols; j++) {

            var curRow = i;
            var nxtRow = i + 1;
            var preRow = i - 1;

            var curCol = j;
            var nxtCol = j + 1;
            var preCol = j - 1;

            if (nxtRow > 19) {
                nxtRow = 0;
            }

            if (preRow < 0) {
                preRow = 19;
            }


            if (nxtCol > 19) {
                nxtCol = 0;
            }


            if (preCol < 0) {
                preCol = 19;
            }


            //console.log(nxtRow);
            //console.log(curCol);
            var neighbourCount =
                cellArrayLast[nxtRow][curCol] +
                cellArrayLast[preRow][curCol] +
                cellArrayLast[curRow][nxtCol] +
                cellArrayLast[curRow][preCol] +
                cellArrayLast[nxtRow][nxtCol] +
                cellArrayLast[preRow][preCol] +
                cellArrayLast[nxtRow][preCol] +
                cellArrayLast[preRow][nxtCol];




            if (cellArrayLast[i][j] == 1) {
                if (neighbourCount < 2 || neighbourCount > 3) {


                    cellArrayCurr[i][j] = 0;
                    c.fillStyle = "lightgray";
wasChanged = true;
                    c.fillRect((Math.floor(i) * 20) + 1,
                        (Math.floor(j) * 20) + 1,
                        18, 18);
                    //kill it

                } else {
                    cellArrayCurr[i][j] = 1;
                    // if(isRandom == true)
                    //              {
                    //                  c.fillStyle = randomColour();
                    //              }
                    //              else{


                    //                 c.fillStyle = "#F44336";
                    //              }

                    //                 c.fillRect((Math.floor(i) * 20)+1,
                    //                     (Math.floor(j) * 20)+1,
                    //                     18, 18);
                    //              //it lives
                }

            }


            if (cellArrayLast[i][j] == 0) {
                if (neighbourCount == 3) {
                    cellArrayCurr[i][j] = 1;
                    if (isRandom == true) {
                        c.fillStyle = randomColour();
                    } else {


                        c.fillStyle = "#F44336";
                        wasChanged = true;
                    }

                    c.fillRect((Math.floor(i) * 20) + 1,
                        (Math.floor(j) * 20) + 1,
                        18, 18);
                    //it is reborn

                } else {
                    cellArrayCurr[i][j] = 0;
                    // c.fillStyle = "lightgray";

                    //                 c.fillRect((Math.floor(i) * 20)+1,
                    //                     (Math.floor(j) * 20)+1,
                    //                     18, 18);
                    //kill it
                }

            }




        }
    }

    cellArrayLast = cellArrayCurr;

    if(wasChanged == true)
    {
    generationsCount += 1;
    document.getElementById("counter").innerHTML = generationsCount;
}
}

function randomColour() {

    var R = Math.floor((Math.random() * 255));
    var G = Math.floor((Math.random() * 255));
    var B = Math.floor((Math.random() * 255));

    return colorToString(R, G, B);
}

function colorToString(R, G, B) {


    return ["rgb(", R, ",", G, ",", B, ")"].join("");

}



function startLife(){

 intervalID = window.setInterval(doLife, 500);

 isAlive = true;

}



function toggleOn(){

    isAlive = true;
    document.getElementById("onOff").removeEventListener("onchange", getBorn);
    $('#onOff').bootstrapToggle('on');
    document.getElementById("onOff").addEventListener("onchange", getBorn);


}

function toggleOff(){

    isAlive = false;
    document.getElementById("onOff").removeEventListener("onchange", getBorn);
    $('#onOff').bootstrapToggle('off');
    document.getElementById("onOff").addEventListener("onchange", getBorn);


}


function removeInterval(){

clearInterval(intervalID);
 
isAlive = false;

}




function getBorn() {

if(document.getElementById("onOff").checked == true)

{
startLife();
 
}

else
{

removeInterval();

}

}


drawGrid();
loadGlider();