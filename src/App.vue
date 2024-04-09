<script>
import AppHeader from '@/components/AppHeader.vue';
// import InputSearch from '@/components/InputSearch.vue';
// import ContactList from '@/components/ContactList.vue';

export default {
  components: {
    AppHeader,
    // InputSearch,
    // ContactList
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 400px;
  margin: auto;
}
</style>
