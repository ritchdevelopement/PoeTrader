import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Items from '../components/Items'
import var_dump from 'var_dump'

const ItemList = (props) => {
    let items = [] 
    
    props.stashes.forEach(function(stash) {
        if(stash.public && (props.filter.league === stash.league)) {
            stash.items.forEach(function(item) {
                let itemType = []
                itemType.push(...Object.keys(item.category))
                if(props.filter.type === "All") {
                    items.push(item)
                    return;
                }
                if(props.filter.type === itemType[0]) {
                    items.push(item)
                } 
            })
        }
    })

    return (
        <div>
            <Row>
            {   
                items.map(item => 
                    <Items item={item} key={item}/>
                )
            }
            </Row>
        </div>
        
    );
}

export default ItemList