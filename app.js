const inflow = document.getElementById("income");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
);

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions :[];

// Add transactions
function addTransaction(e) {
    e.preventDefault();

    if (text.nodeValue.trim() === "" || amount.nodeValue.trim() === "") {
        document.getElementById("error_msg").innerHTML = "<span >Error: Please enter decription and amount!</span>";
        setTimeout(
            () => (document.getElementById("error_msg").innerHTML = ""),
            5000
        );

    }

    else{
        const transaction = {
            id: generatorID(),
            text: text.nodeValue,
            amount: +amount.nodeValue,
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        updateLocalStorage();

        text.value = "";
        amount.value = "";

    }
}

//Generate Random Id

function generateID() {
    return Math.floor(Math.random() * 100000000);
}























