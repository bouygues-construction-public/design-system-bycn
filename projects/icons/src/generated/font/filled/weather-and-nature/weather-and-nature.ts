export type WeatherAndNatureId =
  | "atom-filled"
  | "bird-filled"
  | "bone-filled"
  | "butterfly-filled"
  | "cactus-filled"
  | "campfire-filled"
  | "cat-filled"
  | "cloud-filled"
  | "cloud-fog-filled"
  | "cloud-lighting-filled"
  | "cloud-moon-filled"
  | "cloud-rain-filled"
  | "cloud-snow-filled"
  | "cloud-sun-filled"
  | "dog-filled"
  | "drop-filled"
  | "feather-filled"
  | "fire-filled"
  | "fire-simple-filled"
  | "fish-filled"
  | "fish-simple-filled"
  | "flame-filled"
  | "flower-filled"
  | "flower-lotus-filled"
  | "flower-tulip-filled"
  | "leaf-filled"
  | "moon-filled"
  | "moon-stars-filled"
  | "mountains-filled"
  | "paw-print-filled"
  | "planet-filled"
  | "plant-filled"
  | "rainbow-cloud-filled"
  | "rainbow-filled"
  | "shooting-star-filled"
  | "shrimp-filled"
  | "snowflake-filled"
  | "sparkle-filled"
  | "star-four-filled"
  | "sun-dim-filled"
  | "sun-filled"
  | "sun-horizon-filled"
  | "thermometer-cold-filled"
  | "thermometer-filled"
  | "thermometer-hot-filled"
  | "thermometer-simple-filled"
  | "tree-evergreen-filled"
  | "tree-filled"
  | "umbrella-filled"
  | "umbrella-simple-filled"
  | "waves-filled"
  | "wind-filled";

export type WeatherAndNatureKey =
  | "AtomFilled"
  | "BirdFilled"
  | "BoneFilled"
  | "ButterflyFilled"
  | "CactusFilled"
  | "CampfireFilled"
  | "CatFilled"
  | "CloudFilled"
  | "CloudFogFilled"
  | "CloudLightingFilled"
  | "CloudMoonFilled"
  | "CloudRainFilled"
  | "CloudSnowFilled"
  | "CloudSunFilled"
  | "DogFilled"
  | "DropFilled"
  | "FeatherFilled"
  | "FireFilled"
  | "FireSimpleFilled"
  | "FishFilled"
  | "FishSimpleFilled"
  | "FlameFilled"
  | "FlowerFilled"
  | "FlowerLotusFilled"
  | "FlowerTulipFilled"
  | "LeafFilled"
  | "MoonFilled"
  | "MoonStarsFilled"
  | "MountainsFilled"
  | "PawPrintFilled"
  | "PlanetFilled"
  | "PlantFilled"
  | "RainbowCloudFilled"
  | "RainbowFilled"
  | "ShootingStarFilled"
  | "ShrimpFilled"
  | "SnowflakeFilled"
  | "SparkleFilled"
  | "StarFourFilled"
  | "SunDimFilled"
  | "SunFilled"
  | "SunHorizonFilled"
  | "ThermometerColdFilled"
  | "ThermometerFilled"
  | "ThermometerHotFilled"
  | "ThermometerSimpleFilled"
  | "TreeEvergreenFilled"
  | "TreeFilled"
  | "UmbrellaFilled"
  | "UmbrellaSimpleFilled"
  | "WavesFilled"
  | "WindFilled";

export enum WeatherAndNature {
  AtomFilled = "atom-filled",
  BirdFilled = "bird-filled",
  BoneFilled = "bone-filled",
  ButterflyFilled = "butterfly-filled",
  CactusFilled = "cactus-filled",
  CampfireFilled = "campfire-filled",
  CatFilled = "cat-filled",
  CloudFilled = "cloud-filled",
  CloudFogFilled = "cloud-fog-filled",
  CloudLightingFilled = "cloud-lighting-filled",
  CloudMoonFilled = "cloud-moon-filled",
  CloudRainFilled = "cloud-rain-filled",
  CloudSnowFilled = "cloud-snow-filled",
  CloudSunFilled = "cloud-sun-filled",
  DogFilled = "dog-filled",
  DropFilled = "drop-filled",
  FeatherFilled = "feather-filled",
  FireFilled = "fire-filled",
  FireSimpleFilled = "fire-simple-filled",
  FishFilled = "fish-filled",
  FishSimpleFilled = "fish-simple-filled",
  FlameFilled = "flame-filled",
  FlowerFilled = "flower-filled",
  FlowerLotusFilled = "flower-lotus-filled",
  FlowerTulipFilled = "flower-tulip-filled",
  LeafFilled = "leaf-filled",
  MoonFilled = "moon-filled",
  MoonStarsFilled = "moon-stars-filled",
  MountainsFilled = "mountains-filled",
  PawPrintFilled = "paw-print-filled",
  PlanetFilled = "planet-filled",
  PlantFilled = "plant-filled",
  RainbowCloudFilled = "rainbow-cloud-filled",
  RainbowFilled = "rainbow-filled",
  ShootingStarFilled = "shooting-star-filled",
  ShrimpFilled = "shrimp-filled",
  SnowflakeFilled = "snowflake-filled",
  SparkleFilled = "sparkle-filled",
  StarFourFilled = "star-four-filled",
  SunDimFilled = "sun-dim-filled",
  SunFilled = "sun-filled",
  SunHorizonFilled = "sun-horizon-filled",
  ThermometerColdFilled = "thermometer-cold-filled",
  ThermometerFilled = "thermometer-filled",
  ThermometerHotFilled = "thermometer-hot-filled",
  ThermometerSimpleFilled = "thermometer-simple-filled",
  TreeEvergreenFilled = "tree-evergreen-filled",
  TreeFilled = "tree-filled",
  UmbrellaFilled = "umbrella-filled",
  UmbrellaSimpleFilled = "umbrella-simple-filled",
  WavesFilled = "waves-filled",
  WindFilled = "wind-filled",
}

