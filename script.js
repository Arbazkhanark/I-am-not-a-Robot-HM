let submit=document.querySelector(".sub");
// console.log(submit);
let images=document.querySelectorAll("img");


let rand=parseInt(Math.random()*images.length);
let random=images[rand];
// console.log(images[rand].className);
images[images.length-2].classList.add(random.className);



for(let i of images){
    i.addEventListener("click",(event)=>{
        let active=event.target;
        active.classList.add("selected");
    });

    i.addEventListener("dblclick",(event)=>{
        let active=event.target;
        active.classList.remove("selected");
    });
};



submit.addEventListener("click",function confirm(){
    let allSelected=[];
    for(let i=0;i<images.length;i++){
        let str="";
        str=str+images[i].className;
        // console.log(str);
        let arr=[];
        arr=str.split(" ");
        // console.log(arr);
        for(let j=0;j<arr.length;j++){
          // console.log(s);
            if(arr[j]=="selected"){
                console.log("yes",arr[j]);
                let select=document.querySelectorAll(".selected");
                for(let i=0;i<select.length-1;i++){
                    console.log(select[i].alt);
                    let randomPic=random.alt;
                    console.log(randomPic);
                    if(select[i].alt==randomPic){
                        alert("Thanks for Confirmation, That you are not a ROBOT 🤖🤖🤖");
                        break;
                    }else{
                        prompt("Having trouble to identify, Need 'specs' 👓👓👓?");
                        break;
                    }
                }
            }
        }
        arr=[];
    }
});



// Refresh Function =>reload
function refreshPage(){
    window.location.reload();
} 