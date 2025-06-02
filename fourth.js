//Arrays :- collection of items|array is a type of object.| arrays are mutable whereas strings are immutable.
let marks=[65,78,64,53,49,96,89,27];
console.log(marks);
console.log(marks.length);//property to get the length of array
console.log(typeof(marks));

let heroes=["iron man","captain america","hulk","Ant-man"];
console.log(heroes);
console.log(heroes.length);

//Array Indices:- array's index | syntax to access the index of array :-arrname[position/index] eg:arrname[0]
console.log(marks[2]);
heroes[1]="bat-man";//updating the value in array.
console.log(heroes);

//Looping over array
// for loop
for (let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);
}

// for of loop
for (let el of heroes){
    console.log(el);
}

let cities=["Mumbai","Delhi","Chandigarh","Dehradun","Mussoorie","Nainital"];
for(let city of cities){
    console.log(city.toUpperCase());
    console.log(cities[1]);//accessing the specific cities

}

//practice question
let score=[85,97,44,37,76,60]
let sum = 0;
for(let val of score){
    sum=sum+val;
}
let avg=sum/score.length;
console.log(`average marks of the class = ${avg}`);

//practice question
let price=[250,645,300,900,50];
/*let indx=0;
for(let p of price){
    console.log(`value of items = ${p}`);
    let offer=p/10;
    price[indx]=price[indx]-offer;
    console.log(`the prices after 10% off = ${price[indx]}`);
    indx++;
}*/
//same question using for loop
for(let i=0; i<price.length ; i++){
    let dis= price[i]/10;
    price[i] -= dis;
}
console.log(price);

//methods in arrays
//1.)push():add to ending.
let veggies=["potato","Tomato","Piyaaj","Mooli","green chillies","Okra"];
veggies.push("BottleGourd","Spinach");
console.log(veggies);

//2.pop():delete something from end and return
veggies.pop();
console.log(veggies);

//3.toString():  converts an array to string.
console.log(veggies.toString());
console.log(marks.toString());

//4.Concat():to join multiple arrays and return results.
console.log(heroes.concat(veggies));
console.log(veggies.concat(cities,heroes));

//5.unshift():add to starting
cities.unshift(123,"Manali","Shimla");
console.log(cities);

//6.shift():delete from start and return
veggies.shift("potato");
console.log(veggies);
cities.shift(123);
console.log(cities);

//7.slice():returns a piece of array | syntax:- slice(startidx, endidx) |it does n't change the original array
console.log(cities.slice(5,7)); // will not return endidx 
console.log(cities.slice(5,));
console.log(cities);// does n't change the original array

//8.splice():change the original array(add,remove,replace)| syntax:- splice(startidx,delcount,newElm1..)
cities.splice(2,2,"Lal Tibba","Landour");
console.log(cities);
marks.splice(4,0,89,67,54,85,82);
console.log(marks);
cities.splice(7,0,"Kempty fall","Mussorie Lake");//ADDING ELEMENT ONLY
console.log(cities);
marks.splice(1,3);//DELETING ELEMENT ONLY
console.log(marks);
cities.splice(0,1,"J&K");//REPLACING ANY ELEMENT
console.log(cities);
heroes.splice(2);//starting from 2nd index i will return the array elements till end.
console.log(heroes);

//Practice question
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.splice(0,1);//REMOVING FIRST COMPANY FROM ARRAY
console.log(companies);
companies.splice(1,1,"OLA");
companies.push("Amazon");
console.log(companies);