# wait-mcd

轮询 M 营业情况，开店后手机通知。

### Usage

```bash
  pnpm i
  pnpm start
```

### Mental

1. 思路是，先用代理工具，比如 charles ，把 M 手机 app 代理上，之后点击你的地址查询附近店家是否营业。查询的 url 格式为 `https://api.mcd.cn/bff/store/stores/vicinity?addressId={number}&beType={number}&latitude={number}&longitude={number}&orderType={number}`。

2. 若不营业，几秒后继续轮询。若营业，Bark 通知打到手机上

必要参数自行在请求体里捞。

### Inspiration

[dingdong-tools](https://github.com/mingjiezhou/notes/issues/10): 半自动叮咚买菜、美团买菜工具🔧，帮助监视当前派送时段(运力)
