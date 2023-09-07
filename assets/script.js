function changeField(field, fieldID) {
  document.getElementById(fieldID).innerHTML = field.value;

  if (field.value === "" || field.value == null) {
    return;
  }
  document.getElementById(fieldID).style = "min-width: 0rem; border-bottom: 0;";
}