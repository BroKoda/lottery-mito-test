<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
@import '~bootstrap/dist/css/bootstrap.css';
</style>

<template>
  <div class="container-fluid header-container">
    <div class="row h-100">
      <div class="col-12 align-self-center d-flex align-items-center flex-row">
        <img class="d-flex" src="./assets/logo.svg" alt=""/>
        <h1 class="d-flex">Lottery simulator</h1>
      </div>
    </div>
  </div>

  <div class="container result-container p-5">
    <div class="row">
      <div class="col-12">
        <h1>Result</h1>
      </div>
    </div>
    <div class="row justify-content-start">
      <div class="col-6">
        <div class="container ticket-counter p-3">
          <div class="row">
            <div class="col-6">
              <p>Number of tickets:</p>
            </div>
            <div class="col-6">
              <p class="js-number-of-tickets">6666</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p>Years spent:</p>
            </div>
            <div class="col-6">
              <p class="js-years-spent">8888</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <p>Cost of tickets:</p>
            </div>
            <div class="col-6">
              <p class="js-cost-of-tickets">9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 my-3">
        <div class="container px-0 match-counter-container">
          <div class="row match-counter-row mx-0">
            <div class="col-3 match-counter-box align-self-center text-center">
              <p>2 talalat</p>
              <p class="js-two-matches">0</p>
            </div>
            <div class="col-3 match-counter-box align-self-center text-center">
              <p>3 talalat</p>
              <p class="js-three-matches">0</p>
            </div>
            <div class="col-3 match-counter-box align-self-center text-center">
              <p>4 talalat</p>
              <p class="js-four-matches">0</p>
            </div>
            <div class="col-3 match-counter-box align-self-center text-center">
              <p>5 talalat</p>
              <p class="js-five-matches">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3 align-self-center my-2">
        <p class="winning-numbers-title">Winning numbers:</p>
      </div>
      <div class="col-9 my-2">
        <div class="winning-number-container align-items-center flex-row d-flex js-winning-numbers-container">
          <p class="winning-number-box js-winning-number">90</p>
          <p class="winning-number-box js-winning-number">12</p>
          <p class="winning-number-box js-winning-number">33</p>
          <p class="winning-number-box js-winning-number">44</p>
          <p class="winning-number-box js-winning-number">89</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3 align-self-center my-2">
        <p class="player-number-title">Player numbers:</p>
      </div>
      <div class="col-9 my-2">
        <div class="player-number-container align-items-center flex-row d-flex">
          <input type="number" class="player-number-box js-player-number"/>
          <input type="number" class="player-number-box js-player-number"/>
          <input type="number" class="player-number-box js-player-number"/>
          <input type="number" class="player-number-box js-player-number"/>
          <input type="number" class="player-number-box js-player-number"/>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3 align-self-center my-2">
        <p class="speed-title">Speed:</p>
      </div>
      <div class="col-9 align-self-center my-2">
        <div class="speed-container">
          <input type="range" min="1" max="1000" value="200" class="speed">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 lottery-controls mt-5">
        <div class="row">
          <div class="col-4">
            <a href="#" type="button" class="lottery-button js-get-player-number">Start</a>
          </div>
          <div class="col-4">
            <a href="#" type="button" class="lottery-button js-stop">Stop</a>
          </div>
          <div class="col-4">
            <a href="#" type="button" class="lottery-button js-random-numbers">Random numbers</a>
          </div>
        </div>


      </div>
    </div>
  </div>

  <p class="winning-number-box -template d-none">90</p>
</template>
