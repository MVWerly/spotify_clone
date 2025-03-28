import CardLibrary from '../CardLibrary'

const Footer = () => (
  <footer>
    <div>
      <CardLibrary toogle typeFooter />
    </div>
    <div>
      <div>
        <i className="bi bi-shuffle"></i>
        <i className="bi bi-skip-start"></i>
        <i className="bi bi-play-circle-fill"></i>
        <i className="bi bi-skip-end"></i>
        <i className="bi bi-repeat"></i>
      </div>
      <div>
        <span>00:00</span>
        <span>04:32</span>
      </div>
    </div>
    <div>
      <i className="bi bi-play-btn"></i>
      <i className="bi bi-mic"></i>
      <i className="bi bi-view-list"></i>
      <i className="bi bi-speaker"></i>
      <i className="bi bi-volume-up"></i>
      <i className="bi bi-window-fullscreen"></i>
      <i className="bi bi-arrows-angle-expand"></i>
    </div>
  </footer>
)
export default Footer
