import React from 'react'
import { useParams } from 'react-router-dom'
import CodMode from './CodMode'
import QrMode from './QrMode'
import UpiMode from './UpiMode'

export default function PaymentMode() {
  const params = useParams();
  
    switch (params.PaymentModes) {
      case 'UPI Pay':
        return <UpiMode />;
      case 'QR Scanner':
        return <QrMode />;
      case 'Cash on Delivery':
        return <CodMode />;
      default:
        return [];
    }
  return (
    <div >
      {
        
      }
    </div>
  )
}

