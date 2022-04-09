function runCode(runBtn) {
    // Find the "Run Code" button and press it
    if (!runBtn) {
        console.log("Unable to find Run Code button!!");
    } else {
        runBtn.click();
    }
}

function submitCode(submitBtn) {
    // Find the "Submit" button and press it
    if (!submitBtn) {
        console.log("Unable to find Submit button!!");
    } else {
        submitBtn.click();
    }
}

document.addEventListener("keyup", (e) => {
    if (e.ctrlKey && e.altKey && e.key == "r")
        runCode(getRunBtn())
    if (e.ctrlKey && e.altKey && e.key == "s")
        submitCode(getSubmitBtn());
});