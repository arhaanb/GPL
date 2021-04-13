<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/gpl_logo.png" alt="GPL" class="cura" />
          </router-link>
        </div>
        <div class="right">
          <router-link to="/about">Matches</router-link>
          <router-link to="/rankings">Rankings</router-link>
          <router-link to="/teams">Teams</router-link>
        </div>
      </div>
    </div>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer center">
      Made with 💖 by MINET
      <!-- <span class="red">&hearts;</span> -->
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.title.text {
  margin: 0;
}
html,
body {
  background-color: #23292f;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-emphasis: bold;
  font-family: 'nunito', sans-serif;
  font-style: normal;
}
.red {
  color: #c70039;
}
.footer {
  color: #fff;
  padding: 1em;
}
::-moz-selection {
  color: white;
  background: #e90b4a3b;
}
::selection {
  color: white;
  background: #e90b4a3b;
}
img,
.emoji,
.noselect,
button,
br {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  margin-top: 0em;
}
#nav .right a {
  margin-left: 1em;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 1em;
}
#nav a {
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #c70039;
}
.right {
  display: flex;
}
.cura {
  width: 8em;
}
button.cool {
  box-shadow: 0px 8px 32px rgba(217, 56, 69, 0.6);
  background-color: rgba(217, 56, 69, 0.8);
  color: #fff;
  border: none;
  transform: translateY(-4px);
  transition: 0.5s;
  font-family: 'nunito';
}
button.cool:hover {
  transform: translateY(0px);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: #000;
}
@media (max-width: 550px) {
  #nav {
    flex-direction: column;
  }
}
</style>
