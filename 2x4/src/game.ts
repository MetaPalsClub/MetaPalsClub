const _scene = new Entity('_scene')
_scene.addComponentOrReplace(new Transform({
  position: new Vector3(32, 0, 16),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(1, 1, 1)
}))
engine.addEntity(_scene)


const building = new Entity('2x4')
building.addComponentOrReplace(new Transform({
  position: new Vector3(16, 0, 32),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(1, 1, 1)
}))
building.addComponentOrReplace(new GLTFShape('models/2x4.glb'))
building.getComponent(GLTFShape).withCollisions = true
building.getComponent(GLTFShape).isPointerBlocker = true
building.getComponent(GLTFShape).visible = true
building.setParent(_scene)
