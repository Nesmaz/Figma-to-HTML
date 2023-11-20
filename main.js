
const menu = document.getElementById('menu');
const bars = document.getElementById('bars');
const exit = document.getElementById('exit');

    function toggleMenu(){
        if (bars){
            bars.addEventListener("click", ()=>{
                menu.style.transform = "translateX(0)"
                exit.style.display = "flex"
                if (exit){
                    exit.addEventListener('click', ()=>{
                        menu.style.transform = 'translateX(100%)'
                    })
                }

            })
        }
    }
toggleMenu();

