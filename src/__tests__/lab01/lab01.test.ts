/*
import { calculateGenderPercentage } from '../../lab01/lab01';
import { calculateBoysPercentage } from '../../lab01/lab01';
import { calculateGirlsPercentage } from '../../lab01/lab01';

describe('Testing the Calculate Gender Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededBoysPercentage: number = 0.4;
        let expectededGirlsPercentage: number = 0.6;

        //Act
        let [boysPercentage, girlsPercentage] = calculateGenderPercentage(boys, girls);

        //Assert
        expect(boysPercentage).toBe(expectededBoysPercentage);
        expect(girlsPercentage).toBe(expectededGirlsPercentage);
        expect(boysPercentage + girlsPercentage).toBe(1);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});

describe('Testing the Calculate Boys\' Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededBoysPercentage: number = 0.4;

        //Act
        let boysPercentage = calculateBoysPercentage(boys, girls);

        //Assert
        expect(boysPercentage).toBe(expectededBoysPercentage);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateBoysPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});

describe('Testing the Calculate Girls\' Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededGirlsPercentage: number = 0.6;

        //Act
        let girlsPercentage = calculateGirlsPercentage(boys, girls);

        //Assert
        expect(girlsPercentage).toBe(expectededGirlsPercentage);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGirlsPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});
*/

/* use this for tests

describe('', () => {
    test('', () => {
        //Arrange
        

        //Act
        

        //Assert
        
    });
});
*/
/*
############### Dúvidas
As variáveis descritas em arrange são conectadas com as da função?!
A primeira variável do Act é conectada com a função?
*/


//ex.2

import { calculatePriceRamo } from '../../lab01/functions_lab01';

describe('Testing Preço Ramo', () => {
    test('5 tulipas, 6 rosas, 1 tulipa custa 2€, 1 rosa custa 3€ ', () => {
        //Arrange
        let nTulipas: number = 5;
        let nRosas: number = 6;
        let pTulipas: number = 2;
        let pRosas: number = 3;
        let expectedPriceRamo: number = 28;

        //Act
        let priceRamo = calculatePriceRamo(nTulipas, nRosas, pTulipas, pRosas);

        //Assert
        expect(priceRamo).toBe(expectedPriceRamo);

    });

    test('0 tulipas, 6 rosas, 1 tulipa custa 2€, 1 rosa custa 3€ ', () => {
        //Arrange
        let nTulipas: number = 0;
        let nRosas: number = 6;
        let pTulipas: number = 2;
        let pRosas: number = 3;
        let expectedPriceRamo: number = 18;

        //Act
        let priceRamo: number = calculatePriceRamo(nTulipas, nRosas, pTulipas, pRosas);

        //Assert
        expect(priceRamo).toBe(expectedPriceRamo)
    });
});

//ex.3

import { calculateLitros } from '../../lab01/functions_lab01';

describe('Testing Litros', () => {
    test('Sendo raio do cilindro 3, e altura 6', () => {
        //Arrange
        let rCilindro: number = 3;
        let hCilindro: number = 6;
        let expectedLitros: number = 17.00;

        //Act
        let litros: number = calculateLitros(rCilindro, hCilindro);

        //Assert
        expect(litros).toBe(expectedLitros);
    });
});

//ex.4

import { calcularPerimetroRectangulo } from '../../lab01/functions_lab01';

describe('Calcular perimetro rectangulo', () => {
    test('Sendo ladoA = 5 & laboB = 6', () => {
        //Arrange
        let ladoA: number = 5;
        let ladoB: number = 5;
        let expectedPerimetro = 20;

        //Act
        let perimetro: number = calcularPerimetroRectangulo(ladoA, ladoB);

        //Assert
        expect(perimetro).toBe(expectedPerimetro);
    });
});

//ex.5

import { calcularHipotenusa } from '../../lab01/functions_lab01';

describe('Calcular hipotenusa', () => {
    test('Sendo c1 = 5 & c2 = 6', () => {
        //Arrange
        let c1: number = 5;
        let c2: number = 6;
        let expectedHipotenusa: number = 7.81;

        //Act
        let hipotenusa: number = calcularHipotenusa(c1, c2);

        //Assert
        expect(hipotenusa).toBe(expectedHipotenusa);
    });
});

