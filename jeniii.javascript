// Harga tiket per unit (misalnya Rp 100.000 per tiket)
const ticketPrice = 100000;

// Mendapatkan elemen HTML
const ticketQuantityInput = document.getElementById("ticket-quantity");
const calculateButton = document.getElementById("calculate-btn");
const totalPriceDisplay = document.getElementById("total-price");

// Fungsi untuk menghitung total harga
function calculateTotalPrice() {
    const quantity = parseInt(ticketQuantityInput.value);
    
    if (isNaN(quantity) || quantity < 1) {
        alert("Jumlah tiket tidak valid!");
        return;
    }

    const totalPrice = quantity * ticketPrice;
    totalPriceDisplay.textContent = totalPrice.toLocaleString();
}

// Menambahkan event listener pada tombol
calculateButton.addEventListener("click", calculateTotalPrice);
