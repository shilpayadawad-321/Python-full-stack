let employees = JSON.parse(localStorage.getItem("employees")) || [];

const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTable");

// Load existing employees on page load
displayEmployees();

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const empId = document.getElementById("empId").value.trim();
    const name = document.getElementById("name").value.trim();
    const department = document.getElementById("department").value.trim();
    const email = document.getElementById("email").value.trim();
    const salary = document.getElementById("salary").value.trim();

    // Validation
    if (!empId || !name || !department || !email || !salary) {
        alert("All fields are mandatory");
        return;
    }

    if (isNaN(salary)) {
        alert("Salary must be numeric");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return;
    }

    const employee = { empId, name, department, email, salary };
    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
    form.reset();
});

// Display employees
function displayEmployees() {
    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.empId}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.email}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="delete-btn" onclick="deleteEmployee(${index})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Delete employee
function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        displayEmployees();
    }
}

// Email validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}