import entradaDados from 'readline-sync';

var salarioMinimo = [
     {salario:510.00, ano:2010},
     {salario:545.00, ano:2011},
     {salario:622.00, ano:2012},
     {salario:678.00, ano:2013},
     {salario:724.00, ano:2014},
     {salario:788.00, ano:2015},
     {salario:880.00, ano:2016},
     {salario:937.00, ano:2017},
     {salario:954.00, ano:2018},
     {salario:998.00, ano:2019},
     {salario:1045.00, ano:2020},
];

var indiceIpca = [
    {ipca:5.91, ano:2010},
    {ipca:6.50, ano:2011},
    {ipca:5.84, ano:2012},
    {ipca:5.91, ano:2013},
    {ipca:6.41, ano:2014},
    {ipca:10.67, ano:2015},
    {ipca:6.29, ano:2016},
    {ipca:2.95, ano:2017},
    {ipca:3.75, ano:2018},
    {ipca:4.31, ano:2019},
    {ipca:4.52, ano:2020},
];

console.log("==========Aplicação Salário Mínimo X Inflação==========\n");

console.log("Escolha uma das alternativas:\n\n");

console.log("1 - Listar o salário mínimo do periodo de 2010 à 2020");
console.log("2 - Listar o índice IPCA do periodo de 2010 à 2020");
console.log("3 - Comparação entre percentual de variação do salário mínimo e do índice IPCA para o periodo de 2010 a 2020");
console.log("4 - Encerrar aplicação\n");

let escolha = parseInt(entradaDados.question ("Digite o número corespondente a alternativa: "),10);

switch(escolha){
    case 1:
        for(let salarioAnual of salarioMinimo){

            let ano = salarioAnual.ano;
            let salario = salarioAnual.salario;

            console.log('Ano: '.padEnd(30,'.') + ano);
            console.log('Salário Mínimo: '.padEnd(30,'.') + 'R$ ' + salario.toFixed(2).replace('.',',') + '\n');
        }
        break;
    
    case 2:
        for( let ipcaAnual of indiceIpca){

            let ipca = ipcaAnual.ipca;
            let ano = ipcaAnual.ano;

            console.log('Ano: '.padEnd(30,'.') + ano);
            console.log('Inflação IPCA: '.padEnd(30,'.') + ipca.toFixed(2).replace('.',',') + '%' + '\n');
        }
        break;
    
    case 3:
        for(let contador = 0; contador < salarioMinimo.length; contador++){

            let ano = salarioMinimo[contador].ano;
            let salario = salarioMinimo[contador].salario;
            let ipca = indiceIpca[contador].ipca;

            if(contador == 0){
                var variacao_salarial = (0 / salarioMinimo[contador].salario)*100
            }
            else{
                var variacao_salarial = ((salarioMinimo[contador].salario - salarioMinimo[contador-1].salario) / salarioMinimo[contador-1].salario)*100
            }
            
            console.log('Ano: '.padEnd(30,'.') + ano);
            console.log('Salário Mínimo: '.padEnd(30,'.') + 'R$ ' + salario.toFixed(2).replace('.',','));
            console.log('Variação Salarial: '.padEnd(30,'.') + variacao_salarial.toFixed(2).replace('.',',') + '%' );
            console.log('Inflação IPCA: '.padEnd(30,'.') + ipca.toFixed(2).replace('.',',') + '%' + '\n');
        }
        break;
    
    case 4:
        console.log("\n========== Aplicação Encerrada!!!! ==========\n");
        break;

    default:
        console.log("Opção Invalida");
        break;
}
