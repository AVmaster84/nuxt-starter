<script setup>
const route = useRoute()
const { slug } = route.params

// This would normally come from an API
const category = {
  id: 1,
  name: slug.charAt(0).toUpperCase() + slug.slice(1),
  slug,
  description: `All our amazing ${slug} products`
}

const products = Array(10).fill().map((_, i) => ({
  id: i + 1,
  name: `${category.name} Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: '/images/placeholder-product.jpg'
}))
</script>

<template>
  <div>
    <h1>{{ category.name }}</h1>
    <p>{{ category.description }}</p>
    
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
