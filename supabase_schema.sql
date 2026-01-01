-- Create the basic_infos table
create table public.basic_infos (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  hotel_name text not null,
  stars_count integer check (stars_count >= 1 and stars_count <= 5),
  services text[] default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Ensure each user only has one entry of basic info for now
  constraint unique_user_info unique (user_id)
);

-- Enable Row Level Security
alter table public.basic_infos enable row level security;

-- Create Policies
create policy "Users can view their own hotel info"
  on public.basic_infos for select
  using (auth.uid() = user_id);

create policy "Users can insert their own hotel info"
  on public.basic_infos for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own hotel info"
  on public.basic_infos for update
  using (auth.uid() = user_id);
