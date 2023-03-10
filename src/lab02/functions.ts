//ex.1

export function calcularMediaPesada(nota1:number, nota2:number, nota3:number, peso1:number, peso2:number, peso3:number):number{
    let mediaPesada:number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1+peso2+peso3)
    return mediaPesada;
}

//ex.2

export function notaSuperiorOito(nota:number):void{
    if (nota > 8){
        console.log('É superior a oito');
    } else {
        console.log('Não é superior a oito'); 
    }
}

//ex.3

export function calcularDistanciaPontos(x1:number, y1:number, x2:number, y2:number):number{
    let d:number = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
    return d;
}

//ex.4

export function lerTresDigitos(numero:number){
    let digito3:number = 0;
    let digito2:number = 0;
    let digito1:number = 0;
    /*let digito1:number = Math.floor(numero/100);
    let digito2:number = Math.floor(numero%100/10);
    let digito3:number = Math.floor(numero%10);*/
    if (numero < 100 || numero > 999){
        console.log('Número não tem 3 digitos');
    } else {
        digito3 = Math.floor(numero % 10);
        digito2 = Math.floor((numero/10)%10);
        digito1 = Math.floor((numero/100)%10);
    }
    return digito1
}

//ex.5

export function ePar(numero:number){
    let numeroCheck:number = numero % 2
    if (numeroCheck % 2 == 0){
        console.log('O número é par');
    } else {
        console.log('O número não é par');
    }
}

//ex.6

export function calculateFunctionX(numero:number):number{
    let numeroX:number;
    if(numero < 0){
        numeroX = numero
    } else if (numero > 0) {
        numeroX = numero * 2 - 2 * numero
    } else {
        numeroX = 0
    }
    return numeroX;
}

//ex.7

//export function 
