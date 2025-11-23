export function clickedMe() {
    document.getElementById("btn").addEventListener("click", function(c) {
        alert("Button Clicked!");
        c.target.value = "Clicked";
    });
}
