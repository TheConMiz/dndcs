import React from 'react';
import { Menu, Icon} from 'antd';

import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1">
                    <Link to="/char">
                        <Icon type="user" />
                        <span>Character</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="user" />
                    <span>Battle Station</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="user" />
                    <span>Equipment</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SideMenu;