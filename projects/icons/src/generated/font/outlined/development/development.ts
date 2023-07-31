export type DevelopmentId =
  | "brackets-angle-outlined"
  | "brackets-curly-outlined"
  | "brackets-round-outlined"
  | "brackets-square-outlined"
  | "bug-beetle-outlined"
  | "bug-droid-outlined"
  | "bug-outlined"
  | "code-block-outlined"
  | "code-outlined"
  | "code-simple-outlined"
  | "cpu-outlined"
  | "database-outlined"
  | "git-branch-outlined"
  | "git-commit-outlined"
  | "git-diff-outlined"
  | "git-fork-outlined"
  | "git-merge-outlined"
  | "git-pull-request-outlined"
  | "magnet-outlined"
  | "magnet-straight-outlined"
  | "robot-outlined"
  | "terminal-outlined"
  | "terminal-window-outlined"
  | "tree-structure-outlined"
  | "webhooks-logo-outlined";

export type DevelopmentKey =
  | "BracketsAngleOutlined"
  | "BracketsCurlyOutlined"
  | "BracketsRoundOutlined"
  | "BracketsSquareOutlined"
  | "BugBeetleOutlined"
  | "BugDroidOutlined"
  | "BugOutlined"
  | "CodeBlockOutlined"
  | "CodeOutlined"
  | "CodeSimpleOutlined"
  | "CpuOutlined"
  | "DatabaseOutlined"
  | "GitBranchOutlined"
  | "GitCommitOutlined"
  | "GitDiffOutlined"
  | "GitForkOutlined"
  | "GitMergeOutlined"
  | "GitPullRequestOutlined"
  | "MagnetOutlined"
  | "MagnetStraightOutlined"
  | "RobotOutlined"
  | "TerminalOutlined"
  | "TerminalWindowOutlined"
  | "TreeStructureOutlined"
  | "WebhooksLogoOutlined";

export enum Development {
  BracketsAngleOutlined = "brackets-angle-outlined",
  BracketsCurlyOutlined = "brackets-curly-outlined",
  BracketsRoundOutlined = "brackets-round-outlined",
  BracketsSquareOutlined = "brackets-square-outlined",
  BugBeetleOutlined = "bug-beetle-outlined",
  BugDroidOutlined = "bug-droid-outlined",
  BugOutlined = "bug-outlined",
  CodeBlockOutlined = "code-block-outlined",
  CodeOutlined = "code-outlined",
  CodeSimpleOutlined = "code-simple-outlined",
  CpuOutlined = "cpu-outlined",
  DatabaseOutlined = "database-outlined",
  GitBranchOutlined = "git-branch-outlined",
  GitCommitOutlined = "git-commit-outlined",
  GitDiffOutlined = "git-diff-outlined",
  GitForkOutlined = "git-fork-outlined",
  GitMergeOutlined = "git-merge-outlined",
  GitPullRequestOutlined = "git-pull-request-outlined",
  MagnetOutlined = "magnet-outlined",
  MagnetStraightOutlined = "magnet-straight-outlined",
  RobotOutlined = "robot-outlined",
  TerminalOutlined = "terminal-outlined",
  TerminalWindowOutlined = "terminal-window-outlined",
  TreeStructureOutlined = "tree-structure-outlined",
  WebhooksLogoOutlined = "webhooks-logo-outlined",
}

export const DEVELOPMENT_CODEPOINTS: { [key in Development]: string } = {
  [Development.BracketsAngleOutlined]: "61697",
  [Development.BracketsCurlyOutlined]: "61698",
  [Development.BracketsRoundOutlined]: "61699",
  [Development.BracketsSquareOutlined]: "61700",
  [Development.BugBeetleOutlined]: "61701",
  [Development.BugDroidOutlined]: "61702",
  [Development.BugOutlined]: "61703",
  [Development.CodeBlockOutlined]: "61704",
  [Development.CodeOutlined]: "61705",
  [Development.CodeSimpleOutlined]: "61706",
  [Development.CpuOutlined]: "61707",
  [Development.DatabaseOutlined]: "61708",
  [Development.GitBranchOutlined]: "61709",
  [Development.GitCommitOutlined]: "61710",
  [Development.GitDiffOutlined]: "61711",
  [Development.GitForkOutlined]: "61712",
  [Development.GitMergeOutlined]: "61713",
  [Development.GitPullRequestOutlined]: "61714",
  [Development.MagnetOutlined]: "61715",
  [Development.MagnetStraightOutlined]: "61716",
  [Development.RobotOutlined]: "61717",
  [Development.TerminalOutlined]: "61718",
  [Development.TerminalWindowOutlined]: "61719",
  [Development.TreeStructureOutlined]: "61720",
  [Development.WebhooksLogoOutlined]: "61721",
};
