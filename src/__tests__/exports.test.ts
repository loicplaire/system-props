import * as AllExports from '..';

test('package has expected exports', () => {
  expect(Object.keys(AllExports).sort()).toMatchInlineSnapshot(`
Array [
  "AllSystemProps",
  "BorderProps",
  "CSSObject",
  "ColorProps",
  "FlexContainerProps",
  "FlexItemProps",
  "FlexboxProps",
  "GridContainerProps",
  "GridItemProps",
  "GridProps",
  "LayoutProps",
  "MarginProps",
  "PaddingProps",
  "PositionProps",
  "PropConfigCollection",
  "ShadowProps",
  "SpaceProps",
  "SystemProp",
  "Theme",
  "TransitionProps",
  "TypographyProps",
  "background",
  "border",
  "color",
  "createCss",
  "createSystem",
  "css",
  "default",
  "flexContainer",
  "flexItem",
  "flexbox",
  "grid",
  "gridContainer",
  "gridItem",
  "layout",
  "margin",
  "padding",
  "position",
  "propNames",
  "pseudoSelectors",
  "shadow",
  "shouldForwardProp",
  "space",
  "styledSystemLayout",
  "transition",
  "typography",
]
`);
});
