// Undefined: quando algo ainda não foi definido
// ou quando pode não ser definido

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string, // <- abertura da função
  lastName?: string,
): {
  firstName: string; // <- type annotation
  lastName?: string;
} {
  return {
    firstName, // <- corpo da função
    lastName,
  };
}
