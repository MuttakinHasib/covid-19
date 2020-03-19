const covid = new COVID();
const ui = new UI();

document.addEventListener("DOMContentLoaded", corona);
setInterval(corona, 5000);
function corona(results) {
  covid
    .corona()
    .then(result => {
      ui.coronaInfo(result);
    })
    .catch(err => console.log(err));
}

// const graph = document.getElementById("graph").getContext("2d");
// let graph = new Chart(graph, {
//   type: "doughnut",
//   data: {
//     labels: ["Confirmed", "Deaths", "Recovered"],
//     datasets: [
//       {
//         label: "COVID",
//         data: [10, 20, 33]
//       }
//     ]
//   }
// });

