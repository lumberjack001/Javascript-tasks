let hello = document.getElementById('hello')
hello.addEventListener('click', function(){
    let add = document.createElement('p')
    add.innerText = 'hello world'
    document.body.appendChild(add)
})