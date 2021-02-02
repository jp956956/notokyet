<template>
  <div>
    <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      items: [
        { 隊伍: '大檸檬', 一: '13', 二: '', 三: '', 四: '', 五: '', 六: '', 七: '', 八: '', 九: '', 十: '', 十一: '', 十二: '', R: '', H: '', E: '' },
        { 隊伍: '小檸檬', 一: '', 二: '', 三: '', 四: '', 五: '', 六: '', 七: '', 八: '', 九: '', 十: '', 十一: '', 十二: '', R: '', H: '', E: '' }
      ]
    }
  }
}
</script>
