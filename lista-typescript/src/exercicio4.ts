console.log("lISTA TYPESCRIPT --- EXERCICIO 4 ---");

// O seguinte array traz as pessoas colaboradoras de uma empresa, 
// com seus salários, setores e se trabalham presencialmente ou por home office:

// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

//Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras.
// Em seguida, crie uma função que receba este array como parâmetro 
// e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

type users = {
    name: string,
    salary: number,
    setor: department,
    presencial: boolean
}

enum department {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

const listCollaborators: users[] = [
    { name: "Marcos", salary: 2500, setor: department.MARKETING, presencial: true },
    { name: "Maria", salary: 1500, setor: department.VENDAS, presencial: false },
    { name: "Salete", salary: 2200, setor: department.FINANCEIRO, presencial: true },
    { name: "João", salary: 2800, setor: department.MARKETING, presencial: false },
    { name: "Josué", salary: 5500, setor: department.FINANCEIRO, presencial: true },
    { name: "Natalia" ,salary: 4700, setor: department.VENDAS, presencial: true},
    { name: "Paola" ,salary: 3500, setor:department.MARKETING, presencial: true }

]

function sector(list: users[]):users[] {
    const sectorMarketing:users[] = list.filter((collaborator)=>{
        return collaborator.setor === department.MARKETING && collaborator.presencial
    })
    return sectorMarketing

}
console.log(sector(listCollaborators));
