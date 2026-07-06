# CHANGELOG

## V5.13.0 - 2026-07-06

### Changed

- Added a Day 3 candidate itinerary for 2027-11-19 focused on relaxed pacing, food, photo spots, Pokemon, Conan atmosphere, and anime.
- Recorded the user preference that the plan does not need to follow KKday sample routes and should prioritize a relaxed route that matches personal interests.
- Added KKday product #133661 as the candidate 10-hour private charter for Day 3.
- Added candidate route: InterContinental Osaka, Osaka Kizu Market brunch, Pokemon Center KYOTO, Kyoto International Manga Museum, Higashiyama/Gion photo walk, and Shinsaibashi/Dotonbori or hotel drop-off.
- Added interest-based attraction candidates: Osaka Kizu Market, Pokemon Center KYOTO, Kyoto International Manga Museum, Higashiyama/Gion photo walk, Kiyomizu/Ninenzaka/Sannenzaka optional swap, Fushimi Inari front-section optional swap, Pokemon Center OSAKA DX, and Dotonbori/Shinsaibashi evening photo walk.
- Updated project, itinerary, transportation, budget, attractions, customer-facing tables, README, AI context, decisions, watchlist, docs/01 itinerary planning, and version record.
- Added `docs/01_行程規劃/2027-11-19_Day3_木津市場京都寶可夢動漫候補包車_V5.13.0.md`.
- Added `docs/13_版本與更新/2026-07-06_V5.13.0_Day3木津市場京都寶可夢動漫候補包車.md`.

### Reason

The user clarified that Day 3 does not need to follow KKday's suggested routes and should prioritize an easy pace that matches interests: food, photo spots, Pokemon, Conan, and anime.

### Follow-up required

- Confirm whether the Day 3 candidate should become the formal itinerary.
- Confirm KKday #133661 2027-11-19 availability, price, vehicle type, pickup/drop-off points, custom route approval, and overtime risk.
- Confirm Osaka Kizu Market 2027-11-19 market calendar and brunch candidates.
- Confirm 2027 business hours, closures, and event calendars for Pokemon Center KYOTO, Kyoto International Manga Museum, Pokemon Center OSAKA DX, and any Detective Conan Osaka/Kyoto events.

## V5.12.0 - 2026-07-06

### Changed

- Added `database/customer_facing_travel_plan.yml` as the source data for the customer-facing travel plan.
- Added `docs/15_顧客版資料/旅遊規劃三表.md` as the customer-readable travel planning document.
- Updated root `index.md` and `docs/index.md` so GitHub Pages is now based on the three customer-facing tables: itinerary, pre-trip TODO list, and budget summary.
- Added fixed customer-facing table rules to README, AI_CONTEXT, PROJECT_RULE, and DECISIONS.
- Added `docs/13_版本與更新/2026-07-06_V5.12.0_顧客版三表.md`.

### Reason

The user requested a customer-facing travel planning table set in Traditional Chinese, and then clarified that GitHub Pages should primarily follow these three tables.

### Follow-up required

- Confirm official 2027 flight schedule and fare for EVA Air BR178 / BR129.
- Confirm InterContinental Osaka booking amount, room type, breakfast, lounge access, and accommodation tax.
- Confirm KKday #129909 and #536220 actual 2027/11 route prices and vehicle choices.
- Confirm USJ 2027 tickets, Express Pass, VIP options, timed entry rules, and events after official release.
- Confirm restaurant candidates, reservation windows, deposits, and cancellation rules.
- Confirm shopping budget, exchange rate, credit card reward assumptions, and contingency budget.

## V5.11.0 - 2026-07-06

### Changed

- Added KKday product #536220 as the selected candidate product for InterContinental Osaka and USJ round-trip transfer.
- Recorded visible starting price TWD 600, 4.8 rating, 400+ sold, e-voucher, 05:00-22:00 service time, Osaka city / Kansai Airport / USJ service area, 30-minute waiting time, JPY 3,000/30-minute overtime fee, JPY 300/km extra mileage fee, and 20 km point-to-point limit.
- Recommended luxury 7-seater for two travelers; added comfort 10-seater as backup.
- Updated project, transportation, reservations, budget, ticket-platform database, ticket-platform docs, README, AI context, watchlist, reservation schedule, risk register, and version record.
- Added `docs/13_版本與更新/2026-07-06_V5.11.0_KKday飯店USJ接送商品536220.md`.

### Reason

The user provided the exact KKday product URL for the hotel-USJ transfer and asked to update the project.

### Follow-up required

- Confirm whether 2027/11/18 is selectable on KKday product #536220.
- Confirm actual route prices for InterContinental Osaka to USJ and USJ to InterContinental Osaka after selecting date, route, and vehicle type.
- Confirm USJ return pickup point after 2027 USJ opening hours and Express Pass plan are known.

## V5.10.0 - 2026-07-06

### Changed

- Added KKday product #129909 as the selected candidate product for KIX and InterContinental Osaka round-trip transfer.
- Recommended luxury 7-seater for two travelers if checked luggage is 3 pieces or fewer.
- Added comfort 10-seater as backup if checked luggage exceeds 3 pieces or more space is preferred.
- Added product rules: 4.9 rating, 20K+ sold, 3-day free cancellation, e-voucher, 90-minute airport arrival wait, 30-minute departure wait, JPY 2,000 night surcharge, and JPY 5,000/hour overtime for 7-14 seater.
- Updated project, transportation, reservations, budget, ticket-platform docs, README, and version record.

### Reason

The user provided the exact KKday product URL and asked to search the airport transfer product and price, then update the project.

### Follow-up required

- KKday public page text did not expose the base route price. Confirm price manually after selecting date, route, and vehicle type in KKday.
- Confirm whether actual luggage count fits the 7-seater limit.
- Recheck availability when 2027/11/17 and 2027/11/21 become selectable.

## V5.9.0 - 2026-07-06

### Changed

- Added selected outbound flight: EVA Air BR178 from TPE to KIX.
- Added selected return flight: EVA Air BR129 from KIX to TPE.
- Added KKday as the selected transfer direction for both InterContinental Osaka to USJ and USJ to InterContinental Osaka.
- Updated transportation, reservations, itinerary, budget, ticket-platform planning, roadmap, watchlist, reservation schedule, risk register, README, AI context, project rules, and agent assumptions.
- Added `docs/13_版本與更新/2026-07-06_V5.9.0_航班與USJ接送.md`.

### Reason

The user provided new planning decisions: outbound BR178, return BR129, and KKday transfer for hotel-USJ round trip.

### Follow-up required

- Confirm EVA Air official 2027-11 BR178 / BR129 schedule, fare, baggage, seat selection, and ticket rules.
- Confirm KKday hotel-USJ transfer product, price, pickup time, pickup point, return pickup point, vehicle type, and booking rules.
- `scripts/daily_maintenance.py` still requires follow-up from Codex or local git tooling.