export const WEATHER_AND_NATURE_CODEPOINTS: { [key in WeatherAndNature]: string } = {
  [WeatherAndNature.AtomFilled]: "61697",
  [WeatherAndNature.BirdFilled]: "61698",
  [WeatherAndNature.BoneFilled]: "61699",
  [WeatherAndNature.ButterflyFilled]: "61700",
  [WeatherAndNature.CactusFilled]: "61701",
  [WeatherAndNature.CampfireFilled]: "61702",
  [WeatherAndNature.CatFilled]: "61703",
  [WeatherAndNature.CloudFilled]: "61704",
  [WeatherAndNature.CloudFogFilled]: "61705",
  [WeatherAndNature.CloudLightingFilled]: "61706",
  [WeatherAndNature.CloudMoonFilled]: "61707",
  [WeatherAndNature.CloudRainFilled]: "61708",
  [WeatherAndNature.CloudSnowFilled]: "61709",
  [WeatherAndNature.CloudSunFilled]: "61710",
  [WeatherAndNature.DogFilled]: "61711",
  [WeatherAndNature.DropFilled]: "61712",
  [WeatherAndNature.FeatherFilled]: "61713",
  [WeatherAndNature.FireFilled]: "61714",
  [WeatherAndNature.FireSimpleFilled]: "61715",
  [WeatherAndNature.FishFilled]: "61716",
  [WeatherAndNature.FishSimpleFilled]: "61717",
  [WeatherAndNature.FlameFilled]: "61718",
  [WeatherAndNature.FlowerFilled]: "61719",
  [WeatherAndNature.FlowerLotusFilled]: "61720",
  [WeatherAndNature.FlowerTulipFilled]: "61721",
  [WeatherAndNature.LeafFilled]: "61722",
  [WeatherAndNature.MoonFilled]: "61723",
  [WeatherAndNature.MoonStarsFilled]: "61724",
  [WeatherAndNature.MountainsFilled]: "61725",
  [WeatherAndNature.PawPrintFilled]: "61726",
  [WeatherAndNature.PlanetFilled]: "61727",
  [WeatherAndNature.PlantFilled]: "61728",
  [WeatherAndNature.RainbowCloudFilled]: "61729",
  [WeatherAndNature.RainbowFilled]: "61730",
  [WeatherAndNature.ShootingStarFilled]: "61731",
  [WeatherAndNature.ShrimpFilled]: "61732",
  [WeatherAndNature.SnowflakeFilled]: "61733",
  [WeatherAndNature.SparkleFilled]: "61734",
  [WeatherAndNature.StarFourFilled]: "61735",
  [WeatherAndNature.SunDimFilled]: "61736",
  [WeatherAndNature.SunFilled]: "61737",
  [WeatherAndNature.SunHorizonFilled]: "61738",
  [WeatherAndNature.ThermometerColdFilled]: "61739",
  [WeatherAndNature.ThermometerFilled]: "61740",
  [WeatherAndNature.ThermometerHotFilled]: "61741",
  [WeatherAndNature.ThermometerSimpleFilled]: "61742",
  [WeatherAndNature.TreeEvergreenFilled]: "61743",
  [WeatherAndNature.TreeFilled]: "61744",
  [WeatherAndNature.UmbrellaFilled]: "61745",
  [WeatherAndNature.UmbrellaSimpleFilled]: "61746",
  [WeatherAndNature.WavesFilled]: "61747",
  [WeatherAndNature.WindFilled]: "61748",
};
