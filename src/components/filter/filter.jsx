/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './filter.module.scss'
import { filterTickets } from '../../store/filter-reducer'

export default function Filter() {
  const dispatch = useDispatch()
  const filterValue = useSelector((state) => state.filterReducer)
  const toogleFilter = (event) => {
    dispatch(filterTickets(event.target.id))
  }

  return (
    <div className={classes.filters}>
      <div className={classes['filters-header']}>Количество пересадок</div>
      <form>
        <div className={classes.filters__item}>
          <label htmlFor="all">
            <input
              className={classes['custom-checkbox']}
              type="checkbox"
              id="all"
              name="all"
              checked={filterValue.all}
              onChange={toogleFilter}
            />
            <span className={classes['input-text']}>Все</span>
          </label>
        </div>
        <div className={classes.filters__item}>
          <label htmlFor="none">
            <input
              className={classes['custom-checkbox']}
              type="checkbox"
              id="none"
              checked={filterValue.none}
              onChange={toogleFilter}
            />
            <span className={classes['input-text']}>Без пересадок</span>
          </label>
        </div>
        <div className={classes.filters__item}>
          <label htmlFor="one">
            <input
              className={classes['custom-checkbox']}
              type="checkbox"
              id="one"
              checked={filterValue.one}
              onChange={toogleFilter}
            />
            <span className={classes['input-text']}>1 пересадка</span>
          </label>
        </div>
        <div className={classes.filters__item}>
          <label htmlFor="two">
            <input
              className={classes['custom-checkbox']}
              type="checkbox"
              id="two"
              checked={filterValue.two}
              onChange={toogleFilter}
            />
            <span className={classes['input-text']}>2 пересадки</span>
          </label>
        </div>
        <div className={classes.filters__item}>
          <label htmlFor="three">
            <input
              className={classes['custom-checkbox']}
              type="checkbox"
              id="three"
              checked={filterValue.three}
              onChange={toogleFilter}
            />
            <span className={classes['input-text']}>3 пересадки</span>
          </label>
        </div>
      </form>
      {/* 
      ANTD 
      <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
      ANTD */}
    </div>
  )
}
