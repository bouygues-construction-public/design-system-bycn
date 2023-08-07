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
  [SecurityAndWarnings.DetectiveOutlined]: "59588",
  [SecurityAndWarnings.FingerprintOutlined]: "59589",
  [SecurityAndWarnings.FingerprintSimpleOutlined]: "59590",
  [SecurityAndWarnings.FireExtinguisherOutlined]: "59591",
  [SecurityAndWarnings.InfoOutlined]: "59592",
  [SecurityAndWarnings.KeyOutlined]: "59593",
  [SecurityAndWarnings.KeyholeOutlined]: "59594",
  [SecurityAndWarnings.LockKeyOpenOutlined]: "59595",
  [SecurityAndWarnings.LockKeyOutlined]: "59596",
  [SecurityAndWarnings.LockLaminatedOpenOutlined]: "59597",
  [SecurityAndWarnings.LockLaminatedOutlined]: "59598",
  [SecurityAndWarnings.LockOpenOutlined]: "59599",
  [SecurityAndWarnings.LockOutlined]: "59600",
  [SecurityAndWarnings.LockSimpleOpenOutlined]: "59601",
  [SecurityAndWarnings.LockSimpleOutlined]: "59602",
  [SecurityAndWarnings.PasswordOutlined]: "59603",
  [SecurityAndWarnings.ProhibitInsetOutlined]: "59604",
  [SecurityAndWarnings.ProhibitOutlined]: "59605",
  [SecurityAndWarnings.QuestionOutlined]: "59606",
  [SecurityAndWarnings.RadioactiveOutlined]: "59607",
  [SecurityAndWarnings.SealCheckOutlined]: "59608",
  [SecurityAndWarnings.SealOutlined]: "59609",
  [SecurityAndWarnings.SealQuestionOutlined]: "59610",
  [SecurityAndWarnings.SealWarningOutlined]: "59611",
  [SecurityAndWarnings.ShieldCheckOutlined]: "59612",
  [SecurityAndWarnings.ShieldCheckeredOutlined]: "59613",
  [SecurityAndWarnings.ShieldChevronOutlined]: "59614",
  [SecurityAndWarnings.ShieldOutlined]: "59615",
  [SecurityAndWarnings.ShieldPlusOutlined]: "59616",
  [SecurityAndWarnings.ShieldSlashOutlined]: "59617",
  [SecurityAndWarnings.ShieldStarOutlined]: "59618",
  [SecurityAndWarnings.ShieldWarningOutlined]: "59619",
  [SecurityAndWarnings.SirenOutlined]: "59620",
  [SecurityAndWarnings.VaultOutlined]: "59621",
  [SecurityAndWarnings.WallOutlined]: "59622",
  [SecurityAndWarnings.WarningCircleOutlined]: "59623",
  [SecurityAndWarnings.WarningDiamondOutlined]: "59624",
  [SecurityAndWarnings.WarningOctagonOutlined]: "59625",
  [SecurityAndWarnings.WarningOutlined]: "59626",
};
