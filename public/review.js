const newReview = document.querySelector("#new-review");
const id = document.querySelector("#postId").textContent;

newReview.addEventListener("submit",(e)=>{
    e.preventDefault();
    const postReview={
        review:document.querySelector("#review").value,
    }
<<<<<<< HEAD
    fetch('/api/review/'+id,{
=======
    fetch('/api/comments/'+id,{
>>>>>>> dev
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