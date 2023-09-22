//                    chp 17-20
//1. Declare and initialize an empty multidimensional array. (Array of arrays)
//var arr=[[],[],[]];

// //2. Declare and initialize a multidimensional array representing the following matrix:
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr);


// //3. Write a program to print numeric counting from 1 to 10.
// var i;
// for(i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

// //4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var num=+prompt("Enetr a number to show its multiplication table");
// var length=+prompt("Enter length of multiplication table");
// var i;
// document.write("Multiplication table of "+num+"<br>Length "+length);
// for(i=1;i<=length;i++){
//     document.write("<br>"+num+" * "+i+" = "+num*i);
// }

// //5. Write a program to print items of the following array using for loop:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var i;
// for (i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
// for(i=0;i<fruits.length;i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

// //6. Generate the following series in your browser. See example output.
// //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// var i;
// for(i=1;i<=15;i++){
//     document.write(i+",");
// }
// //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// var i;
// for(i=10;i>=1;i--){
//     document.write(i+",");
// }
// //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// var i;
// for(i=0;i<=20;i++){
//     if((i%2)==0){
//         document.write(i+",");
//     }
// }
// //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// var i;
// for(i=0;i<=20;i++){
//     if((i%2)!=0){
//         document.write(i+",");
//     }
// }
// //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// var i;
// for(i=1;i<=20;i++){
//     if((i%2)==0){
//         document.write(i+"k, ");
//     }
// }

// //7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input=prompt("Welcome to ABD bakery. What do you want to order?");
// var i;
// var match=false;
// for(i=0;i<A.length;i++){
//     if(input==A[i]){
//         alert(A[i]+" is available at index "+i+" in our bakery");
//         match=true;
//     }
    
// }
// if(match==false){
//     alert("We are sorry. "+input+" is not available at our bakery");
// }

// //8. Write a program to identify the largest number in the given array.
// var A = [24, 53, 78, 91, 12];
// var largest=A[0];
// var i;
// for(i=0;i<A.length;i++){
//     if(A[i]>largest){
//         largest=A[i];
//     }
// }
// document.write("Array items: "+A+"<br>");
// document.write("The largest number is "+largest);

// //9. Write a program to identify the smallest number in the given array.
// var A = [24, 53, 78, 91, 12];
// var smallest=A[0];
// var i;
// for(i=0;i<A.length;i++){
//     if(A[i]<smallest){
//         smallest=A[i];
//     }
// }
// document.write("Array items: "+A+"<br>");
// document.write("The smallest number is "+smallest);

// //10. Write a program to print multiples of 5 ranging 1 to 100
// var i,j;
// for(i=1;i<=50;i++){
//    j=5*i;
//    if (j<=100){
//     document.write(j+",");
//    }
// }


///////////////////  chp 21-25
// //1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var fristName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");
// var fullName=fristName+" "+lastName;
// alert("Welcome " +fullName);

// //2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var mob=prompt("Enter your favourite mobile phone model");
// document.write("My favourite phone is: "+mob);
// document.write("<br>Lenght of string: "+ mob.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var let="Pakistani";
// var i;
// document.write("String; "+let);
// for(i=0;i<let.length;i++){
//    if(let[i]=="n"){
//    document.write("<br>Index of 'n': "+i );
//    }
// }

// //4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var let="Hello World";
// var lastIndex=let.lastIndexOf("l");
// document.write("String; "+let+"<br>");
// document.write("Last index of 'l': "+lastIndex);


// //5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var let="Pakistani";
// document.write("String: "+let+"<br>");
// document.write("Character at index 3: "+let.charAt(3));

// //6. Repeat Q1 using string concat() method.
// var fristName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");
// var greeting="Welcome";
// alert(greeting.concat(' ',fristName,' ',lastName,'!'));


// //7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var name1="Hyderabad";
// var name2=name1.slice(5);
// document.write("City: "+name1+"<br>");
// document.write("After replacement: Islam"+name2 );

// //8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var result=message.replaceAll('and','&');
// document.write(result);

// //9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var str="472";
// var num=parseInt(str);
// document.write("Value: "+str+"<br>Type: "+"String<br>");
// document.write("Value: "+num+"<br>Type: "+"Number");



// //10. Write a program that takes user input. Convert and show the input in capital letters.
// var inp=prompt("Enter any word");
// alert(inp.toUpperCase());

// //11. Write a program that takes user input. Convert and show the input in title case.
// var inp=prompt("Enter any word");
// var wordLow=inp.toLowerCase();
// var wordHigh=inp.toUpperCase();
// var tit=wordLow.slice(1);
// var tit2=wordHigh.slice(0,1);
// document.write("User input: "+inp+"<br>");
// document.write("Title case: "+tit2+tit);


// //12. Write a program that converts the variable num to string.
// var num=35.36;
// var str=num.toString();
// var result=str.replace('.','');
// document.write("Number: "+num+"<br>");
// document.write("String: "+result);
