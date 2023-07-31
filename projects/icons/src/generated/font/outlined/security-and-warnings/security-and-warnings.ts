export type SecurityAndWarningsId =
  | "detective-outlined"
  | "fingerprint-outlined"
  | "fingerprint-simple-outlined"
  | "fire-extinguisher-outlined"
  | "info-outlined"
  | "key-outlined"
  | "keyhole-outlined"
  | "lock-key-open-outlined"
  | "lock-key-outlined"
  | "lock-laminated-open-outlined"
  | "lock-laminated-outlined"
  | "lock-open-outlined"
  | "lock-outlined"
  | "lock-simple-open-outlined"
  | "lock-simple-outlined"
  | "password-outlined"
  | "prohibit-inset-outlined"
  | "prohibit-outlined"
  | "question-outlined"
  | "radioactive-outlined"
  | "seal-check-outlined"
  | "seal-outlined"
  | "seal-question-outlined"
  | "seal-warning-outlined"
  | "shield-check-outlined"
  | "shield-checkered-outlined"
  | "shield-chevron-outlined"
  | "shield-outlined"
  | "shield-plus-outlined"
  | "shield-slash-outlined"
  | "shield-star-outlined"
  | "shield-warning-outlined"
  | "siren-outlined"
  | "vault-outlined"
  | "wall-outlined"
  | "warning-circle-outlined"
  | "warning-diamond-outlined"
  | "warning-octagon-outlined"
  | "warning-outlined";

export type SecurityAndWarningsKey =
  | "DetectiveOutlined"
  | "FingerprintOutlined"
  | "FingerprintSimpleOutlined"
  | "FireExtinguisherOutlined"
  | "InfoOutlined"
  | "KeyOutlined"
  | "KeyholeOutlined"
  | "LockKeyOpenOutlined"
  | "LockKeyOutlined"
  | "LockLaminatedOpenOutlined"
  | "LockLaminatedOutlined"
  | "LockOpenOutlined"
  | "LockOutlined"
  | "LockSimpleOpenOutlined"
  | "LockSimpleOutlined"
  | "PasswordOutlined"
  | "ProhibitInsetOutlined"
  | "ProhibitOutlined"
  | "QuestionOutlined"
  | "RadioactiveOutlined"
  | "SealCheckOutlined"
  | "SealOutlined"
  | "SealQuestionOutlined"
  | "SealWarningOutlined"
  | "ShieldCheckOutlined"
  | "ShieldCheckeredOutlined"
  | "ShieldChevronOutlined"
  | "ShieldOutlined"
  | "ShieldPlusOutlined"
  | "ShieldSlashOutlined"
  | "ShieldStarOutlined"
  | "ShieldWarningOutlined"
  | "SirenOutlined"
  | "VaultOutlined"
  | "WallOutlined"
  | "WarningCircleOutlined"
  | "WarningDiamondOutlined"
  | "WarningOctagonOutlined"
  | "WarningOutlined";

export enum SecurityAndWarnings {
  DetectiveOutlined = "detective-outlined",
  FingerprintOutlined = "fingerprint-outlined",
  FingerprintSimpleOutlined = "fingerprint-simple-outlined",
  FireExtinguisherOutlined = "fire-extinguisher-outlined",
  InfoOutlined = "info-outlined",
  KeyOutlined = "key-outlined",
  KeyholeOutlined = "keyhole-outlined",
  LockKeyOpenOutlined = "lock-key-open-outlined",
  LockKeyOutlined = "lock-key-outlined",
  LockLaminatedOpenOutlined = "lock-laminated-open-outlined",
  LockLaminatedOutlined = "lock-laminated-outlined",
  LockOpenOutlined = "lock-open-outlined",
  LockOutlined = "lock-outlined",
  LockSimpleOpenOutlined = "lock-simple-open-outlined",
  LockSimpleOutlined = "lock-simple-outlined",
  PasswordOutlined = "password-outlined",
  ProhibitInsetOutlined = "prohibit-inset-outlined",
  ProhibitOutlined = "prohibit-outlined",
  QuestionOutlined = "question-outlined",
  RadioactiveOutlined = "radioactive-outlined",
  SealCheckOutlined = "seal-check-outlined",
  SealOutlined = "seal-outlined",
  SealQuestionOutlined = "seal-question-outlined",
  SealWarningOutlined = "seal-warning-outlined",
  ShieldCheckOutlined = "shield-check-outlined",
  ShieldCheckeredOutlined = "shield-checkered-outlined",
  ShieldChevronOutlined = "shield-chevron-outlined",
  ShieldOutlined = "shield-outlined",
  ShieldPlusOutlined = "shield-plus-outlined",
  ShieldSlashOutlined = "shield-slash-outlined",
  ShieldStarOutlined = "shield-star-outlined",
  ShieldWarningOutlined = "shield-warning-outlined",
  SirenOutlined = "siren-outlined",
  VaultOutlined = "vault-outlined",
  WallOutlined = "wall-outlined",
  WarningCircleOutlined = "warning-circle-outlined",
  WarningDiamondOutlined = "warning-diamond-outlined",
  WarningOctagonOutlined = "warning-octagon-outlined",
  WarningOutlined = "warning-outlined",
}

