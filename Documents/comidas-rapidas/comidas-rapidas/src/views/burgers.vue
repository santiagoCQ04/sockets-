<template>
  <Header/>
  <div class="burgers-view">
    <div class="encabezado">
      <div class="imagen_encabezado">
      <img src="https://b-getal.com/Portals/12/Images/principalburger.jpg?ver=2023-01-30-164329-830">
      </div>
      <div class="titulo-encabezado">
        <h3>"🍔 HAMBURGUESAS BRUTALES</h3>
      </div>
    </div>
    <div class="cards-container">
      <Card
        v-for="(burger, index) in burgers"
        :key="index"
        :Image="burger.image"
        :title="burger.title"
        :description="burger.description"
        :price="burger.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '../components/card.vue';
import Header from '../components/Header.vue';


const burgers = ref([
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzO-z2ZG6_TXAJ2MLEhP-8WBeHuO-7eI0eg&s',
    title: '🍔 Hamburguesa Clásica',
    description: "Deléitate con nuestra Hamburguesa Clásica: un jugoso medallón de carne 100% res, acompañado de fresca lechuga, tomates recién cortados, cebolla caramelizada y nuestra salsa especial. Todo esto entre dos panes suaves ligeramente tostados. ¡Simple, pero irresistible!",
    price: '$5.99',
    id: 1
  },
  {
    image: 'https://chefeel.com/chefgeneralfiles/2021/07/front-view-burger-on-stand-scaled.jpg',
    title: '🧀 Hamburguesa con Queso',
    description: "La favorita de todos: nuestra Hamburguesa con Queso lleva un generoso topping de queso cheddar derretido sobre una jugosa carne de res, acompañado de crujiente tocino, aros de cebolla caramelizada y un toque de salsa BBQ ahumada. ¡Un clásico mejorado!",
    price: '$6.99',
    id: 2
  },
  {
    image: 'https://chihuahuahotdog.com/wp-content/uploads/2023/08/hamburguesa-doble-carne-premium.jpg',
    title: '🥓 Hamburguesa BBQ Bacon',
    description: "Para los amantes del sabor intenso: carne jugosa, doble porción de tocino crujiente, aros de cebolla dorados, bañados en nuestra salsa BBQ casera y coronados con queso americano derretido. ¡Una explosión de sabores en cada bocado!" ,
    price: '$8.99',
    id: 3
  },
  {
    image: 'https://s3.ppllstatics.com/ideal/gourmet/multimedia/2024/11/27/hamburguesa-oferplan.jpg',
    title: '🧅 Hamburguesa |Onion',
    description: '¡Atrévete con nuestro toque picante! Carne sazonada con especias especiales, jalapeños frescos, queso pepper jack, salsa de habanero y un toque de crema agria para balancear. Perfecta para los que aman las sensaciones fuertes.',
    price: '$10.99',
    id: 4
  },
  {
    image: 'https://enterese.net/wp-content/uploads/2020/01/El-Gringo-Burger-Joint-lanza-su-nueva-hamburguesa-La-Trucker.jpg',
    title: '🍍 Hamburguesa Hawaiana',
    description: 'Un viaje a los trópicos: jugosa carne glaseada con salsa teriyaki, cubierta con una rodaja de piña caramelizada, jamón dulce y queso suizo derretido. Servida en pan brioche con un toque de mayonesa de coco. ¡Sabores que te transportan a las islas!',
    price: '$11.99',
    id: 5
  },
  {
    image: 'https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg',
    title: '🌱 Beyond Meat Eco ',
    description: '  Sabor responsable: medallón Beyond Meat® con queso vegano, aguacate, tomate confitado, cebolla morada y alioli de albahaca. Servida en pan integral de espelta. 100% planta, 100% deliciosa. Aprovecha nuestra oferta y ven y disfruta de esta nueva creacíon',
    price: '$13.99',
    id: 6
  },
  
]);

</script>

<style scoped>
.cards-container {
   display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 20px 
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