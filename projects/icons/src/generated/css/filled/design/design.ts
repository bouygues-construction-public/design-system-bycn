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
  [Design.AlignBottomFilled]: "57698",
  [Design.AlignBottomSimpleFilled]: "57699",
  [Design.AlignCenterHorizontalFilled]: "57700",
  [Design.AlignCenterHorizontalSimpleFilled]: "57701",
  [Design.AlignCenterVerticalFilled]: "57702",
  [Design.AlignCenterVerticalSimpleFilled]: "57703",
  [Design.AlignLeftFilled]: "57704",
  [Design.AlignLeftSimpleFilled]: "57705",
  [Design.AlignRightFilled]: "57706",
  [Design.AlignRightSimpleFilled]: "57707",
  [Design.AlignTopFilled]: "57708",
  [Design.AlignTopSimpleFilled]: "57709",
  [Design.BezierCurveFilled]: "57710",
  [Design.BoundingBoxFilled]: "57711",
  [Design.CircleDashedFilled]: "57712",
  [Design.CircleFilled]: "57713",
  [Design.CircleHalfFilled]: "57714",
  [Design.CircleHalfTiltFilled]: "57715",
  [Design.CircleNotchFilled]: "57716",
  [Design.CirclesFourFilled]: "57717",
  [Design.CirclesThreeFilled]: "57718",
  [Design.CirclesThreePlusFilled]: "57719",
  [Design.ColumnsFilled]: "57720",
  [Design.CompassToolFilled]: "57721",
  [Design.CropFilled]: "57722",
  [Design.CubeFilled]: "57723",
  [Design.CubeTransparentFilled]: "57724",
  [Design.CylinderFilled]: "57725",
  [Design.DiamondsFourFilled]: "57726",
  [Design.DropHalfBottomFilled]: "57727",
  [Design.DropHalfFilled]: "57728",
  [Design.EraserFilled]: "57729",
  [Design.ExcludeFilled]: "57730",
  [Design.ExcludeSquareFilled]: "57731",
  [Design.EyeClosedFilled]: "57732",
  [Design.EyeFilled]: "57733",
  [Design.EyeSlashFilled]: "57734",
  [Design.EyedropperFilled]: "57735",
  [Design.EyedropperSampleFilled]: "57736",
  [Design.FlowArrowFilled]: "57737",
  [Design.GearFineFilled]: "57738",
  [Design.GradientFilled]: "57739",
  [Design.GridFourFilled]: "57740",
  [Design.GridNineFilled]: "57741",
  [Design.HexagonFilled]: "57742",
  [Design.HighlighterCircleFilled]: "57743",
  [Design.IntersectFilled]: "57744",
  [Design.IntersectSquareFilled]: "57745",
  [Design.IntersectThreeFilled]: "57746",
  [Design.LayoutFilled]: "57747",
  [Design.LineSegmentFilled]: "57748",
  [Design.LineSegmentsFilled]: "57749",
  [Design.MagicWandFilled]: "57750",
  [Design.MarkerCircleFilled]: "57751",
  [Design.NotchesFilled]: "57752",
  [Design.OctagonFilled]: "57753",
  [Design.PaintBrushBroadFilled]: "57754",
  [Design.PaintBrushFilled]: "57755",
  [Design.PaintBrushHouseholdFilled]: "57756",
  [Design.PaintBucketFilled]: "57757",
  [Design.PaintRollerFilled]: "57758",
  [Design.PaletteFilled]: "57759",
  [Design.ParallelogramFilled]: "57760",
  [Design.PenFilled]: "57761",
  [Design.PenNibFilled]: "57762",
  [Design.PenNibStraightFilled]: "57763",
  [Design.PencilCircleFilled]: "57764",
  [Design.PencilFilled]: "57765",
  [Design.PencilLineFilled]: "57766",
  [Design.PencilSimpleFilled]: "57767",
  [Design.PencilSimpleLineFilled]: "57768",
  [Design.PencilSimpleSlashFilled]: "57769",
  [Design.PencilSlashFilled]: "57770",
  [Design.PentagramFilled]: "57771",
  [Design.PerspectiveFilled]: "57772",
  [Design.PlaceholderFilled]: "57773",
  [Design.PolygonFilled]: "57774",
  [Design.RectangleFilled]: "57775",
  [Design.RowsFilled]: "57776",
  [Design.RulerFilled]: "57777",
  [Design.ScissorsFilled]: "57778",
  [Design.ScribbleLoopFilled]: "57779",
  [Design.SelectionAllFilled]: "57780",
  [Design.SelectionBackgroundFilled]: "57781",
  [Design.SelectionFilled]: "57782",
  [Design.SelectionForegroundFilled]: "57783",
  [Design.SelectionInverseFilled]: "57784",
  [Design.SelectionPlusFilled]: "57785",
  [Design.SelectionSlashFilled]: "57786",
  [Design.ShapesFilled]: "57787",
  [Design.SidebarFilled]: "57788",
  [Design.SidebarSimpleFilled]: "57789",
  [Design.SplitHorizontalFilled]: "57790",
  [Design.SplitVerticalFilled]: "57791",
  [Design.SquareFilled]: "57792",
  [Design.SquareHalfBottomFilled]: "57793",
  [Design.SquareHalfFilled]: "57794",
  [Design.SquareSplitHorizontalFilled]: "57795",
  [Design.SquareSplitVerticalFilled]: "57796",
  [Design.SquaresFourFilled]: "57797",
  [Design.StackFilled]: "57798",
  [Design.StackSimpleFilled]: "57799",
  [Design.StampFilled]: "57800",
  [Design.SubtractFilled]: "57801",
  [Design.SubtractSquareFilled]: "57802",
  [Design.SwatchesFilled]: "57803",
  [Design.TextAUnderlineFilled]: "57804",
  [Design.TriangleFilled]: "57805",
  [Design.UniteFilled]: "57806",
  [Design.UniteSquareFilled]: "57807",
  [Design.VignetteFilled]: "57808",
};
