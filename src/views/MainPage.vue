<template>
  <div class="top">
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

    <div class="lightweight">
      <p class="lightweight_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
      <img src="https://via.placeholder.com/600x400/23">
    </div>

    <div class="cross_platform">
      <img src="https://via.placeholder.com/600x400/23">
      <p class="cross_platform_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
    </div>

    <div class="game_launcher">
      <p class="game_launcher_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
      <img src="https://via.placeholder.com/600x400/23">
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