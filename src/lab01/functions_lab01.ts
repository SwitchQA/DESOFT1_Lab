//ex.2

export function calculatePriceRamo(nTulipas: number, nRosas: number, pTulipas: number, pRosas: number ): number {
    let priceRamo:number  = nRosas * pRosas + nTulipas * pTulipas;
    return priceRamo;
}

//ex.3

export function calculateLitros(vCilindro:number, rCilindro:number, hCilindro:number):number{
    vCilindro = Math.PI * (rCilindro^2) * hCilindro;
    let litros:number = vCilindro^3
    return litros; 
}

//ex.5

export function calcularHipotenusa(c1:number, c2:number, h:number):number{
    let hipotenusa:number = Math.sqrt(c1^2 + c2^2);
    return hipotenusa;
}

//ex.4

export function calcularPerimetroRectangulo(ladoA:number, ladoB:number):number{
    let pRectangulo:number  = 2 * ladoA + 2 * ladoB;
    return pRectangulo;
}

//ex.6

export function calcularTempF(tempC:number):number{
    let tempF:number = 32 + (9/5) * tempC;
    return tempF;
}

//ex.7

export function calcularMinutosPassados(h:number, m:number, mTotal:number, hZero:number):number{
    mTotal = h * 60 + m;
    return mTotal;
}

//ex.8

export function calcularDistanciaMetros(intervaloSegundos:number):number{
    const vSom:number = 340;
    const vLuz:number = 300000000;
    let distanciaMetros:number = vSom * intervaloSegundos;
    return distanciaMetros;
}

//ex.9

export function calcularDistanciaKilometrosZe(metrosManel:number, tempoManel:number, tempoZe:number):number{
    let velocidade:number = metrosManel / tempoManel;
    let metrosZe:number = velocidade * tempoManel;
    let kilometrosZe:number = metrosZe / 1000;
    return kilometrosZe;
}

//ex.10

export function calcularExpressao(x:number):number{
    let y:number = x^2 - 3 * x + 1; 
    return y;
}

//ex.11

export function caclularAlturaPredio(tempo:number):number{
    const velocidadeInicial:number = 0;
    const aceleracao:number = 9.8;
    let distancia:number = velocidadeInicial * 2 + (aceleracao * (tempo^2)/2);
    return distancia;
}

//ex.12

export function calcularAlturaEdificio(alturaPessoa:number, sombraEdificio:number,sombraPessoa:number):number{
    let alturaEdificio:number = alturaPessoa * (sombraEdificio / sombraPessoa);
    return alturaEdificio;
}

//ex.13

export function calcularDistanciaEntrePessoas(caboA:number, caboB:number, anguloC:number):number{
    let distanciaPessoas:number = Math.sqrt(caboA^2 + caboB^2 - 2 * caboA * caboB * Math.cos(anguloC));
    return distanciaPessoas;
}