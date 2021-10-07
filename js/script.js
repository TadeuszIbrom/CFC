let formElement = document.querySelector(".js-formElement");
let focalLenghtElement = document.querySelector(".js-focalLenght");
let apertureElement = document.querySelector(".js-aperture");
let sensorResult = document.querySelector(".js-sensorResultElement");
let focalLenghtResult = document.querySelector(".js-focalLenghtResult");
let equivalentResult = document.querySelector(".js-quivalentResult");
let sensorSize = 0;
let equivalent = 0;
let hiddenParagraphElement = document.querySelector(".hiddenParagraph");

formElement.addEventListener("input", () => {
  const SensorElement = document.querySelector(".js-sensor:checked");
  if (SensorElement) {
    switch (SensorElement.value) {
      case "medium6/6":
        sensorSize = 2;
        equivalent = focalLenghtElement.value / sensorSize;
        sensorResult.innerHTML =
          "<strong>średniego formatu 6 na 6 cala</strong>";
        break;

      case "medium6/4":
        sensorSize = 1.7;
        equivalent = focalLenghtElement.value / sensorSize;
        sensorResult.innerHTML =
          "<strong>średniego formatu 6 na 4 cala</strong>";
        break;

      case "apsc":
        sensorSize = 1.5;
        equivalent = focalLenghtElement.value * sensorSize;
        sensorResult.innerHTML = "<strong>APSC</strong>";
        break;

      case "aps-h":
        sensorSize = 1.6;
        equivalent = focalLenghtElement.value * sensorSize;
        sensorResult.innerHTML = "<strong>APSH</strong>";
        break;

      case "3/4":
        sensorSize = 2;
        equivalent = focalLenghtElement.value * sensorSize;
        sensorResult.innerHTML = "<strong>mikro 4/3 </strong>";
        break;
    }
  } else {
    console.log("Żadna opcja nie jest zaznaczona");
  }
  focalLenghtResult.innerHTML = `<strong> ${Math.round(
    focalLenghtElement.value
  )}  mm <strong>`;
  equivalentResult.innerHTML = `<strong>${Math.round(equivalent)} mm</strong>`;
  hiddenParagraphElement.classList.remove("hiddenParagraph");
});