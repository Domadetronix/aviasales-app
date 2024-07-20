import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg'
import TicketList from '../ticket-list/ticket-list'
import MyTabs from '../myTabs/my-tabs'
import classes from './app.module.scss'
import Filter from '../filter/filter'
import { fetchTickets } from '../../store/ticket-reducer'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes['main-content']}>
        <Filter />
        <div className={classes.container}>
          <MyTabs />
          <TicketList />
        </div>
      </div>
    </div>
  )
}
