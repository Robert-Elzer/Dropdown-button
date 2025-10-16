//Initialize dropdown button text
document.addEventListener("DOMContentLoaded", function() {
    const dropButton = document.querySelector(".dropButton");
    dropButton.innerText = "Select an item";

    //Evenlistener to items for selection
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("click", function() {
    //Update button text to selected item
            dropButton.innerText = this.innerText;
        })
    })
})

//funtion to toggle between hiding and showing the dropdown content when the button is ckicked
function toggleContent() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        let dropdowns = document.getElementsByClassName("dropdownContent");
        let i;
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}