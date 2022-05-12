// const fruits =[{name:'pineapple'}, {name:'mango'}, {name:'apple'}];
// const election= ['razzak', 'alomgir', 'jayed', 'jayed', 'nipun'];

// const election2 = {
//     razzak:1,
//     alomgir:1,
//     jayed:4,
//     nipun:1,
// }

let db ={};
const addToDb = item =>{
    //three ways to add a property to an object
    //1. db.alom =1;
    //2. db['alom']=1
    //3. db[item] =1;
const storedTracker = localStorage.getItem('chaker-tracker');
if(storedTracker){
  db =JSON.parse(storedTracker) ;
}

    if(item in db){
        db[item] = db[item] +1;
    }
    else{
        db[item] =1
        
    }
   localStorage.setItem('chaker-tracker',JSON.stringify(db))
}

const removeItem = item =>{
    const storedTracker = localStorage.getItem('chaker-tracker');
    const storedObject =JSON.parse(storedTracker);
    // delete storedObject[item];
    if(item in storedObject){
        storedObject[item] = storedObject[item] -1;
    }
  
    localStorage.setItem('chaker-tracker', JSON.stringify(storedObject))
}