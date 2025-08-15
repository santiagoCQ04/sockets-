<template>
<q-tabs align="left">
      <q-route-tab 
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.route" 
        :label="tab.label"
      />
    </q-tabs>
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

<style lang="scss">
.q-tabs {
  border-bottom: 2px solid #FFD700;
  
}

.q-tab {
  font-weight: bold;
  letter-spacing: 1px;
}

</style>