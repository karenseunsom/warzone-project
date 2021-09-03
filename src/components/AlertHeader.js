import React from 'react'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertHeader() {
    const [show, setShow] = useState(true)
    const reload=()=>window.location.reload();

    if (show) {
    return (
        <Alert variant="danger" onClose={() => {setShow(false); reload();}} dismissible>
            <Alert.Heading>It's a Charlie Foxtrot</Alert.Heading>
            <p>
                User does not exist! If you think this is a mistake, your privacy settings are most likely set to private.
            </p>
            <p>To fix this issue:</p>
            <ol>
                <li>Visit the official <a href="https://www.callofduty.com/home">Call Of Duty website.</a></li>
                <li>Once logged in, hover over your profile name in the top right corner and click 'account linking'.</li>
                <li>Set 'searchable' and 'data visible' options to 'all'.</li>
            </ol>
        </Alert>
        )
    };
}
