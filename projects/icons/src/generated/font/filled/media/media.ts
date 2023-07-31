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
  [Media.AirplayFilled]: "61697",
  [Media.ApertureFilled]: "61698",
  [Media.ArticleFilled]: "61699",
  [Media.ArticleMediumFilled]: "61700",
  [Media.ArticleNyTimesFilled]: "61701",
  [Media.CameraFilled]: "61702",
  [Media.CameraPlusFilled]: "61703",
  [Media.CameraRotateFilled]: "61704",
  [Media.CameraSlashFilled]: "61705",
  [Media.CassetteTapeFilled]: "61706",
  [Media.ClosedCaptioningFilled]: "61707",
  [Media.CopyleftFilled]: "61708",
  [Media.CopyrightFilled]: "61709",
  [Media.CornersInFilled]: "61710",
  [Media.CornersOutFilled]: "61711",
  [Media.DiscFilled]: "61712",
  [Media.EarFilled]: "61713",
  [Media.EarSlashFilled]: "61714",
  [Media.EjectFilled]: "61715",
  [Media.EjectSimpleFilled]: "61716",
  [Media.EqualizerFilled]: "61717",
  [Media.FadersFilled]: "61718",
  [Media.FadersHorizontalFilled]: "61719",
  [Media.FastForwardCircleFilled]: "61720",
  [Media.FastForwardFilled]: "61721",
  [Media.FilmReelFilled]: "61722",
  [Media.FilmScriptFilled]: "61723",
  [Media.FilmSlateFilled]: "61724",
  [Media.FilmStripFilled]: "61725",
  [Media.FrameCornersFilled]: "61726",
  [Media.GifFilled]: "61727",
  [Media.GuitarFilled]: "61728",
  [Media.HeadphonesFilled]: "61729",
  [Media.HeadsetFilled]: "61730",
  [Media.ImageFilled]: "61731",
  [Media.ImageSquareFilled]: "61732",
  [Media.ImagesFilled]: "61733",
  [Media.ImagesSquareFilled]: "61734",
  [Media.MetronomeFilled]: "61735",
  [Media.MicrophoneFilled]: "61736",
  [Media.MicrophoneSlashFilled]: "61737",
  [Media.MicrophoneStageFilled]: "61738",
  [Media.MusicNoteFilled]: "61739",
  [Media.MusicNoteSimpleFilled]: "61740",
  [Media.MusicNotesFilled]: "61741",
  [Media.MusicNotesPlusFilled]: "61742",
  [Media.MusicNotesSimpleFilled]: "61743",
  [Media.NewspaperClippingFilled]: "61744",
  [Media.NewspaperFilled]: "61745",
  [Media.PauseCircleFilled]: "61746",
  [Media.PauseFilled]: "61747",
  [Media.PianoKeysFilled]: "61748",
  [Media.PictureInPictureFilled]: "61749",
  [Media.PlayCircleFilled]: "61750",
  [Media.PlayFilled]: "61751",
  [Media.PlayPauseFilled]: "61752",
  [Media.PlaylistFilled]: "61753",
  [Media.QueueFilled]: "61754",
  [Media.RecordFilled]: "61755",
  [Media.RepeatFilled]: "61756",
  [Media.RepeatOnceFilled]: "61757",
  [Media.RewindCircleFilled]: "61758",
  [Media.RewindFilled]: "61759",
  [Media.ScreencastFilled]: "61760",
  [Media.ShuffleAngularFilled]: "61761",
  [Media.ShuffleFilled]: "61762",
  [Media.ShuffleSimpleFilled]: "61763",
  [Media.SkipBackCircleFilled]: "61764",
  [Media.SkipBackFilled]: "61765",
  [Media.SkipForwardCircleFilled]: "61766",
  [Media.SkipForwardFilled]: "61767",
  [Media.SlidersFilled]: "61768",
  [Media.SlidersHorizontalFilled]: "61769",
  [Media.SlideshowFilled]: "61770",
  [Media.SpeakerHifiFilled]: "61771",
  [Media.SpeakerHighFilled]: "61772",
  [Media.SpeakerLowFilled]: "61773",
  [Media.SpeakerNoneFilled]: "61774",
  [Media.SpeakerSimpleHighFilled]: "61775",
  [Media.SpeakerSimpleLowFilled]: "61776",
  [Media.SpeakerSimpleNoneFilled]: "61777",
  [Media.SpeakerSimpleSlashFilled]: "61778",
  [Media.SpeakerSimpleXFilled]: "61779",
  [Media.SpeakerSlashFilled]: "61780",
  [Media.SpeakerXFilled]: "61781",
  [Media.StopCircleFilled]: "61782",
  [Media.StopFilled]: "61783",
  [Media.SubtitlesFilled]: "61784",
  [Media.TelevisionFilled]: "61785",
  [Media.TelevisionSimpleFilled]: "61786",
  [Media.VideoCameraFilled]: "61787",
  [Media.VideoCameraSlashFilled]: "61788",
  [Media.VinylRecordFilled]: "61789",
  [Media.WaveSawtoothFilled]: "61790",
  [Media.WaveSineFilled]: "61791",
  [Media.WaveSquareFilled]: "61792",
  [Media.WaveTriangleFilled]: "61793",
  [Media.WaveformFilled]: "61794",
  [Media.WebcamFilled]: "61795",
  [Media.WebcamSlashFilled]: "61796",
};
