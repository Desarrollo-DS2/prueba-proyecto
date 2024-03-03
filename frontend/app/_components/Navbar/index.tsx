"use client"

import { Layout, Menu, Flex, Typography, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { ReactNode, useContext, useState } from 'react';
import Image from 'next/image';

import { MdOutlinePets } from "react-icons/md";
import { TbFaceId } from "react-icons/tb";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";


const { Sider } = Layout;
const { Title, Paragraph } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const itemsTop: MenuProps['items'] = [
    { type: 'divider' },
    getItem('Deteccion de rostros', 'subTop1', <TbFaceId />),
    { type: 'divider' },
    getItem('Deteccion de mascotas', 'subTop2', <MdOutlinePets />),
    { type: 'divider' },
    getItem('Actividad sospechosa', 'subTop3', <FaCircleExclamation />),
  ];

const itemsBottom: MenuProps['items'] = [
    getItem('Cerrar sesion', 'subBottom1', <IoLogOut />),
    getItem('Configuracion', 'subBottom2', <IoSettings />),
  ];

export default function NavBar(): ReactNode {

    const collapsed  = true;

    const NavbarHeader = (
        <ConfigProvider
            theme={{
                components: {
                Typography: {
                    titleMarginBottom: 0,
                },
                },
            }}
        >
            <Flex style={{padding: 10, height:collapsed ? 80 : 90}} >
                <Image src="/A.png" width={collapsed ? 80 : 90} height={collapsed ? 80 : 90} alt='Hola' />
                {!collapsed && <Flex vertical style={{paddingLeft: 10 }} justify='center'>
                    <Title style={{ color: 'white', fontWeight: 'bold', fontSize: '24px'  }}>
                        VIA
                    </Title>
                    <Paragraph style={{ color: 'white', fontSize: '10px' }}>
                        Videovigilancia Inteligente Asistida
                    </Paragraph>
                </Flex>}
            </Flex>
        </ConfigProvider>
    );

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ overflow: 'auto', height: '100vh', backgroundColor: "#001529" }}>
            {NavbarHeader}
            <Flex vertical justify='space-between' style={{ height: '85%'}}>
                <Menu
                    theme='dark'
                    style={{ backgroundColor: "transparent" }}
                    defaultSelectedKeys={['subTop1']}
                    defaultOpenKeys={['subTop1']}
                    mode="vertical"
                    items={itemsTop}
                />
                <Menu
                    theme='dark'
                    style={{ backgroundColor: "transparent" }}
                    mode="vertical"
                    items={itemsBottom}
                />
            </Flex>

        </Sider >

    );
}