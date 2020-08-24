<template>
  <div class="about">
    <div class="card_a">
      <div class="card1">
        <h1>
          <b>August 1</b>
        </h1>
        <table>
          <tbody>
          <tr>
            <th>Jetha Ke Jaanbaaz VS Mehta Ke Marathi</th>
            <th>4:00 PM</th>
            <th>Match 1</th>
          </tr>
          <th>Blaster Babita VS Daya Dandiya Devils</th>
          <th>8:00 PM</th>
          <th>Match 2</th>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card_a">
      <div class="card1">
        <h1>
          <b>August 2</b>
        </h1>
        <table>
          <tbody>
          <tr>
            <th>Jetha Ke Jaanbaaz VS Daya Dandiya Devils</th>
            <th>4:00 PM</th>
            <th>Match 3</th>
          </tr>
          <th>Blaster Babita VS Mehta Ke Marathi</th>
          <th>8:00 PM</th>
          <th>Match 4</th>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card_a">
      <div class="card1">
        <h1>
          <b>August 3</b>
        </h1>
        <table>
          <tbody>
          <tr>
            <th>Jetha Ke Jaanbaaz VS Blaster Babita</th>
            <th>4:00 PM</th>
            <th>Match 5</th>
          </tr>
          <th>Mehta Ke Marathi vs Daya Dandiya Devils</th>
          <th>8:00 PM</th>
          <th>Match 6</th>
        </tbody>
        </table>
      </div>
    </div>
    <div class="card_a">
      <div class="card1">
        <h1>
          <b>August 4</b>
        </h1>
        <table>
          <tbody>
          <tr>
            <th>Rank 3 vs Rank 4</th>
            <th>4:00 PM</th>
            <th>Match 7</th>
          </tr>
          <th>Rank 1 vs Rank 2</th>
          <th>8:00 PM</th>
          <th>Match 8</th>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
h1 {
  text-align: left;
  margin-left: 0%;
  margin-top: 5%;
  padding: 0%;

  font-size: 3rem;
}
table,
th,
td {
  border: 2px solid white;
  border-collapse: collapse;
  align-content: center;
}
th,
td {
  padding: 15px;
  width: 80%;
}

.card_a {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 70%;
  border-radius: 15px;
  background: #0d1012;
  margin-bottom: 2%;
  margin-top: 3%;
  padding: 2%;
  margin-left: 15%;
  color: white;
}

.card_a:hover {
  box-shadow: 10px 18px 8px 6px rgba(0, 0, 0, 0.2);
}

.card1 {
  padding: 2px 16px;
}
.br {
  padding-left: 200%;
}
tbody>th>:nth-child(2){
  width: 5%;
  padding: 2ex;
  
}

@media (max-width: 500px) {
  h2 {
    text-align: center;
    margin-left: 3%;
  }
  .card_a {
    margin-left: 5%;
    width: 85%;
    margin-top: 5%;
  }
  .card1 {
    padding-bottom: 10git add 0%;
  }
}
@media (max-width: 400px) {
  h2 {
    text-align: center;
    margin-left: 3%;
  }
  .card_a {
    margin-left: 5%;
    width: 100%;
    margin-top: 5%;
  }
  .card1 {
    padding-bottom: 3%;
  }
}
</style>
