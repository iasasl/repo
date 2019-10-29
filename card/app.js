const inputCard = prompt('Введите карту');
const outputCard = inputCard.replace(/[^0-g]/g, '');
if (outputCard.length != 16) {
    alert("Введён некорректный номер карты");
} 
if (outputCard.length === 16) {
    alert(`${outputCard[0]}${outputCard[1]}${outputCard[2]}${outputCard[3]} **** **** **${outputCard[14]}${outputCard[15]}`);
}