
create table if not exists shops (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  region text check (region in ('seoul','gyeonggi','incheon')) not null,
  city text not null,
  type text check (type in ('thai','aroma','healing')) not null,
  price_min integer not null default 60000,
  rating numeric,
  thumbnail_url text,
  verified boolean default false,
  approved boolean default false,
  phone text,
  address text,
  description text,
  created_by uuid default auth.uid(),
  created_at timestamptz default now()
);
alter table shops enable row level security;
create policy "Public read approved" on shops for select using (approved=true);
create policy "Owner insert" on shops for insert with check (auth.uid() = created_by);
create policy "Owner update own" on shops for update using (auth.uid() = created_by);
