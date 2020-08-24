<template>
  <div class="container">
    <div class="row sec">
      <div>
        <div class="seven columns textshit">
          <h1 class="semi">Gokuldham Premiere League</h1>
          <p>
            The Gokuldham Premiere League is a Twenty20 cricket league
            in Gokuldham contested during August of every year by four
            teams representing four different buildings in Gokuldham. It operates
            on a system of promotion and relegation.
          </p>
          <router-link to="/about">
            <button class="cool">Buy Tickets</button>
          </router-link>
        </div>
        <div class="five columns">
          <img src="@/assets/bat.svg" alt class="bats" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.bats {
  width: 100%;
}

.row.sec {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.semi {
  font-weight: 600;
}

h1.semi {
  font-size: 4em;
}

button.cool {
  margin-top: 2em;
}

@media (max-width: 550px) {
  .row.sec {
		height: auto;
		margin-top: 3.5em;
  }
  .textshit {
    margin-bottom: 4em;
  }
  h1.semi {
    font-size: 2.5em;
  }
}
</style>
