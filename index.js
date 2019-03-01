
var path = require('path');
var data = require( path.resolve( __dirname, "./data.json" ));

var code = data.input;

const openDoor= (input)=>{
    var num=5;
    var key= [];
    // loop trough array to find each code sequence:
    for (var i =0; i< input.length; i++){
    // determine number outcome of each code:
    // loop through each letter in each string
        for(var j=0; j<input[i].length; j++){
            let dir= input[i][j];
            // if statements for each letter
            if (dir==="R"){
                if (num==3|num==6|num==9){
                    num;
                }
                else{num++;}
            }
            if (dir==="L"){
                if (num==1|num==4|num==7){
                    num;
                }
                else{num--;}
            }
            if (dir==="D"){
                if(num>6){
                    num;
                }
                else{num= num +3;}
            }
            if (dir==="U"){
                if (num>3){
                    num = num-3;
                }
                else{num;}
            }

        }
        // add each number to results and output
        key.push(num);
    }
    // output the result to the console and open the door!
    console.log("open the door with ", key);
};



openDoor(code);
