function nextQue(abc) {
    console.log(abc);
    var regex = /^\d+(\.\d{1})?$/;
    var reg_age = /^\d+$/;
    if (document.getElementById('age_que').style.display == 'block') {
        var age = document.getElementById("age").value;

        if (age == null | age == "" | reg_age.test(age) == false) {
            alert("Age should be integer");
        }
        else if (age < 35 || age > 105) {
            alert("Age can only be between 35 and 105")
        } else {
            document.getElementById('age_que').style.display = 'none'
            document.getElementById('height_que').style.display = 'block'
        }

    } else if (document.getElementById('height_que').style.display == 'block') {
        // min="90" max="230"
        var height = document.getElementById("height").value;
        if (height == null | height == "" | reg_age.test(height) == false) {
            alert("Height should be integer");
        }
        else if (height < 90 || height > 230) {
            alert("Height can only be between 90 and 230")
        }
        else {
            document.getElementById('height_que').style.display = 'none'
            document.getElementById('weight_que').style.display = 'block'
        }
    } else if (document.getElementById('weight_que').style.display == 'block') {
        // min="40" max="230"
        var weight = document.getElementById("weight").value;
        console.log(weight)
        if (weight == null | weight == "") {
            alert("Weight should be integer");
        }
        else if (weight < 40 || weight > 230) {
            alert("Weight can only be between 40 and 230")
        }
        else if (regex.test(weight) == false) {
            alert("Weight should be integer or decimal step by 0.1")
        }
        else {
            document.getElementById('weight_que').style.display = 'none'
            document.getElementById('gender_que').style.display = 'block'
        }

    } else if (document.getElementById('gender_que').style.display == 'block') {
        document.getElementById('gender_que').style.display = 'none'
        document.getElementById('bp_que').style.display = 'block'
    } else if (document.getElementById('bp_que').style.display == 'block') {
        if (document.getElementById("bloodpressure").style.display == 'block') {
            // 70 - 228 mmHg
            var systolicbp = document.getElementById("systolicbp").value;
            // min="50" max="150"
            var diastolicbp = document.getElementById("diastolicbp").value;

            // console.log(regex.test(systolicbp))
            if (regex.test(systolicbp) == false) {
                alert("Systolic Blood Pressure should be integer or decimal step by 0.1");
            }
            else if (systolicbp < 70 || systolicbp > 228) {
                alert("Systolic Blood Pressure should be between 70 and 228");
            }
            else if (regex.test(diastolicbp) == false) {
                alert("Diastolic Blood Pressure should be integer or decimal step by 0.1");
            }
            else if (diastolicbp < 50 || diastolicbp > 150) {
                alert("Diastolic Blood Pressure should be between 50 and 150");
            }
            else if(parseFloat(diastolicbp) > parseFloat(systolicbp) || parseFloat(diastolicbp) == parseFloat(systolicbp)) {
                alert("Diastolic Blood Pressure should be lower than Systolic Blood Pressure");
            }
            else {
                document.getElementById('bp_que').style.display = 'none'
                document.getElementById('chol_que').style.display = 'block'
            }
        }
        else {
            document.getElementById('bp_que').style.display = 'none'
            document.getElementById('chol_que').style.display = 'block'
        }

    } else if (document.getElementById('chol_que').style.display == 'block') {
        if (document.getElementById("cholestrol").style.display == 'block') {
            var totalcholes = document.getElementById("totalcholes").value;
            // min="2" max="10.5"
            if (regex.test(totalcholes) == false) {
                alert("Cholestrol should be integer or decimal step by 0.1");
            }
            else if (totalcholes < 2 || totalcholes > 10.5) {
                alert("Cholestrol should be between 2 and 10.5");
            }
            else {
                document.getElementById('chol_que').style.display = 'none'
                document.getElementById('sugar_que').style.display = 'block'
            }
        }
        else {
            document.getElementById('chol_que').style.display = 'none'
            document.getElementById('sugar_que').style.display = 'block'
        }
    } else if (document.getElementById('sugar_que').style.display == 'block') {
        if (document.getElementById("sugar").style.display == 'block') {
            var bloodsugar = document.getElementById("bloodsugar").value;
            // min="1" max="17.4"
            if (regex.test(bloodsugar) == false) {
                alert("Sugar should be integer or decimal step by 0.1");
            }
            else if (bloodsugar < 1 || bloodsugar > 17.4) {
                alert("Sugar should be between 1 and 17.4");
            }
            else {
                document.getElementById('sugar_que').style.display = 'none'
                document.getElementById('smoke_que').style.display = 'block'
            }
        }
        else {
            document.getElementById('sugar_que').style.display = 'none'
            document.getElementById('smoke_que').style.display = 'block'
        }

    } else if (document.getElementById('smoke_que').style.display == 'block') {
        document.getElementById('smoke_que').style.display = 'none'
        document.getElementById('alco_que').style.display = 'block'
    } else if (document.getElementById('alco_que').style.display == 'block') {
        document.getElementById('alco_que').style.display = 'none'
        document.getElementById('pa_que').style.display = 'block'
        document.getElementById('submit_final').style.display = 'block'
        // document.getElementById('preview').style.display = 'block'
    }
}

