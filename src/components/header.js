import React, { useState }  from 'react';
import 'antd';
import { AppstoreOutlined, FlagOutlined, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Order Online',
    key: 'mail',
    icon: <MenuOutlined />,
  },
  {
    label: 'Menu',
    key: 'menu',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Locations',
    key: 'locations',
    icon: <FlagOutlined />,
    children: [
      {
        type: 'group',
        label: 'Massachusetts',
        children: [
          {
            label: 'Marlborough',
            key: 'setting:1',
          },
          {
            label: 'Worcester',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'New York',
        children: [
          {
            label: 'New York City',
            key: 'setting:3',
          }
        ],
      },
    ],
  },
  {
    label: (
      <a href="/template" target="_self" rel="noopener noreferrer">
        Cart
      </a>
    ),
    key: 'alipay',
    icon: <ShoppingCartOutlined />
  },
];

const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '18px',
  alignItems: 'center'
};

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme='light' style={centerStyle}/>;
};
export default Header;