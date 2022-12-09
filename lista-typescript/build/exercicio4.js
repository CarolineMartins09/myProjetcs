console.log("lISTA TYPESCRIPT --- EXERCICIO 4 ---");
var department;
(function (department) {
    department["MARKETING"] = "marketing";
    department["VENDAS"] = "vendas";
    department["FINANCEIRO"] = "financeiro";
})(department || (department = {}));
const listCollaborators = [
    { name: "Marcos", salary: 2500, setor: department.MARKETING, presencial: true },
    { name: "Maria", salary: 1500, setor: department.VENDAS, presencial: false },
    { name: "Salete", salary: 2200, setor: department.FINANCEIRO, presencial: true },
    { name: "João", salary: 2800, setor: department.MARKETING, presencial: false },
    { name: "Josué", salary: 5500, setor: department.FINANCEIRO, presencial: true },
    { name: "Natalia", salary: 4700, setor: department.VENDAS, presencial: true },
    { name: "Paola", salary: 3500, setor: department.MARKETING, presencial: true }
];
function sector(list) {
    const sectorMarketing = list.filter((collaborator) => {
        return collaborator.setor === department.MARKETING && collaborator.presencial;
    });
    return sectorMarketing;
}
console.log(sector(listCollaborators));
//# sourceMappingURL=exercicio4.js.map