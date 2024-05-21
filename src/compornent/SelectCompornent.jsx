import React from 'react'
import './SelectCompornent.css'

const SelectCompornent = () => {
  return (
    <div>
        <form id="expense-form">
            <label for="item">購入品:</label>
            <input type="text" id="item" required/>
            <label for="category">カテゴリ:</label>
            <select id="category">
                <option value="食品">食品</option>
                <option value="交通">交通</option>
                <option value="娯楽">娯楽</option>
            </select>
            <input type="text" id="new-category" placeholder="新しいカテゴリを追加"/>
            <button type="button" id="add-category">カテゴリを追加</button>
            <label for="amount">金額:</label>
            <input type="number" id="amount" required/>
            <button type="submit">追加</button>
        </form>
        <div id="calendar">
            <input type="month" id="month-picker"/>
        </div>
    </div>
  )
}

export default SelectCompornent