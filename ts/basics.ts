const add = (
  n1: number,
  n2: number,
  showRslt: boolean,
  phrase: string
): number => {
  const result = n1 + n2;
  if (showRslt) {
    console.log(phrase + result);
  } else {
    return result;
  }
};
let num1 = 5; //type inference: variable automatically understands it's type via assigned value
let num2 = 1.8;
let printRslt = true;
let resultPhrase = 'Result is: ';
let rslt = add(+num1, +num2, printRslt, resultPhrase);
console.log(typeof num1);
