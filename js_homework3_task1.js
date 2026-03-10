function splitLines(text) {
    return text.split('\n');
}


function showResult() {
    const text = document.getElementById('input1a').value;
    const lines = splitLines(text);

    const output = document.getElementById('output1a');
    output.textContent = JSON.stringify(lines);
    /*const ul = document.createElement('ul');
    for (let i = 0; i < lines.length; i++) {
        const li = document.createElement('li');
        li.textContent = lines[i];
        ul.appendChild(li);
    }
    output.appendChild(ul); */
}

function toNumbers(textList) {
    return textList.map(t => parseFloat(t.trim()));
}

function run1b() {
    const inputResults = document.getElementById('input1b').value;
    const textList = inputResults.split(',');
    const numbers = toNumbers(textList);
    const out = document.getElementById('output1b');
    out.classList.remove('hidden');
    out.textContent = JSON.stringify(numbers);
}

  // ── 1c ──────────────────────────────────────────────
function pairwiseSums(numbers) {
    const sums = [];
    for (let i = 0; i < numbers.length - 1; i++) {
    sums.push(numbers[i] + numbers[i + 1]);
    }
    return sums;
}

function run1c() {
    const inputResults = document.getElementById('input1c').value;
    const numbers = toNumbers(inputResults.split(','));
    const sums = pairwiseSums(numbers);

    const out = document.getElementById('output1c');
    out.classList.remove('hidden');
    out.innerHTML = '';

    const label = document.createElement('p');

    label.textContent = `Input: [${numbers.join(', ')}]`;
    out.appendChild(label);

    const ol = document.createElement('ol');
    ol.className = 'result-list';
    sums.forEach((sum, i) => {
    const li = document.createElement('li');
    li.textContent = `${numbers[i]} + ${numbers[i+1]} = ${sum}`;
    ol.appendChild(li);
    });
    out.appendChild(ol);
    }