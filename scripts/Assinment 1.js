

// TASK 2 JAVASCRIPT

// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


// TASK 2 Answer



// var familyMembers = +prompt("Enter The Total Number Of Your Family Members");

// var chooseFitrMethod = alert("Choose The Fitrah Method Please Select Any One Option");

// var selectedMethodPrice = +prompt( "Wheat 250,    Raisins 1000,    Ajwa-Dates 5000,    Barley-Jau 500");

// if (selectedMethodPrice == 250) { console.log("yes you can pay fitrah on wheat");
//     alert("your fitrah amount is" + familyMembers * 250);
// } else if (selectedMethodPrice == 1000) { console.log("yes you can pay fitrah on raisins");
//     alert("your fitrah amount is" + familyMembers * 1000);  
// }else if (selectedMethodPrice == 5000) { console.log("yes you can pay fitrah on Ajwa-Dates");
//     alert("your fitrah amount is " + familyMembers * 5000);
// }else if (selectedMethodPrice == 500) { console.log("yes you can pay fitrah on Barley-Jau");
//        alert("your fitrah amount is " + familyMembers * 500);    
// }else {
//   {}  alert("Your Selected Option Is Not Valid");
// }




// TASK 3 JAVASCRIPT

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// TASK 3 Answer


// var secretNumber = 5; 

// var userGuess = +prompt (" Hello Lets play Please Guess The Secret Number");
// if (userGuess == secretNumber) { alert("Congratulation You Guess The Secret Number");
// }else if (userGuess > secretNumber) { alert("Your Guess Value Is High Please Guess Again");    
// }else if (userGuess < secretNumber) { alert("Your Guess Value Is Low Guess Again");
// }




// task 4 JAVASCRIPT


// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case)


// TASK 4 Answer


// var user = prompt("Enter a Name");

// var newuser = user.slice(1);

// console.log (user[0].toUpperCase() + newuser.toLowerCase())



// TASK 8 JAVASCRIP


// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)


// TASK 8 Answer


// var worldcupsquad = ['Ali','usama','tayyab','umair','zain','ayyan','shahmeer','waseem','ishaq','fizan','hasnain','misbah','asad','zaheer','shahid']

// console.log(worldcupsquad);

// var elevenplayers = worldcupsquad.slice(1,12);

// console.log(elevenplayers);



// task 6 JAVASCRIPT


// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// TASK 6 Answer



// var cookies = ['cafe','sooper','cocunut','chocochips','zeeraplus','rite','candy']

// console.log(cookies)

// var user_Selection = +prompt("0. Cafe,1. Sooper,2. Cocunut,3. Chocochips,4. Zeeraplus,5. Rite,6. Candy","Which Cookies You Want please Enter The Cookies Number")

// console.log("your Selected Cookies")

// console.log(cookies [user_Selection])

// console.log("Remaining Cookies In Our Bakeri")

// cookies.splice([user_Selection],1)

// console.log([cookies])

// var removeSelectedItem = ([user_Selection])

// // console.log(removeSelectedItem)

// console.log("Total Numbers of Remaining Items In Our Bakeri ")

// var items = cookies

// console.log(items. length)



// TASK 5 JAVASCRIPT


// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


// TASK 5 Answer


// var contactName = []

// var contactNumber = []

// for ( var i =0 ; i<3 ; i++) {



//  var cName = prompt("Please Enter Your Good Name");

//  var cNumber= +prompt("Please Enter Your Contact Number");

// contactName.push(cName);

// contactNumber.push(cNumber);

// }

// for (var i =0; i < contactNumber.length ; i++) {

//      console.log( [i+1],contactName[i], contactNumber[i]);
    
// }

// TASK 7 JAVASCRIPT


// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// TASK 7 Answer

// var nationality = prompt("Enter your Nationality")

// var gender = prompt("Enter Your Gender")

// var age = + prompt("Enter your Age")

// if(nationality == "pakistani"){

//     console.log("you are eligible to vote")

// }else if(nationality == "indian") {

//   console.log("you are not eligible to vote in pakistan")
// }
//  if (age <18) {

//     console.log("your are underage")

// }else if (age >=18) {

//     console.log ("yes you are eligible for vote please go to voting area")
    
// }
// var mStatus = prompt("Are You married Or Not")

// if (mStatus === "married") {

//     console.log("you are married yes you can vote")
    
// }else {
//     console.log("you are unmarried and not eligible for vote")
// }


