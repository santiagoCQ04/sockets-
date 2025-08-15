<template>
  <div class="card">
    <img :src="Image" :alt="title">
     <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p> 
    <div class="card-footer">
      <span class="price">{{ price }}</span>
      <AddToCartButton 
        :item-id="id" 
        :price="price"
        button-text="¡Lo quiero!"
        @item-added="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import AddToCartButton from "../components/boton.vue"
defineProps({
  Image: String, 
  title: String,
  description: String,
  price: String
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgb(192, 188, 188);
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 400px;
  box-shadow: 3px 1px 9px rgb(110, 109, 109);
}
.card-footer {
  margin-top: 6px; 
  display: flex;  
  align-items: center;
  gap: 30px;
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
}
.price {
  background: #000;
  color: #FFD700;
  padding: 6px 16px;
  border-radius: 50px;
  border: 2px solid #FFD700;
  position: relative;
  margin-top: 6px;
  overflow: hidden;
  cursor: pointer;
}

.card-description {
  flex: 1;
  margin: 8px 0;
  display: -webkit-box;    /* Activa el modelo de caja flexible */
  -webkit-box-orient: vertical; /*  Organiza el contenido verticalmente (de arriba a abajo). */
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 120px;
  line-height: 1.5;
  color: #555; 
  font-size: 20px;
}
.card-title {
  font-size: 1.5rem;
  margin: 12px 0 8px;
}
</style>