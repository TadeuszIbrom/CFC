{
  let equivalent;
  const equivalentCalculitng = () => {
    const inputfocalElement = document.querySelector(".js-focalLenght");
    const sensorChecked = document.querySelector(".js-sensorSize:checked");
    let sensorCropFactor;
    const sensorBiggerthenFF = () => inputfocalElement.value / sensorCropFactor;
    const sensorsmallerThenFF = () => inputfocalElement.value * sensorCropFactor;
    if (sensorChecked) {
      switch (sensorChecked.value) {
        case "medium6/6":
          sensorCropFactor = 2;
          equivalent = sensorBiggerthenFF()
          sensorSize = ("średniego formatu 6x6 cala")
          break;
        case "medium6/4":
          sensorCropFactor = 1.7;
          equivalent = sensorBiggerthenFF()
          sensorSize = ("średniego formatu 6x4 cala")
          break;
        case "apsc":
          sensorCropFactor = 1.5;
          equivalent = sensorsmallerThenFF()
          sensorSize = ("APSC")
          break;
        case "aps-h":
          sensorCropFactor = 1.6;
          equivalent = sensorsmallerThenFF()
          sensorSize = ("APSH")
          break;
        case "3/4":
          sensorCropFactor = 2;
          equivalent = sensorsmallerThenFF()
          sensorSize = ("mikro 4/3")
          break;
      }
    }
    return equivalent;
  }
  const displayResult = () => {
    const hiddenParagraphElement = document.querySelector(".js-hiddenParagraph");
    const focalLenghtResult = document.querySelector(".js-focalLenghtResult");
    const focalLenghtElement = document.querySelector(".js-focalLenght");
    const equivalentResult = document.querySelector(".js-quivalentResult")
    const sensorSizeResult = document.querySelector(".js-sensorSizeResult")
    sensorSizeResult.innerHTML = `<strong> ${sensorSize} <strong>`;
    focalLenghtResult.innerHTML = `<strong> ${Math.round(focalLenghtElement.value)}  mm <strong>`;
    equivalentResult.innerHTML = `<strong>${Math.round(equivalent)} mm</strong>`;
    hiddenParagraphElement.classList.remove("hiddenParagraph");
  };
  const init = () => {
    const formElement = document.querySelector(".js-formElement");
    formElement.addEventListener("input", () => {
      equivalentCalculitng();
      displayResult();
    });
  }
  init()
};