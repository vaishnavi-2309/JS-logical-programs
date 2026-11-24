

let strarr=["Pune","Mumbai","Nashik","Amravati","Jalgaon"];

// print cities starts with A
for (let i = 0; i < strarr.length; i++) {
    if (strarr[i].charAt(0).toLowerCase() === 'a') {
        console.log(strarr[i]);
    }
}


//print cities length >= 5
for (let i = 0; i < strarr.length; i++) {
    if (strarr[i].length >= 5) {
        console.log(strarr[i]);
    }
}

//print count of vowels from each city
for (let i = 0; i < strarr.length; i++) {

    let city = strarr[i];
    let count = 0;

    for (let j = 0; j < city.length; j++) {
        let ch = city[j].toLowerCase();

        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    console.log(city + " = " + count);
}