console.log("lISTA TYPESCRIPT --- EXERCICIO 1 ---");

// Crie um função que receba uma string com o nome 
// e outra string com uma data de nascimento (ex.: “24/04/1993”). 
// A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const nome=process.argv[2];
const data= process.argv[3]


function nascimento(nome:string, data:string):string{
    data.split(",")
    return `Olá me chamo ${nome}, nasci no dia ${data.split("/")[0]}
     do mês de ${data.split("/")[1]} do ano de ${data.split("/")[2]}`
}
//colocar data com barra "/"
console.log(nascimento(nome,data))