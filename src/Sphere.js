import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    background: #444;
    height: calc(100vh - 80px);
    width: calc(50vw - 80px);
    top: 40px;
    right: 40px;
    position: fixed;
    display: block;
    z-index: 2;
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
    }
  }

  onAnimate = () => {
    this.setState({
      rotation: new THREE.Euler(
        this.state.rotation.x + 0.01,
        this.state.rotation.y + 0.01,
        0
      ),
    })
  }

  render () {
    const width = (window.innerWidth / 2) - 80
    const height = window.innerHeight - 80


    return (
      <Container>
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
                widthSegments={20}
                heightSegments={20}
                radius={2}
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
