<!-- src/components/Header.vue -->
<template>
  <q-header reveal elevated class="caribe text-white" height-hint="150">
    <q-toolbar>
      <q-toolbar-title>
        <div class="titulo-header">
          <p>🔥"MORDISCO URBANO"</p>
        </div>
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab v-for="tab in tabs" :key="tab.name" :to="tab.route" :label="tab.label" />
    </q-tabs>
  </q-header>
</template>

<script setup>
const tabs = [
  { name: 'presentation', route: '/', label: 'presentation' },
  { name: 'burgers', route: '/burgers', label: 'burgers' },
  { name: 'hotdogs', route: '/dogs_and_sausages_and_fries', label: 'dogs and sausages and fries' },
  { name: 'drinks', route: '/drinks', label: 'drinks' },
  { name: 'extras', route: '/extra_meals', label: 'extra meals' }
]
</script>

<style scoped>
.caribe {
  background: rgba(25, 46, 56, 0.5);

}

.titulo-header p {
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
}

.q-toolbar-title {
  display: flex;
  align-items: center;
}
</style>