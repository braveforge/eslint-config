const partitionCommentSuffix = String.raw`(\s|$)`;
const partitionCommentBlockPrefix = String.raw`^[\*\s]*`;
const partitionCommentDivider = String.raw`---+${partitionCommentSuffix}`;
const partitionCommentRegion = String.raw`#?(end)?region${partitionCommentSuffix}`;

/**
 * 支持通过注释对字段进行逻辑分区，以配合排序策略。
 * 虽然字段按名称自然排序通常更具可读性，
 * 但在 `object`、`object-type`、`interface` 等结构中，有时需要将特定字段保留在同一区域。
 * 此时可通过注释进行显式分隔，当前支持两种形式：divider（如 `// ---`）和 region（如 `// #region`）。
 * 用户可根据项目风格或团队偏好自由选择。
 *
 * @example Divider 是一种简洁的视觉分隔线，适合快速标记逻辑区域：
 * // ---
 * ...
 * // ---
 *
 * @example Region 注释可被多数编辑器识别为可折叠区域，便于结构管理与导航：
 * // #region
 * ...
 * // #endregion
 *
 * @see https://perfectionist.dev/rules/sort-objects#partitionbycomment
 * @see https://www.jetbrains.com/help/idea/working-with-source-code.html#custom_folding_regions
 * @see https://code.visualstudio.com/docs/editing/codebasics#_folding
 */
export const partitionByComment = {
  block: [
    partitionCommentBlockPrefix + partitionCommentDivider,
    { flags: 'i', pattern: partitionCommentBlockPrefix + partitionCommentRegion },
  ],
  line: [
    '^' + partitionCommentDivider,
    { flags: 'i', pattern: '^' + partitionCommentRegion },
  ],
};
