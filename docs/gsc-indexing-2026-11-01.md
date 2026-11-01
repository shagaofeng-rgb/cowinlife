# cowinlife.com 索引与站点地图核查（2026-11-01）

数据来自 `sc-domain:cowinlife.com` 的 GSC Page indexing 和 Sitemaps 明细。索引报告显示已收录 50、未收录 25；以下四类示例共 25 条，与未收录总数相符。GSC 分类最后更新为 2026-10-23；“最近抓取”是每条 URL 在明细中显示的时间，不代表今天的状态。四类验证状态均为 **Not Started**。线上响应在部署前、部署后分别核验。

## 404（10 条；首次发现 2026-09-22）

| GSC URL | 最近抓取 | 处置 |
| --- | --- | --- |
| [旧定制产品 CP-1026](https://cowinlife.com/custom-products/cp-1026-cowinlife-pvc-self-adhesive-3d-wallpaper-rolls-peel-and-stick-tile-wall-stickers-home-decor-for-kitchen-furniture-cab) | 10-24 | 有意排除：墙贴产品已不属于当前集装箱站点，保留 404 |
| [旧产品 QCUS240438](https://cowinlife.com/products/qcus240438-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-sticker-toile-de-jouy-landscape-remov) | 10-23 | 有意排除：无对应现售产品，保留 404 |
| [旧产品 PR0029RN0M0](https://cowinlife.com/products/pr0029rn0m0-rainbow-polka-dot-wall-stickers-peel-and-stick-decals-12-sheets-peel-stick-no-residue-watercolor-nursery-kid) | 10-21 | 有意排除：无对应现售产品，保留 404 |
| [/custom-products](https://cowinlife.com/custom-products) | 10-11 | 有意排除：旧产品目录不存在，保留 404 |
| [旧产品 QCUS230849](https://cowinlife.com/products/qcus230849-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-sticker-toile-de-jouy-landscape-remov) | 10-11 | 有意排除：无对应现售产品，保留 404 |
| [旧产品 PR0010YD0L0](https://cowinlife.com/products/pr0010yd0l0-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorat) | 10-05 | 有意排除：无对应现售产品，保留 404 |
| [旧产品 PR0039YD1L0](https://cowinlife.com/products/pr0039yd1l0-dinosaur-wall-stickers-animal-boys-bedroom-decals-nursery-removable-decor-kids-room-modern-stylish-murals-di) | 10-04 | 有意排除：无对应现售产品，保留 404 |
| [旧定制产品 CP-1046](https://cowinlife.com/custom-products/cp-1046-cowinlife-deco-self-adhesive-wallpaper-roll-3d-brown-black-leopard-pattern-removable-peel-and-stick-contact-paper-for) | 09-28 | 有意排除：墙贴产品已不属于当前站点，保留 404 |
| [旧产品 PR0029RC0L0](https://cowinlife.com/products/pr0029rc0l0-rainbow-polka-dot-wall-stickers-peel-and-stick-decals-6-sheets-peel-stick-no-residue-watercolor-nursery-kids) | 09-22 | 有意排除：无对应现售产品，保留 404 |
| [/&](https://cowinlife.com/&) | 09-22 | 有意排除：畸形 URL，保留 404 |

上述 10 个路径均不在现站 `content/index.json` 的 801 个页面中，旧品和现站业务不对应；没有将其无关跳转到首页或虚构新页面。

## noindex（6 条；首次发现 2026-07-11）

| GSC URL | 最近抓取 | 处置 |
| --- | --- | --- |
| [/search](https://cowinlife.com/search) | 09-10 | 有意排除：旧站站内搜索，不是目标落地页；现站使用 `/search.html`，已明确 noindex |
| [结账页 retail-pr0010sm0l0](https://cowinlife.com/checkout?product=retail-pr0010sm0l0) | 07-10 | 有意排除：旧站交易流程，现站无此页面 |
| [结账页 cw-0072](https://cowinlife.com/checkout?product=cw-0072-vintage-privacy-window-film-seamless-repeat-static-cling-frosted-glass-decal-bathroom-non-adhesive-removable-cover) | 07-10 | 有意排除：旧站交易流程，现站无此页面 |
| [结账页 cw-0006](https://cowinlife.com/checkout?product=cw-0006-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-removable-pvc-decor-for-cabinet-15-75-62-99inch-1) | 07-10 | 有意排除：旧站交易流程，现站无此页面 |
| [结账页 cw-0034](https://cowinlife.com/checkout?product=cw-0034-nursery-floral-wall-stickers-decals-peel-and-stick-decor-12-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-be) | 07-10 | 有意排除：旧站交易流程，现站无此页面 |
| [结账页 cw-0064](https://cowinlife.com/checkout?product=cw-0064-watercolor-privacy-window-film-laser-suncatcher-static-cling-vintage-seamless-repeat-glass-decal-bathroom-non-adhesive-r) | 07-10 | 有意排除：旧站交易流程，现站无此页面 |

这些 URL 是 GSC 历史分类；当前线上 `/search` 和 `/checkout` 返回 404。现站真实产品页不受此 noindex 分类影响。

## 重定向（3 条；首次发现 2026-07-11）

| GSC URL | 最近抓取 | 处置 |
| --- | --- | --- |
| [http://cowinlife.com/](http://cowinlife.com/) | 09-14 | 有意保留：HTTP 308 到 HTTPS；最终页面 200 |
| [http://www.cowinlife.com/](http://www.cowinlife.com/) | 08-24 | 有意保留：HTTP 308 到 HTTPS；最终页面 200 |
| [https://www.cowinlife.com/](https://www.cowinlife.com/) | 08-24 | 等待重抓：当前直接返回 200，页面 canonical 指向 `https://cowinlife.com/`；GSC 分类为历史状态 |

## 已抓取未收录（6 条；首次发现 2026-07-11）

| GSC URL | 最近抓取 | 处置 |
| --- | --- | --- |
| [旧产品图片 API](https://cowinlife.com/api/custom-product-image/custom-cp-1002/0) | 09-17 | 有意排除：旧产品图片接口在现站不存在 |
| [旧定制产品 CP-1034](https://cowinlife.com/custom-products/cp-1034-cowinlife-deco-glossy-green-peel-and-stick-waterproof-marble-sticker-for-kitchen-countertops-home-decor-self-adhesive) | 07-10 | 有意排除：旧墙贴产品，不属于现站业务 |
| [旧定制产品 CP-1013](https://cowinlife.com/custom-products/cp-1013-cowinlife-3d-black-checker-self-adhesive-wallpaper-rolls-furniture-renovation-pvc-peel-stick-flooring-bathroom-wallpa) | 07-10 | 有意排除：旧墙贴产品，不属于现站业务 |
| [旧商品询盘参数](https://cowinlife.com/contact?product=CP-1027) | 07-10 | 有意排除：旧站路径；现站联系方式为 `/contact-us.html` |
| [旧结账参数](https://cowinlife.com/checkout?product=b0cly7818j-qucheng-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-) | 07-09 | 有意排除：旧站交易流程 |
| [旧墙纸分类](https://cowinlife.com/collections/chinoiserie-peel-and-stick-wallpaper) | 07-08 | 有意排除：旧分类，不属于现站业务 |

## 站点地图与路由

部署前：`/robots.txt`、`/sitemap.xml` 以及旧索引中的 `categories-1.xml`、`pages-1.xml`、`posts-1.xml`、`products-1.xml` 均为 HTML 404，响应的 `x-matched-path` 是 `/[[...slug]]`。GSC 记录的站点地图为 2026-09-19 提交的旧索引，状态 **Couldn't fetch**，保留旧的 1,658 个发现 URL；4 个旧子文件各报 1 个错误。现站数据为 801 个内容页面，页面文件齐全、路径唯一，旧子文件不再是现站地图组成部分。新的单文件 sitemap 只列这 801 个规范域 URL，避免继续宣传旧站失效路径。

部署后：GitHub `main` 的 `70332a7` 触发 Vercel 生产部署 `dpl_7GmbyoN8uBT8wxq4WREbkLK6jhXS`，构建为 READY。`/robots.txt` 为 HTTP 200、`text/plain`，`/sitemap.xml` 为 HTTP 200、`application/xml`；两个请求的 `x-matched-path` 均为各自 SEO 路由，不再是通用页面路由。XML 可解析，包含 801 条唯一、同域 URL；页面、产品、文章各抽 3 条线上均返回 200，产品页 canonical 指向规范域。全部 25 条 GSC 示例在部署后逐条复测：404 类 10 条仍为 404；历史 noindex 类 6 条现为 404；重定向类 2 条为 308、1 条为 200；已抓取未收录类 6 条现为 404。

2026-11-01 已在 `sc-domain:cowinlife.com` 重新提交 `https://cowinlife.com/sitemap.xml`。GSC 当天显示 **Success**、类型 **Sitemap**、已发现 **801** 页、当天最后读取。旧索引的 1,658 页和 4 个失效子文件已不在新地图中。网页索引报告仍以 2026-10-23 的分类为历史快照；Google 的 URL 重抓与索引更新需要等待。对于真实删除、内部搜索和正常协议跳转，没有发起不适用的 “Validate fix”。
