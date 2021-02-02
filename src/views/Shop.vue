<template>
  <div>
    <b-container class="mt-5 pl-5">
      <table class="ml-5">
        <thead>
        <tr>
        <th><input id="checkAll" type="checkbox" class="checkAll" @click="checkAllOrNot($event)"></th>
        <th>序號</th>
        <th>商品</th>
        <th>單價</th>
        <th>數量</th>
        <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="index">
        <td><input type="checkbox" class="checkItem" @click="checkItem($event,index)"></td>
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
        <button @click="reduceCount(index)" :disabled="item.count===1">-</button>
        {{item.count}}
        <button @click="addCount(index)">+</button>
        </td>
        <td>
        <button @click="remove(index)">刪除</button>
        </td>
        </tr>
        </tbody>
      </table>
      <div>總價：NT:{{totalPrice}}元</div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      /**
      * 購物車中的商品列表
      */
      list: [
        {
          id: 1,
          name: '統一獅球員卡',
          price: 450,
          count: 1
        },
        {
          id: 2,
          name: '統一獅實戰球衣',
          price: 3000,
          count: 1
        },
        {
          id: 3,
          name: '啦啦隊實戰球衣',
          price: 150000,
          count: 1
        },
        {
          id: 4,
          name: '雞腿便當',
          price: 150,
          count: 1
        }
      ],
      // 選中的商品列表，用於計算總價
      checkList: []
    }
  },
  mounted: function () {
    // 預設全選
    this.checkAll()
    this.checkAllElement(document.querySelector('.checkAll'))
  },
  computed: {
    /**
    * 總價
    * @returns {string}
    */
    totalPrice: function () {
      var total = 0
      for (var i = 0; i < this.checkList.length; i++) {
        var item = this.checkList[i]
        total += item.price * item.count
      }
      return total.toLocaleString()
    }
  },
  methods: {
    /**
* 減少購買數量
* @param index
*/
    reduceCount: function (index) {
      if (this.list[index].count === 1) return
      this.list[index].count--
    },
    /**
* 增加購買數量
* @param index
*/
    addCount: function (index) {
      this.list[index].count++
    },
    /**
* 移除商品
* @param index
*/
    remove: function (index) {
      console.log('remove-index:' + index)
      this.list.splice(index, 1)

      // 獲取商品序號
      var id = index + 1
      // 移除實際參與計算的商品
      var $checkList = this.checkList
      for (var i = 0; i < $checkList.length; i++) {
        var item = $checkList[i]
        if (item.id === id) {
          $checkList.splice(i, 1)
        }
      }
    },
    /**
* 全選或全不選
* @param event
*/
    checkAllOrNot: function (event) {
      if (event.target.checked) { // 全選
        this.checkAll()
        console.log('checkList：' + this.checkList)
      } else { // 全不選
        console.log('全不選')
        this.checkInItems('noCheckAll')
        this.checkList.splice(0)// 清空陣列
      }
    },
    /**
* 全選
*/
    checkAll: function () {
      console.log('全選')
      this.checkInItems('checkAll')
      this.checkList = this.list.concat()// 複製商品列表
    },
    /**
* 全選或全不選
* @param type checkAll：全選；其他：全不選
*/
    checkInItems: function (type) {
      var items = document.querySelectorAll('.checkItem')
      for (var i = 0; i < items.length; i++) {
        var item = items[i]
        if (type === 'checkAll') {
          item.checked = true
        } else {
          item.checked = false
        }
      }
    },
    /**
* 勾選或不勾選
*/
    checkItem: function (event, index) {
      console.log('checkItem')
      var element = event.target
      var $allCheck = document.querySelector('.checkAll')
      if (element.checked) { // 勾選，加入已選擇列表
        this.checkList.push(this.list[index])
        this.checkAllElement($allCheck)
      } else { // 不勾選，從已選擇列表中去除
        this.checkList.splice(index, 1)
        $allCheck.checked = false
      }
    },
    /**
* 勾選全選框
* @param element
*/
    checkAllElement: function (element) {
      // 如果所有的商品都已被勾選，則勾選全選框
      if (this.checkList.length === this.list.length) {
        element.checked = true
      }
    }
  }
}
</script>

<style>
[v-cloak] {
display: none;
}

table {
border: 1px solid #e9e9e9;
border-collapse: collapse;
border-spacing: 0;
empty-cells: show;
}

th {
font: bold 12px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
color: #4f6b72;
border-right: 1px solid #C1DAD7;
border-bottom: 1px solid #C1DAD7;
border-top: 1px solid #C1DAD7;
letter-spacing: 2px;
text-transform: uppercase;
text-align: left;
padding: 6px 6px 6px 12px;
background: #CAE8EA;
}

td {
border-right: 1px solid #C1DAD7;
border-bottom: 1px solid #C1DAD7;
background: #fff;
font-size:14px;
padding: 6px 6px 6px 12px;
color: #4f6b72;
}

</style>
