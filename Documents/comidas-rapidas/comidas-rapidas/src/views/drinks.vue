<template>
    <Header/>
  <div class="drinks-view">
    <div class="encabezado">
      <div class="imagen_encabezado">
      <img src="https://img2.rtve.es/i/?w=1600&i=1627054232707.jpg">
      </div>
      <div class="titulo-encabezado">
        <h3>"🍹 MIXOLOGÍA URBANA</h3>
      </div>
    </div>
    <div class="cards-container">
      <Card
        v-for="(item, index) in drinks"
        :key="index"
        :Image="item.image"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '../components/card.vue';
import Header from '../components/Header.vue';

const drinks = ref([
    {
    image: 'https://www.gastronomiaycia.com/wp-content/uploads/2019/05/coca_cola_combinado-680x510.jpg',
    title: '🥤 Cola Clásica urbana',
    description: 'Nuestra versión artesanal de la clásica cola, con un toque de vainilla y canela. Refresco burbujeante con 30% menos azúcar que las marcas comerciales.',
    price: '$3.49',
    id: 1
  },
  {
    image: 'https://i.ytimg.com/vi/gfarZg32Tu0/maxresdefault.jpg',
    title: '🍋 Limonada Electrica',
    description: 'Mezcla explosiva de limones amarillos y verdes, endulzada con miel orgánica y un toque secreto de jengibre. ¡La receta que nos piden por litros en verano!',
    price: '$4.29',
    id: 2
  },
  {
    image: 'https://wallpapers.com/images/hd/fruity-mix-tropical-drink-tn7lkwu6nz7jnvm0.jpg',
    title: '🍹 Tropical Punch',
    description: 'Cóctel de frutas exóticas: mango, maracuyá y guayaba con gas natural. Sin alcohol, pero con todo el sabor de los trópicos. Servido con rodajas de naranja.',
    price: '$4.99',
    id: 3
  },
  {
    image: 'https://media.gq.com.mx/photos/5f988ccdc10dacf7b3e87c07/16:9/w_2560%2Cc_limit/Cover.jpg',
    title: '☕ Café Mordico',
    description: 'Blend exclusivo de granos arábicos tostados oscuros, preparado al momento. Acompáñalo con un shot de vainilla o caramelo sin costo adicional.',
    price: '$3.99',
    id: 4
  },
  {
    image: 'https://www.conasi.eu/blog/wp-content/uploads/2019/08/aguas-saborizadas-2-900x600.jpg',
    title: '🍓 Fresa Brutal',
    description: 'Batido cremoso hecho con helado de vainilla y fresas frescas, coronado con crema batida y chispas de chocolate negro. ¡Indulgencia en cada sorbo!',
    price: '$5.99',
    id: 5
  },
  {
    image: 'https://www.telemundo.com/sites/nbcutelemundo/files/images/article/cover/2016/03/04/agua-infusionada.jpg',
    title: '💧Infusionada',
    description: 'Selección diaria de frutas de temporada y hierbas frescas infusionadas por 12 horas. Opciones: pepino-menta, piña-albahaca o frutos rojos.',
    price: '$2.99',
    id: 6
  }
]);
</script>

<style scoped>

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
.imagen_encabezado {
  position: relative;
  top: -100px;
}
.imagen_encabezado img{
  width: 100%;
  height: 100vh;
}
.titulo-encabezado h3{
  display: flex;
  justify-content: center;
  font-size: 50px;
}
</style>