<template>
  <div id="board">
    <div class="left">
      <div>{{ plays.score.round }}</div>
      <div class="team">
        <div><img src="@/assets/兄弟.png" alt=""></div>
        <div>{{ plays.score.awayget }}</div>
      </div>
      <div class="team">
        <div><img src="@/assets/兄弟.png" alt=""></div>
        <div>{{ plays.score.homeget }}</div>
      </div>
    </div>
    <div class="right">
      <div></div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "board",
  props: {
    plays: Object
  }
}
</script>

<style>
  #board {
    background-image: url('../assets/棒球記分板.png');
    background-repeat: no-repeat ;
    background-size: cover;
    height: 25vh;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .left {
    width: 50%;
  }
  .left:nth-child(1) {
    margin-top: 4%;
    margin-left: 8%;
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    
  }
  .right {
    display: flex;
    width: 50%;
  }
  .left img {
    width: 40%;
    float: left;
  }
  .team {
    height: 40%;
  }
</style>