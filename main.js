// tady je místo pro náš program

let vysledek = document.querySelector('.vysledekVek');
let celeJmeno = prompt('Jake je vase jmeno a prijmeni?');
let rokNarozeni = Number(prompt('Jaky je vas rok narozeni?'));
const d = new Date();
let year = d.getFullYear();
let vek = year - rokNarozeni;

vysledek.innerHTML =  "<p>" + celeJmeno + " " + vek + "</p>";

// funguje

let barva = prompt('Jaka je vase oblibena barva? Vypiste anglicky:');
vysledek.style.color = barva;

// funguje



