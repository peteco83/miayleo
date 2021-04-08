let mq = window.matchMedia('(max-width: 699px)')

if (mq.matches) {

    let toggleStatus = 0;
    const menuToggle = () => {
        if (toggleStatus === 0) {

            document.getElementById("menu").style.transform = "translate(0%)";
            document.getElementById("icon").style.transform = "rotate(90deg)"
            toggleStatus = 1;
        }

        else if (toggleStatus === 1) {
            document.getElementById("menu").style.transform = "translate(200%)"
            document.getElementById("icon").style.transform = "rotate(0deg)"
            toggleStatus = 0;
        }
    };
    document.getElementById("icon").addEventListener("click", menuToggle);

    const listMenu = document.querySelectorAll(".list-menu");

    listMenu.forEach(el => {
        el.addEventListener("click", menuToggle);
    });

} else {

    (() => {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("menuToggle").style.top = "0";
                document.getElementById("menuToggle").style.transition = "0.5s"
            } else {
                document.getElementById("menuToggle").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        };
    }
    )();
};
