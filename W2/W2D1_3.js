// Given a string s consisting of words and spaces, return the length of the last word in the string. 
// Example 1: 
// Input: s = "Hello World" 
// Output: 5 

// let s = "Hello World"
// let arr=s.split(" ");
// console.log(arr);

// let lastword=arr[arr.length-1];
// console.log(lastword);

// let lengthh=lastword.length
// console.log(lengthh);

// console.log("question2");

// Example 2:  
// Input: s = "   fly me   to   the moon  " 
// Output: 4 
// Explanation: The last word is "moon" with length 4.

// let t = "   fly me   to   the moon  " 
// let short=t.trim().split(/\s+/)
// console.log(short);
// let lastword2=short[short.length-1];
// console.log(lastword2);
// console.log(lastword2.length);

// Example 3:  
// Write a function to check if two strings are anagrams. 
//  Input: isAnagram('listen', 'silent') 
//  Output: true 
//  Input: isAnagram('hello', 'world') 


function isAnagram(x,y) {
const sort1 = x.split('').sort().join('');
  const sort2 = y.split('').sort().join('');
    if (sort1===sort2) {
        console.log("isanagram",sort1,sort2);
        
    } else {
         console.log("not isanagram",sort1,sort2)
    }
    
} 
//isAnagram("silent","listen")
isAnagram("hello","world")

 