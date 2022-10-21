import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RocketOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, MenuProps, Popconfirm } from 'antd'

import logo from '@images/logo-scuti.png'
import {
  readMenuOpenKeys,
  saveAccessToken,
  saveMenuOpenKeys,
} from '@utils/localStorage'
import { useAppDispatch } from '@apps/hooks'
import { logout } from '@apps/slices/authSlice'

const { Sider, Content } = Layout

interface AppLayout {
  children: JSX.Element
}

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Home page</Link>,
    key: '/',
    icon: <RocketOutlined />,
  },
]

export default function AppLayout({ children }: AppLayout) {
  const appDispatch = useAppDispatch()
  const getLocation = useLocation()
  const [current, setCurrent] = useState('')
  useEffect(() => {
    setCurrent(getLocation.pathname)
  }, [getLocation])

  const [openKeys, setOpenKeys] = useState<string[]>(readMenuOpenKeys())
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.keyPath.length > 1) {
      setOpenKeys(e.keyPath.slice(-1))
      saveMenuOpenKeys(e.keyPath.slice(-1))
    } else {
      setOpenKeys([])
      saveMenuOpenKeys('')
    }
  }

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys)
    saveMenuOpenKeys(keys)
  }

  const handleLogout = () => {
    appDispatch(logout())
    saveAccessToken('')
  }

  return (
    <Layout id="app-layout">
      <Sider trigger={null} width={250}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={current ? [current] : []}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          items={items}
        />

        <Popconfirm
          placement="rightTop"
          title="Are you sure to logout?"
          onConfirm={handleLogout}
          okText="Yes"
          cancelText="No"
        >
          <Button block>Logout</Button>
        </Popconfirm>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          <div className="app-content">{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}
