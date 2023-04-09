
rating.forEach(el => {
    el.addEventListener("click", function() {
        value_rating.textContent = el.textContent;
    });
});

btn.addEventListener("click", function() {
    confirm_section.classList.add('active');
    submit_section.classList.add('disable');
});