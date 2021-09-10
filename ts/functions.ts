const add = (n1: number, n2: number) => n1 + n2;
const printt = (num: number): void => console.log('Result: ' + num); // result type is void

// let values: Function;
// or
// let values:(a:number,b:number)=>number; more precise
const addAndHandles = (
  n1: number,
  n2: number,
  cb: Function /* or cb:(num:number)=>void */
) => {
  const rslt = n1 + n2;
  cb(rslt);
};
values = add; //thats okay
values = 5; // error
console.log(add(5, 5));
addAndHandles(1, 2, (rslt) => {
  console.log(rslt);
});
