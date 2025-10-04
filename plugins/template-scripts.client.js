export default defineNuxtPlugin(() => {
  if (process.client) {
    // Template scripts will be loaded here
    // We'll convert the jQuery scripts to Vue composables later
    console.log('Template scripts loaded')
  }
})
