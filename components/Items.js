import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

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
                    <Card.Header>Implicit Mods</Card.Header>
                    <ListGroup variant="flush">
                        {
                            props.item.implicitMods
                            ? props.item.implicitMods.map(imod => 
                                <ListGroup.Item>{imod}</ListGroup.Item>

                            )
                            : ""
                            
                        }
                    </ListGroup>
                    <Card.Header>Explicit Mods</Card.Header>
                    <ListGroup variant="flush">
                        {
                            props.item.explicitMods
                            ? props.item.explicitMods.map(emod => 
                                <ListGroup.Item>{emod}</ListGroup.Item>

                            )
                            : ""
                            
                        }
                    </ListGroup>
                    <div className="button-container">
                        <Button variant="primary">Copy to Clipboard</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item