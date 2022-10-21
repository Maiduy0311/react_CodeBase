import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import './style.scss'

interface ParentsInterface {
  label: string
  path: string
}

interface AppBreadcrumbInterface {
  parents?: ParentsInterface[]
  pageName: string
}

export default function AppBreadcrumb({
  parents,
  pageName,
}: AppBreadcrumbInterface) {
  return (
    <>
      <Breadcrumb className="app-breadcrumb" separator=">">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>

        {parents &&
          parents.length > 0 &&
          parents.map(
            (b) =>
              b.path && (
                <Breadcrumb.Item>
                  <Link to={b.path}>{b.label}</Link>
                </Breadcrumb.Item>
              ),
          )}

        <Breadcrumb.Item>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}
