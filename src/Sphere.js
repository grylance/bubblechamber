import React from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import styled from 'styled-components'
import isMobile from 'is-mobile'

const Container = styled.div`
  background: rgba(0,0,0,0);
  top: 0;
  right: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  cursor: zoom-in;
  display: ${isMobile() ? 'block' : 'none'};
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 1000px) {
    display: block;
    width: 50vw;
  }
`

export default class Sphere extends React.Component {
  constructor () {
    super()
    this.cameraPosition = new THREE.Vector3(0, 0, 5)

    this.state = {
      rotation: new THREE.Euler(),
    }
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
                radius={this.props.toggled ? 1.7 : 2.2}
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
