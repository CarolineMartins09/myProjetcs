console.log("LISTA TYPESCRIPT --- EXERCICIO 6 ---");

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes.
// Basicamente, eles salvam o nome do clientes, o saldo total e 
// uma lista contendo todas os débitos realizados pelo cliente.
// Exemplo:

// entrada
// [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

type conta = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
};

const listaClientes: conta[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
