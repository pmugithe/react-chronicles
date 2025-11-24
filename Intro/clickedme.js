export function clickedMe() {
    document.getElementById("btn").addEventListener("click", (event) => {
        alert("Button Clicked!");
        event.target.value = "Clicked";
    });
}
