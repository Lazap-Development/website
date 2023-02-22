<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="upper_content">
          <div class="lazap_features">
            <p class="one">Lightweight</p>
            <p class="two">Cross-platform</p>
            <p class="three">Game launcher</p>
          </div>
          <div class="seperating_line"></div>
          <img class="lazap_logo" src="../assets/128x128.png" alt="Lazap Icon">
          <p class="program_name">Lazap</p>
        </div>
        <div class="download">
          <a class="download_button" :href="lazap_latest_release_page">Get Lazap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const lazap_latest_release_page = "https://github.com/Lazap-Development/Lazap/releases/latest"

    return {
      lazap_latest_release_page
    }
  }
}
</script>

<style scoped>
  @import url("@/styles/scoped/MainPage.css");
</style>