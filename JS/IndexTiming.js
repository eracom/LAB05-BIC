const backgroundvideo = document.querySelector(".Homevideo");
const boutons = document.querySelectorAll(".col");
const pellicule = document.querySelector(".Pellicule");
const txtExplicatif = document.querySelector(".TitreExplicatif");
const info = document.querySelector(".TextInformatif");

let Timing = 0;

boutons.forEach(element => {
    element.style.opacity = "0%";
});

Update = setInterval(function(){ 
    Timing++;
    if(Timing == 4)
    {
        txtExplicatif.style.opacity = "0%";
        pellicule.style.backgroundColor = "var(--Second-color)"
    }
    if(Timing == 5)
    {
        pellicule.style.opacity = "0%";
        backgroundvideo.play();
    }
    if(Timing == 26)
    {
        boutons.forEach(element => {
            element.style.opacity = "100%";
        });
        info.style.opacity = "0%";
        clearInterval(Update);
    }
}, 1000);

pellicule.addEventListener("click", Skip);
backgroundvideo.addEventListener("click", Skip);

function Skip()
{
    txtExplicatif.style.opacity = "0%";
    pellicule.style.opacity = "0%";
    boutons.forEach(element => {
        element.style.opacity = "100%";
    });
    info.style.opacity = "0%";
    clearInterval(Update);
    backgroundvideo.currentTime = backgroundvideo.duration - 0.1;
}