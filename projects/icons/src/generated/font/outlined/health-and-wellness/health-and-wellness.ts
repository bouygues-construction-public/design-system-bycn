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
  [HealthAndWellness.BandaidsOutlined]: "61697",
  [HealthAndWellness.BarbellOutlined]: "61698",
  [HealthAndWellness.BedOutlined]: "61699",
  [HealthAndWellness.BrainOutlined]: "61700",
  [HealthAndWellness.DnaOutlined]: "61701",
  [HealthAndWellness.FaceMaskOutlined]: "61702",
  [HealthAndWellness.FirstAidKitOutlined]: "61703",
  [HealthAndWellness.FirstAidOutlined]: "61704",
  [HealthAndWellness.FlaskOutlined]: "61705",
  [HealthAndWellness.HandHeartOutlined]: "61706",
  [HealthAndWellness.HandSoapOutlined]: "61707",
  [HealthAndWellness.HeartbeatOutlined]: "61708",
  [HealthAndWellness.LifebuoyOutlined]: "61709",
  [HealthAndWellness.PillOutlined]: "61710",
  [HealthAndWellness.PrescriptionOutlined]: "61711",
  [HealthAndWellness.PulseOutlined]: "61712",
  [HealthAndWellness.StethoscopeOutlined]: "61713",
  [HealthAndWellness.SyringeOutlined]: "61714",
  [HealthAndWellness.TestTubeOutlined]: "61715",
  [HealthAndWellness.ToiletOutlined]: "61716",
  [HealthAndWellness.ToiletPaperOutlined]: "61717",
  [HealthAndWellness.ToothOutlined]: "61718",
  [HealthAndWellness.VirusOutlined]: "61719",
};
