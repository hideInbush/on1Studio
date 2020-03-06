import "./index.scss"
import CanvasBubbleFlow from '../components/canvasBubbleFlow'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
  }

  navLink = (section) => {
    let scrollTop = 0
    if (section === 'home') {
      scrollTop = 0
    } else if (section === 'service') {
      scrollTop = this.serviceContainer.offsetTop
    } else if (section === 'contact') {
      scrollTop = this.contactContainer.offsetTop
    }

    this.contentContainer.scrollTop = scrollTop
  }

  render = () => {
    return (
      <>
        <div className="on1-navbar">
          <div className="on1-navbar-container">
            <div className="on1-navbar-container-left" onClick={() => this.navLink('home')}>on1Studio</div>
            <div className="on1-navbar-container-right">
              <span className="nav-item" onClick={() => this.navLink('service')}>服务</span>
              <span className="nav-item" onClick={() => this.navLink('contact')}>联系我们</span>
            </div>
          </div>
        </div>


        <div className="on1-content" ref={(ref) => this.contentContainer = ref}>
          <section className="on1-home">
            <div className="on1-home-content">on1Studio</div>
            <CanvasBubbleFlow />
          </section>

          <section className="on1-service" ref={(ref) => this.serviceContainer = ref}>
            <div className="on1-service-content">
              <div className="slogan">多种平台</div>
              <div className="services">
                <span>网站</span>
                <span>H5</span>
                <span>小程序</span>
                <span>公众号</span>
              </div>
            </div>
          </section>

          <section className="on1-contact" ref={(ref) => this.contactContainer = ref}>
            <div className="content">
              <div>联系我们</div>
              {/* <div>获取您的专属方案</div> */}

              <div className="contact">
                <a href="mailto:137412155@qq.com">137412155@qq.com</a>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}