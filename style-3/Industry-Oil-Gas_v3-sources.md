# Industry-Oil-Gas_v3 — 文案出處對照

本文件逐條記錄 `Industry-Oil-Gas_v3.html` 上每一段文字的來源，以及採用該來源的原因。
目的是讓任何人在審這一版時，都能分辨哪些是既有文案、哪些被改過、哪些是新寫的。

## 出處代號

| 代號 | 來源 | 說明 |
|---|---|---|
| **A** | <https://www.bct-consulting.com/oil-gas/> | BCT 子公司的油氣頁。同事的 v1 就是照這頁做的 |
| **B** | <https://www.bahwancybertek.com/energy-OG-utilities/> | 母公司 Bahwan CyberTek 的「Energy, O&G and Utilities」頁，範圍較廣、文案較新 |
| **P** | 各產品自己的產品頁 | 例如 <https://www.bahwancybertek.com/geodatafy/> |
| **V1** | `Industry-Oil-Gas.html` | 同事的版本。其文案多半源自 A，但有自行修剪 |
| **NEW** | — | 本版新寫，下方「新寫文案清單」逐條列出 |

全頁共 **8 條 NEW**（全部是分類標籤）加 **2 條由產品頁既有句子組合**，其餘皆為 A / B / V1 的既有文案。頁面上沒有任何市場統計數字。

---

## 連字號政策

依指示，**全頁可見文案不使用任何連字號**（`-`）。共 14 處，分兩類處理：

| 處理 | 詞 |
|---|---|
| 改成空格（複合修飾語） | Next-gen → Next gen、future-ready → future ready、Industry-leading → Industry leading、Real-world → Real world、cutting-edge → cutting edge、decision-making → decision making、data-driven → data driven、AI-powered → AI powered、IoT-enabled → IoT enabled、cloud-based → cloud based、real-time → real time、red-score → red score |
| 直接接起來（前綴詞） | de-risk → **derisk**、non-productive → **nonproductive** |

前綴那兩個改成空格會變成不成詞的「de risk」「non productive」，接起來的寫法本身通行，因此直接刪除連字號。

`<meta name="description">` 一併套用。`<title>` 中的 `—` 是 em dash 不是連字號，未更動。

**本文件以下引用的文案皆為套用後的版本**；標示「逐字相同」時，指的是與來源相同、僅套用此政策。

---

## Nav / Footer

| 內容 | 出處 | 原因 |
|---|---|---|
| 導覽列全部項目、頁尾全部內容 | **V1** | 使用者要求 header / footer 與 v1 完全一致。逐字元比對相同，僅在 <768px 追加 44px 觸控高度（Design.md §8） |

---

## Hero

Hero 只剩三層：eyebrow、標題、內文。

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Oil & Gas` | **V1** | V1 原為 `Industries — Oil & Gas`（麵包屑式標籤，A 沒有）。依指示縮短為 `Oil & Gas` —— 導覽列已標示 Industries 為目前位置，前綴是重複資訊 |
| h1 `Shaping the future of oil and gas efficiency` | **A** | 逐字相同。A 為 Title Case，V1 已改句首大寫，此處沿用 V1 |
| 內文 `Drive smarter decision making, minimise operational risks…` | **A** | 逐字相同 |
| ~~按鈕 `See the sectors we serve` / `Explore our products`~~ | **V1** | **已移除**（依指示）。A 的 hero 本來就沒有按鈕，這兩顆是 v1 自加的 |
| ~~`Integrate cutting edge technologies to revolutionise operations and drive sustainability.`~~ | **A** | **已從 hero 移除**，下移到 Solutions 當 lede。原因：hero 的標題、副標、內文三層講的是同一件事，這句是重複的中間層 |

---

## Sectors

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Sectors` | **V1** | A 無 eyebrow |
| 標題 `Empowering oil and gas industry sectors` | **A** | 逐字相同 |
| lede `Transforming upstream, downstream, renewable, and logistics with cutting edge technology solutions.` | **A** | A 原文為 `cutting-edge`，依使用者指示移除連字號。（V1 在此多加了 `operations` 一字，v3 回到 A 的寫法） |
| 01 `Upstream Asset Management` + 描述 | **A** | 逐字相同 |
| 02 `Downstream Logistics` + 描述 | **A** | 逐字相同 |
| 03 `Fuel Stations & Retail` + 描述 | **V1** | A 原文為 `Fuel Stations and Convenience Stores`，過長無法在五欄內收在兩行（Design.md §3）。V1 已先行縮短為此，v3 沿用 |
| 04 `Renewable Operations` + 描述 | **A** | 逐字相同 |
| 05 `Transportation and Logistics` + 描述 | **A** | 逐字相同 |

