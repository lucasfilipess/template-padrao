import React from 'react'
import { Card } from 'react-bootstrap'
import { SRLWrapper } from 'simple-react-lightbox'
import { CodeBlock } from 'components/atoms'
import { codeExample } from './codeExample'
import image1 from 'assets/images/card.png'
import image2 from 'assets/images/login.png'
import image3 from 'assets/images/register.png'
import styles from './styles.module.css'

const Lightbox: React.FC = () => {
  const defaultOptions = {
    buttons: {
      backgroundColor: 'transparent',
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: '50px'
    },
    thumbnails: {
      showThumbnails: false
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Lightbox</Card.Title>
        <Card.Subtitle>
          O{' '}
          <a
            href="https://www.npmjs.com/package/simple-react-lightbox"
            target="_blank"
            rel="noreferrer"
          >
            Lightbox
          </a>{' '}
          é uma biblioteca para abrir as imagens ampliadas.
        </Card.Subtitle>
        <SRLWrapper options={defaultOptions}>
          <div className={styles.imageContainer}>
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
          </div>
        </SRLWrapper>
        <CodeBlock code={codeExample} />
      </Card.Body>
    </Card>
  )
}

export default Lightbox
