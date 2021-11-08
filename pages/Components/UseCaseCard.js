import { Card } from '@mui/material';
import React from 'react'
import styles from "../../styles/Home.module.css";


export const UseCaseCard = (props) =>{
    return(
        <Card elevation={1} className={styles.UseCaseCard}>
            <h2>{props.Title}</h2>
            <ul>
                <li>{props.description1}</li>
                <li>{props.description2}</li>
                <li>{props.description3}</li>
            </ul>
        </Card>
    )
}