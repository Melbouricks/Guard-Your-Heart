var current_pa = document.getElementById("current_pa");

var actGet = "{{activity_entered}}";
if (actGet.length == 2) {
    var row_heading = document.getElementById("row_heading");
    row_heading.style = "display:none"
    var msg = document.createElement("h3");
    msg.innerHTML = "You have not added any physical activities."
    var msg2 = document.createElement("h3");
    msg2.innerHTML = "Please visit the Physical Activity suggestions page."
    current_pa.appendChild(msg);
    current_pa.appendChild(msg2);
}

var light_time = 0;
var moderate_time = 0;
var vigorous_time = 0;

var flag_duraion = 0;
var days_total = 0;

{ % for activity_data in activity_entered % }
var heading = "{{ activity_data.heading }}";
var minutes = "{{ activity_data.minutes }}";
var days = "{{ activity_data.daysperweek }}";
var intensity = "{{ activity_data.intensity }}";
// console.log("yyyy  "+intensity);

var div_row = document.createElement("div");
div_row.className = "row";

// heading
var div_heading = document.createElement("div");
div_heading.className = "col-sm-6";
var h5_heading = document.createElement("h5");
h5_heading.innerHTML = heading;

var input1 = document.createElement("input");
input1.setAttribute("name", "activities");
input1.type = "hidden";
input1.value = heading;

div_heading.appendChild(h5_heading);
div_heading.appendChild(input1);

// minutes
var div_minutes = document.createElement("div");
div_minutes.className = "col-sm-2";
var h5_minutes = document.createElement("h5");
h5_minutes.innerHTML = minutes;

var input2 = document.createElement("input");
input2.setAttribute("name", "minutes");
input2.type = "hidden";
input2.value = minutes;

div_minutes.appendChild(h5_minutes);
div_minutes.appendChild(input2);

// days
var div_days = document.createElement("div");
div_days.className = "col-sm-2";
var h5_days = document.createElement("h5");
h5_days.innerHTML = days;

var input3 = document.createElement("input");
input3.setAttribute("name", "days");
input3.type = "hidden";
input3.value = days;

div_days.appendChild(h5_days);
div_days.appendChild(input3);

// intensity
var div_intensity = document.createElement("div");
div_intensity.className = "col-sm-2";
var h5_intensity = document.createElement("h5");
h5_intensity.innerHTML = intensity;

var input4 = document.createElement("input");
input4.setAttribute("name", "intensity");
input4.type = "hidden";
input4.value = intensity;

div_intensity.appendChild(h5_intensity);
div_intensity.appendChild(input4);

div_row.appendChild(div_heading);
div_row.appendChild(div_minutes);
div_row.appendChild(div_days);
div_row.appendChild(div_intensity);

current_pa.appendChild(div_row);

{ % endfor % }