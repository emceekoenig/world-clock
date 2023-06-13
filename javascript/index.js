function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTime = moment().tz("Australia/Sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="los-angeles">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>

        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
