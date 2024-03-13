import React from 'react'

const FormattedPrice = ({amount}) => {

    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        currency : 'USD',
        style : 'currency',
        maximumFractionDigits : 2


    })
  return (
    <span>{formattedAmount}</span>
  )
}

export default FormattedPrice