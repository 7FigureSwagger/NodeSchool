
let input = process.argv.slice(2);
// console.log(input);

let added = 0;

for(let i = 0; i < input.length; i++){
  // console.log(input[i])
  added = Number(added) + Number(input[i]);
}

// const added = Number(input[0]) + Number(input[1]);
console.log(added);