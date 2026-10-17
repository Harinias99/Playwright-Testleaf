// create two functions : launchBrowser, runTests where,


//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value


function launchBrowser()
 {
    if (launchBrowser=="chrome")
         {
        console.log("its chrome");
        
        } else 
            {

        console.log("its random browser");
            }
    
}
launchBrowser("edge")

//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("its smoke");
            
            break;

        case "sanity":
            console.log("its sanity");
            break;
        
        case "regression":
            console.log("its regression");
            break;

        default:
             console.log("its smoke");
            break;
    }
    
}
(runTests("sanity"))