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
  [WeatherAndNature.AtomFilled]: "58540",
  [WeatherAndNature.BirdFilled]: "58541",
  [WeatherAndNature.BoneFilled]: "58542",
  [WeatherAndNature.ButterflyFilled]: "58543",
  [WeatherAndNature.CactusFilled]: "58544",
  [WeatherAndNature.CampfireFilled]: "58545",
  [WeatherAndNature.CatFilled]: "58546",
  [WeatherAndNature.CloudFilled]: "58547",
  [WeatherAndNature.CloudFogFilled]: "58548",
  [WeatherAndNature.CloudLightingFilled]: "58549",
  [WeatherAndNature.CloudMoonFilled]: "58550",
  [WeatherAndNature.CloudRainFilled]: "58551",
  [WeatherAndNature.CloudSnowFilled]: "58552",
  [WeatherAndNature.CloudSunFilled]: "58553",
  [WeatherAndNature.DogFilled]: "58554",
  [WeatherAndNature.DropFilled]: "58555",
  [WeatherAndNature.FeatherFilled]: "58556",
  [WeatherAndNature.FireFilled]: "58557",
  [WeatherAndNature.FireSimpleFilled]: "58558",
  [WeatherAndNature.FishFilled]: "58559",
  [WeatherAndNature.FishSimpleFilled]: "58560",
  [WeatherAndNature.FlameFilled]: "58561",
  [WeatherAndNature.FlowerFilled]: "58562",
  [WeatherAndNature.FlowerLotusFilled]: "58563",
  [WeatherAndNature.FlowerTulipFilled]: "58564",
  [WeatherAndNature.LeafFilled]: "58565",
  [WeatherAndNature.MoonFilled]: "58566",
  [WeatherAndNature.MoonStarsFilled]: "58567",
  [WeatherAndNature.MountainsFilled]: "58568",
  [WeatherAndNature.PawPrintFilled]: "58569",
  [WeatherAndNature.PlanetFilled]: "58570",
  [WeatherAndNature.PlantFilled]: "58571",
  [WeatherAndNature.RainbowCloudFilled]: "58572",
  [WeatherAndNature.RainbowFilled]: "58573",
  [WeatherAndNature.ShootingStarFilled]: "58574",
  [WeatherAndNature.ShrimpFilled]: "58575",
  [WeatherAndNature.SnowflakeFilled]: "58576",
  [WeatherAndNature.SparkleFilled]: "58577",
  [WeatherAndNature.StarFourFilled]: "58578",
  [WeatherAndNature.SunDimFilled]: "58579",
  [WeatherAndNature.SunFilled]: "58580",
  [WeatherAndNature.SunHorizonFilled]: "58581",
  [WeatherAndNature.ThermometerColdFilled]: "58582",
  [WeatherAndNature.ThermometerFilled]: "58583",
  [WeatherAndNature.ThermometerHotFilled]: "58584",
  [WeatherAndNature.ThermometerSimpleFilled]: "58585",
  [WeatherAndNature.TreeEvergreenFilled]: "58586",
  [WeatherAndNature.TreeFilled]: "58587",
  [WeatherAndNature.UmbrellaFilled]: "58588",
  [WeatherAndNature.UmbrellaSimpleFilled]: "58589",
  [WeatherAndNature.WavesFilled]: "58590",
  [WeatherAndNature.WindFilled]: "58591",
};
