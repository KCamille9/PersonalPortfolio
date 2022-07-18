import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Wed Designer", "UI/UX Designer"]; 
    const [text, setText] = useState(''); // this is the starting letter
    const [delta, setDelta] = useState(300 - Math.random() * 100); //sets how fast to type each letter, like if it deleinng it should go faster
    const period = 2000; //time between words in toRotate

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};

    }, [text]) // run everytime text gets updated

    const tick = () => {
        let i = loopNum % toRotate.length; // start with first word, go though all words, then start over
        let fullText = toRotate[i]; //first word
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); //increase delta velocity
        }

        if (!isDeleting && updatedText === fullText) { //if we completed typying a word
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my porfolio</span>
                        <h1>{`Hi, I'm webcoded`}<span className="wrap">{text}</span></h1>
                        <p>Lorem impsuem stuff impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuff
                            impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuff
                            impsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffimpsuem stuffv
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}