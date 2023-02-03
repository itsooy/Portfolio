document.getElementById("check-button").addEventListener("click", function () {
    const postalCode = ((document.getElementById("postal-code").value).toUpperCase()).replaceAll(" ","");
    if (postalCode===''){
      document.getElementById("alert-catch-empty").style.display = "block";
      document.getElementById("alert-catch-false").style.display = "none";
      document.getElementById("alert-catch-true").style.display = "none";
    }
    else if(postalCodes.includes(postalCode)){
      document.getElementById("alert-catch-empty").style.display = "none";
      document.getElementById("alert-catch-false").style.display = "none";
      document.getElementById("alert-catch-true").style.display = "block";
      document.getElementById("alert-catch-true").innerHTML = `You entered <big><strong>${postalCode}</strong></big> <br>Your postal code is in the our service area`;
      document.getElementById("apt-button").style.display = "initial";           
    } else {
      document.getElementById("alert-catch-true").style.display = "none";
      document.getElementById("alert-catch-empty").style.display = "none";
      document.getElementById("alert-catch-false").style.display = "block";
      document.getElementById("apt-button").style.display = "none";
    }
    document.getElementById("postal-code").value='';
    document.getElementById("postal-code").setAttribute('value','osman');
  });
  document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("alert-catch-true").style.display = "none";
    document.getElementById("alert-catch-empty").style.display = "none";
    document.getElementById("alert-catch-false").style.display = "none";
    document.getElementById("apt-button").style.display = "none";
    document.getElementById("postal-code").setAttribute("value",'')
  });

  const questions = [
    "Do you live in Canada before than Jan 1, 2023",
    "I didn't face bankruptcy in 2022",
    "I will do only current year tax return.",
    "Do your family family income lower than the limit?",
  ];
  
  let currentQuestion = 0;
//   const questionElement = document.getElementById("question");
//   const yesBtn = document.getElementById("yes-btn");
//   const noBtn = document.getElementById("no-btn");
  const questionElement = document.getElementById("card-text");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const cardBdy = document.getElementById('card-body');
  const familyincome= document.getElementById('family-income');
  const familyText= document.getElementById('card-warning')
  
  questionElement.textContent = questions[currentQuestion];
  
  yesBtn.addEventListener("click", function() {
    currentQuestion++;
    familyincome.style.display='none'
    familyText.innerHTML='';
    if (currentQuestion === 3) {
        questionElement.textContent = questions[currentQuestion];
        familyincome.style.display='block'; 
        document.getElementById('card-warning').innerHTML="Please check the chart which located below"
    } else if(currentQuestion === questions.length){
        document.getElementById('question-container').style.display='none'
        document.getElementById('alert-eligible').style.display='block';
        document.getElementById('main-container').style.display='block';
        
    } else {
      questionElement.textContent = questions[currentQuestion];
    }
  });
  
  noBtn.addEventListener("click", function() {
    questionElement.innerHTML = `Sorry you are not eligible to use Tax Clinic Service <br> If you think you are eligilbe please email to <br><a href="mailto:info@taxclinic.org">info@taxclinic.org</a> `;
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });
  
 
  document.getElementById("cls-button").addEventListener("click", function () {
    document.getElementById("alert-eligible").style.display = "none";
  });

