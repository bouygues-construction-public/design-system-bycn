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
  [WeatherAndNature.AtomOutlined]: "59788",
  [WeatherAndNature.BirdOutlined]: "59789",
  [WeatherAndNature.BoneOutlined]: "59790",
  [WeatherAndNature.ButterflyOutlined]: "59791",
  [WeatherAndNature.CactusOutlined]: "59792",
  [WeatherAndNature.CampfireOutlined]: "59793",
  [WeatherAndNature.CatOutlined]: "59794",
  [WeatherAndNature.CloudFogOutlined]: "59795",
  [WeatherAndNature.CloudLightingOutlined]: "59796",
  [WeatherAndNature.CloudMoonOutlined]: "59797",
  [WeatherAndNature.CloudOutlined]: "59798",
  [WeatherAndNature.CloudRainOutlined]: "59799",
  [WeatherAndNature.CloudSnowOutlined]: "59800",
  [WeatherAndNature.CloudSunOutlined]: "59801",
  [WeatherAndNature.DogOutlined]: "59802",
  [WeatherAndNature.DropOutlined]: "59803",
  [WeatherAndNature.FeatherOutlined]: "59804",
  [WeatherAndNature.FireOutlined]: "59805",
  [WeatherAndNature.FireSimpleOutlined]: "59806",
  [WeatherAndNature.FishOutlined]: "59807",
  [WeatherAndNature.FishSimpleOutlined]: "59808",
  [WeatherAndNature.FlameOutlined]: "59809",
  [WeatherAndNature.FlowerLotusOutlined]: "59810",
  [WeatherAndNature.FlowerOutlined]: "59811",
  [WeatherAndNature.FlowerTulipOutlined]: "59812",
  [WeatherAndNature.LeafOutlined]: "59813",
  [WeatherAndNature.MoonOutlined]: "59814",
  [WeatherAndNature.MoonStarsOutlined]: "59815",
  [WeatherAndNature.MountainsOutlined]: "59816",
  [WeatherAndNature.PawPrintOutlined]: "59817",
  [WeatherAndNature.PlanetOutlined]: "59818",
  [WeatherAndNature.PlantOutlined]: "59819",
  [WeatherAndNature.RainbowCloudOutlined]: "59820",
  [WeatherAndNature.RainbowOutlined]: "59821",
  [WeatherAndNature.ShootingStarOutlined]: "59822",
  [WeatherAndNature.ShrimpOutlined]: "59823",
  [WeatherAndNature.SnowflakeOutlined]: "59824",
  [WeatherAndNature.SparkleOutlined]: "59825",
  [WeatherAndNature.StarFourOutlined]: "59826",
  [WeatherAndNature.SunDimOutlined]: "59827",
  [WeatherAndNature.SunHorizonOutlined]: "59828",
  [WeatherAndNature.SunOutlined]: "59829",
  [WeatherAndNature.ThermometerColdOutlined]: "59830",
  [WeatherAndNature.ThermometerHotOutlined]: "59831",
  [WeatherAndNature.ThermometerOutlined]: "59832",
  [WeatherAndNature.ThermometerSimpleOutlined]: "59833",
  [WeatherAndNature.TreeEvergreenOutlined]: "59834",
  [WeatherAndNature.TreeOutlined]: "59835",
  [WeatherAndNature.UmbrellaOutlined]: "59836",
  [WeatherAndNature.UmbrellaSimpleOutlined]: "59837",
  [WeatherAndNature.WavesOutlined]: "59838",
  [WeatherAndNature.WindOutlined]: "59839",
};
