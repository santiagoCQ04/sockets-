<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header componetizado -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated
 class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>🍔 Sabores brutales, esencia callejera. Cocina rápida con alma de restaurante.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style lang="scss">
.body--light {
  background: #dad9d9;
}

.q-page-container {
  background: inherit;
}
</style>