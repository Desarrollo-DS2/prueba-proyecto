"use client"

import { Button, Flex } from "antd";
import { Header as HeaderAntd } from "antd/lib/layout/layout";
import { ReactNode, useContext } from "react";

import { FaCircleUser } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Header(): ReactNode {

  

    return (
        <HeaderAntd style={{ padding: 0, backgroundColor: '#354166' }}>
            <Flex justify="space-between">
                <Button
                    type="text"
                    icon={<CgMenuLeftAlt color="white" size={32}/>}
                    // onClick={() => setCollapsed(!collapsed)}
                    style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    }}
                />
                <Button
                    type="text"
                    icon={<FaCircleUser color="white" size={32}/>}
                    style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    }}
                />
            </Flex>
        </HeaderAntd>
    );
}