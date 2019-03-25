import Form from 'react-bootstrap/Form'
import '../styles/Select.css'
import var_dump from 'var_dump'

const TypeSelect = (props) => {
    let types = []
    let typesDistinct = []
    props.stashes.forEach(function(stash) { 
        stash.items.forEach(function(item) {
            types.push(...Object.keys(item.category))
        })
    })

    typesDistinct = [...new Set(types)]

    return (
        <Form>
            <Form.Label>{props.formTitle}</Form.Label>
            <Form.Control as="select" onChange={props.typeSelect}>
                <option>All</option>
                { 
                    typesDistinct.map(type => 
                        <option key={type} className="type">{type}</option>
                    )
                }
            </Form.Control>
        </Form>
    );
}

export default TypeSelect

