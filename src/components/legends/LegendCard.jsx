import { Card } from "react-bootstrap"
import { useState } from "react"

const LegendCard = ({info}) => {
    const [show, setShow] = useState(false)
    return (
      <Card
        className="player-card"
        role="button"
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <Card.Img
            variant="top"
            src={info.img}
            title={info.name}
            alt={info.name}
          ></Card.Img>
        ) : (
          <>
            <Card.Header>
              <Card.Title>{info.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {info.statistics.map((item) => (
                <li className="list-unstyled h5 text-start"> ⚽ {item}</li>
              ))}
            </ul>
            <span>{info.official_career}</span>
          </>
        )}
      </Card>
    );
}

export default LegendCard