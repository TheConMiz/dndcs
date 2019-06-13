import React, {useState } from 'react';
import { Button } from 'antd';

export function AppHook() {
    const [test, setTest] = useState(0);

    return (
        <div>
            <Button onClick={() => {
                setTest(test + 1)
            }}>{test}</Button>
        </div>
    );
}