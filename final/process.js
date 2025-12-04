document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const color = document.getElementById('color').value;

    if (!username) {
        alert("You need to enter a name! Enter Anon if you don't want ur info here!")
        return;
    }
    if ((comment || "").trim().length <= 5) {
        alert("Make sure your comment exceeds 5 characters")
        return;
    }
    const formData = {
        name: username,
        comment: comment,
        color: color,
    }
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "process.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form Submitted Sucessfully")
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').innerHTML = ' ';
            document.getElementById('return').innerText = response.return;
        }else if (xhr.readyState === 4){
            alert("Error Submitting Form");
        }
    };
    xhr.send(JSON.stringify(formData));

});