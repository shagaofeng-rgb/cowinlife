# Local migration preview — design QA

final result: blocked

The local draft is available for review. This is not acceptance of the requested complete, debranded 1:1 migration.

## Evidence and dimensions

Source visual truth: https://www.dxhcontainer.com/ and corresponding product/category routes.
Implementation: http://localhost:3000/ and the same routes.

Browser-rendered paired screenshots were submitted together in the conversation, not reviewed from code alone. Screenshot files were not exported from the browser tool; the image evidence is the inline tool output identified below. No local screenshot path is claimed.

- Desktop: 1440 × 1000 CSS px, browser device pixel ratio 1. Source and implementation were compared in the same screenshot call. Browser image previews may be scaled by the conversation UI; comparison used matching CSS viewport and density. No independent bitmap resampling was performed.
- Mobile: 390 × 844 CSS px, browser device pixel ratio 1. Both measured with rendered DOM. Mobile source was reloaded after resizing to avoid comparing a stale desktop initialization.
- Full-page stitching was unreliable; viewport captures at relevant states were used instead. This is a limitation for whole-page acceptance.

Paired evidence:

| State | Inline comparison title | Outcome |
| --- | --- | --- |
| Homepage desktop top | 对比原站与本地首页 | Hero image, crop, main typography and hierarchy retained. Header height subsequently corrected. |
| Product gallery | 对比产品详情布局与图库 → 复核产品页同尺寸效果 | Initial horizontal thumbnail layout was wrong; restored source vertical album classes and matched large image proportions. |
| Inquiry dialog | 对比询盘弹窗 → 复核询盘窗口的间距与内容 → 确认询盘窗口的视觉校准 | Restored title bar, 1040px width, 100px top position, 14px/22px text, margins, selected item and focus behavior. Country-code picker still differs. |
| Mobile home | 复核手机端响应式排版 | Original hero treatment, stacked heading and narrow layout retained; header placeholder height corrected. |
| Mobile menu | 对比手机端菜单 → 确认移动端菜单修复结果 | Replaced incorrect white menu with source dark styling; repaired nested menu selection and page scroll locking. Language menu remains pending. |
| Product directory | 对比产品目录首屏 | Original banner and structure retained; changed placeholder text affects wrapping. |

Focused comparisons used rendered DOM dimensions and computed styles for album orientation/width, header height, modal spacing and mobile navigation. The source and local screenshots above supplied the visual evidence; measurements were supporting evidence, not a substitute.

## Findings

- **P1 — Full site scope incomplete.** The initial English preview has 824 local routes. The sitemap has 19,419 entries / 19,418 unique URLs. Remaining multilingual, topic and other indexed pages are still being captured outside the application. They are not silently redirected to the homepage and are not claimed as migrated.
- **P1 — New brand assets and company facts are missing.** `NEW BRAND` and bracketed fields are placeholders. Original logos in text/HTML, old contact destinations, QR-code slots and selected company-specific claims were removed/replaced. Many product photographs still contain the old DXH watermark; some factory/project photographs also belong to the previous company. Replace with reviewed new or unwatermarked assets before acceptance.
- **P1 — Media/VR coverage incomplete.** Original embeds and account-bound integrations were removed. A video detail URL existing locally does not imply its original branded media or VR experience is accepted or fully reconstructed. New media and VR destination are required.
- **P2 — Some original media could not be retrieved.** Failed original asset requests are tracked in the migration manifests. Blank image sources were removed instead of leaving broken local requests; this does not mean all source imagery is present. A poster/background localization bug was corrected, but remaining remote failures need replacement or a successful later import.
- **P2 — Inquiry and search details remain to be matched.** Local inquiry validation and selected-item behavior work; the original international dialing-code picker is not yet reproduced. Local search works across imported products/articles but its result template and every tab/state are not yet accepted as a pixel match.
- **P2 — Full state and responsive coverage incomplete.** Desktop dropdowns were reconstructed using retained source menu classes and tested with keyboard focus; direct source hover-state screenshots were unavailable. All viewport sizes, article/product templates, footer states, long multilingual titles, media interactions and page-specific effects have not been exhaustively compared.

## Fidelity surfaces

- Fonts: local original Poppins Regular and SemiBold; original sizes/line heights retained. Inquiry description corrected to 14px/22px. New-company copy will require a wrapping pass.
- Spacing/layout: source grids and responsive CSS retained. Corrected gallery direction, header height, popup padding and mobile menu overflow. Placeholder copy changes some section heights.
- Colors/tokens: source accent, dark header/menu and light section colors retained; popup uses source class styles. Uncaptured dropdown hover state remains an evidence gap.
- Images: original local assets retained rather than redrawn. Watermarks and company-owned factory/profile assets remain blocking replacement work. Known logo/QR/certificate slots use explicit pending content because new assets were not provided.
- Copy: automated scan found no DXH/Daxiang/old-email/old-phone/old-contact-name in visible imported text in the final 824-route scan; totals are in `migration-audit.json`. This scan cannot detect branding embedded in pixels or verify new-company commercial claims.

## Functional checks

- Next.js production build and TypeScript completed successfully; latest rerun is recorded in task output.
- 824/824 routes passed HTTP 200 plus rendered-app checks in production mode; results are in `route-check.json`.
- Product thumbnail click changed the active image.
- Mobile main navigation and nested category menus opened; keyboard-accessible desktop menu opened.
- FAQ changed to its visible expanded state.
- Header search navigated to local results for “expandable”.
- Local inquiry form validated and displayed “not sent”; it did not submit to the old service.
- Browser console review during tested states found no error entries. Development logs were present; this is not an exhaustive console check of all routes.
- Current link/media/integration scan is in `migration-audit.json`. Two original product URLs were confirmed HTTP 404 and are not counted as successfully imported pages.

## Required next work

1. Apply the new brand name, logo, verified company/contact information and commercial terms.
2. Replace watermarked/company-specific media and complete media/VR behavior.
3. Finish the remaining sitemap import, translations and branding checks.
4. Close inquiry/search/dropdown fidelity gaps and compare every representative template on desktop and mobile.
5. Repeat paired screenshot QA and integration checks before declaring the site ready for approval or deployment.

No GitHub repository or Vercel deployment has been created.
