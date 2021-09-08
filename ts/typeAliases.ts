type Combinal = number | string;
type User = { name: string; age: number };

const u1: User = { name: 'John', age: 25 };

const person = (user: { name: string; age: number }) => {
  //simplification
  console.log('Hi, I am ' + user.name);
};

const combine = (input1: Combinal, input2: Combinal) => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};
