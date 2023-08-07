export type MediaId =
  | "airplay-filled"
  | "aperture-filled"
  | "article-filled"
  | "article-medium-filled"
  | "article-ny-times-filled"
  | "camera-filled"
  | "camera-plus-filled"
  | "camera-rotate-filled"
  | "camera-slash-filled"
  | "cassette-tape-filled"
  | "closed-captioning-filled"
  | "copyleft-filled"
  | "copyright-filled"
  | "corners-in-filled"
  | "corners-out-filled"
  | "disc-filled"
  | "ear-filled"
  | "ear-slash-filled"
  | "eject-filled"
  | "eject-simple-filled"
  | "equalizer-filled"
  | "faders-filled"
  | "faders-horizontal-filled"
  | "fast-forward-circle-filled"
  | "fast-forward-filled"
  | "film-reel-filled"
  | "film-script-filled"
  | "film-slate-filled"
  | "film-strip-filled"
  | "frame-corners-filled"
  | "gif-filled"
  | "guitar-filled"
  | "headphones-filled"
  | "headset-filled"
  | "image-filled"
  | "image-square-filled"
  | "images-filled"
  | "images-square-filled"
  | "metronome-filled"
  | "microphone-filled"
  | "microphone-slash-filled"
  | "microphone-stage-filled"
  | "music-note-filled"
  | "music-note-simple-filled"
  | "music-notes-filled"
  | "music-notes-plus-filled"
  | "music-notes-simple-filled"
  | "newspaper-clipping-filled"
  | "newspaper-filled"
  | "pause-circle-filled"
  | "pause-filled"
  | "piano-keys-filled"
  | "picture-in-picture-filled"
  | "play-circle-filled"
  | "play-filled"
  | "play-pause-filled"
  | "playlist-filled"
  | "queue-filled"
  | "record-filled"
  | "repeat-filled"
  | "repeat-once-filled"
  | "rewind-circle-filled"
  | "rewind-filled"
  | "screencast-filled"
  | "shuffle-angular-filled"
  | "shuffle-filled"
  | "shuffle-simple-filled"
  | "skip-back-circle-filled"
  | "skip-back-filled"
  | "skip-forward-circle-filled"
  | "skip-forward-filled"
  | "sliders-filled"
  | "sliders-horizontal-filled"
  | "slideshow-filled"
  | "speaker-hifi-filled"
  | "speaker-high-filled"
  | "speaker-low-filled"
  | "speaker-none-filled"
  | "speaker-simple-high-filled"
  | "speaker-simple-low-filled"
  | "speaker-simple-none-filled"
  | "speaker-simple-slash-filled"
  | "speaker-simple-x-filled"
  | "speaker-slash-filled"
  | "speaker-x-filled"
  | "stop-circle-filled"
  | "stop-filled"
  | "subtitles-filled"
  | "television-filled"
  | "television-simple-filled"
  | "video-camera-filled"
  | "video-camera-slash-filled"
  | "vinyl-record-filled"
  | "wave-sawtooth-filled"
  | "wave-sine-filled"
  | "wave-square-filled"
  | "wave-triangle-filled"
  | "waveform-filled"
  | "webcam-filled"
  | "webcam-slash-filled";

