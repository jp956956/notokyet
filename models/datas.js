import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dataSchema = new Schema(
  {
    day: {
      type: Date,
      required: '比賽日期'
    },
    place: {
      type: String,
      required: '選擇場地'
    },
    home: {
      type: String,
      required: '請選擇主場球隊'
    },
    away: {
      type: String,
      required: '請選擇客場球隊'
    },
    record: {
      type: Array
    }
    // homeget: {
    //   type: Number,
    //   default: 0,
    //   required: '主場球隊得分'
    // },
    // awayget: {
    //   type: Number,
    //   default: 0,
    //   required: '客場球隊得分'
    // },
    // base: {
    //   type: Array,
    //   default: '壘上無人',
    //   required: '請選擇壘包狀況'
    // },
    // out: {
    //   type: Array,
    //   default: '無人出局',
    //   required: '請選擇出局數'
    // },
    // round: {
    //   type: String,
    //   required: '請選擇第幾局'
    // },
    // pitcher: {
    //   type: String,
    //   required: '請選擇投手'
    // },
    // speed: {
    //   type: Number,
    //   required: '請選擇球速'
    // },
    // type: {
    //   type: String,
    //   required: '請選擇球種'
    // },
    // isgood: {
    //   type: String,
    //   required: '請選擇好壞球'
    // },
    // hitter: {
    //   type: String,
    //   required: '請填打者'
    // },
    // description: {
    //   type: String,
    //   required: '請描述對戰內容'
    // }
  },
  {
    versionKey: false
  }
)

const datas = mongoose.model('datas', dataSchema)

export default datas
