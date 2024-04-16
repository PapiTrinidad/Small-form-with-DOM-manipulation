// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
document.getElementById('submit-Data').addEventListener('click', () => {
    let parent = document.getElementById('showData');
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');

    cell1.innerHTML = document.getElementById("creator").value;
    cell2.innerHTML = document.getElementById('creation').value;

    row.append(cell1, cell2);


    parent.appendChild(row);
    document.getElementById('creator').value = '';
    document.getElementById('creation').value = '';
})

// what does the .setAttribute() method do?
// This method is used to add, change, or update attributes and their values in an html Element.
// I can use this on the <td> element to where I would just add it like before and see what happens