export type GamesId =
  | "alien-filled"
  | "baseball-filled"
  | "basketball-filled"
  | "castle-turret-filled"
  | "club-filled"
  | "confetti-filled"
  | "crown-filled"
  | "crown-simple-filled"
  | "cube-focus-filled"
  | "diamond-filled"
  | "dice-five-filled"
  | "dice-four-filled"
  | "dice-one-filled"
  | "dice-six-filled"
  | "dice-three-filled"
  | "dice-two-filled"
  | "finn-the-human-filled"
  | "flying-saucer-filled"
  | "football-filled"
  | "game-controller-filled"
  | "ghost-filled"
  | "google-cardboard-logo-filled"
  | "heart-break-filled"
  | "heart-filled"
  | "heart-half-filled"
  | "heart-straight-break-filled"
  | "heart-straight-filled"
  | "horse-filled"
  | "mask-happy-filled"
  | "mask-sad-filled"
  | "medal-filled"
  | "medal-military-filled"
  | "parachute-filled"
  | "pinwheel-filled"
  | "poker-chip-filled"
  | "puzzle-piece-filled"
  | "scroll-filled"
  | "skull-filled"
  | "soccer-ball-filled"
  | "spade-filled"
  | "spiral-filled"
  | "strategy-filled"
  | "sword-filled"
  | "target-filled"
  | "tennis-ball-filled"
  | "tree-palm-filled"
  | "trophy-filled"
  | "virtual-reality-filled"
  | "volleyball-filled";

export type GamesKey =
  | "AlienFilled"
  | "BaseballFilled"
  | "BasketballFilled"
  | "CastleTurretFilled"
  | "ClubFilled"
  | "ConfettiFilled"
  | "CrownFilled"
  | "CrownSimpleFilled"
  | "CubeFocusFilled"
  | "DiamondFilled"
  | "DiceFiveFilled"
  | "DiceFourFilled"
  | "DiceOneFilled"
  | "DiceSixFilled"
  | "DiceThreeFilled"
  | "DiceTwoFilled"
  | "FinnTheHumanFilled"
  | "FlyingSaucerFilled"
  | "FootballFilled"
  | "GameControllerFilled"
  | "GhostFilled"
  | "GoogleCardboardLogoFilled"
  | "HeartBreakFilled"
  | "HeartFilled"
  | "HeartHalfFilled"
  | "HeartStraightBreakFilled"
  | "HeartStraightFilled"
  | "HorseFilled"
  | "MaskHappyFilled"
  | "MaskSadFilled"
  | "MedalFilled"
  | "MedalMilitaryFilled"
  | "ParachuteFilled"
  | "PinwheelFilled"
  | "PokerChipFilled"
  | "PuzzlePieceFilled"
  | "ScrollFilled"
  | "SkullFilled"
  | "SoccerBallFilled"
  | "SpadeFilled"
  | "SpiralFilled"
  | "StrategyFilled"
  | "SwordFilled"
  | "TargetFilled"
  | "TennisBallFilled"
  | "TreePalmFilled"
  | "TrophyFilled"
  | "VirtualRealityFilled"
  | "VolleyballFilled";

