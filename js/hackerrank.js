function runCode() {
    // Find the "Run Code" button and press it
    runBtn = document.querySelector(".hr-monaco-compile");
    if (!runBtn) {
        console.log("Unable to find Run Code button!!");
    } else {
        runBtn.click();
    }
}

function submitCode() {
    // Find the "Submit" button and press it
    submitBtn = document.querySelector(".hr-monaco-submit");
    if (!submitBtn) {
        console.log("Unable to find Submit button!!");
    } else {
        submitBtn.click();
    }
}

document.addEventListener("keyup", (e) => {
    if (e.ctrlKey && e.altKey && e.key == "r")
        runCode();
    if (e.ctrlKey && e.altKey && e.key == "s")
        submitCode();
});