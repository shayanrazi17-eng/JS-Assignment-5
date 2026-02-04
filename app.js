// Chapter 21-25
// 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// console.log(`${fullName} Welcome`)


// 2
// var mobile = prompt("Enter your favorite mobile phone model");
// var mobileLenght = mobile.length;
// document.writeln(`My favorite phone is: ${mobile} <br>
//     Lenght of string: ${mobileLenght}`)


// 3
// var country = "Pakistani";
// document.writeln(`String: ${country} <br>
//     Index of "n": ${country.indexOf("n")}`)


// 4
// var word = "Hello World";
// document.writeln(`String: ${word} <br>
//     Index of "n": ${word.lastIndexOf("l")}`)


// 5
// var country = "Pakistani";
// var indexx = 3;
// document.writeln(`String: ${country} <br>
//     Character at index ${indexx}: ${country.charAt(indexx)}`)


// 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" " + lastName);
// console.log(`${fullName} Welcome`)


// 7
// var city = "Hyderabad";
// var rlt = city.replace("Hyder", "Islam");
// document.writeln(rlt)


// 8
// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var rlt = message.replaceAll("and", "&");
// document.writeln(rlt)


// 9
// var num1 = 472;
// document.writeln(`Value: ${num1} <br>
//     Type: ${typeof(num1.toString())} <br>
//     Value: ${num1} <br>
//     Type: ${typeof(num1)}`)


// 10
// var fruit = prompt("Enter word");
// var uC = fruit.toUpperCase();
// document.writeln(`User input: ${fruit} <br>
//     UPPER CASE: ${uC}`)


// 11
// var word = prompt("Enter word");
// var fst = word.slice(0, 1).toUpperCase();
// var snd = word.slice(1).toLowerCase();
// var rlt = fst + snd;
// document.writeln(`User input: ${word} <br>
//    Title case: ${rlt}`)


// 12
// var num = 35.36;
// var result = num.toString().replace(".", "");
// document.write(`Number: ${num} <br>
//     Result: ${result}`);


// 13
// var username = prompt("Enter your username:");
// var matchFound = true;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);

//     if (charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64) {
//         matchFound = false;
//         break;
//     }
// }

// if (matchFound == false) {
//     alert(`Please enter a valid username`);
// } else {
//     alert(`Username accepted: ${username}`);
// }


// 14
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Enter item");
// var a = user.slice(0).toLowerCase();
// var matchFound = false;

// for (var i = 0; i < bakery.length; i++) {
//     if (a == bakery[i]) {
//         matchFound = true
//         document.writeln(`${a} is available at index ${bakery.indexOf(a)}`)
//         break;
//     }
// }

// if(matchFound == false){
// document.writeln(`We are sorry. ${a} is not available in our bakery`)
// }


// 15
// var password = prompt("Enter your password:");
//     var hasAlphabet = false;
//     var hasNumber = false;

//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//     }

//     else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         alert("Password should not start with a number.");
//     }

//     else {
//         for (var i = 0; i < password.length; i++) {
//             var code = password.charCodeAt(i);

//             if (code >= 97 && code <= 122) {
//                 hasAlphabet = true;
//             }
//             else if (code >= 65 && code <= 90) {
//                 hasAlphabet = true;
//             }
//             else if (code >= 48 && code <= 57) {
//                 hasNumber = true;
//             }
//         }

//         if (hasAlphabet && hasNumber) {
//             document.writeln("✅ Password is valid");
//         } else {
//             alert("Password must contain both alphabets and numbers.");
//         }
//     }


// 16
// var university = "University of Karachi";

//     var arr = university.split("");

//    for (var i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + "<br>");
// }


// 17
// var input = prompt("Enter text");
// var lastChar = input.charAt(input.length - 1);
// document.writeln(`User input: ${input} <br>
//     Last character of input: ${lastChar}`)


// 18
//  var str = "The quick brown fox jumps over the lazy dog";
//     var count = 0;

//     str = str.toLowerCase();

//     var words = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         if (words[i] === "the") {
//             count++;
//         }
//     }

//     document.write(`Text: ${str} <br>
//         There are ${count} occurance(s) of word 'the' `);



// --------------------------------------------------------------------
// Chapter 26-30
// 1




