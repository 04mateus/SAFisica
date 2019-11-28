function convertTemp(direction) {

    var celsius = document.convert.inputcelsius,
        fahrenheint = document.convert.inputfahrenheint, 
        kelvin = document.convert.inputkelvin;

    if (direction == "fparac") {
        celsius.value = Math.round((fahrenheint.value - 32) * (5 / 9));
        kelvin.value = Math.round(((fahrenheint.value - 32) * (5 / 9)) + (273.15));
        kelvinegativo();
    }
    else if (direction == "kparaf") {
        fahrenheint.value = Math.round((kelvin.value - 273.15) * (9 / 5)) + 32;
        celsius.value = Math.round((fahrenheint.value - 32) * (5 / 9));
        kelvinegativo();
    }
    else {
        fahrenheint.value = Math.round((parseInt(celsius.value) * (9 / 5)) + 32);
        kelvin.value = Math.round((parseInt(celsius.value) + 273));
        kelvinegativo();
    }
}

function clearAll() {
    document.convert.inputcelsius.value = " ";
    document.convert.inputfahrenheint.value = " ";
    document.convert.inputkelvin.value = " ";
}

function kelvinegativo(){
    if (document.convert.inputkelvin.value < 0)
    {
    alert("Valor Inválido");
    clearAll();
    }
}