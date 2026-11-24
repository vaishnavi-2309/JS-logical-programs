let num = 121;
let temp = num;
let rev = 0;

while (num > 0) {
    let lastdigit = num % 10;
    rev = rev * 10 + lastdigit;
    num = Math.floor(num / 10);
}

if (temp === rev) {
    console.log("It is a palindrome number: " + rev);
} else {
    console.log("It is not a palindrome number");
}