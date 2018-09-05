const date  = {
  /**
   * 获取`年份`
   * 
   * @return {string} 年份
   * 
   * @example
   * ```
   * data.getYear(); // => '2018'
   * ```
   */
  getFullYear() {
    const date = new Date();
    return date.getFullYear();
  }
}

export default date;