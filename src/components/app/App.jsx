import React, { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import TicketList from '../ticket-list/ticket-list'
import ticketService from '../../services/tickets-service'
import MyTabs from '../myTabs/my-tabs'

import classes from './app.module.scss'

export default function App() {
  const [ticketList, setTicketList] = useState([])
  console.log('re-render')
  useEffect(() => {
    try {
      ticketService.GetTickets().then((res) => setTicketList(res))
    } catch (e) {
      console.log(e)
    }
  }, [])
  console.log(ticketList)
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes['main-content']}>
        <div className={classes.filters}>
          <div className={classes['filters-header']}>Количество пересадок</div>
          <form>
            <div className={classes.filters__item}>
              <label htmlFor="all">
                <input className={classes['custom-checkbox']} type="checkbox" id="all" name="all" />
                <span className={classes['input-text']}>Все</span>
              </label>
            </div>
            <div className={classes.filters__item}>
              <label htmlFor="none">
                <input className={classes['custom-checkbox']} type="checkbox" id="none" />
                <span className={classes['input-text']}>Без пересадок</span>
              </label>
            </div>
            <div className={classes.filters__item}>
              <label htmlFor="one-trans">
                <input className={classes['custom-checkbox']} type="checkbox" id="one-trans" />
                <span className={classes['input-text']}>1 пересадка</span>
              </label>
            </div>
            <div className={classes.filters__item}>
              <label htmlFor="two-trans">
                <input className={classes['custom-checkbox']} type="checkbox" id="two-trans" />
                <span className={classes['input-text']}>2 пересадки</span>
              </label>
            </div>
            <div className={classes.filters__item}>
              <label htmlFor="three-trans">
                <input className={classes['custom-checkbox']} type="checkbox" id="three-trans" />
                <span className={classes['input-text']}>3 пересадки</span>
              </label>
            </div>
          </form>
        </div>
        <div className={classes.container}>
          <MyTabs />
          <TicketList />
        </div>
      </div>
    </div>
  )
}
