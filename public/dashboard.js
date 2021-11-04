const delBtn = document.querySelector(".deletePost");
const editBtn = document.querySelector('.editPost');


delBtn.addEventListener("click", (x) => {
    x.preventDefault();
    const postId = 2;
    
    fetch(`/api/posts/${postId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/dashboard"
        } else {
            alert("error")
        }
    })
})