export type MediaKey =
  | "AirplayFilled"
  | "ApertureFilled"
  | "ArticleFilled"
  | "ArticleMediumFilled"
  | "ArticleNyTimesFilled"
  | "CameraFilled"
  | "CameraPlusFilled"
  | "CameraRotateFilled"
  | "CameraSlashFilled"
  | "CassetteTapeFilled"
  | "ClosedCaptioningFilled"
  | "CopyleftFilled"
  | "CopyrightFilled"
  | "CornersInFilled"
  | "CornersOutFilled"
  | "DiscFilled"
  | "EarFilled"
  | "EarSlashFilled"
  | "EjectFilled"
  | "EjectSimpleFilled"
  | "EqualizerFilled"
  | "FadersFilled"
  | "FadersHorizontalFilled"
  | "FastForwardCircleFilled"
  | "FastForwardFilled"
  | "FilmReelFilled"
  | "FilmScriptFilled"
  | "FilmSlateFilled"
  | "FilmStripFilled"
  | "FrameCornersFilled"
  | "GifFilled"
  | "GuitarFilled"
  | "HeadphonesFilled"
  | "HeadsetFilled"
  | "ImageFilled"
  | "ImageSquareFilled"
  | "ImagesFilled"
  | "ImagesSquareFilled"
  | "MetronomeFilled"
  | "MicrophoneFilled"
  | "MicrophoneSlashFilled"
  | "MicrophoneStageFilled"
  | "MusicNoteFilled"
  | "MusicNoteSimpleFilled"
  | "MusicNotesFilled"
  | "MusicNotesPlusFilled"
  | "MusicNotesSimpleFilled"
  | "NewspaperClippingFilled"
  | "NewspaperFilled"
  | "PauseCircleFilled"
  | "PauseFilled"
  | "PianoKeysFilled"
  | "PictureInPictureFilled"
  | "PlayCircleFilled"
  | "PlayFilled"
  | "PlayPauseFilled"
  | "PlaylistFilled"
  | "QueueFilled"
  | "RecordFilled"
  | "RepeatFilled"
  | "RepeatOnceFilled"
  | "RewindCircleFilled"
  | "RewindFilled"
  | "ScreencastFilled"
  | "ShuffleAngularFilled"
  | "ShuffleFilled"
  | "ShuffleSimpleFilled"
  | "SkipBackCircleFilled"
  | "SkipBackFilled"
  | "SkipForwardCircleFilled"
  | "SkipForwardFilled"
  | "SlidersFilled"
  | "SlidersHorizontalFilled"
  | "SlideshowFilled"
  | "SpeakerHifiFilled"
  | "SpeakerHighFilled"
  | "SpeakerLowFilled"
  | "SpeakerNoneFilled"
  | "SpeakerSimpleHighFilled"
  | "SpeakerSimpleLowFilled"
  | "SpeakerSimpleNoneFilled"
  | "SpeakerSimpleSlashFilled"
  | "SpeakerSimpleXFilled"
  | "SpeakerSlashFilled"
  | "SpeakerXFilled"
  | "StopCircleFilled"
  | "StopFilled"
  | "SubtitlesFilled"
  | "TelevisionFilled"
  | "TelevisionSimpleFilled"
  | "VideoCameraFilled"
  | "VideoCameraSlashFilled"
  | "VinylRecordFilled"
  | "WaveSawtoothFilled"
  | "WaveSineFilled"
  | "WaveSquareFilled"
  | "WaveTriangleFilled"
  | "WaveformFilled"
  | "WebcamFilled"
  | "WebcamSlashFilled";

