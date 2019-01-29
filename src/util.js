import namor from "namor";


const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    bazaar: namor.generate({ words: 1, numbers: 0 }),
    userName: namor.generate({ words: 1, numbers: 0 }),
    bidType: Math.floor(Math.random() * 30),
    bidNumber: Math.floor(Math.random() * 30),
    amount: Math.floor(Math.random() * 100),
    datetime: Math.floor(Math.random() * 100),
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}
