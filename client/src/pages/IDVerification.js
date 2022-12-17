import React from 'react'
import Persona from 'persona'
import { useEffect } from 'react'

const IDVerification = () => {

    // const client = new Persona.Client({
    //     templateId: "itmpl_Ygs16MKTkA6obnF8C3Rb17dm",
    //     environment: "sandbox",
    //     onReady: () => client.open(),
    //     onComplete: ({ inquiryId, status, fields }) => {
    //         // Inquiry completed. Optionally tell your server about it.
    //         console.log(`Sending finished inquiry ${inquiryId} to backend`);
    //     },
    //     onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
    //     onError: (error) => console.log(error),
    // })

    const startVerification = () => {

    }

    return (
        <div>
            <h3>ID Verification</h3>
            <div></div>
            <button onClick={() => startVerification}> Start verification</button>
        </div>
    )
}

export default IDVerification