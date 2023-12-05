function calculate_lcm(num1, num2) {
    let min = (num1 > num2) ? num1 : num2;
    
    while (true) { 
        if (min % num1 === 0 && min % num2 === 0) {
            return min;  // Return the calculated LCM
        }
        min++;
    }
}

function calculate_gcd(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    return num1;
}

function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultParagraph = document.getElementById("result");
    
    var lcm = calculate_lcm(num1, num2);
    var gcd = calculate_gcd(num1, num2);
    
    resultParagraph.innerHTML = `Result: LCM = ${lcm}, GCD = ${gcd}`;
}
