function splitLines(text) {
    return text.split('\n');    //deler teksten ved hver linje og returnerer en array
}


function showResult() {
    const text = document.getElementById('input1a').value; //henter teksten brukere skriver inn.
    const lines = splitLines(text);
    const output = document.getElementById('output1a');    //henter output boksen
    output.textContent = lines.join(', ');                 //slår sammen linjene med komma og viser dem.
}

function toNumbers(textList) {
    return textList.map(t => parseFloat(t.trim()));     //går gjennom elementene og fjerner mellomrom og slår de sammen til et tall.
}

//--1b------
function run1b() {
    const text = document.getElementById('input1b').value;
    const numbers = text.split(',').map(t => parseFloat(t.trim()));
    const output = document.getElementById('output1b');
    output.textContent = numbers.join(', ');
}

  // --1c------
function pairwiseSums(numbers) {
    const sums = [];
    for (let i = 0; i < numbers.length - 1; i++) { // stopper ett før slutten, f.eks [3,6,8,9], siste par er 8+9
    sums.push(numbers[i] + numbers[i + 1]);
    }
    return sums;
}

function run1c() {
    const inputResults = document.getElementById('input1c').value;
    const numbers = toNumbers(inputResults.split(',')); //deler ved koma og gjøre om til et tall.
    const sums = pairwiseSums(numbers);

    const out = document.getElementById('output1c');
    out.classList.remove('hidden');
    out.innerHTML = ''; //tomme boksen så gamle resultater ikke komemr med

    const label = document.createElement('p');

    label.textContent = `Input: [${numbers.join(', ')}]`;
    out.appendChild(label);
    sums.forEach((sum, i) => {
        const p = document.createElement('p');
        p.textContent = `${numbers[i]} + ${numbers[i+1]} = ${sum}`;
        out.appendChild(p);
    });
}
