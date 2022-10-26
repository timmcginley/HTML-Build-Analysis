/* written by Tim McGinley 2022 */

// ok in here we need to include a lot of stuff.
// we need a menu... where would this fit?
// we need to start (over)loading stuff into the DOM.
// we need to splvoivoiit the screen into section and plan and KPIs and info - where should this go?



function main() {
	
	// calculate the floors
	const floors = document.getElementsByTagName("floor-");
	let num_floors = floors.length;
	console.log(num_floors);
	
	// add data about the model to the properties box
	$('props-').prepend('number of floors is '+num_floors);
	$('props-').prepend('site elevation is '+$('site-').attr('elev')+'<br>');
	
	// read the roof elevation of the building
	$('props-').prepend('roof elevation is '+$('roof-').attr('elev')+'<br>');

	// get the project name in the project tag
	const project = document.getElementsByTagName("project-");
	$('project-').prepend('<h1>'+$(project).attr('name')+'</h1><hr>');
	
	// get the simulation name in the project tag
	const myPlot = document.getElementsByTagName("myPlot-");
	$('myPlot-').prepend('<h1>'+$(myPlot).attr('name')+'</h1>');
	
	const Eurocodecheck = document.getElementsByTagName("Eurocodecheck-");
	$('Eurocodecheck-').prepend('<h1>'+$(Eurocodecheck).attr('name')+'</h1>');
	
	// load the plan so we can edit it
	plan('happy');
	
	
	
	// The .each() method is unnecessary here:
	$( 'floor-' ).each(function() {
	console.log($(this)[0].innerHTML);
		$( this ).on("click", function(){
			//$('plan-').css("background-color","black");
			
			changePlan($(this).attr('name')+':'+$(this).attr('elev'));
			//$( this ).innerHTML
		});
	});
	
}


//function floor_loop () {
	//const main = document.querySelector('main');
	
//	let floor- = "";
	
	//for (let i = 1; i <= 200; i++) {
		//floor- += <div>${i}</div>;
	//};
//


function plan(text) {
jQuery('<div>', {
    id: 'plan',
    class: 'plan',
    title: 'click a floor to see the plan',
	html:text
}).appendTo('plan-');  
	
}

function changePlan(text) {
	$('#plan').html(text);
}

//function floor(text) {
//jQuery('<div>', {
    //id: 'plan',
   // class: 'plan',
   // title: 'click a floor to see the plan',
//	html:text//
//}).appendTo('plan-');//  
	
//}//

//function changePlan(text) {//
	//$('#plan').html(text);
//}//


/*function numberoffloors() {
var numberoffloors = document.getElementById("numberoffloors").value;
//document.querySelector("button").addEventListener("click", numberoffloors);
/*const floor = document.getElementById("floor") = numberoffloors;*/
/*console.log(numberoffloors);
}*/
function LengthBuilding() {
var lengthbuilding = document.getElementById("LengthBuilding").value;
document.getElementById("plan").style.height  = lengthbuilding;
console.log(LengthBuilding);
}
function WidthBuilding() {
var widthbuilding = document.getElementById("WidthBuilding").value;
document.getElementById("plan").style.width  = widthbuilding;
console.log(WidthBuilding);
}
function Thicknessofthewall() {
var Thicknessofthewall = document.getElementById("Thicknessofthewall").value;
/*document.getElementById("outputnew2").innerHTML  = Thicknessofthewall;*/
console.log(Thicknessofthewall);
}
function Lengthofthecore() {
var Lengthofthecore = document.getElementById("Lengthofthecore").value;
/*document.getElementById("outputnew3").innerHTML  = Lengthofthecore;*/
console.log(Lengthofthecore);
}
function Widthofthecore() {
var widthofthecore = document.getElementById("Widthofthecore").value;
/*document.getElementById("plan").style.width  = widthofthecore;*/
console.log(widthofthecore);
}
function XLocationofthecore() {
var XLocationofthecore = document.getElementById("XLocationofthecore").value;
/*document.getElementById("outputnew5").innerHTML  = XLocationofthecore;*/
console.log(XLocationofthecore);
}
function YLocationofthecore() {
var YLocationofthecore = document.getElementById("YLocationofthecore").value;
/*document.getElementById("outputnew6").innerHTML  = YLocationofthecore;*/
console.log(YLocationofthecore);
}
function Heightofthefloor() {
var Heightofthefloor = document.getElementById("Heightofthefloor").value;
/*document.getElementById("outputnew7").innerHTML  = Heightofthefloor;*/
console.log(Heightofthefloor);
}
function numberoffloors() {
var num = document.getElementById("numberoffloors").value;
//document.querySelector("button").addEventListener("click", appendnum);
//function appendnum() {
	//newnum = document.createElement("num");
	//newnum.id = "num" + i++;
	//document.body.appendChild(newnum);
//}
//}
//const floor = document.getElementById("floor_upper") = numberoffloors;
document.getElementById("floor").style = num;
console.log(num);
}
function totalheightofthebuilding() {
var totalheightofthebuilding = document.getElementById("totalheightofthebuilding").value;
/*document.getElementById("myPlot-").style.value  = Totalheightofthebuilding;*/
console.log(totalheightofthebuilding);
}

//var i = 0;
//document.querySelector("button").addEventListener("click", num);
//function numberoffloors() {
//	newfloor = document.createElement("floor-");
//	newfloor.id = "floor-" + i++;
//	document.body.appendChild(newfloor-);
//}
//






// HTML-Build DOM

// shoulds include...
/*
*/


// ---------------------------------------------------------------------
//   model                    |             view
//    '-> project             |               '-> plan               
//      '-> site              |       this shows a floor in plan        |
//        '-> building        |                                         |
// #section                   |               '-> props                 |
// this shows the floors      |      this shows the selected properties |
// in section                 |                                         |
//    <floor...->             |                                         |
//                            |                                         |
// ---------------------------------------------------------------------








