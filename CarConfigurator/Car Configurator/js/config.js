import templateJson from "../template.3dverse.js";

/** @typedef {keyof (typeof templateJson.assets)} AssetKey */

const assetIds = Object.entries(templateJson.assets).reduce(
  (assetIds, [name, { asset_id }]) => {
    assetIds[/** @type {AssetKey} */ (name)] = asset_id;
    return assetIds;
  },
  /** @type {Record<AssetKey, string>} */ ({}),
);

export const config = {
  // This public user token gives any app user read-only access to the scene.
  // Read-only access still permits temporary changes to the scene graph,
  // within the context of a session, and these changes will be synced with
  // other users connected to the same session. However the changes will not
  // be persisted.
  publicUserToken: templateJson.publicToken,
  sceneUUID: assetIds.SceneCarConfigurator,

  isAnimationActiveTokenEntityNameUUID: "2fba1b6c-5532-4f02-b35c-8abf261a60ab",
  isDoorOpenedTokenUUID: "55d43bb6-1f7e-4f0c-a0a1-6e19188cf384",

  carSceneRefName: "Car",
  rimSceneRefName: "1e50d7d4-74c7-4b52-b9ce-2519604bcadf",
  
  // the cubemaps are from an external project that won't be copied so
  // we don't include their UUIDS in the template config
  colorChoices: /** @type {[number, number, number][]} */ ([
    [0, 0, 0],
    [1, 1, 1],
    [0.142, 0.142, 0.142],
    [0.243, 0.231, 0.203],
    [0.160, 0, 0],
  ]),
  materials: [
    {
      name: "Metallic",
      matUUID: assetIds.MaterialMetallic,
    },
    {
      name: "Solid",
      matUUID: assetIds.MaterialSolid,
    },
    {
      name: "Matte",
      matUUID: assetIds.MaterialMatte,
    },
  ],
  rims: [
    {
      name: "Mansory Rims",
      price: 10000,
      sceneUUID: assetIds.SceneMansoryRims,
    },
    {
      name: "Rocket Rims",
      price: 10000,
      sceneUUID: assetIds.SceneRocketRims,
    },
    {
      name: "Mercedes Rims",
      price: 10000,
      sceneUUID: assetIds.SceneMercedesRims,
    },
  ],
  cars: [
    {
      name: "Mercedes Class G",
      price: 750000,
      sceneUUID: assetIds.SceneMercedesGclass,
      paintMaterialUUID: assetIds.MaterialGclassPaint,
      headLightsMatUUID: assetIds.MaterialGclassHeadLights,
      rearLightsMatUUID: assetIds.MaterialGclassRearLights,
    },
  ],
  mods: [
    {
      sceneUUID: assetIds.MeshHood,
    },
    {
      sceneUUID: assetIds.MeshLips,
    },
  ],

  rotationAnimationSequenceUUID:
    templateJson.assets.AnimationSequenceRotation.asset_id,

  AnimationSequenceDoorOpeningUUID:
    templateJson.assets.AnimationSequenceDoorOpening.asset_id,
};
