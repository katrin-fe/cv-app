function showInfopsychologist (event) {
  event.preventDefault();
  let psychologyText = document.querySelector("#show-information");
  psychologyText.innerHTML = "Konzipierung und Durchführung von Selektionsverfahren, Assessment-Center und Online- sowie Remote-Assessments, Konzipierung und Durchführung von Bewerbungstrainings zur Reintegration arbeitssuchender Fach- und Führungskräfte, Beratung hinsichtlich Qualität der psychologischen Diagnostik/Evaluationen, Eignungsabklärungen am IAM Institut für Angewandte Medienwissenschaften,Zusammenarbeit mit Hochschulen";
}

let psychologist = document.querySelector("#psychologist");
psychologist.addEventListener("click", showInfopsychologist);

function showInfoAuthor (event) {
  event.preventDefault();
  let authorText = document.querySelector("#show-information");
  authorText.innerHTML = "Assessment-Center: Wie Unternehmen einen guten Eindruck bei Bewerbern hinterlassen Daten + Fakten Swiss Assessment Moderne Personalauswahl. Renommierte Experten über Trends, neue Technologien, Chancen und Risiken in der Eignungsdiagnostik. People Analytics - Das Potential großer Datenmengen nutzen Frauenkarrieren im Einkauf Agilität in der Eignungsdiagnostik Perfekt ist langweilig Dem Stress an den Kragen - Ressourcen aktivieren mit dem Zürcher Ressourcen Modell";
}

let author = document.querySelector("#author");
author.addEventListener("click", showInfoAuthor);

function showInfoWebDeveloper (event) {
  event.preventDefault();
  let webDeveloperText = document.querySelector("#show-information");
  webDeveloperText.innerHTML = "W ebdeveloper-Text ebdeveebdeveebdeveebdeve ebdeveebdeveloper-Text ebdeveebdeveebdeveebdeve ebdeve";
}

let webdev = document.querySelector("#front-end-developer");
webdev.addEventListener("click", showInfoWebDeveloper);