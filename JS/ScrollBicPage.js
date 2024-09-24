const main = document.querySelector("main");
const body = document.querySelector("body");
const BigBox = document.querySelector(".BigBox");
let scrolling = false;
let scrollBool = false;
let w = document.body.clientWidth;
let Mobile = false;

let AntiScroll = 0;
let AntiScrollSave = 0;

let PosA = window.innerHeight - 720;
let PosB = window.innerHeight - 1850;



    main.style.transform = "translateY("+PosA+"px)";
    BigBox.style.marginTop = window.innerHeight  * 0.15  + "px";


    body.addEventListener("wheel", function(event){  
        if(AntiScroll == 0)
        {
            if (event.deltaY > 0)
            {
                if(w >= 900)
                {
                    ScrollPage();
                }
            }
            else 
            {
                if(w >= 900)
                {
                    ScrollPage();
                }
            }
        }
         AntiScroll++;
         AntiScrollSave = AntiScroll;
         console.log(AntiScroll);
    }, false);
    
    
    setInterval(function(){ 
        if(AntiScrollSave != AntiScroll)
        {
            AntiScroll = 0;
            AntiScrollSave = 0;
        }
        AntiScrollSave++;
    }, 250);
    

    function ScrollPage()
    {
            console.log("Passé");
            if(scrollBool)
            {
                main.style.transform = "translateY("+PosA+"px)";
                scrollBool = false;
    
            }
            else if(scrollBool == false)
            {
                main.style.transform = "translateY("+PosB+"px)";
                scrollBool = true;
            }
    }

    window.onresize = function(event) {
        w = document.body.clientWidth;
        PosA = window.innerHeight - 720;
        console.log(PosA);
        PosB = window.innerHeight - 1850;
        if(scrollBool)
        {
            main.style.transform = "translateY("+PosB+"px)";

        }
        else if(scrollBool == false)
        {
            main.style.transform = "translateY("+PosA+"px)";
        }
        if(w >= 900)
        {
            Mobile = false;
            body.classList.add("NoScroll");
        }
        else
        {
            Mobile = true;
            body.classList.remove("NoScroll");
        }
    };

    function checkMobile()
    {
        if(w >= 900)
        {
            Mobile = false;
        }
        else
        {
            Mobile = true;
            body.classList.remove("NoScroll");
        }
        console.log(Mobile);
    }

    checkMobile();