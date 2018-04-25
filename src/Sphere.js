import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import styled, {keyframes} from 'styled-components'

const Container = styled.button`
  display: none;
  @media (min-width: 1000px) {
    background: #666;
    height: calc(100vh - 40px);
    width: calc(50vw - 20px);
    top: 20px;
    right: 20px;
    position: fixed;
    display: block;
    z-index: 2;
    cursor: pointer;
    border: 0;
    outline: 0;
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
    this.lightPosition = new THREE.Vector3(0, 500, 2000)
    this.lightTarget = new THREE.Vector3(0, 0, 0)

    this.state = {
      rotation: new THREE.Euler(),
      speed: 0.01,
      segments: 1,
    }


  }

  onClick = () => {
    const click = new Audio('/click.ogg')
    click.volume = 0.3
    click.play()

    this.setState({
      speed: this.state.speed + 0.001,
      segments: this.state.segments + 1,
    })
  }

  onAnimate = () => {
    this.setState({
      rotation: new THREE.Euler(
        this.state.rotation.x + this.state.speed,
        this.state.rotation.y + this.state.speed,
        50
      ),
    })
  }

  render () {
    const width = (window.innerWidth / 2)
    const height = window.innerHeight


    return (
      <Container onClick={this.onClick}>
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
                widthSegments={this.state.segments}
                heightSegments={this.state.segments}
                radius={2}
              />
              <meshBasicMaterial
                color={0x888888}
                wireframe
              />
            </mesh>
          </scene>
        </React3>
      </Container>
    )
  }
}
