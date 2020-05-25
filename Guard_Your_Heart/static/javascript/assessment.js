window.onload = function () {
    // headings_array = []
    //{% for activity_set in activity_data %}
    //    var heading = "{{ activity_set.heading }}";
    //    var activities_array = []
    //    {% for activity_info in activity_set.activities %}
    //        var activity = "{{ activity_info.activity }}";
    //        var intensity = {{ activity_info.intensity }};
    //        var met = {{ activity_info.met }};
    //        activities_array.push({
    //            "activity": activity,
    //            "intensity": intensity,
    //            "met": met
    //        })
    //    {% endfor %}
    //    headings_array.push({
    //        "heading": heading,
    //        "activities": activities_array
    //   })
    //{% endfor %}
    // console.log('Heading: ' + headings_array[0].heading);

    var headings = document.getElementById("headings");
    headings.innerHTML = "";
    // var subheading = document.getElementById("subheading");
    for (var i = 0; i < headings_array.length; i++) {
        // console.log(headings_array[i].heading);
        // if (i == 0) {
        //    headings.innerHTML += "<option>-Option-</option>";
        // }
        headings.innerHTML += "<option value=" + i + ">" + headings_array[i].heading + "</option>";
        // headings.add(new Option(headings_array[i],heading, i));
    }
    $("#headings").selectpicker('refresh');

    // Prevent form submit on Enter key press on all inputs
    $(document).on("keydown", ":input, :submit, :button", function (event) {

        if (event.key == "Enter") {
            event.preventDefault();
            // console.log('prevent default')
        }
    });

    // Get all 'next' buttons
    var buttons = document.getElementsByName('next');

    for (var i = 0; i < buttons.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        buttons[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                // console.log(this)
                this.click()
            }
        });
    }

    // Get all 'back' buttons
    var buttons = document.getElementsByName('back');

    for (var i = 0; i < buttons.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        buttons[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                this.click();
            }
        });
    }

    // Get the input field
    var submitButton = document.getElementById("submitButton");

    // Execute a function when the user releases a key on the keyboard
    submitButton.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            this.click();
        }
    });

    // Get the add activity button
    var addActivityButton = document.getElementById("addActivityButton");

    // Execute a function when the user releases a key on the keyboard
    addActivityButton.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            this.click();
        }
    });

    // Get the input field
    var input = document.getElementById("age");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("ageNextButton").click();
        }
    });

    // Get the input field
    var input = document.getElementById("height");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("heightNextButton").click();
        }
    });

    // Get the input field
    var input = document.getElementById("weight");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("weightNextButton").click();
        }
    });

    // Get the radio buttons
    var inputs = document.getElementsByName('gender');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs.item(i).addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("genderNextButton").click();
            }
        });
    }

    // Get the radio buttons
    var inputs = document.getElementsByName('bp');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("bpNextButton").click();
            }
        });
    }

    // Get the input field
    var input = document.getElementById("systolicbp");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("diastolicbp").focus();
        }
    });

    // Get the input field
    var input = document.getElementById("diastolicbp");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("bpNextButton").click();
        }
    });

    // Get the radio buttons
    var inputs = document.getElementsByName('chol');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("cholesterolNextButton").click();
            }
        });
    }

    // Get the input field
    var input = document.getElementById("totalcholes");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("cholesterolNextButton").click();
        }
    });

    // Get the radio buttons
    var inputs = document.getElementsByName('sugarradio');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("sugarNextButton").click();
            }
        });
    }

    // Get the input field
    var input = document.getElementById("bloodsugar");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("sugarNextButton").click();
        }
    });

    // Get the radio buttons
    var inputs = document.getElementsByName('smoke');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("smokeNextButton").click();
            }
        });
    }

    // Get the radio buttons
    var inputs = document.getElementsByName('alcohol');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("alcoholNextButton").click();
            }
        });
    }

    // Get the radio buttons
    var inputs = document.getElementsByName('activity');
    for (var i = 0; i < inputs.length; i++) {

        // Execute a function when the user releases a key on the keyboard
        inputs[i].addEventListener("keyup", function (event) {

            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("submitButton").click();
            }
        });
    }

    // Get the input field
    var input = document.getElementById("daysperweek");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("addActivityButton").click();
        }
    });
};

