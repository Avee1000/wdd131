let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    const tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";
    if (n === 0) {
        document.querySelector(".prevBtn").style.display = "none";
    } else {
        document.querySelector(".prevBtn").style.display = "inline";
    }
    if (n === tabs.length - 1) {
        document.querySelector(".nextBtn").innerHTML = "Submit";
    } else {
        document.querySelector(".nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n);
}

function nextPrev(n) {
    const tabs = document.getElementsByClassName("tab");
    if (n === 1 && !validateForm()) return false;
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= tabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    const tabs = document.getElementsByClassName("tab");
    const inputs = tabs[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && !inputs[i].value) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    return true;
}

function fixStepIndicator(n) {
    const steps = document.getElementsByClassName("step");
    for (let i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(" active-step", "");
    }
    steps[n].className += " active-step";
}