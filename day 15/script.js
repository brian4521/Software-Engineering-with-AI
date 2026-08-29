// const fruitShop = {
//   name:"apple",
//   category:"fruit",
//   color:"red",
//   price:150,
//   quantity:20,
//   weight:"200g",
//   calorie:{
//     lowCalorie:"good for weight loss"

//   },

//   fruitNumber:[1,2,3],

//   start : function () { console.log(`${this.name} is booting`)}

// }



const myarray = [1,"hello",2,3,"world"]
const [first,,third,,fifth] = myarray
console.log(first, third, fifth)

// const {name, category, color} = fruitShop
// console.log(name)
// console.log(category)

// const fruitShops = [
//   {
//   name:"apple",
//   category:"fruit",
//   color:"red",
//   price:150,
//   quantity:20,
//   weight:"200g"

//  },
//  {
//   name:"bananna",
//   category:"fruit",
//   color:"red",
//   price:150,
//   quantity:20,
//   weight:"200g"

// },
// {
//   name:"guava",
//   category:"fruit",
//   color:"red",
//   price:150,
//   quantity:20,
//   weight:"200g"

// } 


// ]

// fruitShops.forEach(fruit=>{
//   console.log(fruit)
// })