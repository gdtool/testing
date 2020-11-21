/*! unmark Internal - https://unmark.it - 2020-10-06 - https://unmark.it/ */

var Hogan = {};
!function(t) {
    t.Template = function(t, e, n, i) {
        this.r = t || this.r,
        this.c = n,
        this.options = i,
        this.text = e || "",
        this.buf = ""
    }
    ,
    t.Template.prototype = {
        r: function(t, e, n) {
            return ""
        },
        v: function(t) {
            return t = a(t),
            s.test(t) ? t.replace(e, "&amp;").replace(n, "&lt;").replace(i, "&gt;").replace(r, "&#39;").replace(o, "&quot;") : t
        },
        t: a,
        render: function(t, e, n) {
            return this.ri([t], e || {}, n)
        },
        ri: function(t, e, n) {
            return this.r(t, e, n)
        },
        rp: function(t, e, n, i) {
            var r = n[t];
            return r ? (this.c && "string" == typeof r && (r = this.c.compile(r, this.options)),
            r.ri(e, n, i)) : ""
        },
        rs: function(t, e, n) {
            var i = t[t.length - 1];
            if (l(i))
                for (var r = 0; r < i.length; r++)
                    t.push(i[r]),
                    n(t, e, this),
                    t.pop();
            else
                n(t, e, this)
        },
        s: function(t, e, n, i, r, o, s) {
            var a;
            return (!l(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ls(t, e, n, i, r, o, s)),
            a = "" === t || !!t,
            !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]),
            a)
        },
        d: function(t, e, n, i) {
            var r = t.split(".")
              , o = this.f(r[0], e, n, i)
              , s = null;
            if ("." === t && l(e[e.length - 2]))
                return e[e.length - 1];
            for (var a = 1; a < r.length; a++)
                o = o && "object" == typeof o && r[a]in o ? (s = o)[r[a]] : "";
            return !(i && !o) && (i || "function" != typeof o || (e.push(s),
            o = this.lv(o, e, n),
            e.pop()),
            o)
        },
        f: function(t, e, n, i) {
            for (var r = !1, o = null, s = !1, a = e.length - 1; 0 <= a; a--)
                if ((o = e[a]) && "object" == typeof o && t in o) {
                    r = o[t],
                    s = !0;
                    break
                }
            return s ? (i || "function" != typeof r || (r = this.lv(r, e, n)),
            r) : !i && ""
        },
        ho: function(t, e, n, i, r) {
            var o = this.c
              , s = this.options;
            return s.delimiters = r,
            i = null == (i = t.call(e, i)) ? String(i) : i.toString(),
            this.b(o.compile(i, s).render(e, n)),
            !1
        },
        b: function(t) {
            this.buf += t
        },
        fl: function() {
            var t = this.buf;
            return this.buf = "",
            t
        },
        ls: function(t, e, n, i, r, o, s) {
            var a, l = e[e.length - 1];
            if (!i && this.c && 0 < t.length)
                return this.ho(t, l, n, this.text.substring(r, o), s);
            if ("function" == typeof (a = t.call(l))) {
                if (i)
                    return !0;
                if (this.c)
                    return this.ho(a, l, n, this.text.substring(r, o), s)
            }
            return a
        },
        lv: function(t, e, n) {
            var i = e[e.length - 1]
              , r = t.call(i);
            return "function" == typeof r && (r = a(r.call(i)),
            this.c && ~r.indexOf("{{")) ? this.c.compile(r, this.options).render(i, n) : a(r)
        }
    };
    var e = /&/g
      , n = /</g
      , i = />/g
      , r = /\'/g
      , o = /\"/g
      , s = /[&<>\"\']/;
    function a(t) {
        return String(null == t ? "" : t)
    }
    var l = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}("undefined" != typeof exports ? exports : Hogan),
