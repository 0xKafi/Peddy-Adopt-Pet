const BASE_URL = 'https://openapi.programming-hero.com/api/peddy';

const getDataByCategoryName = async (name) =>{
    const URL = `${BASE_URL}/category/${name}`;
    const response = await fetch(URL);
    const fetchedData = await response.json();
    return fetchedData.data;
}


const getPetsData = async () =>{
    const URL = `${BASE_URL}/pets`;
    const response = await fetch(URL);
    const fetchedPetsData = await response.json();
    console.log(fetchedPetsData)
    petCard(fetchedPetsData.pets)
}
getPetsData()

const clickedBtn = (idName)=>{
    const category = document.querySelectorAll(".category");

    for(const btn of category){
        if(btn.id === idName){
            btn.classList.remove("border-[#1313133a]");
            btn.classList.add("border-[#0e7a81]");
            btn.classList.add("bg-[#0e7a811a]");

        }
        else{
            btn.classList.add("border-[#1313133a]");
            btn.classList.remove("border-[#0e7a81]");
            btn.classList.remove("bg-[#0e7a811a]");
        }
    }
}

const petCard =(data)=>{
    console.log(data);
    let count = 0;
    
    document.getElementById("card-box").innerHTML = "";
    if(data.length === 0) noDataFound();
    console.log(data.length)
    for(let i = 0; i<data.length; i++){
        if(count === 3){
            break;
        }
        else{
            const cardBox = document.createElement("div");
            cardBox.innerHTML =    `
             <div class="bg-white rounded-lg border-[#1313131a] border-2 p-4 h-full">
                 <div class="h-8/10 w-full rounded-md">
                     <img class="w-full rounded-md mb-3 h-3/6" src="${data[i].image}" alt="">
                     <p class="font-extrabold text-xl mb-3">${data[i].pet_name}</p>
                     <div class="flex flex-col justify-between h-2/6">
                         <p class="text-sm font-semibold text-[#131313B3]" >Breed: ${data[i].breed}</p>
                         <p class="text-sm font-semibold text-[#131313B3]" >Birth: ${data[i].date_of_birth}</p>
                         <p class="text-sm font-semibold text-[#131313B3]" >Gender: ${data[i].gender}</p>
                         <p class="text-sm font-semibold text-[#131313B3]" >Price: ${data[i].price}$</p>
                     </div>
                 </div>
                 <div class="h-2/10 w-full rounded-md flex justify-between items-end">
                     <button class="py-2 px-4 rounded-md font-bold text-sm text-[#0e7a81] border-2 border-[#1313131a] "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                     </svg>
                     </button>
                     <button class="py-2 px-3 rounded-md font-bold text-sm text-[#0E7A81] border-2 border-[#1313131a]">Adopt</button>
                     <button class="py-2 px-3 rounded-md font-bold text-sm text-[#0E7A81] border-2 border-[#1313131a]">Details</button>
                 </div>
             </div>
             `
             document.getElementById("card-box").append(cardBox);
            count++;
        }
    }
}

const noDataFound=()=>{
    const noDataBox = document.createElement("div");
    noDataBox.innerHTML = 
    `    <div class="h-full w-full p-15 flex flex-col justify-center items-center">
            <img class="h-30 mb-3" src="./images/error.webp" alt="error">
            <p class="text-xl font-extrabold text-[#131313]">No Information Available</p>
        </div>
    `
    noDataBox.classList.add("col-span-3");
    document.getElementById("card-box").append(noDataBox);
}

document.getElementById("dog").addEventListener("click", async ()=>{
    clickedBtn("dog");
    const data = await getDataByCategoryName("dog");
    petCard(data)
})

document.getElementById("cat").addEventListener("click", async ()=>{
    clickedBtn("cat");
    const data = await getDataByCategoryName("cat");
    petCard(data);
})

document.getElementById("bird").addEventListener("click", async ()=>{
    clickedBtn("bird");
    const data = await getDataByCategoryName("bird");
    petCard(data);
})

document.getElementById("rabbit").addEventListener("click", async ()=>{
    clickedBtn("rabbit");
    const data = await getDataByCategoryName("rabbit");
    petCard(data);
})
