import React from 'react';
import { Menu, Icon } from 'antd';

// import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Menu theme="dark" mode="inline">

                <Menu.Item key="1">

                    <Icon type="user" />
                    <span>Character</span>
                </Menu.Item>

                <Menu.Item key="2">

                    <Icon type="user" />
                    <span>Battle Station</span>

                </Menu.Item>

                <Menu.Item key="3">

                    <Icon type="user" />
                    <span>Equipment</span>
                </Menu.Item>

                <Menu.Item key="4">
                    <Icon type="save" />
                    <span>Save</span>
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="info-circle" />
                    <span>About</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SideBar;