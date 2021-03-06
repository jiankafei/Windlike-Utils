# Date
```js
interface DateModule {
  createFormatDate: (format: string) => (date: number) => string;
}
```

## createFormatDate
#### Describe
Create a function to format date.
```js
(format: string) => (date: number) => string;
```

#### Arguments
  - format(string): Y: Year;M: Month;D: Day;h: Hour;m: Minute;s: Second;w: Week(en);W: Week(cn)

#### Returns
(```(ms: number) => string;```)

#### Example
```js
const ms = 837043200000;  // 1996-07-11 08:00:00

utils.date.createFormatDate('YYYY-MM-DD hh:mm:ss w')(ms);  // 1996-07-11 08:00:00 Thur.
utils.date.createFormatDate('YY-MM-DD hh:mm:ss W')(ms);  // 96-07-11 08:00:00 星期四
```