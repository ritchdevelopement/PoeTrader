import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Items from '../components/Items'


const ItemList = (props) => {
    let stashes = []
    props.stashes.forEach(function(stash) {
        if(stash.public && (props.filter.league === stash.league)) {
            stashes.push(stash)
        }
    })
    return (
        <div>
            <Row>
            { 
                stashes.map(stash => 
                    <Items items={stash.items} key={stash.id}/>
                )
            }
            </Row>
        </div>
        
    );
}

export default ItemList