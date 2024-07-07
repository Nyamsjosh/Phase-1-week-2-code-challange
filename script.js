document.addEventListener("DOMContentLoaded", () => {
  const containerMain = document.getElementById("container");
  containerMain.style.display = "none";
  const proceedBtn = document.getElementById("proceedButton");
  proceedBtn.addEventListener("click", function () {
    containerMain.style.display = "block";
  });
  function addToList() {
    const newItemInput = document.getElementById("shoppingItemsInput");

    const newItem = newItemInput.value.trim();

    //Returns an alert message when there is no input
    if (!newItem) {
      alert("Enter item to continue !");
      return;
    }

    const itemList = document.createElement("li");
    itemList.textContent = newItem;

    itemList.addEventListener("click", function () {
      this.classList.toggle("purchased");
    });

    // Append the new list item and delete button to the existing list
    const list = document.getElementById("itemListNew");
    list.appendChild(itemList);

    newItemInput.value = "";
  }
  // Function to add an item

  const addButton = document.getElementById("addItems");
  addButton.addEventListener("click", addToList);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Item";
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    itemListNew.splice(index, 1);
    addToList();
  });

  // Function to clear the entire list
  const clearButton = document.getElementById("deleteItems");
  clearButton.addEventListener("click", function () {
    const itemListNew = document.getElementById("itemListNew");
    itemListNew.innerHTML = ""; // Clear the list
  });
});
