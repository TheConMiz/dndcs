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
                    <Link to="/battle">
                        <Icon type="user" />
                        <span>Battle Station</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to="/equipment">
                        <Icon type="user" />
                        <span>Equipment</span>
                    </Link>
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

export default SideMenu;