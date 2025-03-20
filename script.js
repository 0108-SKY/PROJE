// Form elemanlarını seçelim
const transactionForm = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const transactionList = document.getElementById("transaction-list");
const balanceElement = document.getElementById("balance");

let currentBalance = 0;

// Form gönderildiğinde çalışacak fonksiyon
transactionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeSelect.value;

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Lütfen geçerli bir açıklama ve tutar girin.");
    return;
  }

  // Yeni list item oluşturma
  const listItem = document.createElement("li");
  listItem.classList.add(type); // gelir veya gider olarak ekle
  listItem.innerHTML = `
    <span>${description}</span>
    <strong>${amount.toFixed(2)} ₺</strong>
  `;

  transactionList.appendChild(listItem);

  // Bakiye güncelle
  updateBalance(amount, type);

  // Formu sıfırla
  transactionForm.reset();
});

// Bakiye güncelleme fonksiyonu
function updateBalance(amount, type) {
  if (type === "gelir") {
    currentBalance += amount;
  } else {
    currentBalance -= amount;
  }
  balanceElement.innerText = currentBalance.toFixed(2);
}