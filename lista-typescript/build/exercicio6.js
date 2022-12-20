console.log("LISTA TYPESCRIPT --- EXERCICIO 6 ---");
const listaClientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
const negativos = (lista) => {
    lista.forEach((cliente) => {
        const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
        cliente.saldoTotal -= totalDebitos;
        cliente.debitos = [];
    });
    const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
    return contasNegativas;
};
console.log(negativos(listaClientes));
//# sourceMappingURL=exercicio6.js.map