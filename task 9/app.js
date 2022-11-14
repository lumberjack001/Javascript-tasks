const personObject = {
    name: 'Jane',
    age: '23',
    hairColor: 'Brown',
    height: '5ft 6inches',
    occupation: 'Nurse'
}
printValues=(obj)=>{
    let values = Object.values(obj)
    for(let el of values){
    console.log(el)
    }
}