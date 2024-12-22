import { Position } from "./position.interface";

export interface Patrol {
  name: string;
  route: Position[];
  progress: number;
}
