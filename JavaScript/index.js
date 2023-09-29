/*=================ARRAYS=================*/
const skills=[
    {
        id: 1,
        name: "ReactJS",
        image: "./public/imgArray/react-logo.png",
        nivel: "Intermediate"
    },
    {
        id: 2,
        name: "JavaScript",
        image: "./public/imgArray/js-logo.png",
        nivel: "Intermediate"
    },
    {
        id: 3,
        name: "HTML",
        image: "./public/imgArray/html.png",
        nivel: "Advanced"
    },
    {
        id: 4,
        name: "CSS",
        image: "./public/imgArray/csslogo.png",
        nivel: "Advanced"
    },
    {
        id: 5,
        name: "SASS",
        image: "./public/imgArray/sasslogo.png",
        nivel: "Intermediate"
    },
    {
        id: 6,
        name: "Bootstrap",
        image: "./public/imgArray/bootstrap_logo.png",
        nivel: "Advanced"
    },
    {
        id: 7,
        name: "GitHub",
        image: "./public/imgArray/github-logo.png",
        nivel: "Intermediate"
    },
    {
        id: 8,
        name: "Git",
        image: "./public/imgArray/gitlogo.png",
        nivel: "Intermediate"

    },
    {
        id: 9,
        name: "FireBase",
        image: "./public/imgArray/firebaselogo.png",
        nivel: "Intermediate"
    },
    {
        id: 10,
        name: "NextJS",
        image: "./public/imgArray/nextjslogo.png",
        nivel: "Intermediate"
    },
    {
        id:11,
        name: "NodeJS",
        image: "./public/imgArray/nodelogo.png",
        nivel: "Intermediate"
    },
    {
        id: 12,
        name: "Responsive",
        image: "./public/imgArray/responsivelogo.png",
        nivel: "Advanced"
    },
    {
        id: 13,
        name: "English",
        image: "./public/imgArray/englishlogo.png",
        nivel: "Senior 6 "
    }


]

const softSkills=[

{
    id:1,
    name:"Problem solving",
    image:"./public/imgArray/problemsolving.png"
},
{
    id:2,
    name:"Teamwork",
    image:"./public/imgArray/Teamwork.png"
},
{
    id:3,
    name:"Comunication",
    image:"./public/imgArray/Comunication.png"
},
{
    id:4,
    name:"Responsibility",
    image:"./public/imgArray/Resonsibility.png"
},
{
    id:5,
    name:"Flexibility",
    image:"./public/imgArray/Flexibility.png"
},
{
    id:6,
    name:"Decisiveness",
    image:"./public/imgArray/Decisiveness.png"
}


]



const proyects=[
{
    id:1,
    img:"./public/imgArray/Proyect1.jfif",
    name:"My Portfolio",
    description:" Web developer Nicolas Bujan portfolio",
    technology:"HTML, CSS, JavaScript, Bootstrap",
    view:"",
    repository:"",
},
{
    id:2,
    img:"./public/imgArray/Proyect1.jfif",
    name:"My Portfolio",
    description:"",
    technology:"",
    view:"",
    repository:"",
},
{
    id:3,
    img:"./public/imgArray/Proyect1.jfif",
    name:"My Portfolio",
    description:"",
    technology:"",
    view:"",
    repository:"",
},
{
    id:4,
    img:"./public/imgArray/Proyect1.jfif",
    name:"My Portfolio",
    description:"",
    technology:"",
    view:"",
    repository:"",
},
{
    id:5,
    img:"./public/imgArray/Proyect1.jfif",
    name:"My Portfolio",
    description:"",
    technology:"",
    view:"",
    repository:"",
},



]









/*=================CONTAINERS=================*/
let skillContainer = document.querySelector("#skills-container");
let softSkillsContainer = document.querySelector("#soft-skills-container");

let proyectsContainer=document.querySelector("#proyectContainer");



/*=================LOAD SKILLS=================*/

skills.forEach((s)=>{
    const{name,image,nivel}=s
    if(skillContainer){
        skillContainer.innerHTML+=`
        <div class="mx-5 mt-5 skill-card d-flex flex-column"  >
        <div class="skill-card-body d-flex flex-row">
        <img class="png-skill mx-3" src="${image}" alt="${name}">
        <h4 class="name-skill mt-2 ">${name}</h4>
        </div>
        <small class="nivel-skill ">${nivel}</small>
        
        </div>`;
        
    }
});

/*=================LOAD SOFT SKILLS=================*/

softSkills.forEach((sf)=>{
    const{name,image}=sf
    if(softSkillsContainer){
        softSkillsContainer.innerHTML+=`
        <div class="soft-skill-card mt-5  mx-3 d-flex flex-row justify-content-center ">
        <img class="soft-skill-img" src="${image}" alt="${name}" >
        <h4 class="soft-skill-name d-flex flex-column justify-content-center ">${name}</h4>
        </div>
         `
    }
});





/*=================LOAD PROYECTS=================*/

proyects.forEach((p)=>{
const{name,img,description,technology,view,repository}=p
if(proyectContainer){
    proyectsContainer.innerHTML+=`
<div class="card mx-5 mb-5 border-0 "  style="width: 30rem;" data-aos="zoom-in" data-aos-duration="1500">
    <div class="card-img-top-container">
    <img src="${img}" class="card-img-top" alt="Proyect">
    </div>
    <div class="card-body">
        <h5 id="title-card">${name}</h5>
        <p class="card-technology">${technology}</p>
        <span class="card-text">${description}</span>

            <div class="buttons-proyect d-flex flex-row justify-content-between mt-3">

                <button class="button-view">
                    <div class="sign">
                    <i class=" mx-2 fa-regular fa-eye"></i>
                    </div>
                    <a class="word-view" target="__blank" href="${view}">View</a>
                </button>

                <button class="button-repository">
                    <div class="sign2">
                    <i class="fa-brands fa-github"></i>
                    </div>
                    <a class="word-repository" target="__blank" href="${repository}">Repository</a>
                </button>



                    
            </div>
    </div>
</div>

`
}

});



/*=================BUTTON DOWNLOAD=================*/

const buttonDownload = document.getElementById('button-download');


buttonDownload.addEventListener('click', ()=>{

const link = document.createElement('a');
link.href='../assets/toDownload/Curriculum-Vitae.pdf';
link.download='Curriculum-Vitae/Personal-Resume';
link.target='_blank';
link.style.display='none';

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

});



