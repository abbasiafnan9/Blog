const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
    };
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            fetch("/api/users/login",{
                method:"POST",
                body:JSON.stringify(userObj),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                if(res.ok){
<<<<<<< HEAD
                   location.href = "/dashboard"
=======
                   location.href = "/dash"
>>>>>>> dev
                } else {
                    alert("error")
                }
            })
        } else {
            alert("error")
        }
    });
});