const personn: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tupple --> it'll be two element array, first one number, second one string
} = {
  name: 'Tuna',
  age: 22,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'], //tupples have fixed length and must be in order
};
personn.role.push('admin'); // push exception, typescript cant catch that
personn.role[1] = 10; //error
personn.role = [0, 'reader']; // that's allowed
