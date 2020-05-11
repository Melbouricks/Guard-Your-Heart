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

    if (validateKmsOrHours(kmsorhours) == true) {

        if (validateDaysPerWeek(daysperweek) == true) {

            var div = document.createElement("div");
            div.className = "d-md-table-row activity-table-row";

            var div1 = document.createElement("div");
            div1.className = "d-md-table-cell activity-table-cell";
            var h31 = document.createElement("h3");
            h31.className = "d-inline";
            h31.innerHTML = activityname;
            var p1 = document.createElement("p");
            p1.className = "d-md-none d-inline";
            p1.innerHTML = "activity";

            div1.appendChild(h31);
            div1.appendChild(p1);


            var div2 = document.createElement("div");
            div2.className = "d-md-table-cell activity-table-cell";
            var h32 = document.createElement("h3");
            h32.className = "d-inline";
            h32.innerHTML = kmsorhours;
            var p2 = document.createElement("p");
            p2.className = "d-md-none d-inline";
            p2.innerHTML = "kms or hours per day";

            div2.appendChild(h32);
            div2.appendChild(p2);

            var div3 = document.createElement("div");
            div3.className = "d-md-table-cell activity-table-cell";
            var h33 = document.createElement("h3");
            h33.className = "d-inline";
            h33.innerHTML = daysperweek;
            var p3 = document.createElement("p");
            p3.className = "d-md-none d-inline";
            p3.innerHTML = "days per week";

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
        alert("Invalid kms or hours!");
    }
    

}
// console.log(activties);



// function validateName(activityname) {
//     var regex = /^([a-zA-Z]{1,20})$/;
//     return regex.test(activityname);
// }

function validateKmsOrHours(kmsorhours) {
    var regex = /^([0-9]{1,2})$/;
    return regex.test(kmsorhours);
}

function validateDaysPerWeek(daysperweek) {
    var regex = /^([0-7])$/;
    return regex.test(daysperweek);
}