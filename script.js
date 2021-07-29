
var textArea = $('#textArea');
var textVal = textArea.val();
var displayArea = $("#showArea");
let textInput = document.querySelector("#textArea");





// Function to make an Array of Colors
function interpolateColor(color1, color2, factor) {
   if (arguments.length < 3) { 
       factor = 0.5; 
   }
   var result = color1.slice();
   for (var i = 0; i < 3; i++) {
       result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
   }
   return result;
};

function interpolateColors(color1, color2, steps) {
   var stepFactor = 1 / (steps - 1),
       interpolatedColorArray = [];

   color1 = color1.match(/\d+/g).map(Number);
   color2 = color2.match(/\d+/g).map(Number);

   for(var i = 0; i < steps; i++) {
       interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
   }

   return interpolatedColorArray;
}



let colorChange1 = $("#colorChange1");
let colorChange2 = $("#colorChange2");
var divColor = $("#divColor");


var colorArray;

// Get hex make rgb
function hexTorgb(hex) {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

// set the colors
var promise = ["rgb(57,255,31)", "rgb(255,149,0)"];
colorArray = interpolateColors(promise[0], promise[1], 26);


$(colorChange1).on("change", function(){
   var thisValue = $(this).val();
   var rgbValue = hexTorgb(thisValue);
   var rgbString = `rgb(${rgbValue})`;
   
   promise[0] = rgbString;
   console.log(promise);

   colorArray = interpolateColors(promise[0], promise[1], 26);
   console.log(colorArray);

});

$(colorChange2).on("change", function(){
   var thisValue = $(this).val();
   var rgbValue = hexTorgb(thisValue);
   var rgbString = `rgb(${rgbValue})`;

   promise[1] = rgbString;
   console.log(promise);

   colorArray = interpolateColors(promise[0], promise[1], 26);
   console.log(colorArray);

});


// TO CHANGE FONT

var fontSize = 50;
var numbTypo = $("#numbTypo");

$(numbTypo).on("change", function(){
   fontSize = numbTypo.val();
});

var font = "Barlow, sans-serif";
var fontTypo = $("#optionsTypo");

$(fontTypo).on('change', function() {
   
   var $option = $(this).find('option:selected');
   
   var value = $option.val();
   
   switch (value){
      case "barlow" : font = "barlow";
      break;
      case "timesNewRoman" : font = "times new roman";
      break;
      case "roboto" : font = "roboto";
      break;
      case "zillaSlab" : font = "zilla slab";
      break;
      case "pinyonScript" : font = "pinyon script";
      break;
   }
});




// On keyup function 
textInput.addEventListener("keyup", function(e){

   var letter = e.key;

   var htmlContent;

   function myFunction(i){
      
      htmlContent = `<span class='displayedLetters' style='color: rgb(${colorArray[i]}); font-size: ${fontSize}px; font-family: ${font}' >${letter}</span>`
      return htmlContent;
   }

   var keycode = (e.keyCode ? e.keyCode : e.which);
   var regex = /[a-zA-Z\s]/;

   
   if (keycode == 13) {
      displayArea.append("<br>");
   }



   if(regex.test(letter)){
      switch(letter){
         case 'a': case 'A': displayArea.append(myFunction(0));
         break;
         case 'b': case 'B': displayArea.append(myFunction(1));
         break;
         case 'c': case 'C': displayArea.append(myFunction(2));
         break;
         case 'd': case 'D': displayArea.append(myFunction(3));
         break;
         case 'e': case 'E': displayArea.append(myFunction(4));
         break;
         case 'f': case 'F': displayArea.append(myFunction(5));
         break;
         case 'g': case 'G': displayArea.append(myFunction(6));
         break;
         case 'h': case 'H' : displayArea.append(myFunction(7));
         break;
         case 'i': case 'I' : displayArea.append(myFunction(8));
         break;
         case 'j': case 'J' : displayArea.append(myFunction(9));
         break;
         case 'k': case 'K' : displayArea.append(myFunction(10));
         break;
         case 'l': case 'L' : displayArea.append(myFunction(11));
         break;
         case 'm': case 'M' : displayArea.append(myFunction(12));
         break;
         case 'n': case 'N' : displayArea.append(myFunction(13));
         break;
         case 'o': case 'O' : displayArea.append(myFunction(14));
         break;
         case 'p': case 'P' : displayArea.append(myFunction(15));
         break;
         case 'q': case 'Q' : displayArea.append(myFunction(16));
         break;
         case 'r': case 'R' : displayArea.append(myFunction(17));
         break;
         case 's': case 'S' : displayArea.append(myFunction(18));
         break;
         case 't': case 'T' : displayArea.append(myFunction(19));
         break;
         case 'u': case 'U' : displayArea.append(myFunction(20));
         break;
         case 'v': case 'V' : displayArea.append(myFunction(21));
         break;
         case 'w': case 'W' : displayArea.append(myFunction(22));
         break;
         case 'x': case 'X' : displayArea.append(myFunction(23));
         break;
         case 'y': case 'Y' : displayArea.append(myFunction(24));
         break;
         case 'z': case 'Z' : displayArea.append(myFunction(25));
         break;
         case ' ' : displayArea.append(`<span class='displayedLetters' style=' font-size: ${fontSize}px; font-family: ${font}' >&nbsp</span>`);
         break;
         default : displayArea.append("");
      }
   }  

});

$("#resetButton").on('click', function() {
   displayArea.empty();
   $("#textArea").val('');
});



// function setup() {
//    createCanvas(300, 300, SVG);
//    background(0);
//    fill(150);
//    stroke(150);
// }

// function draw() {
//    var r = frameCount % 200 * Math.sqrt(2);
//    background(255);
//    ellipse(0, 0, r, r);
//    save("mySVG2.svg"); // give file name
//    print("saved svg");
//    noLoop(); // we just want to export once
// }






