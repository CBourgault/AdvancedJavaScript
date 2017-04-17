//creates an array variable with the days of week stored
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
	//Gets date, month, and year functions and stores in variables
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();
		//Adds classes to date variables
        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);
		// Updates the layout of the calander based on user selection
        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });	
		//Sets all elements in the day class on button click		
	$(function yesFunction(){
    $('#yes').on('click', function yesFunction(){
		$(".day").removeClass("btnNo");
		$(".day").toggleClass('btnYes')
		});
	});
	//Sets all elements in the day class on button click
	$(function noFunction(){
    $('#no').on('click', function noFunction(){
		$(".day").removeClass("btnYes");
		$(".day").toggleClass('btnNo')
		});
	});	
		
});
//Calculates the total number of days in a month and updates value based on user selection
function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}
//Displays options of months and years
function showCalendar (mth, yr) {
		
	// Sets variables for variables based on calculations		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
	//Begins a string concat
	var str ="";
	//For loop while i is less than the first day of month plus the total days in month
	for(var i = 0; i < firstDayOfWeek + numberOfDaysInMonth ; i++)
	{	
		//if i divided by the modulus 7 is 0, create row
		if (i % 7== 0)
			{
		str += '<div class= "row">';			
			}
		str += '<div class= "day">';
		//if i is less than or equal to first day of week, add i minus first day of week plus one
		if (i >= firstDayOfWeek)
		{
			str += i - firstDayOfWeek + 1;
		}
		//Closes the day div
		str += '</div>';
		//of i plus one divided by modulus of 7 is zero, close row div
		if (i+1 % 7==0)
		{
		str += '</div>';
		}
		//creates a console log of what "I" is set set
		 console.log("i is " + i)
	}
	//Displays the str variable in html using results id
    $("#results").html(str);
		// Function that makes day element clickable
	   	$('.day').click(function dayFunction() {
			//if day element clicked, style with classes array of three classes
	$(this).each(function dayFunction(){
		var classes = ['day btnYes','day btnNo','day'];
		// Uses jQuery to select a class in array, and each click the next item in array is selected
		this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
	  });
	});
}


