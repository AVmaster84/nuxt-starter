<script setup>
const route = useRoute()
const { id } = route.params

// Sample product data - in a real app this would come from an API
const product = ref({
  id: id,
  name: `Premium Product ${id}`,
  price: 99.99,
  description: 'This is a detailed description of an amazing product that your customers will love. It includes all the features and benefits that make it stand out from competitors.',
  features: [
    'High-quality materials',
    'Eco-friendly manufacturing',
    'Lifetime warranty',
    'Free shipping'
  ],
  images: [
    '/images/placeholder-product.jpg',
    '/images/placeholder-product-2.jpg',
    '/images/placeholder-product-3.jpg'
  ],
  rating: 4.5,
  reviewCount: 42,
  inStock: true,
  colors: ['Black', 'White', 'Blue'],
  sizes: ['S', 'M', 'L', 'XL']
})

const selectedColor = ref(product.value.colors[0])
const selectedSize = ref(product.value.sizes[0])
const quantity = ref(1)
const activeImage = ref(0)

function addToCart() {
  // In a real app, this would add to your cart store
  alert(`Added to cart: ${quantity.value} x ${product.value.name} (${selectedSize.value}, ${selectedColor.value})`)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Image Gallery -->
      <div class="flex flex-col gap-4">
        <div class="card bg-base-100 shadow-md">
          <figure>
            <img 
              :src="product.images[activeImage]" 
              :alt="product.name"
              class="w-full h-96 object-cover"
            >
          </figure>
        </div>
        <div class="flex gap-2 overflow-x-auto">
          <div 
            v-for="(image, index) in product.images" 
            :key="index"
            class="card bg-base-100 shadow-sm cursor-pointer"
            :class="{ 'ring-2 ring-primary': activeImage === index }"
            @click="activeImage = index"
          >
            <figure>
              <img 
                :src="image" 
                :alt="`Thumbnail ${index + 1}`"
                class="w-20 h-20 object-cover"
              >
            </figure>
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        
        <div class="flex items-center gap-2">
          <div class="rating rating-half">
            <input type="radio" name="rating-10" class="rating-hidden" />
            <template v-for="i in 5" :key="i">
              <input 
                type="radio" 
                :checked="i - 0.5 <= product.rating"
                class="mask mask-star-2 mask-half-1"
              />
              <input 
                type="radio" 
                :checked="i <= product.rating"
                class="mask mask-star-2 mask-half-2"
              />
            </template>
          </div>
          <span class="text-sm">{{ product.rating }} ({{ product.reviewCount }} reviews)</span>
        </div>

        <div class="text-2xl font-bold">${{ product.price.toFixed(2) }}</div>

        <div 
          class="badge"
          :class="product.inStock ? 'badge-success' : 'badge-error'"
        >
          {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <p class="text-base">{{ product.description }}</p>

        <div class="flex flex-col gap-4 mt-4">
          <div class="form-control" v-if="product.colors">
            <label class="label">
              <span class="label-text">Color</span>
            </label>
            <select 
              v-model="selectedColor"
              class="select select-bordered w-full max-w-xs"
            >
              <option v-for="color in product.colors" :key="color" :value="color">{{ color }}</option>
            </select>
          </div>

          <div class="form-control" v-if="product.sizes">
            <label class="label">
              <span class="label-text">Size</span>
            </label>
            <select 
              v-model="selectedSize"
              class="select select-bordered w-full max-w-xs"
            >
              <option v-for="size in product.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Quantity</span>
            </label>
            <input 
              type="number" 
              v-model.number="quantity" 
              min="1" 
              :max="product.inStock ? 10 : 0"
              class="input input-bordered w-full max-w-xs"
            >
          </div>
        </div>

        <button 
          class="btn btn-primary mt-4"
          @click="addToCart"
          :disabled="!product.inStock"
        >
          {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
        </button>

        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Features</h3>
          <ul class="list-disc pl-5">
            <li v-for="(feature, index) in product.features" :key="index">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Product Tabs -->
    <div class="tabs tabs-boxed mb-4">
      <a class="tab tab-active">Description</a> 
      <a class="tab">Shipping & Returns</a>
    </div>

    <div class="card bg-base-100 shadow-sm p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4">Description</h3>
      <p>Additional detailed description about the product. You can include materials, dimensions, care instructions, and any other relevant information that helps customers make an informed decision.</p>
    </div>

    <div class="card bg-base-100 shadow-sm p-6">
      <h3 class="text-xl font-semibold mb-4">Shipping & Returns</h3>
      <p>Free shipping on all orders. 30-day return policy. See our full shipping and returns policy for more details.</p>
    </div>
  </div>
</template>
