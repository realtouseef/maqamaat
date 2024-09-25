import { FastForward } from "lucide-react";
import { VolumeOff } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Play } from "lucide-react";
import { Rewind } from "lucide-react";
import { Pause } from "lucide-react";
import { Volume2 } from "lucide-react";

export const BackwardSVG = () => {
  return <Rewind />;
};

export const ForwardSVG = () => {
  return <FastForward />;
};
export const PlaySVG = () => {
  return <Play />;
};
export const PauseSVG = () => {
  return <Pause />;
};
export const VolumeSVG = () => {
  return <Volume2 />;
};
export const VolumeMuteSVG = () => {
  return <VolumeOff />;
};

export const BackBtnSVG = () => {
  return <MoveLeft />;
};
export const AudioLinesSVG = () => {
  return <AudioLines />;
};
