document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const categorySelect = document.getElementById('category-select');
    const amountInput = document.getElementById('amount-input');
    const dateInput = document.getElementById('date-input');
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmount = document.getElementById('total-amount');

    addBtn.addEventListener('click', function() {
        const category = categorySelect.value;
        const amount = amountInput.value;
        const date = dateInput.value;

        const data = new URLSearchParams();
        data.append('category', category);
        data.append('amount', amount);
        data.append('date', date);

        fetch('save_expense.php', {
            method: 'POST',
            body: data
        }).then(response => response.text())
          .then(responseText => {
              console.log(responseText);
              loadExpenses();
          });
    });

    function loadExpenses() {
        fetch('load_expenses.php')
            .then(response => response.json())
            .then(expenses => {
                expenseTableBody.innerHTML = '';
                let total = 0;
                expenses.forEach(expense => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${expense.category}</td>
                        <td>${expense.amount}</td>
                        <td>${expense.date}</td>
                        <td><button class="delete-btn" data-id="${expense.id}">Delete</button></td>
                    `;
                    total += parseFloat(expense.amount);
                    expenseTableBody.appendChild(row);
                });
                totalAmount.textContent = total.toFixed(2);

                // Add delete functionality
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        deleteExpense(id);
                    });
                });
            });
    }

    function deleteExpense(id) {
        fetch(`delete_expense.php?id=${id}`)
            .then(response => response.text())
            .then(responseText => {
                console.log(responseText);
                loadExpenses();
            });
    }

    // Initial load of expenses
    loadExpenses();
});
