import datas from '../models/datas.js'

export const add = async (req, res) => {
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }

  try {
    await datas.create({
      day: req.body.day,
      place: req.body.place,
      home: req.body.home,
      away: req.body.away,
      record: req.body.record
      // homeget: req.body.homeget,
      // awayget: req.body.awayget,
      // base: req.body.base,
      // out: req.body.out,
      // round: req.body.round,
      // pitcher: req.body.pitcher,
      // speed: req.body.speed,
      // type: req.body.type,
      // isgood: req.body.isgood,
      // hitter: req.body.hitter,
      // description: req.body.description
    })
    res.status(200).send({ success: true, message: '' })
  } catch (error) {
    console.log('為什麼錯誤')
    console.log(error)
  }
}

export const search = async (req, res) => {
  try {
    const result = await datas.find({})
    res.status(200).send({ success: true, message: '', result })
    console.log('有成功到這裡')
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
