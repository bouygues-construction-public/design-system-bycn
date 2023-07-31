export type SecurityAndWarningsId =
  | "detective-filled"
  | "fingerprint-filled"
  | "fingerprint-simple-filled"
  | "fire-extinguisher-filled"
  | "info-filled"
  | "key-filled"
  | "keyhole-filled"
  | "lock-filled"
  | "lock-key-filled"
  | "lock-key-open-filled"
  | "lock-laminated-filled"
  | "lock-laminated-open-filled"
  | "lock-open-filled"
  | "lock-simple-filled"
  | "lock-simple-open-filled"
  | "password-filled"
  | "prohibit-filled"
  | "prohibit-inset-filled"
  | "question-filled"
  | "radioactive-filled"
  | "seal-check-filled"
  | "seal-filled"
  | "seal-question-filled"
  | "seal-warning-filled"
  | "shield-check-filled"
  | "shield-checkered-filled"
  | "shield-chevron-filled"
  | "shield-filled"
  | "shield-plus-filled"
  | "shield-slash-filled"
  | "shield-star-filled"
  | "shield-warning-filled"
  | "siren-filled"
  | "vault-filled"
  | "wall-filled"
  | "warning-circle-filled"
  | "warning-diamond-filled"
  | "warning-filled"
  | "warning-octagon-filled";

export type SecurityAndWarningsKey =
  | "DetectiveFilled"
  | "FingerprintFilled"
  | "FingerprintSimpleFilled"
  | "FireExtinguisherFilled"
  | "InfoFilled"
  | "KeyFilled"
  | "KeyholeFilled"
  | "LockFilled"
  | "LockKeyFilled"
  | "LockKeyOpenFilled"
  | "LockLaminatedFilled"
  | "LockLaminatedOpenFilled"
  | "LockOpenFilled"
  | "LockSimpleFilled"
  | "LockSimpleOpenFilled"
  | "PasswordFilled"
  | "ProhibitFilled"
  | "ProhibitInsetFilled"
  | "QuestionFilled"
  | "RadioactiveFilled"
  | "SealCheckFilled"
  | "SealFilled"
  | "SealQuestionFilled"
  | "SealWarningFilled"
  | "ShieldCheckFilled"
  | "ShieldCheckeredFilled"
  | "ShieldChevronFilled"
  | "ShieldFilled"
  | "ShieldPlusFilled"
  | "ShieldSlashFilled"
  | "ShieldStarFilled"
  | "ShieldWarningFilled"
  | "SirenFilled"
  | "VaultFilled"
  | "WallFilled"
  | "WarningCircleFilled"
  | "WarningDiamondFilled"
  | "WarningFilled"
  | "WarningOctagonFilled";

export enum SecurityAndWarnings {
  DetectiveFilled = "detective-filled",
  FingerprintFilled = "fingerprint-filled",
  FingerprintSimpleFilled = "fingerprint-simple-filled",
  FireExtinguisherFilled = "fire-extinguisher-filled",
  InfoFilled = "info-filled",
  KeyFilled = "key-filled",
  KeyholeFilled = "keyhole-filled",
  LockFilled = "lock-filled",
  LockKeyFilled = "lock-key-filled",
  LockKeyOpenFilled = "lock-key-open-filled",
  LockLaminatedFilled = "lock-laminated-filled",
  LockLaminatedOpenFilled = "lock-laminated-open-filled",
  LockOpenFilled = "lock-open-filled",
  LockSimpleFilled = "lock-simple-filled",
  LockSimpleOpenFilled = "lock-simple-open-filled",
  PasswordFilled = "password-filled",
  ProhibitFilled = "prohibit-filled",
  ProhibitInsetFilled = "prohibit-inset-filled",
  QuestionFilled = "question-filled",
  RadioactiveFilled = "radioactive-filled",
  SealCheckFilled = "seal-check-filled",
  SealFilled = "seal-filled",
  SealQuestionFilled = "seal-question-filled",
  SealWarningFilled = "seal-warning-filled",
  ShieldCheckFilled = "shield-check-filled",
  ShieldCheckeredFilled = "shield-checkered-filled",
  ShieldChevronFilled = "shield-chevron-filled",
  ShieldFilled = "shield-filled",
  ShieldPlusFilled = "shield-plus-filled",
  ShieldSlashFilled = "shield-slash-filled",
  ShieldStarFilled = "shield-star-filled",
  ShieldWarningFilled = "shield-warning-filled",
  SirenFilled = "siren-filled",
  VaultFilled = "vault-filled",
  WallFilled = "wall-filled",
  WarningCircleFilled = "warning-circle-filled",
  WarningDiamondFilled = "warning-diamond-filled",
  WarningFilled = "warning-filled",
  WarningOctagonFilled = "warning-octagon-filled",
}

export const SECURITY_AND_WARNINGS_CODEPOINTS: { [key in SecurityAndWarnings]: string } = {
  [SecurityAndWarnings.DetectiveFilled]: "61697",
  [SecurityAndWarnings.FingerprintFilled]: "61698",
  [SecurityAndWarnings.FingerprintSimpleFilled]: "61699",
  [SecurityAndWarnings.FireExtinguisherFilled]: "61700",
  [SecurityAndWarnings.InfoFilled]: "61701",
  [SecurityAndWarnings.KeyFilled]: "61702",
  [SecurityAndWarnings.KeyholeFilled]: "61703",
  [SecurityAndWarnings.LockFilled]: "61704",
  [SecurityAndWarnings.LockKeyFilled]: "61705",
  [SecurityAndWarnings.LockKeyOpenFilled]: "61706",
  [SecurityAndWarnings.LockLaminatedFilled]: "61707",
  [SecurityAndWarnings.LockLaminatedOpenFilled]: "61708",
  [SecurityAndWarnings.LockOpenFilled]: "61709",
  [SecurityAndWarnings.LockSimpleFilled]: "61710",
  [SecurityAndWarnings.LockSimpleOpenFilled]: "61711",
  [SecurityAndWarnings.PasswordFilled]: "61712",
  [SecurityAndWarnings.ProhibitFilled]: "61713",
  [SecurityAndWarnings.ProhibitInsetFilled]: "61714",
  [SecurityAndWarnings.QuestionFilled]: "61715",
  [SecurityAndWarnings.RadioactiveFilled]: "61716",
  [SecurityAndWarnings.SealCheckFilled]: "61717",
  [SecurityAndWarnings.SealFilled]: "61718",
  [SecurityAndWarnings.SealQuestionFilled]: "61719",
  [SecurityAndWarnings.SealWarningFilled]: "61720",
  [SecurityAndWarnings.ShieldCheckFilled]: "61721",
  [SecurityAndWarnings.ShieldCheckeredFilled]: "61722",
  [SecurityAndWarnings.ShieldChevronFilled]: "61723",
  [SecurityAndWarnings.ShieldFilled]: "61724",
  [SecurityAndWarnings.ShieldPlusFilled]: "61725",
  [SecurityAndWarnings.ShieldSlashFilled]: "61726",
  [SecurityAndWarnings.ShieldStarFilled]: "61727",
  [SecurityAndWarnings.ShieldWarningFilled]: "61728",
  [SecurityAndWarnings.SirenFilled]: "61729",
  [SecurityAndWarnings.VaultFilled]: "61730",
  [SecurityAndWarnings.WallFilled]: "61731",
  [SecurityAndWarnings.WarningCircleFilled]: "61732",
  [SecurityAndWarnings.WarningDiamondFilled]: "61733",
  [SecurityAndWarnings.WarningFilled]: "61734",
  [SecurityAndWarnings.WarningOctagonFilled]: "61735",
};
