<template>
  <div>
    <!-- 如果沒有對戰資訊，新增對戰隊伍、場地 -->
    <div v-if="todayPlay == ''">
      <b-container>
        <b-row>
          <b-col cols="4"></b-col>
          <b-col cols="4">
            <label>對戰日期</label>
            <b-form-datepicker id="example-datepicker" v-model="formTeam.day" class="mb-2"></b-form-datepicker>
            <label>主場球隊</label>
            <b-form-select v-model="formTeam.home" :options="teams"></b-form-select>
            <label>客場球隊</label>
            <b-form-select v-model="formTeam.away" :options="teams"></b-form-select>
            <label>對戰球場</label>
            <b-input v-model="formTeam.place" placeholder="輸入對戰球場"></b-input>
            <b-button @click="sendTeam()">送出資訊</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 有對戰資訊就開始轉播 -->
    <div v-else>
      <b-container fluid>
        <b-row class="p-5 bg-white">
        <!-- 各打席詳細情況 -->
          <b-col cols="3">
            <current></current>
          </b-col>
          <!-- 中央記分板 -->
          <b-col cols="6">
            <score></score>
          <!-- 各局詳細情況 -->
            <everyRound></everyRound>
          </b-col>
          <!-- 逐球轉播表單 -->
          <b-col cols="3">
            <board></board>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

import score from '../components/score.vue'
import current from '../components/current.vue'
import everyRound from '../components/everyRound.vue'
import board from '../components/board.vue'

export default {
  name: 'try',
  data () {
    return {
      options: [
        { value: '準備中', text: '賽前準備' },
        { value: '一局上', text: '一局上' },
        { value: '一局下', text: '一局下' },
        { value: '二局上', text: '二局上' },
        { value: '二局下', text: '二局下' },
        { value: '三局上', text: '三局上' },
        { value: '三局下', text: '三局下' },
        { value: '四局上', text: '四局上' },
        { value: '四局下', text: '四局下' },
        { value: '五局上', text: '五局上' },
        { value: '五局下', text: '五局下' },
        { value: '六局上', text: '六局上' },
        { value: '六局下', text: '六局下' },
        { value: '七局上', text: '七局上' },
        { value: '七局下', text: '七局下' },
        { value: '八局上', text: '八局上' },
        { value: '八局下', text: '八局下' },
        { value: '九局上', text: '九局上' },
        { value: '九局下', text: '九局下' },
        { value: '十局上', text: '十局上' },
        { value: '十局下', text: '十局下' },
        { value: '十一局上', text: '十一局上' },
        { value: '十一局下', text: '十一局下' },
        { value: '十二局上', text: '十二局上' },
        { value: '十二局下', text: '十二局下' }
      ],
      // 對戰隊伍
      formTeam: {
        day: '',
        place: '',
        home: '',
        away: '',
        record: []
      },
      pitchers: [{ text: '選擇投手', value: null }, '王鏡銘', '江辰晏', '江承峰', '陳韻文', '傅于剛', '黃竣彥', '劉軒荅', '潘威倫', '鄭鈞仁'],
      hitters: [{ text: '選擇打者', value: null }, '江亮緯', '吳桀睿', '林安可', '林祖傑', '林靖凱', '唐肇廷'],
      types: [{ text: '選擇球種', value: null }, '直球', '指叉球', '伸卡球', '滑球', '曲球', '卡特球'],
      teams: [{ text: '選擇球隊', value: null }, '統一獅', '中信兄弟', '樂天桃猿', '富邦悍將', '味全龍']
    }
  },

  computed: {
    // 如果沒有今天日期的對戰資料，就跑新增頁面
    todayPlay () {
      return this.$store.state.what
    }
  },
  components: {
    score,
    current,
    everyRound,
    board
  }
}
</script>
