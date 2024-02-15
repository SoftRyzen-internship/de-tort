import { ToppingPlate } from "@/components/ui/ToppingModalCard/types";

export const DOUBLE = "double";
export const SINGLE = "single";

export const findLayer = (
  plate: ToppingPlate[],
  targetLayers: ToppingPlate["layers"],
) => plate.find((obj) => obj.layers === targetLayers);
