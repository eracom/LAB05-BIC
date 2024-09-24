//Html elements
const buy = document.querySelectorAll(".BB");
const box = document.querySelector(".BoxAchat");
const banniere = document.querySelector(".ShopBanniere");
const Plus = document.querySelector("#Plus");
const Moins = document.querySelector("#Moins");
const Back = document.querySelector(".Homevideo");
const txtExplicatif = document.querySelector(".TextInformatif");
//Bools
let Open = false;
let BanOpen = false;
let scrolling = false;
//Texts
let Articles = document.querySelector(".Articles");
let prixArticles = document.querySelector(".PrixArticles");
let TVA = document.querySelector(".TVA");
let prixFinale = document.querySelector(".prixFinale");
//Variables Briquet
const Quantitetxt = document.querySelector(".Quantite");
let Quantite = 1;
//Debug
let AntiScroll = 0;
let AntiScrollSave = 0;


//Ajout des events listener
buy.forEach(element => {
    element.addEventListener("click", Pannier);
});

Plus.addEventListener("click", plus);
Moins.addEventListener("click", moins);

//Ajouter ou soustraire un briquet du panier
function plus()
{
    Quantite++;
    Quantitetxt.innerHTML = Quantite;
    let x = ((550 * 7.7) / 100) * Quantite;
    let res = x.toFixed(2);
    TVA.innerHTML = res + "$";
    Articles.innerHTML = Quantite + " Articles";
    let pA =(540 * Quantite);
    prixArticles.innerHTML = pA + "$";
    let pf = pA + ((550 * 7.7) / 100) * Quantite;
    let pfFinal = pf.toFixed(2);
    prixFinale.innerHTML = pfFinal+ "$";
    console.log(pf);
}
function moins()
{
    if(Quantite > 1)
    {
        Quantite--;
        Quantitetxt.innerHTML = Quantite;
        let x = ((550 * 7.7) / 100) * Quantite;
        let res = x.toFixed(2);
        TVA.innerHTML = res + "$";
        if(Quantite == 1)
        {
            Articles.innerHTML = Quantite + " Article";
        }
        else
        {
            Articles.innerHTML = Quantite + " Articles";
        }
        let pA =(540 * Quantite);
        prixArticles.innerHTML = pA + "$";
        let pf = pA + ((550 * 7.7) / 100) * Quantite;
        let pfFinal = pf.toFixed(2);
        prixFinale.innerHTML = pfFinal + "$";
        console.log(pf);
    }
}

document.addEventListener("wheel", function(event){  
    if(AntiScroll == 0)
    {
        if (event.deltaY > 0)
        {
            Banniere();
        }
        else 
        {
            Banniere();
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


//Ouvrir/fermer la Banniere
function Banniere()
{
    if(BanOpen == false)
    {
        banniere.style.transform = "translateY(0px)";
        BanOpen = true;
    }
    else
    {
        banniere.style.transform = "translateY(152px)";
        BanOpen = false;
        if(Open == true)
        {
            Pannier();
        }
    }
}

//Ouvrir/fermer le panier
function Pannier()
{
    if(Open)
    {
        box.style.left = "-900px";
        Open = false;
    }
    else if(!Open)
    {
        box.style.left = "0px";
        if(BanOpen == false)
        {
            Banniere();
        }
        Open = true;
    }
}

Back.addEventListener("click", function()
{
    console.log("Click");
    box.style.left = "-600px";
    Open = false;
});


window.onresize = function(event) {
    w = document.body.clientWidth;

    if(w >= 900)
    {
        txtExplicatif.style.opacity = "100%";
    }
    else
    {
        txtExplicatif.style.opacity = "0%";
    }
};