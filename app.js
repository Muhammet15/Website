const menukapali = document.querySelector(".menu__kapali");
const linkscatch = document.querySelector(".app__links");
    if (menukapali && linkscatch ) {
        menukapali.addEventListener('click',()=>{ 
            linkscatch.classList.toggle("active");
            if (linkscatch.classList.contains("active")) {
                menukapali.src ="../../assets/images/acik.svg";
            } 
            else{
                menukapali.src ="../../assets/images/kapalı.svg";
            }
});
    }
