let form = document.getElementById("form")
let person = document.getElementById("personen")
let calculateList = document.getElementById("calculate")
let preis = document.getElementById("preis")
let service = document.getElementById("service")
let tg = document.getElementById("tg")
let pp = document.getElementById("pp")
let gs = document.getElementById("gs")

function addPerson(e) {
    // alert(e.innerHTML)
    person.value = e.innerHTML
}
function calculate() {
    if (preis.value == "" || person.value == "" || service.value == "") {
        form.classList.add("was-validated")
    } else {

        tg.innerHTML = (parseFloat(preis.value) * (parseFloat(service.value) / 100)).toFixed(2)
        gs.innerHTML = (parseFloat(preis.value) + parseFloat(tg.innerHTML)).toFixed(2)
        pp.innerHTML = (parseFloat(gs.innerHTML) / parseFloat(person.value)).toFixed(2)
        calculateList.classList.remove("d-none")
    }
}

// Schlechter Service: 2% Trinkgeld
// Mittlerer Service: 10% Trinkgeld
// Super Service: 20% Trinkgeld
