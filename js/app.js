const covid = new COVID();
const ui = new UI();

document.addEventListener("DOMContentLoaded", corona);
function corona(results) {
  covid
    .corona()
    .then(result => {
      ui.coronaInfo(result);
    })
    .catch(err => console.log(err));
}
setInterval(corona, 5000);
