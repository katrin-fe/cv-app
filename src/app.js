function showInfoFreelancer (event) {
  event.preventDefault();
  let freelanceText = document.querySelector("#show-information");
  freelanceText.innerHTML = "Seit 2015: Eignungsdiagnostik, Konzipierung, Durchführung und Qualitätssicherung von Selektionsverfahren, Assessment-Center und Online- sowie Remote-Assessments, Eignungsabklärungen am IAM Institut für Angewandte Medienwissenschaften,Zusammenarbeit mit Hochschulen";
}

let freelance = document.querySelector("#psychologist");
freelance.addEventListener("click", showInfoFreelancer);

function showInfoKadertraining (event) {
  event.preventDefault();
  let networkText = document.querySelector("#show-information");
  networkText.innerHTML = "Konzipierung und Durchführung von Bewerbungstrainings zur Reintegration arbeitssuchender Fach- und Führungskräfte, Beratung hinsichtlich Qualität der psychologischen Diagnostik/Evaluationen";
}

let kadertraining = document.querySelector("#kadertraining");
kadertraining.addEventListener("click", showInfoKadertraining);

function showInfoConsultant (event) {
  event.preventDefault();
  let consultantText = document.querySelector("#show-information");
  consultantText.innerHTML = "Unterrichts- und Schulentwicklung, Recherchen und Konzeptione, Aufbau und Digitalisierung interne Kommunikation, Redaktionsmitglied Stadtspiegel, Beratungstätigkeiten hinsichtlich der Optimierung von Bewerbungsprozessen";
}

let consultant = document.querySelector("#consultant");
consultant.addEventListener("click", showInfoConsultant);

function showInfoStudentjob (event) {
  event.preventDefault();
  let studentText = document.querySelector("#show-information");
  studentText.innerHTML = "ab 2014: Unternehmensentwicklung, Buchhaltung, Eventorganisation, Messen und Mitarbeiterveranstaltungen, Newslettererstellung";
}

let student = document.querySelector("#studentjob");
student.addEventListener("click", showInfoStudentjob);

function showInfoDigibil (event) {
  event.preventDefault();
  let digibilText = document.querySelector("#show-information-edu");
  digibilText.innerHTML = "sakdfjhaklsd hfakjsfh lauskdh falisk hfklsh fklasd fkasd";
}

let digibil = document.querySelector("#digibil");
digibil.addEventListener("click", showInfoDigibil);

function showInfoCoding (event) {
  event.preventDefault();
  let codingText = document.querySelector("#show-information-edu");
  codingText.innerHTML = "Coding <3 text deveebdeveebdeveebdeve ebdeveebdeveloper-Text ebdeveebdeveebdeveebdeve ebdeve";
}

let coding = document.querySelector("#coding");
coding.addEventListener("click", showInfoCoding);

function showInfoMaster (event) {
  event.preventDefault();
  let masterText = document.querySelector("#show-information-edu");
  masterText.innerHTML = "2015-2017: MSc Angewandte Psychologie ZFH mit dem Schwerpunkt Arbeits- und Organisationspsychologie, ZHAW Zürcher Hochschule für Angewandte Wissenschaften 2012 - 2015: BSc Angewandte Psychologie mit Inhalten der Entwicklungspsychologie und klinischen Psychologie, ZHAW Zürcher Hochschule für Angewandte Wissenschaften"
}

let master = document.querySelector("#master");
master.addEventListener("click", showInfoMaster);

function showInfoTrainer (event) {
  event.preventDefault();
  let trainerText = document.querySelector("#show-information-edu");
  trainerText.innerHTML = "Trainertext bdeveebdeveebdeveebdeve ebdeve";
}

let trainer = document.querySelector("#trainer");
trainer.addEventListener("click", showInfoTrainer);

function showInfoCoach(event) {
  event.preventDefault();
  let coachText = document.querySelector("#show-information-edu");
  coachText.innerHTML = "Coachtext r-Text ebdeveebdeveebdeveebdeve ebdeve";
}

let coach = document.querySelector("#coach");
coach.addEventListener("click", showInfoCoach);


function showInfoPre (event) {
  event.preventDefault();
  let preText = document.querySelector("#show-information");
  preText.innerHTML = "kindergardentext";
}

let pre = document.querySelector("#previous");
pre.addEventListener("click", showInfoPre);