<template>
  <div class="container">
    <div class="row mt-5 bg-white">
      <div class="col">
          <div class="p-3 pt-5">
            <b-table
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              responsive="sm"
            ></b-table>
    <div>
      目前查看隊伍: <b>{{ sortBy }}</b>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortBy: '',
      sortDesc: false,
      fields: [
        { key: '隊伍', sortable: false },
        { key: '統一獅', sortable: true },
        { key: '中信兄弟', sortable: true },
        { key: '富邦悍將', sortable: true },
        { key: '樂天桃猿', sortable: true },
        { key: '味全龍', sortable: true }
      ],
      items: [
        { isActive: true, 隊伍: '統一獅', 統一獅: 10, 中信兄弟: 13, 富邦悍將: 15, 樂天桃猿: 21, 味全龍: 31 },
        { isActive: true, 隊伍: '中信兄弟', 統一獅: 20, 中信兄弟: 21, 富邦悍將: 31, 樂天桃猿: 21, 味全龍: 32 },
        { isActive: true, 隊伍: '富邦悍將', 統一獅: 30, 中信兄弟: 15, 富邦悍將: 41, 樂天桃猿: 32, 味全龍: 33 },
        { isActive: true, 隊伍: '樂天桃猿', 統一獅: 40, 中信兄弟: 35, 富邦悍將: 81, 樂天桃猿: 12, 味全龍: 13 },
        { isActive: true, 隊伍: '味全龍', 統一獅: 50, 中信兄弟: 17, 富邦悍將: 31, 樂天桃猿: 52, 味全龍: 53 }
      ]
    }
  }
}
</script>
