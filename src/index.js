// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Step 1: Get a random contact from the contacts array
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Step 2: Access the contact object 
const randomContact = splicedArr[0];

// Step 3: Create a new table row
const exampleRow = document.createElement("tr");

// Step 4: Add the contact data to the row
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
    <td>
    <button class="btn-delete">Delete</button>
  </td>
`;

// Step 5: Add the row to the table
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Step 1: Get the first 3 contacts
const threeContacts = contacts.splice(0, 3);

// Step 2: Loop through each contact
threeContacts.forEach((contact) =>{
  // Step 3: Create a row for each contact
  const newRow = document.createElement('tr');
  // Step 4: Set the row's HTML
  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;
  
  // Step 5: Append the row to the table
  tableBody.appendChild(newRow);


// ITERATION 2 - Delete Buttons
// Step 1: Get all delete buttons
  const deleteButton = newRow.querySelector(".btn-delete");
  // Step 2: Add click event listener to each button
  deleteButton.addEventListener("click", () => {
    // Step 3: When clicked, remove the parent row

    newRow.remove();
  })


// ITERATION 3 - Like Buttons
// Step 1: Get all like buttons
const likeButton = newRow.querySelector(".btn-like");
// Step 2: Add click event listener to each button
likeButton.addEventListener("click", () => {

  // Step 3: When clicked, toggle the 'selected' class
  likeButton.classList.toggle("selected");
});
});




// Bonus: ITERATION 4 - Add Random Contacts
// Add event listener to the "Add Random Contact" button
buttonAddRandom.addEventListener("click", () => {
  // Check if there are any contacts left in the array
  if (contacts.length === 0) {
    alert("No more contacts to add!"); // Alert if all contacts have been used
    return; // Exit the function
  }
  
  // Generate a random index within the remaining contacts
  const randomIndex = Math.floor(Math.random() * contacts.length);
  
  // Remove 1 element at the random index and get the contact
  const randomContact = contacts.splice(randomIndex, 1)[0];
  
  // Create a new row for the random contact
  const newRow = document.createElement("tr");
  
  // Set the inner HTML of the row with contact data
  newRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" /> <!-- Display contact image -->
    </td>
    <td>${randomContact.name}</td> <!-- Display contact name -->
    <td>${randomContact.popularity.toFixed(2)}</td> <!-- Display contact popularity with 2 decimal places -->
    <td>
      <button class="btn-delete">Delete</button> <!-- Add delete button -->
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" /> <!-- Add like button with icon -->
      </button>
    </td>
  `;
  
  // Append the new row to the table body
  tableBody.appendChild(newRow);
  
  // Add event listener to the delete button of the new row
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove(); // Remove the row when delete is clicked
  });
  
  // Add event listener to the like button of the new row
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected"); // Toggle the selected class when like is clicked
  });
});