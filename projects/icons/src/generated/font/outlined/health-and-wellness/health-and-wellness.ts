export type HealthAndWellnessId =
  | "bandaids-outlined"
  | "barbell-outlined"
  | "bed-outlined"
  | "brain-outlined"
  | "dna-outlined"
  | "face-mask-outlined"
  | "first-aid-kit-outlined"
  | "first-aid-outlined"
  | "flask-outlined"
  | "hand-heart-outlined"
  | "hand-soap-outlined"
  | "heartbeat-outlined"
  | "lifebuoy-outlined"
  | "pill-outlined"
  | "prescription-outlined"
  | "pulse-outlined"
  | "stethoscope-outlined"
  | "syringe-outlined"
  | "test-tube-outlined"
  | "toilet-outlined"
  | "toilet-paper-outlined"
  | "tooth-outlined"
  | "virus-outlined";

export type HealthAndWellnessKey =
  | "BandaidsOutlined"
  | "BarbellOutlined"
  | "BedOutlined"
  | "BrainOutlined"
  | "DnaOutlined"
  | "FaceMaskOutlined"
  | "FirstAidKitOutlined"
  | "FirstAidOutlined"
  | "FlaskOutlined"
  | "HandHeartOutlined"
  | "HandSoapOutlined"
  | "HeartbeatOutlined"
  | "LifebuoyOutlined"
  | "PillOutlined"
  | "PrescriptionOutlined"
  | "PulseOutlined"
  | "StethoscopeOutlined"
  | "SyringeOutlined"
  | "TestTubeOutlined"
  | "ToiletOutlined"
  | "ToiletPaperOutlined"
  | "ToothOutlined"
  | "VirusOutlined";

export enum HealthAndWellness {
  BandaidsOutlined = "bandaids-outlined",
  BarbellOutlined = "barbell-outlined",
  BedOutlined = "bed-outlined",
  BrainOutlined = "brain-outlined",
  DnaOutlined = "dna-outlined",
  FaceMaskOutlined = "face-mask-outlined",
  FirstAidKitOutlined = "first-aid-kit-outlined",
  FirstAidOutlined = "first-aid-outlined",
  FlaskOutlined = "flask-outlined",
  HandHeartOutlined = "hand-heart-outlined",
  HandSoapOutlined = "hand-soap-outlined",
  HeartbeatOutlined = "heartbeat-outlined",
  LifebuoyOutlined = "lifebuoy-outlined",
  PillOutlined = "pill-outlined",
  PrescriptionOutlined = "prescription-outlined",
  PulseOutlined = "pulse-outlined",
  StethoscopeOutlined = "stethoscope-outlined",
  SyringeOutlined = "syringe-outlined",
  TestTubeOutlined = "test-tube-outlined",
  ToiletOutlined = "toilet-outlined",
  ToiletPaperOutlined = "toilet-paper-outlined",
  ToothOutlined = "tooth-outlined",
  VirusOutlined = "virus-outlined",
}

export const HEALTH_AND_WELLNESS_CODEPOINTS: { [key in HealthAndWellness]: string } = {
  [HealthAndWellness.BandaidsOutlined]: "59148",
  [HealthAndWellness.BarbellOutlined]: "59149",
  [HealthAndWellness.BedOutlined]: "59150",
  [HealthAndWellness.BrainOutlined]: "59151",
  [HealthAndWellness.DnaOutlined]: "59152",
  [HealthAndWellness.FaceMaskOutlined]: "59153",
  [HealthAndWellness.FirstAidKitOutlined]: "59154",
  [HealthAndWellness.FirstAidOutlined]: "59155",
  [HealthAndWellness.FlaskOutlined]: "59156",
  [HealthAndWellness.HandHeartOutlined]: "59157",
  [HealthAndWellness.HandSoapOutlined]: "59158",
  [HealthAndWellness.HeartbeatOutlined]: "59159",
  [HealthAndWellness.LifebuoyOutlined]: "59160",
  [HealthAndWellness.PillOutlined]: "59161",
  [HealthAndWellness.PrescriptionOutlined]: "59162",
  [HealthAndWellness.PulseOutlined]: "59163",
  [HealthAndWellness.StethoscopeOutlined]: "59164",
  [HealthAndWellness.SyringeOutlined]: "59165",
  [HealthAndWellness.TestTubeOutlined]: "59166",
  [HealthAndWellness.ToiletOutlined]: "59167",
  [HealthAndWellness.ToiletPaperOutlined]: "59168",
  [HealthAndWellness.ToothOutlined]: "59169",
  [HealthAndWellness.VirusOutlined]: "59170",
};
