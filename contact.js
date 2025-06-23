function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            form.reset();
        } else {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }
    }).catch(error => {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    });
}