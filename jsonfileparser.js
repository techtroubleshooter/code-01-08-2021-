// include file system module
var fs = require('fs');
 
// read file sample.json file
fs.readFile('sample.json',
    // callback function that is called when reading file is done
    function(err, data) {       
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
 
        // access elements
        console.log(jsonParsed.persons[0].gender + " whose height in cm is " + jsonParsed.persons[0].heightCm + " and weight in Kgs is " + jsonParsed.persons[0].weightKg);
        console.log(jsonParsed.persons[1].gender + " whose height in cm is " + jsonParsed.persons[1].heightCm + " and weight in Kgs is " + jsonParsed.persons[1].weightKg);
        console.log(jsonParsed.persons[2].gender + " whose height in cm is " + jsonParsed.persons[2].heightCm + " and weight in Kgs is " + jsonParsed.persons[2].weightKg);
        console.log(jsonParsed.persons[3].gender + " whose height in cm is " + jsonParsed.persons[3].heightCm + " and weight in Kgs is " + jsonParsed.persons[3].weightKg); 
        console.log(jsonParsed.persons[4].gender + " whose height in cm is " + jsonParsed.persons[4].heightCm + " and weight in Kgs is " + jsonParsed.persons[4].weightKg); 
        console.log(jsonParsed.persons[5].gender + " whose height in cm is " + jsonParsed.persons[5].heightCm + " and weight in Kgs is " + jsonParsed.persons[5].weightKg);

        var personHeightMtr = [];

        var personWeightKg = [];

        var arrBMI = [];

        var countOverWt= 0;

        var bmiCategory = [];

        var healthRisk = [];

        var finalResult = [];

       
        jsonParsed.persons.forEach(function(person) {
            var personHeight = (person.heightCm)/100 ;

            var personWeight = person.weightKg ;
            
            personHeightMtr.push(personHeight);

            personWeightKg.push(personWeight); 
                       
        });

        console.log(personHeightMtr);

        console.log(personWeightKg);   

        for (var i = 0; i < personWeightKg.length; i++) {
            arrBMI[i] = (personWeightKg[i] / (personHeightMtr[i]*personHeightMtr[i])).toFixed(1) ;
           
        }

         console.log(arrBMI);

         for (i=0; i< arrBMI.length; i++) {
            if(arrBMI[i]<='18.4'){
                console.log("The person is UnderWeight and is suffering from Malnurition Health Risk!");
                    bmiCategory[i] = "The person is UnderWeight";
                    healthRisk[i] = "The person is suffering from Malnurition Health Risk";
            }
            else if(arrBMI[i]>='18.5'  && arrBMI[i]<='24.9'){
                console.log("The person is Normal and is at Low Risk!");
                bmiCategory[i] = "The person is Normal";
                healthRisk[i] = "The person is at Low Risk";
            }
            else if(arrBMI[i]>='25.0'  && arrBMI[i]<='29.9'){
                console.log("The person is OverWeight and is suffering from Enhanced Health Risk!");
                bmiCategory[i] = "The person is OverWeight";
                healthRisk[i] = "The person is suffering from Enhanced Health Risk";
            }
            else if(arrBMI[i]>='30.0'  && arrBMI[i]<='34.9'){
                console.log("The person is Moderately Obese and is suffering from Medium Health Risk!");
                bmiCategory[i] = "The person is Moderately Obese";
                healthRisk[i] = "The person is suffering from Medium Health Risk";
            }
            else if(arrBMI[i]>='35.0'  && arrBMI[i]<='39.9'){
                console.log("The person is Severely Obese and is suffering from High Health Risk!");
                bmiCategory[i] = "The person is Severely Obese";
                healthRisk[i] = "The person is suffering from High Health Risk";
            }
            else if(arrBMI[i]>='40.0'){
                console.log("The person is Very Severely Obese and is suffering from Very High Health Risk!");
                bmiCategory[i] = "The person is Very Severely Obese";
                healthRisk[i] = "The person is suffering from Very High Health Risk";
            }
            else {
                console.log("Enjoy your Weekend!");
            }

            console.log(bmiCategory);
            console.log(healthRisk);
           
                 
         }

         for (i=0; i< arrBMI.length; i++) {
            if(arrBMI[i]>='25.0'  && arrBMI[i]<='29.9'){
                countOverWt =  countOverWt+1;
            }     

         }
          
         console.log('Total No. of Overweight people in the group is ' +countOverWt);

        const mapArrays = (arrBMI, bmiCategory,healthRisk) => {
        const res = [];
        for(let i = 0; i < arrBMI.length; i++){
            res.push({
                arrBMI: arrBMI[i],
                bmiCategory: bmiCategory[i],
                healthRisk: healthRisk[i]
            });
        };
        return res;
        };

     finalResult = mapArrays(arrBMI, bmiCategory,healthRisk);

       console.log(finalResult);

  /*    function generateTableHead(table, datavalue) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of datavalue) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      function generateTable(table, datavalue) {
        for (let element of datavalue) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      }
      
      let table = document.querySelector("table");
      let datavalue = Object.keys(finalResult[0]);
      generateTableHead(table, datavalue);
      generateTable(table, finalResult);  */

      const customer = {
        name: "Newbie Co.",
        order_count: 0,
        address: "Po Box City",
    };
    
    const jsonString = JSON.stringify(finalResult);
    fs.writeFile('./bmiperson.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    
    

    });

    




