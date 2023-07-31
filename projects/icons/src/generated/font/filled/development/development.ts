export type DevelopmentId =
  | "brackets-angle-filled"
  | "brackets-curly-filled"
  | "brackets-round-filled"
  | "brackets-square-filled"
  | "bug-beetle-filled"
  | "bug-droid-filled"
  | "bug-filled"
  | "code-block-filled"
  | "code-filled"
  | "code-simple-filled"
  | "cpu-filled"
  | "database-filled"
  | "git-branch-filled"
  | "git-commit-filled"
  | "git-diff-filled"
  | "git-fork-filled"
  | "git-merge-filled"
  | "git-pull-request-filled"
  | "magnet-filled"
  | "magnet-straight-filled"
  | "robot-filled"
  | "terminal-filled"
  | "terminal-window-filled"
  | "tree-structure-filled"
  | "webhooks-logo-filled";

export type DevelopmentKey =
  | "BracketsAngleFilled"
  | "BracketsCurlyFilled"
  | "BracketsRoundFilled"
  | "BracketsSquareFilled"
  | "BugBeetleFilled"
  | "BugDroidFilled"
  | "BugFilled"
  | "CodeBlockFilled"
  | "CodeFilled"
  | "CodeSimpleFilled"
  | "CpuFilled"
  | "DatabaseFilled"
  | "GitBranchFilled"
  | "GitCommitFilled"
  | "GitDiffFilled"
  | "GitForkFilled"
  | "GitMergeFilled"
  | "GitPullRequestFilled"
  | "MagnetFilled"
  | "MagnetStraightFilled"
  | "RobotFilled"
  | "TerminalFilled"
  | "TerminalWindowFilled"
  | "TreeStructureFilled"
  | "WebhooksLogoFilled";

export enum Development {
  BracketsAngleFilled = "brackets-angle-filled",
  BracketsCurlyFilled = "brackets-curly-filled",
  BracketsRoundFilled = "brackets-round-filled",
  BracketsSquareFilled = "brackets-square-filled",
  BugBeetleFilled = "bug-beetle-filled",
  BugDroidFilled = "bug-droid-filled",
  BugFilled = "bug-filled",
  CodeBlockFilled = "code-block-filled",
  CodeFilled = "code-filled",
  CodeSimpleFilled = "code-simple-filled",
  CpuFilled = "cpu-filled",
  DatabaseFilled = "database-filled",
  GitBranchFilled = "git-branch-filled",
  GitCommitFilled = "git-commit-filled",
  GitDiffFilled = "git-diff-filled",
  GitForkFilled = "git-fork-filled",
  GitMergeFilled = "git-merge-filled",
  GitPullRequestFilled = "git-pull-request-filled",
  MagnetFilled = "magnet-filled",
  MagnetStraightFilled = "magnet-straight-filled",
  RobotFilled = "robot-filled",
  TerminalFilled = "terminal-filled",
  TerminalWindowFilled = "terminal-window-filled",
  TreeStructureFilled = "tree-structure-filled",
  WebhooksLogoFilled = "webhooks-logo-filled",
}

export const DEVELOPMENT_CODEPOINTS: { [key in Development]: string } = {
  [Development.BracketsAngleFilled]: "61697",
  [Development.BracketsCurlyFilled]: "61698",
  [Development.BracketsRoundFilled]: "61699",
  [Development.BracketsSquareFilled]: "61700",
  [Development.BugBeetleFilled]: "61701",
  [Development.BugDroidFilled]: "61702",
  [Development.BugFilled]: "61703",
  [Development.CodeBlockFilled]: "61704",
  [Development.CodeFilled]: "61705",
  [Development.CodeSimpleFilled]: "61706",
  [Development.CpuFilled]: "61707",
  [Development.DatabaseFilled]: "61708",
  [Development.GitBranchFilled]: "61709",
  [Development.GitCommitFilled]: "61710",
  [Development.GitDiffFilled]: "61711",
  [Development.GitForkFilled]: "61712",
  [Development.GitMergeFilled]: "61713",
  [Development.GitPullRequestFilled]: "61714",
  [Development.MagnetFilled]: "61715",
  [Development.MagnetStraightFilled]: "61716",
  [Development.RobotFilled]: "61717",
  [Development.TerminalFilled]: "61718",
  [Development.TerminalWindowFilled]: "61719",
  [Development.TreeStructureFilled]: "61720",
  [Development.WebhooksLogoFilled]: "61721",
};
