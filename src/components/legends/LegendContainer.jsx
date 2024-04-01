

import { Col, FormControl, Row } from "react-bootstrap";
import { data } from "../../helpers/data"
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import '../../index.css'
import LegendCard from './LegendCard'

const LegendContainer = () => {
    return (
      <Container>
        <Form>
          <FormControl
            className="legendInput border-info m-auto my-3"
            type="text"
            placeholder="search football players..."
          ></FormControl>
        </Form>

        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="justify-content-center g-3">
          {data.map((info) => {
            return <LegendCard info={info}></LegendCard>;
          })}
        </Row>
      </Container>
    );
}

export default LegendContainer