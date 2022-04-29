const fetch = require('node-fetch')

const run = async () => {
  const res = await fetch(
    `https://api.mcd.cn/bff/store/stores/vicinity?addressId={number}&beType={number}&latitude={number}&longitude={number}&orderType={number}`,
    {
      // required params
      headers: {
        sign: `{string}`,
        sid: `{string}`,
        v: '{string.string...}',
        language: 'cn',
        ct: `{number}`,
        traceId: '{string}',
      },
    }
  )

  const obj = await res.json()

  if (
    obj?.success === false
    // && obj?.message?.includes('附近餐厅暂不营业')
    // or 在忙... 
  ) {
    console.log(`不营业, wait 1500ms retry...`)
    setTimeout(() => {
      run()
    }, 1500)
    return
  } else {
    // 营业了
    const BARK_TOKEN = ``
    fetch(`https://api.day.app/${BARK_TOKEN}/麦当劳/营业了?sound=update`)
    return
  }
}

run()
