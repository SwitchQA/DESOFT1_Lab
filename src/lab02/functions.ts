//ex.1

export function calcularMediaPesada(nota1:number, nota2:number, nota3:number, peso1:number, peso2:number, peso3:number):number{
    let mediaPesada:number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1+peso2+peso3)
    return mediaPesada;
}

//ex.2

export function notaSuperiorOito(nota:number):boolean{
    if (nota > 8){
        return true;
    } 
    return false;
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

export function ePar(numero:number):boolean{
    let numeroCheck:number = numero % 2
    if (numeroCheck % 2 == 0){
        console.log('O número é par');
        return true
    } else {
        console.log('O número não é par');
        return false
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

export function calcularVolumeCubo(area:number):number {
    let volume:number = 0;
    let aresta:number = 0;
    if (area > 0){
        aresta = Math.sqrt(area/6);
        volume = aresta ^ 3;
    } else {
        volume = -1;
    }
    if (volume <= 1){
        console.log('Pequeno');
    } else if (volume > 2){
        console.log('Grande');
    } else {
        console.log('Médio');
    }
    return volume
}

//ex.8

export function apresentarHorasMinutosSegundos (segundosGiven:number):string{
    let horas:number = 0;
    let minutos:number = 0;
    let segundos:number = 0;
    let output:string = '';
    if (segundosGiven < 0 || segundosGiven > 86400){
        output ='Segundos tem de ser positivo e não pode exceder os segundos de um único dia';
    } else {
        horas = Math.floor(segundosGiven/3600)
        minutos = Math.floor(segundosGiven/60 - (horas * 60))
        segundos = Math.floor(segundosGiven - (minutos * 60) - (horas * 3600))
        output = 'Txiii, tantos segundos já passaram, já vamos em: ' + horas +  ':' + minutos + ':' + segundos;
    }
    return output;
}

//ex.9

export function saudacao(segundosGiven:number):string{
    let output:string = '';
    if (segundosGiven < 0 || segundosGiven > 86400){
        output ='Segundos tem de ser positivo e não pode exceder os segundos de um único dia';
    } else if (segundosGiven > 21600 && segundosGiven <= 43201) {
        output ='Bom dia';
    } else if (segundosGiven > 43201 && segundosGiven <= 72001) {
        output ='Boa tarde';
    } else {
        output ='Boa noite';
    }
    return output;

}

//ex.10

export function multiplos (x:number, y:number):boolean{
const remainder:number = x % y
    if (remainder == 0){
        console.log('X e Y são múltiplos um do outro');
        return true;
    } else {
        console.log('X e Y não são múltiplos um do outro');
        return false;
    }
}

//ex.11

export function ordemCrescente (numero:number):boolean{
    let digito1:number = Math.floor(numero/100);
    let digito2:number = Math.floor(numero%100/10);
    let digito3:number = Math.floor(numero%10);
    if (numero < 100 || numero > 999)
        throw new RangeError('Apenas número com 3 digitos');
    if (digito1 < digito2 && digito2 < digito3){
        console.log('A ordem dos digitos é crescente');
        return true;
    } else {
        console.log('A ordem dos digitos não é crescente');
        return false;
    }
}

//ex.12

//export function 