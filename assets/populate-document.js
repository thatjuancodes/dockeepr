window.onload = function () {
  const documentParent = document.getElementById("document-parent");
  const documentActual = document.getElementById("document-actual");
  const documentEditable = documentActual.cloneNode(true);

  const fields = documentEditable.getElementsByClassName("actual-field");
  const fieldsArray = [].slice.call(fields);

  documentParent.prepend(documentEditable);

  documentEditable.getElementsByClassName("view-title")[0].innerHTML = "Edit View";
  documentEditable.getElementsByClassName("view-title")[0].className = "view-title text-center segment-title text-secondary mt-4";

  fieldsArray.forEach(function (field, index) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = field.id;
    input.id = field.id + "-editable";
    input.className = field.className + " pseudo-field";
    input.addEventListener('keyup', function (e) {
      changeField(input.id, field.id)
    });
    documentEditable.replaceChild(input, field);
  });
}