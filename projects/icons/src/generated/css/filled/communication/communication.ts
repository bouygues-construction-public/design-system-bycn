export type CommunicationId =
  | "address-book-filled"
  | "asterisk-filled"
  | "asterisk-simple-filled"
  | "at-filled"
  | "broadcast-filled"
  | "chat-centered-dots-filled"
  | "chat-centered-filled"
  | "chat-centered-text-filled"
  | "chat-circle-dots-filled"
  | "chat-circle-filled"
  | "chat-circle-text-filled"
  | "chat-dots-filled"
  | "chat-filled"
  | "chat-teardrop-dots-filled"
  | "chat-teardrop-filled"
  | "chat-teardrop-text-filled"
  | "chat-text-filled"
  | "chats-circle-filled"
  | "chats-filled"
  | "chats-teardrop-filled"
  | "cross-filled"
  | "envelope-filled"
  | "envelope-open-filled"
  | "envelope-simple-filled"
  | "envelope-simple-open-filled"
  | "export-filled"
  | "hash-filled"
  | "hash-straight-filled"
  | "megaphone-filled"
  | "megaphone-simple-filled"
  | "paper-plane-filled"
  | "paper-plane-right-filled"
  | "paper-plane-tilt-filled"
  | "peace-filled"
  | "phone-call-filled"
  | "phone-disconnect-filled"
  | "phone-filled"
  | "phone-incoming-filled"
  | "phone-outgoing-filled"
  | "phone-plus-filled"
  | "phone-slash-filled"
  | "phone-x-filled"
  | "quotes-filled"
  | "radio-filled"
  | "rss-filled"
  | "rss-simple-filled"
  | "share-fat-filled"
  | "share-filled"
  | "share-network-filled"
  | "signature-filled"
  | "star-and-crescent-filled"
  | "star-filled"
  | "star-half-filled"
  | "star-of-david-filled"
  | "sticker-filled"
  | "thumbs-down-filled"
  | "thumbs-up-filled"
  | "translate-filled"
  | "voicemail-filled"
  | "yin-yang-filled";

export type CommunicationKey =
  | "AddressBookFilled"
  | "AsteriskFilled"
  | "AsteriskSimpleFilled"
  | "AtFilled"
  | "BroadcastFilled"
  | "ChatCenteredDotsFilled"
  | "ChatCenteredFilled"
  | "ChatCenteredTextFilled"
  | "ChatCircleDotsFilled"
  | "ChatCircleFilled"
  | "ChatCircleTextFilled"
  | "ChatDotsFilled"
  | "ChatFilled"
  | "ChatTeardropDotsFilled"
  | "ChatTeardropFilled"
  | "ChatTeardropTextFilled"
  | "ChatTextFilled"
  | "ChatsCircleFilled"
  | "ChatsFilled"
  | "ChatsTeardropFilled"
  | "CrossFilled"
  | "EnvelopeFilled"
  | "EnvelopeOpenFilled"
  | "EnvelopeSimpleFilled"
  | "EnvelopeSimpleOpenFilled"
  | "ExportFilled"
  | "HashFilled"
  | "HashStraightFilled"
  | "MegaphoneFilled"
  | "MegaphoneSimpleFilled"
  | "PaperPlaneFilled"
  | "PaperPlaneRightFilled"
  | "PaperPlaneTiltFilled"
  | "PeaceFilled"
  | "PhoneCallFilled"
  | "PhoneDisconnectFilled"
  | "PhoneFilled"
  | "PhoneIncomingFilled"
  | "PhoneOutgoingFilled"
  | "PhonePlusFilled"
  | "PhoneSlashFilled"
  | "PhoneXFilled"
  | "QuotesFilled"
  | "RadioFilled"
  | "RssFilled"
  | "RssSimpleFilled"
  | "ShareFatFilled"
  | "ShareFilled"
  | "ShareNetworkFilled"
  | "SignatureFilled"
  | "StarAndCrescentFilled"
  | "StarFilled"
  | "StarHalfFilled"
  | "StarOfDavidFilled"
  | "StickerFilled"
  | "ThumbsDownFilled"
  | "ThumbsUpFilled"
  | "TranslateFilled"
  | "VoicemailFilled"
  | "YinYangFilled";

