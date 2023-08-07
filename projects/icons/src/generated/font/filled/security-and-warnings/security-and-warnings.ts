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
  [SecurityAndWarnings.DetectiveFilled]: "58340",
  [SecurityAndWarnings.FingerprintFilled]: "58341",
  [SecurityAndWarnings.FingerprintSimpleFilled]: "58342",
  [SecurityAndWarnings.FireExtinguisherFilled]: "58343",
  [SecurityAndWarnings.InfoFilled]: "58344",
  [SecurityAndWarnings.KeyFilled]: "58345",
  [SecurityAndWarnings.KeyholeFilled]: "58346",
  [SecurityAndWarnings.LockFilled]: "58347",
  [SecurityAndWarnings.LockKeyFilled]: "58348",
  [SecurityAndWarnings.LockKeyOpenFilled]: "58349",
  [SecurityAndWarnings.LockLaminatedFilled]: "58350",
  [SecurityAndWarnings.LockLaminatedOpenFilled]: "58351",
  [SecurityAndWarnings.LockOpenFilled]: "58352",
  [SecurityAndWarnings.LockSimpleFilled]: "58353",
  [SecurityAndWarnings.LockSimpleOpenFilled]: "58354",
  [SecurityAndWarnings.PasswordFilled]: "58355",
  [SecurityAndWarnings.ProhibitFilled]: "58356",
  [SecurityAndWarnings.ProhibitInsetFilled]: "58357",
  [SecurityAndWarnings.QuestionFilled]: "58358",
  [SecurityAndWarnings.RadioactiveFilled]: "58359",
  [SecurityAndWarnings.SealCheckFilled]: "58360",
  [SecurityAndWarnings.SealFilled]: "58361",
  [SecurityAndWarnings.SealQuestionFilled]: "58362",
  [SecurityAndWarnings.SealWarningFilled]: "58363",
  [SecurityAndWarnings.ShieldCheckFilled]: "58364",
  [SecurityAndWarnings.ShieldCheckeredFilled]: "58365",
  [SecurityAndWarnings.ShieldChevronFilled]: "58366",
  [SecurityAndWarnings.ShieldFilled]: "58367",
  [SecurityAndWarnings.ShieldPlusFilled]: "58368",
  [SecurityAndWarnings.ShieldSlashFilled]: "58369",
  [SecurityAndWarnings.ShieldStarFilled]: "58370",
  [SecurityAndWarnings.ShieldWarningFilled]: "58371",
  [SecurityAndWarnings.SirenFilled]: "58372",
  [SecurityAndWarnings.VaultFilled]: "58373",
  [SecurityAndWarnings.WallFilled]: "58374",
  [SecurityAndWarnings.WarningCircleFilled]: "58375",
  [SecurityAndWarnings.WarningDiamondFilled]: "58376",
  [SecurityAndWarnings.WarningFilled]: "58377",
  [SecurityAndWarnings.WarningOctagonFilled]: "58378",
};
