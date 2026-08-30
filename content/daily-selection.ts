function hash(value: string) {
  let result = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }

  return result >>> 0;
}

function seededRandom(seed: number) {
  return () => {
    let value = seed += 0x6D2B79F5;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

export function selectDaily<T>(items: readonly T[], count: number, salt: string, date = new Date()) {
  const random = seededRandom(hash(date.toISOString().slice(0, 10) + ":" + salt));
  const selection = [...items];

  for (let index = selection.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [selection[index], selection[swapIndex]] = [selection[swapIndex], selection[index]];
  }

  return selection.slice(0, count);
}