**為何上移到第二個區塊**：讀者進到產業頁的第一個問題是「你懂不懂我這一塊」。Sectors 是全頁唯一在講讀者所處世界的段落，原本排在倒數第二。

---

## Solutions

整段是本版改動最大的地方。**五個項目全數換掉**。

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Solutions` | **B** | 取自 B 的區塊標題。V1 用的是 `Services`，但本頁 nav 是母公司版（Products / Practices / Industries…），沒有 Services 這一項 |
| 標題 `Next gen solutions for future ready enterprises` | **B** | 逐字相同。A 為 `Enhance Efficiency with Next-Gen Solutions tailored for success`，V1 已刪去前綴 |
| lede `Integrate cutting edge technologies to revolutionise operations and drive sustainability.` | **A** | 從 hero 下移而來，未改一字。這句本來講的就是 solutions，放在這裡才有作用 |

### 五個能力項目（全部來自 B）

**為何整組換掉**：A / V1 原本的五項是 `Digital Apps`、`Integration Services`、`Managed Services`、`UX/UI Services`、`Cloud Solutions` —— 只有名稱、沒有任何描述，而且是泛用 IT 服務分類，沒有一個字跟油氣有關。B 的五張能力卡各自帶 3–4 行實質描述，且是寫給能源業看的。文案不是新編的，是集團自己的最新版本。

| # | 項目 | 對 B 原文的改動 |
|---|---|---|
| 01 | Cloud Transformation & **Modernisation** | `Modernization` → `Modernisation`、`Modernize` → `Modernise`（統一英式拼寫） |
| 02 | Unified Data & Analytics | `optimize` → `optimise`；`improve **grid** reliability` → `improve reliability`（grid 屬公用事業範疇，本頁是油氣） |
| 03 | AI & Intelligent Operations | `optimize` → `optimise`；刪除 `balance grid load,`（同上） |
| 04 | Digital Engineering & Twins | `optimize` → `optimise` |
| 05 | OT/ICS Cybersecurity | 無改動，逐字相同 |

> 拼寫說明：A 與 V1 全頁使用英式 `-ise`（Maximise、Optimise、minimise），B 使用美式 `-ize`。為與本頁其餘文案一致，B 的文案一律轉為 `-ise`。

### 左下角照片（滑過項目切換）

五張照片全部**取自本 repo 既有素材**，非新增外部圖。原圖合計 8.1 MB，已裁成 16:9、縮到 1296×729 並轉為 webp，合計 393 KB。

| 項目 | 產出檔 | 來源素材 | 內容 |
|---|---|---|---|
| 01 Cloud Transformation | `sol-01.webp` | `cloud-blog-4.png` | 粒子雲 / 電路板 |
| 02 Unified Data & Analytics | `sol-02.webp` | `cloud-blog-1.png` | 分析人員與數據螢幕 |
| 03 AI & Intelligent Operations | `sol-03.webp` | `img_particle.png` | 藍色粒子場 |
| 04 Digital Engineering & Twins | `sol-04.webp` | `img_wave.png` | 藍色流體 |
| 05 OT/ICS Cybersecurity | `sol-05.webp` | `End-02.jpg` | 辦公大樓外觀 |

> **`cloud-band.jpg` 不可使用**：該檔（晶片 / 電路板）整張佈滿 **Unsplash+ 浮水印**。原本最適合放在 03，已排除。此檔仍存在於 repo 中，其他區塊若要取用需注意。
>
> **05 的配圖牽強**：資產庫中沒有任何工控 / SCADA / 資安相關素材，`End-02.jpg` 是最接近的一張。01–04 主題尚可對應。

---

## Products

**名單已從 A 的五個換成四個。** 理由見下方「產品名單為何換掉」。

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Products`、標題 `Industry leading products for sustainable growth` | **A** | 逐字相同 |
| `retina360` + 描述 | **A** | 逐字相同 |
| `FuelTrans` + 描述 | **A** | 逐字相同 |
| `Geodatafy` + 描述 | **P** | **新加入**。描述由其產品頁的兩個既有句子組合，見下 |
| `IVMS` + 描述 | **P** | **新加入**。描述由其產品頁的既有用語組合，見下 |
| ~~`rt360`~~ / ~~`dtWorks`~~ / ~~`dropthought`~~ | — | **已移除**，見下 |
| 四個分類標籤 | **NEW** | 見下 |
| `Explore` | **A** | A 的產品卡 CTA 即為 Explore |

