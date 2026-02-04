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
// var num = parseFloat(prompt("Enter a positive floating point number:"));
// var roundVal = Math.round(num);
// var floorVal = Math.floor(num);
// var ceilVal = Math.ceil(num);
// document.writeln(`Number: ${num} <br>
//    round off value: ${roundVal} <br>
//    floor value: ${floorVal} <br>
//    ceil value: ${ceilVal} `)


// 2
// var num = parseFloat(prompt("Please enter a negative floating point number (e.g., -2.673):"));
// var roundValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.writeln(`Number: ${num} <br>
//    round off value: ${roundValue} <br>
//    floor value: ${floorValue} <br>
//    ceil value: ${ceilValue} `)


// 3
// var num = parseFloat(prompt("Enter a number to find its absolute value:"));
// var absValue = Math.abs(num);
// document.writeln(`
//     The absolute value of ${num} is ${absValue}`)


// 4
// var dice1 = Math.floor(Math.random() * 6) + 1;
// document.writeln(`Random dice value: ${dice1}
// `)


// 5
// var toss = Math.floor(Math.random() * 2) + 1;
// if(toss == 1){
//     document.writeln(`${toss} <br>
//     Random coin value: Heads`)
// }
// else{
//     document.writeln(`${toss} <br>
//     Random coin value: Tails`)
// }


// 6
// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.writeln(`random number between 1 
// and 100: ${randomNum}`)


// 7
// var weight = parseFloat(prompt("Enter your weight in kilograms:"));
// document.writeln(`The weight of user is ${weight} kilograms`)


// 8
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
// if (userGuess === secretNumber) {
//     alert(`Congratulations! You guessed the secret number.`);
//     document.writeln(`<h3>Winner!</h3> 
//         The secret number was: ${secretNumber}`);
// }
// else {
//     alert(`Try again! The secret number was ${secretNumber}`);
//     document.writeln(`Better luck next time!`);
// }



// --------------------------------------------------------------------
// Chapter 31-34
// 1
// var date = new Date();
// document.writeln(`${date}`)


// 2
// var date = new Date();
// var month = date.getMonth();
// var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
// alert(`Current month: ${monthNames[month]}`)


// 3
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var dayName = dayNames[theDay];
// var shortDay = dayName.slice(0, 3);
// alert(`Today is ${shortDay}`);


// 4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var dayName = dayNames[theDay];
// if(dayName == dayNames[0] || dayName == dayNames[6]){
//     document.writeln(`It’s Fun day`)
// }
// else{
//     document.writeln(`It’s ${dayName}`)
// }


// 5
// var now = new Date();
// var date = now.getDate();
// if(date < 16){
//     document.writeln(`First fifteen 
// days of the month`)
// }
// else{
//     document.writeln(`Last 
// days of the month`)
// }


// 6
// var date = new Date();
// var milliSince1970 = date.getTime();
// elapsedMinutes = (milliSince1970 / 1000) / 60;
// document.writeln(`${date} <br>
//    Elasped milliseconds since January 1, 1970: ${milliSince1970} <br>
//    Elasped minutes since January 1, 1970: ${elapsedMinutes}`)


// 7
// var date = new Date();
// var hr = date.getHours();
// if(hr < 12){
// document.writeln(`Its AM`)
// }
// else{
// document.writeln(`Its PM`)
// }


// 8
// var date = new Date("December 31, 2020" );
// document.writeln(date)


// 9
// var ramadanStart = new Date("Febuary 17, 2026");
// var firstRamadan = new Date("June 18, 2015");
// var diffInMs = ramadanStart.getTime() - firstRamadan.getTime();
// var daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
// alert(`${daysPassed} days passed since 1st Ramadan (March 1, 2025) `)


// 10
// var reference = new Date();
// var milliSecondsN = reference.getTime();
// var date2015 = new Date("January 1, 2015");
// var milliTill2015 = date2015.getTime();
// var diffInMs = milliSecondsN - milliTill2015;
// var secPassed = Math.floor(diffInMs / 1000);
// document.writeln(`Reference date: ${reference} <br>
//     ${secPassed} seconds had passed since beginning of 2015`)


// 11
// var currentDate = new Date();

// var currentHours = currentDate.getHours();

// var one = new Date();
// one.setHours(currentHours + 1)

// document.writeln(`Current date: ${currentDate} <br>
//     1 hour ahead, it will be: ${one}`);


// 12
// var currentDate = new Date();

// var currentYear = currentDate.getFullYear();

// var one = new Date();
// one.setFullYear(currentYear - 100)

// document.writeln(`Current date: ${currentDate} <br>
//     100 years back, it was ${one}`);


// 13
// var age = parseFloat(prompt("Enter your age:"));
// var now = new Date().getFullYear();
// var birthYear = now - age;
// document.writeln(`Your age is ${age} <br>
//     Your birth year is ${birthYear}`)


// 14
// var customerName = "Akshay";

// var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
// var month = new Date().getMonth();
// var cMonthName = monthNames[month];

// var noOfUnits = 410;

// var chargesPerUnit = 16;

// var netAmountPayable = noOfUnits * chargesPerUnit;

// var latePaymentSurcharge = 350;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.writeln(`

//     <h1> K-Electric bill </h1>
//     Customer Name: <b> ${customerName} </b> <br>
//     Month: <b> ${cMonthName} </b> <br>
//     Number of units: <b> ${noOfUnits} </b> <br>
//     Charges per unit: <b> ${chargesPerUnit} </b> 
//     <br> <br>
//     Net Amount Payable (within Due Date): <b> ${netAmountPayable} </b> <br>
//     Late Payment Surcharge: <b> ${latePaymentSurcharge} </b> <br>
//     Gross Amount Payable (after Due Date): <b> ${grossAmountPayable} </b> <br>  
    
//     `)



// -----------------------------------------------------
// I'm happy :)


