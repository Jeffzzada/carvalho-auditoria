# Roadmap

## Reformulação do site (concluído no código)
- [x] Menu: Início | Sobre nós | Serviços | Atendimento | Contato
- [x] 4 serviços (TI, Financeira e Contábil, Fiscal e Tributária, Ambiental) no lugar do serviço anterior, cada um com CTA para o Atendimento pré-selecionado
- [x] Sobre nós com Missão, Visão e 7 Valores (textos editáveis em `src/lib/content.ts`)
- [x] Assistente de Atendimento (`/atendimento`) com envio real via `/api/atendimento`
- [x] Aviso de Privacidade (`/privacidade`) e consentimento no envio
- [x] WhatsApp centralizado em `src/config/site.ts`
- [x] Validação "(min de caracteres: X)" no Contato e no Atendimento
- [x] FAQ com abertura suave; menus sem backdrop-filter; rotas com lazy loading; imagens WebP

## Depende de configuração (ver `.env.example` e `supabase/migrations`)
- [ ] Criar a tabela no Supabase (rodar a migration) e definir `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` no servidor
- [ ] Definir `RESEND_API_KEY`, `NOTIFY_EMAIL_TO` e `NOTIFY_EMAIL_FROM` para o aviso por e-mail à equipe
- [ ] Preencher em `src/config/site.ts`, quando confirmados: e-mail comercial, área de atendimento, horário, razão social e CNPJ
- [ ] Revisão jurídica do Aviso de Privacidade
