import "./index.scss"
import CanvasBubbleFlow from '../components/canvasBubbleFlow'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {

  }

  render = () => {
    return (
      <>
        <div className="on1-navbar">
          <div className="on1-navbar-container">
            <div className="on1-navbar-container-left">on1Studio</div>
            <div className="on1-navbar-container-right">
              <span className="nav-item">服务</span>
              <span className="nav-item">联系我们</span>
            </div>
          </div>
        </div>


        <div className="on1-content">

          <section className="on1-home">
            <div className="on1-home-content">on1Studio</div>
            <CanvasBubbleFlow />
          </section>

          <section className="on1-channel">
            <div className="on1-channel-content">
              <div className="channels">
                <span>网站</span>
                <span>H5</span>
                <span>小程序</span>
                <span>公众号</span>
              </div>
              <div className="slogan">多种平台</div>
            </div>
          </section>

          <section className="on1-contact">
            <div className="content">
              <div>联系我们</div>
              <div>获取您的专属方案</div>

              <div className="contact">
                <div></div>
                <div></div>
              </div>
            </div>

          </section>
        </div>
      </>
    )
  }
}