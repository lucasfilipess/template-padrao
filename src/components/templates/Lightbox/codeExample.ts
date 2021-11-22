export const codeExample = `
    import { SRLWrapper } from 'simple-react-lightbox'

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

`
