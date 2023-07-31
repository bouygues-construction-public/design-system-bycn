export type DesignId =
  | "align-bottom-filled"
  | "align-bottom-simple-filled"
  | "align-center-horizontal-filled"
  | "align-center-horizontal-simple-filled"
  | "align-center-vertical-filled"
  | "align-center-vertical-simple-filled"
  | "align-left-filled"
  | "align-left-simple-filled"
  | "align-right-filled"
  | "align-right-simple-filled"
  | "align-top-filled"
  | "align-top-simple-filled"
  | "bezier-curve-filled"
  | "bounding-box-filled"
  | "circle-dashed-filled"
  | "circle-filled"
  | "circle-half-filled"
  | "circle-half-tilt-filled"
  | "circle-notch-filled"
  | "circles-four-filled"
  | "circles-three-filled"
  | "circles-three-plus-filled"
  | "columns-filled"
  | "compass-tool-filled"
  | "crop-filled"
  | "cube-filled"
  | "cube-transparent-filled"
  | "cylinder-filled"
  | "diamonds-four-filled"
  | "drop-half-bottom-filled"
  | "drop-half-filled"
  | "eraser-filled"
  | "exclude-filled"
  | "exclude-square-filled"
  | "eye-closed-filled"
  | "eye-filled"
  | "eye-slash-filled"
  | "eyedropper-filled"
  | "eyedropper-sample-filled"
  | "flow-arrow-filled"
  | "gear-fine-filled"
  | "gradient-filled"
  | "grid-four-filled"
  | "grid-nine-filled"
  | "hexagon-filled"
  | "highlighter-circle-filled"
  | "intersect-filled"
  | "intersect-square-filled"
  | "intersect-three-filled"
  | "layout-filled"
  | "line-segment-filled"
  | "line-segments-filled"
  | "magic-wand-filled"
  | "marker-circle-filled"
  | "notches-filled"
  | "octagon-filled"
  | "paint-brush-broad-filled"
  | "paint-brush-filled"
  | "paint-brush-household-filled"
  | "paint-bucket-filled"
  | "paint-roller-filled"
  | "palette-filled"
  | "parallelogram-filled"
  | "pen-filled"
  | "pen-nib-filled"
  | "pen-nib-straight-filled"
  | "pencil-circle-filled"
  | "pencil-filled"
  | "pencil-line-filled"
  | "pencil-simple-filled"
  | "pencil-simple-line-filled"
  | "pencil-simple-slash-filled"
  | "pencil-slash-filled"
  | "pentagram-filled"
  | "perspective-filled"
  | "placeholder-filled"
  | "polygon-filled"
  | "rectangle-filled"
  | "rows-filled"
  | "ruler-filled"
  | "scissors-filled"
  | "scribble-loop-filled"
  | "selection-all-filled"
  | "selection-background-filled"
  | "selection-filled"
  | "selection-foreground-filled"
  | "selection-inverse-filled"
  | "selection-plus-filled"
  | "selection-slash-filled"
  | "shapes-filled"
  | "sidebar-filled"
  | "sidebar-simple-filled"
  | "split-horizontal-filled"
  | "split-vertical-filled"
  | "square-filled"
  | "square-half-bottom-filled"
  | "square-half-filled"
  | "square-split-horizontal-filled"
  | "square-split-vertical-filled"
  | "squares-four-filled"
  | "stack-filled"
  | "stack-simple-filled"
  | "stamp-filled"
  | "subtract-filled"
  | "subtract-square-filled"
  | "swatches-filled"
  | "text-a-underline-filled"
  | "triangle-filled"
  | "unite-filled"
  | "unite-square-filled"
  | "vignette-filled";

