<template>
  <div class="container">
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img
            src="https://cdn.discordapp.com/attachments/747002666827382818/747003006527995944/oie_z5v3jFre8hIr.png"
          />
          <h3>Jetha Ke Jaanbaaz</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>

          <button onclick="window.location.href='../about';">Matches</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img
            src="https://cdn.discordapp.com/attachments/747002666827382818/747003006527995944/oie_z5v3jFre8hIr.png"
          />
          <h3>Mehta Ke Marathi</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
          <button onclick="window.location.href='../about';">Matches</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img
            src="https://cdn.discordapp.com/attachments/747002666827382818/747003006527995944/oie_z5v3jFre8hIr.png"
          />
          <h3>Blaster Babita</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
          <button onclick="window.location.href='../about';">Matches</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img
            src="https://cdn.discordapp.com/attachments/747002666827382818/747003006527995944/oie_z5v3jFre8hIr.png"
          />
          <h3>Daya Dandiya Devils</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
          <button onclick="window.location.href='../about';">Matches</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;
}

.container {
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 0%;
}

.container .card {
  color: white;
  position: relative;
  cursor: pointer;
  padding-left: 5%;
}

.container .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #0d1012;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
  border-radius: 10%;
}

.container .card:hover .face.face1 {
  transform: translateY(0);
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content img {
  max-width: 100px;
}

.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;

  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2 {
  position: relative;
  background-color: #23292f;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8); 
      padding: 20px;*/
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content button {
  border: 0;
  background: none;
  display: block;
  margin: 15px auto;
  text-align: center;
  border: 1px solid white;

  outline: none;
  border-radius: 10px;
  transition: 0.1s;
  cursor: pointer;
  height: 38px;
  font-weight: 600;
  text-decoration: none;
  background-color: #0d1012;
  color: #fff;
  border: none;
  transform: translateY(-4px);
  transition: 0.5s;
  margin-top: 10%;
  width: 30%;
  text-align: center;
}

.container .card .face.face2 .content button:hover {
  transform: translateY(0px);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-color: #020303;
}
@media screen (max-width: 500px){
  .container{
     width: 10px;
    flex-direction: column;
    position: fixed;
  }
}
</style>
