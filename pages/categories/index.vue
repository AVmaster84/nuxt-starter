<script setup>
// This will be the categories listing page
const categories = [
  { id: 1, name: 'Electronics', slug: 'electronics', count: 42 },
  { id: 2, name: 'Clothing', slug: 'clothing', count: 36 },
  { id: 3, name: 'Home & Garden', slug: 'home-garden', count: 28 },
  { id: 4, name: 'Books', slug: 'books', count: 51 }
]
</script>

<template>
  <div>
    <h1>Product Categories</h1>
    <div class="categories-grid">
      <NuxtLink 
        v-for="category in categories" 
        :key="category.id" 
        :to="`/categories/${category.slug}`"
        class="category-card"
      >
        <h2>{{ category.name }}</h2>
        <p>{{ category.count }} products</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.category-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.category-card:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}
</style>