export type DesignKey =
  | "AlignBottomFilled"
  | "AlignBottomSimpleFilled"
  | "AlignCenterHorizontalFilled"
  | "AlignCenterHorizontalSimpleFilled"
  | "AlignCenterVerticalFilled"
  | "AlignCenterVerticalSimpleFilled"
  | "AlignLeftFilled"
  | "AlignLeftSimpleFilled"
  | "AlignRightFilled"
  | "AlignRightSimpleFilled"
  | "AlignTopFilled"
  | "AlignTopSimpleFilled"
  | "BezierCurveFilled"
  | "BoundingBoxFilled"
  | "CircleDashedFilled"
  | "CircleFilled"
  | "CircleHalfFilled"
  | "CircleHalfTiltFilled"
  | "CircleNotchFilled"
  | "CirclesFourFilled"
  | "CirclesThreeFilled"
  | "CirclesThreePlusFilled"
  | "ColumnsFilled"
  | "CompassToolFilled"
  | "CropFilled"
  | "CubeFilled"
  | "CubeTransparentFilled"
  | "CylinderFilled"
  | "DiamondsFourFilled"
  | "DropHalfBottomFilled"
  | "DropHalfFilled"
  | "EraserFilled"
  | "ExcludeFilled"
  | "ExcludeSquareFilled"
  | "EyeClosedFilled"
  | "EyeFilled"
  | "EyeSlashFilled"
  | "EyedropperFilled"
  | "EyedropperSampleFilled"
  | "FlowArrowFilled"
  | "GearFineFilled"
  | "GradientFilled"
  | "GridFourFilled"
  | "GridNineFilled"
  | "HexagonFilled"
  | "HighlighterCircleFilled"
  | "IntersectFilled"
  | "IntersectSquareFilled"
  | "IntersectThreeFilled"
  | "LayoutFilled"
  | "LineSegmentFilled"
  | "LineSegmentsFilled"
  | "MagicWandFilled"
  | "MarkerCircleFilled"
  | "NotchesFilled"
  | "OctagonFilled"
  | "PaintBrushBroadFilled"
  | "PaintBrushFilled"
  | "PaintBrushHouseholdFilled"
  | "PaintBucketFilled"
  | "PaintRollerFilled"
  | "PaletteFilled"
  | "ParallelogramFilled"
  | "PenFilled"
  | "PenNibFilled"
  | "PenNibStraightFilled"
  | "PencilCircleFilled"
  | "PencilFilled"
  | "PencilLineFilled"
  | "PencilSimpleFilled"
  | "PencilSimpleLineFilled"
  | "PencilSimpleSlashFilled"
  | "PencilSlashFilled"
  | "PentagramFilled"
  | "PerspectiveFilled"
  | "PlaceholderFilled"
  | "PolygonFilled"
  | "RectangleFilled"
  | "RowsFilled"
  | "RulerFilled"
  | "ScissorsFilled"
  | "ScribbleLoopFilled"
  | "SelectionAllFilled"
  | "SelectionBackgroundFilled"
  | "SelectionFilled"
  | "SelectionForegroundFilled"
  | "SelectionInverseFilled"
  | "SelectionPlusFilled"
  | "SelectionSlashFilled"
  | "ShapesFilled"
  | "SidebarFilled"
  | "SidebarSimpleFilled"
  | "SplitHorizontalFilled"
  | "SplitVerticalFilled"
  | "SquareFilled"
  | "SquareHalfBottomFilled"
  | "SquareHalfFilled"
  | "SquareSplitHorizontalFilled"
  | "SquareSplitVerticalFilled"
  | "SquaresFourFilled"
  | "StackFilled"
  | "StackSimpleFilled"
  | "StampFilled"
  | "SubtractFilled"
  | "SubtractSquareFilled"
  | "SwatchesFilled"
  | "TextAUnderlineFilled"
  | "TriangleFilled"
  | "UniteFilled"
  | "UniteSquareFilled"
  | "VignetteFilled";

