import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import fetch from 'isomorphic-unfetch'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import LeagueSelect from '../components/LeagueSelect'
import TypeSelect from '../components/TypeSelect'
import ItemList from '../components/ItemList'

import '../styles/Index.css'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        league: "Standard",
        type: "All"
      }
    }

    this.typeSelect = this.typeSelect.bind(this);
    this.leagueSelect = this.leagueSelect.bind(this);
  }

  leagueSelect(event) {
    let filter = {...this.state.filter}
    filter.league = event.target.value
    this.setState({filter})
  }

  typeSelect(event) {
    let filter = {...this.state.filter}
    filter.type = event.target.value
    this.setState({filter})
  }

  render() {
    const { filter } = this.state
    const { leagues, stashes} = this.props
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container fluid="true">
            <Col sm={12} style={{padding:0}}>
              <Navbar.Brand href="#home">
                <h1>PoE Trader</h1>
              </Navbar.Brand>
              <Row>
                <Col sm={4} md={3}>
                  <LeagueSelect formTitle="League" leagues={leagues} leagueSelect={this.leagueSelect}/>
                </Col>
                <Col sm={4} md={3}>
                  <TypeSelect formTitle="Type" stashes={stashes} typeSelect={this.typeSelect}/>
                </Col>
              </Row>
            </Col>
          </Container>
        </Navbar>
        <Container fluid="true" className="content">
          <ItemList stashes={stashes} filter={filter}/>
        </Container>
      </div>
    );
  }
}

Index.getInitialProps = async function() {
  const resLeagues = await fetch('http://api.pathofexile.com/leagues?type=main')
  const dataLeagues = await resLeagues.json()

  const resChangeId = await fetch('https://api.poe.watch/id')
  const dataChangeId = await resChangeId.json()
  const resStashes = await fetch('https://www.pathofexile.com/api/public-stash-tabs?id=' + dataChangeId.id)
  const dataStashes = await resStashes.json()
  
  return {
    leagues: dataLeagues,
    stashes: dataStashes.stashes
  }
}

export default Index