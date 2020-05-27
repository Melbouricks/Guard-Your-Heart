window.onload = function () {
    var current_pa = document.getElementById("current_pa");

    // console.log(actGet);

    var row_heading = document.getElementById("row_heading");
        
    if (actGet.length == 0) {
        var msg = document.createElement("p");
        msg.className = "lead text-justify";
        msg.innerHTML = "You have not added any physical activities."
        var msg2 = document.createElement("p");
        msg2.className = "lead text-justify";
        msg2.innerHTML = "Please visit the Physical Activity suggestions page."
        current_pa.appendChild(msg);
        current_pa.appendChild(msg2);
    }
    else {
        row_heading.style = "";
    }

    for (var i = 0; i< actGet.length; i++){
        var heading = actGet[i].heading;
        // console.log(heading);
        var minutes = actGet[i].minutes * 60;
        var days = actGet[i].daysperweek;
        var intensity = actGet[i].intensity;
        var tr = document.createElement("tr");
        var td_heading = document.createElement("td");
        var td_minutes = document.createElement("td");
        var td_days = document.createElement("td");
        var td_intensity = document.createElement("td");

        td_heading.innerHTML = heading;
        td_minutes.innerHTML = minutes;
        td_days.innerHTML = days;
        td_intensity.innerHTML = intensity;

        tr.append(td_heading);
        tr.append(td_minutes);
        tr.append(td_days);
        tr.append(td_intensity);

        tbody_pa.append(tr);
    }

}