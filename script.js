document.getElementById("expenseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  fetch("add_transaction.php", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: `title=${title}&amount=${amount}&date=${date}&category=${category}`
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    loadTransactions();
  });
});

function loadTransactions() {
  fetch("fetch_transactions.php")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("transactions");
      container.innerHTML = "";
      data.forEach(row => {
        container.innerHTML += `
          <div class="transaction">
            <strong>${row.title}</strong> - ₹${row.amount} <br>
            <small>${row.category} | ${row.date}</small><br>
            <button onclick="deleteTransaction(${row.id})">Delete</button>
          </div>
        `;
      });
    });
}

function deleteTransaction(id) {
  fetch(`delete_transaction.php?id=${id}`)
    .then(res => res.text())
    .then(data => {
      alert(data);
      loadTransactions();
    });
}

loadTransactions();
