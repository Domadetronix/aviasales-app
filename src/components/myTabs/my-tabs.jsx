/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ConfigProvider, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import classes from './my-tabs.module.scss'
import { changeSortingPoint } from '../../store/ticket-reducer'

export default function MyTabs() {
  const dispatch = useDispatch()
  const sortPoint = useSelector((state) => state.ticketReducer.sortingPoint)
  const changeTab = (event) => {
    dispatch(changeSortingPoint(event.target.value))
  }
  return (
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
      <Radio.Group
        className={classes.tabs}
        defaultValue={sortPoint}
        value={sortPoint}
        font-size={12}
        buttonStyle="solid"
        width={300}
        onChange={changeTab}
      >
        <Radio.Button value="a" className={classes.tab} width={300}>
          Самый дешевый
        </Radio.Button>
        <Radio.Button value="b" className={classes.tab} width={300}>
          Самый быстрый
        </Radio.Button>
      </Radio.Group>
    </ConfigProvider>
  )
}
