import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Infobox.css';
function Infobox({title, cases, total, isRed, active, ...props}) {
    return (
        <div className = {`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            <Card onClick = {props.onClick}>
                <CardContent>
                    <Typography className = "infoBox__title" color = "textSecondary">
                        {title}
                    </Typography>
                    <h2 className={`infoBox__cases ${!isRed && 'infobox__cases--green'}`}>{cases}</h2>
                    <Typography className = "infoBox__total" color = "textSecondary">
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Infobox
