let cardForm = document.querySelector("#cardForm");
let tableData = document.querySelector("#recordTable")

cardForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.querySelector("#cardNumber").value;

    const cardHoldersName = document.querySelector("#cardHolders").value;
    const expirationMonth = document.querySelector("#expirationMonth").value;
    const expirationYear = document.querySelector("#expirationYear").value;
    const cvv = document.querySelector("#cvv").value;

    const expirationDate = `${expirationMonth}/${expirationYear}`;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${cardNumber}</td>
    <td>${cardHoldersName}</td>
    <td>${expirationDate}</td>
    <td>${cvv}</td>
  `;
    tableData.appendChild(newRow);  
    cardForm.reset();
})