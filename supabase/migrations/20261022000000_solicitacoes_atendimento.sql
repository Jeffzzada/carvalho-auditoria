-- Solicitações enviadas pelo assistente de Atendimento.
-- RLS ativada SEM políticas para anon/authenticated: ninguém lê ou grava pelo navegador.
-- Somente o servidor do site (chave service_role) insere; a equipe consulta pelo painel do Supabase.
create table if not exists public.solicitacoes_atendimento (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  client_submission_id text not null unique,
  nome text not null,
  organizacao text not null,
  email text not null,
  telefone text not null,
  origem_contato text,
  servicos_interesse text[] not null default '{}',
  tipo_atendimento text,
  area_sugerida text,
  consentimento_privacidade boolean not null,
  consentimento_marketing boolean not null default false,
  resumo text not null,
  respostas jsonb not null
);

alter table public.solicitacoes_atendimento enable row level security;
alter table public.solicitacoes_atendimento force row level security;

revoke all on public.solicitacoes_atendimento from anon, authenticated;
