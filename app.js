// chapter38 - 42

// q1
// function power(a, b) {
//     /**
//      * Calculate the value of a raised to b.
//      *
//      * @param {number} a The base number.
//      * @param {number} b The exponent.
//      * @return {number} The result of a raised to b.
//      */
//     var result = 1;
//     for (var i = 0; i < Math.abs(b); i++) {
//       result *= a;
//     }
//     if (b < 0) {
//       return 1 / result;
//     } else {
//       return result;
//     }
//   }


// q2
// function isLeapYear(year) {
//   /**
//    * Determine whether a year is a leap year or not.
//    *
//    * @param {number} year The year to check.
//    * @return {boolean} True if the year is a leap year, false otherwise.
//    */
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// q3
// function calculateS(a, b, c) {
//     /**
//      * Calculate the semi-perimeter S of a triangle.
//      *
//      * @return {number} The semi-perimeter S.
//      */
//     return (a + b + c) / 2;
//   }
//   function calculateArea(a, b, c) {
//     /**
//      * Calculate the area of a triangle.
//      *
//      * @return {number} The area of the triangle.
//      */
//     const S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   }

// q4
// function calculateAverage(marks1, marks2, marks3) {
//     /**
//      * Calculate the average of three marks.
//      *
//      * @return {number} The average of the three marks.
//      */
//     return (marks1 + marks2 + marks3) / 3;
//   }
//   function calculatePercentage(marks1, marks2, marks3) {
//     /**
//      * Calculate the percentage of three marks.
//      *
//      * @return {number} The percentage of the three marks.
//      */
//     const totalMarks = 300; // Assuming each subject has 100 marks
//     const totalObtained = marks1 + marks2 + marks3;
//     return (totalObtained / totalMarks) * 100;
//   }

// q5
// function customIndexOf(string, char) {
//     /**
//      * Custom function to find the index of a character in a string.
//      *
//      * @param {string} string The input string.
//      * @param {string} char The character to search for.
//      * @return {number} The index of the character, or -1 if not found.
//      */
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i;
//       }
//     }
//     return -1; // Return -1 if the character is not found
//   }

// q6
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');
//   }

// q7
// function countVowelPairs(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//       const char1 = text[i].toLowerCase();
//       const char2 = text[i + 1].toLowerCase();
//       switch (true) {
//         case (char1 === 'a' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
//         case (char1 === 'e' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
//         case (char1 === 'i' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
//         case (char1 === 'o' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
//         case (char1 === 'u' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
//           count++;
//           break;
//       }
//     }
//     return count;
//   }

// q8
// // Function to convert kilometers to meters
// function kmToMeters(km) {
//     return km * 1000;
//   }
  
//   // Function to convert kilometers to feet
//   function kmToFeet(km) {
//     return km * 3280.84;
//   }
  
//   // Function to convert kilometers to inches
//   function kmToInches(km) {
//     return km * 39370.1;
//   }
  
//   // Function to convert kilometers to centimeters
//   function kmToCentimeters(km) {
//     return km * 100000;
//   }
  
// q9
// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked <= 40) {
//       return 0; // No overtime pay if hours worked is less than or equal to 40
//     } else {
//       const overtimeHours = hoursWorked - 40;
//       const overtimePay = overtimeHours * 12.00;
//       return overtimePay;
//     }
//   }
  
//   // Example usage:
//   const hoursWorked = 45; // Input hours worked by the employee
//   const overtimePay = calculateOvertimePay(hoursWorked);
//   console.log(`Overtime pay for ${hoursWorked} hours worked is Rs. ${overtimePay}`);

// q10
// function calculateCurrencyNotes(amount) {
//     let notes = {
//       100: 0,
//       50: 0,
//       10: 0
//     };
  
//     // Calculate the number of 100 denomination notes
//     notes[100] = Math.floor(amount / 100);
//     amount = amount % 100;
  
//     // Calculate the number of 50 denomination notes
//     notes[50] = Math.floor(amount / 50);
//     amount = amount % 50;
  
//     // Calculate the number of 10 denomination notes
//     notes[10] = Math.floor(amount / 10);
  
//     return notes;
//   }
  
//   // Example usage:
//   const amount = 235; // Input amount to be withdrawn
//   const notes = calculateCurrencyNotes(amount);
//   console.log(`No of Hundred Notes: ${notes[100]}`);
//   console.log(`No of Fifty Notes: ${notes[50]}`);
//   console.log(`No of Ten Notes: ${notes[10]}`);