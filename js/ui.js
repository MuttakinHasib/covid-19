class UI {
  constructor() {
    this.globalConfirmed = document.getElementById('confirmed');
    this.globalDeaths = document.getElementById('deaths');
    this.globalRecovered = document.getElementById('recovered');
    this.localCountry = document.getElementById('local-country');
    this.countryName = document.getElementById('countryName');
    this.globalGraph = document.getElementById('myChart').getContext('2d');
  }

  coronaGlobal(global) {
    this.globalConfirmed.innerText = global.cases;
    this.globalDeaths.innerText = global.deaths;
    this.globalRecovered.innerText = global.recovered;
    const chart = new Chart(this.globalGraph, {
      labels: 'COVID - 19',
      // The type of chart we want to create
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ['Confirmed', 'Death', 'Recovered'],
        datasets: [
          {
            label: 'COVID',
            backgroundColor: [
              'rgb(112, 111, 211)',
              'rgb(255, 99, 132)',
              'rgb(29, 209, 161)',
            ],
            borderColor: '#fff',
            data: [global.cases, global.deaths, global.recovered],
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }
  coronaCountry(country) {
    this.countryName.innerHTML = ` <img src='${country.countryInfo.flag}' style="width: 35px;" /> ${country.country}`;
    this.localCountry.innerHTML = `
          <div class="row mt-4">
              <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded confirmed">
                      <h4>Confirmed</h4>
                      <p id="confirmed" class="mb-0">${country.cases}</p>
                  </div>
              </div>
              <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded deaths">
                      <h4>Total Deaths</h4>
                      <p id="deaths" class="mb-0">${country.deaths}</p>
                  </div>
              </div>
              <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded recovered">
                      <h4>Recovered</h4>
                      <p id="recovered" class="mb-0">${country.recovered}</p>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-12 my-4 text-center"><h2>Latest News</h2></div>
            <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded t-cases">
                      <h4>New Cases</h4>
                      <p id="t-cases" class="mb-0">${country.todayCases}</p>
                  </div>
              </div>
              <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded t-deaths">
                      <h4>New Deaths</h4>
                      <p id="t-deaths" class="mb-0">${country.todayDeaths}</p>
                  </div>
              </div>
              <div class="col-md-4 my-3">
                  <div class="shadow p-3 rounded critical">
                      <h4>Critical</h4>
                      <p id="deaths" class="mb-0">${country.critical}</p>
                  </div>
              </div>
          </div>

    `;
    // const localGraph = document.getElementById("myCountryChart").getContext("2d");

    // const chart = new Chart(localGraph, {
    //   labels: "COVID - 19",
    //   // The type of chart we want to create
    //   type: "bar",

    //   // The data for our dataset
    //   data: {
    //     labels: ["Confirmed", "Death", "Recovered"],
    //     datasets: [
    //       {
    //         label: "COVID",
    //         backgroundColor: [
    //           "rgb(112, 111, 211)",
    //           "rgb(255, 99, 132)",
    //           "rgb(29, 209, 161)"
    //         ],
    //         borderColor: "#fff",
    //         data: [country.cases, country.deaths, country.recovered]
    //       }
    //     ]
    //   },

    //   // Configuration options go here
    //   options: {}
    // });
  }
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.ui_container');
    const localCountryArea = document.querySelector('#local-country');
    container.insertBefore(div, localCountryArea);

    setTimeout(() => this.clearAlert(), 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
