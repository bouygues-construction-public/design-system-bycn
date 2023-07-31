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
  [Communication.AddressBookFilled]: "61697",
  [Communication.AsteriskFilled]: "61698",
  [Communication.AsteriskSimpleFilled]: "61699",
  [Communication.AtFilled]: "61700",
  [Communication.BroadcastFilled]: "61701",
  [Communication.ChatCenteredDotsFilled]: "61702",
  [Communication.ChatCenteredFilled]: "61703",
  [Communication.ChatCenteredTextFilled]: "61704",
  [Communication.ChatCircleDotsFilled]: "61705",
  [Communication.ChatCircleFilled]: "61706",
  [Communication.ChatCircleTextFilled]: "61707",
  [Communication.ChatDotsFilled]: "61708",
  [Communication.ChatFilled]: "61709",
  [Communication.ChatTeardropDotsFilled]: "61710",
  [Communication.ChatTeardropFilled]: "61711",
  [Communication.ChatTeardropTextFilled]: "61712",
  [Communication.ChatTextFilled]: "61713",
  [Communication.ChatsCircleFilled]: "61714",
  [Communication.ChatsFilled]: "61715",
  [Communication.ChatsTeardropFilled]: "61716",
  [Communication.CrossFilled]: "61717",
  [Communication.EnvelopeFilled]: "61718",
  [Communication.EnvelopeOpenFilled]: "61719",
  [Communication.EnvelopeSimpleFilled]: "61720",
  [Communication.EnvelopeSimpleOpenFilled]: "61721",
  [Communication.ExportFilled]: "61722",
  [Communication.HashFilled]: "61723",
  [Communication.HashStraightFilled]: "61724",
  [Communication.MegaphoneFilled]: "61725",
  [Communication.MegaphoneSimpleFilled]: "61726",
  [Communication.PaperPlaneFilled]: "61727",
  [Communication.PaperPlaneRightFilled]: "61728",
  [Communication.PaperPlaneTiltFilled]: "61729",
  [Communication.PeaceFilled]: "61730",
  [Communication.PhoneCallFilled]: "61731",
  [Communication.PhoneDisconnectFilled]: "61732",
  [Communication.PhoneFilled]: "61733",
  [Communication.PhoneIncomingFilled]: "61734",
  [Communication.PhoneOutgoingFilled]: "61735",
  [Communication.PhonePlusFilled]: "61736",
  [Communication.PhoneSlashFilled]: "61737",
  [Communication.PhoneXFilled]: "61738",
  [Communication.QuotesFilled]: "61739",
  [Communication.RadioFilled]: "61740",
  [Communication.RssFilled]: "61741",
  [Communication.RssSimpleFilled]: "61742",
  [Communication.ShareFatFilled]: "61743",
  [Communication.ShareFilled]: "61744",
  [Communication.ShareNetworkFilled]: "61745",
  [Communication.SignatureFilled]: "61746",
  [Communication.StarAndCrescentFilled]: "61747",
  [Communication.StarFilled]: "61748",
  [Communication.StarHalfFilled]: "61749",
  [Communication.StarOfDavidFilled]: "61750",
  [Communication.StickerFilled]: "61751",
  [Communication.ThumbsDownFilled]: "61752",
  [Communication.ThumbsUpFilled]: "61753",
  [Communication.TranslateFilled]: "61754",
  [Communication.VoicemailFilled]: "61755",
  [Communication.YinYangFilled]: "61756",
};
