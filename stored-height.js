function extractLastStoredHeight() {
    const regex = /Stored Height \(cm\):\s*(\d+)/g;
    const contentElements = document.querySelectorAll("#content p");
    let lastMatch = null;
    
    contentElements.forEach(el => {
        const match = el.textContent.match(regex);
        if (match) {
            lastMatch = match.pop().replace(/[^0-9]/g, "");
        }
    });
    
    if (lastMatch) {
        console.log("Last Stored Height (cm):", lastMatch);
        alert("Last Stored Height (cm): " + lastMatch);
    } else {
        console.log("No stored height found.");
        alert("No stored height found.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logHeightButton").addEventListener("click", extractLastStoredHeight);
});
