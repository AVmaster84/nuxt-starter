<script setup>
// This would normally come from a cart store
const cartItems = ref([
  {
    id: 1,
    name: 'Sample Product 1',
    price: 19.99,
    quantity: 2
  },
  {
    id: 2,
    name: 'Sample Product 2',
    price: 29.99,
    quantity: 1
  }
])

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const shipping = computed(() => 5.99) // Flat rate shipping
const tax = computed(() => subtotal.value * 0.08) // 8% tax
const total = computed(() => subtotal.value + shipping.value + tax.value)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvc: ''
})

function handleSubmit() {
  // Process payment and order here
  alert('Order placed successfully!')
}
</script>

<template>
  <div class="checkout-page">
    <h1>Checkout</h1>
    
    <div class="checkout-container">
      <div class="shipping-form">
        <h2>Shipping Information</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>First Name</label>
            <input v-model="form.firstName" required>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input v-model="form.lastName" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" required>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input v-model="form.address" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>City</label>
              <input v-model="form.city" required>
            </div>
            <div class="form-group">
              <label>State</label>
              <input v-model="form.state" required>
            </div>
            <div class="form-group">
              <label>ZIP Code</label>
              <input v-model="form.zip" required>
            </div>
          </div>

          <h2>Payment Information</h2>
          <div class="form-group">
            <label>Card Number</label>
            <input v-model="form.cardNumber" placeholder="1234 5678 9012 3456" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Expiration</label>
              <input v-model="form.cardExpiry" placeholder="MM/YY" required>
            </div>
            <div class="form-group">
              <label>CVC</label>
              <input v-model="form.cardCvc" placeholder="123" required>
            </div>
          </div>

          <button type="submit" class="submit-btn">Place Order</button>
        </form>
      </div>

      <div class="order-summary">
        <h2>Order Summary</h2>
        <div class="summary-item">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="summary-item">
          <span>Shipping</span>
          <span>${{ shipping.toFixed(2) }}</span>
        </div>
        <div class="summary-item">
          <span>Tax</span>
          <span>${{ tax.toFixed(2) }}</span>
        </div>
        <div class="summary-total">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.checkout-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.order-summary {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}
</style>
