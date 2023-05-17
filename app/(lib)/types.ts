import type {
  BufferGeometry,
  Material,
  Mesh as ThreeMesh,
  NormalBufferAttributes,
} from "three";

export type Mesh = ThreeMesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[]
>;
