export type WeatherAndNatureId =
  | "atom-outlined"
  | "bird-outlined"
  | "bone-outlined"
  | "butterfly-outlined"
  | "cactus-outlined"
  | "campfire-outlined"
  | "cat-outlined"
  | "cloud-fog-outlined"
  | "cloud-lighting-outlined"
  | "cloud-moon-outlined"
  | "cloud-outlined"
  | "cloud-rain-outlined"
  | "cloud-snow-outlined"
  | "cloud-sun-outlined"
  | "dog-outlined"
  | "drop-outlined"
  | "feather-outlined"
  | "fire-outlined"
  | "fire-simple-outlined"
  | "fish-outlined"
  | "fish-simple-outlined"
  | "flame-outlined"
  | "flower-lotus-outlined"
  | "flower-outlined"
  | "flower-tulip-outlined"
  | "leaf-outlined"
  | "moon-outlined"
  | "moon-stars-outlined"
  | "mountains-outlined"
  | "paw-print-outlined"
  | "planet-outlined"
  | "plant-outlined"
  | "rainbow-cloud-outlined"
  | "rainbow-outlined"
  | "shooting-star-outlined"
  | "shrimp-outlined"
  | "snowflake-outlined"
  | "sparkle-outlined"
  | "star-four-outlined"
  | "sun-dim-outlined"
  | "sun-horizon-outlined"
  | "sun-outlined"
  | "thermometer-cold-outlined"
  | "thermometer-hot-outlined"
  | "thermometer-outlined"
  | "thermometer-simple-outlined"
  | "tree-evergreen-outlined"
  | "tree-outlined"
  | "umbrella-outlined"
  | "umbrella-simple-outlined"
  | "waves-outlined"
  | "wind-outlined";

export type WeatherAndNatureKey =
  | "AtomOutlined"
  | "BirdOutlined"
  | "BoneOutlined"
  | "ButterflyOutlined"
  | "CactusOutlined"
  | "CampfireOutlined"
  | "CatOutlined"
  | "CloudFogOutlined"
  | "CloudLightingOutlined"
  | "CloudMoonOutlined"
  | "CloudOutlined"
  | "CloudRainOutlined"
  | "CloudSnowOutlined"
  | "CloudSunOutlined"
  | "DogOutlined"
  | "DropOutlined"
  | "FeatherOutlined"
  | "FireOutlined"
  | "FireSimpleOutlined"
  | "FishOutlined"
  | "FishSimpleOutlined"
  | "FlameOutlined"
  | "FlowerLotusOutlined"
  | "FlowerOutlined"
  | "FlowerTulipOutlined"
  | "LeafOutlined"
  | "MoonOutlined"
  | "MoonStarsOutlined"
  | "MountainsOutlined"
  | "PawPrintOutlined"
  | "PlanetOutlined"
  | "PlantOutlined"
  | "RainbowCloudOutlined"
  | "RainbowOutlined"
  | "ShootingStarOutlined"
  | "ShrimpOutlined"
  | "SnowflakeOutlined"
  | "SparkleOutlined"
  | "StarFourOutlined"
  | "SunDimOutlined"
  | "SunHorizonOutlined"
  | "SunOutlined"
  | "ThermometerColdOutlined"
  | "ThermometerHotOutlined"
  | "ThermometerOutlined"
  | "ThermometerSimpleOutlined"
  | "TreeEvergreenOutlined"
  | "TreeOutlined"
  | "UmbrellaOutlined"
  | "UmbrellaSimpleOutlined"
  | "WavesOutlined"
  | "WindOutlined";

export enum WeatherAndNature {
  AtomOutlined = "atom-outlined",
  BirdOutlined = "bird-outlined",
  BoneOutlined = "bone-outlined",
  ButterflyOutlined = "butterfly-outlined",
  CactusOutlined = "cactus-outlined",
  CampfireOutlined = "campfire-outlined",
  CatOutlined = "cat-outlined",
  CloudFogOutlined = "cloud-fog-outlined",
  CloudLightingOutlined = "cloud-lighting-outlined",
  CloudMoonOutlined = "cloud-moon-outlined",
  CloudOutlined = "cloud-outlined",
  CloudRainOutlined = "cloud-rain-outlined",
  CloudSnowOutlined = "cloud-snow-outlined",
  CloudSunOutlined = "cloud-sun-outlined",
  DogOutlined = "dog-outlined",
  DropOutlined = "drop-outlined",
  FeatherOutlined = "feather-outlined",
  FireOutlined = "fire-outlined",
  FireSimpleOutlined = "fire-simple-outlined",
  FishOutlined = "fish-outlined",
  FishSimpleOutlined = "fish-simple-outlined",
  FlameOutlined = "flame-outlined",
  FlowerLotusOutlined = "flower-lotus-outlined",
  FlowerOutlined = "flower-outlined",
  FlowerTulipOutlined = "flower-tulip-outlined",
  LeafOutlined = "leaf-outlined",
  MoonOutlined = "moon-outlined",
  MoonStarsOutlined = "moon-stars-outlined",
  MountainsOutlined = "mountains-outlined",
  PawPrintOutlined = "paw-print-outlined",
  PlanetOutlined = "planet-outlined",
  PlantOutlined = "plant-outlined",
  RainbowCloudOutlined = "rainbow-cloud-outlined",
  RainbowOutlined = "rainbow-outlined",
  ShootingStarOutlined = "shooting-star-outlined",
  ShrimpOutlined = "shrimp-outlined",
  SnowflakeOutlined = "snowflake-outlined",
  SparkleOutlined = "sparkle-outlined",
  StarFourOutlined = "star-four-outlined",
  SunDimOutlined = "sun-dim-outlined",
  SunHorizonOutlined = "sun-horizon-outlined",
  SunOutlined = "sun-outlined",
  ThermometerColdOutlined = "thermometer-cold-outlined",
  ThermometerHotOutlined = "thermometer-hot-outlined",
  ThermometerOutlined = "thermometer-outlined",
  ThermometerSimpleOutlined = "thermometer-simple-outlined",
  TreeEvergreenOutlined = "tree-evergreen-outlined",
  TreeOutlined = "tree-outlined",
  UmbrellaOutlined = "umbrella-outlined",
  UmbrellaSimpleOutlined = "umbrella-simple-outlined",
  WavesOutlined = "waves-outlined",
  WindOutlined = "wind-outlined",
}

