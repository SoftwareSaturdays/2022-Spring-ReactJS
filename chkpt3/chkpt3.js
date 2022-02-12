// This is an EXAMPLE of a checkpoint, your implementation and design may be different

let num = 0
function FizzBuzz() {
    
    num += 1;
    if (num > 100) return;

    // You will see how much easier this is with Vue in the future...
    let fbTag = document.getElementById("fizzbuzz");
    if (num%3==0 && num%5==0) {
        fbTag.innerHTML += '<span class="fizzbuzz">FizzBuzz</span><br>';
    }
    else if (num%3==0) {
        fbTag.innerHTML += '<span class="fizz">Fizz</span><br>';
    }
    else if (num%5==0) {
        fbTag.innerHTML += '<span class="buzz">Buzz</span><br>';
    }
    else {
        fbTag.innerHTML += num + '<br>';
    }
}

function RunAllFB() {
    for (let i = 0; i <= 100; i++) {
        FizzBuzz();
    }
}