function prevQue(abc) {
    console.log(abc);
    if (document.getElementById('height_que').style.display == 'block') {
        document.getElementById('height_que').style.display = 'none'
        document.getElementById('age_que').style.display = 'block'
    } else if (document.getElementById('weight_que').style.display == 'block') {
        document.getElementById('height_que').style.display = 'block'
        document.getElementById('weight_que').style.display = 'none'
    } else if (document.getElementById('gender_que').style.display == 'block') {
        document.getElementById('weight_que').style.display = 'block'
        document.getElementById('gender_que').style.display = 'none'
    } else if (document.getElementById('bp_que').style.display == 'block') {
        document.getElementById('gender_que').style.display = 'block'
        document.getElementById('bp_que').style.display = 'none'
    } else if (document.getElementById('chol_que').style.display == 'block') {
        document.getElementById('bp_que').style.display = 'block'
        document.getElementById('chol_que').style.display = 'none'
    } else if (document.getElementById('sugar_que').style.display == 'block') {
        document.getElementById('chol_que').style.display = 'block'
        document.getElementById('sugar_que').style.display = 'none'
    } else if (document.getElementById('smoke_que').style.display == 'block') {
        document.getElementById('sugar_que').style.display = 'block'
        document.getElementById('smoke_que').style.display = 'none'
    } else if (document.getElementById('alco_que').style.display == 'block') {
        document.getElementById('smoke_que').style.display = 'block'
        document.getElementById('alco_que').style.display = 'none'
    } else if (document.getElementById('pa_que').style.display == 'block') {
        document.getElementById('alco_que').style.display = 'block'
        document.getElementById('pa_que').style.display = 'none'
        document.getElementById('submit_final').style.display = 'none'
        // document.getElementById('preview').style.display = 'none'
    }
}

// function preview() {
//     console.log("preview");
//     document.getElementById('age_que').style.display = 'block'
//     document.getElementById('height_que').style.display = 'block'
//     document.getElementById('weight_que').style.display = 'block'
//     document.getElementById('gender_que').style.display = 'block'
//     document.getElementById('bp_que').style.display = 'block'
//     document.getElementById('chol_que').style.display = 'block'
//     document.getElementById('sugar_que').style.display = 'block'
//     document.getElementById('smoke_que').style.display = 'block'
//     document.getElementById('alco_que').style.display = 'block'
//     document.getElementById('pa_que').style.display = 'block'
//     document.getElementById('submit_final').style.display = 'block'
//     document.getElementById('preview').style.display = 'none'
// }

function bpCheckFunction() {
    if (document.getElementById('bpyes').checked) {
        document.getElementById('bloodpressure').style.display = 'block';
        console.log("bp")
        document.getElementById('systolicbp').required = true
        document.getElementById('diastolicbp').required = true
    } else {
        document.getElementById('bloodpressure').style.display = 'none';
        document.getElementById('systolicbp').required = false
        document.getElementById('diastolicbp').required = false
    }
}

function cholCheckFunction() {
    if (document.getElementById('cholyes').checked) {
        document.getElementById('cholestrol').style.display = 'block';
        console.log('chol')
        document.getElementById("totalcholes").required = true
    } else {
        document.getElementById('cholestrol').style.display = 'none';
        document.getElementById("totalcholes").required = false
    }
}

function sugarCheckFunction() {
    if (document.getElementById('sugaryes').checked) {
        document.getElementById('sugar').style.display = 'block';
        console.log('gluc')
        document.getElementById('bloodsugar').required = true
    } else {
        document.getElementById('sugar').style.display = 'none';
        document.getElementById('bloodsugar').required = true
    }
}

function activityCheckFunction() {
    if (document.getElementById('activityyes').checked) {
        document.getElementById('activities').style.display = 'block';
    } else {
        document.getElementById('activities').style.display = 'none';
    }
}

function deleteFunction(tag) {
    var row = tag.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addFunction() {
    var activityname = document.getElementById('activityname').value;
    var kmsorhours = document.getElementById('kmsorhours').value;
    var daysperweek = document.getElementById('daysperweek').value;

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
                console.log(input1);
                var p1 = document.createElement("p");
                p1.className = "d-md-none d-inline";
                p1.innerHTML = "activity";

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
                p2.innerHTML = "minutes per day";

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
                p3.innerHTML = "days per week";

                div3.appendChild(input3);
                div3.appendChild(h33);
                div3.appendChild(p3);

                var div4 = document.createElement("div");
                div4.className = "d-md-table-cell activity-table-cell mt-n4 d-flex justify-content-end";

                var div41 = document.createElement("div");
                div41.className = "d-flex w-25";
                div41.onclick = function () { deleteFunction(div41); }
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

                document.getElementById('activitytable').appendChild(div);

            } else {
                alert("Invalid days per week!");
            }
        } else {
            alert("Invalid Minutes!");
        }
    } else {
        alert("Invalid activity name");
    }

}

function validateName(activityname) {
    if (activityname == null | activityname == "" | activityname == "-Option-") {
        return false;
    }
    return true;
}

function validateKmsOrHours(kmsorhours) {
    if (parseInt(kmsorhours) <= 400 && parseInt(kmsorhours) > 0) {
        return true;
    } else {
        return false;
    }
    // var regex = /^([0-9]{1,2})$/;
    // return regex.test(kmsorhours);
}

function validateDaysPerWeek(daysperweek) {
    var regex = /^([0-7])$/;
    return regex.test(daysperweek);
}

function formSubmit() {

    var activitiesTable = document.getElementById('activitytable');
    var rows = activitiesTable.children;

    var activityList = [];
    for (i = 1; i < rows.length; i++) {
        row = rows[i];

        var activityObject = {};

        var columns = row.children;
        activityObject.name = columns[0].firstChild.innerHTML;
        activityObject.duration = columns[1].firstChild.innerHTML;
        activityObject.days = columns[2].firstChild.innerHTML;
        activityList.push(activityObject);
    }
    console.log(activityList);

    var formData = new FormData();
    var blob = new Blob([JSON.stringify(activityList, null, 2)], { type: 'application/json' });
    formData.append('activities', blob);

    console.log(formData)
}