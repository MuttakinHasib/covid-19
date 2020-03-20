const select = document.getElementById("country");
const city = select.options[select.selectedIndex].value;

const covid = new COVID(city);
const ui = new UI();

document.addEventListener("DOMContentLoaded", corona);

select.addEventListener("change", e => {
  const select = document.getElementById("country");
  const city = select.options[select.selectedIndex].value;
  covid.changeLocation(city);
});

function corona(results) {
  covid
    .corona()
    .then(result => {
      ui.coronaGlobal(result.global);
      ui.coronaCountry(result.country);
    })
    .catch(err => {
      console.log(err);
      if (err.name === "SyntaxError") {
        ui.showAlert(
          "Something went Wrong !!! Please Select Another Country",
          "alert alert-danger"
        );
      }
    });
}
setInterval(corona, 5000);
