const timeHelp = require('./');

console.log(timeHelp.new('01月13号8:30am').toLocaleString())
console.log(timeHelp.new('01月13号8:30pm').toLocaleString())
console.log(timeHelp.new('01月13号早上8:30').toLocaleString())
console.log(timeHelp.new('01月13号下午16:30').toLocaleString())
console.log(timeHelp.new('2013年01月13日16:30:18').toLocaleString())
console.log(timeHelp.new('2018-01-13 16:29:06').toLocaleString())
console.log(timeHelp.new('10:10:10').toLocaleString())
console.log(timeHelp.new('10：10').toLocaleString())
console.log(timeHelp.new('10：10 pm').toLocaleString())
console.log(timeHelp.new('下午10：10').toLocaleString())
console.log(timeHelp.new('上午10：10 pm').toLocaleString())
console.log(timeHelp.new('am 10：10').toLocaleString())
console.log(timeHelp.new('pm 10：10').toLocaleString())
console.log(timeHelp.new('1秒钟前').toLocaleString())
console.log(timeHelp.new('1分钟前').toLocaleString())
console.log(timeHelp.new('16天前').toLocaleString())
console.log(timeHelp.new('1个月前').toLocaleString())
console.log(timeHelp.new('1年前').toLocaleString())
console.log(timeHelp.new('刚刚').toLocaleString())