> **產品名稱現為字標圖，不是文字。** 四個名稱改用你提供的 `img_logo_*.png`，處理成
> `logo-*.webp`（見下）。文字仍以 `alt` 屬性保留，無障礙名稱未遺失。

### 這一區沒有配圖

原本主打卡使用 `retina360-banner.webp`，但那是一張風機照片，放在油氣頁的產品主打位置不成立。清點資產庫後，真正的油氣照片只有兩張 —— `r360-case-1.webp`（抽油機）與 `hero.webp`（煉油廠），且分別已被 Impact 主打與 hero 使用；其餘為辦公大樓、風機、機械手臂。

由於沒有合適的替代素材，本區改為**四張等寬卡、完全不使用圖片**。整頁的攝影因此集中在 hero 與案例區 —— 那兩處的圖拍的就是主題本身。若日後取得真實的油氣素材，可再恢復主打卡的構圖。

### 四個字標圖

來源為你提供的 `img_logo_*.png`（1200×300、近白色墨水、透明底）。處理方式：偵測橫向墨水帶切出主字標、裁去空白、縮到 2× 顯示高度後轉 webp。

| 產品 | 產出檔 | 顯示尺寸 | 大小 | slogan |
|---|---|---|---|---|
| retina360 | `logo-retina360.webp` | 104×26 | 3.3 KB | 無 |
| FuelTrans | `logo-fueltrans.webp` | 147×26 | 3.7 KB | **已裁去**「Reimagine Fuel Retailing」 |
| Geodatafy | `logo-geodatafy.webp` | 124×26 | 4.7 KB | 無 |
| IVMS | `logo-ivms.webp` | 245×21 | 7.8 KB | **已裁去**「In-Vehicle Management System」 |

> **兩個處理決定待你確認**：(1) slogan 在 26px 高度下僅約 7px、無法閱讀，且卡片已有描述文字，因此裁去；(2) IVMS 的 lockup 為 11.8:1（其餘約 4–5:1），依統一高度會超出卡片內容寬度，故改由寬度決定，高度落在 21px。

### 產品名單為何換掉

依據是各產品**自己的產品頁**上出現「oil」「gas」的次數：

| 產品 | 產品頁標題 | oil | gas | 處置 |
|---|---|---|---|---|
| retina360 | （資產效能） | 4 | 3 | 保留 |
| FuelTrans | （燃油供應鏈，14× fuel） | 1 | — | 保留 |
| **Geodatafy** | Exploration & Production digitalization platform | 3 | 3 | **加入** |
| **IVMS** | Fleet Tracking \| CueTrans In-Vehicle Monitoring System | 5 | — | **加入** |
| rt360 | Risk Management Product Suite \| BCT Digital（12× bank） | **0** | **0** | 移除 |
| dtWorks | Customer Experience Management | **0** | **0** | 移除 |
| dropthought | Customer Feedback Management | **0** | **0** | 移除 |

移除的三個在自己的產品頁上一次都沒提過油氣 —— rt360 是銀行風控產品，另兩個是客戶體驗產品。它們會出現在每一個產業頁上，放在這裡會稀釋說服力。

加入的兩個則各自對應 Impact 區塊的一則案例（見下節），形成「頁面上點名的產品，下面就有對應實績」。

