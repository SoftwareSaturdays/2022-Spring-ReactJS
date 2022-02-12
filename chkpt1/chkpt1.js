// This is an EXAMPLE of a checkpoint, your implementation and design may be different

function FizzBuzz(num) {
    for (let i = 0; i <= num; ++i) {
        if (i%3==0 && i%5==0) {
            console.log("FizzBuzz");
        }
        else if (i%3==0) {
            console.log("Fizz");
        }
        else if (i%5==0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
FizzBuzz(100);