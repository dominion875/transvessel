const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".blog-sec1-div2-main");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Hide all contents
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Show corresponding content
        const target = document.getElementById(
            button.dataset.tab
        );

        target.classList.add("active");

    });

});