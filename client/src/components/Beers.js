import React from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

 class Beers extends React.Component {
   state = { beers: [] }

   componentDidMount() {
     axios.get('/api/all_beers?page=5&per_page=10')
       .then(res => {
         this.setState({ beers: res.data.entries })
       })
   }

   render() {
     return this.state.beers.map( beers => {
     return(
       <div>
         <Card.Content>
           { beers.map( )}
           <Card.Group stackable itemsPerRow={2}>
           <Card.Header>
             {beers.name}
           </Card.Header>
          </Card.Group>
         </Card.Content>
       </div>
        )
     })
   }
 }



 export default Beers;
