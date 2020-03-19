class COVID {
  constructor(city) {
    this.city = city;
  }

  async corona() {
    const res = await fetch("https://corona.lmao.ninja/all");
    const resCountry = await fetch(
      `https://corona.lmao.ninja/countries/${this.city}`
    );
    const global = await res.json();
    const country = await resCountry.json();
    return {
      global,
      country
    };
  }
  changeLocation(city){
    this.city = city;
  }
}
