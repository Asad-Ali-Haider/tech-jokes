<template>
  <div class="w-full mb-10">
      <div class="text-4xl text-indigo-500 text-left leading-tight h-3">“</div>
      <p class="text-md text-center px-5 whitespace-pre-wrap">{{ joke }}</p>
      <div class="text-4xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
  </div>
</template>

<script>
export default {
  name: 'JokeCard',
  props: {
    joke: String
  }
}
</script>