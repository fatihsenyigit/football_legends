

import { FormControl, Row } from "react-bootstrap";
import { data } from "../../helpers/data"
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import '../../index.css'
import LegendCard from './LegendCard'
import { useState } from "react";

const LegendContainer = () => {
    const [searchData, setSearchData] = useState('')
    const handleSearch = (e) => {
        setSearchData(e.target.value)
    }
    const filteredData = data.filter((e)=>e.name.toLowerCase().includes(searchData.trim().toLowerCase()))
    return (
      <Container>
        <Form>
          <FormControl
            className="legendInput border-info m-auto my-3"
            type="text"
            placeholder="search football players..."
            onChange={handleSearch}
          ></FormControl>
        </Form>

        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xl={5}
          className="justify-content-center g-3"
        >
          {filteredData.map((info) => {
            return <LegendCard key={info.id} info={info}></LegendCard>;
          })}
        </Row>
      </Container>
    );
}

export default LegendContainer