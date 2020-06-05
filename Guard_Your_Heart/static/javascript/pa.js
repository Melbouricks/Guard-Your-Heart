window.onload = function () {
    var current_pa = document.getElementById("current_pa");
    var myChart = document.getElementById("myChart");

    var row_heading = document.getElementById("row_heading");

    if (actGet.length == 0) {
        var msg = document.createElement("p");
        msg.className = "lead text-justify"
        msg.innerHTML = "You have not added any physical activities."
        var msg2 = document.createElement("p");
        msg2.className = "lead text-justify"
        msg2.innerHTML = "We found some activities you may interested in, please scroll down and check."
        var msg3 = document.createElement("p");
        msg3.className = "lead text-justify"
        msg3.innerHTML = "Adults should do at least 150 minutes of moderate intensity physical activity throughout the week or do at least 75 minutes " +
        "of vigorous intensity physical activity throughout the week or an equivalent combination of moderate and vigorous intensity activity.";
        document.getElementById("feedbackContain").style.display = "none";
        document.getElementById("feed").style.display = "none";
        current_pa.appendChild(msg);
        current_pa.appendChild(msg2);
        current_pa.appendChild(msg3);
    }
    else {
        row_heading.style = "";
        myChart.style = "";
    }

    var light_time = 0;
    var moderate_time = 0;
    var vigorous_time = 0;

    var flag_duraion = 0;
    var days_total = 0;

    var tbody_pa = document.getElementById("tbody_pa");

    // add activity to table
    for (var i = 0; i < actGet.length; i++) {
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

        // calculate total time
        if (intensity == "Light") {
            light_time += parseInt(minutes) * parseInt(days)
        }
        else if (intensity == "Moderate") {
            moderate_time += parseInt(minutes) * parseInt(days)
        }
        else {
            vigorous_time += parseInt(minutes) * parseInt(days)
        }

        // check duration < 10 minutes
        if (parseInt(minutes) < 10) {
            flag_duraion = 1;
        }

        // calculate days in total
        days_total += parseInt(days);

    }

    // add bar chart
    var ctx = document.getElementById('myChart');
    ctx.height = 90;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Light', 'Moderate', 'Vigorous'],
            datasets: [{
                label: 'Total minutes',
                data: [light_time, moderate_time, vigorous_time],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // check basic total time
    var flag_total_basic = 0;
    if (moderate_time >= 150 | vigorous_time >= 75 | moderate_time + vigorous_time * 2 >= 150) {
        flag_total_basic = 0;
    }
    else {
        flag_total_basic = 1;
    }

    // check advanced total time
    var flag_total = 0;
    if (moderate_time >= 300 | vigorous_time >= 150 | moderate_time + vigorous_time * 2 >= 300) {
        flag_total = 0;
    }
    else {
        flag_total = 1;
    }

    // check only light
    var flag_light = 0;
    if (moderate_time == 0 && vigorous_time == 0 && light_time != 0) {
        flag_light = 1;
    }

    // check total days
    var flag_days = 0;
    if (days_total < 3) {
        flag_days = 1;
    }

    var msg_duration = "Activity should be performed in bouts of at least 10 minutes duration. You should extend time duration for doing the activity.";
    var msg_light = "Any time or form of exercise is better than none, but to be healthier, please increase time doing moderate or vigorous intensity activity.";
    var msg_total_basic = "Adults should do at least 150 minutes of moderate intensity physical activity throughout the week or do at least 75 minutes " +
        "of vigorous intensity physical activity throughout the week or an equivalent combination of moderate and vigorous intensity activity.";
    var msg_health = "Congratulations! You already have the adequate activity levels."
    var msg_total = "For additional health benefits, older adults should increase their moderate intensity physical activity to 300 minutes per week," +
        " or engage in 150 minutes of vigorous intensity physical activity per week, or an equivalent combination of moderate and vigorous intensity activity." +
        " We recommend increasing the amount of activity.";
    var msg_days = "You should perform physical activity on 3 or more days per week to enhance balance and prevent falls."
    var msg_condition = "When you cannot do the recommended amounts of physical activity due to health conditions, " +
        "you should be as physically active as your abilities and conditions allow."
    var msg_congratulation = "Congratulations! You are doing physical activities very well! Please keep it up."

    if (flag_duraion == 1 | flag_total == 1 | flag_days == 1 | flag_light == 1 | flag_total_basic == 1) {
        if (flag_duraion == 1) {
            addMsg(msg_duration);
        }
        if (flag_light == 1) {
            addMsg(msg_light);
        }
        if (flag_total_basic == 1) {
            addMsg(msg_total_basic);
        }
        if (flag_total_basic == 0 && flag_total == 1) {
            addMsg(msg_health);
            addMsg(msg_total);
        }
        if (flag_days == 1) {
            addMsg(msg_days);
        }
        addMsg(msg_condition);
    }
    else {
        addMsg(msg_congratulation);
    }

}

// add message
function addMsg(msg) {
    var feedback = document.getElementById("feedback");
    var div_msg = document.createElement("div");
    div_msg.className = "row px-3";
    var p_msg = document.createElement("p");
    p_msg.innerHTML = msg;
    p_msg.className = "lead text-justify py-2";
    div_msg.appendChild(p_msg);
    feedback.appendChild(div_msg);
}