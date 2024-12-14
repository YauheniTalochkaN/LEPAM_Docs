document.addEventListener("DOMContentLoaded", function() 
{
    var button = document.createElement("button");
    button.innerHTML = "⬆";
    button.id = "scrollToTopButton";
    button.classList.add("md-button", "md-button--primary");
    button.style.display = "none";
    button.style.position = "fixed";
    button.style.zIndex = "1000";
    button.style.padding = "11px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    
    document.body.appendChild(button);

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };

    button.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
