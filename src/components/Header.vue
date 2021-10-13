<template>
    <nav class="flex justify-between items-center py-2">
        <!-- select language -->
        <div class="relative">
            <button
                class="flex items-center hover:text-indigo-500"
                @click="isOptionsExpanded = !isOptionsExpanded"
                @blur="isOptionsExpanded = false"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
                </svg>
                <span class="text-xs ml-1">{{ selectedOption }}</span>

            </button>
            <transition
                enter-active-class="transform transition duration-500 ease-custom"
                enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                leave-active-class="transform transition duration-300 ease-custom"
                leave-class="translate-y-0 scale-y-100 opacity-100"
                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
            >
                <ul
                v-show="isOptionsExpanded"
                class="absolute bg-white divide-y left-0 overflow-hidden rounded-lg shadow-lg"
                >
                <li
                    v-for="(option, index) in options"
                    :key="index"
                    class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                    @mousedown.prevent="setOption(option)"
                >
                    {{ option }}
                </li>
                </ul>
            </transition>
        </div>
        <!-- App Name / Logo -->
        <div class="flex items-center font-bold text-xl" href="#">
            Tech Jokes
        </div>
        <!-- toggle dark mode -->
        <div class="flex items-center pl-3" href="#">
            <button
                class="rounded-md focus:outline-none hover:text-indigo-500"
                @click="toggleTheme"
                aria-label="Toggle color mode"
            >
                <div v-if="!darkMode">
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        ></path>
                    </svg>
                </div>
                <div v-if="darkMode">
                    <svg
                        class="w-5 h-5 text-indigo-500"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    darkMode: Boolean,
  },
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "en",
      // cz - Czech  - German  - English  - Spanish fr - French pt - Portuguese 
      options: ["en", "de", "cs", "es", "fr", "pt"]
    };
  },
  methods: {
    toggleTheme(){
        this.$parent.toggleTheme();
    },
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
      this.$emit('changeLanguageEvent', option);
    }
  },
}
</script>
