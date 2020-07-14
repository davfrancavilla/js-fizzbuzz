for (var i = 1; i<101; i++) {
    if (i % 3 == 0 && i % 5 == 0){ // controllo se il numero è divisibile sia per 3 che per 5
        console.log('FizzBuzz');
    } else if (i % 3 == 0){ // controllo se il numero è divisibile per 3
        console.log('Fizz');
    } else if (i % 5 == 0){ // controllo se il numero è divisibile per 5
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
