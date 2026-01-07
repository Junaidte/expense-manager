let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let amount = document.getElementById("amount").value;
    let note = document.getElementById("note").value;

    if (amount === "") return;

    expenses.push({ amount: Number(amount), note: note });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";

    showExpenses();
}

function showExpenses() {
    let list = document.getElementById("list");
    let total = 0;
    list.innerHTML = "";

    expenses.forEach(e => {
        total += e.amount;
        let li = document.createElement("li");
        li.textContent = `${e.note} - Rs ${e.amount}`;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

showExpenses();