function(r) {
    var b = /\S/
      , e = /\"/g
      , n = /\n/g
      , i = /\r/g
      , o = /\\/g
      , x = {
        "#": 1,
        "^": 2,
        "/": 3,
        "!": 4,
        ">": 5,
        "<": 6,
        "=": 7,
        _v: 8,
        "{": 9,
        "&": 10
    };
    function O(t) {
        "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
    }
    function C(t) {
        return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
    }
    function $(t, e, n) {
        if (e.charAt(n) == t.charAt(0)) {
            for (var i = 1, r = t.length; i < r; i++)
                if (e.charAt(n + i) != t.charAt(i))
                    return;
            return 1
        }
    }
    function l(t, e) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n].o == t.n)
                return t.tag = "#"
    }
    function c(t, e, n) {
        for (var i = 0, r = n.length; i < r; i++)
            if (n[i].c == t && n[i].o == e)
                return 1
    }
    function v(t) {
        return t.replace(o, "\\\\").replace(e, '\\"').replace(n, "\\n").replace(i, "\\r")
    }
    function m(t) {
        return ~t.indexOf(".") ? "d" : "f"
    }
    function y(t) {
        for (var e, n, i, r, o, s, a, l, c, p, u, d = "", h = 0, f = t.length; h < f; h++) {
            var g = t[h].tag;
            "#" == g ? d += (s = t[h].nodes,
            a = t[h].n,
            l = m(t[h].n),
            c = t[h].i,
            p = t[h].end,
            u = t[h].otag + " " + t[h].ctag,
            "if(_.s(_." + l + '("' + v(a) + '",c,p,1),c,p,0,' + c + "," + p + ',"' + u + '")){_.rs(c,p,function(c,p,_){' + y(s) + "});c.pop();}") : "^" == g ? d += (r = t[h].nodes,
            o = t[h].n,
            "if(!_.s(_." + m(t[h].n) + '("' + v(o) + '",c,p,1),c,p,1,0,0,"")){' + y(r) + "};") : "<" == g || ">" == g ? d += '_.b(_.rp("' + v((i = t[h]).n) + '",c,p,"' + (i.indent || "") + '"));' : "{" == g || "&" == g ? d += (n = t[h].n,
            "_.b(_.t(_." + m(t[h].n) + '("' + v(n) + '",c,p,0)));') : "\n" == g ? d += w('"\\n"' + (t.length - 1 == h ? "" : " + i")) : "_v" == g ? d += (e = t[h].n,
            "_.b(_.v(_." + m(t[h].n) + '("' + v(e) + '",c,p,0)));') : void 0 === g && (d += w('"' + v(t[h]) + '"'))
        }
        return d
    }
    function w(t) {
        return "_.b(" + t + ");"
    }
    r.scan = function(t, e) {
        var n, i, r, o, s, a = t.length, l = 0, c = null, p = null, u = "", d = [], h = !1, f = 0, g = 0, v = "{{", m = "}}";
        function y() {
            0 < u.length && (d.push(new String(u)),
            u = "")
        }
        function w(t, e) {
            if (y(),
            t && function() {
                for (var t = !0, e = g; e < d.length; e++)
                    if (!(t = d[e].tag && x[d[e].tag] < x._v || !d[e].tag && null === d[e].match(b)))
                        return;
                return t
            }())
                for (var n, i = g; i < d.length; i++)
                    d[i].tag || ((n = d[i + 1]) && ">" == n.tag && (n.indent = d[i].toString()),
                    d.splice(i, 1));
            else
                e || d.push({
                    tag: "\n"
                });
            h = !1,
            g = d.length
        }
        for (e && (e = e.split(" "),
        v = e[0],
        m = e[1]),
        f = 0; f < a; f++)
            0 == l ? $(v, t, f) ? (--f,
            y(),
            l = 1) : "\n" == t.charAt(f) ? w(h) : u += t.charAt(f) : 1 == l ? (f += v.length - 1,
            l = "=" == (c = (p = x[t.charAt(f + 1)]) ? t.charAt(f + 1) : "_v") ? (i = f,
            0,
            r = "=" + m,
            o = (n = t).indexOf(r, i),
            s = C(n.substring(n.indexOf("=", i) + 1, o)).split(" "),
            v = s[0],
            m = s[1],
            f = o + r.length - 1,
            0) : (p && f++,
            2),
            h = f) : $(m, t, f) ? (d.push({
                tag: c,
                n: C(u),
                otag: v,
                ctag: m,
                i: "/" == c ? h - m.length : f + v.length
            }),
            u = "",
            f += m.length - 1,
            l = 0,
            "{" == c && ("}}" == m ? f++ : O(d[d.length - 1]))) : u += t.charAt(f);
        return w(h, !0),
        d
    }
    ,
    r.generate = function(t, e, n) {
        var i = 'var _=this;_.b(i=i||"");' + y(t) + "return _.fl();";
        return n.asString ? "function(c,p,i){" + i + ";}" : new r.Template(new Function("c","p","i",i),e,r,n)
    }
    ,
    r.parse = function(t, e, n) {
        return function t(e, n, i, r) {
            for (var o = [], s = null, a = null; 0 < e.length; )
                if ("#" == (a = e.shift()).tag || "^" == a.tag || l(a, r))
                    i.push(a),
                    a.nodes = t(e, a.tag, i, r),
                    o.push(a);
                else {
                    if ("/" == a.tag) {
                        if (0 === i.length)
                            throw new Error("Closing tag without opener: /" + a.n);
                        if (s = i.pop(),
                        a.n != s.n && !c(a.n, s.n, r))
                            throw new Error("Nesting error: " + s.n + " vs. " + a.n);
                        return s.end = a.i,
                        o
                    }
                    o.push(a)
                }
            if (0 < i.length)
                throw new Error("missing closing tag: " + i.pop().n);
            return o
        }(t, 0, [], (n = n || {}).sectionTags || [])
    }
    ,
    r.cache = {},
    r.compile = function(t, e) {
        var n = t + "||" + !!(e = e || {}).asString
          , i = this.cache[n];
        return i || (i = this.generate(this.parse(this.scan(t, e.delimiters), t, e), t, e),
        this.cache[n] = i)
    }
}("undefined" != typeof exports ? exports : Hogan),
function(t, e) {
    "function" == typeof define && define.amd ? define("sifter", e) : "object" == typeof exports ? module.exports = e() : t.Sifter = e()
}(this, function() {
    function t(t, e) {
        this.items = t,
        this.settings = e || {
            diacritics: !0
        }
    }
    t.prototype.tokenize = function(t) {
        if (!(t = a(String(t || "").toLowerCase())) || !t.length)
            return [];
        var e, n, i, r, o = [], s = t.split(/ +/);
        for (e = 0,
        n = s.length; e < n; e++) {
            if (i = l(s[e]),
            this.settings.diacritics)
                for (r in c)
                    c.hasOwnProperty(r) && (i = i.replace(new RegExp(r,"g"), c[r]));
            o.push({
                string: s[e],
                regex: new RegExp(i,"i")
            })
        }
        return o
    }
    ,
    t.prototype.iterator = function(t, e) {
        (s(t) ? Array.prototype.forEach || function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                t(this[e], e, this)
        }
        : function(t) {
            for (var e in this)
                this.hasOwnProperty(e) && t(this[e], e, this)
        }
        ).apply(t, [e])
    }
    ,
    t.prototype.getScoreFunction = function(t, e) {
        var r, o, s, a;
        t = this.prepareSearch(t, e),
        o = t.tokens,
        r = t.options.fields,
        s = o.length,
        a = t.options.nesting;
        function l(t, e) {
            var n, i;
            return t ? -1 === (i = (t = String(t || "")).search(e.regex)) ? 0 : (n = e.string.length / t.length,
            0 === i && (n += .5),
            n) : 0
        }
        var c, p = (c = r.length) ? 1 === c ? function(t, e) {
            return l(f(e, r[0], a), t)
        }
        : function(t, e) {
            for (var n = 0, i = 0; n < c; n++)
                i += l(f(e, r[n], a), t);
            return i / c
        }
        : function() {
            return 0
        }
        ;
        return s ? 1 === s ? function(t) {
            return p(o[0], t)
        }
        : "and" === t.options.conjunction ? function(t) {
            for (var e, n = 0, i = 0; n < s; n++) {
                if ((e = p(o[n], t)) <= 0)
                    return 0;
                i += e
            }
            return i / s
        }
        : function(t) {
            for (var e = 0, n = 0; e < s; e++)
                n += p(o[e], t);
            return n / s
        }
        : function() {
            return 0
        }
    }
    ,
    t.prototype.getSortFunction = function(t, n) {
        var e, i, r, o, s, a, l, c, p, u, d;
        if (d = !(t = (r = this).prepareSearch(t, n)).query && n.sort_empty || n.sort,
        p = function(t, e) {
            return "$score" === t ? e.score : f(r.items[e.id], t, n.nesting)
        }
        ,
        s = [],
        d)
            for (e = 0,
            i = d.length; e < i; e++)
                !t.query && "$score" === d[e].field || s.push(d[e]);
        if (t.query) {
            for (u = !0,
            e = 0,
            i = s.length; e < i; e++)
                if ("$score" === s[e].field) {
                    u = !1;
                    break
                }
            u && s.unshift({
                field: "$score",
                direction: "desc"
            })
        } else
            for (e = 0,
            i = s.length; e < i; e++)
                if ("$score" === s[e].field) {
                    s.splice(e, 1);
                    break
                }
        for (c = [],
        e = 0,
        i = s.length; e < i; e++)
            c.push("desc" === s[e].direction ? -1 : 1);
        return (a = s.length) ? 1 === a ? (o = s[0].field,
        l = c[0],
        function(t, e) {
            return l * h(p(o, t), p(o, e))
        }
        ) : function(t, e) {
            var n, i, r;
            for (n = 0; n < a; n++)
                if (r = s[n].field,
                i = c[n] * h(p(r, t), p(r, e)))
                    return i;
            return 0
        }
        : null
    }
    ,
    t.prototype.prepareSearch = function(t, e) {
        if ("object" == typeof t)
            return t;
        var n = (e = o({}, e)).fields
          , i = e.sort
          , r = e.sort_empty;
        return n && !s(n) && (e.fields = [n]),
        i && !s(i) && (e.sort = [i]),
        r && !s(r) && (e.sort_empty = [r]),
        {
            options: e,
            query: String(t || "").toLowerCase(),
            tokens: this.tokenize(t),
            total: 0,
            items: []
        }
    }
    ,
    t.prototype.search = function(t, n) {
        var i, r, e, o, s = this;
        return r = this.prepareSearch(t, n),
        n = r.options,
        t = r.query,
        o = n.score || s.getScoreFunction(r),
        t.length ? s.iterator(s.items, function(t, e) {
            i = o(t),
            (!1 === n.filter || 0 < i) && r.items.push({
                score: i,
                id: e
            })
        }) : s.iterator(s.items, function(t, e) {
            r.items.push({
                score: 1,
                id: e
            })
        }),
        (e = s.getSortFunction(r, n)) && r.items.sort(e),
        r.total = r.items.length,
        "number" == typeof n.limit && (r.items = r.items.slice(0, n.limit)),
        r
    }
    ;
    var h = function(t, e) {
        return "number" == typeof t && "number" == typeof e || (t = n(String(t || "")),
        e = n(String(e || ""))),
        e < t ? 1 : t < e ? -1 : 0
    }
      , o = function(t, e) {
        var n, i, r, o;
        for (n = 1,
        i = arguments.length; n < i; n++)
            if (o = arguments[n])
                for (r in o)
                    o.hasOwnProperty(r) && (t[r] = o[r]);
        return t
    }
      , f = function(t, e, n) {
        if (t && e) {
            if (!n)
                return t[e];
            for (var i = e.split("."); i.length && (t = t[i.shift()]); )
                ;
            return t
        }
    }
      , a = function(t) {
        return (t + "").replace(/^\s+|\s+$|/g, "")
    }
      , l = function(t) {
        return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
      , s = Array.isArray || "undefined" != typeof $ && $.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
      , c = {
        a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
        b: "[b␢βΒB฿𐌁ᛒ]",
        c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
        d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
        e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
        f: "[fƑƒḞḟ]",
        g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
        h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
        i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
        j: "[jȷĴĵɈɉʝɟʲ]",
        k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
        l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
        n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
        o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
        p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
        q: "[qꝖꝗʠɊɋꝘꝙq̃]",
        r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
        s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
        t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
        u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
        v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
        w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
        x: "[xẌẍẊẋχ]",
        y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
        z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
    }
      , n = function() {
        var t, e, n, i, r = "", o = {};
        for (n in c)
            if (c.hasOwnProperty(n))
                for (r += i = c[n].substring(2, c[n].length - 1),
                t = 0,
                e = i.length; t < e; t++)
                    o[i.charAt(t)] = n;
        var s = new RegExp("[" + r + "]","g");
        return function(t) {
            return t.replace(s, function(t) {
                return o[t]
            }).toLowerCase()
        }
    }();
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("microplugin", e) : "object" == typeof exports ? module.exports = e() : t.MicroPlugin = e()
}(this, function() {
    var t = {
        mixin: function(i) {
            i.plugins = {},
            i.prototype.initializePlugins = function(t) {
                var e, n, i, r = [];
                if (this.plugins = {
                    names: [],
                    settings: {},
                    requested: {},
                    loaded: {}
                },
                o.isArray(t))
                    for (e = 0,
                    n = t.length; e < n; e++)
                        "string" == typeof t[e] ? r.push(t[e]) : (this.plugins.settings[t[e].name] = t[e].options,
                        r.push(t[e].name));
                else if (t)
                    for (i in t)
                        t.hasOwnProperty(i) && (this.plugins.settings[i] = t[i],
                        r.push(i));
                for (; r.length; )
                    this.require(r.shift())
            }
            ,
            i.prototype.loadPlugin = function(t) {
                var e = this.plugins
                  , n = i.plugins[t];
                if (!i.plugins.hasOwnProperty(t))
                    throw new Error('Unable to find "' + t + '" plugin');
                e.requested[t] = !0,
                e.loaded[t] = n.fn.apply(this, [this.plugins.settings[t] || {}]),
                e.names.push(t)
            }
            ,
            i.prototype.require = function(t) {
                var e = this.plugins;
                if (!this.plugins.loaded.hasOwnProperty(t)) {
                    if (e.requested[t])
                        throw new Error('Plugin has circular dependency ("' + t + '")');
                    this.loadPlugin(t)
                }
                return e.loaded[t]
            }
            ,
            i.define = function(t, e) {
                i.plugins[t] = {
                    name: t,
                    fn: e
                }
            }
        }
    }
      , o = {
        isArray: Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    };
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("sifter"), require("microplugin")) : t.Selectize = e(t.jQuery, t.Sifter, t.MicroPlugin)
}(this, function($, u, t) {
    "use strict";
    function S(t, e) {
        if ("string" != typeof e || e.length) {
            var l = "string" == typeof e ? new RegExp(e,"i") : e
              , c = function(t) {
                var e = 0;
                if (3 === t.nodeType) {
                    var n = t.data.search(l);
                    if (0 <= n && 0 < t.data.length) {
                        var i = t.data.match(l)
                          , r = document.createElement("span");
                        r.className = "highlight";
                        var o = t.splitText(n)
                          , s = (o.splitText(i[0].length),
                        o.cloneNode(!0));
                        r.appendChild(s),
                        o.parentNode.replaceChild(r, o),
                        e = 1
                    }
                } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && ("highlight" !== t.className || "SPAN" !== t.tagName))
                    for (var a = 0; a < t.childNodes.length; ++a)
                        a += c(t.childNodes[a]);
                return e
            };
            return t.each(function() {
                c(this)
            })
        }
    }
    $.fn.removeHighlight = function() {
        return this.find("span.highlight").each(function() {
            this.parentNode.firstChild.nodeName;
            var t = this.parentNode;
            t.replaceChild(this.firstChild, this),
            t.normalize()
        }).end()
    }
    ;
    function i() {}
    i.prototype = {
        on: function(t, e) {
            this._events = this._events || {},
            this._events[t] = this._events[t] || [],
            this._events[t].push(e)
        },
        off: function(t, e) {
            var n = arguments.length;
            return 0 === n ? delete this._events : 1 === n ? delete this._events[t] : (this._events = this._events || {},
            void (t in this._events != 0 && this._events[t].splice(this._events[t].indexOf(e), 1)))
        },
        trigger: function(t) {
            if (this._events = this._events || {},
            t in this._events != 0)
                for (var e = 0; e < this._events[t].length; e++)
                    this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    },
    i.mixin = function(t) {
        for (var e = ["on", "off", "trigger"], n = 0; n < e.length; n++)
            t.prototype[e[n]] = i.prototype[e[n]]
    }
    ;
    function c(t) {
        return void 0 !== t
    }
    function _(t) {
        return null == t ? null : "boolean" == typeof t ? t ? "1" : "0" : t + ""
    }
    function a(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    function n(e, n, t) {
        var i, r = e.trigger, o = {};
        for (i in e.trigger = function() {
            var t = arguments[0];
            if (-1 === n.indexOf(t))
                return r.apply(e, arguments);
            o[t] = arguments
        }
        ,
        t.apply(e, []),
        e.trigger = r,
        o)
            o.hasOwnProperty(i) && r.apply(e, o[i])
    }
    function f(t) {
        var e = {};
        if ("selectionStart"in t)
            e.start = t.selectionStart,
            e.length = t.selectionEnd - e.start;
        else if (document.selection) {
            t.focus();
            var n = document.selection.createRange()
              , i = document.selection.createRange().text.length;
            n.moveStart("character", -t.value.length),
            e.start = n.text.length - i,
            e.length = i
        }
        return e
    }
    function x(d) {
        function t(t, e) {
            var n, i, r, o, s, a, l, c, p, u;
            e = e || {},
            (t = t || window.event || {}).metaKey || t.altKey || !e.force && !1 === d.data("grow") || (n = d.val(),
            t.type && "keydown" === t.type.toLowerCase() && (r = 48 <= (i = t.keyCode) && i <= 57 || 65 <= i && i <= 90 || 96 <= i && i <= 111 || 186 <= i && i <= 222 || 32 === i,
            46 === i || 8 === i ? (c = f(d[0])).length ? n = n.substring(0, c.start) + n.substring(c.start + c.length) : 8 === i && c.start ? n = n.substring(0, c.start - 1) + n.substring(c.start + 1) : 46 === i && void 0 !== c.start && (n = n.substring(0, c.start) + n.substring(c.start + 1)) : r && (a = t.shiftKey,
            l = String.fromCharCode(t.keyCode),
            n += l = a ? l.toUpperCase() : l.toLowerCase())),
            o = d.attr("placeholder"),
            !n && o && (n = o),
            u = d,
            (s = ((p = n) ? (y.$testInput || (y.$testInput = $("<span />").css({
                position: "absolute",
                top: -99999,
                left: -99999,
                width: "auto",
                padding: 0,
                whiteSpace: "pre"
            }).appendTo("body")),
            y.$testInput.text(p),
            function(t, e, n) {
                var i, r, o = {};
                if (n)
                    for (i = 0,
                    r = n.length; i < r; i++)
                        o[n[i]] = t.css(n[i]);
                else
                    o = t.css();
                e.css(o)
            }(u, y.$testInput, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]),
            y.$testInput.width()) : 0) + 4) !== h && (h = s,
            d.width(s),
            d.triggerHandler("resize")))
        }
        var h = null;
        d.on("keydown keyup update blur", t),
        t()
    }
    var e, O = /Mac/.test(navigator.userAgent), C = O ? 91 : 17, I = O ? 18 : 17, j = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity, r = {
        before: function(t, e, n) {
            var i = t[e];
            t[e] = function() {
                return n.apply(t, arguments),
                i.apply(t, arguments)
            }
        },
        after: function(e, t, n) {
            var i = e[t];
            e[t] = function() {
                var t = i.apply(e, arguments);
                return n.apply(e, arguments),
                t
            }
        }
    }, y = function(t, e) {
        var n, i, r, o, s = this;
        (o = t[0]).selectize = s;
        var a, l, c, p = window.getComputedStyle && window.getComputedStyle(o, null);
        if (r = (r = p ? p.getPropertyValue("direction") : o.currentStyle && o.currentStyle.direction) || t.parents("[dir]:first").attr("dir") || "",
        $.extend(s, {
            order: 0,
            settings: e,
            $input: t,
            tabIndex: t.attr("tabindex") || "",
            tagType: "select" === o.tagName.toLowerCase() ? 1 : 2,
            rtl: /rtl/i.test(r),
            eventNS: ".selectize" + ++y.count,
            highlightedValue: null,
            isBlurring: !1,
            isOpen: !1,
            isDisabled: !1,
            isRequired: t.is("[required]"),
            isInvalid: !1,
            isLocked: !1,
            isFocused: !1,
            isInputHidden: !1,
            isSetup: !1,
            isShiftDown: !1,
            isCmdDown: !1,
            isCtrlDown: !1,
            ignoreFocus: !1,
            ignoreBlur: !1,
            ignoreHover: !1,
            hasOptions: !1,
            currentResults: null,
            lastValue: "",
            caretPos: 0,
            loading: 0,
            loadedSearches: {},
            $activeOption: null,
            $activeItems: [],
            optgroups: {},
            options: {},
            userOptions: {},
            items: [],
            renderCache: {},
            onSearchChange: null === e.loadThrottle ? s.onSearchChange : (a = s.onSearchChange,
            l = e.loadThrottle,
            function() {
                var t = this
                  , e = arguments;
                window.clearTimeout(c),
                c = window.setTimeout(function() {
                    a.apply(t, e)
                }, l)
            }
            )
        }),
        s.sifter = new u(this.options,{
            diacritics: e.diacritics
        }),
        s.settings.options) {
            for (n = 0,
            i = s.settings.options.length; n < i; n++)
                s.registerOption(s.settings.options[n]);
            delete s.settings.options
        }
        if (s.settings.optgroups) {
            for (n = 0,
            i = s.settings.optgroups.length; n < i; n++)
                s.registerOptionGroup(s.settings.optgroups[n]);
            delete s.settings.optgroups
        }
        s.settings.mode = s.settings.mode || (1 === s.settings.maxItems ? "single" : "multi"),
        "boolean" != typeof s.settings.hideSelected && (s.settings.hideSelected = "multi" === s.settings.mode),
        s.initializePlugins(s.settings.plugins),
        s.setupCallbacks(),
        s.setupTemplates(),
        s.setup()
    };
    return i.mixin(y),
    void 0 !== t ? t.mixin(y) : (e = (e = {
        explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
    }) || {},
    console.error("Selectize: Dependency MicroPlugin is missing"),
    e.explanation && (console.group && console.group(),
    console.error(e.explanation),
    console.group && console.groupEnd())),
    $.extend(y.prototype, {
        setup: function() {
            var t, e, n, i, r, o, s, a, l, c, p, u, d, h, f = this, g = f.settings, v = f.eventNS, m = $(window), y = $(document), w = f.$input;
            if (s = f.settings.mode,
            a = w.attr("class") || "",
            t = $("<div>").addClass(g.wrapperClass).addClass(a).addClass(s),
            e = $("<div>").addClass(g.inputClass).addClass("items").appendTo(t),
            n = $('<input type="text" autocomplete="off" />').appendTo(e).attr("tabindex", w.is(":disabled") ? "-1" : f.tabIndex),
            o = $(g.dropdownParent || t),
            i = $("<div>").addClass(g.dropdownClass).addClass(s).hide().appendTo(o),
            r = $("<div>").addClass(g.dropdownContentClass).appendTo(i),
            (c = w.attr("id")) && (n.attr("id", c + "-selectized"),
            $("label[for='" + c + "']").attr("for", c + "-selectized")),
            f.settings.copyClassesToDropdown && i.addClass(a),
            t.css({
                width: w[0].style.width
            }),
            f.plugins.names.length && (l = "plugin-" + f.plugins.names.join(" plugin-"),
            t.addClass(l),
            i.addClass(l)),
            (null === g.maxItems || 1 < g.maxItems) && 1 === f.tagType && w.attr("multiple", "multiple"),
            f.settings.placeholder && n.attr("placeholder", g.placeholder),
            !f.settings.splitOn && f.settings.delimiter) {
                var b = f.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                f.settings.splitOn = new RegExp("\\s*" + b + "+\\s*")
            }
            w.attr("autocorrect") && n.attr("autocorrect", w.attr("autocorrect")),
            w.attr("autocapitalize") && n.attr("autocapitalize", w.attr("autocapitalize")),
            n[0].type = w[0].type,
            f.$wrapper = t,
            f.$control = e,
            f.$control_input = n,
            f.$dropdown = i,
            f.$dropdown_content = r,
            i.on("mouseenter mousedown click", "[data-disabled]>[data-selectable]", function(t) {
                t.stopImmediatePropagation()
            }),
            i.on("mouseenter", "[data-selectable]", function() {
                return f.onOptionHover.apply(f, arguments)
            }),
            i.on("mousedown click", "[data-selectable]", function() {
                return f.onOptionSelect.apply(f, arguments)
            }),
            u = "mousedown",
            d = "*:not(input)",
            h = function() {
                return f.onItemSelect.apply(f, arguments)
            }
            ,
            (p = e).on(u, d, function(t) {
                for (var e = t.target; e && e.parentNode !== p[0]; )
                    e = e.parentNode;
                return t.currentTarget = e,
                h.apply(this, [t])
            }),
            x(n),
            e.on({
                mousedown: function() {
                    return f.onMouseDown.apply(f, arguments)
                },
                click: function() {
                    return f.onClick.apply(f, arguments)
                }
            }),
            n.on({
                mousedown: function(t) {
                    t.stopPropagation()
                },
                keydown: function() {
                    return f.onKeyDown.apply(f, arguments)
                },
                keyup: function() {
                    return f.onKeyUp.apply(f, arguments)
                },
                keypress: function() {
                    return f.onKeyPress.apply(f, arguments)
                },
                resize: function() {
                    f.positionDropdown.apply(f, [])
                },
                blur: function() {
                    return f.onBlur.apply(f, arguments)
                },
                focus: function() {
                    return f.ignoreBlur = !1,
                    f.onFocus.apply(f, arguments)
                },
                paste: function() {
                    return f.onPaste.apply(f, arguments)
                }
            }),
            y.on("keydown" + v, function(t) {
                f.isCmdDown = t[O ? "metaKey" : "ctrlKey"],
                f.isCtrlDown = t[O ? "altKey" : "ctrlKey"],
                f.isShiftDown = t.shiftKey
            }),
            y.on("keyup" + v, function(t) {
                t.keyCode === I && (f.isCtrlDown = !1),
                16 === t.keyCode && (f.isShiftDown = !1),
                t.keyCode === C && (f.isCmdDown = !1)
            }),
            y.on("mousedown" + v, function(t) {
                if (f.isFocused) {
                    if (t.target === f.$dropdown[0] || t.target.parentNode === f.$dropdown[0])
                        return !1;
                    f.$control.has(t.target).length || t.target === f.$control[0] || f.blur(t.target)
                }
            }),
            m.on(["scroll" + v, "resize" + v].join(" "), function() {
                f.isOpen && f.positionDropdown.apply(f, arguments)
            }),
            m.on("mousemove" + v, function() {
                f.ignoreHover = !1
            }),
            this.revertSettings = {
                $children: w.children().detach(),
                tabindex: w.attr("tabindex")
            },
            w.attr("tabindex", -1).hide().after(f.$wrapper),
            $.isArray(g.items) && (f.setValue(g.items),
            delete g.items),
            j && w.on("invalid" + v, function(t) {
                t.preventDefault(),
                f.isInvalid = !0,
                f.refreshState()
            }),
            f.updateOriginalInput(),
            f.refreshItems(),
            f.refreshState(),
            f.updatePlaceholder(),
            f.isSetup = !0,
            w.is(":disabled") && f.disable(),
            f.on("change", this.onChange),
            w.data("selectize", f),
            w.addClass("selectized"),
            f.trigger("initialize"),
            !0 === g.preload && f.onSearchChange("")
        },
        setupTemplates: function() {
            var n = this.settings.labelField
              , i = this.settings.optgroupLabelField
              , t = {
                optgroup: function(t) {
                    return '<div class="optgroup">' + t.html + "</div>"
                },
                optgroup_header: function(t, e) {
                    return '<div class="optgroup-header">' + e(t[i]) + "</div>"
                },
                option: function(t, e) {
                    return '<div class="option">' + e(t[n]) + "</div>"
                },
                item: function(t, e) {
                    return '<div class="item">' + e(t[n]) + "</div>"
                },
                option_create: function(t, e) {
                    return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>"
                }
            };
            this.settings.render = $.extend({}, t, this.settings.render)
        },
        setupCallbacks: function() {
            var t, e, n = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (t in n)
                n.hasOwnProperty(t) && (e = this.settings[n[t]]) && this.on(t, e)
        },
        onClick: function(t) {
            this.isFocused && this.isOpen || (this.focus(),
            t.preventDefault())
        },
        onMouseDown: function(t) {
            var e = this
              , n = t.isDefaultPrevented();
            if ($(t.target),
            e.isFocused) {
                if (t.target !== e.$control_input[0])
                    return "single" === e.settings.mode ? e.isOpen ? e.close() : e.open() : n || e.setActiveItem(null),
                    !1
            } else
                n || window.setTimeout(function() {
                    e.focus()
                }, 0)
        },
        onChange: function() {
            this.$input.trigger("change")
        },
        onPaste: function(t) {
            var r = this;
            r.isFull() || r.isInputHidden || r.isLocked ? t.preventDefault() : r.settings.splitOn && setTimeout(function() {
                var t = r.$control_input.val();
                if (t.match(r.settings.splitOn))
                    for (var e = $.trim(t).split(r.settings.splitOn), n = 0, i = e.length; n < i; n++)
                        r.createItem(e[n])
            }, 0)
        },
        onKeyPress: function(t) {
            if (this.isLocked)
                return t && t.preventDefault();
            var e = String.fromCharCode(t.keyCode || t.which);
            return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(),
            t.preventDefault(),
            !1) : void 0
        },
        onKeyDown: function(t) {
            var e = (t.target,
            this.$control_input[0],
            this);
            if (!e.isLocked) {
                switch (t.keyCode) {
                case 65:
                    if (e.isCmdDown)
                        return void e.selectAll();
                    break;
                case 27:
                    return void (e.isOpen && (t.preventDefault(),
                    t.stopPropagation(),
                    e.close()));
                case 78:
                    if (!t.ctrlKey || t.altKey)
                        break;
                case 40:
                    if (!e.isOpen && e.hasOptions)
                        e.open();
                    else if (e.$activeOption) {
                        e.ignoreHover = !0;
                        var n = e.getAdjacentOption(e.$activeOption, 1);
                        n.length && e.setActiveOption(n, !0, !0)
                    }
                    return void t.preventDefault();
                case 80:
                    if (!t.ctrlKey || t.altKey)
                        break;
                case 38:
                    if (e.$activeOption) {
                        e.ignoreHover = !0;
                        var i = e.getAdjacentOption(e.$activeOption, -1);
                        i.length && e.setActiveOption(i, !0, !0)
                    }
                    return void t.preventDefault();
                case 13:
                    return void (e.isOpen && e.$activeOption && (e.onOptionSelect({
                        currentTarget: e.$activeOption
                    }),
                    t.preventDefault()));
                case 37:
                    return void e.advanceSelection(-1, t);
                case 39:
                    return void e.advanceSelection(1, t);
                case 9:
                    return e.settings.selectOnTab && e.isOpen && e.$activeOption && (e.onOptionSelect({
                        currentTarget: e.$activeOption
                    }),
                    e.isFull() || t.preventDefault()),
                    void (e.settings.create && e.createItem() && t.preventDefault());
                case 8:
                case 46:
                    return void e.deleteSelection(t)
                }
                return !e.isFull() && !e.isInputHidden || (O ? t.metaKey : t.ctrlKey) ? void 0 : void t.preventDefault()
            }
            9 !== t.keyCode && t.preventDefault()
        },
        onKeyUp: function(t) {
            var e = this;
            if (e.isLocked)
                return t && t.preventDefault();
            var n = e.$control_input.val() || "";
            e.lastValue !== n && (e.lastValue = n,
            e.onSearchChange(n),
            e.refreshOptions(),
            e.trigger("type", n))
        },
        onSearchChange: function(e) {
            var n = this
              , i = n.settings.load;
            i && (n.loadedSearches.hasOwnProperty(e) || (n.loadedSearches[e] = !0,
            n.load(function(t) {
                i.apply(n, [e, t])
            })))
        },
        onFocus: function(t) {
            var e = this
              , n = e.isFocused;
            if (e.isDisabled)
                return e.blur(),
                t && t.preventDefault(),
                !1;
            e.ignoreFocus || (e.isFocused = !0,
            "focus" === e.settings.preload && e.onSearchChange(""),
            n || e.trigger("focus"),
            e.$activeItems.length || (e.showInput(),
            e.setActiveItem(null),
            e.refreshOptions(!!e.settings.openOnFocus)),
            e.refreshState())
        },
        onBlur: function(t, e) {
            var n = this;
            if (n.isFocused && (n.isFocused = !1,
            !n.ignoreFocus)) {
                if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0])
                    return n.ignoreBlur = !0,
                    void n.onFocus(t);
                var i = function() {
                    n.close(),
                    n.setTextboxValue(""),
                    n.setActiveItem(null),
                    n.setActiveOption(null),
                    n.setCaret(n.items.length),
                    n.refreshState(),
                    e && e.focus && e.focus(),
                    n.isBlurring = !1,
                    n.ignoreFocus = !1,
                    n.trigger("blur")
                };
                n.isBlurring = !0,
                n.ignoreFocus = !0,
                n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
            }
        },
        onOptionHover: function(t) {
            this.ignoreHover || this.setActiveOption(t.currentTarget, !1)
        },
        onOptionSelect: function(t) {
            var e, n, i = this;
            t.preventDefault && (t.preventDefault(),
            t.stopPropagation()),
            (n = $(t.currentTarget)).hasClass("create") ? i.createItem(null, function() {
                i.settings.closeAfterSelect && i.close()
            }) : void 0 !== (e = n.attr("data-value")) && (i.lastQuery = null,
            i.setTextboxValue(""),
            i.addItem(e),
            i.settings.closeAfterSelect ? i.close() : !i.settings.hideSelected && t.type && /mouse/.test(t.type) && i.setActiveOption(i.getOption(e)))
        },
        onItemSelect: function(t) {
            this.isLocked || "multi" === this.settings.mode && (t.preventDefault(),
            this.setActiveItem(t.currentTarget, t))
        },
        load: function(t) {
            var e = this
              , n = e.$wrapper.addClass(e.settings.loadingClass);
            e.loading++,
            t.apply(e, [function(t) {
                e.loading = Math.max(e.loading - 1, 0),
                t && t.length && (e.addOption(t),
                e.refreshOptions(e.isFocused && !e.isInputHidden)),
                e.loading || n.removeClass(e.settings.loadingClass),
                e.trigger("load", t)
            }
            ])
        },
        setTextboxValue: function(t) {
            var e = this.$control_input;
            e.val() !== t && (e.val(t).triggerHandler("update"),
            this.lastValue = t)
        },
        getValue: function() {
            return 1 === this.tagType && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        },
        setValue: function(t, e) {
            n(this, e ? [] : ["change"], function() {
                this.clear(e),
                this.addItems(t, e)
            })
        },
        setActiveItem: function(t, e) {
            var n, i, r, o, s, a, l, c, p = this;
            if ("single" !== p.settings.mode) {
                if (!(t = $(t)).length)
                    return $(p.$activeItems).removeClass("active"),
                    p.$activeItems = [],
                    void (p.isFocused && p.showInput());
                if ("mousedown" === (n = e && e.type.toLowerCase()) && p.isShiftDown && p.$activeItems.length) {
                    for (c = p.$control.children(".active:last"),
                    o = Array.prototype.indexOf.apply(p.$control[0].childNodes, [c[0]]),
                    (s = Array.prototype.indexOf.apply(p.$control[0].childNodes, [t[0]])) < o && (l = o,
                    o = s,
                    s = l),
                    i = o; i <= s; i++)
                        a = p.$control[0].childNodes[i],
                        -1 === p.$activeItems.indexOf(a) && ($(a).addClass("active"),
                        p.$activeItems.push(a));
                    e.preventDefault()
                } else
                    "mousedown" === n && p.isCtrlDown || "keydown" === n && this.isShiftDown ? t.hasClass("active") ? (r = p.$activeItems.indexOf(t[0]),
                    p.$activeItems.splice(r, 1),
                    t.removeClass("active")) : p.$activeItems.push(t.addClass("active")[0]) : ($(p.$activeItems).removeClass("active"),
                    p.$activeItems = [t.addClass("active")[0]]);
                p.hideInput(),
                this.isFocused || p.focus()
            }
        },
        setActiveOption: function(t, e, n) {
            var i, r, o, s, a, l = this;
            l.$activeOption && l.$activeOption.removeClass("active"),
            l.$activeOption = null,
            (t = $(t)).length && (l.$activeOption = t.addClass("active"),
            !e && c(e) || (i = l.$dropdown_content.height(),
            r = l.$activeOption.outerHeight(!0),
            e = l.$dropdown_content.scrollTop() || 0,
            a = (s = o = l.$activeOption.offset().top - l.$dropdown_content.offset().top + e) - i + r,
            i + e < o + r ? l.$dropdown_content.stop().animate({
                scrollTop: a
            }, n ? l.settings.scrollDuration : 0) : o < e && l.$dropdown_content.stop().animate({
                scrollTop: s
            }, n ? l.settings.scrollDuration : 0)))
        },
        selectAll: function() {
            var t = this;
            "single" !== t.settings.mode && (t.$activeItems = Array.prototype.slice.apply(t.$control.children(":not(input)").addClass("active")),
            t.$activeItems.length && (t.hideInput(),
            t.close()),
            t.focus())
        },
        hideInput: function() {
            this.setTextboxValue(""),
            this.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: this.rtl ? 1e4 : -1e4
            }),
            this.isInputHidden = !0
        },
        showInput: function() {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }),
            this.isInputHidden = !1
        },
        focus: function() {
            var t = this;
            t.isDisabled || (t.ignoreFocus = !0,
            t.$control_input[0].focus(),
            window.setTimeout(function() {
                t.ignoreFocus = !1,
                t.onFocus()
            }, 0))
        },
        blur: function(t) {
            this.$control_input[0].blur(),
            this.onBlur(null, t)
        },
        getScoreFunction: function(t) {
            return this.sifter.getScoreFunction(t, this.getSearchOptions())
        },
        getSearchOptions: function() {
            var t = this.settings
              , e = t.sortField;
            return "string" == typeof e && (e = [{
                field: e
            }]),
            {
                fields: t.searchField,
                conjunction: t.searchConjunction,
                sort: e,
                nesting: t.nesting
            }
        },
        search: function(t) {
            var e, n, i, r = this, o = r.settings, s = this.getSearchOptions();
            if (o.score && "function" != typeof (i = r.settings.score.apply(this, [t])))
                throw new Error('Selectize "score" setting must be a function that returns a function');
            if (t !== r.lastQuery ? (r.lastQuery = t,
            n = r.sifter.search(t, $.extend(s, {
                score: i
            })),
            r.currentResults = n) : n = $.extend(!0, {}, r.currentResults),
            o.hideSelected)
                for (e = n.items.length - 1; 0 <= e; e--)
                    -1 !== r.items.indexOf(_(n.items[e].id)) && n.items.splice(e, 1);
            return n
        },
        refreshOptions: function(t) {
            var e, n, i, r, o, s, a, l, c, p, u, d, h, f, g, v;
            void 0 === t && (t = !0);
            var m, y, w = this, b = $.trim(w.$control_input.val()), x = w.search(b), O = w.$dropdown_content, C = w.$activeOption && _(w.$activeOption.attr("data-value"));
            for (r = x.items.length,
            "number" == typeof w.settings.maxOptions && (r = Math.min(r, w.settings.maxOptions)),
            o = {},
            s = [],
            e = 0; e < r; e++)
                for (a = w.options[x.items[e].id],
                l = w.render("option", a),
                c = a[w.settings.optgroupField] || "",
                n = 0,
                i = (p = $.isArray(c) ? c : [c]) && p.length; n < i; n++)
                    c = p[n],
                    w.optgroups.hasOwnProperty(c) || (c = ""),
                    o.hasOwnProperty(c) || (o[c] = document.createDocumentFragment(),
                    s.push(c)),
                    o[c].appendChild(l);
            for (this.settings.lockOptgroupOrder && s.sort(function(t, e) {
                return (w.optgroups[t].$order || 0) - (w.optgroups[e].$order || 0)
            }),
            u = document.createDocumentFragment(),
            e = 0,
            r = s.length; e < r; e++)
                c = s[e],
                w.optgroups.hasOwnProperty(c) && o[c].childNodes.length ? ((d = document.createDocumentFragment()).appendChild(w.render("optgroup_header", w.optgroups[c])),
                d.appendChild(o[c]),
                u.appendChild(w.render("optgroup", $.extend({}, w.optgroups[c], {
                    html: (m = d,
                    y = void 0,
                    (y = document.createElement("div")).appendChild(m.cloneNode(!0)),
                    y.innerHTML),
                    dom: d
                })))) : u.appendChild(o[c]);
            if (O.html(u),
            w.settings.highlight && (O.removeHighlight(),
            x.query.length && x.tokens.length))
                for (e = 0,
                r = x.tokens.length; e < r; e++)
                    S(O, x.tokens[e].regex);
            if (!w.settings.hideSelected)
                for (e = 0,
                r = w.items.length; e < r; e++)
                    w.getOption(w.items[e]).addClass("selected");
            (h = w.canCreate(b)) && (O.prepend(w.render("option_create", {
                input: b
            })),
            v = $(O[0].childNodes[0])),
            w.hasOptions = 0 < x.items.length || h,
            w.hasOptions ? (0 < x.items.length ? ((g = C && w.getOption(C)) && g.length ? f = g : "single" === w.settings.mode && w.items.length && (f = w.getOption(w.items[0])),
            f && f.length || (f = v && !w.settings.addPrecedence ? w.getAdjacentOption(v, 1) : O.find("[data-selectable]:first"))) : f = v,
            w.setActiveOption(f),
            t && !w.isOpen && w.open()) : (w.setActiveOption(null),
            t && w.isOpen && w.close())
        },
        addOption: function(t) {
            var e, n, i, r = this;
            if ($.isArray(t))
                for (e = 0,
                n = t.length; e < n; e++)
                    r.addOption(t[e]);
            else
                (i = r.registerOption(t)) && (r.userOptions[i] = !0,
                r.lastQuery = null,
                r.trigger("option_add", i, t))
        },
        registerOption: function(t) {
            var e = _(t[this.settings.valueField]);
            return null != e && !this.options.hasOwnProperty(e) && (t.$order = t.$order || ++this.order,
            this.options[e] = t,
            e)
        },
        registerOptionGroup: function(t) {
            var e = _(t[this.settings.optgroupValueField]);
            return !!e && (t.$order = t.$order || ++this.order,
            this.optgroups[e] = t,
            e)
        },
        addOptionGroup: function(t, e) {
            e[this.settings.optgroupValueField] = t,
            (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e)
        },
        removeOptionGroup: function(t) {
            this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t],
            this.renderCache = {},
            this.trigger("optgroup_remove", t))
        },
        clearOptionGroups: function() {
            this.optgroups = {},
            this.renderCache = {},
            this.trigger("optgroup_clear")
        },
        updateOption: function(t, e) {
            var n, i, r, o, s, a, l, c = this;
            if (t = _(t),
            r = _(e[c.settings.valueField]),
            null !== t && c.options.hasOwnProperty(t)) {
                if ("string" != typeof r)
                    throw new Error("Value must be set in option data");
                l = c.options[t].$order,
                r !== t && (delete c.options[t],
                -1 !== (o = c.items.indexOf(t)) && c.items.splice(o, 1, r)),
                e.$order = e.$order || l,
                c.options[r] = e,
                s = c.renderCache.item,
                a = c.renderCache.option,
                s && (delete s[t],
                delete s[r]),
                a && (delete a[t],
                delete a[r]),
                -1 !== c.items.indexOf(r) && (n = c.getItem(t),
                i = $(c.render("item", e)),
                n.hasClass("active") && i.addClass("active"),
                n.replaceWith(i)),
                c.lastQuery = null,
                c.isOpen && c.refreshOptions(!1)
            }
        },
        removeOption: function(t, e) {
            var n = this;
            t = _(t);
            var i = n.renderCache.item
              , r = n.renderCache.option;
            i && delete i[t],
            r && delete r[t],
            delete n.userOptions[t],
            delete n.options[t],
            n.lastQuery = null,
            n.trigger("option_remove", t),
            n.removeItem(t, e)
        },
        clearOptions: function() {
            var n = this;
            n.loadedSearches = {},
            n.userOptions = {},
            n.renderCache = {};
            var i = n.options;
            $.each(n.options, function(t, e) {
                -1 == n.items.indexOf(t) && delete i[t]
            }),
            n.options = n.sifter.items = i,
            n.lastQuery = null,
            n.trigger("option_clear")
        },
        getOption: function(t) {
            return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"))
        },
        getAdjacentOption: function(t, e) {
            var n = this.$dropdown.find("[data-selectable]")
              , i = n.index(t) + e;
            return 0 <= i && i < n.length ? n.eq(i) : $()
        },
        getElementWithValue: function(t, e) {
            if (void 0 !== (t = _(t)) && null !== t)
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n].getAttribute("data-value") === t)
                        return $(e[n]);
            return $()
        },
        getItem: function(t) {
            return this.getElementWithValue(t, this.$control.children())
        },
        addItems: function(t, e) {
            this.buffer = document.createDocumentFragment();
            for (var n = this.$control[0].childNodes, i = 0; i < n.length; i++)
                this.buffer.appendChild(n[i]);
            for (var r = $.isArray(t) ? t : [t], o = (i = 0,
            r.length); i < o; i++)
                this.isPending = i < o - 1,
                this.addItem(r[i], e);
            var s = this.$control[0];
            s.insertBefore(this.buffer, s.firstChild),
            this.buffer = null
        },
        addItem: function(a, l) {
            n(this, l ? [] : ["change"], function() {
                var t, e, n, i, r, o = this, s = o.settings.mode;
                a = _(a),
                -1 === o.items.indexOf(a) ? o.options.hasOwnProperty(a) && ("single" === s && o.clear(l),
                "multi" === s && o.isFull() || (t = $(o.render("item", o.options[a])),
                r = o.isFull(),
                o.items.splice(o.caretPos, 0, a),
                o.insertAtCaret(t),
                o.isPending && (r || !o.isFull()) || o.refreshState(),
                o.isSetup && (n = o.$dropdown_content.find("[data-selectable]"),
                o.isPending || (e = o.getOption(a),
                i = o.getAdjacentOption(e, 1).attr("data-value"),
                o.refreshOptions(o.isFocused && "single" !== s),
                i && o.setActiveOption(o.getOption(i))),
                !n.length || o.isFull() ? o.close() : o.isPending || o.positionDropdown(),
                o.updatePlaceholder(),
                o.trigger("item_add", a, t),
                o.isPending || o.updateOriginalInput({
                    silent: l
                })))) : "single" === s && o.close()
            })
        },
        removeItem: function(t, e) {
            var n, i, r, o = this;
            n = t instanceof $ ? t : o.getItem(t),
            t = _(n.attr("data-value")),
            -1 !== (i = o.items.indexOf(t)) && (n.remove(),
            n.hasClass("active") && (r = o.$activeItems.indexOf(n[0]),
            o.$activeItems.splice(r, 1)),
            o.items.splice(i, 1),
            o.lastQuery = null,
            !o.settings.persist && o.userOptions.hasOwnProperty(t) && o.removeOption(t, e),
            i < o.caretPos && o.setCaret(o.caretPos - 1),
            o.refreshState(),
            o.updatePlaceholder(),
            o.updateOriginalInput({
                silent: e
            }),
            o.positionDropdown(),
            o.trigger("item_remove", t, n))
        },
        createItem: function(t, n) {
            var i = this
              , r = i.caretPos;
            t = t || $.trim(i.$control_input.val() || "");
            var o = arguments[arguments.length - 1];
            if ("function" != typeof o && (o = function() {}
            ),
            "boolean" != typeof n && (n = !0),
            !i.canCreate(t))
                return o(),
                !1;
            i.lock();
            var e, s, a = "function" == typeof i.settings.create ? this.settings.create : function(t) {
                var e = {};
                return e[i.settings.labelField] = t,
                e[i.settings.valueField] = t,
                e
            }
            , l = (s = !(e = function(t) {
                if (i.unlock(),
                !t || "object" != typeof t)
                    return o();
                var e = _(t[i.settings.valueField]);
                if ("string" != typeof e)
                    return o();
                i.setTextboxValue(""),
                i.addOption(t),
                i.setCaret(r),
                i.addItem(e),
                i.refreshOptions(n && "single" !== i.settings.mode),
                o(t)
            }
            ),
            function() {
                s || (s = !0,
                e.apply(this, arguments))
            }
            ), c = a.apply(this, [t, l]);
            return void 0 !== c && l(c),
            !0
        },
        refreshItems: function() {
            this.lastQuery = null,
            this.isSetup && this.addItem(this.items),
            this.refreshState(),
            this.updateOriginalInput()
        },
        refreshState: function() {
            this.refreshValidityState(),
            this.refreshClasses()
        },
        refreshValidityState: function() {
            if (!this.isRequired)
                return !1;
            var t = !this.items.length;
            this.isInvalid = t,
            this.$control_input.prop("required", t),
            this.$input.prop("required", !t)
        },
        refreshClasses: function() {
            var t = this
              , e = t.isFull()
              , n = t.isLocked;
            t.$wrapper.toggleClass("rtl", t.rtl),
            t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", n).toggleClass("full", e).toggleClass("not-full", !e).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !$.isEmptyObject(t.options)).toggleClass("has-items", 0 < t.items.length),
            t.$control_input.data("grow", !e && !n)
        },
        isFull: function() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        },
        updateOriginalInput: function(t) {
            var e, n, i, r, o = this;
            if (t = t || {},
            1 === o.tagType) {
                for (i = [],
                e = 0,
                n = o.items.length; e < n; e++)
                    r = o.options[o.items[e]][o.settings.labelField] || "",
                    i.push('<option value="' + a(o.items[e]) + '" selected="selected">' + a(r) + "</option>");
                i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'),
                o.$input.html(i.join(""))
            } else
                o.$input.val(o.getValue()),
                o.$input.attr("value", o.$input.val());
            o.isSetup && (t.silent || o.trigger("change", o.$input.val()))
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var t = this.$control_input;
                this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder),
                t.triggerHandler("update", {
                    force: !0
                })
            }
        },
        open: function() {
            var t = this;
            t.isLocked || t.isOpen || "multi" === t.settings.mode && t.isFull() || (t.focus(),
            t.isOpen = !0,
            t.refreshState(),
            t.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }),
            t.positionDropdown(),
            t.$dropdown.css({
                visibility: "visible"
            }),
            t.trigger("dropdown_open", t.$dropdown))
        },
        close: function() {
            var t = this
              , e = t.isOpen;
            "single" === t.settings.mode && t.items.length && (t.hideInput(),
            t.isBlurring || t.$control_input.blur()),
            t.isOpen = !1,
            t.$dropdown.hide(),
            t.setActiveOption(null),
            t.refreshState(),
            e && t.trigger("dropdown_close", t.$dropdown)
        },
        positionDropdown: function() {
            var t = this.$control
              , e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
            e.top += t.outerHeight(!0),
            this.$dropdown.css({
                width: t[0].getBoundingClientRect().width,
                top: e.top,
                left: e.left
            })
        },
        clear: function(t) {
            var e = this;
            e.items.length && (e.$control.children(":not(input)").remove(),
            e.items = [],
            e.lastQuery = null,
            e.setCaret(0),
            e.setActiveItem(null),
            e.updatePlaceholder(),
            e.updateOriginalInput({
                silent: t
            }),
            e.refreshState(),
            e.showInput(),
            e.trigger("clear"))
        },
        insertAtCaret: function(t) {
            var e = Math.min(this.caretPos, this.items.length)
              , n = t[0]
              , i = this.buffer || this.$control[0];
            0 === e ? i.insertBefore(n, i.firstChild) : i.insertBefore(n, i.childNodes[e]),
            this.setCaret(e + 1)
        },
        deleteSelection: function(t) {
            var e, n, i, r, o, s, a, l, c, p = this;
            if (i = t && 8 === t.keyCode ? -1 : 1,
            r = f(p.$control_input[0]),
            p.$activeOption && !p.settings.hideSelected && (a = p.getAdjacentOption(p.$activeOption, -1).attr("data-value")),
            o = [],
            p.$activeItems.length) {
                for (c = p.$control.children(".active:" + (0 < i ? "last" : "first")),
                s = p.$control.children(":not(input)").index(c),
                0 < i && s++,
                e = 0,
                n = p.$activeItems.length; e < n; e++)
                    o.push($(p.$activeItems[e]).attr("data-value"));
                t && (t.preventDefault(),
                t.stopPropagation())
            } else
                (p.isFocused || "single" === p.settings.mode) && p.items.length && (i < 0 && 0 === r.start && 0 === r.length ? o.push(p.items[p.caretPos - 1]) : 0 < i && r.start === p.$control_input.val().length && o.push(p.items[p.caretPos]));
            if (!o.length || "function" == typeof p.settings.onDelete && !1 === p.settings.onDelete.apply(p, [o]))
                return !1;
            for (void 0 !== s && p.setCaret(s); o.length; )
                p.removeItem(o.pop());
            return p.showInput(),
            p.positionDropdown(),
            p.refreshOptions(!0),
            a && ((l = p.getOption(a)).length && p.setActiveOption(l)),
            !0
        },
        advanceSelection: function(t, e) {
            var n, i, r, o, s, a = this;
            0 !== t && (a.rtl && (t *= -1),
            n = 0 < t ? "last" : "first",
            i = f(a.$control_input[0]),
            a.isFocused && !a.isInputHidden ? (o = a.$control_input.val().length,
            (t < 0 ? 0 !== i.start || 0 !== i.length : i.start !== o) || o || a.advanceCaret(t, e)) : (s = a.$control.children(".active:" + n)).length && (r = a.$control.children(":not(input)").index(s),
            a.setActiveItem(null),
            a.setCaret(0 < t ? r + 1 : r)))
        },
        advanceCaret: function(t, e) {
            var n, i, r = this;
            0 !== t && (n = 0 < t ? "next" : "prev",
            r.isShiftDown ? (i = r.$control_input[n]()).length && (r.hideInput(),
            r.setActiveItem(i),
            e && e.preventDefault()) : r.setCaret(r.caretPos + t))
        },
        setCaret: function(t) {
            var e, n, i, r, o = this;
            if (t = "single" === o.settings.mode ? o.items.length : Math.max(0, Math.min(o.items.length, t)),
            !o.isPending)
                for (e = 0,
                n = (i = o.$control.children(":not(input)")).length; e < n; e++)
                    r = $(i[e]).detach(),
                    e < t ? o.$control_input.before(r) : o.$control.append(r);
            o.caretPos = t
        },
        lock: function() {
            this.close(),
            this.isLocked = !0,
            this.refreshState()
        },
        unlock: function() {
            this.isLocked = !1,
            this.refreshState()
        },
        disable: function() {
            this.$input.prop("disabled", !0),
            this.$control_input.prop("disabled", !0).prop("tabindex", -1),
            this.isDisabled = !0,
            this.lock()
        },
        enable: function() {
            var t = this;
            t.$input.prop("disabled", !1),
            t.$control_input.prop("disabled", !1).prop("tabindex", t.tabIndex),
            t.isDisabled = !1,
            t.unlock()
        },
        destroy: function() {
            var t = this
              , e = t.eventNS
              , n = t.revertSettings;
            t.trigger("destroy"),
            t.off(),
            t.$wrapper.remove(),
            t.$dropdown.remove(),
            t.$input.html("").append(n.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: n.tabindex
            }).show(),
            t.$control_input.removeData("grow"),
            t.$input.removeData("selectize"),
            0 == --y.count && y.$testInput && (y.$testInput.remove(),
            y.$testInput = void 0),
            $(window).off(e),
            $(document).off(e),
            $(document.body).off(e),
            delete t.$input[0].selectize
        },
        render: function(t, e) {
            var n, i, r = "", o = !1, s = this;
            return "option" !== t && "item" !== t || (o = !!(n = _(e[s.settings.valueField]))),
            o && (c(s.renderCache[t]) || (s.renderCache[t] = {}),
            s.renderCache[t].hasOwnProperty(n)) ? s.renderCache[t][n] : (r = $(s.settings.render[t].apply(this, [e, a])),
            "option" === t || "option_create" === t ? e[s.settings.disabledField] || r.attr("data-selectable", "") : "optgroup" === t && (i = e[s.settings.optgroupValueField] || "",
            r.attr("data-group", i),
            e[s.settings.disabledField] && r.attr("data-disabled", "")),
            "option" !== t && "item" !== t || r.attr("data-value", n || ""),
            o && (s.renderCache[t][n] = r[0]),
            r[0])
        },
        clearCache: function(t) {
            void 0 === t ? this.renderCache = {} : delete this.renderCache[t]
        },
        canCreate: function(t) {
            if (!this.settings.create)
                return !1;
            var e = this.settings.createFilter;
            return t.length && ("function" != typeof e || e.apply(this, [t])) && ("string" != typeof e || new RegExp(e).test(t)) && (!(e instanceof RegExp) || e.test(t))
        }
    }),
    y.count = 0,
    y.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        disabledField: "disabled",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    },
    $.fn.selectize = function(r) {
        function o(t, s) {
            function a(t) {
                var e = u && t.attr(u);
                return "string" == typeof e && e.length ? JSON.parse(e) : null
            }
            function l(t, e) {
                t = $(t);
                var n = _(t.val());
                if (n || p.allowEmptyOption)
                    if (c.hasOwnProperty(n)) {
                        if (e) {
                            var i = c[n][g];
                            i ? $.isArray(i) ? i.push(e) : c[n][g] = [i, e] : c[n][g] = e
                        }
                    } else {
                        var r = a(t) || {};
                        r[d] = r[d] || t.text(),
                        r[h] = r[h] || n,
                        r[f] = r[f] || t.prop("disabled"),
                        r[g] = r[g] || e,
                        c[n] = r,
                        o.push(r),
                        t.is(":selected") && s.items.push(n)
                    }
            }
            var e, n, i, r, o = s.options, c = {};
            for (s.maxItems = t.attr("multiple") ? null : 1,
            e = 0,
            n = (r = t.children()).length; e < n; e++)
                "optgroup" === (i = r[e].tagName.toLowerCase()) ? function(t) {
                    var e, n, i, r, o;
                    for ((i = (t = $(t)).attr("label")) && ((r = a(t) || {})[v] = i,
                    r[m] = i,
                    r[f] = t.prop("disabled"),
                    s.optgroups.push(r)),
                    e = 0,
                    n = (o = $("option", t)).length; e < n; e++)
                        l(o[e], i)
                }(r[e]) : "option" === i && l(r[e])
        }
        var s = $.fn.selectize.defaults
          , p = $.extend({}, s, r)
          , u = p.dataAttr
          , d = p.labelField
          , h = p.valueField
          , f = p.disabledField
          , g = p.optgroupField
          , v = p.optgroupLabelField
          , m = p.optgroupValueField;
        return this.each(function() {
            if (!this.selectize) {
                var t = $(this)
                  , e = this.tagName.toLowerCase()
                  , n = t.attr("placeholder") || t.attr("data-placeholder");
                n || p.allowEmptyOption || (n = t.children('option[value=""]').text());
                var i = {
                    placeholder: n,
                    options: [],
                    optgroups: [],
                    items: []
                };
                ("select" === e ? o : function(t, e) {
                    var n, i, r, o, s = t.attr(u);
                    if (s)
                        for (e.options = JSON.parse(s),
                        n = 0,
                        i = e.options.length; n < i; n++)
                            e.items.push(e.options[n][h]);
                    else {
                        var a = $.trim(t.val() || "");
                        if (!p.allowEmptyOption && !a.length)
                            return;
                        for (n = 0,
                        i = (r = a.split(p.delimiter)).length; n < i; n++)
                            (o = {})[d] = r[n],
                            o[h] = r[n],
                            e.options.push(o);
                        e.items = r
                    }
                }
                )(t, i),
                new y(t,$.extend(!0, {}, s, i, r))
            }
        })
    }
    ,
    $.fn.selectize.defaults = y.defaults,
    $.fn.selectize.support = {
        validity: j
    },
    y.define("drag_drop", function(t) {
        if (!$.fn.sortable)
            throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var i = this;
            i.lock = (r = i.lock,
            function() {
                var t = i.$control.data("sortable");
                return t && t.disable(),
                r.apply(i, arguments)
            }
            ),
            i.unlock = (n = i.unlock,
            function() {
                var t = i.$control.data("sortable");
                return t && t.enable(),
                n.apply(i, arguments)
            }
            ),
            i.setup = (e = i.setup,
            function() {
                e.apply(this, arguments);
                var n = i.$control.sortable({
                    items: "[data-value]",
                    forcePlaceholderSize: !0,
                    disabled: i.isLocked,
                    start: function(t, e) {
                        e.placeholder.css("width", e.helper.css("width")),
                        n.css({
                            overflow: "visible"
                        })
                    },
                    stop: function() {
                        n.css({
                            overflow: "hidden"
                        });
                        var t = i.$activeItems ? i.$activeItems.slice() : null
                          , e = [];
                        n.children("[data-value]").each(function() {
                            e.push($(this).attr("data-value"))
                        }),
                        i.setValue(e),
                        i.setActiveItem(t)
                    }
                })
            }
            )
        }
        var e, n, r
    }),
    y.define("dropdown_header", function(t) {
        var e, n = this;
        t = $.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function(t) {
                return '<div class="' + t.headerClass + '"><div class="' + t.titleRowClass + '"><span class="' + t.labelClass + '">' + t.title + '</span><a href="javascript:void(0)" class="' + t.closeClass + '">&times;</a></div></div>'
            }
        }, t),
        n.setup = (e = n.setup,
        function() {
            e.apply(n, arguments),
            n.$dropdown_header = $(t.html(t)),
            n.$dropdown.prepend(n.$dropdown_header)
        }
        )
    }),
    y.define("optgroup_columns", function(a) {
        var o, l = this;
        a = $.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, a),
        this.getAdjacentOption = function(t, e) {
            var n = t.closest("[data-group]").find("[data-selectable]")
              , i = n.index(t) + e;
            return 0 <= i && i < n.length ? n.eq(i) : $()
        }
        ,
        this.onKeyDown = (o = l.onKeyDown,
        function(t) {
            var e, n, i, r;
            return !this.isOpen || 37 !== t.keyCode && 39 !== t.keyCode ? o.apply(this, arguments) : (l.ignoreHover = !0,
            e = (r = this.$activeOption.closest("[data-group]")).find("[data-selectable]").index(this.$activeOption),
            void ((n = (i = (r = 37 === t.keyCode ? r.prev("[data-group]") : r.next("[data-group]")).find("[data-selectable]")).eq(Math.min(i.length - 1, e))).length && this.setActiveOption(n)))
        }
        );
        function t() {
            var t, e, n, i, r, o, s;
            if ((e = (s = $("[data-group]", l.$dropdown_content)).length) && l.$dropdown_content.width()) {
                if (a.equalizeHeight) {
                    for (t = n = 0; t < e; t++)
                        n = Math.max(n, s.eq(t).height());
                    s.css({
                        height: n
                    })
                }
                a.equalizeWidth && (o = l.$dropdown_content.innerWidth() - c(),
                i = Math.round(o / e),
                s.css({
                    width: i
                }),
                1 < e && (r = o - i * (e - 1),
                s.eq(e - 1).css({
                    width: r
                })))
            }
        }
        var c = function() {
            var t, e = c.width, n = document;
            return void 0 === e && ((t = n.createElement("div")).innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',
            t = t.firstChild,
            n.body.appendChild(t),
            e = c.width = t.offsetWidth - t.clientWidth,
            n.body.removeChild(t)),
            e
        };
        (a.equalizeHeight || a.equalizeWidth) && (r.after(this, "positionDropdown", t),
        r.after(this, "refreshOptions", t))
    }),
    y.define("remove_button", function(t) {
        var o, e, n, i, s;
        (t = $.extend({
            label: "&times;",
            title: "Remove",
            className: "remove",
            append: !0
        }, t),
        "single" !== this.settings.mode) ? (i = o = this,
        s = '<a href="javascript:void(0)" class="' + (e = t).className + '" tabindex="-1" title="' + a(e.title) + '">' + e.label + "</a>",
        o.setup = (n = i.setup,
        function() {
            if (e.append) {
                var r = i.settings.render.item;
                i.settings.render.item = function(t) {
                    return e = r.apply(o, arguments),
                    n = s,
                    i = e.search(/(<\/[^>]+>\s*)$/),
                    e.substring(0, i) + n + e.substring(i);
                    var e, n, i
                }
            }
            n.apply(o, arguments),
            o.$control.on("click", "." + e.className, function(t) {
                if (t.preventDefault(),
                !i.isLocked) {
                    var e = $(t.currentTarget).parent();
                    i.setActiveItem(e),
                    i.deleteSelection() && i.setCaret(i.items.length)
                }
            })
        }
        )) : function(r, e) {
            e.className = "remove-single";
            var n, o = r, s = '<a href="javascript:void(0)" class="' + e.className + '" tabindex="-1" title="' + a(e.title) + '">' + e.label + "</a>";
            r.setup = (n = o.setup,
            function() {
                if (e.append) {
                    var t = $(o.$input.context).attr("id")
                      , i = ($("#" + t),
                    o.settings.render.item);
                    o.settings.render.item = function(t) {
                        return e = i.apply(r, arguments),
                        n = s,
                        $("<span>").append(e).append(n);
                        var e, n
                    }
                }
                n.apply(r, arguments),
                r.$control.on("click", "." + e.className, function(t) {
                    t.preventDefault(),
                    o.isLocked || o.clear()
                })
            }
            )
        }(this, t)
    }),
    y.define("restore_on_backspace", function(i) {
        var r, t = this;
        i.text = i.text || function(t) {
            return t[this.settings.labelField]
        }
        ,
        this.onKeyDown = (r = t.onKeyDown,
        function(t) {
            var e, n;
            return 8 === t.keyCode && "" === this.$control_input.val() && !this.$activeItems.length && 0 <= (e = this.caretPos - 1) && e < this.items.length ? (n = this.options[this.items[e]],
            this.deleteSelection(t) && (this.setTextboxValue(i.text.apply(this, [n])),
            this.refreshOptions(!0)),
            void t.preventDefault()) : r.apply(this, arguments)
        }
        )
    }),
    y
}),
function(v) {
    function t(t, e, n) {
        return n = p(e, n),
        this.on("click.pjax", t, function(t) {
            var e = n;
            e.container || ((e = v.extend({}, n)).container = v(this).attr("data-pjax")),
            i(t, e)
        })
    }
    function i(t, e, n) {
        n = p(e, n);
        var i = t.currentTarget
          , r = v(i);
        if ("A" !== i.tagName.toUpperCase())
            throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(1 < t.which || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== i.protocol || location.hostname !== i.hostname || -1 < i.href.indexOf("#") && l(i) == l(location) || t.isDefaultPrevented())) {
            var o = {
                url: i.href,
                container: r.attr("data-pjax"),
                target: i
            }
              , s = v.extend({}, o, n)
              , a = v.Event("pjax:click");
            r.trigger(a, [s]),
            a.isDefaultPrevented() || (m(s),
            t.preventDefault(),
            r.trigger("pjax:clicked", [s]))
        }
    }
    function e(t, e, n) {
        n = p(e, n);
        var i = t.currentTarget
          , r = v(i);
        if ("FORM" !== i.tagName.toUpperCase())
            throw "$.pjax.submit requires a form element";
        var o = {
            type: (r.attr("method") || "GET").toUpperCase(),
            url: r.attr("action"),
            container: r.attr("data-pjax"),
            target: i
        };
        if ("GET" !== o.type && void 0 !== window.FormData)
            o.data = new FormData(i),
            o.processData = !1,
            o.contentType = !1;
        else {
            if (r.find(":file").length)
                return;
            o.data = r.serializeArray()
        }
        m(v.extend({}, o, n)),
        t.preventDefault()
    }
    function m(d) {
        d = v.extend(!0, {}, v.ajaxSettings, m.defaults, d),
        v.isFunction(d.url) && (d.url = d.url());
        var h = O(d.url).hash
          , t = v.type(d.container);
        if ("string" !== t)
            throw "expected string value for 'container' option; got " + t;
        var i, f = d.context = v(d.container);
        if (!f.length)
            throw "the container selector '" + d.container + "' did not match anything";
        function g(t, e, n) {
            (n = n || {}).relatedTarget = d.target;
            var i = v.Event(t, n);
            return f.trigger(i, e),
            !i.isDefaultPrevented()
        }
        d.data || (d.data = {}),
        v.isArray(d.data) ? d.data.push({
            name: "_pjax",
            value: d.container
        }) : d.data._pjax = d.container,
        d.beforeSend = function(t, e) {
            if ("GET" !== e.type && (e.timeout = 0),
            t.setRequestHeader("X-PJAX", "true"),
            t.setRequestHeader("X-PJAX-Container", d.container),
            !g("pjax:beforeSend", [t, e]))
                return !1;
            0 < e.timeout && (i = setTimeout(function() {
                g("pjax:timeout", [t, d]) && t.abort("timeout")
            }, e.timeout),
            e.timeout = 0);
            var n = O(e.url);
            h && (n.hash = h),
            d.requestUrl = c(n)
        }
        ,
        d.complete = function(t, e) {
            i && clearTimeout(i),
            g("pjax:complete", [t, e, d]),
            g("pjax:end", [t, d])
        }
        ,
        d.error = function(t, e, n) {
            var i = C("", t, d)
              , r = g("pjax:error", [t, e, n, d]);
            "GET" == d.type && "abort" !== e && r && y(i.url)
        }
        ,
        d.success = function(t, e, n) {
            var i = m.state
              , r = "function" == typeof v.pjax.defaults.version ? v.pjax.defaults.version() : v.pjax.defaults.version
              , o = n.getResponseHeader("X-PJAX-Version")
              , s = C(t, n, d)
              , a = O(s.url);
            if (h && (a.hash = h,
            s.url = a.href),
            r && o && r !== o)
                y(s.url);
            else if (s.contents) {
                if (m.state = {
                    id: d.id || b(),
                    url: s.url,
                    title: s.title,
                    container: d.container,
                    fragment: d.fragment,
                    timeout: d.timeout
                },
                (d.push || d.replace) && window.history.replaceState(m.state, s.title, s.url),
                v.contains(d.container, document.activeElement))
                    try {
                        document.activeElement.blur()
                    } catch (t) {}
                s.title && (document.title = s.title),
                g("pjax:beforeReplace", [s.contents, d], {
                    state: m.state,
                    previousState: i
                }),
                f.html(s.contents);
                var l = f.find("input[autofocus], textarea[autofocus]").last()[0];
                l && document.activeElement !== l && l.focus(),
                function(t) {
                    if (!t)
                        return;
                    var i = v("script[src]");
                    t.each(function() {
                        var t = this.src;
                        if (!i.filter(function() {
                            return this.src === t
                        }).length) {
                            var e = document.createElement("script")
                              , n = v(this).attr("type");
                            n && (e.type = n),
                            e.src = v(this).attr("src"),
                            document.head.appendChild(e)
                        }
                    })
                }(s.scripts);
                var c = d.scrollTo;
                if (h) {
                    var p = decodeURIComponent(h.slice(1))
                      , u = document.getElementById(p) || document.getElementsByName(p)[0];
                    u && (c = v(u).offset().top)
                }
                "number" == typeof c && v(window).scrollTop(c),
                g("pjax:success", [t, e, n, d])
            } else
                y(s.url)
        }
        ,
        m.state || (m.state = {
            id: b(),
            url: window.location.href,
            title: document.title,
            container: d.container,
            fragment: d.fragment,
            timeout: d.timeout
        },
        window.history.replaceState(m.state, document.title)),
        w(m.xhr),
        m.options = d;
        var e, n, r = m.xhr = v.ajax(d);
        return 0 < r.readyState && (d.push && !d.replace && (e = m.state.id,
        n = [d.container, x(f)],
        $[e] = n,
        _.push(e),
        I(S, 0),
        I(_, m.defaults.maxCacheLength),
        window.history.pushState(null, "", d.requestUrl)),
        g("pjax:start", [r, d]),
        g("pjax:send", [r, d])),
        m.xhr
    }
    function n(t, e) {
        var n = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return m(v.extend(n, p(t, e)))
    }
    function y(t) {
        window.history.replaceState(null, "", m.state.url),
        window.location.replace(t)
    }
    var u = !0
      , d = window.location.href
      , r = window.history.state;
    function o(t) {
        u || w(m.xhr);
        var e, n = m.state, i = t.state;
        if (i && i.container) {
            if (u && d == i.url)
                return;
            if (n) {
                if (n.id === i.id)
                    return;
                e = n.id < i.id ? "forward" : "back"
            }
            var r = $[i.id] || []
              , o = r[0] || i.container
              , s = v(o)
              , a = r[1];
            if (s.length) {
                n && function(t, e, n) {
                    var i, r;
                    $[e] = n,
                    r = "forward" === t ? (i = _,
                    S) : (i = S,
                    _);
                    i.push(e),
                    (e = r.pop()) && delete $[e];
                    I(i, m.defaults.maxCacheLength)
                }(e, n.id, [o, x(s)]);
                var l = v.Event("pjax:popstate", {
                    state: i,
                    direction: e
                });
                s.trigger(l);
                var c = {
                    id: i.id,
                    url: i.url,
                    container: o,
                    push: !1,
                    fragment: i.fragment,
                    timeout: i.timeout,
                    scrollTo: !1
                };
                if (a) {
                    s.trigger("pjax:start", [null, c]),
                    (m.state = i).title && (document.title = i.title);
                    var p = v.Event("pjax:beforeReplace", {
                        state: i,
                        previousState: n
                    });
                    s.trigger(p, [a, c]),
                    s.html(a),
                    s.trigger("pjax:end", [null, c])
                } else
                    m(c);
                s[0].offsetHeight
            } else
                y(location.href)
        }
        u = !1
    }
    function s(t) {
        var e = v.isFunction(t.url) ? t.url() : t.url
          , n = t.type ? t.type.toUpperCase() : "GET"
          , i = v("<form>", {
            method: "GET" === n ? "GET" : "POST",
            action: e,
            style: "display:none"
        });
        "GET" !== n && "POST" !== n && i.append(v("<input>", {
            type: "hidden",
            name: "_method",
            value: n.toLowerCase()
        }));
        var r = t.data;
        if ("string" == typeof r)
            v.each(r.split("&"), function(t, e) {
                var n = e.split("=");
                i.append(v("<input>", {
                    type: "hidden",
                    name: n[0],
                    value: n[1]
                }))
            });
        else if (v.isArray(r))
            v.each(r, function(t, e) {
                i.append(v("<input>", {
                    type: "hidden",
                    name: e.name,
                    value: e.value
                }))
            });
        else if ("object" == typeof r) {
            var o;
            for (o in r)
                i.append(v("<input>", {
                    type: "hidden",
                    name: o,
                    value: r[o]
                }))
        }
        v(document.body).append(i),
        i.submit()
    }
    function w(t) {
        t && t.readyState < 4 && (t.onreadystatechange = v.noop,
        t.abort())
    }
    function b() {
        return (new Date).getTime()
    }
    function x(t) {
        var e = t.clone();
        return e.find("script").each(function() {
            this.src || jQuery._data(this, "globalEval", !1)
        }),
        e.contents()
    }
    function c(t) {
        return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""),
        t.href.replace(/\?($|#)/, "$1")
    }
    function O(t) {
        var e = document.createElement("a");
        return e.href = t,
        e
    }
    function l(t) {
        return t.href.replace(/#.*/, "")
    }
    function p(t, e) {
        return t && e ? ((e = v.extend({}, e)).container = t,
        e) : v.isPlainObject(t) ? t : {
            container: t
        }
    }
    function h(t, e) {
        return t.filter(e).add(t.find(e))
    }
    function f(t) {
        return v.parseHTML(t, document, !0)
    }
    function C(t, e, n) {
        var i = {}
          , r = /<html/i.test(t)
          , o = e.getResponseHeader("X-PJAX-URL");
        if (i.url = o ? c(O(o)) : n.requestUrl,
        r)
            var s = v(f(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
              , a = v(f(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else
            s = a = v(f(t));
        if (0 === a.length)
            return i;
        if (i.title = h(s, "title").last().text(),
        n.fragment) {
            if ("body" === n.fragment)
                var l = a;
            else
                l = h(a, n.fragment).first();
            l.length && (i.contents = "body" === n.fragment ? l : l.contents(),
            i.title || (i.title = l.attr("title") || l.data("title")))
        } else
            r || (i.contents = a);
        return i.contents && (i.contents = i.contents.not(function() {
            return v(this).is("title")
        }),
        i.contents.find("title").remove(),
        i.scripts = h(i.contents, "script[src]").remove(),
        i.contents = i.contents.not(i.scripts)),
        i.title && (i.title = v.trim(i.title)),
        i
    }
    r && r.container && (m.state = r),
    "state"in window.history && (u = !1);
    var $ = {}
      , S = []
      , _ = [];
    function I(t, e) {
        for (; t.length > e; )
            delete $[t.shift()]
    }
    function a() {
        return v("meta").filter(function() {
            var t = v(this).attr("http-equiv");
            return t && "X-PJAX-VERSION" === t.toUpperCase()
        }).attr("content")
    }
    function g() {
        v.fn.pjax = t,
        v.pjax = m,
        v.pjax.enable = v.noop,
        v.pjax.disable = j,
        v.pjax.click = i,
        v.pjax.submit = e,
        v.pjax.reload = n,
        v.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20,
            version: a
        },
        v(window).on("popstate.pjax", o)
    }
    function j() {
        v.fn.pjax = function() {
            return this
        }
        ,
        v.pjax = s,
        v.pjax.enable = g,
        v.pjax.disable = v.noop,
        v.pjax.click = v.noop,
        v.pjax.submit = v.noop,
        v.pjax.reload = function() {
            window.location.reload()
        }
        ,
        v(window).off("popstate.pjax", o)
    }
    v.event.props && v.inArray("state", v.event.props) < 0 ? v.event.props.push("state") : "state"in v.Event.prototype || v.event.addProp("state"),
    v.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
    (v.support.pjax ? g : j)()
}(jQuery),
function(r) {
    "use strict";
    r.fn.fitVids = function(t) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var e = document.createElement("div")
              , i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            e.className = "fit-vids-style",
            e.id = "fit-vids-style",
            e.style.display = "none",
            e.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",
            i.parentNode.insertBefore(e, i)
        }
        return t && r.extend(n, t),
        this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var e = r(this).find(t.join(","));
            (e = e.not("object object")).each(function() {
                var t = r(this);
                if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    var e = ("object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()) / (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
                    if (!t.attr("id")) {
                        var n = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", n)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"),
                    t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