export enum Communication {
  AddressBookFilled = "address-book-filled",
  AsteriskFilled = "asterisk-filled",
  AsteriskSimpleFilled = "asterisk-simple-filled",
  AtFilled = "at-filled",
  BroadcastFilled = "broadcast-filled",
  ChatCenteredDotsFilled = "chat-centered-dots-filled",
  ChatCenteredFilled = "chat-centered-filled",
  ChatCenteredTextFilled = "chat-centered-text-filled",
  ChatCircleDotsFilled = "chat-circle-dots-filled",
  ChatCircleFilled = "chat-circle-filled",
  ChatCircleTextFilled = "chat-circle-text-filled",
  ChatDotsFilled = "chat-dots-filled",
  ChatFilled = "chat-filled",
  ChatTeardropDotsFilled = "chat-teardrop-dots-filled",
  ChatTeardropFilled = "chat-teardrop-filled",
  ChatTeardropTextFilled = "chat-teardrop-text-filled",
  ChatTextFilled = "chat-text-filled",
  ChatsCircleFilled = "chats-circle-filled",
  ChatsFilled = "chats-filled",
  ChatsTeardropFilled = "chats-teardrop-filled",
  CrossFilled = "cross-filled",
  EnvelopeFilled = "envelope-filled",
  EnvelopeOpenFilled = "envelope-open-filled",
  EnvelopeSimpleFilled = "envelope-simple-filled",
  EnvelopeSimpleOpenFilled = "envelope-simple-open-filled",
  ExportFilled = "export-filled",
  HashFilled = "hash-filled",
  HashStraightFilled = "hash-straight-filled",
  MegaphoneFilled = "megaphone-filled",
  MegaphoneSimpleFilled = "megaphone-simple-filled",
  PaperPlaneFilled = "paper-plane-filled",
  PaperPlaneRightFilled = "paper-plane-right-filled",
  PaperPlaneTiltFilled = "paper-plane-tilt-filled",
  PeaceFilled = "peace-filled",
  PhoneCallFilled = "phone-call-filled",
  PhoneDisconnectFilled = "phone-disconnect-filled",
  PhoneFilled = "phone-filled",
  PhoneIncomingFilled = "phone-incoming-filled",
  PhoneOutgoingFilled = "phone-outgoing-filled",
  PhonePlusFilled = "phone-plus-filled",
  PhoneSlashFilled = "phone-slash-filled",
  PhoneXFilled = "phone-x-filled",
  QuotesFilled = "quotes-filled",
  RadioFilled = "radio-filled",
  RssFilled = "rss-filled",
  RssSimpleFilled = "rss-simple-filled",
  ShareFatFilled = "share-fat-filled",
  ShareFilled = "share-filled",
  ShareNetworkFilled = "share-network-filled",
  SignatureFilled = "signature-filled",
  StarAndCrescentFilled = "star-and-crescent-filled",
  StarFilled = "star-filled",
  StarHalfFilled = "star-half-filled",
  StarOfDavidFilled = "star-of-david-filled",
  StickerFilled = "sticker-filled",
  ThumbsDownFilled = "thumbs-down-filled",
  ThumbsUpFilled = "thumbs-up-filled",
  TranslateFilled = "translate-filled",
  VoicemailFilled = "voicemail-filled",
  YinYangFilled = "yin-yang-filled",
}

export const COMMUNICATION_CODEPOINTS: { [key in Communication]: string } = {
  [Communication.AddressBookFilled]: "57638",
  [Communication.AsteriskFilled]: "57639",
  [Communication.AsteriskSimpleFilled]: "57640",
  [Communication.AtFilled]: "57641",
  [Communication.BroadcastFilled]: "57642",
  [Communication.ChatCenteredDotsFilled]: "57643",
  [Communication.ChatCenteredFilled]: "57644",
  [Communication.ChatCenteredTextFilled]: "57645",
  [Communication.ChatCircleDotsFilled]: "57646",
  [Communication.ChatCircleFilled]: "57647",
  [Communication.ChatCircleTextFilled]: "57648",
  [Communication.ChatDotsFilled]: "57649",
  [Communication.ChatFilled]: "57650",
  [Communication.ChatTeardropDotsFilled]: "57651",
  [Communication.ChatTeardropFilled]: "57652",
  [Communication.ChatTeardropTextFilled]: "57653",
  [Communication.ChatTextFilled]: "57654",
  [Communication.ChatsCircleFilled]: "57655",
  [Communication.ChatsFilled]: "57656",
  [Communication.ChatsTeardropFilled]: "57657",
  [Communication.CrossFilled]: "57658",
  [Communication.EnvelopeFilled]: "57659",
  [Communication.EnvelopeOpenFilled]: "57660",
  [Communication.EnvelopeSimpleFilled]: "57661",
  [Communication.EnvelopeSimpleOpenFilled]: "57662",
  [Communication.ExportFilled]: "57663",
  [Communication.HashFilled]: "57664",
  [Communication.HashStraightFilled]: "57665",
  [Communication.MegaphoneFilled]: "57666",
  [Communication.MegaphoneSimpleFilled]: "57667",
  [Communication.PaperPlaneFilled]: "57668",
  [Communication.PaperPlaneRightFilled]: "57669",
  [Communication.PaperPlaneTiltFilled]: "57670",
  [Communication.PeaceFilled]: "57671",
  [Communication.PhoneCallFilled]: "57672",
  [Communication.PhoneDisconnectFilled]: "57673",
  [Communication.PhoneFilled]: "57674",
  [Communication.PhoneIncomingFilled]: "57675",
  [Communication.PhoneOutgoingFilled]: "57676",
  [Communication.PhonePlusFilled]: "57677",
  [Communication.PhoneSlashFilled]: "57678",
  [Communication.PhoneXFilled]: "57679",
  [Communication.QuotesFilled]: "57680",
  [Communication.RadioFilled]: "57681",
  [Communication.RssFilled]: "57682",
  [Communication.RssSimpleFilled]: "57683",
  [Communication.ShareFatFilled]: "57684",
  [Communication.ShareFilled]: "57685",
  [Communication.ShareNetworkFilled]: "57686",
  [Communication.SignatureFilled]: "57687",
  [Communication.StarAndCrescentFilled]: "57688",
  [Communication.StarFilled]: "57689",
  [Communication.StarHalfFilled]: "57690",
  [Communication.StarOfDavidFilled]: "57691",
  [Communication.StickerFilled]: "57692",
  [Communication.ThumbsDownFilled]: "57693",
  [Communication.ThumbsUpFilled]: "57694",
  [Communication.TranslateFilled]: "57695",
  [Communication.VoicemailFilled]: "57696",
  [Communication.YinYangFilled]: "57697",
};
