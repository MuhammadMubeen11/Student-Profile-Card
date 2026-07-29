// ============================
// Select Elements
// ============================

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const colorInput = document.getElementById("colorName");
const colorPicker = document.getElementById("colorPicker");
const hobbyInput = document.getElementById("hobby");
const aboutInput = document.getElementById("about");
const skillsInput = document.getElementById("skills");
const imageInput = document.getElementById("imageInput");

const createBtn = document.getElementById("createBtn");
const resetBtn = document.getElementById("resetBtn");
const hideBtn = document.getElementById("hideBtn");
const themeButton = document.getElementById("themeButton");
const themeBtn = document.getElementById("themeBtn");

const profileCard = document.getElementById("profileCard");

// Display

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displaySubject = document.getElementById("displaySubject");
const displayColor = document.getElementById("displayColor");
const displayAbout = document.getElementById("displayAbout");
const displayHobby = document.getElementById("displayHobby");
const profileImage = document.getElementById("profileImage");
const skillContainer = document.getElementById("skillContainer");


// ============================
// Greeting
// ============================

const greeting = document.getElementById("greeting");
const today = document.getElementById("today");

const date = new Date();

today.innerHTML = date.toDateString();

const hour = date.getHours();

if(hour < 12){

    greeting.innerHTML="☀ Good Morning, Future Star!";

}
else if(hour <18){

    greeting.innerHTML="🌸 Good Afternoon, Student!";

}
else{

    greeting.innerHTML="🌙 Good Evening, Sweetheart!";

}



// ============================
// Create Profile
// ============================

createBtn.addEventListener("click",()=>{

    displayName.innerHTML =
    nameInput.value || "Student Name";

    displayAge.innerHTML =
    ageInput.value || "--";

    displaySubject.innerHTML =
    subjectInput.value || "--";

    displayColor.innerHTML =
    colorInput.value || "Purple";

    displayAbout.innerHTML =
    aboutInput.value || "Passionate student who loves learning.";

    displayHobby.innerHTML =
    "🎀 " + (hobbyInput.value || "Reading");

    // Color

    displayColor.style.color=colorPicker.value;

    // Skills

    skillContainer.innerHTML="";

    let skills = skillsInput.value.split(",");

    skills.forEach(skill=>{

        if(skill.trim()!=""){

            let tag=document.createElement("span");

            tag.innerHTML=skill.trim();

            skillContainer.appendChild(tag);

        }

    });

});


// ============================
// Upload Image
// ============================

imageInput.addEventListener("change",function(){

    const file=this.files[0];

    if(file){

        const reader=new FileReader();

        reader.onload=function(e){

            profileImage.src=e.target.result;

        }

        reader.readAsDataURL(file);

    }

});


// ============================
// Reset
// ============================

resetBtn.addEventListener("click",()=>{

    document.querySelector("form")?.reset();

    nameInput.value="";
    ageInput.value="";
    subjectInput.value="";
    colorInput.value="";
    hobbyInput.value="";
    aboutInput.value="";
    skillsInput.value="";

    displayName.innerHTML="Student Name";
    displayAge.innerHTML="13";
    displaySubject.innerHTML="Computer Science";
    displayColor.innerHTML="Purple";
    displayAbout.innerHTML="Passionate student who loves learning new things.";
    displayHobby.innerHTML="📖 Reading";

    skillContainer.innerHTML="";

    profileImage.src="https://cdn-icons-png.flaticon.com/512/149/149071.png";

});


// ============================
// Theme
// ============================

function changeTheme(){

    document.body.classList.toggle("light");

}

themeButton.addEventListener("click",changeTheme);

themeBtn.addEventListener("click",changeTheme);


// ============================
// Hide / Show
// ============================

let visible=true;

hideBtn.addEventListener("click",()=>{

    if(visible){

        profileCard.style.display="none";

        hideBtn.innerHTML="👁 Show Profile";

        visible=false;

    }

    else{

        profileCard.style.display="block";

        hideBtn.innerHTML="👁 Hide Profile";

        visible=true;

    }

});


// ============================
// Live Color Preview
// ============================

colorPicker.addEventListener("input",()=>{

    displayColor.style.color=colorPicker.value;

});


// ============================
// Enter Key
// ============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        createBtn.click();

    }

});


// ============================
// Welcome Animation
// ============================

window.onload=()=>{

    profileCard.style.opacity="0";

    profileCard.style.transform="translateY(50px)";

    setTimeout(()=>{

        profileCard.style.transition=".8s";

        profileCard.style.opacity="1";

        profileCard.style.transform="translateY(0px)";

    },200);

};