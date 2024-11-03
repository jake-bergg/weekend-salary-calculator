function handleSubmit(event){
    // ! prevent page from refreshing when submit button is pressed.
    event.preventDefault()
    // ! Console log to check that button is working
    console.log("handleSubmit called with Event: ", event.target)
    
    // ! Code that will add text intput into the form
    console.log("First Name from firstName: ", document.getElementById("firstNameInput").value)

    console.log("Last Name from lastName: ", document.getElementById("lastNameInput").value)

    console.log("ID from ID: ", document.getElementById("idInput").value)

    console.log("Title from Title: ", document.getElementById("titleInput").value)

    console.log("Salary from Salary: ", document.getElementById("salaryInput").value)



    // let firstNameInput = document.getElementById("firstNameIntput").value
    // let lastNameInput = document.getElementById("lastNameInput").value
    // let idInput = document.getElementById("idInput").value
    // let titleInput = document.getElementById("titleInput").value
    // let salaryInput = document.getElementById("salaryinput").value
    // console.log("affTable from Dom:", document.getElementById("affTable"))
}