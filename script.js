let changeColor,watch,list
function cancel(){
    clearTimeout(changeColor)
    document.querySelector("#change").disabled =false
}
function reset(){document.querySelector(".container").classList.remove("colord");}

function change(){
    document.querySelector("#change").disabled =true;
    changeColor = setTimeout(colorDiv,2000)
}
function colorDiv(){
    document.querySelector(".container").classList.add("colord");
    document.querySelector("#change").disabled =false
}
function startTimer(){
    clearTimeout(watch);
    let time 
    try{

        time= Number(document.querySelector("#timer").value)
    }
    catch{
          alert("Please enter a number in the field please");
            return
    }
        if(time<=0){
            alert("please enter a number larger then 0");
            return
        }
    watch = setTimeout(timer(time),0)
}
async function timer(time){
    let setTime=time
    for(let i=setTime;i>0;i--){
        document.querySelector("#time").innerText=i
        await new Promise(resolve => setTimeout(resolve, 1000));
        }
        document.querySelector("#time").innerText="Time's Out"
}    
function customIndexOf(string,char){
    if(typeof(char)!=="string"||typeof(string)!=="string"||char.length!=1){
        console.log("parameters are worng");
        return
    }
    for(let i=0;i<string.length;i++){
        if(string[i]==char)
            return i;
    }
    return -1
}
function select(){
    let person = list[document.querySelector("#list").value]
    document.querySelectorAll(".profile input").forEach(input=>{
        switch(input.id){
            case "address":
                input.value = `${person.address.city} at ${person.address.street} street on ${person.address.suite}`
                break;
                case "company":
                    input.value =`Works at ${person.company.name} at position ${person.company.catchPhrase}`
                    break;
            default:

                input.value = person[input.id]
                break;
        }
    })
}
function LoadList(data){
    list=data
    document.querySelectorAll("#list option").forEach(o=>o.remove());
    let select = document.querySelector("#list");
    
    for(let i=0;i<list.length;i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerText = list[i].name;
        select.appendChild(option)
    }
}
fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>list=response.json())
.then(data=>LoadList(data))
.catch(err=>console.log(err))
console.log(customIndexOf("abcd","d"))
console.log(customIndexOf("abcd","da"))
console.log(customIndexOf("abcd",5))
console.log(customIndexOf(5,"df"))
console.log(customIndexOf({"sa":"as","agv":8},"d"))
console.log(customIndexOf("abcd",[]))