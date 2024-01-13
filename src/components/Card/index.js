import React from "react";
import { Card } from "react-bootstrap";
import './Card.css'

const CardLink = ({ bookName, link }) => {
    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title>{bookName}</Card.Title>
                <Card.Link href={link} target="_blank"> Link</Card.Link>
            </Card.Body>
        </Card>)
}

export default CardLink