enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const personX = {
  name: 'Tuna',
  age: 22,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
};
console.log(personX.role);
