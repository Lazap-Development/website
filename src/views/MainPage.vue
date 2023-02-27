<template>
  <div class="top">
    <div class="main">
      <div class="content">
        <div class="upper_content">
          <div class="lazap_features">
            <p @click="jumpTo('lightweight')" >Lightweight</p>
            <p @click="jumpTo('cross_platform')">Cross-platform</p>
            <p @click="jumpTo('game_launcher')">Game launcher</p>
          </div>
          <div class="v-divider"></div>
          <img class="logo" src="../assets/128x128.png" alt="Lazap Icon">
          <p class="title">Lazap</p>
        </div>
        <div class="buttons">
          <a class="button" :href="lazap_latest_release_page">Get Lazap</a>
          <a class="button" href="#lightweight">Learn More</a>
        </div>
      </div>
    </div>

    <div class="desc-content" id="lightweight">
      <div class="text align-r">
        <h2 class="subtitle">Lightweight</h2>
        <div class="h-divider"></div>
        <p>Lazap is a lightweight, cross-platform game launcher designed to provide seamless experience to gamers. Alongside being lightweight, Lazap has a minimalistic, simplistic and modernistic look. Lazap's user-friendly design makes it run smoothly and efficiently on any device. With Lazap, gamers can enjoy a minimalistic and modernistic user interface, cross-platform compatibility, and a lightweight design that ensures optimal performance.</p>
      </div>
      <img class="image" src="../assets/images/Lazap-Main.png">
    </div>

    <div class="desc-content" id="cross_platform">
      <img class="image" src="../assets/images/Lazap-Main.png">
      <div class="text">
        <h2 class="subtitle">Cross-platform</h2>
        <div class="h-divider"></div>
        As a cross-platform game launcher, Lazap is compatible with Windows as well as Linux. Lazap's cross-platform compatibility does not hinder its performance or its lightweight experience and tries to maintain the same performance in both Windows and Linux.
      </div>
    </div>

    <div class="desc-content" id="game_launcher">
      <div class="text align-r">
        <h2 class="subtitle">Game Launcher</h2>
        <div class="h-divider"></div>
        With Lazap, gamers can easily access their games that have been installed on their computer from a singular place without the hassle of loading different game launchers before deciding what to game. The app consists of a glancing and modernist UI which makes it easier for users to interact. Lazap also provides a range of customisations, such as accent color and the ability to add custom games which are not automatically detected by the launcher.
      </div>
      <img class="image" src="../assets/images/Lazap-Main.png">
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