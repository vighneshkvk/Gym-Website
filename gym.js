function test(event){
    event.preventDefault();
    var name=document.getElementById('username').value;
    var age=document.getElementById('age').value;
    var gender=document.getElementById('gender').value;

    let userDetails={
        name,
        age,
        gender
    }

    localStorage.setItem('userdetails',JSON.stringify(userDetails));

}