interface DateModule {
  /**
   * @func
   * @desc 格式化日期的函数。
   * @param {string} createFormatDate - 需要的日期的格式。如:
               'YYYY-MM-DD hh:mm:ss ww'(ww为星期,小写w为英文，大写W为中文)
                'MM dd，YYYY hh:mm:ss'等等
	 * @return {function} 返回一个需要传入毫秒数作为参数的函数。
  */
  createFormatDate: (format: string) => (date: number) => string;
}

type DateFnName = 'getFullYear' | 'getMonth' | 'getDate' | 'getHours' | 'getMinutes' | 'getSeconds' | 'getDay';

interface DateFnNameObj {
  [prop: string]: DateFnName;
}