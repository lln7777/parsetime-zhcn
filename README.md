## 字符转时间
示例:
```javascript
const pt = require('parsetime-zhcn');

console.log(pt.new('01月13号8:30am').toLocaleString())
console.log(pt.new('01月13号8:30pm').toLocaleString())
console.log(pt.new('01月13号早上8:30').toLocaleString())
console.log(pt.new('01月13号下午16:30').toLocaleString())
console.log(pt.new('2013年01月13日16:30:18').toLocaleString())
console.log(pt.new('2018-01-13 16:29:06').toLocaleString())
console.log(pt.new('10:10:10').toLocaleString())
console.log(pt.new('10：10').toLocaleString())
console.log(pt.new('10：10 pm').toLocaleString())
console.log(pt.new('下午10：10').toLocaleString())
console.log(pt.new('上午10：10 pm').toLocaleString())
console.log(pt.new('am 10：10').toLocaleString())
console.log(pt.new('pm 10：10').toLocaleString())
console.log(pt.new('1秒钟前').toLocaleString())
console.log(pt.new('1分钟前').toLocaleString())
console.log(pt.new('16天前').toLocaleString())
console.log(pt.new('1个月前').toLocaleString())
console.log(pt.new('1年前').toLocaleString())
console.log(pt.new('刚刚').toLocaleString())
```

## 时间转字符 
推荐 moment.js