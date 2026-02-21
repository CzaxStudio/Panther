document.addEventListener("DOMContentLoaded", function () {

    const downloadBtn = document.getElementById("downloadBtn");
    const osText = document.getElementById("osText");

    const windowsLink = "https://github.com/CzaxStudio/Panther/releases/download/Windows/Panther.exe";
    const linuxLink   = "https://github.com/CzaxStudio/Panther/releases/download/Linux/Panther";

    const userAgent = navigator.userAgent.toLowerCase();

    function detectOS() {
        if (userAgent.includes("win")) {
            return "Windows";
        } 
        else if (userAgent.includes("linux")) {
            return "Linux";
        } 
        else if (userAgent.includes("mac")) {
            return "Mac";
        } 
        else {
            return "Unknown";
        }
    }

    const os = detectOS();

    // Update UI based on OS
    if (os === "Windows") {
        downloadBtn.innerText = "Download for Windows";
        osText.innerText = "Detected OS: Windows";
        downloadBtn.onclick = () => {
            window.location.href = windowsLink;
        };
    }
    else if (os === "Linux") {
        downloadBtn.innerText = "Download for Linux";
        osText.innerText = "Detected OS: Linux";
        downloadBtn.onclick = () => {
            window.location.href = linuxLink;
        };
    }
    else if (os === "Mac") {
        downloadBtn.innerText = "Mac Not Supported";
        osText.innerText = "Detected OS: macOS (Currently Not Supported)";
        downloadBtn.disabled = true;
    }
    else {
        downloadBtn.innerText = "Download Panther";
        osText.innerText = "Could not detect OS. Please choose manually.";
        downloadBtn.onclick = () => {
            window.location.href = "https://github.com/CzaxStudio/Panther/releases";
        };
    }

});
