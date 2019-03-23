import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import '../styles/Item.css'

const Item = (props) => {
    return (
        props.items.map(item => 
            <Col sm={6} md={4} lg={2} className="item" key={item.id}>
                <Card>
                    <div className="item-image-container">
                        <Card.Img variant="top" src={item.icon} />
                    </div>
                    <Card.Body>
                        <Card.Title>{item.name} {item.typeLine}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )  
    );
}

export default Item