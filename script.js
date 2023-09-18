 const stars = document.querySelectorAll('.fa-star');
 const emojieContainer=document.querySelector("#emojieContainer");
 const emojies = emojieContainer.querySelectorAll('i');


 const updatingRating =(index)=>{
    stars.forEach((star,idx)=>{
        if(idx <index + 1)
        {
            star.classList.add('active');
        }
        else{
            star.classList.remove('active');
        }
    })
    emojies.forEach(emojie=>{
        emojie.style.transform=`translateX(-${index*56}px)`
    })
 }


 stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
       updatingRating(index);
    })
 })