//ex.6

import { calcularTempF } from '../../lab01/functions_lab01';

describe('Calcular temperatura', () => {
    test('Sendo temperatura em C = 30', () => {
        //Arrange
        let tempC: number = 30;
        let expectedF: number = 86;

        //Act
        let tempF: number = calcularTempF(tempC);

        //Assert
        expect(tempF).toBe(expectedF);
    });
});

//ex.7

import { calcularMinutosPassados } from '../../lab01/functions_lab01';

describe('Calcular minutos passados', () => {
    test('Dadas 2 horas e 2 minutos', () => {
        //Arrange
        let horas: number = 2;
        let minutos: number = 2;
        let expectedMinutosPassados:number = 122;

        //Act
        let minutosPassados:number = calcularMinutosPassados(horas, minutos);

        //Assert
        expect(minutosPassados).toBe(expectedMinutosPassados);
    });
});

//ex.8

import { calcularDistanciaMetros } from '../../lab01/functions_lab01';

describe('Calcular distancia em metros', () => {
    test('Testar distancia com 15 segundos', () => {
        //Arrange
        let intervaloSegundos:number = 15;
        let expectedDistanciaMetros:number = 5100;

        //Act
        let distancia:number = calcularDistanciaMetros(intervaloSegundos);

        //Assert
        expect(distancia).toBe(expectedDistanciaMetros);
    });
});

//ex.9

import { calcularDistanciaKilometrosZe } from '../../lab01/functions_lab01';

describe('Calcular distância percorrida pelo Zé em KM em função da velocidade do Manel', () => {
    test('Dado 3900 segundos de corrida pelo Zé', () => {
        //Arrange
        let tempoZe:number = 3900;
        let expectedKilometrosZe:number = 11.31;

        //Act
        let kilometrosZe:number = calcularDistanciaKilometrosZe(tempoZe);

        //Assert
        expect(kilometrosZe).toBe(expectedKilometrosZe);
    });
});

//ex.10

import { calcularExpressao } from '../../lab01/functions_lab01';

describe('Calcular o valor de uma expressão dado X', () => {
    test('x = 3', () => {
        //Arrange
        let x:number = 3;
        let expectedResult:number = 1;

        //Act
        let result:number = calcularExpressao(x);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

//ex.11

import { calcularAlturaPredio } from '../../lab01/functions_lab01';

describe('Calcular altura de um prédio', () => {
    test('Dado o tempo ser 20 segundos', () => {
        //Arrange
        let tempo:number = 20;
        let expectedAltura:number = 1960;

        //Act
        let altura:number = calcularAlturaPredio(tempo);

        //Assert
        expect(altura).toBe(expectedAltura);
    });
});

//ex.12

import { calcularAlturaEdificio } from '../../lab01/functions_lab01';

describe('Calcular altura edificio baseado na 1. altura da pessoa; 2. altura da sombra da pessoa; 3. altura da sombra do edificio ', () => {
    test('Sendo a sombra 5 metros', () => {
        //Arrange
        let alturaPessoa:number = 1.8;
        let sombraEdificio:number = 30;
        let sombraPessoa:number = 5;
        let expectedalturaEdificio:number = 10.8;

        //Act
        let alturaEdificio = calcularAlturaEdificio(alturaPessoa, sombraEdificio, sombraPessoa);

        //Assert
        expect(alturaEdificio).toBe(expectedalturaEdificio);
    });
});

//ex.13

import { calcularDistanciaEntrePessoas } from '../../lab01/functions_lab01';

describe('Calcular distância entre duas pessoas baseado em dois cabos A e B, sendo que se tocam no mesmo ponto realizando angulo C', () => {
    test('Tendo cabo A 10 metros, cabo B 15 metros, e ângulo C ser 60 graus', () => {
        //Arrange
        let caboA:number = 10;
        let caboB:number = 15;
        let anguloC:number = 60;
        let expectedDistancia:number = 16.12;

        //Act
        let distancia:number = calcularDistanciaEntrePessoas(caboA, caboB, anguloC);

        //Assert
        expect(distancia).toBe(expectedDistancia);
    });
});