document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const state = document.getElementById('state').value;
    const comment = document.getElementById('comment').value;
    const checked = document.getElementById('check').value;
    const number = document.getElementById('number').value;
    const numValue = Number(number);

    if (!name || !email || !password) {
        alert("You need to enter a name, email, and password")
        return;
    }
    if (isNaN(numValue) || numValue < 10 || numValue > 20) {
        alert("Number between 10 and 20")
        return;
    }
    if ((comment || "").trim().length <= 20) {
        alert("Make sure your comment exceeds 20 characters")
        return;
    }
    const formData = {
        name: name,
        email: email,
        password: password,
        state: state,
        comment: comment,
        checked: checked,
        number: number,
    }
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "fp.json", true);
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