// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


//ciclo da 1 a 100

for (var i=1; i<=100; i++){
    if (i%3 == 0){
        if(i%5 == 0){
            //se il resto della divisione per cinque E per tre è uguale a 0 scrivere fizz buzz 
            console.log("Fizzbuzz")
        }else{
            // se il resto della divisione per tre è uguale a 0 scrivi fizz
            console.log("Fizz")
        }
    }else if(i%5 == 0){
        console.log("Buzz")
        // se il resto della divisione per cinque è uguale a 0 scrivi buzz
    }else{
        console.log(i)
        //stampa numero
    }
}

