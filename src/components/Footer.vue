<template>
    <div class="p-5 px-6 flex items-center justify-between bg-gray-900 shadow-2xl text-gray-400 rounded-2xl cursor-pointer">
        <!-- copy to clipboard -->
        <div class="flex flex-col items-center transition ease-in duration-200 hover:text-indigo-500" @click="this.copyToClipboard">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
        </div>
        <!-- creadits -->
        <div class="flex flex-col items-center transition ease-in duration-200 hover:text-indigo-500 ">
            <a class="text-xs" href="https://www.twitter.com/asad_codes" target="_blank">Made by Asad</a>
        </div>
        <!-- next joke -->
        <div class="flex flex-col items-center hover:text-indigo-500" @click="this.callNewJoke">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="flex absolute -mt-1.5 ml-6">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-500">
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    callNewJoke(){
        this.$parent.callNewJoke();
    },
    copyToClipboard(){
        this.$parent.copyToClipboard();
    }
  },
}
</script>