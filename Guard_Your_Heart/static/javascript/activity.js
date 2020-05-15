function bpCheckFunction() {
    if (document.getElementById('bpyes').checked) {
        document.getElementById('bloodpressure').style.display = 'block';
    } else {
        document.getElementById('bloodpressure').style.display = 'none';
    }
}

function cholCheckFunction() {
    if (document.getElementById('cholyes').checked) {
        document.getElementById('cholestrol').style.display = 'block';
    } else {
        document.getElementById('cholestrol').style.display = 'none';
    }
}

function sugarCheckFunction() {
    if (document.getElementById('sugaryes').checked) {
        document.getElementById('sugar').style.display = 'block';
    } else {
        document.getElementById('sugar').style.display = 'none';
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
                input1.setAttribute("name","activities");
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
                input2.setAttribute("name","minutes");
                input2.type = "hidden";
                input2.value = kmsorhours;
                var h32 = document.createElement("h3");
                h32.className = "d-inline";
                h32.innerHTML = kmsorhours;
                h32.setAttribute("name","minutes");
                var p2 = document.createElement("p");
                p2.className = "d-md-none d-inline";
                p2.innerHTML = "kms or hours per day";

                div2.appendChild(input2);
                div2.appendChild(h32);
                div2.appendChild(p2);

                var div3 = document.createElement("div");
                div3.className = "d-md-table-cell activity-table-cell";
                var input3 = document.createElement("input");
                input3.setAttribute("name","days");
                input3.type = "hidden";
                input3.value = daysperweek;
                var h33 = document.createElement("h3");
                h33.className = "d-inline";
                h33.innerHTML = daysperweek;
                // h33.name = "days";
                h33.setAttribute("name","days");
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
                div41.onclick = function() { deleteFunction(div41); }
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
            alert("Invalid kms or hours!");
        }
    } else {
        alert("Invalid activity name");
    }

}

function validateName(activityname) {
    // var regex = /^([a-zA-Z]{1,20})$/;
    // return regex.test(activityname);
    // alert("valid name checking!");
    if (activityname == null | activityname == "" | activityname == "-Option-") {
        return false;
    }
    return true;
}

function validateKmsOrHours(kmsorhours) {
    var regex = /^([0-9]{1,2})$/;
    return regex.test(kmsorhours);
}

function validateDaysPerWeek(daysperweek) {
    var regex = /^([0-7])$/;
    return regex.test(daysperweek);
}

function formSubmit(){

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
    var blob = new Blob([JSON.stringify(activityList, null, 2)], {type : 'application/json'});
    formData.append('activities', blob);

    console.log(formData)

    // var request = new XMLHttpRequest();
    //request.open('POST', '{{ url_for("test") }}');
    //request.open('POST', "test.html");
    // request.send(formData);
}