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
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

// Step 5: Add the row to the table
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Step 1: Get the first 3 contacts
const threeContacts = contacts.splice(0, 3);

// Step 2: Loop through each contact
// Step 3: Create a row for each contact
// Step 4: Set the row's HTML
// Step 5: Append the row to the table


// ITERATION 2 - Delete Buttons
// Step 1: Get all delete buttons
// Step 2: Add click event listener to each button
// Step 3: When clicked, remove the parent row


// ITERATION 3 - Like Buttons
// Step 1: Get all like buttons
// Step 2: Add click event listener to each button
// Step 3: When clicked, toggle the 'selected' class


// Bonus: ITERATION 4 - Add Random Contacts
// Step 1: Add click event listener to the add random button
// Step 2: When clicked, get a random contact
// Step 3: Create a new row for the contact
// Step 4: Add event listeners to the new row's buttons
// Step 5: Append the row to the table