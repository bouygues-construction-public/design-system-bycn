export type HealthAndWellnessId =
  | "bandaids-filled"
  | "barbell-filled"
  | "bed-filled"
  | "brain-filled"
  | "dna-filled"
  | "face-mask-filled"
  | "first-aid-filled"
  | "first-aid-kit-filled"
  | "flask-filled"
  | "hand-heart-filled"
  | "hand-soap-filled"
  | "heartbeat-filled"
  | "lifebuoy-filled"
  | "pill-filled"
  | "prescription-filled"
  | "pulse-filled"
  | "stethoscope-filled"
  | "syringe-filled"
  | "test-tube-filled"
  | "toilet-filled"
  | "toilet-paper-filled"
  | "tooth-filled"
  | "virus-filled";

export type HealthAndWellnessKey =
  | "BandaidsFilled"
  | "BarbellFilled"
  | "BedFilled"
  | "BrainFilled"
  | "DnaFilled"
  | "FaceMaskFilled"
  | "FirstAidFilled"
  | "FirstAidKitFilled"
  | "FlaskFilled"
  | "HandHeartFilled"
  | "HandSoapFilled"
  | "HeartbeatFilled"
  | "LifebuoyFilled"
  | "PillFilled"
  | "PrescriptionFilled"
  | "PulseFilled"
  | "StethoscopeFilled"
  | "SyringeFilled"
  | "TestTubeFilled"
  | "ToiletFilled"
  | "ToiletPaperFilled"
  | "ToothFilled"
  | "VirusFilled";

export enum HealthAndWellness {
  BandaidsFilled = "bandaids-filled",
  BarbellFilled = "barbell-filled",
  BedFilled = "bed-filled",
  BrainFilled = "brain-filled",
  DnaFilled = "dna-filled",
  FaceMaskFilled = "face-mask-filled",
  FirstAidFilled = "first-aid-filled",
  FirstAidKitFilled = "first-aid-kit-filled",
  FlaskFilled = "flask-filled",
  HandHeartFilled = "hand-heart-filled",
  HandSoapFilled = "hand-soap-filled",
  HeartbeatFilled = "heartbeat-filled",
  LifebuoyFilled = "lifebuoy-filled",
  PillFilled = "pill-filled",
  PrescriptionFilled = "prescription-filled",
  PulseFilled = "pulse-filled",
  StethoscopeFilled = "stethoscope-filled",
  SyringeFilled = "syringe-filled",
  TestTubeFilled = "test-tube-filled",
  ToiletFilled = "toilet-filled",
  ToiletPaperFilled = "toilet-paper-filled",
  ToothFilled = "tooth-filled",
  VirusFilled = "virus-filled",
}

export const HEALTH_AND_WELLNESS_CODEPOINTS: { [key in HealthAndWellness]: string } = {
  [HealthAndWellness.BandaidsFilled]: "61697",
  [HealthAndWellness.BarbellFilled]: "61698",
  [HealthAndWellness.BedFilled]: "61699",
  [HealthAndWellness.BrainFilled]: "61700",
  [HealthAndWellness.DnaFilled]: "61701",
  [HealthAndWellness.FaceMaskFilled]: "61702",
  [HealthAndWellness.FirstAidFilled]: "61703",
  [HealthAndWellness.FirstAidKitFilled]: "61704",
  [HealthAndWellness.FlaskFilled]: "61705",
  [HealthAndWellness.HandHeartFilled]: "61706",
  [HealthAndWellness.HandSoapFilled]: "61707",
  [HealthAndWellness.HeartbeatFilled]: "61708",
  [HealthAndWellness.LifebuoyFilled]: "61709",
  [HealthAndWellness.PillFilled]: "61710",
  [HealthAndWellness.PrescriptionFilled]: "61711",
  [HealthAndWellness.PulseFilled]: "61712",
  [HealthAndWellness.StethoscopeFilled]: "61713",
  [HealthAndWellness.SyringeFilled]: "61714",
  [HealthAndWellness.TestTubeFilled]: "61715",
  [HealthAndWellness.ToiletFilled]: "61716",
  [HealthAndWellness.ToiletPaperFilled]: "61717",
  [HealthAndWellness.ToothFilled]: "61718",
  [HealthAndWellness.VirusFilled]: "61719",
};
