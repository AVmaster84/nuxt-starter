<template>
   <Container>
    <header class="sticky top-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-300">
    <div class="navbar container max-w-7xl mx-auto px-4">
      <div class="navbar-start">
        <div class="dropdown lg:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <Icon name="heroicons:bars-3" class="h-5 w-5" />
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/categories">Categories</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl font-bold text-gradient">
          ShopNow
        </NuxtLink>
      </div>
      
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-2">
          <li><NuxtLink to="/" class="btn btn-ghost">Home</NuxtLink></li>
          <li><NuxtLink to="/categories" class="btn btn-ghost">Categories</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn btn-ghost">Products</NuxtLink></li>
        </ul>
      </div>
      
      <div class="navbar-end gap-2">
        <div class="form-control hidden md:flex">
          <input type="text" placeholder="Search products..." class="input input-bordered w-64" />
        </div>
        
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <Icon name="heroicons:shopping-cart" class="h-5 w-5" />
              <span v-if="cartStore.totalItems > 0" class="badge badge-sm indicator-item badge-primary">
                {{ cartStore.totalItems }}
              </span>
            </div>
          </div>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow-xl">
            <div class="card-body">
              <span class="font-bold text-lg">{{ cartStore.totalItems }} Items</span>
              <div class="max-h-60 overflow-y-auto space-y-2">
                <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-3 p-2 bg-base-200 rounded">
                  <img :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded" />
                  <div class="flex-1">
                    <p class="font-medium text-sm">{{ item.name }}</p>
                    <p class="text-xs text-base-content/70">Qty: {{ item.quantity }}</p>
                  </div>
                  <p class="font-bold">${{ item.price }}</p>
                </div>
              </div>
              <span class="text-info">Subtotal: ${{ cartStore.totalPrice.toFixed(2) }}</span>
              <div class="card-actions">
                <NuxtLink to="/cart" class="btn btn-primary btn-block">View cart</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-8 rounded-full">
              <Icon name="heroicons:user-circle" class="h-8 w-8" />
            </div>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </Container>
</template>