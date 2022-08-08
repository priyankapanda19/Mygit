const _=require('lodash')

const array=["january","feb","march","aprile","may",'june','july',"aug","sept","oct","nov","dec"]
function arr(){

console.log(_.chunk(array, 4))
}
arr(array)



const array1=[3,5,7,9,11,13,15,17,19,21,23]
function arr1(){
    console.log(_.tail(array1));
}
arr1(array1)

const a=[1,2,3,4]
const b=[5,3,4,4]
const c=[5,6,7,7]
const d=[6,6,8,4]
const e=[3,6,7,8]
function array2(){
    console.log(_.union(a,b,c,d,e));

}
const object=[['key1','value1'],['key2','value2'],['key3','value3'],['key4','value4']] 
const pairsArray=()=>{console.log(_.fromPairs(object));}


module.exports.pairsArray=pairsArray

module.exports.arr=arr
module.exports.arr1=arr1
module.exports.array2=array2