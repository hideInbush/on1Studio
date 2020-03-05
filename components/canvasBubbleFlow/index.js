import './index.scss'

export default class CanvasBubbleFlow extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  canvas = null
  ctx = null
  circles = null

  componentDidMount() {
    this.init()
  }

  init = () => {
    const containerW = document.body.clientWidth
    const containerH = document.body.clientHeight

    /** 设置大小 */
    this.canvas.width = containerW
    this.canvas.height = containerH

    this.ctx = this.canvas.getContext('2d')

    this.circles = [
      { x: 100, y: containerH + 200, startY: containerH + 200, radius: 20, color: '#0248db', step: Math.floor((Math.random()*5)+1) },
      { x: 200, y: containerH + 400, startY: containerH + 400, radius: 10, color: '#0248db', step: Math.floor((Math.random()*5)+1) },
      { x: 400, y: containerH + 600, startY: containerH + 600, radius: 30, color: '#ff5e00', step: Math.floor((Math.random()*5)+1) },


      { x: containerW - 100, y: containerH + 300, startY: containerH + 300, radius: 10, color: '#ff5e00', step: Math.floor((Math.random()*5)+1) },
      { x: containerW - 200, y: containerH + 400, startY: containerH + 400, radius: 10, color: '#89f6ff', step: Math.floor((Math.random()*5)+1) },
      { x: containerW - 400, y: containerH + 100, startY: containerH + 100, radius: 30, color: '#89f6ff', step: Math.floor((Math.random()*5)+1) },
    ]

    this.moveCircle()
  }

  moveCircle = () => {
    if (this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width || 0, this.canvas.height || 0)
    }

    this.circles.forEach((circle) => {
      circle.y = circle.y - circle.step < 0 ? circle.startY : circle.y - circle.step
      this.drawCircle(
        circle.x,
        circle.y,
        circle.radius,
        circle.color
      )
    })

    requestAnimationFrame(this.moveCircle)
  }

  drawCircle = (x, y, radius = 20, color = '#0248db') => {
    const { ctx } = this
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  render = () => {
    return (
      <div className="canvas-bubbleFlow">
        <canvas ref={ref => this.canvas = ref} />
      </div>
    )
  }

}