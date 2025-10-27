let closedFolder1 = document.getElementById("closed-folder-1")
let openFolder1 = document.getElementById("open-folder-1")

closedFolder1.addEventListener("mouseover", function() {
    closedFolder1.style.display = "none";
    openFolder1.style.display = "block";
})