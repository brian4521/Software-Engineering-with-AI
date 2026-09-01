const newSet = new Set([1,7,9,2,4,"a",1,9,"b","a",0,7]);
console.log(newSet)
const arr = [2,3]
const newMap = new Map([
    ["a","b"],
    [1, "b"],
    [arr,[4,5]],
    [{"a":1}, {"b":2}]
])

console.log(newMap)
console.log(newMap.set("name","ritesh"))
console.log(arr)