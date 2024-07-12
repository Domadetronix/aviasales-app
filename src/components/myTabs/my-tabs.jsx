import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConfigProvider, Radio } from 'antd'

import classes from './my-tabs.module.scss'

export default function MyTabs() {
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
      <Radio.Group className={classes.tabs} defaultValue="a" font-size={12} buttonStyle="solid" width={300}>
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
