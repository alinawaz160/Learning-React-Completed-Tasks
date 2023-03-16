import React, { useRef } from "react";
import ReactToPrint from 'react-to-print';
import ComponentToPrint from "./ComponentToPrint";
import { Button } from "react-bootstrap";
export default function ReceiptPrint() {
    const componentRef = useRef();
    return (
        <>
            <ReactToPrint
                trigger={() => <Button
                    // variant="contained" color="primary"
                >Print this out!</Button>}
                content={() => componentRef}
            />
            <ComponentToPrint ref={(el) => (componentRef = el)} />
        </>
    )
}