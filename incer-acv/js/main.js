document.querySelectorAll(".read-more-button").forEach(function(el) {
    el.addEventListener("click", function() {
       el.parentElement.classList.toggle("expanded");
       let expanded = el.parentElement.classList.contains("expanded");
       el.innerText = expanded ? "less" : "...read more";
    });
});

document.querySelectorAll(".toggle-diff-button").forEach(function(el) {
    console.log("bar");
    el.addEventListener("click", function() {
        let value = el.getAttribute("data-value");
        let parent = el.closest("section");
        parent.setAttribute("data-show", value);
        parent.querySelectorAll(".toggle-diff-button").forEach(function(button) {
            button.classList.add("outline");
        })
        el.classList.remove("outline");
    });
});

document.querySelector(".show-menu-button").addEventListener("click", function() {
    document.body.classList.toggle("menu-shown")
})