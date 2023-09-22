/*=================ARRAYS=================*/
const skills=[
    {
        "id": "skill-1",
        "name": "ReactJS",
        "image": "../assets/images/Skills/react-logo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-2",
        "name": "JavaScript",
        "image": "../assets/images/Skills/js-logo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-3",
        "name": "HTML",
        "image": "../assets/images/Skills/html.png",
        "nivel": "Advanced"
    },
    {
        "id": "skill-4",
        "name": "CSS",
        "image": "../assets/images/Skills/csslogo.png",
        "nivel": "Advanced"
    },
    {
        "id": "skill-5",
        "name": "SASS",
        "image": "../assets/images/Skills/sasslogo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-6",
        "name": "Bootstrap",
        "image": "../../assets/images/skills/bootstrap_logo.png",
        "nivel": "Advanced"
    },
    {
        "id": "skill-7",
        "name": "GitHub",
        "image": "../../assets/images/skills/github-logo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-8",
        "name": "Git",
        "image": "../assets/images/Skills/gitlogo.png",
        "nivel": "Intermediate"

    },
    {
        "id": "skill-9",
        "name": "FireBase",
        "image": "../assets/images/Skills/firebaselogo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-10",
        "name": "NextJS",
        "image": "../assets/images/Skills/nextjslogo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-11",
        "name": "NodeJS",
        "image": "../assets/images/Skills/nodelogo.png",
        "nivel": "Intermediate"
    },
    {
        "id": "skill-12",
        "name": "Responsive",
        "image": "../assets/images/Skills/responsivelogo.png",
        "nivel": "Advanced"
    },
    {
        "id": "skill-13",
        "name": "English",
        "image": "../assets/images/Skills/englishlogo.png",
        "nivel": "Senior 6 "
    }


]

const softSkills=[

{
    "id":"1",
    "name":"Problem solving",
    "image":"../assets/images/SoftSkills/problemsolving.png"
},
{
    "id":"2",
    "name":"Teamwork",
    "image":"../assets/images/SoftSkills/Teamwork.png"
},
{
    "id":"3",
    "name":"Comunication",
    "image":"../assets/images/SoftSkills/Comunication.png"
},
{
    "id":"4",
    "name":"Responsibility",
    "image":"../assets/images/SoftSkills/Resonsibility.png"
},
{
    "id":"5",
    "name":"Flexibility",
    "image":"../assets/images/SoftSkills/Flexibility.png"
},
{
    "id":"6",
    "name":"Decisiveness",
    "image":"../assets/images/SoftSkills/Decisiveness.png"
}


]



const proyects=[
{
    "id":"1",
    "img":"../assets/images/Proyects/portfolio.jfif",
    "name":"My Portfolio",
    "description":"asnfjsanfjasfasf",
    "technology":"asfsafsaf, fasfas fa, fasfsa f, asfasfsa f",
    "view":"",
    "repository":"",
},
{
    "id":"2",
    "img":"../assets/images/Proyects/portfolio.jfif",
    "name":"My Portfolio",
    "description":"",
    "technology":"",
    "view":"",
    "repository":"",
},
{
    "id":"3",
    "img":"../assets/images/Proyects/portfolio.jfif",
    "name":"My Portfolio",
    "description":"",
    "technology":"",
    "view":"",
    "repository":"",
},
{
    "id":"4",
    "img":"../assets/images/Proyects/portfolio.jfif",
    "name":"My Portfolio",
    "description":"",
    "technology":"",
    "view":"",
    "repository":"",
},
{
    "id":"5",
    "img":"../assets/images/Proyects/portfolio.jfif",
    "name":"My Portfolio",
    "description":"",
    "technology":"",
    "view":"",
    "repository":"",
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
        <div class="mx-5 mt-5 skill-card d-flex flex-column">
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
<div class="card mx-5 mb-5" style="width: 30rem;">
    <img src="${img}" class="card-img-top" alt="Proyect">
    <div class="card-body">
        <h5>${name}</h5>
        <p class="card-text">${technology}</p>
        <span>${description}</span>

            <div class="buttons-proyect d-flex flex-row justify-content-between mt-3">
                <a class="btn button-view" role="button" src="${view}">View<i class=" mx-2 fa-regular fa-eye"></i> </a>
                <a class="btn button-repository" role="button" src="${repository}">Repository<i class="mx-2 fa-brands fa-github"></i> </a>
            </div>
    </div>
</div>

`
}

});