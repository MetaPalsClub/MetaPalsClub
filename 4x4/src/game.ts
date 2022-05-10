
const _scene = new Entity('_scene')
_scene.addComponentOrReplace(new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
}))
engine.addEntity(_scene)


const building = new Entity('4x4')
building.addComponentOrReplace(new Transform({
  position: new Vector3(64, 0, 64),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(1, 1, 1)
}))
building.addComponentOrReplace(new GLTFShape('models/4x4.glb'))
building.getComponent(GLTFShape).withCollisions = true
building.getComponent(GLTFShape).isPointerBlocker = true
building.getComponent(GLTFShape).visible = true
building.setParent(_scene)
