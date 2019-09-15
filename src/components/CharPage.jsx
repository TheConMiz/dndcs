import React from 'react';

import ProfileCard from './CharPage/ProfileCard';

import MainStats from './CharPage/MainStats';

import ClassDisplay from './CharPage/ClassDisplay';

import SpellTable from './CharPage/SpellTable';

class CharPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <ProfileCard />
                <MainStats /> */}
                {/* <ClassDisplay />
                <SpellTable /> */}
            </div>
        );
    }
}

export default CharPage;
