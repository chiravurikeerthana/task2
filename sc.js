var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["cid"] = document.getElementById("cid").value;
    formData["bookid"] = document.getElementById("bookid").value;
    formData["locid"] = document.getElementById("locid").value;
    formData["did"] = document.getElementById("did").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.cid;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.bookid;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.locid;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.did;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("cid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("bookid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("locid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("did").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.cid;
    selectedRow.cells[1].innerHTML = formData.bookid;
    selectedRow.cells[2].innerHTML = formData.locid;
    selectedRow.cells[3].innerHTML = formData.did;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Customer ID").value = '';
    document.getElementById("Booking ID").value = '';
    document.getElementById("Location ID").value = '';
    document.getElementById("Droame ID").value = '';
    selectedRow = null;
}