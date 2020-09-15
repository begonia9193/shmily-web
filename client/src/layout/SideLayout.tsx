import React from 'react'
import menu from '@/common/menu.ts'

const SideLayout = () => {
  return (
    <div className="layout-side">
      <ul className="layout-side-menu">
        {
          menu.map(menuItem => {
            return (
              <>
                <li className="menu-item" key={ menuItem.name }>
                  <a className="menu-action">{ menuItem.title }</a>
                </li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SideLayout
