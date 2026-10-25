// function scopinng()
// {
//     let x=2
//     var y=3
//     const z=4
//     console.log('inside', x,y,z);

//     if(true)
//     {
//         var a=9
//         console.log('inside block', x);
//     }
    
// }
// scopinng()
//. Declare a *global variable* named genderType with value "female"
var genderType="male"
function printGender() {
    let color="brown"
    if (genderType.startsWith("female")) {
        var age = 30 
        let color = "pink" 
        console.log(color);
        
        
    }
    // Outside the if-block but inside the function, print the value of age.
         console.log(age);
   
}
printGender() 
console.log(genderType);