export enum Games {
  AlienFilled = "alien-filled",
  BaseballFilled = "baseball-filled",
  BasketballFilled = "basketball-filled",
  CastleTurretFilled = "castle-turret-filled",
  ClubFilled = "club-filled",
  ConfettiFilled = "confetti-filled",
  CrownFilled = "crown-filled",
  CrownSimpleFilled = "crown-simple-filled",
  CubeFocusFilled = "cube-focus-filled",
  DiamondFilled = "diamond-filled",
  DiceFiveFilled = "dice-five-filled",
  DiceFourFilled = "dice-four-filled",
  DiceOneFilled = "dice-one-filled",
  DiceSixFilled = "dice-six-filled",
  DiceThreeFilled = "dice-three-filled",
  DiceTwoFilled = "dice-two-filled",
  FinnTheHumanFilled = "finn-the-human-filled",
  FlyingSaucerFilled = "flying-saucer-filled",
  FootballFilled = "football-filled",
  GameControllerFilled = "game-controller-filled",
  GhostFilled = "ghost-filled",
  GoogleCardboardLogoFilled = "google-cardboard-logo-filled",
  HeartBreakFilled = "heart-break-filled",
  HeartFilled = "heart-filled",
  HeartHalfFilled = "heart-half-filled",
  HeartStraightBreakFilled = "heart-straight-break-filled",
  HeartStraightFilled = "heart-straight-filled",
  HorseFilled = "horse-filled",
  MaskHappyFilled = "mask-happy-filled",
  MaskSadFilled = "mask-sad-filled",
  MedalFilled = "medal-filled",
  MedalMilitaryFilled = "medal-military-filled",
  ParachuteFilled = "parachute-filled",
  PinwheelFilled = "pinwheel-filled",
  PokerChipFilled = "poker-chip-filled",
  PuzzlePieceFilled = "puzzle-piece-filled",
  ScrollFilled = "scroll-filled",
  SkullFilled = "skull-filled",
  SoccerBallFilled = "soccer-ball-filled",
  SpadeFilled = "spade-filled",
  SpiralFilled = "spiral-filled",
  StrategyFilled = "strategy-filled",
  SwordFilled = "sword-filled",
  TargetFilled = "target-filled",
  TennisBallFilled = "tennis-ball-filled",
  TreePalmFilled = "tree-palm-filled",
  TrophyFilled = "trophy-filled",
  VirtualRealityFilled = "virtual-reality-filled",
  VolleyballFilled = "volleyball-filled",
}

export const GAMES_CODEPOINTS: { [key in Games]: string } = {
  [Games.AlienFilled]: "61697",
  [Games.BaseballFilled]: "61698",
  [Games.BasketballFilled]: "61699",
  [Games.CastleTurretFilled]: "61700",
  [Games.ClubFilled]: "61701",
  [Games.ConfettiFilled]: "61702",
  [Games.CrownFilled]: "61703",
  [Games.CrownSimpleFilled]: "61704",
  [Games.CubeFocusFilled]: "61705",
  [Games.DiamondFilled]: "61706",
  [Games.DiceFiveFilled]: "61707",
  [Games.DiceFourFilled]: "61708",
  [Games.DiceOneFilled]: "61709",
  [Games.DiceSixFilled]: "61710",
  [Games.DiceThreeFilled]: "61711",
  [Games.DiceTwoFilled]: "61712",
  [Games.FinnTheHumanFilled]: "61713",
  [Games.FlyingSaucerFilled]: "61714",
  [Games.FootballFilled]: "61715",
  [Games.GameControllerFilled]: "61716",
  [Games.GhostFilled]: "61717",
  [Games.GoogleCardboardLogoFilled]: "61718",
  [Games.HeartBreakFilled]: "61719",
  [Games.HeartFilled]: "61720",
  [Games.HeartHalfFilled]: "61721",
  [Games.HeartStraightBreakFilled]: "61722",
  [Games.HeartStraightFilled]: "61723",
  [Games.HorseFilled]: "61724",
  [Games.MaskHappyFilled]: "61725",
  [Games.MaskSadFilled]: "61726",
  [Games.MedalFilled]: "61727",
  [Games.MedalMilitaryFilled]: "61728",
  [Games.ParachuteFilled]: "61729",
  [Games.PinwheelFilled]: "61730",
  [Games.PokerChipFilled]: "61731",
  [Games.PuzzlePieceFilled]: "61732",
  [Games.ScrollFilled]: "61733",
  [Games.SkullFilled]: "61734",
  [Games.SoccerBallFilled]: "61735",
  [Games.SpadeFilled]: "61736",
  [Games.SpiralFilled]: "61737",
  [Games.StrategyFilled]: "61738",
  [Games.SwordFilled]: "61739",
  [Games.TargetFilled]: "61740",
  [Games.TennisBallFilled]: "61741",
  [Games.TreePalmFilled]: "61742",
  [Games.TrophyFilled]: "61743",
  [Games.VirtualRealityFilled]: "61744",
  [Games.VolleyballFilled]: "61745",
};
