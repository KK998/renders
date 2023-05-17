import { useLoader } from "@react-three/fiber";
import { SpriteMaterial, TextureLoader } from "three";

const SkyBox = () => {
  const skyTexturePath = "/sky.jpeg";
  const spriteTexture = useLoader(TextureLoader, skyTexturePath);

  const spriteMaterial = new SpriteMaterial({ map: spriteTexture });

  return (
    <sprite
      material={spriteMaterial}
      position={[100, 100, 100]}
      scale={[100, 100, 100]}
    />
  );
};

export default SkyBox;
