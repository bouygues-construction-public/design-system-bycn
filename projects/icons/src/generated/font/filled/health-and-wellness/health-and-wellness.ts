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
  [HealthAndWellness.BandaidsFilled]: "57900",
  [HealthAndWellness.BarbellFilled]: "57901",
  [HealthAndWellness.BedFilled]: "57902",
  [HealthAndWellness.BrainFilled]: "57903",
  [HealthAndWellness.DnaFilled]: "57904",
  [HealthAndWellness.FaceMaskFilled]: "57905",
  [HealthAndWellness.FirstAidFilled]: "57906",
  [HealthAndWellness.FirstAidKitFilled]: "57907",
  [HealthAndWellness.FlaskFilled]: "57908",
  [HealthAndWellness.HandHeartFilled]: "57909",
  [HealthAndWellness.HandSoapFilled]: "57910",
  [HealthAndWellness.HeartbeatFilled]: "57911",
  [HealthAndWellness.LifebuoyFilled]: "57912",
  [HealthAndWellness.PillFilled]: "57913",
  [HealthAndWellness.PrescriptionFilled]: "57914",
  [HealthAndWellness.PulseFilled]: "57915",
  [HealthAndWellness.StethoscopeFilled]: "57916",
  [HealthAndWellness.SyringeFilled]: "57917",
  [HealthAndWellness.TestTubeFilled]: "57918",
  [HealthAndWellness.ToiletFilled]: "57919",
  [HealthAndWellness.ToiletPaperFilled]: "57920",
  [HealthAndWellness.ToothFilled]: "57921",
  [HealthAndWellness.VirusFilled]: "57922",
};
