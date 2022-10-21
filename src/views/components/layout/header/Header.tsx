import React from 'react'

import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'

import logo from '@images/logo-scuti.png'

import './style.scss'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Row align="middle" justify="space-between">
          <Col span={6}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col span={18}>
            <ul className="main-menu">
              <li>
                <Link to="/">Company</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/">After-sales Service</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Member Only</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </header>
  )
}
