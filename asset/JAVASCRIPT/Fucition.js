/*===== MENU SHOW =====*/
const showMenu = (toggleld, navld) =>{
    const toggle = document.getElementById(toggleld),
    nav = document.getElementById(navld)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classlist.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*========== REMOVE MENU MOBILE ==========*/
