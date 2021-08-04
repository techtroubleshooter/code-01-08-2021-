
  let persons = [
    {
        gender: "Male",
        heightCm: "171",
        weightKg: "96"

    },
    {
       gender: "Male",
       heightCm: "161",
       weightKg: "85"
    },
    {
        gender: "Male",
        heightCm: "180",
        weightKg: "77"
    },
    {
         gender: "Female",
         heightCm: "166",
         weightKg: "62"
    },
    {
         gender: "Female",
         heightCm: "150",
         weightKg: "70"
    },
    {
         gender: "Female",
         heightCm: "167",
         weightKg: "82"
    }
  ];
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(persons[0]);
  generateTableHead(table, data);
  generateTable(table, persons);
  
  