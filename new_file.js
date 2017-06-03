var Zepto = function() {
	function L(t) {
		return null == t ? String(t) : j[S.call(t)] || "object"
	}

	function Z(t) {
		return "function" == L(t)
	}

	function $(t) {
		return null != t && t == t.window
	}

	function _(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}

	function D(t) {
		return "object" == L(t)
	}

	function R(t) {
		return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype
	}

	function M(t) {
		return "number" == typeof t.length
	}

	function k(t) {
		return s.call(t, function(t) {
			return null != t
		})
	}

	function z(t) {
		return t.length > 0 ? n.fn.concat.apply([], t) : t
	}

	function F(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function q(t) {
		return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
	}

	function H(t, e) {
		return "number" != typeof e || c[F(t)] ? e : e + "px"
	}

	function I(t) {
		var e, n;
		return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
	}

	function V(t) {
		return "children" in t ? o.call(t.children) : n.map(t.childNodes, function(t) {
			return 1 == t.nodeType ? t : void 0
		})
	}

	function B(n, i, r) {
		for(e in i) r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
	}

	function U(t, e) {
		return null == e ? n(t) : n(t).filter(e)
	}

	function J(t, e, n, i) {
		return Z(e) ? e.call(t, n, i) : e
	}

	function X(t, e, n) {
		null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
	}

	function W(e, n) {
		var i = e.className || "",
			r = i && i.baseVal !== t;
		return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
	}

	function Y(t) {
		var e;
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
		} catch(i) {
			return t
		}
	}

	function G(t, e) {
		e(t);
		for(var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e)
	}
	var t, e, n, i, C, N, r = [],
		o = r.slice,
		s = r.filter,
		a = window.document,
		u = {},
		f = {},
		c = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		l = /^\s*<(\w+|!)[^>]*>/,
		h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		d = /^(?:body|html)$/i,
		m = /([A-Z])/g,
		g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		v = ["after", "prepend", "before", "append"],
		y = a.createElement("table"),
		x = a.createElement("tr"),
		b = {
			tr: a.createElement("tbody"),
			tbody: y,
			thead: y,
			tfoot: y,
			td: x,
			th: x,
			"*": a.createElement("div")
		},
		w = /complete|loaded|interactive/,
		E = /^[\w-]*$/,
		j = {},
		S = j.toString,
		T = {},
		O = a.createElement("div"),
		P = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		A = Array.isArray || function(t) {
			return t instanceof Array
		};
	return T.matches = function(t, e) {
		if(!e || !t || 1 !== t.nodeType) return !1;
		var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if(n) return n.call(t, e);
		var i, r = t.parentNode,
			o = !r;
		return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i
	}, C = function(t) {
		return t.replace(/-+(.)?/g, function(t, e) {
			return e ? e.toUpperCase() : ""
		})
	}, N = function(t) {
		return s.call(t, function(e, n) {
			return t.indexOf(e) == n
		})
	}, T.fragment = function(e, i, r) {
		var s, u, f;
		return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function() {
			f.removeChild(this)
		})), R(r) && (u = n(s), n.each(r, function(t, e) {
			g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
		})), s
	}, T.Z = function(t, e) {
		return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
	}, T.isZ = function(t) {
		return t instanceof T.Z
	}, T.init = function(e, i) {
		var r;
		if(!e) return T.Z();
		if("string" == typeof e)
			if(e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i), e = null;
			else {
				if(i !== t) return n(i).find(e);
				r = T.qsa(a, e)
			}
		else {
			if(Z(e)) return n(a).ready(e);
			if(T.isZ(e)) return e;
			if(A(e)) r = k(e);
			else if(D(e)) r = [e], e = null;
			else if(l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;
			else {
				if(i !== t) return n(i).find(e);
				r = T.qsa(a, e)
			}
		}
		return T.Z(r, e)
	}, n = function(t, e) {
		return T.init(t, e)
	}, n.extend = function(t) {
		var e, n = o.call(arguments, 1);
		return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
			B(t, n, e)
		}), t
	}, T.qsa = function(t, e) {
		var n, i = "#" == e[0],
			r = !i && "." == e[0],
			s = i || r ? e.slice(1) : e,
			a = E.test(s);
		return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
	}, n.contains = a.documentElement.contains ? function(t, e) {
		return t !== e && t.contains(e)
	} : function(t, e) {
		for(; e && (e = e.parentNode);)
			if(e === t) return !0;
		return !1
	}, n.type = L, n.isFunction = Z, n.isWindow = $, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function(t) {
		var e;
		for(e in t) return !1;
		return !0
	}, n.inArray = function(t, e, n) {
		return r.indexOf.call(e, t, n)
	}, n.camelCase = C, n.trim = function(t) {
		return null == t ? "" : String.prototype.trim.call(t)
	}, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function(t, e) {
		var n, r, o, i = [];
		if(M(t))
			for(r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
		else
			for(o in t) n = e(t[o], o), null != n && i.push(n);
		return z(i)
	}, n.each = function(t, e) {
		var n, i;
		if(M(t)) {
			for(n = 0; n < t.length; n++)
				if(e.call(t[n], n, t[n]) === !1) return t
		} else
			for(i in t)
				if(e.call(t[i], i, t[i]) === !1) return t; return t
	}, n.grep = function(t, e) {
		return s.call(t, e)
	}, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		j["[object " + e + "]"] = e.toLowerCase()
	}), n.fn = {
		forEach: r.forEach,
		reduce: r.reduce,
		push: r.push,
		sort: r.sort,
		indexOf: r.indexOf,
		concat: r.concat,
		map: function(t) {
			return n(n.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return n(o.apply(this, arguments))
		},
		ready: function(t) {
			return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function() {
				t(n)
			}, !1), this
		},
		get: function(e) {
			return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(t) {
			return r.every.call(this, function(e, n) {
				return t.call(e, n, e) !== !1
			}), this
		},
		filter: function(t) {
			return Z(t) ? this.not(this.not(t)) : n(s.call(this, function(e) {
				return T.matches(e, t)
			}))
		},
		add: function(t, e) {
			return n(N(this.concat(n(t, e))))
		},
		is: function(t) {
			return this.length > 0 && T.matches(this[0], t)
		},
		not: function(e) {
			var i = [];
			if(Z(e) && e.call !== t) this.each(function(t) {
				e.call(this, t) || i.push(this)
			});
			else {
				var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
				this.forEach(function(t) {
					r.indexOf(t) < 0 && i.push(t)
				})
			}
			return n(i)
		},
		has: function(t) {
			return this.filter(function() {
				return D(t) ? n.contains(this, t) : n(this).find(t).size()
			})
		},
		eq: function(t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first: function() {
			var t = this[0];
			return t && !D(t) ? t : n(t)
		},
		last: function() {
			var t = this[this.length - 1];
			return t && !D(t) ? t : n(t)
		},
		find: function(t) {
			var e, i = this;
			return e = t ? "object" == typeof t ? n(t).filter(function() {
				var t = this;
				return r.some.call(i, function(e) {
					return n.contains(e, t)
				})
			}) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function() {
				return T.qsa(this, t)
			}) : []
		},
		closest: function(t, e) {
			var i = this[0],
				r = !1;
			for("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) i = i !== e && !_(i) && i.parentNode;
			return n(i)
		},
		parents: function(t) {
			for(var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
				return(t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
			});
			return U(e, t)
		},
		parent: function(t) {
			return U(N(this.pluck("parentNode")), t)
		},
		children: function(t) {
			return U(this.map(function() {
				return V(this)
			}), t)
		},
		contents: function() {
			return this.map(function() {
				return o.call(this.childNodes)
			})
		},
		siblings: function(t) {
			return U(this.map(function(t, e) {
				return s.call(V(e.parentNode), function(t) {
					return t !== e
				})
			}), t)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(t) {
			return n.map(this, function(e) {
				return e[t]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
			})
		},
		replaceWith: function(t) {
			return this.before(t).remove()
		},
		wrap: function(t) {
			var e = Z(t);
			if(this[0] && !e) var i = n(t).get(0),
				r = i.parentNode || this.length > 1;
			return this.each(function(o) {
				n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
			})
		},
		wrapAll: function(t) {
			if(this[0]) {
				n(this[0]).before(t = n(t));
				for(var e;
					(e = t.children()).length;) t = e.first();
				n(t).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			var e = Z(t);
			return this.each(function(i) {
				var r = n(this),
					o = r.contents(),
					s = e ? t.call(this, i) : t;
				o.length ? o.wrapAll(s) : r.append(s)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n(this).replaceWith(n(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(e) {
			return this.each(function() {
				var i = n(this);
				(e === t ? "none" == i.css("display") : e) ? i.show(): i.hide()
			})
		},
		prev: function(t) {
			return n(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next: function(t) {
			return n(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var i = this.innerHTML;
				n(this).empty().append(J(this, t, e, i))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = J(this, t, e, this.textContent);
				this.textContent = null == n ? "" : "" + n
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(n, i) {
			var r;
			return "string" != typeof n || 1 in arguments ? this.each(function(t) {
				if(1 === this.nodeType)
					if(D(n))
						for(e in n) X(this, e, n[e]);
					else X(this, n, J(this, i, t, this.getAttribute(n)))
			}) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
		},
		removeAttr: function(t) {
			return this.each(function() {
				1 === this.nodeType && X(this, t)
			})
		},
		prop: function(t, e) {
			return t = P[t] || t, 1 in arguments ? this.each(function(n) {
				this[t] = J(this, e, n, this[t])
			}) : this[0] && this[0][t]
		},
		data: function(e, n) {
			var i = "data-" + e.replace(m, "-$1").toLowerCase(),
				r = 1 in arguments ? this.attr(i, n) : this.attr(i);
			return null !== r ? Y(r) : t
		},
		val: function(t) {
			return 0 in arguments ? this.each(function(e) {
				this.value = J(this, t, e, this.value)
			}) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(t) {
			if(t) return this.each(function(e) {
				var i = n(this),
					r = J(this, t, e, i.offset()),
					o = i.offsetParent().offset(),
					s = {
						top: r.top - o.top,
						left: r.left - o.left
					};
				"static" == i.css("position") && (s.position = "relative"), i.css(s)
			});
			if(!this.length) return null;
			var e = this[0].getBoundingClientRect();
			return {
				left: e.left + window.pageXOffset,
				top: e.top + window.pageYOffset,
				width: Math.round(e.width),
				height: Math.round(e.height)
			}
		},
		css: function(t, i) {
			if(arguments.length < 2) {
				var r = this[0],
					o = getComputedStyle(r, "");
				if(!r) return;
				if("string" == typeof t) return r.style[C(t)] || o.getPropertyValue(t);
				if(A(t)) {
					var s = {};
					return n.each(t, function(t, e) {
						s[e] = r.style[C(e)] || o.getPropertyValue(e)
					}), s
				}
			}
			var a = "";
			if("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function() {
				this.style.removeProperty(F(t))
			});
			else
				for(e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function() {
					this.style.removeProperty(F(e))
				});
			return this.each(function() {
				this.style.cssText += ";" + a
			})
		},
		index: function(t) {
			return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(t) {
			return t ? r.some.call(this, function(t) {
				return this.test(W(t))
			}, q(t)) : !1
		},
		addClass: function(t) {
			return t ? this.each(function(e) {
				if("className" in this) {
					i = [];
					var r = W(this),
						o = J(this, t, e, r);
					o.split(/\s+/g).forEach(function(t) {
						n(this).hasClass(t) || i.push(t)
					}, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
				}
			}) : this
		},
		removeClass: function(e) {
			return this.each(function(n) {
				if("className" in this) {
					if(e === t) return W(this, "");
					i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function(t) {
						i = i.replace(q(t), " ")
					}), W(this, i.trim())
				}
			})
		},
		toggleClass: function(e, i) {
			return e ? this.each(function(r) {
				var o = n(this),
					s = J(this, e, r, W(this));
				s.split(/\s+/g).forEach(function(e) {
					(i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e)
				})
			}) : this
		},
		scrollTop: function(e) {
			if(this.length) {
				var n = "scrollTop" in this[0];
				return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
					this.scrollTop = e
				} : function() {
					this.scrollTo(this.scrollX, e)
				})
			}
		},
		scrollLeft: function(e) {
			if(this.length) {
				var n = "scrollLeft" in this[0];
				return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
					this.scrollLeft = e
				} : function() {
					this.scrollTo(e, this.scrollY)
				})
			}
		},
		position: function() {
			if(this.length) {
				var t = this[0],
					e = this.offsetParent(),
					i = this.offset(),
					r = d.test(e[0].nodeName) ? {
						top: 0,
						left: 0
					} : e.offset();
				return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
					top: i.top - r.top,
					left: i.left - r.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
				return t
			})
		}
	}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
		var i = e.replace(/./, function(t) {
			return t[0].toUpperCase()
		});
		n.fn[e] = function(r) {
			var o, s = this[0];
			return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
				s = n(this), s.css(e, J(this, r, t, s[e]()))
			})
		}
	}), v.forEach(function(t, e) {
		var i = e % 2;
		n.fn[t] = function() {
			var t, o, r = n.map(arguments, function(e) {
					return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e)
				}),
				s = this.length > 1;
			return r.length < 1 ? this : this.each(function(t, u) {
				o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
				var f = n.contains(a.documentElement, o);
				r.forEach(function(t) {
					if(s) t = t.cloneNode(!0);
					else if(!o) return n(t).remove();
					o.insertBefore(t, u), f && G(t, function(t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		}, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
			return n(e)[t](this), this
		}
	}), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
	function(t) {
		function l(t) {
			return t._zid || (t._zid = e++)
		}

		function h(t, e, n, i) {
			if(e = p(e), e.ns) var r = d(e.ns);
			return(s[l(t)] || []).filter(function(t) {
				return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
			})
		}

		function p(t) {
			var e = ("" + t).split(".");
			return {
				e: e[0],
				ns: e.slice(1).sort().join(" ")
			}
		}

		function d(t) {
			return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
		}

		function m(t, e) {
			return t.del && !u && t.e in f || !!e
		}

		function g(t) {
			return c[t] || u && f[t] || t
		}

		function v(e, i, r, o, a, u, f) {
			var h = l(e),
				d = s[h] || (s[h] = []);
			i.split(/\s/).forEach(function(i) {
				if("ready" == i) return t(document).ready(r);
				var s = p(i);
				s.fn = r, s.sel = a, s.e in c && (r = function(e) {
					var n = e.relatedTarget;
					return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
				}), s.del = u;
				var l = u || r;
				s.proxy = function(t) {
					if(t = j(t), !t.isImmediatePropagationStopped()) {
						t.data = o;
						var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
						return i === !1 && (t.preventDefault(), t.stopPropagation()), i
					}
				}, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
			})
		}

		function y(t, e, n, i, r) {
			var o = l(t);
			(e || "").split(/\s/).forEach(function(e) {
				h(t, e, n, i).forEach(function(e) {
					delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
				})
			})
		}

		function j(e, i) {
			return(i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
				var r = i[t];
				e[t] = function() {
					return this[n] = x, r && r.apply(i, arguments)
				}, e[n] = b
			}), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
		}

		function S(t) {
			var e, i = {
				originalEvent: t
			};
			for(e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
			return j(i, t)
		}
		var n, e = 1,
			i = Array.prototype.slice,
			r = t.isFunction,
			o = function(t) {
				return "string" == typeof t
			},
			s = {},
			a = {},
			u = "onfocusin" in window,
			f = {
				focus: "focusin",
				blur: "focusout"
			},
			c = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
			add: v,
			remove: y
		}, t.proxy = function(e, n) {
			var s = 2 in arguments && i.call(arguments, 2);
			if(r(e)) {
				var a = function() {
					return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
				};
				return a._zid = l(e), a
			}
			if(o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
			throw new TypeError("expected function")
		}, t.fn.bind = function(t, e, n) {
			return this.on(t, e, n)
		}, t.fn.unbind = function(t, e) {
			return this.off(t, e)
		}, t.fn.one = function(t, e, n, i) {
			return this.on(t, e, n, i, 1)
		};
		var x = function() {
				return !0
			},
			b = function() {
				return !1
			},
			w = /^([A-Z]|returnValue$|layer[XY]$)/,
			E = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		t.fn.delegate = function(t, e, n) {
			return this.on(e, t, n)
		}, t.fn.undelegate = function(t, e, n) {
			return this.off(e, t, n)
		}, t.fn.live = function(e, n) {
			return t(document.body).delegate(this.selector, e, n), this
		}, t.fn.die = function(e, n) {
			return t(document.body).undelegate(this.selector, e, n), this
		}, t.fn.on = function(e, s, a, u, f) {
			var c, l, h = this;
			return e && !o(e) ? (t.each(e, function(t, e) {
				h.on(t, s, a, e, f)
			}), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function(n, r) {
				f && (c = function(t) {
					return y(r, t.type, u), u.apply(this, arguments)
				}), s && (l = function(e) {
					var n, o = t(e.target).closest(s, r).get(0);
					return o && o !== r ? (n = t.extend(S(e), {
						currentTarget: o,
						liveFired: r
					}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
				}), v(r, e, u, a, s, l || c)
			}))
		}, t.fn.off = function(e, i, s) {
			var a = this;
			return e && !o(e) ? (t.each(e, function(t, e) {
				a.off(t, i, e)
			}), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function() {
				y(this, e, s, i)
			}))
		}, t.fn.trigger = function(e, n) {
			return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function() {
				"dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
			})
		}, t.fn.triggerHandler = function(e, n) {
			var i, r;
			return this.each(function(s, a) {
				i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function(t, e) {
					return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), r
		}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
			t.fn[e] = function(t) {
				return t ? this.bind(e, t) : this.trigger(e)
			}
		}), ["focus", "blur"].forEach(function(e) {
			t.fn[e] = function(t) {
				return t ? this.bind(e, t) : this.each(function() {
					try {
						this[e]()
					} catch(t) {}
				}), this
			}
		}), t.Event = function(t, e) {
			o(t) || (e = t, t = e.type);
			var n = document.createEvent(a[t] || "Events"),
				i = !0;
			if(e)
				for(var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
			return n.initEvent(t, i, !0), j(n)
		}
	}(Zepto),
	function(t) {
		function l(e, n, i) {
			var r = t.Event(n);
			return t(e).trigger(r, i), !r.isDefaultPrevented()
		}

		function h(t, e, i, r) {
			return t.global ? l(e || n, i, r) : void 0
		}

		function p(e) {
			e.global && 0 === t.active++ && h(e, null, "ajaxStart")
		}

		function d(e) {
			e.global && !--t.active && h(e, null, "ajaxStop")
		}

		function m(t, e) {
			var n = e.context;
			return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
		}

		function g(t, e, n, i) {
			var r = n.context,
				o = "success";
			n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n)
		}

		function v(t, e, n, i, r) {
			var o = i.context;
			i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i)
		}

		function y(t, e, n) {
			var i = n.context;
			n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n)
		}

		function x() {}

		function b(t) {
			return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
		}

		function w(t, e) {
			return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
		}

		function E(e) {
			e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0)
		}

		function j(e, n, i, r) {
			return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
				url: e,
				data: n,
				success: i,
				dataType: r
			}
		}

		function T(e, n, i, r) {
			var o, s = t.isArray(n),
				a = t.isPlainObject(n);
			t.each(n, function(n, u) {
				o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? T(e, u, i, n) : e.add(n, u)
			})
		}
		var i, r, e = 0,
			n = window.document,
			o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			s = /^(?:text|application)\/javascript/i,
			a = /^(?:text|application)\/xml/i,
			u = "application/json",
			f = "text/html",
			c = /^\s*$/;
		t.active = 0, t.ajaxJSONP = function(i, r) {
			if(!("type" in i)) return t.ajax(i);
			var f, h, o = i.jsonpCallback,
				s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
				a = n.createElement("script"),
				u = window[s],
				c = function(e) {
					t(a).triggerHandler("error", e || "abort")
				},
				l = {
					abort: c
				};
			return r && r.promise(l), t(a).on("load error", function(e, n) {
				clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
			}), m(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
				f = arguments
			}, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
				c("timeout")
			}, i.timeout)), l)
		}, t.ajaxSettings = {
			type: "GET",
			beforeSend: x,
			success: x,
			error: x,
			complete: x,
			context: null,
			global: !0,
			xhr: function() {
				return new window.XMLHttpRequest
			},
			accepts: {
				script: "text/javascript, application/javascript, application/x-javascript",
				json: u,
				xml: "application/xml, text/xml",
				html: f,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, t.ajax = function(e) {
			var n = t.extend({}, e || {}),
				o = t.Deferred && t.Deferred();
			for(i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
			p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n);
			var s = n.dataType,
				a = /\?.+=\?/.test(n.url);
			if(a && (s = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != s && "jsonp" != s) || (n.url = w(n.url, "_=" + Date.now())), "jsonp" == s) return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
			var j, u = n.accepts[s],
				f = {},
				l = function(t, e) {
					f[t.toLowerCase()] = [t, e]
				},
				h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
				d = n.xhr(),
				y = d.setRequestHeader;
			if(o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
				for(r in n.headers) l(r, n.headers[r]);
			if(d.setRequestHeader = l, d.onreadystatechange = function() {
					if(4 == d.readyState) {
						d.onreadystatechange = x, clearTimeout(j);
						var e, i = !1;
						if(d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
							s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
							try {
								"script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e))
							} catch(r) {
								i = r
							}
							i ? v(i, "parsererror", d, n, o) : g(e, d, n, o)
						} else v(d.statusText || null, d.status ? "error" : "abort", d, n, o)
					}
				}, m(d, n) === !1) return d.abort(), v(null, "abort", d, n, o), d;
			if(n.xhrFields)
				for(r in n.xhrFields) d[r] = n.xhrFields[r];
			var S = "async" in n ? n.async : !0;
			d.open(n.type, n.url, S, n.username, n.password);
			for(r in f) y.apply(d, f[r]);
			return n.timeout > 0 && (j = setTimeout(function() {
				d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o)
			}, n.timeout)), d.send(n.data ? n.data : null), d
		}, t.get = function() {
			return t.ajax(j.apply(null, arguments))
		}, t.post = function() {
			var e = j.apply(null, arguments);
			return e.type = "POST", t.ajax(e)
		}, t.getJSON = function() {
			var e = j.apply(null, arguments);
			return e.dataType = "json", t.ajax(e)
		}, t.fn.load = function(e, n, i) {
			if(!this.length) return this;
			var a, r = this,
				s = e.split(/\s/),
				u = j(e, n, i),
				f = u.success;
			return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function(e) {
				r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
			}, t.ajax(u), this
		};
		var S = encodeURIComponent;
		t.param = function(t, e) {
			var n = [];
			return n.add = function(t, e) {
				this.push(S(t) + "=" + S(e))
			}, T(n, t, e), n.join("&").replace(/%20/g, "+")
		}
	}(Zepto),
	function(t) {
		t.fn.serializeArray = function() {
			var e, n, i = [];
			return t([].slice.call(this.get(0).elements)).each(function() {
				e = t(this), n = e.attr("type"), "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && i.push({
					name: e.attr("name"),
					value: e.val()
				})
			}), i
		}, t.fn.serialize = function() {
			var t = [];
			return this.serializeArray().forEach(function(e) {
				t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
			}), t.join("&")
		}, t.fn.submit = function(e) {
			if(e) this.bind("submit", e);
			else if(this.length) {
				var n = t.Event("submit");
				this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(Zepto),
	function(t) {
		"__proto__" in {} || t.extend(t.zepto, {
			Z: function(e, n) {
				return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
			},
			isZ: function(e) {
				return "array" === t.type(e) && "__Z" in e
			}
		});
		try {
			getComputedStyle(void 0)
		} catch(e) {
			var n = getComputedStyle;
			window.getComputedStyle = function(t) {
				try {
					return n(t)
				} catch(e) {
					return null
				}
			}
		}
	}(Zepto);
var $ = Zepto;

if(!this.JSON) {
	this.JSON = {};
}

(function() {

	function f(n) {
		// Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}

	if(typeof Date.prototype.toJSON !== 'function') {

		Date.prototype.toJSON = function(key) {

			return isFinite(this.valueOf()) ?
				this.getUTCFullYear() + '-' +
				f(this.getUTCMonth() + 1) + '-' +
				f(this.getUTCDate()) + 'T' +
				f(this.getUTCHours()) + ':' +
				f(this.getUTCMinutes()) + ':' +
				f(this.getUTCSeconds()) + 'Z' : null;
		};

		String.prototype.toJSON =
			Number.prototype.toJSON =
			Boolean.prototype.toJSON = function(key) {
				return this.valueOf();
			};
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap,
		indent,
		meta = { // table of character substitutions
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"': '\\"',
			'\\': '\\\\'
		},
		rep;

	function quote(string) {

		// If the string contains no control characters, no quote characters, and no
		// backslash characters, then we can safely slap some quotes around it.
		// Otherwise we must also replace the offending characters with safe escape
		// sequences.

		escapable.lastIndex = 0;
		return escapable.test(string) ?
			'"' + string.replace(escapable, function(a) {
				var c = meta[a];
				return typeof c === 'string' ? c :
					'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
			}) + '"' :
			'"' + string + '"';
	}

	function str(key, holder) {

		// Produce a string from holder[key].

		var i, // The loop counter.
			k, // The member key.
			v, // The member value.
			length,
			mind = gap,
			partial,
			value = holder[key];

		// If the value has a toJSON method, call it to obtain a replacement value.

		if(value && typeof value === 'object' &&
			typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}

		// If we were called with a replacer function, then call the replacer to
		// obtain a replacement value.

		if(typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}

		// What happens next depends on the value's type.

		switch(typeof value) {
			case 'string':
				return quote(value);

			case 'number':

				// JSON numbers must be finite. Encode non-finite numbers as null.

				return isFinite(value) ? String(value) : 'null';

			case 'boolean':
			case 'null':

				// If the value is a boolean or null, convert it to a string. Note:
				// typeof null does not produce 'null'. The case is included here in
				// the remote chance that this gets fixed someday.

				return String(value);

				// If the type is 'object', we might be dealing with an object or an array or
				// null.

			case 'object':

				// Due to a specification blunder in ECMAScript, typeof null is 'object',
				// so watch out for that case.

				if(!value) {
					return 'null';
				}

				// Make an array to hold the partial results of stringifying this object value.

				gap += indent;
				partial = [];

				// Is the value an array?

				if(Object.prototype.toString.apply(value) === '[object Array]') {

					// The value is an array. Stringify every element. Use null as a placeholder
					// for non-JSON values.

					length = value.length;
					for(i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}

					// Join all of the elements together, separated with commas, and wrap them in
					// brackets.

					v = partial.length === 0 ? '[]' :
						gap ? '[\n' + gap +
						partial.join(',\n' + gap) + '\n' +
						mind + ']' :
						'[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}

				// If the replacer is an array, use it to select the members to be stringified.

				if(rep && typeof rep === 'object') {
					length = rep.length;
					for(i = 0; i < length; i += 1) {
						k = rep[i];
						if(typeof k === 'string') {
							v = str(k, value);
							if(v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				} else {

					// Otherwise, iterate through all of the keys in the object.

					for(k in value) {
						if(Object.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if(v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				}

				// Join all of the member texts together, separated with commas,
				// and wrap them in braces.

				v = partial.length === 0 ? '{}' :
					gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
					mind + '}' : '{' + partial.join(',') + '}';
				gap = mind;
				return v;
		}
	}

	// If the JSON object does not yet have a stringify method, give it one.

	if(typeof JSON.stringify !== 'function') {
		JSON.stringify = function(value, replacer, space) {
			var i;
			gap = '';
			indent = '';

			// If the space parameter is a number, make an indent string containing that
			// many spaces.

			if(typeof space === 'number') {
				for(i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if(typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if(replacer && typeof replacer !== 'function' &&
				(typeof replacer !== 'object' ||
					typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {
				'': value
			});
		};
	}

	if(typeof JSON.parse !== 'function') {
		JSON.parse = function(text, reviver) {
			var j;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if(value && typeof value === 'object') {
					for(k in value) {
						if(Object.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if(v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}
			text = String(text);
			cx.lastIndex = 0;
			if(cx.test(text)) {
				text = text.replace(cx, function(a) {
					return '\\u' +
						('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}
			if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')');
				return typeof reviver === 'function' ?
					walk({
						'': j
					}, '') : j;
			}
			throw new SyntaxError('JSON.parse');
		};
	}
}());

var Tools = function() {
	/*
	   动态获取form下所有input元素 封装成对象返回 Key:name;value:value
	   */
	function formParamsObj(parent) {

		var obj = {};
		var select = $("select", parent);
		if(select) {
			for(var i = 0; i < select.length; i++) {
				var item = $(select[i]);
				var name = item.attr("name")
				if(obj[name] != undefined) {
					continue;
				}
				obj[name] = item.val();
			}
		}
		var inputs = $("input:input", parent);
		if(!inputs || inputs.length == 0) {
			return obj;
		}

		for(var i = inputs.length - 1; i >= 0; i--) {
			var item = $(inputs[i]);
			var name = item.attr("name");

			if(obj[name] != undefined) {
				continue;
			}

			getValue(item, obj);
		};

		return obj;
	};

	///input 中html转义
	function htmlEncode(str) {
		return str && (typeof str === "string") ? str.replace(/[<>&"]/g, function(target) {
			return {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"\"": "&quot;",
				"\'": "&#39;"
			}[target];
		}) : str;
	};

	//获取input元素值
	function getValue(elem, obj) {
		/*button checkbox file hidden image password radio reset submit text*/
		var type = elem.attr("type").toLowerCase();
		switch(type) {
			case "text":
				obj[elem.attr("name")] = htmlEncode(elem.val().replace(regConfigs.Trim, ""));
				break;
			case "hidden":
				obj[elem.attr("name")] = htmlEncode(elem.val().replace(regConfigs.Trim, ""));
				break;
			case "password":
				obj[elem.attr("name")] = htmlEncode(elem.val().replace(regConfigs.Trim, ""));
				break;
			case "radio":
				obj[elem.attr("name")] = $('input[name="' + elem.attr("name") + '"]:checked').val().replace(regConfigs.Trim, "");
				break;
			case "checkbox":
				obj[elem.attr("name")] = $("[name='" + elem.attr("name") + "'][checked]").val().replace(regConfigs.Trim, "");
				break;
			case "select":
				obj[elem.attr("name")] = htmlEncode(elem.val().replace(regConfigs.Trim, ""));
				break;
		}
	}

	function htmlDecode(str) {
		var s = "";
		if(str.length == 0) return "";
		s = str.replace(/&amp;/g, "&");
		s = s.replace(/&lt;/g, "<");
		s = s.replace(/&gt;/g, ">");
		s = s.replace(/&nbsp;/g, " ");
		s = s.replace(/&#39;/g, "\'");
		s = s.replace(/&quot;/g, "\"");
		return s;
	};

	function jsonp(url, callback) {

		$.ajax({
			type: "Get",
			url: url,
			dataType: "jsonp",
			jsonp: "callback",
			cache: false,
			async: true,
			success: function(json) {

				if(callback && callback instanceof Function) {
					callback(json);
				} else {
					console.log(" callback method is undefined or not a function !");
				}

			},
			error: function(e) {
				//失败执行  
				console.log(e.status + ',' + e.statusText);
			}
		});
	};

	function post(data, url, callback) {

		if(data == undefined) {
			console.log("current form is not exist input element ");
			return;
		}

		if(!url || url == "") {
			console.log("form post url  is not find ");
			return;
		}

		$.ajax({
			url: url,
			type: 'POST', //GET
			async: true, //或false,是否异步
			data: JSON.stringify(data),
			//timeout:3000,    //超时时间
			dataType: 'text', //返回的数据格式：json/xml/html/script/jsonp/text 
			success: function(json, textStatus, jqXHR) {
				var data = JSON.parse(json);
				if(callback && callback instanceof Function) {
					callback(data);
				} else {
					console.log(" callback method is undefined or not a function !");
				}
			},
			error: function(e) {
				console.log(e.status + ',' + e.statusText);
			}
		})
	}

	//阻止浏览器的默认行为 
	function stopDefault(e) {
		//阻止默认浏览器动作(W3C) 
		if(e && e.preventDefault) {
			e.preventDefault();
		} else {
			//IE中阻止函数器默认动作的方式 
			window.event.returnValue = false;
		}

		return false;
	}

	//正则
	var regConfigs = {
		"Phone": /^0?1[3|4|5|8][0-9]\d{8}$/, //手机号
		"Mail": /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/, //邮箱  
		"Empty": /^\s*$/, //空字符
		"DyPassword": /^\d{6}$/, //动态密码 6位数字
		"Password": /^[A-Za-z0-9]{6,20}$/, // 密码 6-20个英文字母或数字
		"Trim": /(^\s*)|(\s*$)/g, // 去除前后空格
		"ReplaceKey": "\\[([^\\[\\]]*?)\\]", // 模板关键字替换
		"IP": /^[0-9.]{1,20}$/g, // RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256
		"Integer": /^[-]{0,1}[0-9]{1,}$/,
		"Number": /^[0-9]+$/,
		"Money": /^[0-9]+[\.][0-9]{0,3}$/
	};

	//事件类型：http://www.w3school.com.cn/jquery/jquery_ref_events.asp
	var eventTypes = {
		"Blur": "blur",
		"Click": "click",
		"Change": "change",
		"DblClick": "dblclick",
		"Focus": "focus",
		"KeyDown": "keydown",
		"KeyUp": "keyup",
		"MouseDown": "mousedown",
		"MouseEnter": "mouseenter",
		"MouseLeave": "mouseleave",
		"MouseMove": "mousemove",
		"MouseOut": "mouseout",
		"MouseOver": "mouseover",
		"MouseUp": "mouseup",
		"Resize": "resize",
		"Ccroll": "scroll",
		"Select": "select",
		"Submit": "submit",
		"Unload": "unload"
	};
	var parseTemplate = function(html, item) {
		if(html == "" || item == null) {
			return "";
		}
		return html.replace(new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'), function(node, key) {
			return item[key];
		});
	}
	var getParams = function(item, arr) {
		var obj = {};
		for(var i in arr) {
			obj[arr[i]] = item.data(arr[i]);
		}
		return obj;
	}
	return {
		init: function() {
			$.prototype.getFormParamsObj = formParamsObj;
			$.prototype.formPost = post;
		},
		post: post,
		formParamsObj: formParamsObj,
		regConfigs: regConfigs,
		eventTypes: eventTypes,
		parseTemplate: parseTemplate,
		stopDefault: stopDefault,
		getParams: getParams
	}
}();

var LazyList = function(list, callback) {
	var count = list.length,
		results = [];
	if(list && count > 0) {
		list.forEach(function(item, index) {
			item(function(result) {
				results[index] = result;
				count--;
				if(count === 0) {
					callback.apply(null, results);
				}
			});
		});
	} else {
		callback();
	}
};

var lastrun = function(time) {
	var handler;
	time = time || 1;
	return function(fn) {
		if(handler) {
			clearTimeout(handler);
		}
		var self = this;
		var argus = Array.prototype.slice.call(arguments, 1);
		handler = setTimeout(function() {
			handler = null;
			fn.apply(self, argus);
		}, time);
	};
};

var dropload = (function($) {
	'use strict';
	var win = window;
	var doc = document;
	var $win = $(win);
	var $doc = $(doc);
	var instance = null;
	$.fn.dropload = function(options) {
		return new MyDropLoad(this, options);
	};
	var MyDropLoad = function(element, options) {
		var me = this;
		me.$element = element;
		// 上方是否插入DOM
		me.upInsertDOM = false;
		// loading状态
		me.loading = false;
		// 是否锁定
		me.isLockUp = false;
		me.isLockDown = false;
		// 是否有数据
		me.isData = true;
		me._scrollTop = 0;
		me._threshold = 0;
		me.init(options);
	};

	// 初始化
	MyDropLoad.prototype.init = function(options) {
		var me = this;
		me.opts = $.extend(true, {}, {
			scrollArea: me.$element, // 滑动区域
			domUp: { // 上方DOM
				domClass: 'dropload-up',
				domRefresh: '<div class="dropload-refresh">↓下拉显示更多</div>', //
				domUpdate: '<div class="dropload-update">↑查看更多</div>', //
				domLoad: '<div class="dropload-load"><span class="loading"></span>loading...</div>'
			},
			domDown: { // 下方DOM
				domClass: 'dropload-down',
				domRefresh: '<div class="dropload-refresh">↑查看更多</div>', //<div class="dropload-refresh">upper more</div>
				domLoad: '<div class="dropload-load"><span class="loading"></span>loading...</div>',
				domNoData: '<div class="dropload-noData">暂无数据</div>' //
			},
			autoLoad: true, // 自动加载
			distance: 50, // 拉动距离
			threshold: '', // 提前加载距离
			loadUpFn: '', // 上方function
			loadDownFn: '' // 下方function
		}, options);

		// 如果加载下方，事先在下方插入DOM
		if(me.opts.loadDownFn != '') {
			me.$element.append('<div class="' + me.opts.domDown.domClass + '">' + me.opts.domDown.domRefresh + '</div>');
			me.$domDown = $('.' + me.opts.domDown.domClass);
		}

		// 计算提前加载距离
		if(!!me.$domDown && me.opts.threshold === '') {
			// 默认滑到加载区2/3处时加载
			me._threshold = Math.floor(me.$domDown.height() * 1 / 3);
		} else {
			me._threshold = me.opts.threshold;
		}

		// 判断滚动区域
		if(me.opts.scrollArea == win) {
			me.$scrollArea = $win;
			// 获取文档高度
			me._scrollContentHeight = $doc.height();
			// 获取win显示区高度  —— 这里有坑
			me._scrollWindowHeight = doc.documentElement.clientHeight;
		} else {
			me.$scrollArea = me.opts.scrollArea;
			me._scrollContentHeight = me.$element[0].scrollHeight;
			me._scrollWindowHeight = me.$element.height();
		}
		fnAutoLoad(me);

		// 窗口调整
		$win.on('resize', function() {
			clearTimeout(me.timer);
			me.timer = setTimeout(function() {
				if(me.opts.scrollArea == win) {
					// 重新获取win显示区高度
					me._scrollWindowHeight = win.innerHeight;
				} else {
					me._scrollWindowHeight = me.$element.height();
				}
				fnAutoLoad(me);
			}, 150);

		});

		// 绑定触摸
		me.$element.on('touchstart', function(e) {
			if(!me.loading) {
				fnTouches(e);
				fnTouchstart(e, me);
			}
		});
		me.$element.on('touchmove', function(e) {
			if(!me.loading) {
				fnTouches(e, me);
				fnTouchmove(e, me);
			}
		});
		me.$element.on('touchend', function() {
			if(!me.loading) {
				fnTouchend(me);
			}
		});

		// 加载下方
		me.$scrollArea.on('scroll', function() {
			me._scrollTop = me.$scrollArea.scrollTop();

			// 滚动页面触发加载数据
			if(me.opts.loadDownFn != '' && !me.loading && !me.isLockDown && (me._scrollContentHeight - me._threshold) <= (me._scrollWindowHeight + me._scrollTop)) {
				loadDown(me);
			}
		});
	};

	// touches
	function fnTouches(e) {
		if(!e.touches) {
			e.touches = e.originalEvent.touches;
		}
	}

	// touchstart
	function fnTouchstart(e, me) {
		me._startY = e.touches[0].pageY;
		// 记住触摸时的scrolltop值
		me.touchScrollTop = me.$scrollArea.scrollTop();
	}

	// touchmove
	function fnTouchmove(e, me) {
		me._curY = e.touches[0].pageY;
		me._moveY = me._curY - me._startY;

		if(me._moveY > 0) {
			me.direction = 'down';
		} else if(me._moveY < 0) {
			me.direction = 'up';
		}

		var _absMoveY = Math.abs(me._moveY);

		// 加载上方
		if(me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp) {
			e.preventDefault();

			me.$domUp = $('.' + me.opts.domUp.domClass);
			// 如果加载区没有DOM
			if(!me.upInsertDOM) {
				me.$element.prepend('<div class="' + me.opts.domUp.domClass + '"></div>');
				me.upInsertDOM = true;
			}

			fnTransition(me.$domUp, 0);

			// 下拉
			if(_absMoveY <= me.opts.distance) {
				me._offsetY = _absMoveY;
				// todo：move时会不断清空、增加dom，有可能影响性能，下同
				me.$domUp.html(me.opts.domUp.domRefresh);
				// 指定距离 < 下拉距离 < 指定距离*2
			} else if(_absMoveY > me.opts.distance && _absMoveY <= me.opts.distance * 2) {
				me._offsetY = me.opts.distance + (_absMoveY - me.opts.distance) * 0.5;
				me.$domUp.html(me.opts.domUp.domUpdate);
				// 下拉距离 > 指定距离*2
			} else {
				me._offsetY = me.opts.distance + me.opts.distance * 0.5 + (_absMoveY - me.opts.distance * 2) * 0.2;
			}

			me.$domUp.css({
				'height': me._offsetY
			});
		}
	}

	// touchend
	function fnTouchend(me) {
		var _absMoveY = Math.abs(me._moveY);
		if(me.opts.loadUpFn != '' && me.touchScrollTop <= 0 && me.direction == 'down' && !me.isLockUp) {
			fnTransition(me.$domUp, 300);

			if(_absMoveY > me.opts.distance) {
				if(!me.loading) {
					me.$domUp.css({
						'height': me.$domUp.children().height()
					});
					me.$domUp.html(me.opts.domUp.domLoad);
					me.loading = true;
					me.opts.loadUpFn(me);
				}

			} else {
				me.$domUp.css({
					'height': '0'
				}).on('webkitTransitionEnd mozTransitionEnd transitionend', function() {
					me.upInsertDOM = false;
					$(this).remove();
				});
			}
			me._moveY = 0;
		}
	}

	// 如果文档高度不大于窗口高度，数据较少，自动加载下方数据
	function fnAutoLoad(me) {
		if(me.opts.loadDownFn != '' && me.opts.autoLoad) {
			if((me._scrollContentHeight - me._threshold) <= me._scrollWindowHeight) {
				loadDown(me);
			}
		}
	}

	// 重新获取文档高度
	function fnRecoverContentHeight(me) {
		if(me.opts.scrollArea == win) {
			me._scrollContentHeight = $doc.height();
		} else {
			me._scrollContentHeight = me.$element[0].scrollHeight;
		}
	}

	// 加载下方
	function loadDown(me) {
		me.direction = 'up';
		if(!me.loading) {
			me.$domDown.html(me.opts.domDown.domLoad);
			me.loading = true;
			me.opts.loadDownFn && me.opts.loadDownFn(me);
		}

	}

	// 锁定
	MyDropLoad.prototype.lock = function(direction) {
		var me = this;
		// 如果不指定方向
		if(direction === undefined) {
			// 如果操作方向向上
			if(me.direction == 'up') {
				me.isLockDown = true;
				// 如果操作方向向下
			} else if(me.direction == 'down') {
				me.isLockUp = true;
			} else {
				me.isLockUp = true;
				me.isLockDown = true;
			}
			// 如果指定锁上方
		} else if(direction == 'up') {
			me.isLockUp = true;
			// 如果指定锁下方
		} else if(direction == 'down') {
			me.isLockDown = true;
			// 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
			me.direction = 'up';
		}
	};

	// 解锁
	MyDropLoad.prototype.unlock = function() {
		var me = this;
		// 简单粗暴解锁
		me.isLockUp = false;
		me.isLockDown = false;
		// 为了解决DEMO5中tab效果bug，因为滑动到下面，再滑上去点tab，direction=down，所以有bug
		me.direction = 'up';
	};

	// 无数据
	MyDropLoad.prototype.noData = function(flag) {
		var me = this;
		if(flag === undefined || flag == true) {
			me.isData = false;
		} else if(flag == false) {
			me.isData = true;
		}
	};

	// 重置
	MyDropLoad.prototype.resetload = function() {
		var me = this;
		if(me.direction == 'down' && me.upInsertDOM) {
			me.$domUp.css({
				'height': '0'
			}).on('webkitTransitionEnd mozTransitionEnd transitionend', function() {
				me.loading = false;
				me.upInsertDOM = false;
				$(this).remove();
				fnRecoverContentHeight(me);
			});
		} else if(me.direction == 'up') {
			me.loading = false;
			// 如果有数据
			if(me.isData) {
				// 加载区修改样式
				me.$domDown.html(me.opts.domDown.domRefresh);
				fnRecoverContentHeight(me);
				fnAutoLoad(me);
			} else {
				// 如果没数据
				me.$domDown.html(me.opts.domDown.domNoData);
			}
		}
	};

	// css过渡
	function fnTransition(dom, num) {
		dom.css({
			'-webkit-transition': 'all ' + num + 'ms',
			'transition': 'all ' + num + 'ms'
		});
	}

	return {
		init: function(item, options) {
			return new MyDropLoad(item, options);
		}
	}
})($);

var userlist = function() {
	var parseControl = function() {
		var multiSelects = $("[data-control='user-list']");
		for(var i = multiSelects.length - 1; i >= 0; i--) {
			var item = $(multiSelects[i]);
			PageListLoader(item, {});
		};
	}
	var get = function(str) {
		if(typeof str === "object") {
			return str;
		}
		return JSON.parse(str);
	}
	var set = function(obj) {
		return JSON.stringify(obj);
	}
	var PageListLoader = function(item, submitData) {
		if(item.css("display") === "none" || item.data("init")) {
			return;
		}
		var data = Tools.getParams(item, ["search", "queryUrl", "pager", "template", "contaner", "size"]);
		if(!data.queryUrl || !data.template || !data.contaner) {
			return;
		}
		var lastRun = lastrun(1);
		data["page"] = 0;
		item.data("data", set(data));
		item.data("submit", set(submitData));
		item.data("init", true);
		var instance = dropload.init(item, {
			scrollArea: window,
			loadDownFn: function(me) {
				lastRun(function() {
					if(item.css("display") === "none") {
						instance.loadDownFn = '';
						item.data("init", false);
						return;
					}
					data = get(item.data("data"))
					data.page = data.page + 1;
					item.data("data", set(data));
					handler(item, me);
				})
			}
		});

	}

	var handler = function(item, me) {
		var data = get(item.data("data"));
		var size = data.size;
		var queryUrl = data.queryUrl + (data.queryUrl.indexOf("?") >= 0 ? "&" : "?") + 'pageindex=' + data["page"] + '&size=' + size;
		LazyList([function(callback) {
			if(data.search) {
				[].forEach.call($(data.search), function(index) {
					parseSearch($(index), queryUrl, item);
				})
				callback({});
			} else {
				callback({});
			}
		}, function(callback) {
			if(queryUrl) {
				Tools.post(get(item.data("submit")), queryUrl, function(result) {
					callback(result);
				});
			}
		}, function(callback) {
			if(data.pager) {
				callback($(data.pager));
			} else {
				callback({});
			}
		}], function(item1, result, pager) {
			if(result && result.Code == 200 && result.Value && result.Value.length > 0) {
				var html = "";
				result.Value.forEach(function(index) {
					html += Tools.parseTemplate($(data.template).html(), index);
				});
				setTimeout(function() {
					$(html).appendTo($(data.contaner));
					me && me.resetload();
				}, 500);
			} else {
				me && me.lock();
				me && me.noData();
				$(".dropload-down").remove();
				setTimeout(function() {
					$(".J-Empty", $(data.contaner)).remove();
					$(data.contaner).append($("<div class='row J-Empty'> <div class='rowin' style='height: 20px;text-align: center'>暂无数据 </div> </div>"));
				}, 500);
			}

		});
	}
	var parseSearch = function(item, sourceUrl, container) {
		var self = this;
		if(item.data("BindEvent")) {
			return;
		}
		if(!item) {
			return;
		}

		var target = item.data("target");
		if(!target) {
			return;
		}
		item.data("BindEvent", true);
		item.bind("click", function() {
			var close = $(this).data("hiden-event-target");
			if(close && $(close).length > 0 && !$(close).hasClass("fn-hiden")) {
				$(close).addClass("fn-hiden");
			}
			var data = get(container.data("data"));
			data.page = 1;
			container.data("data", set(data));
			$(data.contaner).html("");
			container.data("submit", Tools.formParamsObj($(this).parent()));
			handler(container);
		});

		[].forEach.call($(target), function(index) {
			$(index).bind("click", function() {
				var show = $(this).data("show-event-target");
				if(show && $(show).length > 0) {
					$(show).removeClass("fn-hiden");
					$("input", show).val("");
				}
			})
		});
	}
	return {
		init: function() {
			$(function() {
				parseControl();
			})
		},
		loadPage: PageListLoader
	}
}();

var userSum = function() {
	var parseControl = function() {
		var sums = $("[data-control='user-sum']");
		for(var i = sums.length - 1; i >= 0; i--) {
			var item = $(sums[i]);
			parse(item);
		};
	}

	var parse = function(item) {
		var data = Tools.getParams(item, ["target", "item", "time"]);
		parseItem(item, data);
		$(data.time).bind("keyup", function() {
			calculate(null, data, $(data.item));
		})
		calculate(null, data, $(data.item));
	};
	var calculate = function(that, data, allItems) {
		if(that) {
			$(data.item, $(that).parent()).removeClass("this");
			$(that).addClass("this");
			$($(that).data("target")).val($(that).data("money"));
			$($(that).data("type-target")).val($(that).data("type"));
		}

		var money = 0;
		[].forEach.call(allItems, function(index) {
			if($(index).hasClass("this")) {
				money += $(index).data("money");
			}
		})
		var time = $(data.time).val() || 0;
		$(data.target).val(time * money);
	}
	var parseItem = function(item, data) {
		var allItems = $(data.item);
		[].forEach.call(allItems, function(item) {
			$(item).bind("click", function() {
				calculate(this, data, allItems);
			})
		});
	}
	return {
		init: function() {
			$(function() {
				parseControl();

			})
		}
	}
}();

var usertab = {
	init: function() {
		var sums = $("[data-control='user-tab']");
		for(var i = sums.length - 1; i >= 0; i--) {
			var item = $(sums[i]);
			this.parse(item);
		};
	},
	parse: function(item) {
		var data = Tools.getParams(item, ["target"]);
		$(data.target).bind("click", function() {
			var sub = Tools.getParams($(this), ["target", "item"]);
			$(data.target).removeClass("active");
			$(this).addClass("active");
			$(sub.item).removeClass("active");
			$(sub.target).addClass("active");
			userlist.loadPage($(sub.target), {});
		})
	}
};

var fileUpload = {
	data: {},
	init: function() {
		var sums = $("[data-control='user-upload']");
		for(var i = sums.length - 1; i >= 0; i--) {
			var item = $(sums[i]);
			this.parse(item);
		};
	},
	parse: function(item) {
		var that = this;
		that.data = Tools.getParams(item, ["name", "url", "container", "baseurl", "target", "type"]);
		item.bind("change", function(e) {
			that.handler(e.target.files[0]);
		})
	},
	before: function(file) {
		if(this.data.type) {
			var ctypes = this.data.type.split(",");
			var ctype = file.name.split(".")[1];
			return {
				success: ctypes.indexOf(ctype) > 0 ? true : false,
				msg: ctypes.indexOf(ctype) > 0 ? "" : "上传文件格式错误"
			};
		} else {
			return {
				success: true,
				msg: ""
			};
		}
	},
	after: function(base, url) {
		$(this.data.container).attr("src", base + url);
		$(this.data.target).val(url);
	},
	progress: function(percent) {},
	error: function(e) {
		console.log(e);
	},
	complete: function(result) {
		if(result.Code != 200) {
			alert(result.msg);
			return;
		}
		this.after(this.data.baseurl, result.Url);
	},
	handler: function(file) {
		var that = this;
		var result = that.before(file);
		if(!result.success) {
			alert(result.msg);
		}
		var formdata = new FormData();
		formdata.append(that.data.name, file);
		var xhr = new XMLHttpRequest();
		xhr.upload.addEventListener("progress", function(e) {
			var percentComplete = Math.round(e.loaded * 100 / e.total);
			that.progress(percentComplete);
		});
		xhr.addEventListener("load", function(e) {
			that.complete(JSON.parse(xhr.responseText));
		});
		xhr.addEventListener("error", function(e) {
			that.error(e);
		});
		xhr.open("post", that.data.url, true);
		xhr.send(formdata);
	}
}
$(function() {
	userlist.init();
	userSum.init();
	usertab.init();
	fileUpload.init();
});