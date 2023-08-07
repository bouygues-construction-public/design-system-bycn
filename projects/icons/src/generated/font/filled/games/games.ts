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
  [Games.AlienFilled]: "57851",
  [Games.BaseballFilled]: "57852",
  [Games.BasketballFilled]: "57853",
  [Games.CastleTurretFilled]: "57854",
  [Games.ClubFilled]: "57855",
  [Games.ConfettiFilled]: "57856",
  [Games.CrownFilled]: "57857",
  [Games.CrownSimpleFilled]: "57858",
  [Games.CubeFocusFilled]: "57859",
  [Games.DiamondFilled]: "57860",
  [Games.DiceFiveFilled]: "57861",
  [Games.DiceFourFilled]: "57862",
  [Games.DiceOneFilled]: "57863",
  [Games.DiceSixFilled]: "57864",
  [Games.DiceThreeFilled]: "57865",
  [Games.DiceTwoFilled]: "57866",
  [Games.FinnTheHumanFilled]: "57867",
  [Games.FlyingSaucerFilled]: "57868",
  [Games.FootballFilled]: "57869",
  [Games.GameControllerFilled]: "57870",
  [Games.GhostFilled]: "57871",
  [Games.GoogleCardboardLogoFilled]: "57872",
  [Games.HeartBreakFilled]: "57873",
  [Games.HeartFilled]: "57874",
  [Games.HeartHalfFilled]: "57875",
  [Games.HeartStraightBreakFilled]: "57876",
  [Games.HeartStraightFilled]: "57877",
  [Games.HorseFilled]: "57878",
  [Games.MaskHappyFilled]: "57879",
  [Games.MaskSadFilled]: "57880",
  [Games.MedalFilled]: "57881",
  [Games.MedalMilitaryFilled]: "57882",
  [Games.ParachuteFilled]: "57883",
  [Games.PinwheelFilled]: "57884",
  [Games.PokerChipFilled]: "57885",
  [Games.PuzzlePieceFilled]: "57886",
  [Games.ScrollFilled]: "57887",
  [Games.SkullFilled]: "57888",
  [Games.SoccerBallFilled]: "57889",
  [Games.SpadeFilled]: "57890",
  [Games.SpiralFilled]: "57891",
  [Games.StrategyFilled]: "57892",
  [Games.SwordFilled]: "57893",
  [Games.TargetFilled]: "57894",
  [Games.TennisBallFilled]: "57895",
  [Games.TreePalmFilled]: "57896",
  [Games.TrophyFilled]: "57897",
  [Games.VirtualRealityFilled]: "57898",
  [Games.VolleyballFilled]: "57899",
};
