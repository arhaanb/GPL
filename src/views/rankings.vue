<template>
  <div class="table">
    <table class="container">
      <thead>
        <tr>
          <th>
            <h1>Rank</h1>
          </th>
          <th>
            <h1>Team Name</h1>
          </th>
          <th>
            <h1>Played</h1>
          </th>
          <th>
            <h1>Won</h1>
          </th>
          <th>
            <h1>Lost</h1>
          </th>
          <th>
            <h1>NRR</h1>
          </th>
          <th>
            <h1>Points</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Team 1</td>

          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 2</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 3</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 4</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 5</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 6</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 7</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Team 8</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.container th h1 {
  font-family: europa, sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 1em;
  text-align: left;
  color: white;
}

.container td {
  font-family: europa, sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
  color: white;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 3%;
}

.container td,
.container th {
  padding-bottom: 1.7%;
  padding-top: 1.7%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #181c20;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #181c20;
}

.container th {
  background-color: #0d1012;
}

.container tr:hover {
  background-color: #0d1012;
}

@media screen and (max-width: 500px) {
  .container td,
  .container th {
    padding-bottom: 3%;
    padding-top: 3%;
  }
  .container {
    text-align: center;
    overflow: hidden;
    width: 100%;
    margin: 50px auto;
    display: table;
    padding: 3%;
  }
}
</style>