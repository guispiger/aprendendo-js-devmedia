//Importa a biblioteca readline-sync, responsavel pela leitura do input de dados 
import entradaDados from 'readline-sync';

//definicao das variaveis
var valor_devido
var dias_atraso
var taxa_juros
var valor_total

console.log("Calculadora de Juros\n");

//Input de dados, solicita o valor devido
var valor_devido = entradaDados.question('Informe o valor devido: R$');

//Verifica se o valor devido é zero, se for encerra com uma mensagem, senao solicita os dias de atraso
if(valor_devido==0 || isNaN(valor_devido)){
    console.log("O valor da dívida deve ser maior do que 0 !");
}
else{
    //Entrada dos dias de atraso
    var dias_atraso = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

    if(dias_atraso==0){
        console.log("Seus pagamentos estão em dia !");
    }
    else if(isNaN(dias_atraso)){
        console.log("Informe os dias em formato de numero inteiro!!!")
    }
    else{

        //Determinacao da taxa de juros com base nos dias de atraso
        if(dias_atraso>15){
            var taxa_juros = 0.10;
        }
        else{
            var taxa_juros = 0.05;
        }

        //Calculo do valor acrescido de juros
        var valor_total = (valor_devido * (1+taxa_juros)).toFixed(2);

        //Exibicao dos resultados na tela
        console.log("\nValor Original da Divida: R$"+valor_devido);
        console.log("Dias de atraso: "+dias_atraso);
        console.log("Taxa de juros aplicada: "+taxa_juros*100+"%");
        console.log("Valor total com juros: R$"+valor_total)
    }
}

console.log(null + null)


