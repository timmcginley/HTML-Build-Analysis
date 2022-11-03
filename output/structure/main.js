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
var num = document.getElementById("numberoffloors").onclick = numberoffloors() ;
/*var section = document.getElementById("floor");
//document.querySelector("button").addEventListener("click", appendnum);
//function appendnum() {
	//newnum = document.createElement("num");
	//newnum.id = "num" + i++;
	//document.body.appendChild(newnum);
//}
//}
//const floor = document.getElementById("floor_upper") = numberoffloors;
document.getElementById("floor").style = num;*/
console.log(num);
}
function totalheightofthebuilding() {
var totalheightofthebuilding = document.getElementById("totalheightofthebuilding").value;
/*document.getElementById("myPlot-").style.value  = Totalheightofthebuilding;*/
console.log(totalheightofthebuilding);
}


window.addEventListener('load', () => {
	const form = document.querySelector("#new-floor-form");
	const list_el = document.querySelector("#floor-middle");
	
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		
		const floor_el = document.createElement("div");
		floor_el.classList.add("floor");
		
		const floor_content_el = document.createElement("div");
		floor_content_el.classList.add("content");
		
		floor_el.appendChild(floor_content_el);
		
		const floor_input_el = document.createElement("input");
		floor_input_el.classList.add("text");
		floor_input_el.type = "text";

		floor_input_el.setAttribute("readonly", "readonly");
		
		floor_content_el.appendChild(floor_input_el);
		
		const floor_actions_el = document.createElement("div");
		floor_actions_el.classList.add("actions");
		
		const floor_delete_el = document.createElement("button");
		floor_delete_el.innerHTML = "Delete";
		floor_actions_el.appendChild(floor_delete_el);
		
		floor_el.appendChild(floor_actions_el);
		
		list_el.appendChild(floor_el);

		
		floor_delete_el.addEventListener('click', () => {
			list_el.removeChild(floor_el);
		});
	});
});



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








