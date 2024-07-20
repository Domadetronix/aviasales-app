/* eslint-disable no-nested-ternary */
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Spin, Button, ConfigProvider } from 'antd'
import { useEffect } from 'react'
import Ticket from '../ticket/ticket'
import classes from './ticket-list.module.scss'
import { setVisibleTicketList, resizeTicketList, setFilteredTicketList, sortTickets } from '../../store/ticket-reducer'

export default function TicketList() {
  const { ticketList, error, isLoading, sortingPoint } = useSelector((state) => state.ticketReducer)
  const dispatch = useDispatch()

  const filterValue = useSelector((state) => state.filterReducer)
  useEffect(() => {
    dispatch(sortTickets(sortingPoint))
    dispatch(setFilteredTicketList(filterValue))
    dispatch(setVisibleTicketList())
  }, [dispatch, filterValue, ticketList, sortingPoint])
  const visibleTicketList = useSelector((state) => state.ticketReducer.visibleTicketList)

  const getMoreTickets = () => {
    dispatch(resizeTicketList())
    dispatch(setVisibleTicketList())
  }

  return (
    <div className={classes['ticket-list']}>
      {isLoading ? (
        <Spin />
      ) : error || !ticketList.length ? (
        <Alert message="Error" type="error" showIcon />
      ) : (
        visibleTicketList.map((ticket) => (
          <Ticket ticket={ticket} key={visibleTicketList.indexOf(ticket)} id={visibleTicketList.indexOf(ticket)} />
        ))
      )}

      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#FFFFFF',
            fontSize: 12,
            colorPrimary: 'background: rgba(33, 150, 243, 1)',
            colorText: '#4A4A4A',
            colorBorder: '#DFE5EC',
          },
        }}
      >
        <Button type="primary" className={classes['more-tickets']} onClick={getMoreTickets} block>
          Показать ещё 5 билетов
        </Button>
      </ConfigProvider>
    </div>
  )
}
