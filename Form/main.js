("use strict");
const inputFields = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", getInformation);

function getInformation(event) {
  event.preventDefault();
  let o = new dataSet();
  //   inputFields.forEach((input) => o. input.value);
  o.firstName = inputFields[0].value;
  o.lastName = inputFields[1].value;
  o.address = inputFields[2].value;
  o.city = inputFields[3].value;
  o.zip = inputFields[4].value;
  console.log(o);

  JSON.stringify(o);
  console.log(o);
  save(o);
}
let save = function (objectList) {
  localStorage.clear();
  localStorage.setItem("objectList", JSON.stringify(objectList));
};
class dataSet {
  firstName;
  lastName;
  address;
  city;
  zip;
  constructor(firstName, lastName, address, city, zip) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.zip = zip;
  }
}
