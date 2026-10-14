import {_ as e, g as t, h as n, i as r, n as i, p as a, r as o, s, t as c} from "./index-MioFDFBY.js";
var l = a(`clock`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
}], [`path`, {
    d: `M12 6v6l4 2`,
    key: `mmk7yg`
}]])
  , u = a(`mail`, [[`path`, {
    d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,
    key: `132q7q`
}], [`rect`, {
    x: `2`,
    y: `4`,
    width: `20`,
    height: `16`,
    rx: `2`,
    key: `izxlao`
}]])
  , d = a(`map-pin`, [[`path`, {
    d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
    key: `1r0f0z`
}], [`circle`, {
    cx: `12`,
    cy: `10`,
    r: `3`,
    key: `ilqhr7`
}]])
  , f = e(t())
  , p = n()
  , m = c({
    nome: i().trim().min(2, `Informe seu nome`).max(100),
    organizacao: i().trim().min(2, `Informe a organização`).max(120),
    contato: i().trim().max(120).optional(),
    assunto: i().trim().min(3, `Informe o assunto`).max(120),
    mensagem: i().trim().min(10, `Descreva brevemente sua necessidade`).max(1e3)
});
function h() {
    let[e,t] = (0,
    f.useState)({})
      , [n,i] = (0,
    f.useState)(!1);
    function a(e) {
        e.preventDefault();
        let n = Object.fromEntries(new FormData(e.currentTarget))
          , r = m.safeParse(n);
        if (!r.success) {
            let e = {};
            r.error.issues.forEach(t => e[t.path[0]] = t.message),
            t(e),
            i(!1);
            return
        }
        t({});
        let a = r.data
          , o = `Olá! Acessei o site da Carvalho Soluções em Auditoria.\n\nNome: ${a.nome}\nOrganização: ${a.organizacao}${a.contato ? `\nContato: ${a.contato}` : ``}\nAssunto: ${a.assunto}\n\n${a.mensagem}`;
        window.open(s(o), `_blank`, `noopener,noreferrer`),
        i(!0)
    }
    let c = (t, n, r={}) => (0,
    p.jsxs)(`div`, {
        children: [(0,
        p.jsxs)(`label`, {
            htmlFor: t,
            className: `mb-1.5 block text-sm font-medium text-foreground`,
            children: [n, ` `, r.optional && (0,
            p.jsx)(`span`, {
                className: `font-normal text-muted-foreground`,
                children: `(opcional)`
            })]
        }), r.textarea ? (0,
        p.jsx)(`textarea`, {
            id: t,
            name: t,
            rows: 5,
            maxLength: 1e3,
            className: `field`,
            "aria-invalid": !!e[t],
            "aria-describedby": `${t}-err`
        }) : (0,
        p.jsx)(`input`, {
            id: t,
            name: t,
            type: r.type ?? `text`,
            maxLength: 120,
            className: `field`,
            "aria-invalid": !!e[t],
            "aria-describedby": `${t}-err`
        }), e[t] && (0,
        p.jsx)(`p`, {
            id: `${t}-err`,
            className: `mt-1 text-sm text-destructive`,
            children: e[t]
        })]
    })
      , h = [{
        icon: u,
        label: `E-mail`,
        value: r
    }, {
        icon: d,
        label: `Área de atendimento`,
        value: ``
    }, {
        icon: l,
        label: `Horário comercial`,
        value: ``
    }].filter(e => e.value);
    return (0,
    p.jsx)(`section`, {
        className: `section`,
        children: (0,
        p.jsxs)(`div`, {
            className: `container-site grid gap-12 lg:grid-cols-2 lg:gap-20`,
            children: [(0,
            p.jsxs)(`div`, {
                children: [(0,
                p.jsx)(`p`, {
                    className: `eyebrow`,
                    children: `Contato`
                }), (0,
                p.jsx)(`h1`, {
                    className: `mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl`,
                    children: `Vamos conversar sobre a necessidade da sua organização?`
                }), (0,
                p.jsx)(`p`, {
                    className: `mt-4 text-lg text-muted-foreground`,
                    children: `Entre em contato com a Carvalho Soluções em Auditoria para apresentar sua demanda e conhecer as possibilidades de atendimento.`
                }), (0,
                p.jsx)(`div`, {
                    className: `mt-8`,
                    children: (0,
                    p.jsx)(o, {
                        label: `Conversar pelo WhatsApp`,
                        className: `w-full sm:w-auto`
                    })
                }), h.length > 0 && (0,
                p.jsx)(`ul`, {
                    className: `mt-10 space-y-4`,
                    children: h.map(e => (0,
                    p.jsxs)(`li`, {
                        className: `flex gap-3`,
                        children: [(0,
                        p.jsx)(e.icon, {
                            className: `mt-0.5 h-5 w-5 text-primary`
                        }), (0,
                        p.jsxs)(`div`, {
                            children: [(0,
                            p.jsx)(`p`, {
                                className: `text-sm text-muted-foreground`,
                                children: e.label
                            }), (0,
                            p.jsx)(`p`, {
                                className: `font-medium text-foreground`,
                                children: e.value
                            })]
                        })]
                    }, e.label))
                })]
            }), (0,
            p.jsxs)(`form`, {
                onSubmit: a,
                noValidate: !0,
                className: `space-y-5 rounded-2xl bg-surface p-6 sm:p-10`,
                children: [(0,
                p.jsxs)(`div`, {
                    children: [(0,
                    p.jsx)(`h2`, {
                        className: `font-display text-xl font-semibold text-foreground`,
                        children: `Prefere descrever antes?`
                    }), (0,
                    p.jsx)(`p`, {
                        className: `mt-1 text-sm text-muted-foreground`,
                        children: `Preencha os campos e sua mensagem será aberta pronta no WhatsApp para envio.`
                    })]
                }), c(`nome`, `Nome`), c(`organizacao`, `Organização`), c(`contato`, `E-mail ou telefone`, {
                    optional: !0
                }), c(`assunto`, `Assunto`), c(`mensagem`, `Mensagem`, {
                    textarea: !0
                }), (0,
                p.jsx)(`button`, {
                    type: `submit`,
                    className: `btn btn-primary w-full`,
                    children: `Abrir mensagem no WhatsApp`
                }), n && (0,
                p.jsx)(`p`, {
                    role: `status`,
                    className: `rounded-md bg-accent p-3 text-sm text-accent-foreground`,
                    children: `Sua mensagem foi preparada no WhatsApp. Confirme o envio na conversa aberta.`
                })]
            })]
        })
    })
}
export {h as component};
