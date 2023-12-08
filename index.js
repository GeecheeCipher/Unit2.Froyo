// promt users for flavors
let input = prompt("Enter Flavor");
// split into array
let flavor = input.split(",");

//create an oobject

function iceCream(flavor) {
  let flavors = {};
  for (let i = 0; i < flavor.length; i++) {
    if (!flavors[flavor[i]]) {
      flavors[flavor[i]] = 1;
    } else {
      flavors[flavor[i]]++;
    }
  }
  return flavors;
}
console.log(iceCream(flavor));
