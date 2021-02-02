<template>
  <div class="card">
    <div class="card-header">
        <ol>
          <li v-for="item in todayPlay.record">{{ item.content[0].detail[0].isgood }} {{ item.content[0].detail[0].speed }}km {{ item.content[0].detail[0].type }}<span class="badge badge-pill badge-primary">{{ item.content[0].detail[0].description }}</span></li>
        </ol>
    </div>
  <div class="card-body">
    <b-container>
      <b-card-group deck>
          <b-card bg-variant="primary" text-variant="white" header='投手資訊' class="text-center ml-0">
            <img src="@/assets/lions/陳韻文.jpg" class="float-left">
              <b-card-text>投手:{{ plays.content[0].pitcher }}</b-card-text>
              <b-card-text>防禦率:3.42</b-card-text>
              <b-card-text>WHIP:0.81</b-card-text>
          </b-card>
        </b-card-group>
        <b-card-group deck>
          <b-card bg-variant="danger" text-variant="white" header="打者資訊" class="text-center ml-0">
            <img src="https://picsum.photos/100/100/?random=2" class="float-left">
            <b-card-text>打者:{{ plays.content[0].hitter }}</b-card-text>
            <b-card-text>打擊率:0.342</b-card-text>
            <b-card-text>長打率: 0.543</b-card-text>
          </b-card>
        </b-card-group>
    </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'current',
  computed : {
    // 如果沒有今天日期的對戰資料，就跑新增頁面
    todayPlay () {
      return this.$store.state.what
    }
  },
  props: {
    plays: Object,
  }
}
</script>