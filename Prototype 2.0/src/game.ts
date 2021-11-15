import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import dclEcs from '@dcl/ecs-scene-utils'
import resources from './resources'
import { PirateDialog } from './dialogData'
import { instantScene  } from './instantiateMap'

instantScene()
//#region "Debuging"
const canvas = new UICanvas()
canvas.positionX = 300
canvas.positionY = 300
// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)
const isDebugMode:boolean = false
class DebugSystem
{
  update()
  {
    text.value = Camera.instance.feetPosition.toString()
  }
}
if(isDebugMode)
  engine.addSystem(new DebugSystem())

//#endregion


let fraseID = 0
let congID,contID

export function changeFraseID(congratulations_ID:number, continueFind_ID) {
  fraseID = continueFind_ID
  congID = congratulations_ID;
  contID = continueFind_ID;
}
export const pirate = new NPC(
  {
    position: new Vector3(24, 2.8, 19.6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.15, 0.15, 0.15)
  },
  resources.models.persons.pirate,
  
  () => {
    //pirate.playAnimation('Hello', true, 2)

    let dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
       // pirate.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    pirate.addComponentOrReplace(new AudioSource(resources.sounds.pirate))
    pirate.getComponent(AudioSource).playOnce()
    
    // dialog UI
    log(fraseID.toString())
    pirate.talk(PirateDialog,fraseID)
    
    // collision
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/Pirate.png',
      height: 200,
      width: 200,
      section: {
        sourceHeight: 512,
        sourceWidth: 512,
      },
    },
    
    onWalkAway: () => {
     // pirate.playAnimation('Goodbye', true, 2)
    },
  }
)

const truba = new Entity('truba')
  engine.addEntity(truba)
  const transform77 = new Transform({
    position: new Vector3(29, 3.3, 26.19),
    rotation: new Quaternion(0, 1, 0, 1),
    scale: new Vector3(0.8, 0.8, 0.8)
  })
  truba.addComponentOrReplace(transform77)
  const gltfShape77 = new GLTFShape("models/mechanical_models/Truba/truba.glb")
  gltfShape77.withCollisions = true
  gltfShape77.isPointerBlocker = true
  gltfShape77.visible = true
  truba.addComponentOrReplace(gltfShape77)
  truba.addComponent(new OnClick(():void =>
  {
    gltfShape77.visible = false;
    fraseID = congID
  }))