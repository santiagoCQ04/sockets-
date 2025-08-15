<template>
  <button 
    @click="handleClick"
    class="add-to-cart-btn"
    :disabled="isLoading"    
  > <!-- deshabilitar interactividad -->
    <span v-if="!isLoading">
      🛒 {{ buttonText || 'Añadir al carrito' }}
    </span>
    <span v-else>
      <q-spinner size="sm" /> Procesando...
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  buttonText: String,
  itemId: [String, Number],
  price: String
});

const emit = defineEmits(['item-added']);

const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;
  // Simula tiempo de procesamiento 
  setTimeout(() => {
    emit('item-added', {
      id: props.itemId,
      price: props.price
    });
    isLoading.value = false;
  }, 800);
};
</script>

<style scoped>
.add-to-cart-btn {
  background: #FFD700; /* Amarillo Mordico */
  color: #000;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.add-to-cart-btn:hover {
  background: #FFC000;
  transform: translateY(-2px);
}

.add-to-cart-btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>