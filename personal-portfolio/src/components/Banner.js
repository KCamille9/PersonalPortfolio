import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my porfolio</span>
                        <h1>{`Hi, I'm webcoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem impsuem stuff impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuff
                            impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuff
                            impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffv
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}