export enum Media {
  AirplayFilled = "airplay-filled",
  ApertureFilled = "aperture-filled",
  ArticleFilled = "article-filled",
  ArticleMediumFilled = "article-medium-filled",
  ArticleNyTimesFilled = "article-ny-times-filled",
  CameraFilled = "camera-filled",
  CameraPlusFilled = "camera-plus-filled",
  CameraRotateFilled = "camera-rotate-filled",
  CameraSlashFilled = "camera-slash-filled",
  CassetteTapeFilled = "cassette-tape-filled",
  ClosedCaptioningFilled = "closed-captioning-filled",
  CopyleftFilled = "copyleft-filled",
  CopyrightFilled = "copyright-filled",
  CornersInFilled = "corners-in-filled",
  CornersOutFilled = "corners-out-filled",
  DiscFilled = "disc-filled",
  EarFilled = "ear-filled",
  EarSlashFilled = "ear-slash-filled",
  EjectFilled = "eject-filled",
  EjectSimpleFilled = "eject-simple-filled",
  EqualizerFilled = "equalizer-filled",
  FadersFilled = "faders-filled",
  FadersHorizontalFilled = "faders-horizontal-filled",
  FastForwardCircleFilled = "fast-forward-circle-filled",
  FastForwardFilled = "fast-forward-filled",
  FilmReelFilled = "film-reel-filled",
  FilmScriptFilled = "film-script-filled",
  FilmSlateFilled = "film-slate-filled",
  FilmStripFilled = "film-strip-filled",
  FrameCornersFilled = "frame-corners-filled",
  GifFilled = "gif-filled",
  GuitarFilled = "guitar-filled",
  HeadphonesFilled = "headphones-filled",
  HeadsetFilled = "headset-filled",
  ImageFilled = "image-filled",
  ImageSquareFilled = "image-square-filled",
  ImagesFilled = "images-filled",
  ImagesSquareFilled = "images-square-filled",
  MetronomeFilled = "metronome-filled",
  MicrophoneFilled = "microphone-filled",
  MicrophoneSlashFilled = "microphone-slash-filled",
  MicrophoneStageFilled = "microphone-stage-filled",
  MusicNoteFilled = "music-note-filled",
  MusicNoteSimpleFilled = "music-note-simple-filled",
  MusicNotesFilled = "music-notes-filled",
  MusicNotesPlusFilled = "music-notes-plus-filled",
  MusicNotesSimpleFilled = "music-notes-simple-filled",
  NewspaperClippingFilled = "newspaper-clipping-filled",
  NewspaperFilled = "newspaper-filled",
  PauseCircleFilled = "pause-circle-filled",
  PauseFilled = "pause-filled",
  PianoKeysFilled = "piano-keys-filled",
  PictureInPictureFilled = "picture-in-picture-filled",
  PlayCircleFilled = "play-circle-filled",
  PlayFilled = "play-filled",
  PlayPauseFilled = "play-pause-filled",
  PlaylistFilled = "playlist-filled",
  QueueFilled = "queue-filled",
  RecordFilled = "record-filled",
  RepeatFilled = "repeat-filled",
  RepeatOnceFilled = "repeat-once-filled",
  RewindCircleFilled = "rewind-circle-filled",
  RewindFilled = "rewind-filled",
  ScreencastFilled = "screencast-filled",
  ShuffleAngularFilled = "shuffle-angular-filled",
  ShuffleFilled = "shuffle-filled",
  ShuffleSimpleFilled = "shuffle-simple-filled",
  SkipBackCircleFilled = "skip-back-circle-filled",
  SkipBackFilled = "skip-back-filled",
  SkipForwardCircleFilled = "skip-forward-circle-filled",
  SkipForwardFilled = "skip-forward-filled",
  SlidersFilled = "sliders-filled",
  SlidersHorizontalFilled = "sliders-horizontal-filled",
  SlideshowFilled = "slideshow-filled",
  SpeakerHifiFilled = "speaker-hifi-filled",
  SpeakerHighFilled = "speaker-high-filled",
  SpeakerLowFilled = "speaker-low-filled",
  SpeakerNoneFilled = "speaker-none-filled",
  SpeakerSimpleHighFilled = "speaker-simple-high-filled",
  SpeakerSimpleLowFilled = "speaker-simple-low-filled",
  SpeakerSimpleNoneFilled = "speaker-simple-none-filled",
  SpeakerSimpleSlashFilled = "speaker-simple-slash-filled",
  SpeakerSimpleXFilled = "speaker-simple-x-filled",
  SpeakerSlashFilled = "speaker-slash-filled",
  SpeakerXFilled = "speaker-x-filled",
  StopCircleFilled = "stop-circle-filled",
  StopFilled = "stop-filled",
  SubtitlesFilled = "subtitles-filled",
  TelevisionFilled = "television-filled",
  TelevisionSimpleFilled = "television-simple-filled",
  VideoCameraFilled = "video-camera-filled",
  VideoCameraSlashFilled = "video-camera-slash-filled",
  VinylRecordFilled = "vinyl-record-filled",
  WaveSawtoothFilled = "wave-sawtooth-filled",
  WaveSineFilled = "wave-sine-filled",
  WaveSquareFilled = "wave-square-filled",
  WaveTriangleFilled = "wave-triangle-filled",
  WaveformFilled = "waveform-filled",
  WebcamFilled = "webcam-filled",
  WebcamSlashFilled = "webcam-slash-filled",
}

