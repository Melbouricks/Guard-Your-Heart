function sub(val) {
    console.log(val);
    //console.log(headings_array[val].activities);
    $("#activityname").html("").selectpicker('refresh');
    var content_list = [];
    for (var i = 0; i < headings_array[val].activities.length; i++) {
        // if (i == 0) {
        //     content_list.push("<option>-Option-</option>");
        // }
        var content = "";
        content = "<option>" + headings_array[val].activities[i].activity + "</option>";
        content_list.push(content);
    }
    var content_all = content_list.toString();
    $("#activityname")
        .html(content_all)
        .selectpicker('refresh');
}

// function to check the activity radio button
function activityCheckFunction() {
    if (document.getElementById('activityyes').checked) {
        document.getElementById('activities').style.display = 'block';
    } else {
        document.getElementById('activities').style.display = 'none';
    }
}

// function to delete the activity that is added for assessment
function deleteFunction(tag, activ_name) {
    var row = tag.parentNode.parentNode;
    activityTable = row.parentNode;
    activityTable.removeChild(row);
    // checkActivities.pop(activ_name)
    if (activityTable.childElementCount < 2) {
        activityTable.classList.remove('d-md-table');
        activityTable.classList.add('d-none');
    }
}

// Function to check the dubplicate values in activity for assessment 
// var checkActivities=[]
function checkData(temp) {
    var activities = document.getElementsByName("activities");
    console.log(temp);
    if (activities.length != 0) {
        for (var i = 0; i < activities.length; i++) {
            console.log(activities[i].value);
            if (activities[i].value == temp) {
                alert('Activity already added!');
                return false;
            }
        }

        return true;

    }
    else {
        return true;
    }

}

// function to add the activity for assessment
function addFunction() {
    var activityname = document.getElementById('activityname').value;
    var kmsorhours = document.getElementById('kmsorhours').value;
    var daysperweek = document.getElementById('daysperweek').value;

    if (checkData(activityname)) {

        

        if (validateName(activityname) == true) {

            if (validateKmsOrHours(kmsorhours) == true) {

                if (validateDaysPerWeek(daysperweek) == true) {

                    var div = document.createElement("div");
                    div.className = "d-md-table-row activity-table-row";

                    var div1 = document.createElement("div");
                    div1.className = "d-md-table-cell activity-table-cell";
                    var input1 = document.createElement("input");
                    input1.setAttribute("name", "activities");
                    input1.type = "hidden";
                    input1.value = activityname;
                    var h31 = document.createElement("h3");
                    h31.className = "d-inline";
                    h31.innerHTML = activityname;
                    // console.log(input1);
                    var p1 = document.createElement("p");
                    p1.className = "d-md-none d-inline";
                    p1.innerHTML = " activity";

                    div1.appendChild(input1);
                    div1.appendChild(h31);
                    div1.appendChild(p1);


                    var div2 = document.createElement("div");
                    div2.className = "d-md-table-cell activity-table-cell";
                    var input2 = document.createElement("input");
                    input2.setAttribute("name", "minutes");
                    input2.type = "hidden";
                    input2.value = kmsorhours;
                    var h32 = document.createElement("h3");
                    h32.className = "d-inline";
                    h32.innerHTML = kmsorhours;
                    h32.setAttribute("name", "minutes");
                    var p2 = document.createElement("p");
                    p2.className = "d-md-none d-inline";
                    p2.innerHTML = " minutes per day";

                    div2.appendChild(input2);
                    div2.appendChild(h32);
                    div2.appendChild(p2);

                    var div3 = document.createElement("div");
                    div3.className = "d-md-table-cell activity-table-cell";
                    var input3 = document.createElement("input");
                    input3.setAttribute("name", "days");
                    input3.type = "hidden";
                    input3.value = daysperweek;
                    var h33 = document.createElement("h3");
                    h33.className = "d-inline";
                    h33.innerHTML = daysperweek;
                    // h33.name = "days";
                    h33.setAttribute("name", "days");
                    var p3 = document.createElement("p");
                    p3.className = "d-md-none d-inline";
                    p3.innerHTML = " days per week";

                    div3.appendChild(input3);
                    div3.appendChild(h33);
                    div3.appendChild(p3);

                    var div4 = document.createElement("div");
                    div4.className = "d-md-table-cell activity-table-cell mt-n4 d-flex justify-content-end";

                    var div41 = document.createElement("div");
                    div41.className = "d-flex w-25";
                    div41.onclick = function () { deleteFunction(div41, activityname); }
                    var itag = document.createElement("i");
                    itag.className = "fas fa-trash";
                    itag.style.fontSize = "30px";
                    itag.style.color = "#101B2B";
                    itag.style.cursor = "pointer";

                    div41.appendChild(itag);

                    div4.appendChild(div41);

                    div.appendChild(div1);
                    div.appendChild(div2);
                    div.appendChild(div3);
                    div.appendChild(div4);

                    activityTable = document.getElementById('activitytable')
                    activityTable.appendChild(div);

                    if (activityTable.classList.contains('d-none')) {
                        activityTable.classList.remove('d-none');
                        activityTable.classList.add('d-md-table');
                    }

                    // console.log("Jessie");
                    // Bring heading select into Focus
                    document.getElementById("headings").focus();
                    // document.getElementById("headings").selectedIndex = 0;
                    // document.getElementById("activityname").selectedIndex = 0;
                    // document.getElementById("kmsorhours").selectedIndex = 0;
                    // document.getElementById("daysperweek").selectedIndex = 0;
                    // document.getElementById("headings").value = 0;
                    // document.getElementById("activityname").value = 0;
                    // document.getElementById("kmsorhours").value = 0;
                    // document.getElementById("daysperweek").value = 0;
                    // console.log("Arihant");


                } else {
                    alert("Invalid days per week!");
                }
            } else {
                alert("Invalid hours!");
            }
        } else {
            alert("Invalid activity name!");
        }
    }
}

// function to validate activity name
function validateName(activityname) {
    if (activityname == null | activityname == "") {
        return false;
    }
    return true;
}

// function to validate hours
function validateKmsOrHours(kmsorhours) {


    if (kmsorhours == 0) {
        return false;
    }
    else {
        return true;
    }
    // var regex = /^([0-9]{1,2})$/;
    // return regex.test(kmsorhours);
}

// function to validate Days per week 
function validateDaysPerWeek(daysperweek) {
    // var regex=/^([1-7])$/;
    // return regex.test(daysperweek);
    if (daysperweek == 0) {
        return false;
    }
    else {
        return true;
    }
}

// function to validate activity 
function validateActivity() {
    if (document.getElementById('activityyes').checked) {
        activityTable = document.getElementById('activitytable');
        if (activityTable.childElementCount < 2) {
            var activityhead = document.getElementById('headings').value;
            var activityname = document.getElementById('activityname').value;
            var kmsorhours = document.getElementById('kmsorhours').value;
            var daysperweek = document.getElementById('daysperweek').value;
            if (validateName(activityhead) == true ||validateName(activityname) == true || validateKmsOrHours(kmsorhours) || validateDaysPerWeek(daysperweek)){
                alert("Please click add activity button to add activity.");
            }
            else{
                alert('Please enter at least one activity.');
            }
                
            return false;
        }
        else {
            return true;
        }
    } else {
        return true;
    }
}