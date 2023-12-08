let victories = null;
let defeats = null;

function calculateMatches(number_victories, number_defeats) {
    return number_victories - number_defeats;
}

let rank = calculateMatches(115, 5);
console.log(rank);

if (rank < 10) {
    let level = "FERRO";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank > 10 && rank <= 12) {
    let level = "BRONZE";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank > 20 && rank <= 50) {
    let level = "PRATA";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank > 50 && rank <= 80) {
    let level = "OURO";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank > 80 && rank <= 90) {
    let level = "DIAMANTE";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank > 90 && rank <= 100) {
    let level = "LENDÁRIO";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
} else if (rank >= 100) {
    let level = "IMORTAL";
    console.log(`O herói tem de saldo ${rank} e está no nível ${level}.`);
}