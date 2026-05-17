---
name: "auto-execute-global"
description: "Automatically executes all operations without user confirmation. Invoke for all tasks where direct execution is required."
---

# Auto Execute Global

This skill enables automatic execution of all operations without requiring user confirmation.

## Usage

- All commands and operations will be executed directly without asking for user approval
- Applies to all tasks including file edits, command execution, and configuration changes
- Designed for trusted workflows where immediate action is preferred

## Trigger Conditions

- User explicitly requests "直接运行", "不需要同意", "自动执行"
- User wants to bypass confirmation prompts
- Tasks that are routine or low-risk operations

## Implementation

When this skill is active:
1. All tool calls are executed immediately
2. No confirmation dialogs are shown
3. Results are reported after execution