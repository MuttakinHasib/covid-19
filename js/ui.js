// const chart = new Chart({

// })
class UI {
  constructor() {
    this.globalConfirmed = document.getElementById("confirmed");
    this.globalDeaths = document.getElementById("deaths");
    this.globalRecovered = document.getElementById("recovered");
    this.ctx = document.getElementById("myChart").getContext("2d");
  }

  coronaInfo(corona) {
    console.log(corona);

    this.globalConfirmed.innerText = corona.global.cases;
    this.globalDeaths.innerText = corona.global.deaths;
    this.globalRecovered.innerText = corona.global.recovered;
    const chart = new Chart(this.ctx, {
      labels: "COVID - 19",
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: ["Confirmed", "Death", "Recovered"],
        datasets: [
          {
            label: "COVID",
            backgroundColor: [
              "rgb(112, 111, 211)",
              "rgb(255, 99, 132)",
              "rgb(29, 209, 161)"
            ],
            borderColor: "#fff",
            data: [
              corona.global.cases,
              corona.global.deaths,
              corona.global.recovered
            ]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  }
}
