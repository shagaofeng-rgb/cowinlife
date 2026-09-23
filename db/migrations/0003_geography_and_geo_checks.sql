ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS region text;
CREATE INDEX IF NOT EXISTS analytics_events_country_time_idx ON analytics_events(country,event_time DESC);
CREATE INDEX IF NOT EXISTS geo_results_query_checked_idx ON geo_results(geo_query_id,checked_at DESC);
