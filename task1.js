function charFreq(str, ch) {//this function will count the frequency of ch in str
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) { cnt++; }
    }
    return cnt;
}
let str = prompt("Enter a String");
let output = "";//this is the string that will be printed in the output
str = str.toLowerCase();// to convert string to lower case
let count = 0;
for (let i = 97; i <= 122; i++) {
    let ch = String.fromCharCode(i);//this function converts ASCII value to string
    let freq = charFreq(str, ch);
    if (freq > 0) {
        count++;//this variable counts the number of unique letters 
        output += ch + ": " + freq + ", ";
    }
}
output = output.substring(0, output.length - 2);
output = `${count}\n${output}`;
console.log(output);