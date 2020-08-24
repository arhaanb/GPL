<template>
  <div class="home">
     <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="container">
      <h1>Gokuldham Premiere League </h1>
      <p>The Gokuldham Premiere League is a Twenty20 cricket league<br>in Gokuldham contested during August of every year by eight<br>teams representing eight different cities in India. The league was<br>founded by the Board of Control for Cricket in India in 2008.</p>
      <button  class="button" href="https://dribbble.com/shots/4535669-Sweep-Shot">Buy Tickets</button>
      <div class="batsmen"> <img src="https://cdn.discordapp.com/attachments/747002666827382818/747450754565931038/batsmen.png" alt=""></div>
     
    </div>
  </div>
</template>

<script>

</script>
<style scoped>
.container h1{
  display: flex;
  flex-direction: column;
  height: 100%;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #ffffff;
  margin-left: 3%;
  margin-top: 5%;
  font-size: 5em;
}
 p{
    display: flex;
  flex-direction: column;
  height: 100%;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #ffffff;
  margin-left: 3%;
  margin-top: 0%;
   font-size: 1.3em;
}
.button{
  border: 0;
  background: none;
  display: block;

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
  margin-top: 2%;
  width: 10%;
  text-align: center;
  margin-left: 5%;
}
.button:hover{
   transform: translateY(0px);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background-color: #020303;
}
.batsmen  {
 margin-left: 55%;
 margin-top: -12.5%;
}
@media (max-width: 500px) {
.button{
     width: 20%;
  }
.batsmen  {
 margin-left: -10%;
 margin-top: -10%;
}
}
</style>
