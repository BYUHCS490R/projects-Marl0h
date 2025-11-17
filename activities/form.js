document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    //const state = document.getElementById('state').value;
    //const gender = document.getElementById('gender').value;
    //const comment = document.getElementById('comment').value;

    if (!fullname || !email) {
        alert("You need to enter a name and email")
        return;
    }
    const formData = {
        name: fullname,
        email: email,
        password: password,
    }
    alert("Form Submitted");
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form Submitted Sucessfully")
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').innerHTML = ' ';
            document.getElementById('message').innerText = response.message;
        }else if (xhr.readyState === 4){
            alert("Error Submitting Form");
        }
    };
    xhr.send(JSON.stringify(formData));

});