const inputBox =document.getElementById("input-box");
const listContrainer =document.getElementById("list-contrainer");

function addTask(){
    if(inputBox.value==''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContrainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listContrainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();                           
    }
},false);


function saveData(){
    localStorage.setItem("data",listContrainer.innerHTML)
}

function showTask(){
    listContrainer.innerHTML=localStorage.getItem("data");
}

showTask()