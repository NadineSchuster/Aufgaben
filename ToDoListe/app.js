"use strict";

const inputField = document.querySelector("input");
const inputBtn = document.querySelector("#input-container button");
let todoList = document.querySelector("#todo-list");

// Create ToDo-list element
let addTodoItem = function (event) {
  event.preventDefault();

  let liElem = document.createElement("li");
  liElem.classList.add("listItem");

  let h5 = document.createElement("h5");
  h5.textContent = inputField.value;

  let textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");
  textContainer.appendChild(h5);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteListItem);

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", checkListItem);

  liElem.appendChild(checkBox);
  liElem.appendChild(textContainer);
  liElem.appendChild(deleteBtn);
  todoList.appendChild(liElem);
  // Clear input field
  inputField.value = "";
};

// Delete ToDo-list item
let deleteListItem = function (event) {
  let item = event.target.parentElement;
  item.remove();
};

// Check ToDo-list item
let checkListItem = function (event) {
  // Get ToDo-list item
  let listItem = event.target.parentElement;
  // Get Todo-text-container
  let textItem = event.target.nextElementSibling;

  if (event.target.checked) {
    listItem.classList.add("checkBox");
    // in the div-container is the h5 tag
    textItem.firstChild.classList.add("textItem");
  } else {
    listItem.classList.remove("checkBox");
    textItem.firstChild.classList.remove("textItem");
  }
};

inputBtn.addEventListener("click", addTodoItem);
