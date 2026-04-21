//your JS code here. If required.
let username = document.getElementById("username")
let password = document.getElementById("password")
let check = document.getElementById("checkbox")
let submit = document.getElementById("submit")
let form = document.querySelector("form")
let existingUser = document.getElementById("existing")

window.onload = function(){
	const savedUser = localStorage.getItem("username")
	const savedPass = localStorage.getItem("password")

	if(savedUser && savedPass){
		existingUser.style.display = "block"
	}
	else{
		existingUser.style.display = "none"
	}
}
form.addEventListener("submit",(e)=>{
	e.preventDefault()
	// alert(`Logged in as ${username.value}`)
	if(check.checked){
	localStorage.setItem("username", username.value)
	localStorage.setItem("password", password.value)
	existingBtn.style.display = "block";
		
	}
	else{
	    localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingUser.style.display = "none";
	}
})

existingUser.addEventListener("click",()=>{
	const savedUser = localStorage.getItem("username")
	if(savedUser){
		alert(`Logged in as ${savedUser}`)
	}
})




