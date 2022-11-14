const personObject = {
    name: 'Jane',
    age: '23',
    hairColor: 'Brown',
    height: '5ft 6inches',
    occupation: 'Nurse'
}
printKeys=(obj)=>{
    let keys = Object.keys(obj)
    for(let el of keys){
    console.log(el)
    }
}
