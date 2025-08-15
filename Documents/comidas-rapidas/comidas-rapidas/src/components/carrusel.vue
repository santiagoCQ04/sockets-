<template>
  <div class="contenedor-padre">
  <q-page class="q-pa-none">
    <q-carousel
      v-model="slide"
      animated
      infinite
      autoplay
      :autoplay-interval="3000"
      height="100vh"
      class="food-carousel"
    >
      <!-- Hamburguesa -->
      <q-carousel-slide 
        name="burger" 
        img-src="https://www.catedracosgaya.com.ar/tipoblog/2023/wp-content/uploads/2023/08/esto_es_vicio_hamburguesas_revista_mine.gif"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h2 text-weight-bold">Hamburguesas Artesanales</div>
            <div class="text-subtitle1">Carne 100% premium con ingredientes frescos</div>
          </div>
        </div>
      </q-carousel-slide>
      
      <!-- Perro Caliente -->
      <q-carousel-slide 
        name="hotdog" 
        img-src="https://www.elespectador.com/resizer/-0sGhnnCsqrOLITarHhY_D0WMsE=/arc-anglerfish-arc2-prod-elespectador/public/ZUXKZ5NPSFA7DCOM5YLOPV5QGA.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h2 text-weight-bold">Perros Calientes Gourmet</div>
            <div class="text-subtitle1">Salchichas premium con toppings especiales</div>
          </div>
        </div>
      </q-carousel-slide>
      
      <!-- Pizza -->
      <q-carousel-slide 
        name="papas fritas" 
        img-src="https://www.cucinare.tv/wp-content/uploads/2024/08/papasfritas1.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h2 text-weight-bold">Papas fritas Recién Horneadas</div>
            <div class="text-subtitle1">Masa artesanal con ingredientes selectos</div>
          </div>
        </div>
      </q-carousel-slide>
       <q-carousel-slide 
        name="micheladas" 
        img-src="https://www.clamato.com/img/recipes/desktop/es_autentica-michelada-sin-alcohol-desktop.jpg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h2 text-weight-bold">Micheladas</div>
            <div class="text-subtitle1">Un delicioso sabor Para un caluroso dia</div>
          </div>
        </div>
      </q-carousel-slide>

       <q-carousel-slide 
        name="cervezas" 
        img-src="https://conideintelligente.com/wp-content/uploads/2021/07/9K5A1316_Fotor-1.jpeg"
      >
        <div class="text-container">
          <div class="text-content">
            <div class="text-h2 text-weight-bold">Cervezas Frias</div>
            <div class="text-subtitle1">Tomate una y Calma la sed</div>
          </div>
        </div>
        
      </q-carousel-slide>
    </q-carousel>
  </q-page>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref('burger')
</script>

<style lang="scss">

.contenedor-padre {
  position: relative;
  top: -100px;
}
.food-carousel {
  .q-carousel__slide {
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .text-container {
    width: 100%;
    background: rgba(0, 0, 0, 0.6); /* Fondo negro transparente */
    padding: 20px 10px;
    backdrop-filter: blur(5px); /* Efecto de desenfoque opcional */
  }

  .text-content {
    margin: 0 auto;
    padding: 0 20px;
    color: white;
    text-align: center;
  }

}
</style>