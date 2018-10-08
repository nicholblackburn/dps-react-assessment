import React from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

 class Breweries extends React.Component {
   state = { breweries: [] }

   componentDidMount() {
     axios.get('/api/all_breweries?page=5&per_page=10')
       .then(res => {
         this.setState({ breweries: res.data.entries })
       })
   }

   render() {
    const { breweries } = this.state
     return(
       <div>
         <Card.Content>
           <Card.Group stackable itemsPerRow={2}>
           <Card.Header>
             {breweries.name}
           </Card.Header>
          </Card.Group>
         </Card.Content>
       </div>
     )
   }
 }



 export default Breweries;
