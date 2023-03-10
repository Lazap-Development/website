<template>
  <div class="top">
    <div class="main">
      <div class="content">
        <div class="upper_content">
          <div class="features">
            <p @click="jumpTo('lightweight')">Lightweight</p>
            <p @click="jumpTo('cross-platform')">Cross-platform</p>
            <p @click="jumpTo('game-launcher')">Game launcher</p>
          </div>
          <div class="v-divider"></div>
          <img class="logo" src="../assets/128x128.png" alt="Lazap Icon" />
          <p class="title">Lazap</p>
        </div>
        <div class="buttons">
          <a class="button" :href="lazap_latest_release_page">Get Lazap</a>
          <a class="button" href="#lightweight">Learn More</a>
        </div>
      </div>
    </div>

    <div class="desc-content" id="lightweight">
      <div class="text">
        <h2 class="subtitle">Lightweight</h2>
        <div class="h-divider"></div>
        <p>
          Lazap is a lightweight game launcher designed to provide seamless
          experience to gamers. Lazap also has a minimalistic, simplistic
          and modernistic look.
        </p>
      </div>
      <img class="image" src="../assets/images/lightweight.png" />
    </div>

    <div class="desc-content" id="cross-platform">
      <img class="image" src="../assets/images/cross-platform.png" />
      <div class="text">
        <h2 class="subtitle">Cross-platform</h2>
        <div class="h-divider"></div>
        Lazap's cross-platform compatibility strives to be lightweight
        while also maintaining the same user experience across both
        Windows and Linux.
      </div>
    </div>

    <div class="desc-content mgnb" id="game-launcher">
      <div class="text">
        <h2 class="subtitle">Game Launcher</h2>
        <div class="h-divider"></div>
        With Lazap, gamers can easily access their games installed on
        their computer without the hassle of loading different game
        launchers.
      </div>
      <img class="image" src="../assets/images/Lazap-Main.png" />
    </div>
  </div>

  <div class="footer">
    Copyright © 2023 Lazap Development
  </div>
</template>

<script>
export default {
  data() {
    const lazap_latest_release_page =
      "https://github.com/Lazap-Development/Lazap/releases/latest";

    return {
      lazap_latest_release_page,
    };
  },
  methods: {
    jumpTo(location) {
      window.location.href = `#${location}`;
    },
  },
};
</script>

<style scoped>
@import url("@/styles/scoped/MainPage.css");
</style>
