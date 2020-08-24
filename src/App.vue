<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <div class="logo">
          <router-link to="/">
            <img
              src="https://media.discordapp.net/attachments/746757291973410938/747527488355303506/Web_1920_1.png"
              alt="GPL"
              class="cura"
            />
          </router-link>
        </div>
        <div class="right">
          <router-link to="/about">Matches</router-link>
          <router-link to="/rankings">Rankings</router-link>
          <router-link to="/teams">Teams</router-link>
        </div>
      </div>
    </div>
    <main class="App__main">
      <transition name="fade" mode="out-in">
        <router-view class="router" />
      </transition>
    </main>
  </div>
</template>

<style>
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
  font-family: "nunito", sans-serif;
  font-style: normal;
}

::-moz-selection {
  color: white;
  background: #c70039;
}

::selection {
  color: white;
  background: #c70039;
}

img,
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
/* Transitions */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* ----------- */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 0em;
}

#nav .right a {
  margin-left: 1em;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 1em;
}

#nav a {
  /* font-weight: bold; */
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #faf0e6;
}

.right {
  display: flex;
}

.cura {
  width: 8em;
}

button.cool {
  /* -webkit-box-shadow: 0px 8px 20px 7px rgba(56, 123, 217, 0.6);
	-moz-box-shadow: 0px 8px 20px 7px rgba(56, 123, 217, 0.6);
	box-shadow: 0px 8px 20px 7px rgba(56, 123, 217, 0.6); */
  box-shadow: 0px 8px 32px rgba(217, 56, 69, 0.6);
  background-color: rgba(217, 56, 69, 0.8);
  color: #fff;
  border: none;
  transform: translateY(-4px);
  transition: 0.5s;
  font-family: "nunito";
  /* box-shadow: 30px 30px 59px #cccccc, -30px -30px 59px #ffffff; */
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
