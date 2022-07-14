import React, { useState } from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { GiMagnifyingGlass } from 'react-icons/gi'
function Portfolio() {
    const [showModal, setShowModal] = useState();
    const [tempData, setempData] = useState();

    const createModal = (data) => {
        return (
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                arial-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data?.descreption}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{data?.summary}</p>
                    <Image src={data?.image} style={{ width: '200px' }} />
                </Modal.Body>
                <a id="portfolio__modal__link" href={data?.link} target="_blank" rel="noreferrer">Go to site</a>
                <Modal.Footer>
                    <div>Technologies used: </div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto'}}>{data?.techused}</p>
                    <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const profData = portfolioData?.map((n, idx) => { 
            return (
            <Card key={idx} id="portfolio__card__container">
                <Image className="portfolio__image"
                onClick={() => {
                    setempData({
                    image: n.image,
                    link: n.link,
                    descreption: n.descreption,
                    summary: n.summary,
                    techused: n.techused
                    })
                    setShowModal(true)
                }}
                src={n.image} />
                <div className="portfolio__click__info"> <GiMagnifyingGlass className="magnifying_glass"/> </div> {/* This is search Icon*/}
                {createModal(tempData)}
            </Card>
            )
        })

    return (
        <div className="portfolio__main__container" id="portfolio" >
            <h1>PORTFOLIO</h1>
            <p>This is my Github page
                <a href="https://github.com/SadigDaniel" target="_blank" rel="noreferrer"> Github Link </a>
            </p>
            <Container fluid="lg" style={{ padding: '2rem 0' }}>
                <Row>
                {profData}
                </Row>
            </Container>
        </div>
  )
}

export default Portfolio