<template>
  <div class="top">
    <div class="main">
      <div class="content">
        <div class="upper_content">
          <div class="lazap_features">
            <p class="one" @click="jumpTo('lightweight')" >Lightweight</p>
            <p class="two" @click="jumpTo('cross_platform')">Cross-platform</p>
            <p class="three" @click="jumpTo('game_launcher')">Game launcher</p>
          </div>
          <div class="seperating_line"></div>
          <img class="lazap_logo" src="../assets/128x128.png" alt="Lazap Icon">
          <p class="program_name">Lazap</p>
        </div>
        <div class="download">
          <a class="button" :href="lazap_latest_release_page">Get Lazap</a>
          <a class="button" href="#lightweight">Learn More</a>
        </div>
      </div>
    </div>

    <div class="lightweight" id="lightweight">
      <p class="lightweight_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
      <img class="image" src="https://source.unsplash.com/random">
    </div>

    <div class="cross_platform" id="cross_platform">
      <img class="image" src="https://source.unsplash.com/random">
      <p class="cross_platform_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
    </div>

    <div class="game_launcher" id="game_launcher">
      <p class="game_launcher_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita similique, nihil voluptas unde ipsum repellat vitae? Mollitia assumenda animi veniam nesciunt neque sit? Nesciunt impedit suscipit ratione ipsam voluptate!</p>
      <img class="image" src="https://source.unsplash.com/random">
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
  },
  methods: {
    jumpTo(location) {
      window.location.href = `#${location}`;
    }
  }
}
</script>

<style scoped>
  @import url("@/styles/scoped/MainPage.css");
</style>