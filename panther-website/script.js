const button = document.getElementById("downloadBtn");

const userOS = navigator.userAgent;

if (userOS.includes("Win")) {
    button.innerText = "Download for Windows";
    button.onclick = () => {
        window.location.href = "https://yourdomain.com/downloads/panther.exe";
    };

} else if (userOS.includes("Linux")) {
    button.innerText = "Download for Linux";
    button.onclick = () => {
        window.location.href = "https://yourdomain.com/downloads/panther";
    };

} else {
    button.innerText = "Download for Linux";
    button.onclick = () => {
        window.location.href = "https://yourdomain.com/downloads/panther";
    };
}
