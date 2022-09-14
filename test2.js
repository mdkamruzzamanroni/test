import { riverList } from "./river.js";
riverList.map((item,i)=>{

    let riverName=item['name'];
    let riverPlace= item['place'];
    let divisionName= item['division'];

    let myItem=riverName+"  is situated at  "+riverPlace+", "+ "which is under the "+divisionName+" division"+"."

console.log(myItem);

})

