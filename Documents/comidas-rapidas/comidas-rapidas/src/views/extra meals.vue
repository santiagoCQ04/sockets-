<template>
    <Header/>
  <div class="extra_meals-view">
    <div class="encabezado">
      <div class="imagen_encabezado">
      <img src="https://s1.ppllstatics.com/diariovasco/www/multimedia/201908/20/media/cortadas/comida-gastronomia-platos-italia-kUrE-RXT3H6k8R30qeWZiL4ovvCM-1248x770@Diario%20Vasco.jpg">
      </div>
      <div class="titulo-encabezado">
        <h3>"🌎 VIAJE GASTRONÓMICO</h3>
      </div>
    </div>
    <div class="cards-container">
      <Card
        v-for="(item, index) in comidasExtra"
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

const comidasExtra = ref([
  {
    image: 'https://www.elespectador.com/resizer/B9sJD3EvMDeWcJ1dPjmj5zhw0G0=/arc-anglerfish-arc2-prod-elespectador/public/5XBUUCQAVBBSFA5PLXYCUA7UNA.jpg',
    title: '🍟 Papas Brutales',
    description: 'Nuestras famosas papas rústicas con piel, triplemente cocidas: al vapor, horneadas y finalizadas en freidora. Acompañadas de dips artesanales (queso azul, chipotle-miel o trufa).',
    price: '$4.99',
    id: 1,
    tags: ['🔥 Más vendido', '🧀 3 dips']
  },
  {
    image: 'https://i.ytimg.com/vi/PZUBn7zkDNI/maxresdefault.jpg',
    title: '🧅 Aros de Cebolla Épicos',
    description: 'Aros gigantes empanizados con cerveza artesanal y mix de especias secretas. Crujientes por fuera, dulces y suaves por dentro. Incluye salsa ranch casera.',
    price: '$5.49',
    id: 2,
    tags: ['🏆 Clásico']
  },
  {
    image: 'https://images.getrecipekit.com/20240604183339-convertout-resized-volcanes3_klein_may24.jpg?aspect_ratio=1:1&quality=90&',
    title: '🧀 Queso Fundido Volcán',
    description: 'Mezcla derretida de queso chihuahua, gouda y pepper jack con chorizo artesanal. Servido en cazuela de hierro fundido con tortillas recién hechas.',
    price: '$7.99',
    id: 3,
    tags: ['🌶️ Picante opcional']
  },
  {
    image: 'https://lamanchega.com.uy/repo/img/27ensaladapower.jpg',
    title: '🥗 Ensalada Power',
    description: 'Mix de kale y espinacas con quinoa, aguacate, nueces caramelizadas, arándanos y aderezo de mango-habanero. Opción proteica: pollo grillé (+$2) o tofu (+$1).',
    price: '$8.49',
    id: 4,
    tags: ['🌱 Vegano']
  },
  {
    image: 'https://m.media-amazon.com/images/I/81+fFc4WjuL._UF894,1000_QL80_.jpg',
    title: '🍗 Alitas Apocalipsis',
    description: '12 piezas de alitas especiadas con tu elección de salsa: "Muerte Lenta" (bbq-chipotle), "Inferno" (habanero-mango) o "Black Magic" (salsa negra de carbón y miel).',
    price: '$9.99',
    id: 5,
    tags: ['💀 Nivel picante']
  },
  {
    image: 'https://cloudfront-us-east-1.images.arcpublishing.com/elheraldoco/2IPZQICRKZARDOEA4PN6X3UIMU.jpg',
    title: '🌮 Trio de Tacos Callejeros',
    description: 'Tres tacos gourmet: 1) Baja-style (pescado empanizado), 2) Pastor (cerdo marinado) y 3) Hongos al ajillo. Todos con doble tortilla hecha a mano y garnachas frescas.',
    price: '$8.99',
    id: 6,
    tags: ['🔄 Rotación diaria']
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