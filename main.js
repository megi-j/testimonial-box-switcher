let persons = [
    {
        text: "this is description from lasha",
        img: "https://www.kindpng.com/picc/m/28-289408_clip-art-free-animated-people-pics-person-talking.png",
        name: "lasha nanobashvili",
        profession: "finance manager"
    },
    {
        text: "this is description from teona",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-hTj5hlzHRRhpw_Icd3QjBcQD0ADo3AbTg&usqp=CAU",
        name: "teona mchedlidze",
        profession: "data base developer"
    },
    {
        text: "this is description from elene",
        img: "https://classroomclipart.com/images/gallery/Animations/People/japanese-lady-with-umbrella-animated.gif",
        name: "elene tsirikashvili",
        profession: "just fine person"
    },
]
let slider = document.querySelector(".slider")
let index = 0
let racicvleba = document.querySelector(".racicvleba")
function createPersonBox(){
    
        let text = document.createElement("p");
        racicvleba.appendChild(text)
        text.innerHTML = persons[index].text;

        let personImg = document.createElement("div");
        racicvleba.appendChild(personImg)
        personImg.classList.add("personImg")
        personImg.style.backgroundImage = `url(${persons[index].img})`

        let personName = document.createElement("h4")
        racicvleba.appendChild(personName)
        personName.innerHTML = persons[index].name

        let personProfession = document.createElement("h6")
        racicvleba.appendChild(personProfession)
        personProfession.innerHTML = persons[index].profession
   
}

console.log(createPersonBox())
let line = document.querySelector(".line")
let active = true;

setInterval(()=>{
  
    if(active){
        
        line.style.width = "98%"
        index++
        if(index > persons.length-1){
            index = 0
        }
        removeSlider()
        createPersonBox()
        active = false
    }else{
        line.style.width = "0"
        active = true
    }
    
},1000)

function removeSlider(){
    racicvleba.innerHTML = ""
}