export const SECURITY_AND_WARNINGS_CODEPOINTS: { [key in SecurityAndWarnings]: string } = {
  [SecurityAndWarnings.DetectiveOutlined]: "61697",
  [SecurityAndWarnings.FingerprintOutlined]: "61698",
  [SecurityAndWarnings.FingerprintSimpleOutlined]: "61699",
  [SecurityAndWarnings.FireExtinguisherOutlined]: "61700",
  [SecurityAndWarnings.InfoOutlined]: "61701",
  [SecurityAndWarnings.KeyOutlined]: "61702",
  [SecurityAndWarnings.KeyholeOutlined]: "61703",
  [SecurityAndWarnings.LockKeyOpenOutlined]: "61704",
  [SecurityAndWarnings.LockKeyOutlined]: "61705",
  [SecurityAndWarnings.LockLaminatedOpenOutlined]: "61706",
  [SecurityAndWarnings.LockLaminatedOutlined]: "61707",
  [SecurityAndWarnings.LockOpenOutlined]: "61708",
  [SecurityAndWarnings.LockOutlined]: "61709",
  [SecurityAndWarnings.LockSimpleOpenOutlined]: "61710",
  [SecurityAndWarnings.LockSimpleOutlined]: "61711",
  [SecurityAndWarnings.PasswordOutlined]: "61712",
  [SecurityAndWarnings.ProhibitInsetOutlined]: "61713",
  [SecurityAndWarnings.ProhibitOutlined]: "61714",
  [SecurityAndWarnings.QuestionOutlined]: "61715",
  [SecurityAndWarnings.RadioactiveOutlined]: "61716",
  [SecurityAndWarnings.SealCheckOutlined]: "61717",
  [SecurityAndWarnings.SealOutlined]: "61718",
  [SecurityAndWarnings.SealQuestionOutlined]: "61719",
  [SecurityAndWarnings.SealWarningOutlined]: "61720",
  [SecurityAndWarnings.ShieldCheckOutlined]: "61721",
  [SecurityAndWarnings.ShieldCheckeredOutlined]: "61722",
  [SecurityAndWarnings.ShieldChevronOutlined]: "61723",
  [SecurityAndWarnings.ShieldOutlined]: "61724",
  [SecurityAndWarnings.ShieldPlusOutlined]: "61725",
  [SecurityAndWarnings.ShieldSlashOutlined]: "61726",
  [SecurityAndWarnings.ShieldStarOutlined]: "61727",
  [SecurityAndWarnings.ShieldWarningOutlined]: "61728",
  [SecurityAndWarnings.SirenOutlined]: "61729",
  [SecurityAndWarnings.VaultOutlined]: "61730",
  [SecurityAndWarnings.WallOutlined]: "61731",
  [SecurityAndWarnings.WarningCircleOutlined]: "61732",
  [SecurityAndWarnings.WarningDiamondOutlined]: "61733",
  [SecurityAndWarnings.WarningOctagonOutlined]: "61734",
  [SecurityAndWarnings.WarningOutlined]: "61735",
};
