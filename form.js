document.getElementById('regisForm').addEventListener('submit',function(event)) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    //send data to server
    fetch('submit_form.')
}