function showInfoFreelancer (event) {
  event.preventDefault();
  let freelanceText = document.querySelector("#show-information");
  freelanceText.innerHTML = "In 2015 I established my own business. Since then I worked on many interesting projects for organizations and universities - specialised in suitability diagnostics, development centers and trainings. In 2019 my book Moderne Personalauswahl (Modern Employee Selection) was published. As a network partner of Netzwerk Kadertraining GmbH I designed, organized and executed assessment trainings for job-seeking managers between 2015 and 2020. Furthermore I gave advice on the quality of psychological diagnostics and was responsible for coordinating with universities.";
  window.location = "#anchor-one";
}

let freelance = document.querySelector("#psychologist");
freelance.addEventListener("click", showInfoFreelancer);


function showInfoConsultant (event) {
  event.preventDefault();
  let consultantText = document.querySelector("#show-information");
  consultantText.innerHTML = "Since 2019 I've taken part in school development for the city of St.Gallen. Part of my role is facilitating the digitalisation, managing internal communication and assisting the management.";
  window.location = "#anchor-one";
}

let consultant = document.querySelector("#consultant");
consultant.addEventListener("click", showInfoConsultant);


function showInfoStudentjob (event) {
  event.preventDefault();
  let studentText = document.querySelector("#show-information");
  studentText.innerHTML = "As a student I did a lot of administration, organization, customer management and writing (newsletter, advertisements, website) for a therapy center near Zurich.";
  window.location = "#anchor-one";
}

let student = document.querySelector("#studentjob");
student.addEventListener("click", showInfoStudentjob);


function showInfoDigibil (event) {
  event.preventDefault();
  let digibilText = document.querySelector("#show-information-edu");
  digibilText.innerHTML = "This Certificate of Advanced Studies focuses on the digital transformation of education, innovative learning designs, e-assessments and e-portfolios, training of digital skills and adaptive learning systems.";
  window.location = "#anchor-two";
}

let digibil = document.querySelector("#digibil");
digibil.addEventListener("click", showInfoDigibil);


function showInfoCoding (event) {
  event.preventDefault();
  let codingText = document.querySelector("#show-information-edu");
  codingText.innerHTML = "Next goal: learning how to code. I started my first online-course in February 2021 (SheCodes). After a few weeks of different courses and lots of coding weekends, I built this cv-application. I am very excited to continue this journey.";
  window.location = "#anchor-two";
}

let coding = document.querySelector("#coding");
coding.addEventListener("click", showInfoCoding);


function showInfoMaster (event) {
  event.preventDefault();
  let masterText = document.querySelector("#show-information-edu");
  masterText.innerHTML = "After five years of studying human behaviour I graduated in Applied Psychology, focused on organizational psychology, psychology of personal development and clinical psychology.";
  window.location = "#anchor-two";
}

let master = document.querySelector("#master");
master.addEventListener("click", showInfoMaster);


function showInfoTrainer (event) {
  event.preventDefault();
  let trainerText = document.querySelector("#show-information-edu");
  trainerText.innerHTML = "Between 2014 and 2015, I learned how to assist groups, to help improve personal selfmanagement-skills with the Zürcher Resourcen Modell ZRM (ᐅ ISMZ, University Zurich). In addition, I graduated as a resilience-trainer ( ᐅ 2017, ResilienzForum, Berlin) and as SIZE-process coach for personnel and organizational diagnostics ( ᐅ 2017, Top im Job GmbH, Marchtrenk).";
  window.location = "#anchor-two";
}

let trainer = document.querySelector("#trainer");
trainer.addEventListener("click", showInfoTrainer);


function showInfoPre (event) {
  event.preventDefault();
  let preText = document.querySelector("#show-information");
  preText.innerHTML = "That's how I started... built learning environments for children for over five years, help them believe in themselves and get the best possible starter-kit for a happy and successful life.";
  window.location = "#anchor-two";
}

let pre = document.querySelector("#previous");
pre.addEventListener("click", showInfoPre);


function showInfoPreEdu (event) {
  event.preventDefault();
  let preEduText = document.querySelector("#show-information-edu");
  preEduText.innerHTML = "2000 - 2005: Highschool with focus on education and childrens development. Great years with lot of learning, practice and tons of self-reflecion.";
  wwindow.location = "#anchor-two";
}

let preEdu = document.querySelector("#previous-edu");
preEdu.addEventListener("click", showInfoPreEdu);