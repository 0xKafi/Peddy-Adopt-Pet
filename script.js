
const clickedBtn = (idName)=>{
    const category = document.querySelectorAll(".category");

    for(const btn of category){
        if(btn.id === idName){
            btn.classList.remove("border-[#1313133a]");
            btn.classList.add("border-[#0e7a81]");
            btn.classList.add("bg-[#0e7a811a]");

        }
        else{
            btn.classList.add("border-[#1313133a");
            btn.classList.remove("border-[#0e7a81]");
            btn.classList.remove("bg-[#0e7a811a]");
        }
    }
}
document.getElementById("dog").addEventListener("click", async ()=>{
    clickedBtn("dog");
})

