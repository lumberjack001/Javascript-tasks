fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if(i === 100) document.write('fizzBuzz.')
        else if (i % 15 == 0) document.write("fizzBuzz, ");
        else if (i % 3 == 0) document.write("fizz, ");
        else if (i % 5 == 0) document.write("buzz, ");
        else document.write(`${i}, `);
    }
}
fizzBuzz()