import React from "react";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon, CardTitle, Card, Col, Row, Container } from 'react-materialize'


const Cardp1 = () => {
    return (
<div>
    <Container>
        <Row>
  <Col
    l={4}
    m={4}
    s={12}
  >
    <Card
      actions={[
          <>
        <a key="" href="https://github.com/DestinATX/Project-1" target="_blank">Github</a>
        <a key="" href="https://destinatx.github.io/Project-1/" target="_blank">Webiste</a>
        </>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="./images/FoodTrucksATX.png">FoodTruckATX</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      FoodTruckATX is a project organized to create a dedicated Food Truck resource for the Austin city area.
    We used the Yelp Fusion API to target food truck data while also implementing the Google Maps and
    Directions API to create a transportation expirience to get to each food truck.
    </Card>
  </Col>
</Row>

<Row>
  <Col
    l={4}
    m={4}
    s={12}
  >
    <Card 
      actions={[
          <>
        <a key="" href="https://github.com/marlon20m/WorkDayScheduler" target="_blank">Github</a>
        <a key="" href="https://marlon20m.github.io/WorkDayScheduler/" target="_blank">Webiste</a>
        

        </>
      ]}
     
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="./images/workdayscheduler.png">Work Day Scheduler</CardTitle>}
      revealIcon={<Icon>Work Day Scheduler is a website I created to moniter the 9 to 5 work day by planning each hour throughout
        the day. Work day Scheduler is a responsive approach to store your events throughout the day and create
        new events on the following days.</Icon>}
    >
         
         Work Day Scheduler is a website I created to moniter the 9 to 5 work day by planning each hour throughout
        the day. Work day Scheduler is a responsive approach to....
    </Card>
  </Col>
</Row>

<Row>
  <Col
    l={4}
    m={4}
    s={12}
  >
    <Card
      actions={[
          <>
        <a key="" href="https://github.com/marlon20m/WeatherDashboard" target="_blank">Github</a>
        <a key="" href="https://marlon20m.github.io/WeatherDashboard/" target="_blank">Webiste</a>
        </>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="./images/Weather Dashboard.png">Work Day Scheduler</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      The Weather Dashboard is a website I created that uses the Open Weather API to its advantages. This API allows the Weather Dashboard to display weather data form accross the world live. It includes using an hourly forecast and, a 5 day forecast.
    </Card>
  </Col>
</Row>
</Container>

</div>


          )
}

export default Cardp1;