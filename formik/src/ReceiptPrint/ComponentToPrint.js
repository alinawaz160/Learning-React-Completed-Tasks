import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Barcode from 'react-barcode';
export default function ComponentToPrint() {
    
    let receiptData = [
        {
            placeName: "Idea To Product",
            phone: "03153545263",
            Address: "Sukkur Society",
            InvoiceNo: "34",
        }
    ]
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", marginTop: "15px", width: "25%", flexDirection: "column" }}>
                <Paper elevation={4} style={{ width: "100%" }}>
                    <div style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ marginTop: "20px", fontSize: "30px" }}><strong>{receiptData[0].placeName}</strong></div>
                        <div style={{ fontSize: "12px", marginTop: "10px" }}><strong>Address:{receiptData[0].Address}</strong></div>
                        <div style={{ fontSize: "12px" }}><strong>Phone:{receiptData[0].phone}</strong></div>
                        <div style={{ display: "flex", flexDirection: "column-reverse", fontSize: "25px" }}><strong>Invoice No:{receiptData[0].InvoiceNo}</strong></div>
                        <div style={{ marginTop: "25px" }}>-------------------------------------</div>
                        //Area for Column Name And Description
                        <div style={{ marginTop: "70px" }}>-------------------------------------</div>
                        <div>
                            <Barcode 
                                value="123677"
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}