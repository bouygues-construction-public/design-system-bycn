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
  [Development.BracketsAngleFilled]: "57809",
  [Development.BracketsCurlyFilled]: "57810",
  [Development.BracketsRoundFilled]: "57811",
  [Development.BracketsSquareFilled]: "57812",
  [Development.BugBeetleFilled]: "57813",
  [Development.BugDroidFilled]: "57814",
  [Development.BugFilled]: "57815",
  [Development.CodeBlockFilled]: "57816",
  [Development.CodeFilled]: "57817",
  [Development.CodeSimpleFilled]: "57818",
  [Development.CpuFilled]: "57819",
  [Development.DatabaseFilled]: "57820",
  [Development.GitBranchFilled]: "57821",
  [Development.GitCommitFilled]: "57822",
  [Development.GitDiffFilled]: "57823",
  [Development.GitForkFilled]: "57824",
  [Development.GitMergeFilled]: "57825",
  [Development.GitPullRequestFilled]: "57826",
  [Development.MagnetFilled]: "57827",
  [Development.MagnetStraightFilled]: "57828",
  [Development.RobotFilled]: "57829",
  [Development.TerminalFilled]: "57830",
  [Development.TerminalWindowFilled]: "57831",
  [Development.TreeStructureFilled]: "57832",
  [Development.WebhooksLogoFilled]: "57833",
};
