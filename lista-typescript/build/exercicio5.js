console.log("lISTA TYPESCRIPT --- EXERCICIO 5 ---");
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "admin";
    ROLE["USER"] = "user";
})(ROLE || (ROLE = {}));
;
const usersList = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];
const userAdmin = (list) => {
    const emailsList = list
        .filter((user) => user.role === ROLE.ADMIN)
        .map((user) => user.email);
    return emailsList;
};
console.log(userAdmin(usersList));
//# sourceMappingURL=exercicio5.js.map