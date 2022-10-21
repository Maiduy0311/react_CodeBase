import React from 'react'

import { useTranslation } from 'react-i18next'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'

import { setCredentials } from '@apps/slices/authSlice'
import { saveAccessToken } from '@utils/localStorage'
import { useAppDispatch } from '@apps/hooks'
import logo from '@images/logo-scuti.png'

import './style.scss'

interface PayloadInterface {
  email: string
  password: string
}

export default function LoginPage() {
  const { t: trans } = useTranslation()
  const appDispatch = useAppDispatch()

  const onFinish = (values: PayloadInterface) => {
    appDispatch(
      setCredentials({
        user: {
          email: values.email,
          id: 1,
          phone: +84123123456,
          avatar: 'http://abc.xyz',
        },
        access_token: '123',
      }),
    )

    saveAccessToken('123')
  }

  return (
    <article id="login-page">
      <Row justify="center" className="w-100 mb-30">
        <Col span={6}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: trans('emailErrorMessage') },
                { type: 'email', message: trans('emailErrorMessage') },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={trans('email')}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: trans('passwordErrorMessage') },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={trans('password')}
              />
            </Form.Item>
            <Form.Item className="text-center" noStyle>
              <Button type="primary" htmlType="submit" block>
                <b>{trans('btnLogin')}</b>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </article>
  )
}
