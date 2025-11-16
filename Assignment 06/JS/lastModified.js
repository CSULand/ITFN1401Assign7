document.addEventListener("DOMContentLoaded", function showLastModified() {
    const target = document.getElementById("last-modified");
    if (!target) return;

    // document.lastModified is provided by the browser
    const lastModified = document.lastModified;

    // Puts text into the div using innerHTML
    target.innerHTML = "Last updated: " + lastModified;
});