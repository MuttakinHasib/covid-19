class COVID {
  constructor(city) {
    this.city = city;
  }

  async corona() {
    const res = await fetch("https://coronavirus-19-api.herokuapp.com/all");
    // const resCountry = await fetch(
    //   `https://covid19.mathdro.id/api/countries/${this.city}`
    // );
    const global = await res.json();
    // const country = await resCountry.json();
    return {
      global
    };
  }
}
