
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=> res.json())
.then((user)=>console.log(user))
.catch((error)=> console.log("ff"));

/*const myPromise = new Promise((resolve,reject) =>{//promise is async
if(true){
    setTimeout(()=>{
        resolve("good");
    },1000);//alt + arrow up
}else{
    reject("failed");
}
});
myPromise
.then((value)=>console.log(value))//good 
.catch((error) => console.log(error));//error
*/

