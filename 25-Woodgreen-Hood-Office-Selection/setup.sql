-- 25 Woodgreen · Hood office selection — one-time setup
-- Run this in the Supabase dashboard: SQL Editor → New query → paste → Run.

create table if not exists public.hood_office_selections (
  office_id  text primary key,          -- e.g. 'main:B3', 'basement:FR'
  selected   boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.hood_office_selections enable row level security;

-- The page uses the public (anon) key, so allow anon read/insert/update
-- on THIS table only. No delete.
create policy "anon can read selections"
  on public.hood_office_selections for select to anon using (true);

create policy "anon can add selections"
  on public.hood_office_selections for insert to anon with check (true);

create policy "anon can update selections"
  on public.hood_office_selections for update to anon using (true) with check (true);