### 兩段組合描述的原句

這兩段**不是逐字引用**，是由該產品頁上的既有句子接合而成，不含任何新的事實主張：

| 產品 | 本頁寫法 | 產品頁原句 |
|---|---|---|
| Geodatafy | Break data siloes across exploration and production for full operational visibility. | 「Break data siloes and experience full operational visibility.」＋ meta 的「Exploration & Production digitalization platform」 |
| IVMS | Track fleet operations in real time with geofencing, live monitoring, and safety compliance. | 「Track your fleet operations confidently with CueTrans IVMS」＋ meta 的「Fleet Tracking & Monitoring System with features like geofencing and live monitoring」＋ 特色列的「Safety & compliance」 |

### 四個分類標籤（NEW）

原本 v2 的標籤是 `Featured platform` 與 `01`–`04`，對讀者沒有資訊量。改用功能標籤，每一個都直接從該產品自己的描述提煉：

| 產品 | 標籤 | 提煉自 |
|---|---|---|
| retina360 | Asset performance | A：「Maximise **asset performance** and sustainability…」 |
| FuelTrans | Fuel logistics | A：「Streamline **logistics** with innovative **fuel** management…」 |
| Geodatafy | Exploration & production | P：產品頁標題「**Exploration & Production** digitalization platform」 |
| IVMS | Fleet monitoring | P：產品頁標題「**Fleet** Tracking … **Monitoring** System」 |

**為何下移到第四個區塊**：產品名對冷讀者是零資訊，原本卻排在第一個內容區塊。先講產業理解（Sectors）與能力（Solutions），再講用什麼工具做。

---

## Impact

由 1 則案例增為 4 則。**挑選標準是能不能對應到本頁列出的產品。**

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Real world business impact` | **A** | A 為 Title Case，V1 已改句首大寫 |
| 標題 `Empowering businesses with proven data and analytics solutions` | **A** | 逐字相同 |
| 主打 標題 `Boosting oil and gas revenue with cloud migration` | **A** | 逐字相同 |
| 主打 描述 `How an oil company reduced operational planning costs and gained full visibility on logistics.` | **B** | **換掉了 A 的版本**。A 原文為「How cloud technology transformed operations and revenue growth for an energy leader.」B 講的是同一個案子但具體得多。兩頁皆有此案例 |
| 案例二 `Minimising search time with efficient file discovery` / `How an oil & gas production company reduced file search and discovery time with Geodatafy.` | **B** | `Minimizing` → `Minimising`（英式），標題改句首大寫，其餘逐字相同。**對應本頁的 Geodatafy** —— 案例文案直接點名了它 |
| 案例三 `Perfecting connected fleet management` / `How an oil refinery and petroleum company achieved a zero red score in fleet management.` | **B** | 標題改句首大寫，其餘逐字相同。**推定對應本頁的 IVMS**，但案例文案未點名產品，待確認 |
| 案例四 `Fuelling productivity through automation` / `How a major oil and gas operator reduced nonproductive time by 7.2%.` | **B** | `Fueling` → `Fuelling`（英式），標題改句首大寫，其餘逐字相同 |
| 標籤 `Cloud` / `Data discovery` / `Fleet` / `Automation` | **NEW** | 各自取自該則案例自身的主題，與 Products 標籤同一套邏輯 |
| `Read more` | **V1** | — |
| ~~`Unifying data across the enterprise`（Qatar）~~ | — | **未採用**：沒有對應到本頁列出的任何產品 |

**為何是 4 則而不是 B 的全部 6 則**：B 的 6 則全是油氣或能源，但其中兩則（Qatar 資料整合、離岸鑽井 Maximo）對應不到本頁的產品。而且真正的瓶頸是圖 —— 案例配圖目前全是佔位素材，多加只會擴大圖債。

本區標題下不設 `View all`（依指示移除）。

> **7.2% 這個數字**：出自 B 頁既有的客戶案例敘述，屬集團對自身專案成果的陳述，不是市場統計。B 頁上未標註出處，對外使用前建議與案例負責人核對一次。
>
> **本頁未採用 B 的市場數據**：B 頁另有 `$1.3T`、`40%`、`65%`、`60%` 四組市場統計，頁面上沒有任何出處標註，因此一律未採用。

---

## CTA

| 內容 | 出處 | 原因 / 改動 |
|---|---|---|
| eyebrow `Ready to elevate your business?` | **A** | A 的 CTA 標題，V1 已降為 eyebrow，v3 沿用 |
| 標題 `Secure your competitive advantage in the energy transition` | **B** | 逐字相同（改句首大寫）。取代 V1 的 `Let's collaborate today` —— 後者放在任何產業頁都成立，等於沒說 |
| 內文 `Move beyond legacy systems. Partner with us to deploy scalable solutions that boost ROI, maximise asset uptime, and optimise trading margins.` | **B** | `maximize` → `maximise`、`optimize` → `optimise`；刪除結尾的 `and build a secure, intelligent grid`（公用事業範疇） |
| 按鈕 `Talk to us` | **V1** | — |