export enum Design {
  AlignBottomFilled = "align-bottom-filled",
  AlignBottomSimpleFilled = "align-bottom-simple-filled",
  AlignCenterHorizontalFilled = "align-center-horizontal-filled",
  AlignCenterHorizontalSimpleFilled = "align-center-horizontal-simple-filled",
  AlignCenterVerticalFilled = "align-center-vertical-filled",
  AlignCenterVerticalSimpleFilled = "align-center-vertical-simple-filled",
  AlignLeftFilled = "align-left-filled",
  AlignLeftSimpleFilled = "align-left-simple-filled",
  AlignRightFilled = "align-right-filled",
  AlignRightSimpleFilled = "align-right-simple-filled",
  AlignTopFilled = "align-top-filled",
  AlignTopSimpleFilled = "align-top-simple-filled",
  BezierCurveFilled = "bezier-curve-filled",
  BoundingBoxFilled = "bounding-box-filled",
  CircleDashedFilled = "circle-dashed-filled",
  CircleFilled = "circle-filled",
  CircleHalfFilled = "circle-half-filled",
  CircleHalfTiltFilled = "circle-half-tilt-filled",
  CircleNotchFilled = "circle-notch-filled",
  CirclesFourFilled = "circles-four-filled",
  CirclesThreeFilled = "circles-three-filled",
  CirclesThreePlusFilled = "circles-three-plus-filled",
  ColumnsFilled = "columns-filled",
  CompassToolFilled = "compass-tool-filled",
  CropFilled = "crop-filled",
  CubeFilled = "cube-filled",
  CubeTransparentFilled = "cube-transparent-filled",
  CylinderFilled = "cylinder-filled",
  DiamondsFourFilled = "diamonds-four-filled",
  DropHalfBottomFilled = "drop-half-bottom-filled",
  DropHalfFilled = "drop-half-filled",
  EraserFilled = "eraser-filled",
  ExcludeFilled = "exclude-filled",
  ExcludeSquareFilled = "exclude-square-filled",
  EyeClosedFilled = "eye-closed-filled",
  EyeFilled = "eye-filled",
  EyeSlashFilled = "eye-slash-filled",
  EyedropperFilled = "eyedropper-filled",
  EyedropperSampleFilled = "eyedropper-sample-filled",
  FlowArrowFilled = "flow-arrow-filled",
  GearFineFilled = "gear-fine-filled",
  GradientFilled = "gradient-filled",
  GridFourFilled = "grid-four-filled",
  GridNineFilled = "grid-nine-filled",
  HexagonFilled = "hexagon-filled",
  HighlighterCircleFilled = "highlighter-circle-filled",
  IntersectFilled = "intersect-filled",
  IntersectSquareFilled = "intersect-square-filled",
  IntersectThreeFilled = "intersect-three-filled",
  LayoutFilled = "layout-filled",
  LineSegmentFilled = "line-segment-filled",
  LineSegmentsFilled = "line-segments-filled",
  MagicWandFilled = "magic-wand-filled",
  MarkerCircleFilled = "marker-circle-filled",
  NotchesFilled = "notches-filled",
  OctagonFilled = "octagon-filled",
  PaintBrushBroadFilled = "paint-brush-broad-filled",
  PaintBrushFilled = "paint-brush-filled",
  PaintBrushHouseholdFilled = "paint-brush-household-filled",
  PaintBucketFilled = "paint-bucket-filled",
  PaintRollerFilled = "paint-roller-filled",
  PaletteFilled = "palette-filled",
  ParallelogramFilled = "parallelogram-filled",
  PenFilled = "pen-filled",
  PenNibFilled = "pen-nib-filled",
  PenNibStraightFilled = "pen-nib-straight-filled",
  PencilCircleFilled = "pencil-circle-filled",
  PencilFilled = "pencil-filled",
  PencilLineFilled = "pencil-line-filled",
  PencilSimpleFilled = "pencil-simple-filled",
  PencilSimpleLineFilled = "pencil-simple-line-filled",
  PencilSimpleSlashFilled = "pencil-simple-slash-filled",
  PencilSlashFilled = "pencil-slash-filled",
  PentagramFilled = "pentagram-filled",
  PerspectiveFilled = "perspective-filled",
  PlaceholderFilled = "placeholder-filled",
  PolygonFilled = "polygon-filled",
  RectangleFilled = "rectangle-filled",
  RowsFilled = "rows-filled",
  RulerFilled = "ruler-filled",
  ScissorsFilled = "scissors-filled",
  ScribbleLoopFilled = "scribble-loop-filled",
  SelectionAllFilled = "selection-all-filled",
  SelectionBackgroundFilled = "selection-background-filled",
  SelectionFilled = "selection-filled",
  SelectionForegroundFilled = "selection-foreground-filled",
  SelectionInverseFilled = "selection-inverse-filled",
  SelectionPlusFilled = "selection-plus-filled",
  SelectionSlashFilled = "selection-slash-filled",
  ShapesFilled = "shapes-filled",
  SidebarFilled = "sidebar-filled",
  SidebarSimpleFilled = "sidebar-simple-filled",
  SplitHorizontalFilled = "split-horizontal-filled",
  SplitVerticalFilled = "split-vertical-filled",
  SquareFilled = "square-filled",
  SquareHalfBottomFilled = "square-half-bottom-filled",
  SquareHalfFilled = "square-half-filled",
  SquareSplitHorizontalFilled = "square-split-horizontal-filled",
  SquareSplitVerticalFilled = "square-split-vertical-filled",
  SquaresFourFilled = "squares-four-filled",
  StackFilled = "stack-filled",
  StackSimpleFilled = "stack-simple-filled",
  StampFilled = "stamp-filled",
  SubtractFilled = "subtract-filled",
  SubtractSquareFilled = "subtract-square-filled",
  SwatchesFilled = "swatches-filled",
  TextAUnderlineFilled = "text-a-underline-filled",
  TriangleFilled = "triangle-filled",
  UniteFilled = "unite-filled",
  UniteSquareFilled = "unite-square-filled",
  VignetteFilled = "vignette-filled",
}

