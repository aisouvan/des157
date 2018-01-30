console.log('reading');

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {

    //store form fields in variables
    var jobTitle = document.f.jobTitle.value;
    var workField = document.f.workField.value;
    var season = document.f.season.value;
    var gradeLevel = document.f.gradeLevel.value;
    var state = document.f.state.value;
    var city = document.f.city.value;
    var major = document.f.major.value;
    var minor = document.f.minor.value;
    var adj = document.f.adj.value;
    var noun = document.f.noun.value;
    var nounOne = document.f.nounOne.value;
    var nounTwo = document.f.nounTwo.value;
    var company = document.f.company.value;
    var adjOne = document.f.adjOne.value;
    var famousCo = document.f.famousCo.value;
    var verb = document.f.verb.value;
    var yourName = document.f.yourName.value;
    var myMsg=document.getElementById("myMsg");


}

myMsg.innerHTML=
"Dear" "+ jobTitle + ","
" I am very interested in the" + workField + "Department during the" + season + "Quarter.I am a" + gradeLevel + "at the University of" + state+ "," + city + ", pursuing a bachelor’s degree in" + major + "with a minor in" + major +. "My research experience has" + adj + "my interest in the way that" + noun + "is delivered through" + nounOne + "and" + nounTwo +. "I believe in the mission of" + company + "and would be excited to be an intern with your organization."
<br>
"I am" + adjOne + "that my experiences, skills and strong interests in the goals of" + famousCo + "have" + verb + " me to be a strong intern for your program. I have attached my resume and look forward to discussing my qualifications with you. Thank you for your time and consideration.""
"Sincerely,
+ yourName + "

"Hi, " + userName + "!<br>You love the color <em>" + userColor + "</em>!  Have a great day!"
     //prevent page from reloading
    return false;

  }

// challenge: add a function to clear the myMsg content when the user clicks submit
