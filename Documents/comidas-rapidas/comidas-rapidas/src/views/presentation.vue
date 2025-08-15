<template>
  <Header/>
<carrusel/>
<Tags/>
<!-- Historia del negocio - Integración directa -->
    <div class="history-container q-px-md q-py-xl bg-grey-2">
      <div class="text-center q-mb-xl">
        <h2 class="history-title text-primary">Nuestra Historia</h2>
        <q-separator color="primary" class="q-mx-auto" style="width: 100px; height: 3px"/>
      </div>

      <div class="row justify-center q-col-gutter-lg">
        <!-- Tarjeta 1 -->
        <div class="col-12 col-md-5">
          <q-card class="history-card">
            <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" height="200px"/>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">2010 - Los Inicios</div>
              <p class="q-mt-sm">Comenzamos como un modesto puesto callejero en el corazón de la ciudad, con solo tres mesas y nuestra pasión por la buena comida.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta 2 -->
        <div class="col-12 col-md-5">
          <q-card class="history-card">
            <q-img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" height="200px"/>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">2015 - Primer Local</div>
              <p class="q-mt-sm">Gracias al apoyo de nuestros clientes, abrimos nuestro primer restaurante con capacidad para 40 personas y un menú ampliado.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta 3 -->
        <div class="col-12 col-md-5">
          <q-card class="history-card">
            <q-img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" height="200px"/>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">2020 - Reconocimiento</div>
              <p class="q-mt-sm">Ganamos el premio "Mejor Comida Rápida Local" por tres años consecutivos, consolidando nuestra reputación.</p>
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta 4 -->
        <div class="col-12 col-md-5">
          <q-card class="history-card">
            <q-img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" height="200px"/>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">2023 - Expansión</div>
              <p class="q-mt-sm">Inauguramos nuestra tercera sucursal y lanzamos servicio de delivery en toda el área metropolitana.</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Misión y Visión -->
      <div class="row q-mt-xl q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="bg-primary text-white mission-card">
            <q-card-section>
              <div class="text-h5 q-mb-md">Misión</div>
              <p>Ofrecer comida rápida de calidad con ingredientes frescos y recetas tradicionales, manteniendo precios accesibles para toda la familia.</p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered class="bg-secondary text-white vision-card">
            <q-card-section>
              <div class="text-h5 q-mb-md">Visión</div>
              <p>Convertirnos en la cadena de comida rápida local más querida, expandiéndonos a nivel regional sin perder nuestra esencia familiar.</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
</template>
<script setup>
import carrusel from '../components/carrusel.vue';
import Header from '../components/Header.vue';

</script>