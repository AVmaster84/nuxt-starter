<script setup>
// This would normally come from a cart store
const cartItems = ref([
  {
    id: 1,
    name: 'Sample Product 1',
    price: 19.99,
    quantity: 2,
    image: '/images/placeholder-product.jpg'
  },
  {
    id: 2,
    name: 'Sample Product 2',
    price: 29.99,
    quantity: 1,
    image: '/images/placeholder-product.jpg'
  }
])

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

function updateQuantity(id, newQuantity) {
  const item = cartItems.value.find(item => item.id === id)
  if (item) {
    item.quantity = Math.max(1, newQuantity)
  }
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<template>
  <div>
    <h1>Your Shopping Cart</h1>
    
    <div v-if="cartItems.length > 0">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price.toFixed(2) }}</p>
            <div class="quantity-control">
              <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>
          </div>
          <button class="remove-btn" @click="removeItem(item.id)">Remove</button>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Subtotal: ${{ subtotal.toFixed(2) }}</h3>
        <NuxtLink to="/checkout" class="checkout-btn">Proceed to Checkout</NuxtLink>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Your cart is empty</p>
      <NuxtLink to="/categories">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.cart-items {
  margin: 2rem 0;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  align-items: center;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.quantity-control {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.cart-summary {
  margin-top: 2rem;
  text-align: right;
}

.checkout-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #000;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
}

.empty-cart {
  text-align: center;
  margin: 3rem 0;
}
</style>
