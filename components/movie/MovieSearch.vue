
<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  );
  movies.value = Search;
}
search();
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <NuxtImg :src="movie.Poster" 
          :alt="movie.title"
          width="300" 
          /> 
          <!-- <pre>
            {{ movie }}
          </pre>
          <NuxtImg :src="movie.Poster" 
          :alt="movie.title"
          width="300" 
          height="200"
          fit="fill"
          format="webp"
          loading="lazy"
          /> -->
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
