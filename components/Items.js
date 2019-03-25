import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import '../styles/Item.css'

import var_dump from 'var_dump'

const Item = (props) => {
    return ( 
        <Col sm={6} md={4} lg={2} className="item" key={props.item.id}>
            <Card>
                <div className="item-image-container">
                    <Card.Img variant="top" src={props.item.icon} />
                </div>
                <Card.Body>
                    <Card.Title>{props.item.typeLine}<br/>{props.item.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div className="button-container">
                        <Button variant="primary">Copy to Clipboard</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item