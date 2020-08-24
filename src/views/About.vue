<template>
  <div class="container">
    <div class="flex-center section">
      <div class="card">
        <h1 class="semi center">August 1</h1>
        <div class="flex-center">
          <!-- <table>
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
          </table>-->
          <div class="flex">
            <div class="emocont">
              <div class="emoji">🥵</div>
              <p>Blaster Babita</p>
            </div>
            <div class="vs">VS</div>
            <div class="emocont">
              <div class="emoji">😳</div>
              <p>Daya Dandiya Devils</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h1 class="semi center">August 2</h1>
        <div class="flex-center">
          <div class="flex">
            <div class="emocont">
              <div class="emoji">😳</div>
              <p>Daya Dandiya Devils</p>
            </div>
            <div class="vs">VS</div>
            <div class="emocont">
              <div class="emoji">😍</div>
              <p>Mehta ke Maharathi</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h1 class="semi center">August 3</h1>
        <div class="flex-center">
          <div class="flex">
            <div class="emocont">
              <div class="emoji">🔥</div>
              <p>Jetha Ke Jaanbaaz</p>
            </div>
            <div class="vs">VS</div>
            <div class="emocont">
              <div class="emoji">😳</div>
              <p>Daya Dandiya Devils</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h1 class="semi center">August 4</h1>
        <div class="flex-center">
          <div class="flex">
            <div class="emocont">
              <div class="emoji">😍</div>
              <p>Mehta ke Maharathi</p>
            </div>
            <div class="vs">VS</div>
            <div class="emocont">
              <div class="emoji">🥵</div>
              <p>Blaster Babita</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  border: solid 2px rgba(255, 255, 255, 0.541);
  width: 65%;
  border-radius: 1em;
  margin-bottom: 2em;
	padding: 2em;
	transition: 0.7s;
}

.card:hover {
	transform: translateY(-4px);
	background-color: #c7003825;
}

h1.semi {
  color: #fff;
}

table {
  text-align: center;
  color: #fff;
}

.section {
  margin-top: 4em;
}

@media (max-width: 550px) {
  .card {
    width: 80%;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.vs {
  font-size: 2em;
}

.emoji {
  font-size: 4em;
  margin: 0 1em;
}

.emocont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
