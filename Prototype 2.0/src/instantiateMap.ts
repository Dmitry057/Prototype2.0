import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import Chest, { Props } from './item'

export function instantScene()
{
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const island = new Entity('island')
engine.addEntity(island)
island.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(26, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
island.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/decor/0ac1416b-b2a7-4629-8d31-9204418f262a/island.gltf")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
island.addComponentOrReplace(gltfShape)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape2 = new GLTFShape("models/decor/0ee02d9e-7d23-42d9-a0c9-e1394ac0a98a/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity.addComponentOrReplace(gltfShape2)
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform3)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape2)
const transform4 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform4)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform5)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform6)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform7)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform8)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform9)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform10)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform11)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(24.5, 2.5, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 0.5)
})
bentPalmTree.addComponentOrReplace(transform12)
const gltfShape3 = new GLTFShape("models/decor/e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
bentPalmTree.addComponentOrReplace(gltfShape3)

const beachRock = new Entity('beachRock')
engine.addEntity(beachRock)
beachRock.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(18, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("models/decor/41263fd0-8e9d-4a86-a849-fd285db9e450/RockBig_02/RockBig_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
beachRock.addComponentOrReplace(gltfShape4)

const rockArch = new Entity('rockArch')
engine.addEntity(rockArch)
rockArch.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(31.5, 1.5, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockArch.addComponentOrReplace(transform14)
const gltfShape5 = new GLTFShape("models/decor/b57ff96e-0024-40e6-9303-fc4191b628d7/RockArc_02/RockArc_02.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
rockArch.addComponentOrReplace(gltfShape5)

/*
const woodenRaft = new Entity('woodenRaft')
engine.addEntity(woodenRaft)
woodenRaft.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(37, 1.5, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenRaft.addComponentOrReplace(transform15)
const gltfShape6 = new GLTFShape("models/decor/5d6202b7-d5b7-4bc6-a4a2-c1e6b35c0bb6/Raft_01/Raft_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
woodenRaft.addComponentOrReplace(gltfShape6)
*/
const rusticRopeBridge = new Entity('rusticRopeBridge')
engine.addEntity(rusticRopeBridge)
rusticRopeBridge.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(35, 2, 20.5),
  rotation: new Quaternion(-2.997446312425628e-16, 0.690317690372467, -8.229225301192855e-8, 0.7235063910484314),
  scale: new Vector3(1, 1, 1)
})
rusticRopeBridge.addComponentOrReplace(transform16)
const gltfShape7 = new GLTFShape("models/decor/9bcc6035-2fe6-4588-88d6-c06e6d4e9c45/DocksBridge_01/DocksBridge_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
rusticRopeBridge.addComponentOrReplace(gltfShape7)

const bigSandDune = new Entity('bigSandDune')
engine.addEntity(bigSandDune)
bigSandDune.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(25, 1.5, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigSandDune.addComponentOrReplace(transform17)
const gltfShape8 = new GLTFShape("models/decor/76cf13e2-3df0-4eae-af1c-f10ba9acfa33/SandPatchBig_01/SandPatchBig_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
bigSandDune.addComponentOrReplace(gltfShape8)

const beachRock2 = new Entity('beachRock2')
engine.addEntity(beachRock2)
beachRock2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(27.5, 3, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49000000953674316, 0.49000000953674316, 0.49000000953674316)
})
beachRock2.addComponentOrReplace(transform18)
const gltfShape9 = new GLTFShape("models/decor/f4f6648a-77db-4599-a873-c11e19420f18/RockBig_07/RockBig_07.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
beachRock2.addComponentOrReplace(gltfShape9)
const chest = new Chest()
  const spawner = new Spawner<Props>(chest)

  spawner.spawn(
    'chest',
    new Transform({
      position: new Vector3(29, 3.1, 26.19)
    }),
    {
      onClick: [
        {
          actionId: 'toggle',
          entityName: 'chest',
          values: {}
        }
      ]
    }
  )
}