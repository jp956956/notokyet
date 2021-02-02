<template>
  <b-tabs content-class="mt-3">
    <b-tab v-for="item in lists" :key="item.id"  :title="item.id">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info">{{ todayPlay.record[0].content[0].hitter}}</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <ol>
                <li v-for="item in todayPlay.record">{{ item.content[0].detail[0].isgood }} {{ item.content[0].detail[0].speed }}km {{ item.content[0].detail[0].type }}<span class="badge badge-pill badge-primary">{{ item.content[0].detail[0].description }}</span></li>
              </ol>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: 'everyRound',
  data () {
    return {
      lists: [
        { id: '一', name: '選項 1' },
        { id: '二', name: '選項 2' },
        { id: '三', name: '選項 3' },
        { id: '四', name: '選項 2' },
        { id: '五', name: '選項 2' },
        { id: '六', name: '選項 2' },
        { id: '七', name: '選項 2' },
        { id: '八', name: '選項 2' },
        { id: '九', name: '選項 2' },
        { id: '十', name: '選項 2' },
        { id: '十一', name: '選項 2' },
        { id: '十二', name: '選項 2' }
      ]
    }
  },
  computed : {
    // 如果沒有今天日期的對戰資料，就跑新增頁面
    todayPlay () {
      return this.$store.state.what
    }
  }
}
</script>