export const DESIGN_CODEPOINTS: { [key in Design]: string } = {
  [Design.AlignBottomFilled]: "61697",
  [Design.AlignBottomSimpleFilled]: "61698",
  [Design.AlignCenterHorizontalFilled]: "61699",
  [Design.AlignCenterHorizontalSimpleFilled]: "61700",
  [Design.AlignCenterVerticalFilled]: "61701",
  [Design.AlignCenterVerticalSimpleFilled]: "61702",
  [Design.AlignLeftFilled]: "61703",
  [Design.AlignLeftSimpleFilled]: "61704",
  [Design.AlignRightFilled]: "61705",
  [Design.AlignRightSimpleFilled]: "61706",
  [Design.AlignTopFilled]: "61707",
  [Design.AlignTopSimpleFilled]: "61708",
  [Design.BezierCurveFilled]: "61709",
  [Design.BoundingBoxFilled]: "61710",
  [Design.CircleDashedFilled]: "61711",
  [Design.CircleFilled]: "61712",
  [Design.CircleHalfFilled]: "61713",
  [Design.CircleHalfTiltFilled]: "61714",
  [Design.CircleNotchFilled]: "61715",
  [Design.CirclesFourFilled]: "61716",
  [Design.CirclesThreeFilled]: "61717",
  [Design.CirclesThreePlusFilled]: "61718",
  [Design.ColumnsFilled]: "61719",
  [Design.CompassToolFilled]: "61720",
  [Design.CropFilled]: "61721",
  [Design.CubeFilled]: "61722",
  [Design.CubeTransparentFilled]: "61723",
  [Design.CylinderFilled]: "61724",
  [Design.DiamondsFourFilled]: "61725",
  [Design.DropHalfBottomFilled]: "61726",
  [Design.DropHalfFilled]: "61727",
  [Design.EraserFilled]: "61728",
  [Design.ExcludeFilled]: "61729",
  [Design.ExcludeSquareFilled]: "61730",
  [Design.EyeClosedFilled]: "61731",
  [Design.EyeFilled]: "61732",
  [Design.EyeSlashFilled]: "61733",
  [Design.EyedropperFilled]: "61734",
  [Design.EyedropperSampleFilled]: "61735",
  [Design.FlowArrowFilled]: "61736",
  [Design.GearFineFilled]: "61737",
  [Design.GradientFilled]: "61738",
  [Design.GridFourFilled]: "61739",
  [Design.GridNineFilled]: "61740",
  [Design.HexagonFilled]: "61741",
  [Design.HighlighterCircleFilled]: "61742",
  [Design.IntersectFilled]: "61743",
  [Design.IntersectSquareFilled]: "61744",
  [Design.IntersectThreeFilled]: "61745",
  [Design.LayoutFilled]: "61746",
  [Design.LineSegmentFilled]: "61747",
  [Design.LineSegmentsFilled]: "61748",
  [Design.MagicWandFilled]: "61749",
  [Design.MarkerCircleFilled]: "61750",
  [Design.NotchesFilled]: "61751",
  [Design.OctagonFilled]: "61752",
  [Design.PaintBrushBroadFilled]: "61753",
  [Design.PaintBrushFilled]: "61754",
  [Design.PaintBrushHouseholdFilled]: "61755",
  [Design.PaintBucketFilled]: "61756",
  [Design.PaintRollerFilled]: "61757",
  [Design.PaletteFilled]: "61758",
  [Design.ParallelogramFilled]: "61759",
  [Design.PenFilled]: "61760",
  [Design.PenNibFilled]: "61761",
  [Design.PenNibStraightFilled]: "61762",
  [Design.PencilCircleFilled]: "61763",
  [Design.PencilFilled]: "61764",
  [Design.PencilLineFilled]: "61765",
  [Design.PencilSimpleFilled]: "61766",
  [Design.PencilSimpleLineFilled]: "61767",
  [Design.PencilSimpleSlashFilled]: "61768",
  [Design.PencilSlashFilled]: "61769",
  [Design.PentagramFilled]: "61770",
  [Design.PerspectiveFilled]: "61771",
  [Design.PlaceholderFilled]: "61772",
  [Design.PolygonFilled]: "61773",
  [Design.RectangleFilled]: "61774",
  [Design.RowsFilled]: "61775",
  [Design.RulerFilled]: "61776",
  [Design.ScissorsFilled]: "61777",
  [Design.ScribbleLoopFilled]: "61778",
  [Design.SelectionAllFilled]: "61779",
  [Design.SelectionBackgroundFilled]: "61780",
  [Design.SelectionFilled]: "61781",
  [Design.SelectionForegroundFilled]: "61782",
  [Design.SelectionInverseFilled]: "61783",
  [Design.SelectionPlusFilled]: "61784",
  [Design.SelectionSlashFilled]: "61785",
  [Design.ShapesFilled]: "61786",
  [Design.SidebarFilled]: "61787",
  [Design.SidebarSimpleFilled]: "61788",
  [Design.SplitHorizontalFilled]: "61789",
  [Design.SplitVerticalFilled]: "61790",
  [Design.SquareFilled]: "61791",
  [Design.SquareHalfBottomFilled]: "61792",
  [Design.SquareHalfFilled]: "61793",
  [Design.SquareSplitHorizontalFilled]: "61794",
  [Design.SquareSplitVerticalFilled]: "61795",
  [Design.SquaresFourFilled]: "61796",
  [Design.StackFilled]: "61797",
  [Design.StackSimpleFilled]: "61798",
  [Design.StampFilled]: "61799",
  [Design.SubtractFilled]: "61800",
  [Design.SubtractSquareFilled]: "61801",
  [Design.SwatchesFilled]: "61802",
  [Design.TextAUnderlineFilled]: "61803",
  [Design.TriangleFilled]: "61804",
  [Design.UniteFilled]: "61805",
  [Design.UniteSquareFilled]: "61806",
  [Design.VignetteFilled]: "61807",
};
