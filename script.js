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


    // ! create variables to hold text for each input
    let firstNameInput = document.getElementById("firstNameInput").value
    let lastNameInput = document.getElementById("lastNameInput").value
    let idInput = document.getElementById("idInput").value
    let titleInput = document.getElementById("titleInput").value
    let salaryInput = document.getElementById("salaryInput").value

    console.log("salaryTable from Dom:", document.getElementById("salaryTable"))

    // ! create new rows for data each time submit is clicked
    const table = document.getElementById("salaryTable");
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5); // * row for delete button

    // ! each input will populate its correct position in the table
    cell1.innerHTML += document.getElementById("firstNameInput").value;
    cell2.innerHTML += document.getElementById("lastNameInput").value;
    cell3.innerHTML += document.getElementById("idInput").value;
    cell4.innerHTML += document.getElementById("titleInput").value;
    cell5.innerHTML += document.getElementById("salaryInput").value;

    // ! Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // ! Add an event listener to the delete button
    deleteButton.addEventListener("click", function() {
        // ! Remove the row containing the clicked button
        const row = this.parentNode.parentNode; // * Go up to the row
        row.parentNode.removeChild(row); // * Remove the row from the table
    });

    // Append the delete button to the cell
    cell6.appendChild(deleteButton);

    
    // ! clear the form each time submit is clicked
    document.getElementById("firstNameInput").value = ''
    document.getElementById("lastNameInput").value = ''
    document.getElementById("idInput").value = ''
    document.getElementById("titleInput").value = ''
    document.getElementById("salaryInput").value = ''
}