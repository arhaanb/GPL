<template>
  <div id="app">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="container">
      <div id="nav">
        <div class="logo">
          <router-link to="/">
            <img
              src="https://cdn.discordapp.com/attachments/746757291973410938/747340957082583080/unknown.png"
              alt="Cura"
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

div#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-emphasis: bold;
  font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: 700;
}

::-moz-selection {
  color: white;
  background: #020303;
}

::selection {
  color: white;
  background: #020303;
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
</style>