export const MEDIA_CODEPOINTS: { [key in Media]: string } = {
  [Media.AirplayFilled]: "58066",
  [Media.ApertureFilled]: "58067",
  [Media.ArticleFilled]: "58068",
  [Media.ArticleMediumFilled]: "58069",
  [Media.ArticleNyTimesFilled]: "58070",
  [Media.CameraFilled]: "58071",
  [Media.CameraPlusFilled]: "58072",
  [Media.CameraRotateFilled]: "58073",
  [Media.CameraSlashFilled]: "58074",
  [Media.CassetteTapeFilled]: "58075",
  [Media.ClosedCaptioningFilled]: "58076",
  [Media.CopyleftFilled]: "58077",
  [Media.CopyrightFilled]: "58078",
  [Media.CornersInFilled]: "58079",
  [Media.CornersOutFilled]: "58080",
  [Media.DiscFilled]: "58081",
  [Media.EarFilled]: "58082",
  [Media.EarSlashFilled]: "58083",
  [Media.EjectFilled]: "58084",
  [Media.EjectSimpleFilled]: "58085",
  [Media.EqualizerFilled]: "58086",
  [Media.FadersFilled]: "58087",
  [Media.FadersHorizontalFilled]: "58088",
  [Media.FastForwardCircleFilled]: "58089",
  [Media.FastForwardFilled]: "58090",
  [Media.FilmReelFilled]: "58091",
  [Media.FilmScriptFilled]: "58092",
  [Media.FilmSlateFilled]: "58093",
  [Media.FilmStripFilled]: "58094",
  [Media.FrameCornersFilled]: "58095",
  [Media.GifFilled]: "58096",
  [Media.GuitarFilled]: "58097",
  [Media.HeadphonesFilled]: "58098",
  [Media.HeadsetFilled]: "58099",
  [Media.ImageFilled]: "58100",
  [Media.ImageSquareFilled]: "58101",
  [Media.ImagesFilled]: "58102",
  [Media.ImagesSquareFilled]: "58103",
  [Media.MetronomeFilled]: "58104",
  [Media.MicrophoneFilled]: "58105",
  [Media.MicrophoneSlashFilled]: "58106",
  [Media.MicrophoneStageFilled]: "58107",
  [Media.MusicNoteFilled]: "58108",
  [Media.MusicNoteSimpleFilled]: "58109",
  [Media.MusicNotesFilled]: "58110",
  [Media.MusicNotesPlusFilled]: "58111",
  [Media.MusicNotesSimpleFilled]: "58112",
  [Media.NewspaperClippingFilled]: "58113",
  [Media.NewspaperFilled]: "58114",
  [Media.PauseCircleFilled]: "58115",
  [Media.PauseFilled]: "58116",
  [Media.PianoKeysFilled]: "58117",
  [Media.PictureInPictureFilled]: "58118",
  [Media.PlayCircleFilled]: "58119",
  [Media.PlayFilled]: "58120",
  [Media.PlayPauseFilled]: "58121",
  [Media.PlaylistFilled]: "58122",
  [Media.QueueFilled]: "58123",
  [Media.RecordFilled]: "58124",
  [Media.RepeatFilled]: "58125",
  [Media.RepeatOnceFilled]: "58126",
  [Media.RewindCircleFilled]: "58127",
  [Media.RewindFilled]: "58128",
  [Media.ScreencastFilled]: "58129",
  [Media.ShuffleAngularFilled]: "58130",
  [Media.ShuffleFilled]: "58131",
  [Media.ShuffleSimpleFilled]: "58132",
  [Media.SkipBackCircleFilled]: "58133",
  [Media.SkipBackFilled]: "58134",
  [Media.SkipForwardCircleFilled]: "58135",
  [Media.SkipForwardFilled]: "58136",
  [Media.SlidersFilled]: "58137",
  [Media.SlidersHorizontalFilled]: "58138",
  [Media.SlideshowFilled]: "58139",
  [Media.SpeakerHifiFilled]: "58140",
  [Media.SpeakerHighFilled]: "58141",
  [Media.SpeakerLowFilled]: "58142",
  [Media.SpeakerNoneFilled]: "58143",
  [Media.SpeakerSimpleHighFilled]: "58144",
  [Media.SpeakerSimpleLowFilled]: "58145",
  [Media.SpeakerSimpleNoneFilled]: "58146",
  [Media.SpeakerSimpleSlashFilled]: "58147",
  [Media.SpeakerSimpleXFilled]: "58148",
  [Media.SpeakerSlashFilled]: "58149",
  [Media.SpeakerXFilled]: "58150",
  [Media.StopCircleFilled]: "58151",
  [Media.StopFilled]: "58152",
  [Media.SubtitlesFilled]: "58153",
  [Media.TelevisionFilled]: "58154",
  [Media.TelevisionSimpleFilled]: "58155",
  [Media.VideoCameraFilled]: "58156",
  [Media.VideoCameraSlashFilled]: "58157",
  [Media.VinylRecordFilled]: "58158",
  [Media.WaveSawtoothFilled]: "58159",
  [Media.WaveSineFilled]: "58160",
  [Media.WaveSquareFilled]: "58161",
  [Media.WaveTriangleFilled]: "58162",
  [Media.WaveformFilled]: "58163",
  [Media.WebcamFilled]: "58164",
  [Media.WebcamSlashFilled]: "58165",
};
