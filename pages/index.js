import "./index.scss"
import CanvasBubbleFlow from '../components/canvasBubbleFlow'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render = () => {
    return (
      <>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-container-left">on1Studio</div>
            <div className="navbar-container-right">
              <span className="nav-item">渠道</span>
              <span className="nav-item">联系我们</span>
            </div>
          </div>
        </div>

        <CanvasBubbleFlow />

        <div className="content">on1Studio</div>
      </>
    )
  }
}