export const WEATHER_AND_NATURE_CODEPOINTS: { [key in WeatherAndNature]: string } = {
  [WeatherAndNature.AtomOutlined]: "61697",
  [WeatherAndNature.BirdOutlined]: "61698",
  [WeatherAndNature.BoneOutlined]: "61699",
  [WeatherAndNature.ButterflyOutlined]: "61700",
  [WeatherAndNature.CactusOutlined]: "61701",
  [WeatherAndNature.CampfireOutlined]: "61702",
  [WeatherAndNature.CatOutlined]: "61703",
  [WeatherAndNature.CloudFogOutlined]: "61704",
  [WeatherAndNature.CloudLightingOutlined]: "61705",
  [WeatherAndNature.CloudMoonOutlined]: "61706",
  [WeatherAndNature.CloudOutlined]: "61707",
  [WeatherAndNature.CloudRainOutlined]: "61708",
  [WeatherAndNature.CloudSnowOutlined]: "61709",
  [WeatherAndNature.CloudSunOutlined]: "61710",
  [WeatherAndNature.DogOutlined]: "61711",
  [WeatherAndNature.DropOutlined]: "61712",
  [WeatherAndNature.FeatherOutlined]: "61713",
  [WeatherAndNature.FireOutlined]: "61714",
  [WeatherAndNature.FireSimpleOutlined]: "61715",
  [WeatherAndNature.FishOutlined]: "61716",
  [WeatherAndNature.FishSimpleOutlined]: "61717",
  [WeatherAndNature.FlameOutlined]: "61718",
  [WeatherAndNature.FlowerLotusOutlined]: "61719",
  [WeatherAndNature.FlowerOutlined]: "61720",
  [WeatherAndNature.FlowerTulipOutlined]: "61721",
  [WeatherAndNature.LeafOutlined]: "61722",
  [WeatherAndNature.MoonOutlined]: "61723",
  [WeatherAndNature.MoonStarsOutlined]: "61724",
  [WeatherAndNature.MountainsOutlined]: "61725",
  [WeatherAndNature.PawPrintOutlined]: "61726",
  [WeatherAndNature.PlanetOutlined]: "61727",
  [WeatherAndNature.PlantOutlined]: "61728",
  [WeatherAndNature.RainbowCloudOutlined]: "61729",
  [WeatherAndNature.RainbowOutlined]: "61730",
  [WeatherAndNature.ShootingStarOutlined]: "61731",
  [WeatherAndNature.ShrimpOutlined]: "61732",
  [WeatherAndNature.SnowflakeOutlined]: "61733",
  [WeatherAndNature.SparkleOutlined]: "61734",
  [WeatherAndNature.StarFourOutlined]: "61735",
  [WeatherAndNature.SunDimOutlined]: "61736",
  [WeatherAndNature.SunHorizonOutlined]: "61737",
  [WeatherAndNature.SunOutlined]: "61738",
  [WeatherAndNature.ThermometerColdOutlined]: "61739",
  [WeatherAndNature.ThermometerHotOutlined]: "61740",
  [WeatherAndNature.ThermometerOutlined]: "61741",
  [WeatherAndNature.ThermometerSimpleOutlined]: "61742",
  [WeatherAndNature.TreeEvergreenOutlined]: "61743",
  [WeatherAndNature.TreeOutlined]: "61744",
  [WeatherAndNature.UmbrellaOutlined]: "61745",
  [WeatherAndNature.UmbrellaSimpleOutlined]: "61746",
  [WeatherAndNature.WavesOutlined]: "61747",
  [WeatherAndNature.WindOutlined]: "61748",
};
