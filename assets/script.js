function changeField(inputID, fieldID) {
  if (inputID == null) return;

  currentValue = document.getElementById(inputID)?.value;
  document.getElementById(fieldID).innerHTML = currentValue;

  if (currentValue === "" || currentValue == null) {
    return;
  }
  document.getElementById(fieldID).style = "min-width: 0rem; border-bottom: 0;";
}