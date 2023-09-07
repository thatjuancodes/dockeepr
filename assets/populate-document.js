// Check if document is ready. Works on older browsers!
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    // get the document parent container
    const documentParent = document.getElementById("document-parent");
    // get the document actual view
    const documentActual = document.getElementById("document-actual");
    // clone the actual view to get an editable view
    const documentEditable = documentActual.cloneNode(true);
    // change editable view id
    documentEditable.id = "document-editable";

    // change editable view title
    documentEditable.getElementsByClassName("view-title")[0].innerHTML = "Edit View";
    documentEditable.getElementsByClassName("view-title")[0].className = "view-title text-center segment-title text-secondary mt-4";

    // get HTML collection of fields via classnames and convert into an array
    const fields = documentEditable.getElementsByClassName("actual-field");
    const fieldsArray = [].slice.call(fields);

    // prepend the editable view to the parent container
    documentParent.prepend(documentEditable);

    // iterate through each available field
    fieldsArray.forEach(function (field, index) {
      // create a new input element
      const input = document.createElement("input");

      // set input attribtues
      input.type = "text";
      input.placeholder = field.id;
      input.className = field.className + " pseudo-field";
      input.id = field.id + "-editable";

      // add input event listener for changing the values
      // and call changeField function to change the value
      // on the actual field
      input.addEventListener('keyup', function (e) {
        changeField(input.id, field.id)
      });

      // replace the old static field with the new input element
      field.replaceWith(input);
    });
  }
};
