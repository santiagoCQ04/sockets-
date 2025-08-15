<template>
    <Header/>
  <div class="hotdogs-view">
    <div class="encabezado">
      <div class="imagen_encabezado">
      <img src="https://imag.bonviveur.com/perrito-caliente.jpg">
      </div>
      <div class="titulo-encabezado">
        <h3>""🔥 PERROS QUE QUEMAN</h3>
      </div>
    </div>
    <div class="cards-container">
      <Card
        v-for="(item, index) in hotdogs"
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

const hotdogs = ref([
   {
    image: 'https://www.futboltotal.com.mx/wp-content/uploads/2022/07/hot-dogs-estilo-americano.jpg',
    title: '🍤 🇺🇸 Yankee Clásico',
    description: 'Salchicha Angus ahumada, coronada con cebolla caramelizada crujiente, mostaza artesanal y nuestro relish de pepinos casero. Servido en pan brioche tostado con semillas de amapola.',
    price: '$4.99',
    id: 1
  },
  {
    image: 'https://www.animalgourmet.com/wp-content/uploads/2022/04/Chili_dogs-e1650898474936.jpeg',
    title: '🌶️ Fuego Azteca',
    description: 'Salchicha de jalapeño artesanal, guacamole fresco con toque de lima, pico de gallo picante y crema agria balanceada. ¡Una explosión de sabores mexicanos en cada bocado!',
    price: '$5.99',
    id: 2
  },
  {
    image: 'https://images.rappi.com/restaurants_background/home-1670255853049.jpg',
    title: '🧀 Queso Loco',
    description: 'Doble capa de queso cheddar y gouda derretidos sobre salchicha premium, acompañado de tocino crocante y cebolla crispy. ¡El pecado capital de los amantes del queso!',
    price: '$6.49',
    id: 3
  },
  {
    image: 'https://cunit.com.co/wp-content/uploads/2024/09/perro-caliente-tipo-bbq-con-salchicha-jumbo-cunit-2.jpg',
    title: '🥓 BBQ Carnívoro',
    description: 'Salchicha ahumada bañada en salsa BBQ casera, coronada con aros de cebolla dorados y trozos de tocino maple-glaze. Para los que no tienen miedo a mancharse los dedos.',
    price: '$6.99',
    id: 4
  },
  {
    image: 'https://www.elcoladorchino.com/wp-content/uploads/2020/05/hot-dog-pollo-rustido-gambas-ketchup-mostasza-coco-PORTADA.jpg',
    title: '🍯 Dulce Picante',
    description: 'La combinación perfecta: salchicha glaseada con miel-chipotle, acompañada de mango fresco en cubos y chiles toreados. Sabores que juegan al equilibrio perfecto.',
    price: '$5.99',
    id: 5
  },
  {
    image: 'http://nestleprofessional.es/sites/default/files/2023-09/sensational-sausage_01_sensation.png',
    title: '🥑 Verde Power',
    description: 'Opción fresca: salchicha de pavo, guacamole especiado, germinados orgánicos y tomates cherry. Para los que buscan lo delicioso sin culpas.',
    price: '$6.49',
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