---

## 新寫文案清單（全頁共 8 條）

全部是分類標籤，皆由既有描述提煉，不含任何新的事實主張、數字或承諾。

| # | 標籤 | 位置 |
|---|---|---|
| 1 | `Asset performance` | Products / retina360 |
| 2 | `Fuel logistics` | Products / FuelTrans |
| 3 | `Exploration & production` | Products / Geodatafy |
| 4 | `Fleet monitoring` | Products / IVMS |
| 5 | `Cloud` | Impact / 主打 |
| 6 | `Data discovery` | Impact / 案例二 |
| 7 | `Fleet` | Impact / 案例三 |
| 8 | `Automation` | Impact / 案例四 |

另有 **2 段由產品頁既有句子組合**的描述（Geodatafy、IVMS），原句已列於 Products 一節。

---

## 待確認事項

1. **案例配圖全是佔位素材** —— 目前借用 `r360-blog-2`（儀表板）、`r360-blog-1`（夜間貨車）、`r360-case-3`（機械手臂）。主題上大致對得上，但都不是該案例的真實素材，需替換。主打的 `r360-case-1`（抽油機）是全頁唯一真正切題的案例圖。
2. **產品區缺乏油氣素材** —— 見上方「這一區沒有配圖」。取得真實素材後可恢復主打卡構圖。
3. **IVMS 與車隊案例的對應待確認** —— 「Perfecting connected fleet management」在 B 頁上未點名產品，是依產品性質推定的。
4. **7.2% 的出處** —— 見上方說明。
5. **nav 的 `Practices` 仍對不到頁內區塊** —— 本版將 eyebrow 用了 B 的 `Solutions`，但導覽列該項叫 `Practices`。要真正對齊需修改導覽列，已超出本頁範圍。
6. **CTA 上有兩個藍色元素低於 AA** —— eyebrow 與 Talk to us 標籤依指示使用 `--blue-500`，但在流動光暈場上均為 **2.44:1**。品牌藍要達 4.5:1，場域峰值亮度須 ≤ 0.0177；實測唯一可行的配方是把五顆圓全部設為 `--blue-950`（峰值 L=0.0153 → 4.66:1），代價是網狀多色變成單色。目前維持現狀，已在 CSS 註解記錄推導。
7. **`--text-low` 是唯一偏離 `tokens.css` 的 token** —— `.44` 在系統四個底色上均為 4.06–4.12:1、低於 AA，本頁提高到 `.48`（4.57–4.69:1）。此缺陷源自 `tokens.css`，v1 與 v2 同樣存在但未修。
8. **導覽列在 721–1023px 會被裁切** —— Design.md §8 規定導覽列在 768 以下為 drawer、1024 以上才 inline，但本頁（及 v1、v2）在 720px 才收起，且三個版本都沒有 drawer。768px 實測超出 71px。屬 v1 帶入的既有缺陷。
9. **本頁定位** —— nav 與 footer 是母公司 Bahwan CyberTek 的，頁內文案主體來自 BCT 子公司頁。本版的取捨是「掛在母公司網站下」，故 Solutions 與 CTA 改用 B 的文案。若最終要掛在 BCT 站下，這兩處應退回 A 的版本。
