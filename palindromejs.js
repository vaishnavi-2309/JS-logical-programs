// let num = 121;
// let temp = num;
// let rev = 0;

// while (num > 0) {
//     let lastdigit = num % 10;
//     rev = rev * 10 + lastdigit;
//     num = Math.floor(num / 10);
// }

// if (temp === rev) {
//     console.log("It is a palindrome number: " + rev);
// } else {
//     console.log("It is not a palindrome number");
// }

let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome  " + str);
} else {
    console.log("Not a Palindrome");
}