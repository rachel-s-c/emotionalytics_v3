<!--largely taken from https://codepen.io/agcolom/pen/jtHmv by Anne-Gaelle Colom-->


function runCode(){


function getTheColor( colorVal ) {
  	var theColor = "";
  	if ( colorVal < 50 ) {
			    myRed = 255;
			    myGreen = parseInt( ( ( colorVal * 2 ) * 255 ) / 100 );
		  }
	  else 	{
			    myRed = parseInt( ( ( 100 - colorVal ) * 2 ) * 255 / 100 );
			    myGreen = 255;
		  }
	  theColor = "rgb(" + myRed + "," + myGreen + ",0)"; 
  	return( theColor ); 
}
function getTheColor2( colorVal2 ) {
  	var theColor2 = "";
  	if ( colorVal2 < 50 ) {
			    myRed2 = 255;
			    myGreen2 = parseInt( ( ( colorVal2 * 2 ) * 255 ) / 100 );
		  }
	  else 	{
			    myRed2 = parseInt( ( ( 100 - colorVal2 ) * 2 ) * 255 / 100 );
			    myGreen2 = 255;
		  }
	  theColor2 = "rgb(" + myRed2 + "," + myGreen2 + ",0)"; 
  	return( theColor2 ); 
}





function refreshSwatch1() {
	var coloredSlider1 = $( "#coloredSlider1" ).slider( "value" ),
	myColor1 = getTheColor( coloredSlider1 );

	$( "#coloredSlider1 .ui-slider-range" ).css( "background-color", myColor1 );

}

$(function() {
	  $( "#coloredSlider1" ).slider({
		    orientation: "horizontal",
		    range: "min",
      		min: 0,
		    max: 100,
		    value: 0,
		    slide: refreshSwatch1,
		    change: refreshSwatch1
	  });
});

function refreshSwatch2() {
	var coloredSlider2 = $( "#coloredSlider2" ).slider( "value" ),
	myColor2 = getTheColor2( coloredSlider2 );

	$( "#coloredSlider2 .ui-slider-range" ).css( "background-color", myColor2 );

}

$(function() {
	  $( "#coloredSlider2" ).slider({
		    orientation: "horizontal",
		    range: "min",
      		min: 0,
		    max: 100,
		    value: 0,
		    slide: refreshSwatch2,
		    change: refreshSwatch2
	  });
});

function refreshSwatch3() {
	var coloredSlider3 = $( "#coloredSlider3" ).slider( "value" ),
	myColor3 = getTheColor( coloredSlider3 );

	$( "#coloredSlider3 .ui-slider-range" ).css( "background-color", myColor3 );

}

$(function() {
	  $( "#coloredSlider3" ).slider({
		    orientation: "horizontal",
		    range: "min",
      		min: 0,
		    max: 100,
		    value: 0,
		    slide: refreshSwatch3,
		    change: refreshSwatch3
	  });
});

function refreshSwatch4() {
	var coloredSlider4 = $( "#coloredSlider4" ).slider( "value" ),
	myColor4 = getTheColor( coloredSlider4 );

	$( "#coloredSlider4 .ui-slider-range" ).css( "background-color", myColor4 );


}

$(function() {
	  $( "#coloredSlider4" ).slider({
		    orientation: "horizontal",
		    range: "min",
      		min: 0,
		    max: 100,
		    value: 0,
		    slide: refreshSwatch4,
		    change: refreshSwatch4
	  });
});
}
window.onload=runCode;