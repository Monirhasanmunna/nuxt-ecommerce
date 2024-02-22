const sidebar = document.querySelector('#sidebar');
    const selectToggleButton = document.querySelector('#toggleButton');
    const barsIcon = document.querySelector("#barsIcon");

    selectToggleButton.addEventListener('click', () => {
        const currentWidth = sidebar.style.width;

        if (currentWidth == "50px" || currentWidth == "0px") {
            sidebar.style.width = "250px";
            // barsIcon.classList.remove('rotate');
        } else {
            sidebar.style.width = "0px";
            // barsIcon.classList.add('rotate');
        }
    });