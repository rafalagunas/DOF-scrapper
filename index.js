const scrapper = require("table-scraper");
const fs = require("fs");

scrapper
  .get(
    "https://www.dof.gob.mx/nota_detalle.php?codigo=5584830&fecha=27/01/2020"
  )
  .then((data) => {
    //console.log(data);
    fs.writeFile("RAW_data.json", JSON.stringify(data), function (err, res) {
      if (err) {
        console.log(err);
      }
    });
    return data;
  })
  .then((data) => {
    let arrayOne = data[5];

    let concat = arrayOne
      .concat(data[7])
      .concat(data[8])
      .concat(data[9])
      .concat(data[10])
      .concat(data[11])
      .concat(data[12])
      .concat(data[13])
      .concat(data[14])
      .concat(data[15])
      .concat(data[16])
      .concat(data[17])
      .concat(data[18])
      .concat(data[19])
      .concat(data[20])
      .concat(data[21]);
    console.log(concat);

    fs.writeFile(
      "CLEAN_DATA.json",
      JSON.stringify(concat),
      function (err, res) {
        if (err) {
          console.log(err);
        }
      }
    );

    return concat;
  });
