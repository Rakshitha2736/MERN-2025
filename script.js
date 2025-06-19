const add=(a,b)=>{
    return a+b;
}
console.log(add(5,5));
//objects in javascript are used to store data in key-value pairs
const obj={
    name:'Rakshitha',
    age:19,
    message:function(){
        let name=obj.name;
        return `Hello iam ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

//map-return new array after executing function on every element ,why we use this means in for loop we have to create new array and push the result soo we use map.
const numbers=[1,2,3,4,5,6]
const mappednum=numbers.map((num)=>num*3)
console.log(mappednum);

//filter-return new array with element satisfyiny the condition
// it return the positive numbers
const number=[1,2,3,4,-5,-6,-7]
const posNum=number.filter((n)=>n>0)
console.log(posNum);

//it returns the odd numbers
const numb=[1,2,3,4,5,6,7,8,9]
const result=numb.filter((num)=>num%2!==0)
console.log(result);

//reduce- it returns a single value after performing the operation on all the elements
// it returns the sum of all the numbers in the array

const sumofnum=numb.reduce((sum,n)=>sum+n,0)
console.log(sumofnum);


const products=[
    {name:'laptop',price:50000},
    {name:'mobile',price:20000},
    {name:'tablet',price:30000}
]

const sumofprice=products.reduce((sum,product)=>sum+product.price,0)
console.log(sumofprice);
const res=products.filter((num)=>num.price>20000)
console.log(res);

//Destructuring
const user={
    name:'Rakshitha',password:'12345'}
const {name,password}=user
console.log(password);

//Destructuring is used to extract values from objects or arrays and assign them to variables
const numbe=[1,2,3,4,5,6,7,8,9,10]
const [first,second]=numbe
console.log(second);

//speard operator copying arr1 in arr2
const arr1=[1,2,3]
const arr2=[...arr1,4,5,6]
console.log(arr2);

//speard with destructuring
const n=[1,2,3,4,5,6,7,8,9,10]
const [fir,sec,...spread]=n
console.log(spread);

//rest operator is used to collect all the remaining elements into an array
function addall(...arguments){
    return arguments;
}
console.log(addall(1,2,3,4,5,6));

//callback function is a function that is passed as an argument to another function and is executed after the completion of that function
function greet(name, callback) {
    console.log("Hi " + name);
    callback(); //  this is the sayBye function it run after 5 seconds
}

function sayBye() {
    console.log("Bye!");
}

greet("Rakshitha", sayBye);

//asynchronous programming is a way of writing code that allows the program to continue executing while waiting for a task to complete
async function fetchUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //console.log(data);
        console.log(data.map(user => user.name));
    }catch(error){
        console.error(error);
    }
}
fetchUsers()

