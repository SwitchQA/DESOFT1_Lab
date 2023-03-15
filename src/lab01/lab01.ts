/**
 * Lab 01
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 * Approach #1
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Boys and girls' percentage.
 */
/*
export function calculateGenderPercentage(boys: number, girls: number): [number, number] {

    let total: number = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let boysPercentage = boys / total;
    let girlsPercentage = girls / total;

    console.log("Boys Percentage: " + boysPercentage);
    console.log("Girls Percentage: " + girlsPercentage);
    return [boysPercentage, girlsPercentage];
}


/**
 * Lab 01
 *
 * Approach #2
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Boys' percentage.
 */
/*
export function calculateBoysPercentage(boys: number, girls: number): number {

    let total: number = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let boysPercentage = boys / total;

    return boysPercentage;
}

/**
 * Lab 01
 *
 * Approach #3
 *
 * This lab is designed to help you get familiar with the TypeScript language.  You will be writing a few functions.
 *
 * @param boys Number of boys in class.
 * @param girls Number of girls in class.
 *
 * @returns Girls' percentage.
 */
/*
export function calculateGirlsPercentage(boys: number, girls: number): number {

    let total: number = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let girlsPercentage = girls / total;

    return girlsPercentage;
}
*/
//////////////
//ex.2
import { calculatePriceRamo } from "./functions_lab01";
console.log("Preço do ramo: ", calculatePriceRamo(2,2,2,2));

//ex.3
import { calculateLitros } from "./functions_lab01";
console.log("Litros possíveis: ", calculateLitros(3,6));

//ex.4

import {calcularPerimetroRectangulo } from "./functions_lab01";
console.log("O perimetro do rectangulo é: ", calcularPerimetroRectangulo);

//ex.5

import { calcularHipotenusa } from "./functions_lab01";
console.log("A hipotenusa é: ", calcularHipotenusa);

//ex.6

import { calcularTempF } from "./functions_lab01";
console.log("A temperatura em F é: ", calcularTempF);

//ex.7

import { calcularMinutosPassados } from "./functions_lab01";
console.log("Minutos passados foram: ", calcularMinutosPassados);

//ex.8

import { calcularDistanciaMetros } from "./functions_lab01";
console.log("Distancia em metros são: ", calcularDistanciaMetros);

//ex.9

import { calcularDistanciaKilometrosZe } from "./functions_lab01";
console.log("A distância em kilómetros que o Zé correu foi: %d", calcularDistanciaKilometrosZe(3900));

//ex.10

import { calcularExpressao } from "./functions_lab01";
console.log("O resultado é: "+ calcularExpressao);

//ex.11

import { calcularAlturaPredio } from "./functions_lab01";
console.log("A altura do prédio é: "+ calcularAlturaPredio);

//ex.12

import { calcularAlturaEdificio } from "./functions_lab01";
console.log("A altura do edificio é: "+ calcularAlturaEdificio);

//ex.13

import { calcularDistanciaEntrePessoas } from "./functions_lab01";
console.log("A distância entre os trabalhadores é: "+ calcularDistanciaEntrePessoas);

