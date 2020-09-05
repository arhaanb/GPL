<template>
  <div class="container">
    <!-- <div class="left_box">
      <h1>Live Data</h1>
      <div class="left_box_inside">
        <h2>
          <span class="dot"></span> Live
        </h2>
        <table>
          <tr>
            <th>Jetha Ke Jaanbaaz</th>
            <td>205/5</td>
          </tr>
          <tr>
            <th>Mehta Ke Marathi</th>
            <td>205/5</td>
          </tr>
        </table>
      </div>
      <div class="left_box_inside2">
        <h3>Recent</h3>
        <table>
          <tr>
            <th>Blaster Babita</th>
            <td>205/5</td>
          </tr>
          <tr>
            <th>Dandiya Devils</th>
            <td>205/5</td>
          </tr>
        </table>
      </div>
      <div class="left_box_inside2">
        <h3>Upcoming</h3>
        <table>
          <tr>
            <th>Jetha Ke Jaanbaaz</th>
            <td>205/5</td>
          </tr>
          <tr>
            <th>Dandiya Devils</th>
            <td>205/5</td>
          </tr>
        </table>
      </div>
    </div>-->
    <div class="flex-center">
      <div class="featured">
        <div class="flex-center">
          <h4>Rankings</h4>
          <div class="midbox">
            <table class="ranking" cellspacing="2" cellpadding="1">
              <thead>
                <tr class="center">
                  <th>
                    <h5>Team Name</h5>
                  </th>
                  <th>
                    <h5>Played</h5>
                  </th>
                  <th>
                    <h5>Won</h5>
                  </th>
                  <th>
                    <h5>Lost</h5>
                  </th>
                  <th>
                    <h5>Points</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jetha Ke Jaanbaaz</td>
                  <td class="center">2</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                </tr>
                <tr>
                  <td>Mehta Ke Marathi</td>
                  <td class="center">2</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                </tr>
                <tr>
                  <td>Blaster Babita</td>
                  <td class="center">2</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                </tr>
                <tr>
                  <td>Dandiya Devils</td>
                  <td class="center">2</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                  <td class="center">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="mmm">
      <div class="flex-center">
        <div class="grid">
          <div class="cardsd">
            <div class="cardlol">
              <h1>🔥</h1>
              <h5>Jetha Ke Jaanbaaz</h5>
              <div class="center">
                <p>wins 2</p>
                <p>losses 3</p>
                <p>points 3</p>
              </div>
            </div>
          </div>

          <div class="cardsd">
            <div class="cardlol">
              <h1>🥵</h1>
              <h5>Blaster Babita</h5>
              <div class="center">
                <p>wins 2</p>
                <p>losses 3</p>
                <p>points 3</p>
              </div>
            </div>
          </div>

          <div class="cardsd">
            <div class="cardlol">
              <h1>😍</h1>
              <h5>Mehta ke Maharathi</h5>
              <div class="center">
                <p>wins 2</p>
                <p>losses 3</p>
                <p>points 3</p>
              </div>
            </div>
          </div>

          <div class="cardsd">
            <div class="cardlol">
              <h1>😳</h1>
              <h5>Daya Dandiya Devils</h5>
              <div class="center">
                <p>wins 2</p>
                <p>losses 3</p>
                <p>points 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.featured {
  color: #fff;
  background-color: #222;
  width: 60%;
  border-radius: 1.3em;
  padding: 2em;
  margin-bottom: 3em;
  margin-top: 3em;
  display: none;
}

.mmm {
  margin: 3em 0;
}

.cardsd {
  color: #fff;
  background-color: #222;
  /* width: 80%; */
  border-radius: 1.3em;
  padding: 2em;
}

.midbox {
  background-color: rgb(61, 61, 61, 0.2);
  padding: 2em;
  border-radius: 1.2em;
}

.cardsd:hover {
  transform: translateY(-4px);
}

.grid {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 750px) {
  .grid {
    display: grid;
    grid-gap: 3em;
    grid-template-columns: repeat(1, 1fr);
  }
  .mmm {
    margin: 2em 0;
  }
}

.cardlol {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.171);
  border-radius: 1em;
  padding: 2em;
  margin-bottom: 1em;
}

.cardlol .center p {
  margin-bottom: 0;
  text-transform: uppercase;
}

@media (max-width: 550px) {
  .featured {
    display: none;
  }
  .cardsd {
    display: block;
    margin-bottom: 0.5em;
  }
  .cardsd:first-of-type {
    margin-top: 3em;
  }
}
</style>