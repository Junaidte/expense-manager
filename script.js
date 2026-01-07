let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let amount = document.getElementById("amount").value;
    let note = document.getElementById("note").value;

    if (amount === "") return;

    let now = new Date();

    expenses.push({
        amount: Number(amount),
        note: note,
        date: now.toLocaleString(),
        month: now.getMonth(),
        year: now.getFullYear()
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("amount").value = "";
    document.getElementById("note").value = "";

    showExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    showExpenses();
}

function showExpenses() {
    let list = document.getElementById("list");
    let total = 0;
    let monthTotal = 0;

    let now = new Date();
    list.innerHTML = "";

    expenses.forEach((e, index) => {
        total += e.amount;

        if (e.month === now.getMonth() && e.year === now.getFullYear()) {
            monthTotal += e.amount;
        }

        let li = document.createElement("li");
        li.innerHTML = `
            <span>${e.note} - Rs ${e.amount}<br><small>${e.date}</small></span>
            <span class="delete" onclick="deleteExpense(${index})">❌</span>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
    document.getElementById("monthTotal").innerText = monthTotal;
}

showExpenses();
