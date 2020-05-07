var a = 0; //liczba a
if (a != 0) {
    var el = document.getElementById('inputBox');
    a = el.value;
}

var b = 0; //liczba b
var dz = ''; //działanie
var option = "";
var option1 = "";
function numberToInput(jaki) {
    var el = document.getElementById('inputBox');
    if (el.value === '0') {
        el.value = jaki;
    } else {
        el.value += jaki; // el.value = el.value + jaki
    }
    // alert(jaki);
}
function clearInput() {
    var el = document.getElementById('inputBox');
    el.value = '0';
}
function Counting(jakie) {
    var el = document.getElementById('inputBox');
    a = parseFloat(el.value.replace(',', '.'));
    dz = jakie;
    clearInput();
}
function RownaSie() {
    var el = document.getElementById('inputBox');
    b = parseFloat(el.value.replace(',', '.'));
    var c;
    switch (dz) {
        case "+": c = a + b; break;
        case "-": c = a - b; break;
        case "*": c = a * b; break;
        case "/":
            if (b != 0) {
                c = a / b;
            }
            else {
                c = "";
                el.value = "Nie można dzielić przez 0";
            }
            break;
        case "%":
            c = a / b * 100;
            break
        case "xx":
            c = Math.pow(a, b);
            break


    }
    c = parseFloat(c.toFixed(5))
    el.value = c.toString().replace('.', ',');

}
function Przecinek() {
    var el = document.getElementById('inputBox');
    if (el.value.indexOf(',') === -1) {
        el.value += ',';
    }
}
function wyczyscWszystko() {
    var el = document.getElementById('inputBox');
    a = 0;
    b = 0;
    dz = '';
    el.value = 0;
}
function ZmianaZnaku() {
    var el = document.getElementById('inputBox');
    var temp = "";
    if (el.value > 0) {
        temp = "-"
        el.value = temp + el.value;
    }
    else {
        el.value = el.value.replace("-", '');
    }
}

function Odwrotnosc() {
    var el = document.getElementById('inputBox');
    a = parseFloat(el.value.replace(',', '.'));
    var one = 1;
    var c = one / a;
    el.value = parseFloat(c.toFixed(5))
}

function usunJedenZnak() {
    var el = document.getElementById('inputBox');
    var a = el.value;
    if (a != '') {
        a = a.slice(0, -1);
        el.value = a;
    }
    if (a == "") {
        el.value = '0';
    }

}

function Pierwiastek() {
    var el = document.getElementById('inputBox');
    a = parseFloat(el.value.replace(',', '.'));
    var c = Math.sqrt(a);
    el.value = parseFloat(c.toFixed(5));
}

function More() {
    document.getElementById('inputBox').value = "";
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.style.display = "none";
    }
    var buttonToShow = document.getElementsByClassName("lessButton");
    for (var i = 0; i < buttonToShow.length; i++) {
        buttonToShow[i].style.display = "inline";
    }
    document.getElementById("More").style.display = "block";
    document.getElementById("less").style.display = "block";
    document.getElementById("show").style.display = "none";

}
function Less() {
    document.getElementById('inputBox').value = "0";
    hideSelect();
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.style.display = "block";
    }
    var buttonToHide = document.getElementsByClassName("lessButton");
    for (var i = 0; i < buttonToHide.length; i++) {
        buttonToHide[i].style.display = "none";
    }
    document.getElementById("More").style.display = "none";
    document.getElementById("less").style.display = "none";
    document.getElementById("show").style.display = "block";
}

