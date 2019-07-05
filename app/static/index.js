let todayDateElt = document.querySelector("#todayDate")
let todaysDate = new Date();
todayDateElt.innerHTML = `${todaysDate.toDateString()}`