// Next button click function
function nextQue(abc) {
    // console.log("next button on: "+abc);
    var regex = /^\d+(\.\d{1})?$/;
    var reg_age = /^\d+$/;
    if (document.getElementById('age_que').style.display == 'block') {
        var age = document.getElementById("age").value;

        if (age == null | age == "" | reg_age.test(age) == false) {
            alert("Please fill in valid age.");
        }
        else if (age < 35 || age > 105) {
            alert("Age can only be between 35 and 105.")
        } else {
            document.getElementById('age_que').style.display = 'none';
            document.getElementById('height_que').style.display = 'block';
            document.getElementById("height").focus();
        }

    } else if (document.getElementById('height_que').style.display == 'block') {
        // min="90" max="230"
        var height = document.getElementById("height").value;
        if (height == null | height == "" | reg_age.test(height) == false) {
            alert("Please fill in valid height.");
        }
        else if (height < 90 || height > 230) {
            alert("Height can only be between 90 and 230 cms.")
        }
        else {
            document.getElementById('height_que').style.display = 'none';
            document.getElementById('weight_que').style.display = 'block';
            document.getElementById("weight").focus();
        }
    } else if (document.getElementById('weight_que').style.display == 'block') {
        // min="40" max="230"
        var weight = document.getElementById("weight").value;
        // console.log(weight)
        if (weight == null | weight == "") {
            alert("Please fill in valid weight.");
        }
        else if (weight < 40 || weight > 230) {
            alert("Weight can only be between 40 and 230 kgs.")
        }
        else if (regex.test(weight) == false) {
            alert("Weight should have up to one decimal point.")
        }
        else {
            document.getElementById('weight_que').style.display = 'none';
            document.getElementById('gender_que').style.display = 'block';
            document.querySelector('input[name="gender"]:checked').focus();
        }

    } else if (document.getElementById('gender_que').style.display == 'block') {
        document.getElementById('gender_que').style.display = 'none';
        document.getElementById('bp_que').style.display = 'block';
        optionSelected = document.querySelector('input[name="bp"]:checked');
        if (optionSelected.value == 1) {
            document.getElementById('bloodpressure').style.display = 'block';
            //document.getElementById('systolicbp').required = true;
            //document.getElementById('diastolicbp').required = true;
            document.getElementById("systolicbp").focus();
        }
        else {
            optionSelected.focus();
        }

    } else if (document.getElementById('bp_que').style.display == 'block') {
        if (document.getElementById("bloodpressure").style.display == 'block') {
            // 70 - 228 mmHg
            var systolicbp = document.getElementById("systolicbp").value;
            // min="50" max="150"
            var diastolicbp = document.getElementById("diastolicbp").value;

            // console.log(regex.test(systolicbp))
            if (regex.test(systolicbp) == false) {
                alert("Systolic Blood Pressure should be numeric or decimal step by 0.1.");
            }
            else if (systolicbp < 70 || systolicbp > 228) {
                alert("Systolic Blood Pressure should be between 70 and 228.");
            }
            else if (regex.test(diastolicbp) == false) {
                alert("Diastolic Blood Pressure should be numeric or decimal step by 0.1.");
            }
            else if (diastolicbp < 50 || diastolicbp > 150) {
                alert("Diastolic Blood Pressure should be between 50 and 150.");
            }
            else if (parseFloat(diastolicbp) > parseFloat(systolicbp) || parseFloat(diastolicbp) == parseFloat(systolicbp) ){
                alert("Diastolic Blood Pressure (bottom number) should be lower than Systolic Blood Pressure (top number).")
            }
            else {
                document.getElementById('bp_que').style.display = 'none';
                document.getElementById('chol_que').style.display = 'block';
                optionSelected = document.querySelector('input[name="chol"]:checked');
                if (optionSelected.value == 1) {
                    document.getElementById('cholestrol').style.display = 'block';
                    // document.getElementById("totalcholes").required = true;
                    document.getElementById("totalcholes").focus();
                }
                else {
                    optionSelected.focus();
                }
            }
        }
        else {
            document.getElementById('bp_que').style.display = 'none';
            document.getElementById('chol_que').style.display = 'block';
            optionSelected = document.querySelector('input[name="chol"]:checked');
            if (optionSelected.value == 1) {
                document.getElementById('cholestrol').style.display = 'block';
                // document.getElementById("totalcholes").required = true;
                document.getElementById("totalcholes").focus();
            }
            else {
                optionSelected.focus();
            }
        }

    } else if (document.getElementById('chol_que').style.display == 'block') {
        if (document.getElementById("cholestrol").style.display == 'block') {
            var totalcholes = document.getElementById("totalcholes").value;
            // min="2" max="10.5"
            if (regex.test(totalcholes) == false) {
                alert("Cholestrol should be numeric or decimal step by 0.1.");
            }
            else if (totalcholes < 2 || totalcholes > 10.5) {
                alert("Cholestrol should be between 2 and 10.5.");
            }
            else {
                document.getElementById('chol_que').style.display = 'none';
                document.getElementById('sugar_que').style.display = 'block';
                optionSelected = document.querySelector('input[name="sugarradio"]:checked');
                if (optionSelected.value == 1) {
                    document.getElementById('sugar').style.display = 'block';
                    // document.getElementById('bloodsugar').required = true;
                    document.getElementById("bloodsugar").focus();
                }
                else {
                    optionSelected.focus();
                }
            }
        }
        else {
            document.getElementById('chol_que').style.display = 'none';
            document.getElementById('sugar_que').style.display = 'block';
            optionSelected = document.querySelector('input[name="sugarradio"]:checked');
            if (optionSelected.value == 1) {
                document.getElementById('sugar').style.display = 'block';
                // document.getElementById('bloodsugar').required = true;
                document.getElementById("bloodsugar").focus();
            }
            else {
                optionSelected.focus();
            }
        }
    } else if (document.getElementById('sugar_que').style.display == 'block') {
        if (document.getElementById("sugar").style.display == 'block') {
            var bloodsugar = document.getElementById("bloodsugar").value;
            // min="1" max="17.4"
            if (regex.test(bloodsugar) == false) {
                alert("Sugar should be numeric or decimal step by 0.1.");
            }
            else if (bloodsugar < 1 || bloodsugar > 17.4) {
                alert("Sugar should be between 1 and 17.4.");
            }
            else {
                document.getElementById('sugar_que').style.display = 'none';
                document.getElementById('smoke_que').style.display = 'block';
                document.querySelector('input[name="smoke"]:checked').focus();
            }
        }
        else {
            document.getElementById('sugar_que').style.display = 'none';
            document.getElementById('smoke_que').style.display = 'block';
            document.querySelector('input[name="smoke"]:checked').focus();
        }

    } else if (document.getElementById('smoke_que').style.display == 'block') {
        document.getElementById('smoke_que').style.display = 'none';
        document.getElementById('alco_que').style.display = 'block';
        document.querySelector('input[name="alcohol"]:checked').focus();

    } else if (document.getElementById('alco_que').style.display == 'block') {
        document.getElementById('alco_que').style.display = 'none';
        document.getElementById('pa_que').style.display = 'block';
        // document.getElementById('submit_final').style.display = 'block'
        // document.getElementById('preview').style.display = 'block'
        optionSelected = document.querySelector('input[name="activity"]:checked');
        if (optionSelected.value == 1) {
            document.getElementById('activities').style.display = 'block';
            document.getElementById("headings").focus();
        }
        else {
            optionSelected.focus();
        }
    }
}

