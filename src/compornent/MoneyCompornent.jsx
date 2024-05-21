import React from 'react'

const MoneyCompornent = () => {
  return (
    <div>
        <h2>支出一覧</h2>
        <ul id="expense-list"></ul>
        <h2>月ごとの合計</h2>
        <p id="total-amount">合計: 0 円</p>
        <p id="category-totals"></p>
        <p id="month-comparison"></p>
    </div>
  )
}

export default MoneyCompornent;