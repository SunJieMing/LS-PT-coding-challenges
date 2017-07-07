function hanoi(pegs, start = 0, target = 2, n = pegs[0].length) {
  if (pegs[0].length === 0 && pegs[1].length === 0) return;
  if (n === 1) {
    pegs[target].push(pegs[start].pop());
    console.log(`${start} -> ${target}: [[${pegs[0]}],[${pegs[1]}], [${pegs[2]}]]`);
  } else {
    const aux = 3 - start - target;
    hanoi(pegs, start, aux, n - 1);
    hanoi(pegs, start, target, 1);
    hanoi(pegs, aux, target, n - 1);
  }
}

const pegs = [[3, 2, 1], [], []];

hanoi(pegs);

console.log(pegs);
