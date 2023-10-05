var selectedRow = null;


function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}
// The deleteRow() method removes the row at the specified index from a table. Tip: Use the insertRow() to create and insert a new row
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}






let nameError = document.getElementById('name-error');


function validateName() {
     let name = document.getElementById('fullName').value;

     if (name.length == 0) {
          nameError.innerHTML = 'Name is requried';
     }
     if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
          nameError.innerHTML = 'write full name';
          return false;
     }
     nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;
}

function validateForm(){
     if(!validateName() || !validatephone() || !validateEmail() || !validateMessage()){
          submitError.style.display = 'block';
          submitError.innerHTML = 'Please fix error to submit';
          setTimeout(function(){submitError.style.display = 'none'}, 3000)
          return false;
     }
}