// Back button click function
function prevQue(abc) {
    // console.log("back button on: "+abc);
    if (document.getElementById('height_que').style.display == 'block') {
        document.getElementById('height_que').style.display = 'none';
        document.getElementById('age_que').style.display = 'block';
        document.getElementById("age").focus();

    } else if (document.getElementById('weight_que').style.display == 'block') {
        document.getElementById('height_que').style.display = 'block';
        document.getElementById('weight_que').style.display = 'none';
        document.getElementById("height").focus();

    } else if (document.getElementById('gender_que').style.display == 'block') {
        document.getElementById('weight_que').style.display = 'block';
        document.getElementById('gender_que').style.display = 'none';
        document.getElementById("weight").focus();

    } else if (document.getElementById('bp_que').style.display == 'block') {
        document.getElementById('gender_que').style.display = 'block';
        document.getElementById('bp_que').style.display = 'none';
        document.querySelector('input[name="gender"]:checked').focus();

    } else if (document.getElementById('chol_que').style.display == 'block') {
        document.getElementById('bp_que').style.display = 'block';
        document.getElementById('chol_que').style.display = 'none';
        optionSelected = document.querySelector('input[name="bp"]:checked');
        if (optionSelected.value == 1) {
            document.getElementById("systolicbp").focus();
        }
        else {
            optionSelected.focus();
        }

    } else if (document.getElementById('sugar_que').style.display == 'block') {
        document.getElementById('chol_que').style.display = 'block';
        document.getElementById('sugar_que').style.display = 'none';
        optionSelected = document.querySelector('input[name="chol"]:checked');
        if (optionSelected.value == 1) {
            document.getElementById("totalcholes").focus();
        }
        else {
            optionSelected.focus();
        }

    } else if (document.getElementById('smoke_que').style.display == 'block') {
        document.getElementById('sugar_que').style.display = 'block';
        document.getElementById('smoke_que').style.display = 'none';
        optionSelected = document.querySelector('input[name="sugarradio"]:checked');
        if (optionSelected.value == 1) {
            document.getElementById("bloodsugar").focus();
        }
        else {
            optionSelected.focus();
        }

    } else if (document.getElementById('alco_que').style.display == 'block') {
        document.getElementById('smoke_que').style.display = 'block';
        document.getElementById('alco_que').style.display = 'none';
        document.querySelector('input[name="smoke"]:checked').focus();

    } else if (document.getElementById('pa_que').style.display == 'block') {
        document.getElementById('alco_que').style.display = 'block';
        document.getElementById('pa_que').style.display = 'none';
        // document.getElementById('submit_final').style.display = 'none';
        // document.getElementById('preview').style.display = 'none'
        document.querySelector('input[name="alcohol"]:checked').focus();
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
        // console.log("bp")
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
        // console.log('chol')
        document.getElementById("totalcholes").required = true
    } else {
        document.getElementById('cholestrol').style.display = 'none';
        document.getElementById("totalcholes").required = false
    }
}

function sugarCheckFunction() {
    if (document.getElementById('sugaryes').checked) {
        document.getElementById('sugar').style.display = 'block';
        // console.log('gluc')
        document.getElementById('bloodsugar').required = true
    } else {
        document.getElementById('sugar').style.display = 'none';
        document.getElementById('bloodsugar').required = true
    }
}