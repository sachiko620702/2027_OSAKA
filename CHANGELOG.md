# CHANGELOG

## V5.22.0 - 2026-07-06

### Changed

- Updated Day 4 dinner preference from in-hotel restaurant to sushi dinner preference.
- Recorded the conflict that InterContinental Osaka official FAQ currently states the hotel has no Japanese restaurant.
- Updated `database/day4_shinsaibashi_hotel_dinner.yml` to mark sushi as the preferred Day 4 dinner cuisine and PIERRE / NOKA as fallback-only non-sushi options.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, `database/customer_facing_travel_plan.yml`, and `docs/15_顧客版資料/旅遊規劃三表.md`.

### Reason

The user explicitly stated: “晚餐想要吃壽司”. This changes the Day 4 dinner preference and creates a conflict with the previous in-hotel dinner direction, because InterContinental Osaka currently has no Japanese restaurant.

### Impact

- Day 4 dinner should now prioritize sushi.
- The preferred search area should be InterContinental Osaka nearby / Umeda / Osaka Station to preserve the post-lunch hotel return and Luxury Slow Travel pacing.
- PIERRE / NOKA should not be treated as primary Day 4 dinner candidates unless the user later accepts non-sushi in-hotel dining.

### Follow-up required

- Search and add Day 4 sushi dinner candidates near InterContinental Osaka / Umeda / Osaka Station.
- Confirm whether the user accepts leaving the hotel briefly for sushi dinner.
- Confirm 2027/11/20 restaurant hours, booking window, price, cancellation policy, and Google Maps / Tabelog references.

## V5.21.0 - 2026-07-06

### Changed

- Added Day 4 formal route for 2027/11/20: Shinsaibashi-centered activity range before and around lunch.
- Confirmed Day 4 sequence: Pokémon Center OSAKA DX / Daimaru Shinsaibashi area → Shinsaibashi lunch → return to InterContinental Osaka after lunch → Executive Lounge afternoon tea / hotel-nearby activities → in-hotel dinner.
- Added `database/day4_shinsaibashi_hotel_dinner.yml`.
- Updated `database/itinerary_hourly.yml` with the Day 4 post-lunch return-to-hotel route and hotel dinner block.
- Updated `database/hotel_lounge.yml` with Day 4 afternoon tea, hotel-nearby activity, and in-hotel dinner flow.
- Updated `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, root `index.md`, and `docs/index.md` with the Day 4 plan.
- Added `docs/01_行程規劃/2027大阪自由行_小時制時間表_V5.20.0.md` as the Day 4 hourly planning document generated during this update cycle.
- Updated README, AI_CONTEXT, PROJECT_RULE, AGENTS, DECISIONS, ROADMAP, WATCHLIST, and daily sync status.

### Day 4 confirmed direction

- Activity range: Shinsaibashi-centered.
- Anchor stop: Pokémon Center OSAKA DX / Daimaru Shinsaibashi.
- Lunch: Shinsaibashi-area candidate needed.
- After lunch: return to InterContinental Osaka.
- Afternoon: hotel / hotel-nearby activities only, with Executive Lounge afternoon tea retained.
- Dinner: InterContinental Osaka in-hotel restaurant.

### In-hotel dinner candidates

- PIERRE / フレンチレストラン ピエール: primary formal dinner candidate.
- NOKA Roast & Grill / ノカ ロースト & グリル: relaxed in-hotel backup.
- ADEE Lounge & Bar / アディ ラウンジ＆バー: optional after-dinner lounge / nightcap only, not the main dinner.

### Reason

The user explicitly specified that Day 4 should mainly stay within Shinsaibashi, return to the hotel after lunch, keep later activities near the hotel, and use an in-hotel restaurant for dinner.

### Impact

- Day 4 is now more consistent with Luxury Slow Travel.
- Day 4 afternoon should not include distant attractions or a second long shopping area.
- Day 4 dinner should not be moved to Shinsaibashi, Namba, or Umeda unless the user explicitly changes the plan.
- Day 4 lunch and in-hotel dinner now have clear follow-up tasks.

### Follow-up required

- Confirm Pokémon Center OSAKA DX 2027/11/20 hours, entry rules, events, and limited goods.
- Add Shinsaibashi lunch candidates that fit a post-lunch return to InterContinental Osaka.
- Confirm Shinsaibashi → InterContinental Osaka return route by Osaka Metro Midosuji Line vs taxi.
- Confirm InterContinental Osaka Executive Lounge 2027/11/20 afternoon tea hours and eligibility.
- Confirm PIERRE / NOKA 2027/11/20 dinner availability, booking window, menu, price, service charge, dress code, and cancellation policy.

## V5.20.0 - 2026-07-06

### Changed

- Searched and added Day 1 dinner candidate references near Pokémon Center OSAKA / Umeda.
- Added `database/day1_umeda_dinner_candidates.yml`.
- Added `docs/02_餐廳美食/Day1_梅田PokemonCenter附近晚餐候選_V5.20.0.md`.
- Updated `database/customer_facing_travel_plan.yml`, `docs/15_顧客版資料/旅遊規劃三表.md`, root `index.md`, and `docs/index.md` to mark Day 1 dinner as “candidate list created”.
- Updated README with the Day 1 dinner candidate list.

### Candidate restaurants added

- お好み焼 きじ 梅田スカイビル店 / Okonomiyaki Kiji Umeda Sky Building
- 千房 梅田周邊店 / Chibo Umeda-area branch
- ねぎ焼やまもと 梅田エスト店 / Negiyaki Yamamoto Umeda EST
- グリル ロン ホワイティうめだ店 / Grill Ron Whity Umeda
- 串かつだるま ルクア大阪店 / Kushikatsu Daruma LUCUA Osaka
- はなだこ / Hanadako
- つるとんたん TOP CHEFS / Tsurutontan TOP CHEFS

### Reason

The user asked to search for dinner references near Pokémon Center OSAKA in Umeda with good reviews. Because live Google Maps / Tabelog scores could not be reliably captured through the available tool, the restaurants were recorded as candidate references and all review scores, 2027 hours, prices, reservation rules, and queue risks are marked as needing reconfirmation.

### Impact

- Day 1 dinner is no longer an empty TODO; it now has a structured candidate list.
- No candidate has been promoted to the formal itinerary.
- The final Day 1 dinner decision still requires user confirmation.

### Follow-up required

- Reconfirm Google Maps ratings and Tabelog scores for all candidates.
- Reconfirm 2027/11/17 business hours, reservation availability, prices, and cancellation rules.
- Confirm walking time from Pokémon Center OSAKA to each restaurant.
- Choose one formal Day 1 dinner candidate only after user confirmation.
