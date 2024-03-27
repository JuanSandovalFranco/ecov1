export default function generateSKU(length = 10) {
  const max = length / 2;
  let counter = 0;
  let aplhaSKU = [];
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < length; i++) {
    if (aplhaSKU.length === length) break;
    if (counter <= max) {
      aplhaSKU = [...aplhaSKU, Math.round(Math.random() * 10)];
      counter++;
    }
    if (aplhaSKU[aplhaSKU.length - 1] * 1) {
      aplhaSKU = [
        ...aplhaSKU,
        alpha[Math.round(Math.random() * aplhaSKU.length + 1)],
      ];
    } else {
      aplhaSKU = [
        ...aplhaSKU,
        alpha[Math.round(Math.random() * aplhaSKU.length + 1)],
      ];
    }
  }

  return aplhaSKU.join("");
}
