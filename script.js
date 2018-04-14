 //Step 1. Reverse A String//

 function reverseString(singleString) {
     return singleString.split(" ").reverse().join(" ")

 }
 var newElement = document.createElement("div");
 newElement.className = "stepOne";

 var newText = document.createTextNode(reverseString("This String needs to be reversed"));
 newElement.appendChild(newText);

 var destination = document.getElementById("stepOne");
 destination.appendChild(newElement);

 console.assert(reverseString("This String needs to be reversed") === "reversed be to needs String This");
 console.assert(reverseString("This needs to be flipped") === "flipped be to needs This");

 //Step 2. Reverse this string Reverse a sentence ("bob likes dogs" -> "dogs likes bob")//
 
 function reverseString(reverseThis) {
    return reverseThis.split(" ").reverse().join(" ")

}

 var newElement = document.createElement("div");
 newElement.className = "stepTwo";

 var newText = document.createTextNode(reverseString("bob likes dogs"));
 newElement.appendChild(newText);

 var destination = document.getElementById("stepTwo");
 destination.appendChild(newElement);

 console.assert(reverseString("bob likes dogs") === "dogs likes bob");
 console.assert(reverseString("Cats dont like Bob") === "Bob like dont Cats");

 //3. Find the minimum value in an array [30, 40, 78, 68, 98, 57, 100, 43, 25, 10] //
 var arr = [30, 40, 78, 68, 98, 57, 100, 43, 25, 10];
 function minNum(array){ 
    
     return Math.min(...array);
 
 }
 
 var newElement = document.createElement("div");
 newElement.className = "stepThree";

 var newText = document.createTextNode(minNum(arr));
 newElement.appendChild(newText);

 var destination = document.getElementById("stepThree");
 destination.appendChild(newElement);

 console.assert(minNum([11,22,33,34,56,88,99]) === 11);
 console.assert(minNum([34,45,65,78,99,3,43,21,900]) === 3);

 //4. Find the maximum value in an array [30, 40, 78, 68, 98, 57, 100, 43, 25, 10]//
 var arr = [30, 40, 78, 68, 98, 57, 100, 43, 25, 10];
 
function maxNum(array) {

    return Math.max(...array);
}
 
 var newElement = document.createElement("div");
 newElement.className = "stepFour";

 var newText = document.createTextNode(maxNum(arr));
 newElement.appendChild(newText);

 var destination = document.getElementById("stepFour");
 destination.appendChild(newElement);

 console.assert(maxNum([98,87,47,65,70,54,59,310,230,21]) === 310);
 console.assert(maxNum([980,870,470,650,700,540,590,3100,2300,210]) === 3100);

 // 5. Calculate a remainder (given a numerator and denominator) //
function remainder (a,b) {
    return a % b;
}
 var newElement = document.createElement("div");
 newElement.className = "stepFive";

 var newText = document.createTextNode(remainder(12 , 5));
 newElement.appendChild(newText);

 var destination = document.getElementById("stepFive");
 destination.appendChild(newElement);

 console.assert(remainder(13 , 5) === 3);
 console.assert(remainder(25 , 6) === 1);

 // 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7") //
 function distinctValues() {
     var string = "1 3 5 3 7 3 1 1 5";
     var newArray = string.split(" ")
     var singleNum = [];
     for (var i = 0; i < newArray.length; i++) {
         var num = newArray[i];
         if (singleNum && !singleNum.includes(num)) {
             singleNum.push(num);
         }
     }

     return singleNum.join(" ");
 }
 var newElement = document.createElement("div");
 newElement.className = "stepSix";

 var newText = document.createTextNode(distinctValues());
 newElement.appendChild(newText);

 var destination = document.getElementById("stepSix");
 destination.appendChild(newElement);
 console.log(distinctValues("1 3 5 3 7 3 1 1 5"));
 console.assert(distinctValues("1 3 5 3 7 3 1 1 5") === "1 3 5 7");

 // 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)") //
 function distinctValues() {
    var string = "1 3 5 3 7 3 1 1 5";
    var newArray = string.split(" ")
    var singleNum = [];
    for (var i = 0; i < newArray.length; i++) {
        var num = newArray[i];
        if (singleNum && !singleNum.includes(num)) {
            singleNum.push(num);
            
        }
    }

    return singleNum.join(" ");
}
function valuesCount() {
    var string = "1 3 5 3 7 3 1 1 5";
    var newArray = string.split(" ")
    var singleNum = [];
    var count = {};
    for (var i = 0; i < newArray.length; i++) {
        var num = newArray[i];
        if (singleNum && !singleNum.includes(num)) {
            singleNum.push(num);
        } else {
            count[i]++
        }
    }

    return count.join(" ");
}
console.log()

var newElement = document.createElement("div");
newElement.className = "stepSeven";

var newText = document.createTextNode(valuesCount());
newElement.appendChild(newText);

var destination = document.getElementById("stepSeven");
destination.appendChild(newElement);
