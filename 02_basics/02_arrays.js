const marvel = ["Thor","Ironman","Spiderman"]
const dc = ["Superman","Flash","Batman"]

// marvel.push(dc)   // ye array ke andar array daal dega 
// console.log(marvel)
// console.log(marvel[3][1])

//  const allHeroes = marvel.concat(dc)
// console.log(allHeroes)

const all_new_heroes = [...marvel,...dc]
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Sachin"))
// console.log(Array.from("Sachin"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))