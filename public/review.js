const newReview = document.querySelector("#new-review");
const id = document.querySelector("#postId").textContent;

newReview.addEventListener("submit",(e)=>{
    e.preventDefault();
    const postReview={
        review:document.querySelector("#review").value,
    }
    fetch('/api/review/'+id,{
        method:"POST",
        body:JSON.stringify(postReview),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload();
        } else {
            alert("error")
        }
    })
})