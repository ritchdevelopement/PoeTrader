import Form from 'react-bootstrap/Form'
import '../styles/Select.css'

const LeagueSelect = (props) => {
    let leagues = []

    props.leagues.forEach(function(league) { 
        if(!league.id.includes('SSF')) {
            leagues.push(league)
        }
    })
    return (
        <Form>
            <Form.Label>{props.formTitle}</Form.Label>
            <Form.Control as="select" onChange={props.leagueSelect}>
                { 
                    leagues.map(league => 
                        <option key={league.id}>{league.id}</option>
                    )
                }
            </Form.Control>
        </Form>
    );
}

export default LeagueSelect

