export function calculate(numberOne, numberTwo) {
    let resultCalculated = 0;
    let mensaje = "";
    let annios = numberOne - (2 * numberTwo);
    resultCalculated = Math.abs(annios);

    if (annios < 0){
         mensaje=`Hace ${resultCalculated} atras la edad del padre fue el doble a la del hijo`;
    } else {
        mensaje=`Dentro de ${resultCalculated} la edad del padre sera el doble a la del hijo`;
    }
    console.log(mensaje);
    return resultCalculated;
}