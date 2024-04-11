document.addEventListener('DOMContentLoaded', function() {
    //ensure the dom is fully loaded before attaching event listeners

    //get the form element
    const form = document.getElementById('regisForm');

    //function to handle the form submission
    function handleFormSubmit(event) {
        event.preventDefault(); //prevent the default form submission
        
        //capture the form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        //log the captured data to the console
        fetch 

        //here you would send the data to a server
        //for example, using fetch() to make an AJAX request
    }

    //attach the submission handler to the form
    form.addEventListener('submit', handleFormSubmit)

});