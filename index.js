const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");

const addName = ()=>{
    if(name.value===""){
        return null;
    }
    const tag=document.createElement("duv");
    tag.setAttribute("class", "tag");
    tag.innerText=`Hey, My Name is ${name.value}`;
    tagsContainer.append(tag);
}
