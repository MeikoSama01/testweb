// script.js - Interactive functionality for Niu Lai Website

document.addEventListener('DOMContentLoaded', () => {
    const productionTableBody = document.getElementById('productionTableBody');
    const productionForm = document.getElementById('productionForm');
    
    // Initial Data
    let productionData = [
        { id: 1, title: 'Cinematography', details: 'Golden Surrealism Style' },
        { id: 2, title: 'Lead Actor', details: 'Xin Yumeng' }
    ];

    // Render Table
    function renderTable() {
        productionTableBody.innerHTML = '';
        productionData.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.title}</td>
                <td>${item.details}</td>
                <td>
                    <button onclick="editRow(${index})">Edit</button>
                    <button onclick="deleteRow(${index})" style="background-color: #ff4d4d;">Delete</button>
                </td>
            `;
            productionTableBody.appendChild(row);
        });
    }

    // Add Row
    window.addRow = function() {
        const title = document.getElementById('newTitle').value;
        const details = document.getElementById('newDetails').value;
        if(title && details) {
            productionData.push({ id: Date.now(), title, details });
            renderTable();
            document.getElementById('newTitle').value = '';
            document.getElementById('newDetails').value = '';
        } else {
            alert('Please fill in both fields');
        }
    };

    // Delete Row
    window.deleteRow = function(index) {
        productionData.splice(index, 1);
        renderTable();
    };

    // Edit Row
    window.editRow = function(index) {
        const newTitle = prompt("Edit Title:", productionData[index].title);
        const newDetails = prompt("Edit Details:", productionData[index].details);
        if(newTitle !== null && newDetails !== null) {
            productionData[index].title = newTitle;
            productionData[index].details = newDetails;
            renderTable();
        }
    };

    renderTable();
});