function showSelect(opcja) {
    hideSelect();
    switch (opcja) {
        case "Masa": document.getElementById(opcja).style.display = "block"; break
        case "Distance": document.getElementById(opcja).style.display = "block"; break
        case "Waluta": document.getElementById(opcja).style.display = "block"; break
        case "Temperatura": document.getElementById(opcja).style.display = "block"; break
    }
}
function hideSelect() {
    var elements = document.getElementsByClassName("divMore")

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}
function Masa(Jednostka, wartosc) {
    wartosc = parseFloat(wartosc);
    var Kilogram = document.getElementById("Kilogram");
    var Funt = document.getElementById("Funt");
    var Uncja = document.getElementById("Uncja");
    var Gramy = document.getElementById("Gramy");
    var Kamien = document.getElementById("kamien");
    if (Jednostka == "Kilogram") {
        Funt.value = (wartosc * 2.2046).toFixed(2);
        Uncja.value = (wartosc * 35.274).toFixed(2);
        Gramy.value = (wartosc * 1000).toFixed();
        Kamien.value = (wartosc * 0.1574).toFixed(3);
    }
    if (Jednostka == "Funt") {
        Kilogram.value = (wartosc / 2.2046).toFixed(2);
        Uncja.value = (wartosc * 16).toFixed(2);
        Gramy.value = (wartosc / 0.0022046).toFixed();
        Kamien.value = (wartosc * 0.071429).toFixed(3);
    }
    if (Jednostka == "Uncja") {
        Funt.value = (wartosc * 0.062500).toFixed(4);
        Kilogram.value = (wartosc / 35.274).toFixed(4);
        Gramy.value = (wartosc / 0.035274).toFixed(1);
        Kamien.value = (wartosc * 0.0044643).toFixed(4);
    }
    if (Jednostka == "Gramy") {
        Funt.value = (wartosc * 0.0022046).toFixed(4);
        Kilogram.value = (wartosc / 1000).toFixed(4);
        Uncja.value = (wartosc * 0.035274).toFixed(3);
        Kamien.value = (wartosc * 0.00015747).toFixed(5);
    }
    if (Jednostka == "kamien") {
        Funt.value = (wartosc * 14).toFixed(1);
        Kilogram.value = (wartosc / 0.15747).toFixed(1);
        Uncja.value = (wartosc * 224).toFixed();
        Gramy.value = (wartosc / 0.00015747).toFixed();
    }

}
function Distance(Jednostka, wartosc) {
    wartosc = parseFloat(wartosc);
    var Centymetr = document.getElementById("Centymetr");
    var Metr = document.getElementById("Metr");
    var Stopa = document.getElementById("Stopa");
    var Cal = document.getElementById("Cal");
    var Jard = document.getElementById("Jard");
    if (Jednostka == "Centymetr") {
        Metr.value = (wartosc / 100).toFixed(2);
        Stopa.value = (wartosc * 16).toFixed(2);
        Cal.value = (wartosc / 0.0022046).toFixed(2);
        Jard.value = (wartosc * 109.36).toFixed(2);
    }
    if (Jednostka == "Metr") {
        Centymetr.value = (wartosc * 100).toFixed(2);
        Stopa.value = (wartosc * 3.2808).toFixed(2);
        Cal.value = (wartosc * 39.37).toFixed(2);
        Jard.value = (wartosc * 1.0936).toFixed(2);
    }
    if (Jednostka == "Stopa") {
        Centymetr.value = (wartosc / 0.032808).toFixed(2);
        Metr.value = (wartosc / 3.2808).toFixed(2);
        Cal.value = (wartosc * 12).toFixed(2);
        Jard.value = (wartosc * 0.33333).toFixed(2);
    }
    if (Jednostka == "Cal") {
        Centymetr.value = (wartosc / 0.39370).toFixed(2);
        Metr.value = (wartosc / 39.370).toFixed(2);
        Stopa.value = (wartosc * 0.083333).toFixed(2);
        Jard.value = (wartosc * 0.027778).toFixed(2);
    }
    if (Jednostka == "Jard") {
        Centymetr.value = (wartosc / 0.010936).toFixed(2);
        Metr.value = (wartosc / 1.0936).toFixed(2);
        Stopa.value = (wartosc * 3).toFixed(2);
        Cal.value = (wartosc * 36).toFixed(2);
    }

}

function Waluta(Jednostka, wartosc) {
    wartosc = parseFloat(wartosc);
    var Zloty = document.getElementById("Zloty");
    var Dolar = document.getElementById("Dolar");
    var Funt = document.getElementById("GBY");
    var Euro = document.getElementById("Euro");
    var Jen = document.getElementById("Jen");
    if (Jednostka == "Zloty") {
        Dolar.value = (wartosc * 0.26).toFixed(2);
        GBY.value = (wartosc * 0.2).toFixed(2);
        Euro.value = (wartosc * 0.23).toFixed(2);
        Jen.value = (wartosc * 28.32).toFixed(2);
    }
    if (Jednostka == "Dolar") {
        Zloty.value = (wartosc * 3.85).toFixed(2);
        GBY.value = (wartosc * 0.78).toFixed(2);
        Euro.value = (wartosc * 0.9).toFixed(2);
        Jen.value = (wartosc * 109.14).toFixed(2);
    }
    if (Jednostka == "GBY") {
        Zloty.value = (wartosc * 4.96).toFixed(2);
        Dolar.value = (wartosc * 1.29).toFixed(2);
        Euro.value = (wartosc * 1.16).toFixed(2);
        Jen.value = (wartosc * 140.46).toFixed(2);
    }
    if (Jednostka == "Euro") {
        Zloty.value = (wartosc * 4.27).toFixed(2);
        Dolar.value = (wartosc * 1.11).toFixed(2);
        GBY.value = (wartosc * 0.86).toFixed(2);
        Jen.value = (wartosc * 120.82).toFixed(2);
    }
    if (Jednostka == "Jen") {
        Zloty.value = (wartosc * 0.04).toFixed(2);
        Dolar.value = (wartosc * 0.0092).toFixed(2);
        GBY.value = (wartosc * 0.008).toFixed(2);
        Euro.value = (wartosc * 0.0083).toFixed(2);
    }

}
function Temperatura(Jednostka, wartosc) {
    wartosc = parseFloat(wartosc);
    var Celsjusz = document.getElementById("Celsjusz");
    var Kalwin = document.getElementById("Kalwin");
    var Farenhait = document.getElementById("Farenhait");
    if (Jednostka == "Celsjusz") {
        Kalwin.value = (wartosc - 273.15).toFixed(2);
        Farenhait.value = ((wartosc * (5 / 9)) + 32).toFixed(2);
    }
    if (Jednostka == "Kalwin") {
        Celsjusz.value = (wartosc + 273.15).toFixed(2);
        Farenhait.value = (((wartosc - 273.15) * (5 / 9)) + 32.00).toFixed(2);
    }
    if (Jednostka == "Farenhait") {
        Celsjusz.value = ((wartosc - 32) / (5 / 9)).toFixed(2);
        Kalwin.value = ((wartosc + 459.67) * (5 / 9)).toFixed(2);
    }
}