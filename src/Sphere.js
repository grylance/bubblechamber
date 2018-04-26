import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import styled, {keyframes} from 'styled-components'
import isMobile from 'is-mobile'

const Container = styled.div`
  background: rgba(0,0,0,0);
  top: 0;
  right: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 1000px) {
    width: 50vw;
    cursor: pointer;
  }
`

let Scene = React3.Scene
let Camera = React3.Camera
let AmbientLight = React3.AmbientLight
let Mesh = React3.Mesh

export default class Sphere extends React.Component {
  constructor () {
    super()
    this.cameraPosition = new THREE.Vector3(0, 0, 5)

    this.state = {
      rotation: new THREE.Euler(),
    }

    this.drone = new Audio('/drone.ogg')
    this.drone.volume = 0.2
    this.drone.play()
    this.drone.addEventListener('ended', () => this.drone.play())

    this.bleep = new Audio('/bleep.ogg')
    this.bleep.volume = 0
    this.bleep.play()
    this.bleep.addEventListener('ended', () => this.bleep.play())
  }

  onAnimate = () => {
    const speed = this.props.toggled ? 0.03 : 0.06

    this.setState({
      rotation: new THREE.Euler(
        this.state.rotation.x + speed,
        this.state.rotation.y + speed,
        50
      ),
    })

    if (this.props.toggled) {
      this.drone.volume = 0.3
      this.bleep.volume = 0
    } else {
      this.bleep.volume = 0.3
      this.drone.volume = 0
    }
  }

  render () {
    const width = isMobile() ?
      window.innerWidth : (window.innerWidth / 2)
    const height = window.innerHeight


    return (
      <Container onClick={this.props.toggle}>
        <React3
          mainCamera='camera'
          width={width}
          height={height}
          onAnimate={this.onAnimate}
          alpha={true}
        >
          <scene>
            <perspectiveCamera
              name='camera'
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={this.cameraPosition}
            />
            <mesh rotation={this.state.rotation}>
              <sphereGeometry
                widthSegments={this.props.toggled ? 5 : 20}
                heightSegments={this.props.toggled ? 5 : 20}
                radius={this.props.toggled ? 1.7 : 2.5}
              />
              <meshBasicMaterial
                color={0xFFFFFF}
                wireframe
              />
            </mesh>
          </scene>
        </React3>
      </Container>
    )
  }
}
