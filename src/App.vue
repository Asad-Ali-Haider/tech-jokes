<template>
  <div :class="{ 'dark': darkMode }">
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center md:p-5">
      <div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-400 md:rounded-xl shadow-lg overflow-hidden relative flex mobileBox w-full">
          <div class="flex flex-col justify-around h-full w-full p-3 md:p-6 overflow-y-auto">
            
            <!-- header -->
            <Header :darkMode="this.darkMode" @changeLanguageEvent="changeLanguage" />

            <!-- Content area -->
            <div class="flex justify-center items-center h-full">

              <span v-if="showMsg" class="absolute bg-indigo-500 bottom-20 left-7 px-3 py-2 rounded-2xl text-white text-xs">
                {{ msg }}
                <svg class="absolute h-2 w-full left-0 top-full text-indigo-500" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
              </span>

              <!-- If no joke is loaded yet, show a preloader -->
              <div v-if="loading">
                <img class="w-10" :src="loadingImage" alt="Loading">
              </div>

              <!-- Joke Card Contining a sigle joke -->
              <div v-else> 
                <JokeCard :joke="this.joke"/>
              </div>

            </div>

            <!-- Footer -->
            <Footer />
            <div v-if="showError" class="absolute bottom-24 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-2xl bg-red-500 text-center text-white transform">
              {{ errorMsg }}
            </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import JokeCard from './components/JokeCard.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data: function () {
    return {
      darkMode: false,
      loading: true,
      loadingImage: require('./assets/loading.gif'),
      language: "en",
      joke: '',
      msg: '',
      showError: '',
      showMsg: false
    }
  },
  components: {
    Header,
    JokeCard,
    Footer
  },
  methods:{
    toggleTheme() {
      this.darkMode = !this.darkMode
    },
    async fetchAJoke(){
      this.loading = true
      const res = await fetch('https://v2.jokeapi.dev/joke/Programming?lang='+this.language)
      const joke = await res.json()
      return joke
    },

    async callNewJoke(){
      if(navigator.onLine){
        const response = await this.fetchAJoke()
        // console.log(joke)
        if(!response.error){
          if(response.type == 'single'){
            this.joke = response.joke
          }
          else{
            this.joke = response.setup + '\n\n\n' + response.delivery
          }
        }
        else if(response.code == 106){
          this.joke = "Sorry, Jokes are not curently available in the selected language."
        }
        else{
          this.joke = "Sorry, something is not working fine."
        }
        this.loading = false
      }
      else{
        this.errorMsg = "Check your internet connection!"
        this.showError = true
        setTimeout(() => this.showError = false, 1000);
      }
    },

    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.joke);
          this.msg = "Copied!"
          this.showMsg = true
          setTimeout(() => this.showMsg = false, 800);
      } catch($e) {
          this.errorMsg = "Your device doesn't support!"
          this.showError = true
          setTimeout(() => this.showError = false, 1000);
      }
    },

    changeLanguage(selectedLanguage) {
        this.language = selectedLanguage
        console.log(this.language)
        this.callNewJoke()
    }

  },
  created(){
    this.callNewJoke()
  },
}
</script>

<style scoped>

.mobileBox{
  height:736px;
}

@media only screen and (max-width: 600px) 
  {
    .mobileBox{
      height:100vh;
    }
  } 

@media only screen and (min-width: 600px) 
  {
    .mobileBox{
      width:414px;
    }
  } 

</style>