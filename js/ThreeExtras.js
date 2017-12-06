// ThreeExtras.js r32 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(a) {
    this.autoUpdate = true;
    this.setHex(a)
}
;
THREE.Color.prototype = {
    setRGB: function(a, c, d) {
        this.r = a;
        this.g = c;
        this.b = d;
        if (this.autoUpdate) {
            this.updateHex();
            this.updateStyleString()
        }
    },
    setHSV: function(a, c, d) {
        var e, g, f, h, b, j;
        if (d == 0)
            e = g = f = 0;
        else {
            h = Math.floor(a * 6);
            b = a * 6 - h;
            a = d * (1 - c);
            j = d * (1 - c * b);
            c = d * (1 - c * (1 - b));
            switch (h) {
            case 1:
                e = j;
                g = d;
                f = a;
                break;
            case 2:
                e = a;
                g = d;
                f = c;
                break;
            case 3:
                e = a;
                g = j;
                f = d;
                break;
            case 4:
                e = c;
                g = a;
                f = d;
                break;
            case 5:
                e = d;
                g = a;
                f = j;
                break;
            case 6:
            case 0:
                e = d;
                g = c;
                f = a
            }
        }
        this.r = e;
        this.g = g;
        this.b = f;
        if (this.autoUpdate) {
            this.updateHex();
            this.updateStyleString()
        }
    },
    setHex: function(a) {
        this.hex = ~~a & 16777215;
        if (this.autoUpdate) {
            this.updateRGBA();
            this.updateStyleString()
        }
    },
    updateHex: function() {
        this.hex = ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
    },
    updateRGBA: function() {
        this.r = (this.hex >> 16 & 255) / 255;
        this.g = (this.hex >> 8 & 255) / 255;
        this.b = (this.hex & 255) / 255
    },
    updateStyleString: function() {
        this.__styleString = "rgb(" + ~~(this.r * 255) + "," + ~~(this.g * 255) + "," + ~~(this.b * 255) + ")"
    },
    clone: function() {
        return new THREE.Color(this.hex)
    },
    toString: function() {
        return "THREE.Color ( r: " + this.r + ", g: " + this.g + ", b: " + this.b + ", hex: " + this.hex + " )"
    }
};
THREE.Vector2 = function(a, c) {
    this.x = a || 0;
    this.y = c || 0
}
;
THREE.Vector2.prototype = {
    set: function(a, c) {
        this.x = a;
        this.y = c;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        return this
    },
    unit: function() {
        this.multiplyScalar(1 / this.length());
        return this
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        return this
    },
    clone: function() {
        return new THREE.Vector2(this.x,this.y)
    },
    toString: function() {
        return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
    }
};
THREE.Vector3 = function(a, c, d) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = d || 0
}
;
THREE.Vector3.prototype = {
    set: function(a, c, d) {
        this.x = a;
        this.y = c;
        this.z = d;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z - c.z;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    cross: function(a, c) {
        this.x = a.y * c.z - a.z * c.y;
        this.y = a.z * c.x - a.x * c.z;
        this.z = a.x * c.y - a.y * c.x;
        return this
    },
    crossSelf: function(a) {
        var c = this.x
          , d = this.y
          , e = this.z;
        this.x = d * a.z - e * a.y;
        this.y = e * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    },
    multiply: function(a, c) {
        this.x = a.x * c.x;
        this.y = a.y * c.y;
        this.z = a.z * c.z;
        return this
    },
    multiplySelf: function(a) {
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },
    divideSelf: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function(a) {
        this.x /= a;
        this.y /= a;
        this.z /= a;
        return this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    distanceTo: function(a) {
        var c = this.x - a.x
          , d = this.y - a.y;
        a = this.z - a.z;
        return Math.sqrt(c * c + d * d + a * a)
    },
    distanceToSquared: function(a) {
        var c = this.x - a.x
          , d = this.y - a.y;
        a = this.z - a.z;
        return c * c + d * d + a * a
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this
    },
    normalize: function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        a > 0 ? this.multiplyScalar(1 / a) : this.set(0, 0, 0);
        return this
    },
    setLength: function(a) {
        return this.normalize().multiplyScalar(a)
    },
    isZero: function() {
        return Math.abs(this.x) < 1.0E-4 && Math.abs(this.y) < 1.0E-4 && Math.abs(this.z) < 1.0E-4
    },
    clone: function() {
        return new THREE.Vector3(this.x,this.y,this.z)
    },
    toString: function() {
        return "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
    }
};
THREE.Vector4 = function(a, c, d, e) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = d || 0;
    this.w = e || 1
}
;
THREE.Vector4.prototype = {
    set: function(a, c, d, e) {
        this.x = a;
        this.y = c;
        this.z = d;
        this.w = e;
        return this
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w || 1;
        return this
    },
    add: function(a, c) {
        this.x = a.x + c.x;
        this.y = a.y + c.y;
        this.z = a.z + c.z;
        this.w = a.w + c.w;
        return this
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    sub: function(a, c) {
        this.x = a.x - c.x;
        this.y = a.y - c.y;
        this.z = a.z - c.z;
        this.w = a.w - c.w;
        return this
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },
    divideScalar: function(a) {
        this.x /= a;
        this.y /= a;
        this.z /= a;
        this.w /= a;
        return this
    },
    lerpSelf: function(a, c) {
        this.x += (a.x - this.x) * c;
        this.y += (a.y - this.y) * c;
        this.z += (a.z - this.z) * c;
        this.w += (a.w - this.w) * c
    },
    clone: function() {
        return new THREE.Vector4(this.x,this.y,this.z,this.w)
    },
    toString: function() {
        return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
    }
};
THREE.Ray = function(a, c) {
    this.origin = a || new THREE.Vector3;
    this.direction = c || new THREE.Vector3
}
;
THREE.Ray.prototype = {
    intersectScene: function(a) {
        var c, d, e = a.objects, g = [];
        a = 0;
        for (c = e.length; a < c; a++) {
            d = e[a];
            if (d instanceof THREE.Mesh)
                g = g.concat(this.intersectObject(d))
        }
        g.sort(function(f, h) {
            return f.distance - h.distance
        });
        return g
    },
    intersectObject: function(a) {
        function c(H, x, I, t) {
            t = t.clone().subSelf(x);
            I = I.clone().subSelf(x);
            var k = H.clone().subSelf(x);
            H = t.dot(t);
            x = t.dot(I);
            t = t.dot(k);
            var w = I.dot(I);
            I = I.dot(k);
            k = 1 / (H * w - x * x);
            w = (w * t - x * I) * k;
            H = (H * I - x * t) * k;
            return w > 0 && H > 0 && w + H < 1
        }
        var d, e, g, f, h, b, j, l, p, A, q, m = a.geometry, B = m.vertices, E = [];
        d = 0;
        for (e = m.faces.length; d < e; d++) {
            g = m.faces[d];
            A = this.origin.clone();
            q = this.direction.clone();
            f = a.matrix.multiplyVector3(B[g.a].position.clone());
            h = a.matrix.multiplyVector3(B[g.b].position.clone());
            b = a.matrix.multiplyVector3(B[g.c].position.clone());
            j = g instanceof THREE.Face4 ? a.matrix.multiplyVector3(B[g.d].position.clone()) : null;
            l = a.rotationMatrix.multiplyVector3(g.normal.clone());
            p = q.dot(l);
            if (p < 0) {
                l = l.dot((new THREE.Vector3).sub(f, A)) / p;
                A = A.addSelf(q.multiplyScalar(l));
                if (g instanceof THREE.Face3) {
                    if (c(A, f, h, b)) {
                        g = {
                            distance: this.origin.distanceTo(A),
                            point: A,
                            face: g,
                            object: a
                        };
                        E.push(g)
                    }
                } else if (g instanceof THREE.Face4)
                    if (c(A, f, h, j) || c(A, h, b, j)) {
                        g = {
                            distance: this.origin.distanceTo(A),
                            point: A,
                            face: g,
                            object: a
                        };
                        E.push(g)
                    }
            }
        }
        return E
    }
};
THREE.Rectangle = function() {
    function a() {
        f = e - c;
        h = g - d
    }
    var c, d, e, g, f, h, b = true;
    this.getX = function() {
        return c
    }
    ;
    this.getY = function() {
        return d
    }
    ;
    this.getWidth = function() {
        return f
    }
    ;
    this.getHeight = function() {
        return h
    }
    ;
    this.getLeft = function() {
        return c
    }
    ;
    this.getTop = function() {
        return d
    }
    ;
    this.getRight = function() {
        return e
    }
    ;
    this.getBottom = function() {
        return g
    }
    ;
    this.set = function(j, l, p, A) {
        b = false;
        c = j;
        d = l;
        e = p;
        g = A;
        a()
    }
    ;
    this.addPoint = function(j, l) {
        if (b) {
            b = false;
            c = j;
            d = l;
            e = j;
            g = l
        } else {
            c = c < j ? c : j;
            d = d < l ? d : l;
            e = e > j ? e : j;
            g = g > l ? g : l
        }
        a()
    }
    ;
    this.add3Points = function(j, l, p, A, q, m) {
        if (b) {
            b = false;
            c = j < p ? j < q ? j : q : p < q ? p : q;
            d = l < A ? l < m ? l : m : A < m ? A : m;
            e = j > p ? j > q ? j : q : p > q ? p : q;
            g = l > A ? l > m ? l : m : A > m ? A : m
        } else {
            c = j < p ? j < q ? j < c ? j : c : q < c ? q : c : p < q ? p < c ? p : c : q < c ? q : c;
            d = l < A ? l < m ? l < d ? l : d : m < d ? m : d : A < m ? A < d ? A : d : m < d ? m : d;
            e = j > p ? j > q ? j > e ? j : e : q > e ? q : e : p > q ? p > e ? p : e : q > e ? q : e;
            g = l > A ? l > m ? l > g ? l : g : m > g ? m : g : A > m ? A > g ? A : g : m > g ? m : g
        }
        a()
    }
    ;
    this.addRectangle = function(j) {
        if (b) {
            b = false;
            c = j.getLeft();
            d = j.getTop();
            e = j.getRight();
            g = j.getBottom()
        } else {
            c = c < j.getLeft() ? c : j.getLeft();
            d = d < j.getTop() ? d : j.getTop();
            e = e > j.getRight() ? e : j.getRight();
            g = g > j.getBottom() ? g : j.getBottom()
        }
        a()
    }
    ;
    this.inflate = function(j) {
        c -= j;
        d -= j;
        e += j;
        g += j;
        a()
    }
    ;
    this.minSelf = function(j) {
        c = c > j.getLeft() ? c : j.getLeft();
        d = d > j.getTop() ? d : j.getTop();
        e = e < j.getRight() ? e : j.getRight();
        g = g < j.getBottom() ? g : j.getBottom();
        a()
    }
    ;
    this.instersects = function(j) {
        return Math.min(e, j.getRight()) - Math.max(c, j.getLeft()) >= 0 && Math.min(g, j.getBottom()) - Math.max(d, j.getTop()) >= 0
    }
    ;
    this.empty = function() {
        b = true;
        g = e = d = c = 0;
        a()
    }
    ;
    this.isEmpty = function() {
        return b
    }
    ;
    this.toString = function() {
        return "THREE.Rectangle ( left: " + c + ", right: " + e + ", top: " + d + ", bottom: " + g + ", width: " + f + ", height: " + h + " )"
    }
}
;
THREE.Matrix3 = function() {
    this.m = []
}
;
THREE.Matrix3.prototype = {
    transpose: function() {
        var a, c = this.m;
        a = c[1];
        c[1] = c[3];
        c[3] = a;
        a = c[2];
        c[2] = c[6];
        c[6] = a;
        a = c[5];
        c[5] = c[7];
        c[7] = a;
        return this
    },
    transposeIntoArray: function(a) {
        var c = this.m;
        a[0] = c[0];
        a[1] = c[3];
        a[2] = c[6];
        a[3] = c[1];
        a[4] = c[4];
        a[5] = c[7];
        a[6] = c[2];
        a[7] = c[5];
        a[8] = c[8];
        return this
    }
};
THREE.Matrix4 = function(a, c, d, e, g, f, h, b, j, l, p, A, q, m, B, E) {
    this.n11 = a || 1;
    this.n12 = c || 0;
    this.n13 = d || 0;
    this.n14 = e || 0;
    this.n21 = g || 0;
    this.n22 = f || 1;
    this.n23 = h || 0;
    this.n24 = b || 0;
    this.n31 = j || 0;
    this.n32 = l || 0;
    this.n33 = p || 1;
    this.n34 = A || 0;
    this.n41 = q || 0;
    this.n42 = m || 0;
    this.n43 = B || 0;
    this.n44 = E || 1;
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
}
;
THREE.Matrix4.prototype = {
    identity: function() {
        this.n11 = 1;
        this.n21 = this.n14 = this.n13 = this.n12 = 0;
        this.n22 = 1;
        this.n32 = this.n31 = this.n24 = this.n23 = 0;
        this.n33 = 1;
        this.n43 = this.n42 = this.n41 = this.n34 = 0;
        this.n44 = 1;
        return this
    },
    set: function(a, c, d, e, g, f, h, b, j, l, p, A, q, m, B, E) {
        this.n11 = a;
        this.n12 = c;
        this.n13 = d;
        this.n14 = e;
        this.n21 = g;
        this.n22 = f;
        this.n23 = h;
        this.n24 = b;
        this.n31 = j;
        this.n32 = l;
        this.n33 = p;
        this.n34 = A;
        this.n41 = q;
        this.n42 = m;
        this.n43 = B;
        this.n44 = E;
        return this
    },
    copy: function(a) {
        this.n11 = a.n11;
        this.n12 = a.n12;
        this.n13 = a.n13;
        this.n14 = a.n14;
        this.n21 = a.n21;
        this.n22 = a.n22;
        this.n23 = a.n23;
        this.n24 = a.n24;
        this.n31 = a.n31;
        this.n32 = a.n32;
        this.n33 = a.n33;
        this.n34 = a.n34;
        this.n41 = a.n41;
        this.n42 = a.n42;
        this.n43 = a.n43;
        this.n44 = a.n44;
        return this
    },
    lookAt: function(a, c, d) {
        var e = THREE.Matrix4.__tmpVec1
          , g = THREE.Matrix4.__tmpVec2
          , f = THREE.Matrix4.__tmpVec3;
        f.sub(a, c).normalize();
        e.cross(d, f).normalize();
        g.cross(f, e).normalize();
        this.n11 = e.x;
        this.n12 = e.y;
        this.n13 = e.z;
        this.n14 = -e.dot(a);
        this.n21 = g.x;
        this.n22 = g.y;
        this.n23 = g.z;
        this.n24 = -g.dot(a);
        this.n31 = f.x;
        this.n32 = f.y;
        this.n33 = f.z;
        this.n34 = -f.dot(a);
        this.n43 = this.n42 = this.n41 = 0;
        this.n44 = 1;
        return this
    },
    multiplyVector3: function(a) {
        var c = a.x
          , d = a.y
          , e = a.z
          , g = 1 / (this.n41 * c + this.n42 * d + this.n43 * e + this.n44);
        a.x = (this.n11 * c + this.n12 * d + this.n13 * e + this.n14) * g;
        a.y = (this.n21 * c + this.n22 * d + this.n23 * e + this.n24) * g;
        a.z = (this.n31 * c + this.n32 * d + this.n33 * e + this.n34) * g;
        return a
    },
    multiplyVector4: function(a) {
        var c = a.x
          , d = a.y
          , e = a.z
          , g = a.w;
        a.x = this.n11 * c + this.n12 * d + this.n13 * e + this.n14 * g;
        a.y = this.n21 * c + this.n22 * d + this.n23 * e + this.n24 * g;
        a.z = this.n31 * c + this.n32 * d + this.n33 * e + this.n34 * g;
        a.w = this.n41 * c + this.n42 * d + this.n43 * e + this.n44 * g;
        return a
    },
    crossVector: function(a) {
        var c = new THREE.Vector4;
        c.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
        c.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
        c.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
        c.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
        return c
    },
    multiply: function(a, c) {
        var d = a.n11
          , e = a.n12
          , g = a.n13
          , f = a.n14
          , h = a.n21
          , b = a.n22
          , j = a.n23
          , l = a.n24
          , p = a.n31
          , A = a.n32
          , q = a.n33
          , m = a.n34
          , B = a.n41
          , E = a.n42
          , H = a.n43
          , x = a.n44
          , I = c.n11
          , t = c.n12
          , k = c.n13
          , w = c.n14
          , u = c.n21
          , n = c.n22
          , o = c.n23
          , v = c.n24
          , D = c.n31
          , y = c.n32
          , C = c.n33
          , z = c.n34
          , F = c.n41
          , J = c.n42
          , M = c.n43
          , Q = c.n44;
        this.n11 = d * I + e * u + g * D + f * F;
        this.n12 = d * t + e * n + g * y + f * J;
        this.n13 = d * k + e * o + g * C + f * M;
        this.n14 = d * w + e * v + g * z + f * Q;
        this.n21 = h * I + b * u + j * D + l * F;
        this.n22 = h * t + b * n + j * y + l * J;
        this.n23 = h * k + b * o + j * C + l * M;
        this.n24 = h * w + b * v + j * z + l * Q;
        this.n31 = p * I + A * u + q * D + m * F;
        this.n32 = p * t + A * n + q * y + m * J;
        this.n33 = p * k + A * o + q * C + m * M;
        this.n34 = p * w + A * v + q * z + m * Q;
        this.n41 = B * I + E * u + H * D + x * F;
        this.n42 = B * t + E * n + H * y + x * J;
        this.n43 = B * k + E * o + H * C + x * M;
        this.n44 = B * w + E * v + H * z + x * Q;
        return this
    },
    multiplyToArray: function(a, c, d) {
        var e = a.n11
          , g = a.n12
          , f = a.n13
          , h = a.n14
          , b = a.n21
          , j = a.n22
          , l = a.n23
          , p = a.n24
          , A = a.n31
          , q = a.n32
          , m = a.n33
          , B = a.n34
          , E = a.n41
          , H = a.n42
          , x = a.n43;
        a = a.n44;
        var I = c.n11
          , t = c.n12
          , k = c.n13
          , w = c.n14
          , u = c.n21
          , n = c.n22
          , o = c.n23
          , v = c.n24
          , D = c.n31
          , y = c.n32
          , C = c.n33
          , z = c.n34
          , F = c.n41
          , J = c.n42
          , M = c.n43;
        c = c.n44;
        this.n11 = e * I + g * u + f * D + h * F;
        this.n12 = e * t + g * n + f * y + h * J;
        this.n13 = e * k + g * o + f * C + h * M;
        this.n14 = e * w + g * v + f * z + h * c;
        this.n21 = b * I + j * u + l * D + p * F;
        this.n22 = b * t + j * n + l * y + p * J;
        this.n23 = b * k + j * o + l * C + p * M;
        this.n24 = b * w + j * v + l * z + p * c;
        this.n31 = A * I + q * u + m * D + B * F;
        this.n32 = A * t + q * n + m * y + B * J;
        this.n33 = A * k + q * o + m * C + B * M;
        this.n34 = A * w + q * v + m * z + B * c;
        this.n41 = E * I + H * u + x * D + a * F;
        this.n42 = E * t + H * n + x * y + a * J;
        this.n43 = E * k + H * o + x * C + a * M;
        this.n44 = E * w + H * v + x * z + a * c;
        d[0] = this.n11;
        d[1] = this.n21;
        d[2] = this.n31;
        d[3] = this.n41;
        d[4] = this.n12;
        d[5] = this.n22;
        d[6] = this.n32;
        d[7] = this.n42;
        d[8] = this.n13;
        d[9] = this.n23;
        d[10] = this.n33;
        d[11] = this.n43;
        d[12] = this.n14;
        d[13] = this.n24;
        d[14] = this.n34;
        d[15] = this.n44;
        return this
    },
    multiplySelf: function(a) {
        var c = this.n11
          , d = this.n12
          , e = this.n13
          , g = this.n14
          , f = this.n21
          , h = this.n22
          , b = this.n23
          , j = this.n24
          , l = this.n31
          , p = this.n32
          , A = this.n33
          , q = this.n34
          , m = this.n41
          , B = this.n42
          , E = this.n43
          , H = this.n44
          , x = a.n11
          , I = a.n21
          , t = a.n31
          , k = a.n41
          , w = a.n12
          , u = a.n22
          , n = a.n32
          , o = a.n42
          , v = a.n13
          , D = a.n23
          , y = a.n33
          , C = a.n43
          , z = a.n14
          , F = a.n24
          , J = a.n34;
        a = a.n44;
        this.n11 = c * x + d * I + e * t + g * k;
        this.n12 = c * w + d * u + e * n + g * o;
        this.n13 = c * v + d * D + e * y + g * C;
        this.n14 = c * z + d * F + e * J + g * a;
        this.n21 = f * x + h * I + b * t + j * k;
        this.n22 = f * w + h * u + b * n + j * o;
        this.n23 = f * v + h * D + b * y + j * C;
        this.n24 = f * z + h * F + b * J + j * a;
        this.n31 = l * x + p * I + A * t + q * k;
        this.n32 = l * w + p * u + A * n + q * o;
        this.n33 = l * v + p * D + A * y + q * C;
        this.n34 = l * z + p * F + A * J + q * a;
        this.n41 = m * x + B * I + E * t + H * k;
        this.n42 = m * w + B * u + E * n + H * o;
        this.n43 = m * v + B * D + E * y + H * C;
        this.n44 = m * z + B * F + E * J + H * a;
        return this
    },
    multiplyScalar: function(a) {
        this.n11 *= a;
        this.n12 *= a;
        this.n13 *= a;
        this.n14 *= a;
        this.n21 *= a;
        this.n22 *= a;
        this.n23 *= a;
        this.n24 *= a;
        this.n31 *= a;
        this.n32 *= a;
        this.n33 *= a;
        this.n34 *= a;
        this.n41 *= a;
        this.n42 *= a;
        this.n43 *= a;
        this.n44 *= a;
        return this
    },
    determinant: function() {
        var a = this.n11
          , c = this.n12
          , d = this.n13
          , e = this.n14
          , g = this.n21
          , f = this.n22
          , h = this.n23
          , b = this.n24
          , j = this.n31
          , l = this.n32
          , p = this.n33
          , A = this.n34
          , q = this.n41
          , m = this.n42
          , B = this.n43
          , E = this.n44;
        return e * h * l * q - d * b * l * q - e * f * p * q + c * b * p * q + d * f * A * q - c * h * A * q - e * h * j * m + d * b * j * m + e * g * p * m - a * b * p * m - d * g * A * m + a * h * A * m + e * f * j * B - c * b * j * B - e * g * l * B + a * b * l * B + c * g * A * B - a * f * A * B - d * f * j * E + c * h * j * E + d * g * l * E - a * h * l * E - c * g * p * E + a * f * p * E
    },
    transpose: function() {
        function a(c, d, e) {
            var g = c[d];
            c[d] = c[e];
            c[e] = g
        }
        a(this, "n21", "n12");
        a(this, "n31", "n13");
        a(this, "n32", "n23");
        a(this, "n41", "n14");
        a(this, "n42", "n24");
        a(this, "n43", "n34");
        return this
    },
    clone: function() {
        var a = new THREE.Matrix4;
        a.n11 = this.n11;
        a.n12 = this.n12;
        a.n13 = this.n13;
        a.n14 = this.n14;
        a.n21 = this.n21;
        a.n22 = this.n22;
        a.n23 = this.n23;
        a.n24 = this.n24;
        a.n31 = this.n31;
        a.n32 = this.n32;
        a.n33 = this.n33;
        a.n34 = this.n34;
        a.n41 = this.n41;
        a.n42 = this.n42;
        a.n43 = this.n43;
        a.n44 = this.n44;
        return a
    },
    flatten: function() {
        var a = this.flat;
        a[0] = this.n11;
        a[1] = this.n21;
        a[2] = this.n31;
        a[3] = this.n41;
        a[4] = this.n12;
        a[5] = this.n22;
        a[6] = this.n32;
        a[7] = this.n42;
        a[8] = this.n13;
        a[9] = this.n23;
        a[10] = this.n33;
        a[11] = this.n43;
        a[12] = this.n14;
        a[13] = this.n24;
        a[14] = this.n34;
        a[15] = this.n44;
        return a
    },
    flattenToArray: function(a) {
        a[0] = this.n11;
        a[1] = this.n21;
        a[2] = this.n31;
        a[3] = this.n41;
        a[4] = this.n12;
        a[5] = this.n22;
        a[6] = this.n32;
        a[7] = this.n42;
        a[8] = this.n13;
        a[9] = this.n23;
        a[10] = this.n33;
        a[11] = this.n43;
        a[12] = this.n14;
        a[13] = this.n24;
        a[14] = this.n34;
        a[15] = this.n44;
        return a
    },
    setTranslation: function(a, c, d) {
        this.set(1, 0, 0, a, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
        return this
    },
    setScale: function(a, c, d) {
        this.set(a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1);
        return this
    },
    setRotX: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, c, -a, 0, 0, a, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotY: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(c, 0, a, 0, 0, 1, 0, 0, -a, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    setRotZ: function(a) {
        var c = Math.cos(a);
        a = Math.sin(a);
        this.set(c, -a, 0, 0, a, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    setRotAxis: function(a, c) {
        var d = Math.cos(c)
          , e = Math.sin(c)
          , g = 1 - d
          , f = a.x
          , h = a.y
          , b = a.z
          , j = g * f
          , l = g * h;
        this.set(j * f + d, j * h - e * b, j * b + e * h, 0, j * h + e * b, l * h + d, l * b - e * f, 0, j * b - e * h, l * b + e * f, g * b * b + d, 0, 0, 0, 0, 1);
        return this
    },
    toString: function() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
    }
};
THREE.Matrix4.translationMatrix = function(a, c, d) {
    var e = new THREE.Matrix4;
    e.setTranslation(a, c, d);
    return e
}
;
THREE.Matrix4.scaleMatrix = function(a, c, d) {
    var e = new THREE.Matrix4;
    e.setScale(a, c, d);
    return e
}
;
THREE.Matrix4.rotationXMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotX(a);
    return c
}
;
THREE.Matrix4.rotationYMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotY(a);
    return c
}
;
THREE.Matrix4.rotationZMatrix = function(a) {
    var c = new THREE.Matrix4;
    c.setRotZ(a);
    return c
}
;
THREE.Matrix4.rotationAxisAngleMatrix = function(a, c) {
    var d = new THREE.Matrix4;
    d.setRotAxis(a, c);
    return d
}
;
THREE.Matrix4.makeInvert = function(a) {
    var c = a.n11
      , d = a.n12
      , e = a.n13
      , g = a.n14
      , f = a.n21
      , h = a.n22
      , b = a.n23
      , j = a.n24
      , l = a.n31
      , p = a.n32
      , A = a.n33
      , q = a.n34
      , m = a.n41
      , B = a.n42
      , E = a.n43
      , H = a.n44
      , x = new THREE.Matrix4;
    x.n11 = b * q * B - j * A * B + j * p * E - h * q * E - b * p * H + h * A * H;
    x.n12 = g * A * B - e * q * B - g * p * E + d * q * E + e * p * H - d * A * H;
    x.n13 = e * j * B - g * b * B + g * h * E - d * j * E - e * h * H + d * b * H;
    x.n14 = g * b * p - e * j * p - g * h * A + d * j * A + e * h * q - d * b * q;
    x.n21 = j * A * m - b * q * m - j * l * E + f * q * E + b * l * H - f * A * H;
    x.n22 = e * q * m - g * A * m + g * l * E - c * q * E - e * l * H + c * A * H;
    x.n23 = g * b * m - e * j * m - g * f * E + c * j * E + e * f * H - c * b * H;
    x.n24 = e * j * l - g * b * l + g * f * A - c * j * A - e * f * q + c * b * q;
    x.n31 = h * q * m - j * p * m + j * l * B - f * q * B - h * l * H + f * p * H;
    x.n32 = g * p * m - d * q * m - g * l * B + c * q * B + d * l * H - c * p * H;
    x.n33 = e * j * m - g * h * m + g * f * B - c * j * B - d * f * H + c * h * H;
    x.n34 = g * h * l - d * j * l - g * f * p + c * j * p + d * f * q - c * h * q;
    x.n41 = b * p * m - h * A * m - b * l * B + f * A * B + h * l * E - f * p * E;
    x.n42 = d * A * m - e * p * m + e * l * B - c * A * B - d * l * E + c * p * E;
    x.n43 = e * h * m - d * b * m - e * f * B + c * b * B + d * f * E - c * h * E;
    x.n44 = d * b * l - e * h * l + e * f * p - c * b * p - d * f * A + c * h * A;
    x.multiplyScalar(1 / a.determinant());
    return x
}
;
THREE.Matrix4.makeInvert3x3 = function(a) {
    var c = a.m33
      , d = c.m
      , e = a.n33 * a.n22 - a.n32 * a.n23
      , g = -a.n33 * a.n21 + a.n31 * a.n23
      , f = a.n32 * a.n21 - a.n31 * a.n22
      , h = -a.n33 * a.n12 + a.n32 * a.n13
      , b = a.n33 * a.n11 - a.n31 * a.n13
      , j = -a.n32 * a.n11 + a.n31 * a.n12
      , l = a.n23 * a.n12 - a.n22 * a.n13
      , p = -a.n23 * a.n11 + a.n21 * a.n13
      , A = a.n22 * a.n11 - a.n21 * a.n12;
    a = a.n11 * e + a.n21 * h + a.n31 * l;
    if (a == 0)
        throw "matrix not invertible";
    a = 1 / a;
    d[0] = a * e;
    d[1] = a * g;
    d[2] = a * f;
    d[3] = a * h;
    d[4] = a * b;
    d[5] = a * j;
    d[6] = a * l;
    d[7] = a * p;
    d[8] = a * A;
    return c
}
;
THREE.Matrix4.makeFrustum = function(a, c, d, e, g, f) {
    var h, b, j;
    h = new THREE.Matrix4;
    b = 2 * g / (c - a);
    j = 2 * g / (e - d);
    a = (c + a) / (c - a);
    d = (e + d) / (e - d);
    e = -(f + g) / (f - g);
    g = -2 * f * g / (f - g);
    h.n11 = b;
    h.n12 = 0;
    h.n13 = a;
    h.n14 = 0;
    h.n21 = 0;
    h.n22 = j;
    h.n23 = d;
    h.n24 = 0;
    h.n31 = 0;
    h.n32 = 0;
    h.n33 = e;
    h.n34 = g;
    h.n41 = 0;
    h.n42 = 0;
    h.n43 = -1;
    h.n44 = 0;
    return h
}
;
THREE.Matrix4.makePerspective = function(a, c, d, e) {
    var g;
    a = d * Math.tan(a * Math.PI / 360);
    g = -a;
    return THREE.Matrix4.makeFrustum(g * c, a * c, g, a, d, e)
}
;
THREE.Matrix4.makeOrtho = function(a, c, d, e, g, f) {
    var h, b, j, l;
    h = new THREE.Matrix4;
    b = c - a;
    j = d - e;
    l = f - g;
    a = (c + a) / b;
    d = (d + e) / j;
    g = (f + g) / l;
    h.n11 = 2 / b;
    h.n12 = 0;
    h.n13 = 0;
    h.n14 = -a;
    h.n21 = 0;
    h.n22 = 2 / j;
    h.n23 = 0;
    h.n24 = -d;
    h.n31 = 0;
    h.n32 = 0;
    h.n33 = -2 / l;
    h.n34 = -g;
    h.n41 = 0;
    h.n42 = 0;
    h.n43 = 0;
    h.n44 = 1;
    return h
}
;
THREE.Matrix4.__tmpVec1 = new THREE.Vector3;
THREE.Matrix4.__tmpVec2 = new THREE.Vector3;
THREE.Matrix4.__tmpVec3 = new THREE.Vector3;
THREE.Vertex = function(a, c) {
    this.position = a || new THREE.Vector3;
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.normal = c || new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.normalScreen = new THREE.Vector3;
    this.tangent = new THREE.Vector4;
    this.__visible = true
}
;
THREE.Vertex.prototype = {
    toString: function() {
        return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
    }
};
THREE.Face3 = function(a, c, d, e, g) {
    this.a = a;
    this.b = c;
    this.c = d;
    this.centroid = new THREE.Vector3;
    this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
    this.vertexNormals = e instanceof Array ? e : [];
    this.materials = g instanceof Array ? g : [g]
}
;
THREE.Face3.prototype = {
    toString: function() {
        return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
    }
};
THREE.Face4 = function(a, c, d, e, g, f) {
    this.a = a;
    this.b = c;
    this.c = d;
    this.d = e;
    this.centroid = new THREE.Vector3;
    this.normal = g instanceof THREE.Vector3 ? g : new THREE.Vector3;
    this.vertexNormals = g instanceof Array ? g : [];
    this.materials = f instanceof Array ? f : [f]
}
;
THREE.Face4.prototype = {
    toString: function() {
        return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
    }
};
THREE.UV = function(a, c) {
    this.u = a || 0;
    this.v = c || 0
}
;
THREE.UV.prototype = {
    copy: function(a) {
        this.u = a.u;
        this.v = a.v
    },
    toString: function() {
        return "THREE.UV (" + this.u + ", " + this.v + ")"
    }
};
THREE.Geometry = function() {
    this.vertices = [];
    this.faces = [];
    this.uvs = [];
    this.uvs2 = [];
    this.colors = [];
    this.boundingSphere = this.boundingBox = null;
    this.geometryChunks = {};
    this.hasTangents = false
}
;
THREE.Geometry.prototype = {
    computeCentroids: function() {
        var a, c, d;
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            d.centroid.set(0, 0, 0);
            if (d instanceof THREE.Face3) {
                d.centroid.addSelf(this.vertices[d.a].position);
                d.centroid.addSelf(this.vertices[d.b].position);
                d.centroid.addSelf(this.vertices[d.c].position);
                d.centroid.divideScalar(3)
            } else if (d instanceof THREE.Face4) {
                d.centroid.addSelf(this.vertices[d.a].position);
                d.centroid.addSelf(this.vertices[d.b].position);
                d.centroid.addSelf(this.vertices[d.c].position);
                d.centroid.addSelf(this.vertices[d.d].position);
                d.centroid.divideScalar(4)
            }
        }
    },
    computeFaceNormals: function(a) {
        var c, d, e, g, f, h, b = new THREE.Vector3, j = new THREE.Vector3;
        e = 0;
        for (g = this.vertices.length; e < g; e++) {
            f = this.vertices[e];
            f.normal.set(0, 0, 0)
        }
        e = 0;
        for (g = this.faces.length; e < g; e++) {
            f = this.faces[e];
            if (a && f.vertexNormals.length) {
                b.set(0, 0, 0);
                c = 0;
                for (d = f.normal.length; c < d; c++)
                    b.addSelf(f.vertexNormals[c]);
                b.divideScalar(3)
            } else {
                c = this.vertices[f.a];
                d = this.vertices[f.b];
                h = this.vertices[f.c];
                b.sub(h.position, d.position);
                j.sub(c.position, d.position);
                b.crossSelf(j)
            }
            b.isZero() || b.normalize();
            f.normal.copy(b)
        }
    },
    computeVertexNormals: function() {
        var a, c, d, e;
        if (this.__tmpVertices == undefined) {
            e = this.__tmpVertices = Array(this.vertices.length);
            a = 0;
            for (c = this.vertices.length; a < c; a++)
                e[a] = new THREE.Vector3;
            a = 0;
            for (c = this.faces.length; a < c; a++) {
                d = this.faces[a];
                if (d instanceof THREE.Face3)
                    d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
                else if (d instanceof THREE.Face4)
                    d.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
            }
        } else {
            e = this.__tmpVertices;
            a = 0;
            for (c = this.vertices.length; a < c; a++)
                e[a].set(0, 0, 0)
        }
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            if (d instanceof THREE.Face3) {
                e[d.a].addSelf(d.normal);
                e[d.b].addSelf(d.normal);
                e[d.c].addSelf(d.normal)
            } else if (d instanceof THREE.Face4) {
                e[d.a].addSelf(d.normal);
                e[d.b].addSelf(d.normal);
                e[d.c].addSelf(d.normal);
                e[d.d].addSelf(d.normal)
            }
        }
        a = 0;
        for (c = this.vertices.length; a < c; a++)
            e[a].normalize();
        a = 0;
        for (c = this.faces.length; a < c; a++) {
            d = this.faces[a];
            if (d instanceof THREE.Face3) {
                d.vertexNormals[0].copy(e[d.a]);
                d.vertexNormals[1].copy(e[d.b]);
                d.vertexNormals[2].copy(e[d.c])
            } else if (d instanceof THREE.Face4) {
                d.vertexNormals[0].copy(e[d.a]);
                d.vertexNormals[1].copy(e[d.b]);
                d.vertexNormals[2].copy(e[d.c]);
                d.vertexNormals[3].copy(e[d.d])
            }
        }
    },
    computeTangents: function() {
        function a(z, F, J, M, Q, S, U) {
            f = z.vertices[F].position;
            h = z.vertices[J].position;
            b = z.vertices[M].position;
            j = g[Q];
            l = g[S];
            p = g[U];
            A = h.x - f.x;
            q = b.x - f.x;
            m = h.y - f.y;
            B = b.y - f.y;
            E = h.z - f.z;
            H = b.z - f.z;
            x = l.u - j.u;
            I = p.u - j.u;
            t = l.v - j.v;
            k = p.v - j.v;
            w = 1 / (x * k - I * t);
            o.set((k * A - t * q) * w, (k * m - t * B) * w, (k * E - t * H) * w);
            v.set((x * q - I * A) * w, (x * B - I * m) * w, (x * H - I * E) * w);
            u[F].addSelf(o);
            u[J].addSelf(o);
            u[M].addSelf(o);
            n[F].addSelf(v);
            n[J].addSelf(v);
            n[M].addSelf(v)
        }
        var c, d, e, g, f, h, b, j, l, p, A, q, m, B, E, H, x, I, t, k, w, u = [], n = [], o = new THREE.Vector3, v = new THREE.Vector3, D = new THREE.Vector3, y = new THREE.Vector3, C = new THREE.Vector3;
        c = 0;
        for (d = this.vertices.length; c < d; c++) {
            u[c] = new THREE.Vector3;
            n[c] = new THREE.Vector3
        }
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            e = this.faces[c];
            g = this.uvs[c];
            if (e instanceof THREE.Face3) {
                a(this, e.a, e.b, e.c, 0, 1, 2);
                this.vertices[e.a].normal.copy(e.vertexNormals[0]);
                this.vertices[e.b].normal.copy(e.vertexNormals[1]);
                this.vertices[e.c].normal.copy(e.vertexNormals[2])
            } else if (e instanceof THREE.Face4) {
                a(this, e.a, e.b, e.c, 0, 1, 2);
                a(this, e.a, e.b, e.d, 0, 1, 3);
                this.vertices[e.a].normal.copy(e.vertexNormals[0]);
                this.vertices[e.b].normal.copy(e.vertexNormals[1]);
                this.vertices[e.c].normal.copy(e.vertexNormals[2]);
                this.vertices[e.d].normal.copy(e.vertexNormals[3])
            }
        }
        c = 0;
        for (d = this.vertices.length; c < d; c++) {
            C.copy(this.vertices[c].normal);
            e = u[c];
            D.copy(e);
            D.subSelf(C.multiplyScalar(C.dot(e))).normalize();
            y.cross(this.vertices[c].normal, e);
            e = y.dot(n[c]);
            e = e < 0 ? -1 : 1;
            this.vertices[c].tangent.set(D.x, D.y, D.z, e)
        }
        this.hasTangents = true
    },
    computeBoundingBox: function() {
        var a;
        if (this.vertices.length > 0) {
            this.boundingBox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
            };
            for (var c = 1, d = this.vertices.length; c < d; c++) {
                a = this.vertices[c];
                if (a.position.x < this.boundingBox.x[0])
                    this.boundingBox.x[0] = a.position.x;
                else if (a.position.x > this.boundingBox.x[1])
                    this.boundingBox.x[1] = a.position.x;
                if (a.position.y < this.boundingBox.y[0])
                    this.boundingBox.y[0] = a.position.y;
                else if (a.position.y > this.boundingBox.y[1])
                    this.boundingBox.y[1] = a.position.y;
                if (a.position.z < this.boundingBox.z[0])
                    this.boundingBox.z[0] = a.position.z;
                else if (a.position.z > this.boundingBox.z[1])
                    this.boundingBox.z[1] = a.position.z
            }
        }
    },
    computeBoundingSphere: function() {
        for (var a = this.boundingSphere === null ? 0 : this.boundingSphere.radius, c = 0, d = this.vertices.length; c < d; c++)
            a = Math.max(a, this.vertices[c].position.length());
        this.boundingSphere = {
            radius: a
        }
    },
    sortFacesByMaterial: function() {
        function a(p) {
            var A = [];
            c = 0;
            for (d = p.length; c < d; c++)
                p[c] == undefined ? A.push("undefined") : A.push(p[c].toString());
            return A.join("_")
        }
        var c, d, e, g, f, h, b, j, l = {};
        e = 0;
        for (g = this.faces.length; e < g; e++) {
            f = this.faces[e];
            h = f.materials;
            b = a(h);
            if (l[b] == undefined)
                l[b] = {
                    hash: b,
                    counter: 0
                };
            j = l[b].hash + "_" + l[b].counter;
            if (this.geometryChunks[j] == undefined)
                this.geometryChunks[j] = {
                    faces: [],
                    materials: h,
                    vertices: 0
                };
            f = f instanceof THREE.Face3 ? 3 : 4;
            if (this.geometryChunks[j].vertices + f > 65535) {
                l[b].counter += 1;
                j = l[b].hash + "_" + l[b].counter;
                if (this.geometryChunks[j] == undefined)
                    this.geometryChunks[j] = {
                        faces: [],
                        materials: h,
                        vertices: 0
                    }
            }
            this.geometryChunks[j].faces.push(e);
            this.geometryChunks[j].vertices += f
        }
    },
    toString: function() {
        return "THREE.Geometry ( vertices: " + this.vertices + ", faces: " + this.faces + ", uvs: " + this.uvs + " )"
    }
};
THREE.Camera = function(a, c, d, e) {
    this.fov = a;
    this.aspect = c;
    this.near = d;
    this.far = e;
    this.position = new THREE.Vector3;
    this.target = {
        position: new THREE.Vector3
    };
    this.autoUpdateMatrix = true;
    this.projectionMatrix = null;
    this.matrix = new THREE.Matrix4;
    this.up = new THREE.Vector3(0,1,0);
    this.tmpVec = new THREE.Vector3;
    this.translateX = function(g) {
        this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(g);
        this.tmpVec.crossSelf(this.up);
        this.position.addSelf(this.tmpVec);
        this.target.position.addSelf(this.tmpVec)
    }
    ;
    this.translateZ = function(g) {
        this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(g);
        this.position.subSelf(this.tmpVec);
        this.target.position.subSelf(this.tmpVec)
    }
    ;
    this.updateMatrix = function() {
        this.matrix.lookAt(this.position, this.target.position, this.up)
    }
    ;
    this.updateProjectionMatrix = function() {
        this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
    }
    ;
    this.updateProjectionMatrix()
}
;
THREE.Camera.prototype = {
    toString: function() {
        return "THREE.Camera ( " + this.position + ", " + this.target.position + " )"
    }
};
THREE.Light = function(a) {
    this.color = new THREE.Color(a)
}
;
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
}
;
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(a, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0,1,0);
    this.intensity = c || 1
}
;
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(a, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3;
    this.intensity = c || 1
}
;
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.Object3D = function() {
    this.id = THREE.Object3DCounter.value++;
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.scale = new THREE.Vector3(1,1,1);
    this.matrix = new THREE.Matrix4;
    this.rotationMatrix = new THREE.Matrix4;
    this.tmpMatrix = new THREE.Matrix4;
    this.screen = new THREE.Vector3;
    this.visible = this.autoUpdateMatrix = true
}
;
THREE.Object3D.prototype = {
    updateMatrix: function() {
        var a = this.position
          , c = this.rotation
          , d = this.scale
          , e = this.tmpMatrix;
        this.matrix.setTranslation(a.x, a.y, a.z);
        this.rotationMatrix.setRotX(c.x);
        if (c.y != 0) {
            e.setRotY(c.y);
            this.rotationMatrix.multiplySelf(e)
        }
        if (c.z != 0) {
            e.setRotZ(c.z);
            this.rotationMatrix.multiplySelf(e)
        }
        this.matrix.multiplySelf(this.rotationMatrix);
        if (d.x != 0 || d.y != 0 || d.z != 0) {
            e.setScale(d.x, d.y, d.z);
            this.matrix.multiplySelf(e)
        }
    }
};
THREE.Object3DCounter = {
    value: 0
};
THREE.Particle = function(a) {
    THREE.Object3D.call(this);
    this.materials = a instanceof Array ? a : [a];
    this.autoUpdateMatrix = false
}
;
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function(a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.sortParticles = false
}
;
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function(a, c, d) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.type = d != undefined ? d : THREE.LineStrip
}
;
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(a, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.materials = c instanceof Array ? c : [c];
    this.overdraw = this.doubleSided = this.flipSided = false;
    this.geometry.boundingSphere || this.geometry.computeBoundingSphere()
}
;
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.FlatShading = 0;
THREE.SmoothShading = 1;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.BillboardBlending = 3;
THREE.LineBasicMaterial = function(a) {
    this.id = THREE.LineBasicMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertex_colors = false;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.linewidth !== undefined)
            this.linewidth = a.linewidth;
        if (a.linecap !== undefined)
            this.linecap = a.linecap;
        if (a.linejoin !== undefined)
            this.linejoin = a.linejoin;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.LineBasicMaterial.prototype = {
    toString: function() {
        return "THREE.LineBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>linewidth: " + this.linewidth + "<br/>linecap: " + this.linecap + "<br/>linejoin: " + this.linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
    }
};
THREE.LineBasicMaterialCounter = {
    value: 0
};
THREE.MeshBasicMaterial = function(a) {
    this.id = THREE.MeshBasicMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.env_map = this.light_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    this.vertex_colors = false;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.map !== undefined)
            this.map = a.map;
        if (a.light_map !== undefined)
            this.light_map = a.light_map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.MeshBasicMaterial.prototype = {
    toString: function() {
        return "THREE.MeshBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>light_map: " + this.light_map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
    }
};
THREE.MeshBasicMaterialCounter = {
    value: 0
};
THREE.MeshLambertMaterial = function(a) {
    this.id = THREE.MeshLambertMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.env_map = this.light_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    this.vertex_colors = false;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.map !== undefined)
            this.map = a.map;
        if (a.light_map !== undefined)
            this.light_map = a.light_map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.MeshLambertMaterial.prototype = {
    toString: function() {
        return "THREE.MeshLambertMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>light_map: " + this.light_map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>shading: " + this.shading + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/> )"
    }
};
THREE.MeshLambertMaterialCounter = {
    value: 0
};
THREE.MeshPhongMaterial = function(a) {
    this.id = THREE.MeshPhongMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(328965);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.opacity = 1;
    this.env_map = this.light_map = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refraction_ratio = 0.98;
    this.fog = true;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    this.vertex_colors = false;
    if (a) {
        if (a.color !== undefined)
            this.color = new THREE.Color(a.color);
        if (a.ambient !== undefined)
            this.ambient = new THREE.Color(a.ambient);
        if (a.specular !== undefined)
            this.specular = new THREE.Color(a.specular);
        if (a.shininess !== undefined)
            this.shininess = a.shininess;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.light_map !== undefined)
            this.light_map = a.light_map;
        if (a.map !== undefined)
            this.map = a.map;
        if (a.env_map !== undefined)
            this.env_map = a.env_map;
        if (a.combine !== undefined)
            this.combine = a.combine;
        if (a.reflectivity !== undefined)
            this.reflectivity = a.reflectivity;
        if (a.refraction_ratio !== undefined)
            this.refraction_ratio = a.refraction_ratio;
        if (a.fog !== undefined)
            this.fog = a.fog;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.MeshPhongMaterial.prototype = {
    toString: function() {
        return "THREE.MeshPhongMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>ambient: " + this.ambient + "<br/>specular: " + this.specular + "<br/>shininess: " + this.shininess + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>shading: " + this.shading + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
    }
};
THREE.MeshPhongMaterialCounter = {
    value: 0
};
THREE.MeshDepthMaterial = function(a) {
    this.id = THREE.MeshDepthMaterialCounter.value++;
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    if (a) {
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth
    }
}
;
THREE.MeshDepthMaterial.prototype = {
    toString: function() {
        return "THREE.MeshDepthMaterial (<br/>id: " + this.id + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>)"
    }
};
THREE.MeshDepthMaterialCounter = {
    value: 0
};
THREE.MeshNormalMaterial = function(a) {
    this.id = THREE.MeshNormalMaterialCounter.value++;
    this.opacity = 1;
    this.shading = THREE.FlatShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    if (a) {
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth
    }
}
;
THREE.MeshNormalMaterial.prototype = {
    toString: function() {
        return "THREE.MeshNormalMaterial (<br/>id: " + this.id + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>)"
    }
};
THREE.MeshNormalMaterialCounter = {
    value: 0
};
THREE.MeshFaceMaterial = function() {}
;
THREE.MeshFaceMaterial.prototype = {
    toString: function() {
        return "THREE.MeshFaceMaterial"
    }
};
THREE.MeshShaderMaterial = function(a) {
    this.id = THREE.MeshShaderMaterialCounter.value++;
    this.vertex_shader = this.fragment_shader = "void main() {}";
    this.uniforms = {};
    this.opacity = 1;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.wireframe = false;
    this.wireframe_linewidth = 1;
    this.wireframe_linejoin = this.wireframe_linecap = "round";
    this.vertex_colors = false;
    if (a) {
        if (a.fragment_shader !== undefined)
            this.fragment_shader = a.fragment_shader;
        if (a.vertex_shader !== undefined)
            this.vertex_shader = a.vertex_shader;
        if (a.uniforms !== undefined)
            this.uniforms = a.uniforms;
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.shading !== undefined)
            this.shading = a.shading;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.wireframe !== undefined)
            this.wireframe = a.wireframe;
        if (a.wireframe_linewidth !== undefined)
            this.wireframe_linewidth = a.wireframe_linewidth;
        if (a.wireframe_linecap !== undefined)
            this.wireframe_linecap = a.wireframe_linecap;
        if (a.wireframe_linejoin !== undefined)
            this.wireframe_linejoin = a.wireframe_linejoin;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.MeshShaderMaterial.prototype = {
    toString: function() {
        return "THREE.MeshShaderMaterial (<br/>id: " + this.id + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
    }
};
THREE.MeshShaderMaterialCounter = {
    value: 0
};
THREE.ParticleBasicMaterial = function(a) {
    this.id = THREE.ParticleBasicMaterialCounter.value++;
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.map = null;
    this.size = 1;
    this.blending = THREE.NormalBlending;
    this.depth_test = true;
    this.offset = new THREE.Vector2;
    this.vertex_colors = false;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.map !== undefined)
            this.map = a.map;
        if (a.size !== undefined)
            this.size = a.size;
        if (a.blending !== undefined)
            this.blending = a.blending;
        if (a.depth_test !== undefined)
            this.depth_test = a.depth_test;
        if (a.vertex_colors !== undefined)
            this.vertex_colors = a.vertex_colors
    }
}
;
THREE.ParticleBasicMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>size: " + this.size + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
    }
};
THREE.ParticleBasicMaterialCounter = {
    value: 0
};
THREE.ParticleCircleMaterial = function(a) {
    this.color = new THREE.Color(16777215);
    this.opacity = 1;
    this.blending = THREE.NormalBlending;
    if (a) {
        a.color !== undefined && this.color.setHex(a.color);
        if (a.opacity !== undefined)
            this.opacity = a.opacity;
        if (a.blending !== undefined)
            this.blending = a.blending
    }
}
;
THREE.ParticleCircleMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleCircleMaterial (<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>)"
    }
};
THREE.ParticleDOMMaterial = function(a) {
    this.domElement = a
}
;
THREE.ParticleDOMMaterial.prototype = {
    toString: function() {
        return "THREE.ParticleDOMMaterial ( domElement: " + this.domElement + " )"
    }
};
THREE.Texture = function(a, c, d, e, g, f) {
    this.image = a;
    this.mapping = c !== undefined ? c : new THREE.UVMapping;
    this.wrap_s = d !== undefined ? d : THREE.ClampToEdgeWrapping;
    this.wrap_t = e !== undefined ? e : THREE.ClampToEdgeWrapping;
    this.mag_filter = g !== undefined ? g : THREE.LinearFilter;
    this.min_filter = f !== undefined ? f : THREE.LinearMipMapLinearFilter
}
;
THREE.Texture.prototype = {
    clone: function() {
        return new THREE.Texture(this.image,this.mapping,this.wrap_s,this.wrap_t,this.mag_filter,this.min_filter)
    },
    toString: function() {
        return "THREE.Texture (<br/>image: " + this.image + "<br/>wrap_s: " + this.wrap_s + "<br/>wrap_t: " + this.wrap_t + "<br/>mag_filter: " + this.mag_filter + "<br/>min_filter: " + this.min_filter + "<br/>)"
    }
};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.RenderTarget = function(a, c, d) {
    this.width = a;
    this.height = c;
    d = d || {};
    this.wrap_s = d.wrap_s !== undefined ? d.wrap_s : THREE.ClampToEdgeWrapping;
    this.wrap_t = d.wrap_t !== undefined ? d.wrap_t : THREE.ClampToEdgeWrapping;
    this.mag_filter = d.mag_filter !== undefined ? d.mag_filter : THREE.LinearFilter;
    this.min_filter = d.min_filter !== undefined ? d.min_filter : THREE.LinearMipMapLinearFilter;
    this.format = d.format !== undefined ? d.format : THREE.RGBFormat;
    this.type = d.type !== undefined ? d.type : THREE.UnsignedByteType
}
;
var Uniforms = {
    clone: function(a) {
        var c, d, e, g = {};
        for (c in a) {
            g[c] = {};
            for (d in a[c]) {
                e = a[c][d];
                g[c][d] = e instanceof THREE.Color || e instanceof THREE.Vector3 || e instanceof THREE.Texture ? e.clone() : e
            }
        }
        return g
    },
    merge: function(a) {
        var c, d, e, g = {};
        for (c = 0; c < a.length; c++) {
            e = this.clone(a[c]);
            for (d in e)
                g[d] = e[d]
        }
        return g
    }
};
THREE.CubeReflectionMapping = function() {}
;
THREE.CubeRefractionMapping = function() {}
;
THREE.LatitudeReflectionMapping = function() {}
;
THREE.LatitudeRefractionMapping = function() {}
;
THREE.SphericalReflectionMapping = function() {}
;
THREE.SphericalRefractionMapping = function() {}
;
THREE.UVMapping = function() {}
;
THREE.Scene = function() {
    this.objects = [];
    this.lights = [];
    this.fog = null;
    this.addObject = function(a) {
        this.objects.indexOf(a) === -1 && this.objects.push(a)
    }
    ;
    this.removeObject = function(a) {
        a = this.objects.indexOf(a);
        a !== -1 && this.objects.splice(a, 1)
    }
    ;
    this.addLight = function(a) {
        this.lights.indexOf(a) === -1 && this.lights.push(a)
    }
    ;
    this.removeLight = function(a) {
        a = this.lights.indexOf(a);
        a !== -1 && this.lights.splice(a, 1)
    }
    ;
    this.toString = function() {
        return "THREE.Scene ( " + this.objects + " )"
    }
}
;
THREE.Fog = function(a, c, d) {
    this.color = new THREE.Color(a);
    this.near = c || 1;
    this.far = d || 1E3
}
;
THREE.FogExp2 = function(a, c) {
    this.color = new THREE.Color(a);
    this.density = c || 2.5E-4
}
;
THREE.Projector = function() {
    function a(n, o) {
        return o.z - n.z
    }
    function c(n, o) {
        var v = 0
          , D = 1
          , y = n.z + n.w
          , C = o.z + o.w
          , z = -n.z + n.w
          , F = -o.z + o.w;
        if (y >= 0 && C >= 0 && z >= 0 && F >= 0)
            return true;
        else if (y < 0 && C < 0 || z < 0 && F < 0)
            return false;
        else {
            if (y < 0)
                v = Math.max(v, y / (y - C));
            else if (C < 0)
                D = Math.min(D, y / (y - C));
            if (z < 0)
                v = Math.max(v, z / (z - F));
            else if (F < 0)
                D = Math.min(D, z / (z - F));
            if (D < v)
                return false;
            else {
                n.lerpSelf(o, v);
                o.lerpSelf(n, 1 - D);
                return true
            }
        }
    }
    var d, e, g = [], f, h, b, j = [], l, p, A = [], q, m, B = [], E = new THREE.Vector4, H = new THREE.Vector4, x = new THREE.Matrix4, I = new THREE.Matrix4, t = [], k = new THREE.Vector4, w = new THREE.Vector4, u;
    this.projectObjects = function(n, o, v) {
        var D = [], y, C;
        e = 0;
        x.multiply(o.projectionMatrix, o.matrix);
        t[0] = new THREE.Vector4(x.n41 - x.n11,x.n42 - x.n12,x.n43 - x.n13,x.n44 - x.n14);
        t[1] = new THREE.Vector4(x.n41 + x.n11,x.n42 + x.n12,x.n43 + x.n13,x.n44 + x.n14);
        t[2] = new THREE.Vector4(x.n41 + x.n21,x.n42 + x.n22,x.n43 + x.n23,x.n44 + x.n24);
        t[3] = new THREE.Vector4(x.n41 - x.n21,x.n42 - x.n22,x.n43 - x.n23,x.n44 - x.n24);
        t[4] = new THREE.Vector4(x.n41 - x.n31,x.n42 - x.n32,x.n43 - x.n33,x.n44 - x.n34);
        t[5] = new THREE.Vector4(x.n41 + x.n31,x.n42 + x.n32,x.n43 + x.n33,x.n44 + x.n34);
        o = 0;
        for (y = t.length; o < y; o++) {
            C = t[o];
            C.divideScalar(Math.sqrt(C.x * C.x + C.y * C.y + C.z * C.z))
        }
        y = n.objects;
        n = 0;
        for (o = y.length; n < o; n++) {
            C = y[n];
            var z;
            if (!(z = !C.visible)) {
                if (z = C instanceof THREE.Mesh) {
                    a: {
                        z = void 0;
                        for (var F = C.position, J = -C.geometry.boundingSphere.radius * Math.max(C.scale.x, Math.max(C.scale.y, C.scale.z)), M = 0; M < 6; M++) {
                            z = t[M].x * F.x + t[M].y * F.y + t[M].z * F.z + t[M].w;
                            if (z <= J) {
                                z = false;
                                break a
                            }
                        }
                        z = true
                    }
                    z = !z
                }
                z = z
            }
            if (!z) {
                d = g[e] = g[e] || new THREE.RenderableObject;
                E.copy(C.position);
                x.multiplyVector3(E);
                d.object = C;
                d.z = E.z;
                D.push(d);
                e++
            }
        }
        v && D.sort(a);
        return D
    }
    ;
    this.projectScene = function(n, o, v) {
        var D = [], y = o.near, C = o.far, z, F, J, M, Q, S, U, ca, da, T, O, Z, V, K, W, ba;
        b = p = m = 0;
        o.autoUpdateMatrix && o.updateMatrix();
        x.multiply(o.projectionMatrix, o.matrix);
        S = this.projectObjects(n, o, true);
        n = 0;
        for (z = S.length; n < z; n++) {
            U = S[n].object;
            if (U.visible) {
                U.autoUpdateMatrix && U.updateMatrix();
                ca = U.matrix;
                da = U.rotationMatrix;
                T = U.materials;
                O = U.overdraw;
                if (U instanceof THREE.Mesh) {
                    Z = U.geometry;
                    V = Z.vertices;
                    F = 0;
                    for (J = V.length; F < J; F++) {
                        K = V[F];
                        K.positionWorld.copy(K.position);
                        ca.multiplyVector3(K.positionWorld);
                        M = K.positionScreen;
                        M.copy(K.positionWorld);
                        x.multiplyVector4(M);
                        M.x /= M.w;
                        M.y /= M.w;
                        K.__visible = M.z > y && M.z < C
                    }
                    Z = Z.faces;
                    F = 0;
                    for (J = Z.length; F < J; F++) {
                        K = Z[F];
                        if (K instanceof THREE.Face3) {
                            M = V[K.a];
                            Q = V[K.b];
                            W = V[K.c];
                            if (M.__visible && Q.__visible && W.__visible)
                                if (U.doubleSided || U.flipSided != (W.positionScreen.x - M.positionScreen.x) * (Q.positionScreen.y - M.positionScreen.y) - (W.positionScreen.y - M.positionScreen.y) * (Q.positionScreen.x - M.positionScreen.x) < 0) {
                                    f = j[b] = j[b] || new THREE.RenderableFace3;
                                    f.v1.positionWorld.copy(M.positionWorld);
                                    f.v2.positionWorld.copy(Q.positionWorld);
                                    f.v3.positionWorld.copy(W.positionWorld);
                                    f.v1.positionScreen.copy(M.positionScreen);
                                    f.v2.positionScreen.copy(Q.positionScreen);
                                    f.v3.positionScreen.copy(W.positionScreen);
                                    f.normalWorld.copy(K.normal);
                                    da.multiplyVector3(f.normalWorld);
                                    f.centroidWorld.copy(K.centroid);
                                    ca.multiplyVector3(f.centroidWorld);
                                    f.centroidScreen.copy(f.centroidWorld);
                                    x.multiplyVector3(f.centroidScreen);
                                    W = K.vertexNormals;
                                    u = f.vertexNormalsWorld;
                                    M = 0;
                                    for (Q = W.length; M < Q; M++) {
                                        ba = u[M] = u[M] || new THREE.Vector3;
                                        ba.copy(W[M]);
                                        da.multiplyVector3(ba)
                                    }
                                    f.z = f.centroidScreen.z;
                                    f.meshMaterials = T;
                                    f.faceMaterials = K.materials;
                                    f.overdraw = O;
                                    if (U.geometry.uvs[F]) {
                                        f.uvs[0] = U.geometry.uvs[F][0];
                                        f.uvs[1] = U.geometry.uvs[F][1];
                                        f.uvs[2] = U.geometry.uvs[F][2]
                                    }
                                    D.push(f);
                                    b++
                                }
                        } else if (K instanceof THREE.Face4) {
                            M = V[K.a];
                            Q = V[K.b];
                            W = V[K.c];
                            ba = V[K.d];
                            if (M.__visible && Q.__visible && W.__visible && ba.__visible)
                                if (U.doubleSided || U.flipSided != ((ba.positionScreen.x - M.positionScreen.x) * (Q.positionScreen.y - M.positionScreen.y) - (ba.positionScreen.y - M.positionScreen.y) * (Q.positionScreen.x - M.positionScreen.x) < 0 || (Q.positionScreen.x - W.positionScreen.x) * (ba.positionScreen.y - W.positionScreen.y) - (Q.positionScreen.y - W.positionScreen.y) * (ba.positionScreen.x - W.positionScreen.x) < 0)) {
                                    f = j[b] = j[b] || new THREE.RenderableFace3;
                                    f.v1.positionWorld.copy(M.positionWorld);
                                    f.v2.positionWorld.copy(Q.positionWorld);
                                    f.v3.positionWorld.copy(ba.positionWorld);
                                    f.v1.positionScreen.copy(M.positionScreen);
                                    f.v2.positionScreen.copy(Q.positionScreen);
                                    f.v3.positionScreen.copy(ba.positionScreen);
                                    f.normalWorld.copy(K.normal);
                                    da.multiplyVector3(f.normalWorld);
                                    f.centroidWorld.copy(K.centroid);
                                    ca.multiplyVector3(f.centroidWorld);
                                    f.centroidScreen.copy(f.centroidWorld);
                                    x.multiplyVector3(f.centroidScreen);
                                    f.z = f.centroidScreen.z;
                                    f.meshMaterials = T;
                                    f.faceMaterials = K.materials;
                                    f.overdraw = O;
                                    if (U.geometry.uvs[F]) {
                                        f.uvs[0] = U.geometry.uvs[F][0];
                                        f.uvs[1] = U.geometry.uvs[F][1];
                                        f.uvs[2] = U.geometry.uvs[F][3]
                                    }
                                    D.push(f);
                                    b++;
                                    h = j[b] = j[b] || new THREE.RenderableFace3;
                                    h.v1.positionWorld.copy(Q.positionWorld);
                                    h.v2.positionWorld.copy(W.positionWorld);
                                    h.v3.positionWorld.copy(ba.positionWorld);
                                    h.v1.positionScreen.copy(Q.positionScreen);
                                    h.v2.positionScreen.copy(W.positionScreen);
                                    h.v3.positionScreen.copy(ba.positionScreen);
                                    h.normalWorld.copy(f.normalWorld);
                                    h.centroidWorld.copy(f.centroidWorld);
                                    h.centroidScreen.copy(f.centroidScreen);
                                    h.z = h.centroidScreen.z;
                                    h.meshMaterials = T;
                                    h.faceMaterials = K.materials;
                                    h.overdraw = O;
                                    if (U.geometry.uvs[F]) {
                                        h.uvs[0] = U.geometry.uvs[F][1];
                                        h.uvs[1] = U.geometry.uvs[F][2];
                                        h.uvs[2] = U.geometry.uvs[F][3]
                                    }
                                    D.push(h);
                                    b++
                                }
                        }
                    }
                } else if (U instanceof THREE.Line) {
                    I.multiply(x, ca);
                    V = U.geometry.vertices;
                    K = V[0];
                    K.positionScreen.copy(K.position);
                    I.multiplyVector4(K.positionScreen);
                    F = 1;
                    for (J = V.length; F < J; F++) {
                        M = V[F];
                        M.positionScreen.copy(M.position);
                        I.multiplyVector4(M.positionScreen);
                        Q = V[F - 1];
                        k.copy(M.positionScreen);
                        w.copy(Q.positionScreen);
                        if (c(k, w)) {
                            k.multiplyScalar(1 / k.w);
                            w.multiplyScalar(1 / w.w);
                            l = A[p] = A[p] || new THREE.RenderableLine;
                            l.v1.positionScreen.copy(k);
                            l.v2.positionScreen.copy(w);
                            l.z = Math.max(k.z, w.z);
                            l.materials = U.materials;
                            D.push(l);
                            p++
                        }
                    }
                } else if (U instanceof THREE.Particle) {
                    H.set(U.position.x, U.position.y, U.position.z, 1);
                    x.multiplyVector4(H);
                    H.z /= H.w;
                    if (H.z > 0 && H.z < 1) {
                        q = B[m] = B[m] || new THREE.RenderableParticle;
                        q.x = H.x / H.w;
                        q.y = H.y / H.w;
                        q.z = H.z;
                        q.rotation = U.rotation.z;
                        q.scale.x = U.scale.x * Math.abs(q.x - (H.x + o.projectionMatrix.n11) / (H.w + o.projectionMatrix.n14));
                        q.scale.y = U.scale.y * Math.abs(q.y - (H.y + o.projectionMatrix.n22) / (H.w + o.projectionMatrix.n24));
                        q.materials = U.materials;
                        D.push(q);
                        m++
                    }
                }
            }
        }
        v && D.sort(a);
        return D
    }
    ;
    this.unprojectVector = function(n, o) {
        var v = THREE.Matrix4.makeInvert(o.matrix);
        v.multiplySelf(THREE.Matrix4.makeInvert(o.projectionMatrix));
        v.multiplyVector3(n);
        return n
    }
}
;
THREE.DOMRenderer = function() {
    THREE.Renderer.call(this);
    var a = null, c = new THREE.Projector, d, e, g, f;
    this.domElement = document.createElement("div");
    this.setSize = function(h, b) {
        d = h;
        e = b;
        g = d / 2;
        f = e / 2
    }
    ;
    this.render = function(h, b) {
        var j, l, p, A, q, m, B, E;
        a = c.projectScene(h, b);
        j = 0;
        for (l = a.length; j < l; j++) {
            q = a[j];
            if (q instanceof THREE.RenderableParticle) {
                B = q.x * g + g;
                E = q.y * f + f;
                p = 0;
                for (A = q.material.length; p < A; p++) {
                    m = q.material[p];
                    if (m instanceof THREE.ParticleDOMMaterial) {
                        m = m.domElement;
                        m.style.left = B + "px";
                        m.style.top = E + "px"
                    }
                }
            }
        }
    }
}
;
THREE.CanvasRenderer = function() {
    function a(ka) {
        if (q != ka)
            l.globalAlpha = q = ka
    }
    function c(ka) {
        if (m != ka) {
            switch (ka) {
            case THREE.NormalBlending:
                l.globalCompositeOperation = "source-over";
                break;
            case THREE.AdditiveBlending:
                l.globalCompositeOperation = "lighter";
                break;
            case THREE.SubtractiveBlending:
                l.globalCompositeOperation = "darker"
            }
            m = ka
        }
    }
    var d = null, e = new THREE.Projector, g = document.createElement("canvas"), f, h, b, j, l = g.getContext("2d"), p = new THREE.Color(0), A = 0, q = 1, m = 0, B = null, E = null, H = 1, x, I, t, k, w, u, n, o, v, D = new THREE.Color, y = new THREE.Color, C = new THREE.Color, z = new THREE.Color, F = new THREE.Color, J, M, Q, S, U, ca, da, T, O, Z = new THREE.Rectangle, V = new THREE.Rectangle, K = new THREE.Rectangle, W = false, ba = new THREE.Color, ha = new THREE.Color, ea = new THREE.Color, G = new THREE.Color, N = Math.PI * 2, L = new THREE.Vector3, X, $, ma, ia, qa, ta, ua = 16;
    X = document.createElement("canvas");
    X.width = X.height = 2;
    $ = X.getContext("2d");
    $.fillStyle = "rgba(0,0,0,1)";
    $.fillRect(0, 0, 2, 2);
    ma = $.getImageData(0, 0, 2, 2);
    ia = ma.data;
    qa = document.createElement("canvas");
    qa.width = qa.height = ua;
    ta = qa.getContext("2d");
    ta.translate(-ua / 2, -ua / 2);
    ta.scale(ua, ua);
    ua--;
    this.domElement = g;
    this.sortElements = this.sortObjects = this.autoClear = true;
    this.setSize = function(ka, ja) {
        f = ka;
        h = ja;
        b = f / 2;
        j = h / 2;
        g.width = f;
        g.height = h;
        Z.set(-b, -j, b, j);
        q = 1;
        m = 0;
        E = B = null;
        H = 1
    }
    ;
    this.setClearColor = function(ka, ja) {
        p = ka;
        A = ja;
        V.set(-b, -j, b, j);
        l.setTransform(1, 0, 0, -1, b, j);
        this.clear()
    }
    ;
    this.setClearColorHex = function(ka, ja) {
        p.setHex(ka);
        A = ja;
        V.set(-b, -j, b, j);
        l.setTransform(1, 0, 0, -1, b, j);
        this.clear()
    }
    ;
    this.clear = function() {
        l.setTransform(1, 0, 0, -1, b, j);
        if (!V.isEmpty()) {
            V.inflate(1);
            V.minSelf(Z);
            if (p.hex == 0 && A == 0)
                l.clearRect(V.getX(), V.getY(), V.getWidth(), V.getHeight());
            else {
                c(THREE.NormalBlending);
                a(1);
                l.fillStyle = "rgba(" + Math.floor(p.r * 255) + "," + Math.floor(p.g * 255) + "," + Math.floor(p.b * 255) + "," + A + ")";
                l.fillRect(V.getX(), V.getY(), V.getWidth(), V.getHeight())
            }
            V.empty()
        }
    }
    ;
    this.render = function(ka, ja) {
        function Fa(P) {
            var fa, aa, R, Y = P.lights;
            ha.setRGB(0, 0, 0);
            ea.setRGB(0, 0, 0);
            G.setRGB(0, 0, 0);
            P = 0;
            for (fa = Y.length; P < fa; P++) {
                aa = Y[P];
                R = aa.color;
                if (aa instanceof THREE.AmbientLight) {
                    ha.r += R.r;
                    ha.g += R.g;
                    ha.b += R.b
                } else if (aa instanceof THREE.DirectionalLight) {
                    ea.r += R.r;
                    ea.g += R.g;
                    ea.b += R.b
                } else if (aa instanceof THREE.PointLight) {
                    G.r += R.r;
                    G.g += R.g;
                    G.b += R.b
                }
            }
        }
        function Aa(P, fa, aa, R) {
            var Y, ga, na, oa, pa = P.lights;
            P = 0;
            for (Y = pa.length; P < Y; P++) {
                ga = pa[P];
                na = ga.color;
                oa = ga.intensity;
                if (ga instanceof THREE.DirectionalLight) {
                    ga = aa.dot(ga.position) * oa;
                    if (ga > 0) {
                        R.r += na.r * ga;
                        R.g += na.g * ga;
                        R.b += na.b * ga
                    }
                } else if (ga instanceof THREE.PointLight) {
                    L.sub(ga.position, fa);
                    L.normalize();
                    ga = aa.dot(L) * oa;
                    if (ga > 0) {
                        R.r += na.r * ga;
                        R.g += na.g * ga;
                        R.b += na.b * ga
                    }
                }
            }
        }
        function Ja(P, fa, aa) {
            if (aa.opacity != 0) {
                a(aa.opacity);
                c(aa.blending);
                var R, Y, ga, na, oa, pa;
                if (aa instanceof THREE.ParticleBasicMaterial) {
                    if (aa.map && aa.map.image.loaded) {
                        na = aa.map.image;
                        oa = na.width >> 1;
                        pa = na.height >> 1;
                        Y = fa.scale.x * b;
                        ga = fa.scale.y * j;
                        aa = Y * oa;
                        R = ga * pa;
                        K.set(P.x - aa, P.y - R, P.x + aa, P.y + R);
                        if (Z.instersects(K)) {
                            l.save();
                            l.translate(P.x, P.y);
                            l.rotate(-fa.rotation);
                            l.scale(Y, -ga);
                            l.translate(-oa, -pa);
                            l.drawImage(na, 0, 0);
                            l.restore()
                        }
                    }
                } else if (aa instanceof THREE.ParticleCircleMaterial) {
                    if (W) {
                        ba.r = ha.r + ea.r + G.r;
                        ba.g = ha.g + ea.g + G.g;
                        ba.b = ha.b + ea.b + G.b;
                        D.r = aa.color.r * ba.r;
                        D.g = aa.color.g * ba.g;
                        D.b = aa.color.b * ba.b;
                        D.updateStyleString()
                    } else
                        D.__styleString = aa.color.__styleString;
                    aa = fa.scale.x * b;
                    R = fa.scale.y * j;
                    K.set(P.x - aa, P.y - R, P.x + aa, P.y + R);
                    if (Z.instersects(K)) {
                        Y = D.__styleString;
                        if (E != Y)
                            l.fillStyle = E = Y;
                        l.save();
                        l.translate(P.x, P.y);
                        l.rotate(-fa.rotation);
                        l.scale(aa, R);
                        l.beginPath();
                        l.arc(0, 0, 1, 0, N, true);
                        l.closePath();
                        l.fill();
                        l.restore()
                    }
                }
            }
        }
        function Ka(P, fa, aa, R) {
            if (R.opacity != 0) {
                a(R.opacity);
                c(R.blending);
                l.beginPath();
                l.moveTo(P.positionScreen.x, P.positionScreen.y);
                l.lineTo(fa.positionScreen.x, fa.positionScreen.y);
                l.closePath();
                if (R instanceof THREE.LineBasicMaterial) {
                    D.__styleString = R.color.__styleString;
                    P = R.linewidth;
                    if (H != P)
                        l.lineWidth = H = P;
                    P = D.__styleString;
                    if (B != P)
                        l.strokeStyle = B = P;
                    l.stroke();
                    K.inflate(R.linewidth * 2)
                }
            }
        }
        function ra(P, fa, aa, R, Y, ga) {
            if (Y.opacity != 0) {
                a(Y.opacity);
                c(Y.blending);
                k = P.positionScreen.x;
                w = P.positionScreen.y;
                u = fa.positionScreen.x;
                n = fa.positionScreen.y;
                o = aa.positionScreen.x;
                v = aa.positionScreen.y;
                l.beginPath();
                l.moveTo(k, w);
                l.lineTo(u, n);
                l.lineTo(o, v);
                l.lineTo(k, w);
                l.closePath();
                if (Y instanceof THREE.MeshBasicMaterial)
                    if (Y.map)
                        Y.map.image.loaded && Y.map.mapping instanceof THREE.UVMapping && Ca(k, w, u, n, o, v, Y.map.image, R.uvs[0].u, R.uvs[0].v, R.uvs[1].u, R.uvs[1].v, R.uvs[2].u, R.uvs[2].v);
                    else if (Y.env_map) {
                        if (Y.env_map.image.loaded)
                            if (Y.env_map.mapping instanceof THREE.SphericalReflectionMapping) {
                                P = ja.matrix;
                                L.copy(R.vertexNormalsWorld[0]);
                                S = (L.x * P.n11 + L.y * P.n12 + L.z * P.n13) * 0.5 + 0.5;
                                U = -(L.x * P.n21 + L.y * P.n22 + L.z * P.n23) * 0.5 + 0.5;
                                L.copy(R.vertexNormalsWorld[1]);
                                ca = (L.x * P.n11 + L.y * P.n12 + L.z * P.n13) * 0.5 + 0.5;
                                da = -(L.x * P.n21 + L.y * P.n22 + L.z * P.n23) * 0.5 + 0.5;
                                L.copy(R.vertexNormalsWorld[2]);
                                T = (L.x * P.n11 + L.y * P.n12 + L.z * P.n13) * 0.5 + 0.5;
                                O = -(L.x * P.n21 + L.y * P.n22 + L.z * P.n23) * 0.5 + 0.5;
                                Ca(k, w, u, n, o, v, Y.env_map.image, S, U, ca, da, T, O)
                            }
                    } else
                        Y.wireframe ? Ga(Y.color.__styleString, Y.wireframe_linewidth) : Ha(Y.color.__styleString);
                else if (Y instanceof THREE.MeshLambertMaterial) {
                    if (Y.map && !Y.wireframe) {
                        Y.map.mapping instanceof THREE.UVMapping && Ca(k, w, u, n, o, v, Y.map.image, R.uvs[0].u, R.uvs[0].v, R.uvs[1].u, R.uvs[1].v, R.uvs[2].u, R.uvs[2].v);
                        c(THREE.SubtractiveBlending)
                    }
                    if (W)
                        if (!Y.wireframe && Y.shading == THREE.SmoothShading && R.vertexNormalsWorld.length == 3) {
                            y.r = C.r = z.r = ha.r;
                            y.g = C.g = z.g = ha.g;
                            y.b = C.b = z.b = ha.b;
                            Aa(ga, R.v1.positionWorld, R.vertexNormalsWorld[0], y);
                            Aa(ga, R.v2.positionWorld, R.vertexNormalsWorld[1], C);
                            Aa(ga, R.v3.positionWorld, R.vertexNormalsWorld[2], z);
                            F.r = (C.r + z.r) * 0.5;
                            F.g = (C.g + z.g) * 0.5;
                            F.b = (C.b + z.b) * 0.5;
                            Q = Pa(y, C, z, F);
                            Ca(k, w, u, n, o, v, Q, 0, 0, 1, 0, 0, 1)
                        } else {
                            ba.r = ha.r;
                            ba.g = ha.g;
                            ba.b = ha.b;
                            Aa(ga, R.centroidWorld, R.normalWorld, ba);
                            D.r = Y.color.r * ba.r;
                            D.g = Y.color.g * ba.g;
                            D.b = Y.color.b * ba.b;
                            D.updateStyleString();
                            Y.wireframe ? Ga(D.__styleString, Y.wireframe_linewidth) : Ha(D.__styleString)
                        }
                    else
                        Y.wireframe ? Ga(Y.color.__styleString, Y.wireframe_linewidth) : Ha(Y.color.__styleString)
                } else if (Y instanceof THREE.MeshDepthMaterial) {
                    J = ja.near;
                    M = ja.far;
                    y.r = y.g = y.b = 1 - La(P.positionScreen.z, J, M);
                    C.r = C.g = C.b = 1 - La(fa.positionScreen.z, J, M);
                    z.r = z.g = z.b = 1 - La(aa.positionScreen.z, J, M);
                    F.r = (C.r + z.r) * 0.5;
                    F.g = (C.g + z.g) * 0.5;
                    F.b = (C.b + z.b) * 0.5;
                    Q = Pa(y, C, z, F);
                    Ca(k, w, u, n, o, v, Q, 0, 0, 1, 0, 0, 1)
                } else if (Y instanceof THREE.MeshNormalMaterial) {
                    D.r = Ma(R.normalWorld.x);
                    D.g = Ma(R.normalWorld.y);
                    D.b = Ma(R.normalWorld.z);
                    D.updateStyleString();
                    Y.wireframe ? Ga(D.__styleString, Y.wireframe_linewidth) : Ha(D.__styleString)
                }
            }
        }
        function Ga(P, fa) {
            if (B != P)
                l.strokeStyle = B = P;
            if (H != fa)
                l.lineWidth = H = fa;
            l.stroke();
            K.inflate(fa * 2)
        }
        function Ha(P) {
            if (E != P)
                l.fillStyle = E = P;
            l.fill()
        }
        function Ca(P, fa, aa, R, Y, ga, na, oa, pa, xa, sa, ya, Da) {
            var va, za;
            va = na.width - 1;
            za = na.height - 1;
            oa *= va;
            pa *= za;
            xa *= va;
            sa *= za;
            ya *= va;
            Da *= za;
            aa -= P;
            R -= fa;
            Y -= P;
            ga -= fa;
            xa -= oa;
            sa -= pa;
            ya -= oa;
            Da -= pa;
            va = xa * Da - ya * sa;
            if (va != 0) {
                za = 1 / va;
                va = (Da * aa - sa * Y) * za;
                sa = (Da * R - sa * ga) * za;
                aa = (xa * Y - ya * aa) * za;
                R = (xa * ga - ya * R) * za;
                P = P - va * oa - aa * pa;
                fa = fa - sa * oa - R * pa;
                l.save();
                l.transform(va, sa, aa, R, P, fa);
                l.clip();
                l.drawImage(na, 0, 0);
                l.restore()
            }
        }
        function Pa(P, fa, aa, R) {
            var Y = ~~(P.r * 255)
              , ga = ~~(P.g * 255);
            P = ~~(P.b * 255);
            var na = ~~(fa.r * 255)
              , oa = ~~(fa.g * 255);
            fa = ~~(fa.b * 255);
            var pa = ~~(aa.r * 255)
              , xa = ~~(aa.g * 255);
            aa = ~~(aa.b * 255);
            var sa = ~~(R.r * 255)
              , ya = ~~(R.g * 255);
            R = ~~(R.b * 255);
            ia[0] = Y < 0 ? 0 : Y > 255 ? 255 : Y;
            ia[1] = ga < 0 ? 0 : ga > 255 ? 255 : ga;
            ia[2] = P < 0 ? 0 : P > 255 ? 255 : P;
            ia[4] = na < 0 ? 0 : na > 255 ? 255 : na;
            ia[5] = oa < 0 ? 0 : oa > 255 ? 255 : oa;
            ia[6] = fa < 0 ? 0 : fa > 255 ? 255 : fa;
            ia[8] = pa < 0 ? 0 : pa > 255 ? 255 : pa;
            ia[9] = xa < 0 ? 0 : xa > 255 ? 255 : xa;
            ia[10] = aa < 0 ? 0 : aa > 255 ? 255 : aa;
            ia[12] = sa < 0 ? 0 : sa > 255 ? 255 : sa;
            ia[13] = ya < 0 ? 0 : ya > 255 ? 255 : ya;
            ia[14] = R < 0 ? 0 : R > 255 ? 255 : R;
            $.putImageData(ma, 0, 0);
            ta.drawImage(X, 0, 0);
            return qa
        }
        function La(P, fa, aa) {
            P = (P - fa) / (aa - fa);
            return P * P * (3 - 2 * P)
        }
        function Ma(P) {
            P = (P + 1) * 0.5;
            return P < 0 ? 0 : P > 1 ? 1 : P
        }
        function Na(P, fa) {
            var aa = fa.x - P.x
              , R = fa.y - P.y
              , Y = 1 / Math.sqrt(aa * aa + R * R);
            aa *= Y;
            R *= Y;
            fa.x += aa;
            fa.y += R;
            P.x -= aa;
            P.y -= R
        }
        var Ia, Qa, la, wa, Ba, Oa, Ra, Ea;
        this.autoClear ? this.clear() : l.setTransform(1, 0, 0, -1, b, j);
        d = e.projectScene(ka, ja, this.sortElements);
        (W = ka.lights.length > 0) && Fa(ka);
        Ia = 0;
        for (Qa = d.length; Ia < Qa; Ia++) {
            la = d[Ia];
            K.empty();
            if (la instanceof THREE.RenderableParticle) {
                x = la;
                x.x *= b;
                x.y *= j;
                wa = 0;
                for (Ba = la.materials.length; wa < Ba; wa++)
                    Ja(x, la, la.materials[wa], ka)
            } else if (la instanceof THREE.RenderableLine) {
                x = la.v1;
                I = la.v2;
                x.positionScreen.x *= b;
                x.positionScreen.y *= j;
                I.positionScreen.x *= b;
                I.positionScreen.y *= j;
                K.addPoint(x.positionScreen.x, x.positionScreen.y);
                K.addPoint(I.positionScreen.x, I.positionScreen.y);
                if (Z.instersects(K)) {
                    wa = 0;
                    for (Ba = la.materials.length; wa < Ba; )
                        Ka(x, I, la, la.materials[wa++], ka)
                }
            } else if (la instanceof THREE.RenderableFace3) {
                x = la.v1;
                I = la.v2;
                t = la.v3;
                x.positionScreen.x *= b;
                x.positionScreen.y *= j;
                I.positionScreen.x *= b;
                I.positionScreen.y *= j;
                t.positionScreen.x *= b;
                t.positionScreen.y *= j;
                if (la.overdraw) {
                    Na(x.positionScreen, I.positionScreen);
                    Na(I.positionScreen, t.positionScreen);
                    Na(t.positionScreen, x.positionScreen)
                }
                K.add3Points(x.positionScreen.x, x.positionScreen.y, I.positionScreen.x, I.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                if (Z.instersects(K)) {
                    wa = 0;
                    for (Ba = la.meshMaterials.length; wa < Ba; ) {
                        Ea = la.meshMaterials[wa++];
                        if (Ea instanceof THREE.MeshFaceMaterial) {
                            Oa = 0;
                            for (Ra = la.faceMaterials.length; Oa < Ra; )
                                (Ea = la.faceMaterials[Oa++]) && ra(x, I, t, la, Ea, ka)
                        } else
                            ra(x, I, t, la, Ea, ka)
                    }
                }
            }
            V.addRectangle(K)
        }
        l.setTransform(1, 0, 0, 1, 0, 0)
    }
}
;
THREE.SVGRenderer = function() {
    function a(S, U, ca) {
        var da, T, O, Z;
        da = 0;
        for (T = S.lights.length; da < T; da++) {
            O = S.lights[da];
            if (O instanceof THREE.DirectionalLight) {
                Z = U.normalWorld.dot(O.position) * O.intensity;
                if (Z > 0) {
                    ca.r += O.color.r * Z;
                    ca.g += O.color.g * Z;
                    ca.b += O.color.b * Z
                }
            } else if (O instanceof THREE.PointLight) {
                v.sub(O.position, U.centroidWorld);
                v.normalize();
                Z = U.normalWorld.dot(v) * O.intensity;
                if (Z > 0) {
                    ca.r += O.color.r * Z;
                    ca.g += O.color.g * Z;
                    ca.b += O.color.b * Z
                }
            }
        }
    }
    function c(S, U, ca, da, T, O) {
        z = e(F++);
        z.setAttribute("d", "M " + S.positionScreen.x + " " + S.positionScreen.y + " L " + U.positionScreen.x + " " + U.positionScreen.y + " L " + ca.positionScreen.x + "," + ca.positionScreen.y + "z");
        if (T instanceof THREE.MeshBasicMaterial)
            t.__styleString = T.color.__styleString;
        else if (T instanceof THREE.MeshLambertMaterial)
            if (I) {
                k.r = w.r;
                k.g = w.g;
                k.b = w.b;
                a(O, da, k);
                t.r = T.color.r * k.r;
                t.g = T.color.g * k.g;
                t.b = T.color.b * k.b;
                t.updateStyleString()
            } else
                t.__styleString = T.color.__styleString;
        else if (T instanceof THREE.MeshDepthMaterial) {
            o = 1 - T.__2near / (T.__farPlusNear - da.z * T.__farMinusNear);
            t.setRGB(o, o, o)
        } else
            T instanceof THREE.MeshNormalMaterial && t.setRGB(g(da.normalWorld.x), g(da.normalWorld.y), g(da.normalWorld.z));
        T.wireframe ? z.setAttribute("style", "fill: none; stroke: " + t.__styleString + "; stroke-width: " + T.wireframe_linewidth + "; stroke-opacity: " + T.opacity + "; stroke-linecap: " + T.wireframe_linecap + "; stroke-linejoin: " + T.wireframe_linejoin) : z.setAttribute("style", "fill: " + t.__styleString + "; fill-opacity: " + T.opacity);
        b.appendChild(z)
    }
    function d(S, U, ca, da, T, O, Z) {
        z = e(F++);
        z.setAttribute("d", "M " + S.positionScreen.x + " " + S.positionScreen.y + " L " + U.positionScreen.x + " " + U.positionScreen.y + " L " + ca.positionScreen.x + "," + ca.positionScreen.y + " L " + da.positionScreen.x + "," + da.positionScreen.y + "z");
        if (O instanceof THREE.MeshBasicMaterial)
            t.__styleString = O.color.__styleString;
        else if (O instanceof THREE.MeshLambertMaterial)
            if (I) {
                k.r = w.r;
                k.g = w.g;
                k.b = w.b;
                a(Z, T, k);
                t.r = O.color.r * k.r;
                t.g = O.color.g * k.g;
                t.b = O.color.b * k.b;
                t.updateStyleString()
            } else
                t.__styleString = O.color.__styleString;
        else if (O instanceof THREE.MeshDepthMaterial) {
            o = 1 - O.__2near / (O.__farPlusNear - T.z * O.__farMinusNear);
            t.setRGB(o, o, o)
        } else
            O instanceof THREE.MeshNormalMaterial && t.setRGB(g(T.normalWorld.x), g(T.normalWorld.y), g(T.normalWorld.z));
        O.wireframe ? z.setAttribute("style", "fill: none; stroke: " + t.__styleString + "; stroke-width: " + O.wireframe_linewidth + "; stroke-opacity: " + O.opacity + "; stroke-linecap: " + O.wireframe_linecap + "; stroke-linejoin: " + O.wireframe_linejoin) : z.setAttribute("style", "fill: " + t.__styleString + "; fill-opacity: " + O.opacity);
        b.appendChild(z)
    }
    function e(S) {
        if (D[S] == null) {
            D[S] = document.createElementNS("http://www.w3.org/2000/svg", "path");
            Q == 0 && D[S].setAttribute("shape-rendering", "crispEdges");
            return D[S]
        }
        return D[S]
    }
    function g(S) {
        return S < 0 ? Math.min((1 + S) * 0.5, 0.5) : 0.5 + Math.min(S * 0.5, 0.5)
    }
    var f = null, h = new THREE.Projector, b = document.createElementNS("http://www.w3.org/2000/svg", "svg"), j, l, p, A, q, m, B, E, H = new THREE.Rectangle, x = new THREE.Rectangle, I = false, t = new THREE.Color(16777215), k = new THREE.Color(16777215), w = new THREE.Color(0), u = new THREE.Color(0), n = new THREE.Color(0), o, v = new THREE.Vector3, D = [], y = [], C = [], z, F, J, M, Q = 1;
    this.domElement = b;
    this.sortElements = this.sortObjects = this.autoClear = true;
    this.setQuality = function(S) {
        switch (S) {
        case "high":
            Q = 1;
            break;
        case "low":
            Q = 0
        }
    }
    ;
    this.setSize = function(S, U) {
        j = S;
        l = U;
        p = j / 2;
        A = l / 2;
        b.setAttribute("viewBox", -p + " " + -A + " " + j + " " + l);
        b.setAttribute("width", j);
        b.setAttribute("height", l);
        H.set(-p, -A, p, A)
    }
    ;
    this.clear = function() {
        for (; b.childNodes.length > 0; )
            b.removeChild(b.childNodes[0])
    }
    ;
    this.render = function(S, U) {
        var ca, da, T, O, Z, V, K, W;
        this.autoClear && this.clear();
        f = h.projectScene(S, U, this.sortElements);
        M = J = F = 0;
        if (I = S.lights.length > 0) {
            K = S.lights;
            w.setRGB(0, 0, 0);
            u.setRGB(0, 0, 0);
            n.setRGB(0, 0, 0);
            ca = 0;
            for (da = K.length; ca < da; ca++) {
                T = K[ca];
                O = T.color;
                if (T instanceof THREE.AmbientLight) {
                    w.r += O.r;
                    w.g += O.g;
                    w.b += O.b
                } else if (T instanceof THREE.DirectionalLight) {
                    u.r += O.r;
                    u.g += O.g;
                    u.b += O.b
                } else if (T instanceof THREE.PointLight) {
                    n.r += O.r;
                    n.g += O.g;
                    n.b += O.b
                }
            }
        }
        ca = 0;
        for (da = f.length; ca < da; ca++) {
            K = f[ca];
            x.empty();
            if (K instanceof THREE.RenderableParticle) {
                q = K;
                q.x *= p;
                q.y *= -A;
                T = 0;
                for (O = K.materials.length; T < O; T++)
                    if (W = K.materials[T]) {
                        Z = q;
                        V = K;
                        W = W;
                        var ba = J++;
                        if (y[ba] == null) {
                            y[ba] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            Q == 0 && y[ba].setAttribute("shape-rendering", "crispEdges")
                        }
                        z = y[ba];
                        z.setAttribute("cx", Z.x);
                        z.setAttribute("cy", Z.y);
                        z.setAttribute("r", V.scale.x * p);
                        if (W instanceof THREE.ParticleCircleMaterial) {
                            if (I) {
                                k.r = w.r + u.r + n.r;
                                k.g = w.g + u.g + n.g;
                                k.b = w.b + u.b + n.b;
                                t.r = W.color.r * k.r;
                                t.g = W.color.g * k.g;
                                t.b = W.color.b * k.b;
                                t.updateStyleString()
                            } else
                                t = W.color;
                            z.setAttribute("style", "fill: " + t.__styleString)
                        }
                        b.appendChild(z)
                    }
            } else if (K instanceof THREE.RenderableLine) {
                q = K.v1;
                m = K.v2;
                q.positionScreen.x *= p;
                q.positionScreen.y *= -A;
                m.positionScreen.x *= p;
                m.positionScreen.y *= -A;
                x.addPoint(q.positionScreen.x, q.positionScreen.y);
                x.addPoint(m.positionScreen.x, m.positionScreen.y);
                if (H.instersects(x)) {
                    T = 0;
                    for (O = K.materials.length; T < O; )
                        if (W = K.materials[T++]) {
                            Z = q;
                            V = m;
                            W = W;
                            ba = M++;
                            if (C[ba] == null) {
                                C[ba] = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                Q == 0 && C[ba].setAttribute("shape-rendering", "crispEdges")
                            }
                            z = C[ba];
                            z.setAttribute("x1", Z.positionScreen.x);
                            z.setAttribute("y1", Z.positionScreen.y);
                            z.setAttribute("x2", V.positionScreen.x);
                            z.setAttribute("y2", V.positionScreen.y);
                            if (W instanceof THREE.LineBasicMaterial) {
                                t.__styleString = W.color.__styleString;
                                z.setAttribute("style", "fill: none; stroke: " + t.__styleString + "; stroke-width: " + W.linewidth + "; stroke-opacity: " + W.opacity + "; stroke-linecap: " + W.linecap + "; stroke-linejoin: " + W.linejoin);
                                b.appendChild(z)
                            }
                        }
                }
            } else if (K instanceof THREE.RenderableFace3) {
                q = K.v1;
                m = K.v2;
                B = K.v3;
                q.positionScreen.x *= p;
                q.positionScreen.y *= -A;
                m.positionScreen.x *= p;
                m.positionScreen.y *= -A;
                B.positionScreen.x *= p;
                B.positionScreen.y *= -A;
                x.addPoint(q.positionScreen.x, q.positionScreen.y);
                x.addPoint(m.positionScreen.x, m.positionScreen.y);
                x.addPoint(B.positionScreen.x, B.positionScreen.y);
                if (H.instersects(x)) {
                    T = 0;
                    for (O = K.meshMaterials.length; T < O; ) {
                        W = K.meshMaterials[T++];
                        if (W instanceof THREE.MeshFaceMaterial) {
                            Z = 0;
                            for (V = K.faceMaterials.length; Z < V; )
                                (W = K.faceMaterials[Z++]) && c(q, m, B, K, W, S)
                        } else
                            W && c(q, m, B, K, W, S)
                    }
                }
            } else if (K instanceof THREE.RenderableFace4) {
                q = K.v1;
                m = K.v2;
                B = K.v3;
                E = K.v4;
                q.positionScreen.x *= p;
                q.positionScreen.y *= -A;
                m.positionScreen.x *= p;
                m.positionScreen.y *= -A;
                B.positionScreen.x *= p;
                B.positionScreen.y *= -A;
                E.positionScreen.x *= p;
                E.positionScreen.y *= -A;
                x.addPoint(q.positionScreen.x, q.positionScreen.y);
                x.addPoint(m.positionScreen.x, m.positionScreen.y);
                x.addPoint(B.positionScreen.x, B.positionScreen.y);
                x.addPoint(E.positionScreen.x, E.positionScreen.y);
                if (H.instersects(x)) {
                    T = 0;
                    for (O = K.meshMaterials.length; T < O; ) {
                        W = K.meshMaterials[T++];
                        if (W instanceof THREE.MeshFaceMaterial) {
                            Z = 0;
                            for (V = K.faceMaterials.length; Z < V; )
                                (W = K.faceMaterials[Z++]) && d(q, m, B, E, K, W, S)
                        } else
                            W && d(q, m, B, E, K, W, S)
                    }
                }
            }
        }
    }
}
;
THREE.WebGLRenderer = function(a) {
    function c(k, w) {
        k.fragment_shader = w.fragment_shader;
        k.vertex_shader = w.vertex_shader;
        k.uniforms = Uniforms.clone(w.uniforms)
    }
    function d(k) {
        if (k.doubleSided) {
            if (p) {
                b.disable(b.CULL_FACE);
                p = false
            }
        } else {
            if (!p) {
                b.enable(b.CULL_FACE);
                p = true
            }
            k.flipSided ? b.frontFace(b.CW) : b.frontFace(b.CCW)
        }
    }
    function e(k) {
        if (k != A) {
            switch (k) {
            case THREE.AdditiveBlending:
                b.blendEquation(b.FUNC_ADD);
                b.blendFunc(b.ONE, b.ONE);
                break;
            case THREE.SubtractiveBlending:
                b.blendFunc(b.DST_COLOR, b.ZERO);
                break;
            case THREE.BillboardBlending:
                b.blendEquation(b.FUNC_ADD);
                b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA);
                break;
            default:
                b.blendEquation(b.FUNC_ADD);
                b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA)
            }
            A = k
        }
    }
    function g(k, w) {
        var u;
        if (k == "fragment")
            u = b.createShader(b.FRAGMENT_SHADER);
        else if (k == "vertex")
            u = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(u, w);
        b.compileShader(u);
        if (!b.getShaderParameter(u, b.COMPILE_STATUS)) {
            alert(b.getShaderInfoLog(u));
            return null
        }
        return u
    }
    function f(k) {
        switch (k) {
        case THREE.RepeatWrapping:
            return b.REPEAT;
        case THREE.ClampToEdgeWrapping:
            return b.CLAMP_TO_EDGE;
        case THREE.MirroredRepeatWrapping:
            return b.MIRRORED_REPEAT;
        case THREE.NearestFilter:
            return b.NEAREST;
        case THREE.NearestMipMapNearestFilter:
            return b.NEAREST_MIPMAP_NEAREST;
        case THREE.NearestMipMapLinearFilter:
            return b.NEAREST_MIPMAP_LINEAR;
        case THREE.LinearFilter:
            return b.LINEAR;
        case THREE.LinearMipMapNearestFilter:
            return b.LINEAR_MIPMAP_NEAREST;
        case THREE.LinearMipMapLinearFilter:
            return b.LINEAR_MIPMAP_LINEAR;
        case THREE.ByteType:
            return b.BYTE;
        case THREE.UnsignedByteType:
            return b.UNSIGNED_BYTE;
        case THREE.ShortType:
            return b.SHORT;
        case THREE.UnsignedShortType:
            return b.UNSIGNED_SHORT;
        case THREE.IntType:
            return b.INT;
        case THREE.UnsignedShortType:
            return b.UNSIGNED_INT;
        case THREE.FloatType:
            return b.FLOAT;
        case THREE.AlphaFormat:
            return b.ALPHA;
        case THREE.RGBFormat:
            return b.RGB;
        case THREE.RGBAFormat:
            return b.RGBA;
        case THREE.LuminanceFormat:
            return b.LUMINANCE;
        case THREE.LuminanceAlphaFormat:
            return b.LUMINANCE_ALPHA
        }
        return 0
    }
    var h = document.createElement("canvas"), b, j = null, l = null, p, A = null, q = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], m = new THREE.Matrix4, B = new Float32Array(16), E = new Float32Array(16), H = new THREE.Vector4, x = true, I = new THREE.Color(0), t = 0;
    if (a) {
        if (a.antialias !== undefined)
            x = a.antialias;
        a.clearColor !== undefined && I.setHex(a.clearColor);
        if (a.clearAlpha !== undefined)
            t = a.clearAlpha
    }
    this.domElement = h;
    this.autoClear = true;
    (function(k, w, u) {
        try {
            b = h.getContext("experimental-webgl", {
                antialias: k
            })
        } catch (n) {
            console.log(n)
        }
        if (!b) {
            alert("WebGL not supported");
            throw "cannot create webgl context";
        }
        b.clearColor(0, 0, 0, 1);
        b.clearDepth(1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.frontFace(b.CCW);
        b.cullFace(b.BACK);
        b.enable(b.CULL_FACE);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.clearColor(w.r, w.g, w.b, u);
        p = true
    }
    )(x, I, t);
    this.context = b;
    this.lights = {
        ambient: [0, 0, 0],
        directional: {
            length: 0,
            colors: [],
            positions: []
        },
        point: {
            length: 0,
            colors: [],
            positions: []
        }
    };
    this.setSize = function(k, w) {
        h.width = k;
        h.height = w;
        b.viewport(0, 0, h.width, h.height)
    }
    ;
    this.setClearColorHex = function(k, w) {
        var u = new THREE.Color(k);
        b.clearColor(u.r, u.g, u.b, w)
    }
    ;
    this.setClearColor = function(k, w) {
        b.clearColor(k.r, k.g, k.b, w)
    }
    ;
    this.clear = function() {
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
    }
    ;
    this.setupLights = function(k, w) {
        var u, n, o, v = 0, D = 0, y = 0, C, z, F, J = this.lights, M = J.directional.colors, Q = J.directional.positions, S = J.point.colors, U = J.point.positions, ca = 0, da = 0;
        u = o = o = 0;
        for (n = w.length; u < n; u++) {
            o = w[u];
            C = o.color;
            z = o.position;
            F = o.intensity;
            if (o instanceof THREE.AmbientLight) {
                v += C.r;
                D += C.g;
                y += C.b
            } else if (o instanceof THREE.DirectionalLight) {
                o = ca * 3;
                M[o] = C.r * F;
                M[o + 1] = C.g * F;
                M[o + 2] = C.b * F;
                Q[o] = z.x;
                Q[o + 1] = z.y;
                Q[o + 2] = z.z;
                ca += 1
            } else if (o instanceof THREE.PointLight) {
                o = da * 3;
                S[o] = C.r * F;
                S[o + 1] = C.g * F;
                S[o + 2] = C.b * F;
                U[o] = z.x;
                U[o + 1] = z.y;
                U[o + 2] = z.z;
                da += 1
            }
        }
        for (u = ca * 3; u < M.length; u++)
            M[u] = 0;
        for (u = da * 3; u < S.length; u++)
            S[u] = 0;
        J.point.length = da;
        J.directional.length = ca;
        J.ambient[0] = v;
        J.ambient[1] = D;
        J.ambient[2] = y
    }
    ;
    this.createParticleBuffers = function(k) {
        k.__webGLVertexBuffer = b.createBuffer();
        k.__webGLColorBuffer = b.createBuffer()
    }
    ;
    this.createLineBuffers = function(k) {
        k.__webGLVertexBuffer = b.createBuffer();
        k.__webGLColorBuffer = b.createBuffer()
    }
    ;
    this.createMeshBuffers = function(k) {
        k.__webGLVertexBuffer = b.createBuffer();
        k.__webGLNormalBuffer = b.createBuffer();
        k.__webGLTangentBuffer = b.createBuffer();
        k.__webGLColorBuffer = b.createBuffer();
        k.__webGLUVBuffer = b.createBuffer();
        k.__webGLUV2Buffer = b.createBuffer();
        k.__webGLFaceBuffer = b.createBuffer();
        k.__webGLLineBuffer = b.createBuffer()
    }
    ;
    this.initLineBuffers = function(k) {
        var w = k.vertices.length;
        k.__vertexArray = new Float32Array(w * 3);
        k.__colorArray = new Float32Array(w * 3);
        k.__webGLLineCount = w
    }
    ;
    this.initParticleBuffers = function(k) {
        var w = k.vertices.length;
        k.__vertexArray = new Float32Array(w * 3);
        k.__colorArray = new Float32Array(w * 3);
        k.__sortArray = [];
        k.__webGLParticleCount = w
    }
    ;
    this.initMeshBuffers = function(k, w) {
        var u, n, o = 0, v = 0, D = 0, y = w.geometry.faces, C = k.faces;
        u = 0;
        for (n = C.length; u < n; u++) {
            fi = C[u];
            face = y[fi];
            if (face instanceof THREE.Face3) {
                o += 3;
                v += 1;
                D += 3
            } else if (face instanceof THREE.Face4) {
                o += 4;
                v += 2;
                D += 4
            }
        }
        k.__vertexArray = new Float32Array(o * 3);
        k.__normalArray = new Float32Array(o * 3);
        k.__tangentArray = new Float32Array(o * 4);
        k.__colorArray = new Float32Array(o * 3);
        k.__uvArray = new Float32Array(o * 2);
        k.__uv2Array = new Float32Array(o * 2);
        k.__faceArray = new Uint16Array(v * 3);
        k.__lineArray = new Uint16Array(D * 2);
        o = false;
        u = 0;
        for (n = w.materials.length; u < n; u++) {
            y = w.materials[u];
            if (y instanceof THREE.MeshFaceMaterial) {
                y = 0;
                for (C = k.materials.length; y < C; y++)
                    if (k.materials[y] && k.materials[y].shading != undefined && k.materials[y].shading == THREE.SmoothShading) {
                        o = true;
                        break
                    }
            } else if (y && y.shading != undefined && y.shading == THREE.SmoothShading) {
                o = true;
                break
            }
            if (o)
                break
        }
        k.__needsSmoothNormals = o;
        k.__webGLFaceCount = v * 3;
        k.__webGLLineCount = D * 2
    }
    ;
    this.setMeshBuffers = function(k, w, u) {
        var n, o, v, D, y, C, z, F, J, M, Q = 0, S = 0, U = 0, ca = 0, da = 0, T = 0, O = 0, Z = 0, V = 0, K = k.__vertexArray, W = k.__uvArray, ba = k.__uv2Array, ha = k.__normalArray, ea = k.__tangentArray, G = k.__colorArray, N = k.__faceArray, L = k.__lineArray, X = k.__needsSmoothNormals, $ = w.geometry, ma = $.__dirtyVertices, ia = $.__dirtyElements, qa = $.__dirtyUvs, ta = $.__dirtyNormals, ua = $.__dirtyTangents, ka = $.__dirtyColors, ja = $.vertices, Fa = k.faces, Aa = $.faces, Ja = $.uvs, Ka = $.uvs2, ra = $.colors;
        w = 0;
        for (n = Fa.length; w < n; w++) {
            o = Fa[w];
            v = Aa[o];
            C = Ja[o];
            o = Ka[o];
            D = v.vertexNormals;
            y = v.normal;
            if (v instanceof THREE.Face3) {
                if (ma) {
                    z = ja[v.a].position;
                    F = ja[v.b].position;
                    J = ja[v.c].position;
                    K[S] = z.x;
                    K[S + 1] = z.y;
                    K[S + 2] = z.z;
                    K[S + 3] = F.x;
                    K[S + 4] = F.y;
                    K[S + 5] = F.z;
                    K[S + 6] = J.x;
                    K[S + 7] = J.y;
                    K[S + 8] = J.z;
                    S += 9
                }
                if (ka && ra.length) {
                    z = ra[v.a];
                    F = ra[v.b];
                    J = ra[v.c];
                    G[V] = z.r;
                    G[V + 1] = z.g;
                    G[V + 2] = z.b;
                    G[V + 3] = F.r;
                    G[V + 4] = F.g;
                    G[V + 5] = F.b;
                    G[V + 6] = J.r;
                    G[V + 7] = J.g;
                    G[V + 8] = J.b;
                    V += 9
                }
                if (ua && $.hasTangents) {
                    z = ja[v.a].tangent;
                    F = ja[v.b].tangent;
                    J = ja[v.c].tangent;
                    ea[O] = z.x;
                    ea[O + 1] = z.y;
                    ea[O + 2] = z.z;
                    ea[O + 3] = z.w;
                    ea[O + 4] = F.x;
                    ea[O + 5] = F.y;
                    ea[O + 6] = F.z;
                    ea[O + 7] = F.w;
                    ea[O + 8] = J.x;
                    ea[O + 9] = J.y;
                    ea[O + 10] = J.z;
                    ea[O + 11] = J.w;
                    O += 12
                }
                if (ta)
                    if (D.length == 3 && X)
                        for (v = 0; v < 3; v++) {
                            y = D[v];
                            ha[T] = y.x;
                            ha[T + 1] = y.y;
                            ha[T + 2] = y.z;
                            T += 3
                        }
                    else
                        for (v = 0; v < 3; v++) {
                            ha[T] = y.x;
                            ha[T + 1] = y.y;
                            ha[T + 2] = y.z;
                            T += 3
                        }
                if (qa && C)
                    for (v = 0; v < 3; v++) {
                        D = C[v];
                        W[U] = D.u;
                        W[U + 1] = D.v;
                        U += 2
                    }
                if (qa && o)
                    for (v = 0; v < 3; v++) {
                        C = o[v];
                        ba[ca] = C.u;
                        ba[ca + 1] = C.v;
                        ca += 2
                    }
                if (ia) {
                    N[da] = Q;
                    N[da + 1] = Q + 1;
                    N[da + 2] = Q + 2;
                    da += 3;
                    L[Z] = Q;
                    L[Z + 1] = Q + 1;
                    L[Z + 2] = Q;
                    L[Z + 3] = Q + 2;
                    L[Z + 4] = Q + 1;
                    L[Z + 5] = Q + 2;
                    Z += 6;
                    Q += 3
                }
            } else if (v instanceof THREE.Face4) {
                if (ma) {
                    z = ja[v.a].position;
                    F = ja[v.b].position;
                    J = ja[v.c].position;
                    M = ja[v.d].position;
                    K[S] = z.x;
                    K[S + 1] = z.y;
                    K[S + 2] = z.z;
                    K[S + 3] = F.x;
                    K[S + 4] = F.y;
                    K[S + 5] = F.z;
                    K[S + 6] = J.x;
                    K[S + 7] = J.y;
                    K[S + 8] = J.z;
                    K[S + 9] = M.x;
                    K[S + 10] = M.y;
                    K[S + 11] = M.z;
                    S += 12
                }
                if (ka && ra.length) {
                    z = ra[v.a];
                    F = ra[v.b];
                    J = ra[v.d];
                    G[V] = z.r;
                    G[V + 1] = z.g;
                    G[V + 2] = z.b;
                    G[V + 3] = F.r;
                    G[V + 4] = F.g;
                    G[V + 5] = F.b;
                    G[V + 6] = J.r;
                    G[V + 7] = J.g;
                    G[V + 8] = J.b;
                    G[V + 9] = (void 0).r;
                    G[V + 10] = (void 0).g;
                    G[V + 11] = (void 0).b;
                    V += 12
                }
                if (ua && $.hasTangents) {
                    z = ja[v.a].tangent;
                    F = ja[v.b].tangent;
                    J = ja[v.c].tangent;
                    v = ja[v.d].tangent;
                    ea[O] = z.x;
                    ea[O + 1] = z.y;
                    ea[O + 2] = z.z;
                    ea[O + 3] = z.w;
                    ea[O + 4] = F.x;
                    ea[O + 5] = F.y;
                    ea[O + 6] = F.z;
                    ea[O + 7] = F.w;
                    ea[O + 8] = J.x;
                    ea[O + 9] = J.y;
                    ea[O + 10] = J.z;
                    ea[O + 11] = J.w;
                    ea[O + 12] = v.x;
                    ea[O + 13] = v.y;
                    ea[O + 14] = v.z;
                    ea[O + 15] = v.w;
                    O += 16
                }
                if (ta)
                    if (D.length == 4 && X)
                        for (v = 0; v < 4; v++) {
                            y = D[v];
                            ha[T] = y.x;
                            ha[T + 1] = y.y;
                            ha[T + 2] = y.z;
                            T += 3
                        }
                    else
                        for (v = 0; v < 4; v++) {
                            ha[T] = y.x;
                            ha[T + 1] = y.y;
                            ha[T + 2] = y.z;
                            T += 3
                        }
                if (qa && C)
                    for (v = 0; v < 4; v++) {
                        D = C[v];
                        W[U] = D.u;
                        W[U + 1] = D.v;
                        U += 2
                    }
                if (qa && o)
                    for (v = 0; v < 4; v++) {
                        C = o[v];
                        ba[ca] = C.u;
                        ba[ca + 1] = C.v;
                        ca += 2
                    }
                if (ia) {
                    N[da] = Q;
                    N[da + 1] = Q + 1;
                    N[da + 2] = Q + 2;
                    N[da + 3] = Q;
                    N[da + 4] = Q + 2;
                    N[da + 5] = Q + 3;
                    da += 6;
                    L[Z] = Q;
                    L[Z + 1] = Q + 1;
                    L[Z + 2] = Q;
                    L[Z + 3] = Q + 3;
                    L[Z + 4] = Q + 1;
                    L[Z + 5] = Q + 2;
                    L[Z + 6] = Q + 2;
                    L[Z + 7] = Q + 3;
                    Z += 8;
                    Q += 4
                }
            }
        }
        if (ma) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLVertexBuffer);
            b.bufferData(b.ARRAY_BUFFER, K, u)
        }
        if (ka && ra.length) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLColorBuffer);
            b.bufferData(b.ARRAY_BUFFER, G, u)
        }
        if (ta) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLNormalBuffer);
            b.bufferData(b.ARRAY_BUFFER, ha, u)
        }
        if (ua && $.hasTangents) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLTangentBuffer);
            b.bufferData(b.ARRAY_BUFFER, ea, u)
        }
        if (qa && U > 0) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLUVBuffer);
            b.bufferData(b.ARRAY_BUFFER, W, u)
        }
        if (qa && ca > 0) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLUV2Buffer);
            b.bufferData(b.ARRAY_BUFFER, ba, u)
        }
        if (ia) {
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, k.__webGLFaceBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, N, u);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, k.__webGLLineBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, L, u)
        }
    }
    ;
    this.setLineBuffers = function(k, w) {
        var u, n, o, v = k.vertices, D = k.colors, y = v.length, C = D.length, z = k.__vertexArray, F = k.__colorArray, J = k.__dirtyColors;
        if (k.__dirtyVertices) {
            for (u = 0; u < y; u++) {
                n = v[u].position;
                o = u * 3;
                z[o] = n.x;
                z[o + 1] = n.y;
                z[o + 2] = n.z
            }
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLVertexBuffer);
            b.bufferData(b.ARRAY_BUFFER, z, w)
        }
        if (J) {
            for (u = 0; u < C; u++) {
                color = D[u];
                o = u * 3;
                F[o] = color.r;
                F[o + 1] = color.g;
                F[o + 2] = color.b
            }
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLColorBuffer);
            b.bufferData(b.ARRAY_BUFFER, F, w)
        }
    }
    ;
    this.setParticleBuffers = function(k, w, u) {
        var n, o, v, D = k.vertices, y = D.length, C = k.colors, z = C.length, F = k.__vertexArray, J = k.__colorArray, M = k.__sortArray, Q = k.__dirtyVertices, S = k.__dirtyColors;
        if (u.sortParticles) {
            m.multiplySelf(u.matrix);
            for (n = 0; n < y; n++) {
                o = D[n].position;
                H.copy(o);
                m.multiplyVector3(H);
                M[n] = [H.z, n]
            }
            M.sort(function(U, ca) {
                return ca[0] - U[0]
            });
            for (n = 0; n < y; n++) {
                o = D[M[n][1]].position;
                v = n * 3;
                F[v] = o.x;
                F[v + 1] = o.y;
                F[v + 2] = o.z
            }
            for (n = 0; n < z; n++) {
                v = n * 3;
                color = C[M[n][1]];
                J[v] = color.r;
                J[v + 1] = color.g;
                J[v + 2] = color.b
            }
        } else {
            if (Q)
                for (n = 0; n < y; n++) {
                    o = D[n].position;
                    v = n * 3;
                    F[v] = o.x;
                    F[v + 1] = o.y;
                    F[v + 2] = o.z
                }
            if (S)
                for (n = 0; n < z; n++) {
                    color = C[n];
                    v = n * 3;
                    J[v] = color.r;
                    J[v + 1] = color.g;
                    J[v + 2] = color.b
                }
        }
        if (Q || u.sortParticles) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLVertexBuffer);
            b.bufferData(b.ARRAY_BUFFER, F, w)
        }
        if (S || u.sortParticles) {
            b.bindBuffer(b.ARRAY_BUFFER, k.__webGLColorBuffer);
            b.bufferData(b.ARRAY_BUFFER, J, w)
        }
    }
    ;
    this.initMaterial = function(k, w, u) {
        var n, o;
        if (k instanceof THREE.MeshDepthMaterial)
            c(k, THREE.ShaderLib.depth);
        else if (k instanceof THREE.MeshNormalMaterial)
            c(k, THREE.ShaderLib.normal);
        else if (k instanceof THREE.MeshBasicMaterial)
            c(k, THREE.ShaderLib.basic);
        else if (k instanceof THREE.MeshLambertMaterial)
            c(k, THREE.ShaderLib.lambert);
        else if (k instanceof THREE.MeshPhongMaterial)
            c(k, THREE.ShaderLib.phong);
        else if (k instanceof THREE.LineBasicMaterial)
            c(k, THREE.ShaderLib.basic);
        else
            k instanceof THREE.ParticleBasicMaterial && c(k, THREE.ShaderLib.particle_basic);
        var v, D, y, C;
        o = y = C = 0;
        for (v = w.length; o < v; o++) {
            D = w[o];
            D instanceof THREE.DirectionalLight && y++;
            D instanceof THREE.PointLight && C++
        }
        if (C + y <= 4) {
            w = y;
            C = C
        } else {
            w = Math.ceil(4 * y / (C + y));
            C = 4 - w
        }
        o = {
            directional: w,
            point: C
        };
        C = k.fragment_shader;
        w = k.vertex_shader;
        v = {
            fog: u,
            map: k.map,
            env_map: k.env_map,
            light_map: k.light_map,
            vertex_colors: k.vertex_colors,
            maxDirLights: o.directional,
            maxPointLights: o.point
        };
        u = b.createProgram();
        o = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + v.maxDirLights, "#define MAX_POINT_LIGHTS " + v.maxPointLights, v.fog ? "#define USE_FOG" : "", v.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", v.map ? "#define USE_MAP" : "", v.env_map ? "#define USE_ENVMAP" : "", v.light_map ? "#define USE_LIGHTMAP" : "", v.vertex_colors ? "#define USE_COLOR" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
        v = [b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0 ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + v.maxDirLights, "#define MAX_POINT_LIGHTS " + v.maxPointLights, v.map ? "#define USE_MAP" : "", v.env_map ? "#define USE_ENVMAP" : "", v.light_map ? "#define USE_LIGHTMAP" : "", v.vertex_colors ? "#define USE_COLOR" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute vec2 uv;\nattribute vec2 uv2;\n"].join("\n");
        b.attachShader(u, g("fragment", o + C));
        b.attachShader(u, g("vertex", v + w));
        b.linkProgram(u);
        b.getProgramParameter(u, b.LINK_STATUS) || alert("Could not initialise shaders\nVALIDATE_STATUS: " + b.getProgramParameter(u, b.VALIDATE_STATUS) + ", gl error [" + b.getError() + "]");
        u.uniforms = {};
        u.attributes = {};
        k.program = u;
        u = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition"];
        for (n in k.uniforms)
            u.push(n);
        n = k.program;
        C = 0;
        for (w = u.length; C < w; C++) {
            o = u[C];
            n.uniforms[o] = b.getUniformLocation(n, o)
        }
        k = k.program;
        n = ["position", "normal", "uv", "uv2", "tangent", "color"];
        u = 0;
        for (C = n.length; u < C; u++) {
            w = n[u];
            k.attributes[w] = b.getAttribLocation(k, w)
        }
    }
    ;
    this.setProgram = function(k, w, u, n, o) {
        n.program || this.initMaterial(n, w, u);
        var v = n.program
          , D = v.uniforms
          , y = n.uniforms;
        if (v != j) {
            b.useProgram(v);
            j = v;
            b.uniformMatrix4fv(D.projectionMatrix, false, B)
        }
        if (u && (n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial || n instanceof THREE.LineBasicMaterial || n instanceof THREE.ParticleBasicMaterial)) {
            y.fogColor.value.setHex(u.color.hex);
            if (u instanceof THREE.Fog) {
                y.fogNear.value = u.near;
                y.fogFar.value = u.far
            } else if (u instanceof THREE.FogExp2)
                y.fogDensity.value = u.density
        }
        if (n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial) {
            this.setupLights(v, w);
            w = this.lights;
            y.enableLighting.value = w.directional.length + w.point.length;
            y.ambientLightColor.value = w.ambient;
            y.directionalLightColor.value = w.directional.colors;
            y.directionalLightDirection.value = w.directional.positions;
            y.pointLightColor.value = w.point.colors;
            y.pointLightPosition.value = w.point.positions
        }
        if (n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial) {
            y.diffuse.value.setRGB(n.color.r * n.opacity, n.color.g * n.opacity, n.color.b * n.opacity);
            y.opacity.value = n.opacity;
            y.map.texture = n.map;
            y.light_map.texture = n.light_map;
            y.env_map.texture = n.env_map;
            y.reflectivity.value = n.reflectivity;
            y.refraction_ratio.value = n.refraction_ratio;
            y.combine.value = n.combine;
            y.useRefract.value = n.env_map && n.env_map.mapping instanceof THREE.CubeRefractionMapping
        }
        if (n instanceof THREE.LineBasicMaterial) {
            y.diffuse.value.setRGB(n.color.r * n.opacity, n.color.g * n.opacity, n.color.b * n.opacity);
            y.opacity.value = n.opacity
        } else if (n instanceof THREE.ParticleBasicMaterial) {
            y.psColor.value.setRGB(n.color.r * n.opacity, n.color.g * n.opacity, n.color.b * n.opacity);
            y.opacity.value = n.opacity;
            y.size.value = n.size;
            y.map.texture = n.map
        } else if (n instanceof THREE.MeshPhongMaterial) {
            y.ambient.value.setRGB(n.ambient.r, n.ambient.g, n.ambient.b);
            y.specular.value.setRGB(n.specular.r, n.specular.g, n.specular.b);
            y.shininess.value = n.shininess
        } else if (n instanceof THREE.MeshDepthMaterial) {
            y.mNear.value = k.near;
            y.mFar.value = k.far;
            y.opacity.value = n.opacity
        } else if (n instanceof THREE.MeshNormalMaterial)
            y.opacity.value = n.opacity;
        var C, z, F;
        for (C in y)
            if (F = v.uniforms[C]) {
                u = y[C];
                z = u.type;
                w = u.value;
                if (z == "i")
                    b.uniform1i(F, w);
                else if (z == "f")
                    b.uniform1f(F, w);
                else if (z == "fv1")
                    b.uniform1fv(F, w);
                else if (z == "fv")
                    b.uniform3fv(F, w);
                else if (z == "v2")
                    b.uniform2f(F, w.x, w.y);
                else if (z == "v3")
                    b.uniform3f(F, w.x, w.y, w.z);
                else if (z == "c")
                    b.uniform3f(F, w.r, w.g, w.b);
                else if (z == "t") {
                    b.uniform1i(F, w);
                    if (u = u.texture)
                        if (u.image instanceof Array && u.image.length == 6) {
                            u = u;
                            w = w;
                            if (u.image.length == 6) {
                                if (!u.image.__webGLTextureCube && !u.image.__cubeMapInitialized && u.image.loadCount == 6) {
                                    u.image.__webGLTextureCube = b.createTexture();
                                    b.bindTexture(b.TEXTURE_CUBE_MAP, u.image.__webGLTextureCube);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_MAG_FILTER, b.LINEAR);
                                    b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR);
                                    for (z = 0; z < 6; ++z)
                                        b.texImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, u.image[z]);
                                    b.generateMipmap(b.TEXTURE_CUBE_MAP);
                                    b.bindTexture(b.TEXTURE_CUBE_MAP, null);
                                    u.image.__cubeMapInitialized = true
                                }
                                b.activeTexture(b.TEXTURE0 + w);
                                b.bindTexture(b.TEXTURE_CUBE_MAP, u.image.__webGLTextureCube)
                            }
                        } else {
                            u = u;
                            w = w;
                            if (!u.__webGLTexture && u.image.loaded) {
                                u.__webGLTexture = b.createTexture();
                                b.bindTexture(b.TEXTURE_2D, u.__webGLTexture);
                                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, u.image);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, f(u.wrap_s));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, f(u.wrap_t));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, f(u.mag_filter));
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, f(u.min_filter));
                                b.generateMipmap(b.TEXTURE_2D);
                                b.bindTexture(b.TEXTURE_2D, null)
                            }
                            b.activeTexture(b.TEXTURE0 + w);
                            b.bindTexture(b.TEXTURE_2D, u.__webGLTexture)
                        }
                }
            }
        b.uniformMatrix4fv(D.modelViewMatrix, false, o._modelViewMatrixArray);
        b.uniformMatrix3fv(D.normalMatrix, false, o._normalMatrixArray);
        if (n instanceof THREE.MeshShaderMaterial || n instanceof THREE.MeshPhongMaterial || n.env_map)
            b.uniform3f(D.cameraPosition, k.position.x, k.position.y, k.position.z);
        if (n instanceof THREE.MeshShaderMaterial || n.env_map)
            b.uniformMatrix4fv(D.objectMatrix, false, o._objectMatrixArray);
        if (n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshShaderMaterial)
            b.uniformMatrix4fv(D.viewMatrix, false, E);
        return v
    }
    ;
    this.renderBuffer = function(k, w, u, n, o, v) {
        k = this.setProgram(k, w, u, n, v).attributes;
        b.bindBuffer(b.ARRAY_BUFFER, o.__webGLVertexBuffer);
        b.vertexAttribPointer(k.position, 3, b.FLOAT, false, 0, 0);
        b.enableVertexAttribArray(k.position);
        if (k.color >= 0) {
            b.bindBuffer(b.ARRAY_BUFFER, o.__webGLColorBuffer);
            b.vertexAttribPointer(k.color, 3, b.FLOAT, false, 0, 0);
            b.enableVertexAttribArray(k.color)
        }
        if (k.normal >= 0) {
            b.bindBuffer(b.ARRAY_BUFFER, o.__webGLNormalBuffer);
            b.vertexAttribPointer(k.normal, 3, b.FLOAT, false, 0, 0);
            b.enableVertexAttribArray(k.normal)
        }
        if (k.tangent >= 0) {
            b.bindBuffer(b.ARRAY_BUFFER, o.__webGLTangentBuffer);
            b.vertexAttribPointer(k.tangent, 4, b.FLOAT, false, 0, 0);
            b.enableVertexAttribArray(k.tangent)
        }
        if (k.uv >= 0)
            if (o.__webGLUVBuffer) {
                b.bindBuffer(b.ARRAY_BUFFER, o.__webGLUVBuffer);
                b.vertexAttribPointer(k.uv, 2, b.FLOAT, false, 0, 0);
                b.enableVertexAttribArray(k.uv)
            } else
                b.disableVertexAttribArray(k.uv);
        if (k.uv2 >= 0)
            if (o.__webGLUV2Buffer) {
                b.bindBuffer(b.ARRAY_BUFFER, o.__webGLUV2Buffer);
                b.vertexAttribPointer(k.uv2, 2, b.FLOAT, false, 0, 0);
                b.enableVertexAttribArray(k.uv2)
            } else
                b.disableVertexAttribArray(k.uv2);
        if (v instanceof THREE.Mesh)
            if (n.wireframe) {
                b.lineWidth(n.wireframe_linewidth);
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, o.__webGLLineBuffer);
                b.drawElements(b.LINES, o.__webGLLineCount, b.UNSIGNED_SHORT, 0)
            } else {
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, o.__webGLFaceBuffer);
                b.drawElements(b.TRIANGLES, o.__webGLFaceCount, b.UNSIGNED_SHORT, 0)
            }
        else if (v instanceof THREE.Line) {
            v = v.type == THREE.LineStrip ? b.LINE_STRIP : b.LINES;
            b.lineWidth(n.linewidth);
            b.drawArrays(v, 0, o.__webGLLineCount)
        } else
            v instanceof THREE.ParticleSystem && b.drawArrays(b.POINTS, 0, o.__webGLParticleCount)
    }
    ;
    this.renderPass = function(k, w, u, n, o, v, D) {
        var y, C, z, F, J;
        z = 0;
        for (F = n.materials.length; z < F; z++) {
            y = n.materials[z];
            if (y instanceof THREE.MeshFaceMaterial) {
                y = 0;
                for (C = o.materials.length; y < C; y++)
                    if ((J = o.materials[y]) && J.blending == v && J.opacity < 1 == D) {
                        e(J.blending);
                        this.setDepthTest(J.depth_test);
                        this.renderBuffer(k, w, u, J, o, n)
                    }
            } else if ((J = y) && J.blending == v && J.opacity < 1 == D) {
                e(J.blending);
                this.setDepthTest(J.depth_test);
                this.renderBuffer(k, w, u, J, o, n)
            }
        }
    }
    ;
    this.renderPassImmediate = function(k, w, u, n, o, v) {
        var D, y, C, z;
        D = 0;
        for (y = n.materials.length; D < y; D++)
            if ((C = n.materials[D]) && C.blending == o && C.opacity < 1 == v) {
                e(C.blending);
                this.setDepthTest(C.depth_test);
                z = this.setProgram(k, w, u, C, n);
                n.render(function(F) {
                    var J = z;
                    if (!F.__webGLVertexBuffer)
                        F.__webGLVertexBuffer = b.createBuffer();
                    if (!F.__webGLNormalBuffer)
                        F.__webGLNormalBuffer = b.createBuffer();
                    if (F.hasPos) {
                        b.bindBuffer(b.ARRAY_BUFFER, F.__webGLVertexBuffer);
                        b.bufferData(b.ARRAY_BUFFER, F.positionArray, b.DYNAMIC_DRAW);
                        b.enableVertexAttribArray(J.attributes.position);
                        b.vertexAttribPointer(J.attributes.position, 3, b.FLOAT, false, 0, 0)
                    }
                    if (F.hasNormal) {
                        b.bindBuffer(b.ARRAY_BUFFER, F.__webGLNormalBuffer);
                        b.bufferData(b.ARRAY_BUFFER, F.normalArray, b.DYNAMIC_DRAW);
                        b.enableVertexAttribArray(J.attributes.normal);
                        b.vertexAttribPointer(J.attributes.normal, 3, b.FLOAT, false, 0, 0)
                    }
                    b.drawArrays(b.TRIANGLES, 0, F.count);
                    F.count = 0
                })
            }
    }
    ;
    this.render = function(k, w, u, n) {
        var o, v, D, y, C = k.lights, z = k.fog;
        w.autoUpdateMatrix && w.updateMatrix();
        w.matrix.flattenToArray(E);
        w.projectionMatrix.flattenToArray(B);
        m.multiply(w.projectionMatrix, w.matrix);
        q[0].set(m.n41 - m.n11, m.n42 - m.n12, m.n43 - m.n13, m.n44 - m.n14);
        q[1].set(m.n41 + m.n11, m.n42 + m.n12, m.n43 + m.n13, m.n44 + m.n14);
        q[2].set(m.n41 + m.n21, m.n42 + m.n22, m.n43 + m.n23, m.n44 + m.n24);
        q[3].set(m.n41 - m.n21, m.n42 - m.n22, m.n43 - m.n23, m.n44 - m.n24);
        q[4].set(m.n41 - m.n31, m.n42 - m.n32, m.n43 - m.n33, m.n44 - m.n34);
        q[5].set(m.n41 + m.n31, m.n42 + m.n32, m.n43 + m.n33, m.n44 + m.n34);
        for (o = 0; o < 5; o++) {
            y = q[o];
            y.divideScalar(Math.sqrt(y.x * y.x + y.y * y.y + y.z * y.z))
        }
        this.initWebGLObjects(k, w);
        n = n !== undefined ? n : true;
        if (u && !u.__webGLFramebuffer) {
            u.__webGLFramebuffer = b.createFramebuffer();
            u.__webGLRenderbuffer = b.createRenderbuffer();
            u.__webGLTexture = b.createTexture();
            b.bindRenderbuffer(b.RENDERBUFFER, u.__webGLRenderbuffer);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, u.width, u.height);
            b.bindTexture(b.TEXTURE_2D, u.__webGLTexture);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, f(u.wrap_s));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, f(u.wrap_t));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, f(u.mag_filter));
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, f(u.min_filter));
            b.texImage2D(b.TEXTURE_2D, 0, f(u.format), u.width, u.height, 0, f(u.format), f(u.type), null);
            b.bindFramebuffer(b.FRAMEBUFFER, u.__webGLFramebuffer);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, u.__webGLTexture, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, u.__webGLRenderbuffer);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null)
        }
        if (u) {
            o = u.__webGLFramebuffer;
            y = u.width;
            D = u.height
        } else {
            o = null;
            y = h.width;
            D = h.height
        }
        if (o != l) {
            b.bindFramebuffer(b.FRAMEBUFFER, o);
            b.viewport(0, 0, y, D);
            n && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
            l = o
        }
        this.autoClear && this.clear();
        o = k.__webGLObjects.length;
        for (n = 0; n < o; n++) {
            D = k.__webGLObjects[n];
            y = D.object;
            if (v = y.visible) {
                if (!(v = !(y instanceof THREE.Mesh)))
                    a: {
                        v = void 0;
                        for (var F = y.matrix, J = -y.geometry.boundingSphere.radius * Math.max(y.scale.x, Math.max(y.scale.y, y.scale.z)), M = 0; M < 6; M++) {
                            v = q[M].x * F.n14 + q[M].y * F.n24 + q[M].z * F.n34 + q[M].w;
                            if (v <= J) {
                                v = false;
                                break a
                            }
                        }
                        v = true
                    }
                v = v
            }
            if (v) {
                if (y.autoUpdateMatrix) {
                    y.updateMatrix();
                    y.matrix.flattenToArray(y._objectMatrixArray)
                }
                this.setupMatrices(y, w);
                D.render = true
            } else
                D.render = false
        }
        v = k.__webGLObjectsImmediate.length;
        for (n = 0; n < v; n++) {
            y = k.__webGLObjectsImmediate[n].object;
            if (y.visible) {
                if (y.autoUpdateMatrix) {
                    y.updateMatrix();
                    y.matrix.flattenToArray(y._objectMatrixArray)
                }
                this.setupMatrices(y, w)
            }
        }
        for (n = 0; n < o; n++) {
            D = k.__webGLObjects[n];
            if (D.render) {
                y = D.object;
                D = D.buffer;
                d(y);
                this.renderPass(w, C, z, y, D, THREE.NormalBlending, false)
            }
        }
        for (n = 0; n < v; n++) {
            y = k.__webGLObjectsImmediate[n].object;
            if (y.visible) {
                d(y);
                this.renderPassImmediate(w, C, z, y, THREE.NormalBlending, false)
            }
        }
        for (n = 0; n < o; n++) {
            D = k.__webGLObjects[n];
            if (D.render) {
                y = D.object;
                D = D.buffer;
                d(y);
                this.renderPass(w, C, z, y, D, THREE.AdditiveBlending, false);
                this.renderPass(w, C, z, y, D, THREE.SubtractiveBlending, false);
                this.renderPass(w, C, z, y, D, THREE.AdditiveBlending, true);
                this.renderPass(w, C, z, y, D, THREE.SubtractiveBlending, true);
                this.renderPass(w, C, z, y, D, THREE.NormalBlending, true);
                this.renderPass(w, C, z, y, D, THREE.BillboardBlending, false)
            }
        }
        for (n = 0; n < v; n++) {
            y = k.__webGLObjectsImmediate[n].object;
            if (y.visible) {
                d(y);
                this.renderPassImmediate(w, C, z, y, THREE.NormalBlending, true)
            }
        }
        if (u && u.min_filter !== THREE.NearestFilter && u.min_filter !== THREE.LinearFilter) {
            b.bindTexture(b.TEXTURE_2D, u.__webGLTexture);
            b.generateMipmap(b.TEXTURE_2D);
            b.bindTexture(b.TEXTURE_2D, null)
        }
    }
    ;
    this.initWebGLObjects = function(k, w) {
        function u(J, M, Q, S) {
            if (J[M] == undefined) {
                k.__webGLObjects.push({
                    buffer: Q,
                    object: S
                });
                J[M] = 1
            }
        }
        function n(J, M, Q) {
            if (J[M] == undefined) {
                k.__webGLObjectsImmediate.push({
                    object: Q
                });
                J[M] = 1
            }
        }
        var o, v, D, y, C, z, F;
        if (!k.__webGLObjects) {
            k.__webGLObjects = [];
            k.__webGLObjectsMap = {};
            k.__webGLObjectsImmediate = []
        }
        o = 0;
        for (v = k.objects.length; o < v; o++) {
            D = k.objects[o];
            C = D.geometry;
            if (k.__webGLObjectsMap[D.id] == undefined) {
                k.__webGLObjectsMap[D.id] = {};
                D._modelViewMatrix = new THREE.Matrix4;
                D._normalMatrixArray = new Float32Array(9);
                D._modelViewMatrixArray = new Float32Array(16);
                D._objectMatrixArray = new Float32Array(16);
                D.matrix.flattenToArray(D._objectMatrixArray)
            }
            F = k.__webGLObjectsMap[D.id];
            if (D instanceof THREE.Mesh) {
                for (y in C.geometryChunks) {
                    z = C.geometryChunks[y];
                    if (!z.__webGLVertexBuffer) {
                        this.createMeshBuffers(z);
                        this.initMeshBuffers(z, D);
                        C.__dirtyVertices = true;
                        C.__dirtyElements = true;
                        C.__dirtyUvs = true;
                        C.__dirtyNormals = true;
                        C.__dirtyTangents = true;
                        C.__dirtyColors = true
                    }
                    if (C.__dirtyVertices || C.__dirtyElements || C.__dirtyUvs || C.__dirtyNormals || C.__dirtyColors || C.__dirtyTangents)
                        this.setMeshBuffers(z, D, b.DYNAMIC_DRAW);
                    u(F, y, z, D)
                }
                C.__dirtyVertices = false;
                C.__dirtyElements = false;
                C.__dirtyUvs = false;
                C.__dirtyNormals = false;
                C.__dirtyTangents = false;
                C.__dirtyColors = false
            } else if (D instanceof THREE.Line) {
                if (!C.__webGLVertexBuffer) {
                    this.createLineBuffers(C);
                    this.initLineBuffers(C);
                    C.__dirtyVertices = true;
                    C.__dirtyColors = true
                }
                if (C.__dirtyVertices || C.__dirtyColors)
                    this.setLineBuffers(C, b.DYNAMIC_DRAW);
                u(F, 0, C, D);
                C.__dirtyVertices = false;
                C.__dirtyColors = false
            } else if (D instanceof THREE.ParticleSystem) {
                if (!C.__webGLVertexBuffer) {
                    this.createParticleBuffers(C);
                    this.initParticleBuffers(C);
                    C.__dirtyVertices = true;
                    C.__dirtyColors = true
                }
                if (C.__dirtyVertices || C.__dirtyColors || D.sortParticles)
                    this.setParticleBuffers(C, b.DYNAMIC_DRAW, D, w);
                u(F, 0, C, D);
                C.__dirtyVertices = false;
                C.__dirtyColors = false
            } else
                D instanceof THREE.MarchingCubes && n(F, 0, D)
        }
    }
    ;
    this.removeObject = function(k, w) {
        var u, n;
        for (u = k.__webGLObjects.length - 1; u >= 0; u--) {
            n = k.__webGLObjects[u].object;
            w == n && k.__webGLObjects.splice(u, 1)
        }
    }
    ;
    this.setupMatrices = function(k, w) {
        k._modelViewMatrix.multiplyToArray(w.matrix, k.matrix, k._modelViewMatrixArray);
        k._normalMatrix = THREE.Matrix4.makeInvert3x3(k._modelViewMatrix).transposeIntoArray(k._normalMatrixArray)
    }
    ;
    this.setDepthTest = function(k) {
        k ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
    }
    ;
    this.setFaceCulling = function(k, w) {
        if (k) {
            !w || w == "ccw" ? b.frontFace(b.CCW) : b.frontFace(b.CW);
            if (k == "back")
                b.cullFace(b.BACK);
            else
                k == "front" ? b.cullFace(b.FRONT) : b.cullFace(b.FRONT_AND_BACK);
            b.enable(b.CULL_FACE)
        } else
            b.disable(b.CULL_FACE)
    }
    ;
    this.supportsVertexTextures = function() {
        return b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0
    }
}
;
THREE.Snippets = {
    fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
    fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube env_map;\nuniform int combine;\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( env_map, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refraction_ratio;\nuniform bool useRefract;\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refraction_ratio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
    map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
    map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\n#endif",
    map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
    map_vertex: "#ifdef USE_MAP\nvUv = uv;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D light_map;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( light_map, vUv2 );\n#endif",
    lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
    lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
    lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\nfloat pointLightWeighting = max( dot( transformedNormal, pointLightVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting;\n#ifdef PHONG\nvPointLightVector[ i ] = pointLightVector;\n#endif\n}\n#endif\n}",
    lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec3 pointVector = normalize( vPointLightVector[ i ] );\nvec3 pointHalfVector = normalize( vPointLightVector[ i ] + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight;\npointSpecular += mSpecular * pointSpecularWeight;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif"
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        light_map: {
            type: "t",
            value: 2,
            texture: null
        },
        env_map: {
            type: "t",
            value: 1,
            texture: null
        },
        useRefract: {
            type: "i",
            value: 0
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refraction_ratio: {
            type: "f",
            value: 0.98
        },
        combine: {
            type: "i",
            value: 0
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        enableLighting: {
            type: "i",
            value: 1
        },
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        }
    },
    particle: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: 0,
            texture: null
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    }
};
THREE.ShaderLib = {
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        fragment_shader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",
        vertex_shader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        fragment_shader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",
        vertex_shader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
    },
    basic: {
        uniforms: THREE.UniformsLib.common,
        fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_pars_fragment, THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: [THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.color_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    },
    lambert: {
        uniforms: Uniforms.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]),
        fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_pars_fragment, THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: ["varying vec3 vLightWeighting;", THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.lights_pars_vertex, THREE.Snippets.color_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.Snippets.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    },
    phong: {
        uniforms: Uniforms.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {
            ambient: {
                type: "c",
                value: new THREE.Color(328965)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_pars_fragment, THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, THREE.Snippets.lights_pars_fragment, "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.Snippets.lights_fragment, THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.lights_pars_vertex, THREE.Snippets.color_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.Snippets.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
    },
    particle_basic: {
        uniforms: THREE.UniformsLib.particle,
        fragment_shader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_particle_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.Snippets.map_particle_fragment, THREE.Snippets.color_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
        vertex_shader: ["uniform float size;", THREE.Snippets.color_pars_vertex, "void main() {", THREE.Snippets.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\ngl_PointSize = size;\n}"].join("\n")
    }
};
THREE.RenderableObject = function() {
    this.z = this.object = null
}
;
THREE.RenderableFace3 = function() {
    this.z = null;
    this.v1 = new THREE.Vertex;
    this.v2 = new THREE.Vertex;
    this.v3 = new THREE.Vertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = false;
    this.uvs = [null, null, null]
}
;
THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = null;
    this.scale = new THREE.Vector2;
    this.materials = null
}
;
THREE.RenderableLine = function() {
    this.z = null;
    this.v1 = new THREE.Vertex;
    this.v2 = new THREE.Vertex;
    this.materials = null
}
;
THREE.Detector = {
    canvas: !!document.createElement("canvas").getContext,
    webgl: window.Uint8Array != undefined,
    workers: !!window.Worker,
    addGetWebGLMessage: function(a) {
        var c = document.body
          , d = "oldie";
        if (a) {
            if (a.parent !== undefined)
                c = a.parent;
            if (a.id !== undefined)
                d = a.id
        }
        a = document.createElement("center");
        var e = document.createElement("div");
        e.innerHTML = 'Sorry, your browser doesn\'t support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a><br/>\n<br/>\nPlease try in\n<a href="http://www.google.com/chrome">Chrome 9+</a> /\n<a href="http://www.mozilla.com/en-US/firefox/all-beta.html">Firefox 4+</a> /\n<a href="http://nightly.webkit.org/">Safari OSX 10.6+</a>';
        e.id = d;
        d = e.style;
        d.fontFamily = "monospace";
        d.fontSize = "13px";
        d.textAlign = "center";
        d.background = "#eee";
        d.color = "#000";
        d.padding = "1em";
        d.width = "475px";
        d.margin = "5em auto 0";
        a.appendChild(e);
        c.appendChild(a);
        return e
    }
};
var GeometryUtils = {
    merge: function(a, c) {
        var d = c instanceof THREE.Mesh
          , e = a.vertices.length
          , g = d ? c.geometry : c
          , f = a.vertices
          , h = g.vertices
          , b = a.faces
          , j = g.faces
          , l = a.uvs;
        g = g.uvs;
        d && c.autoUpdateMatrix && c.updateMatrix();
        for (var p = 0, A = h.length; p < A; p++) {
            var q = new THREE.Vertex(h[p].position.clone());
            d && c.matrix.multiplyVector3(q.position);
            f.push(q)
        }
        p = 0;
        for (A = j.length; p < A; p++) {
            h = j[p];
            var m, B = h.vertexNormals;
            if (h instanceof THREE.Face3)
                m = new THREE.Face3(h.a + e,h.b + e,h.c + e);
            else if (h instanceof THREE.Face4)
                m = new THREE.Face4(h.a + e,h.b + e,h.c + e,h.d + e);
            m.centroid.copy(h.centroid);
            m.normal.copy(h.normal);
            d = 0;
            for (f = B.length; d < f; d++) {
                q = B[d];
                m.vertexNormals.push(q.clone())
            }
            m.materials = h.materials.slice();
            b.push(m)
        }
        p = 0;
        for (A = g.length; p < A; p++) {
            e = g[p];
            b = [];
            d = 0;
            for (f = e.length; d < f; d++)
                b.push(new THREE.UV(e[d].u,e[d].v));
            l.push(b)
        }
    }
}
  , ImageUtils = {
    loadTexture: function(a, c, d) {
        var e = new Image;
        e.onload = function() {
            this.loaded = true;
            d && d(this)
        }
        ;
        e.src = a;
        return new THREE.Texture(e,c)
    },
    loadArray: function(a, c) {
        var d, e, g = [];
        d = g.loadCount = 0;
        for (e = a.length; d < e; ++d) {
            g[d] = new Image;
            g[d].loaded = 0;
            g[d].onload = function() {
                g.loadCount += 1;
                this.loaded = true;
                c && c(this)
            }
            ;
            g[d].src = a[d]
        }
        return g
    }
}
  , SceneUtils = {
    loadScene: function(a, c, d, e) {
        a = new Worker(a);
        a.postMessage(0);
        a.onmessage = function(g) {
            function f() {
                for (p in n.objects)
                    if (!z.objects[p]) {
                        E = n.objects[p];
                        if (t = z.geometries[E.geometry]) {
                            u = [];
                            for (i = 0; i < E.materials.length; i++)
                                u[i] = z.materials[E.materials[i]];
                            H = E.position;
                            r = E.rotation;
                            s = E.scale;
                            object = new THREE.Mesh(t,u);
                            object.position.set(H[0], H[1], H[2]);
                            object.rotation.set(r[0], r[1], r[2]);
                            object.scale.set(s[0], s[1], s[2]);
                            object.visible = E.visible;
                            z.scene.addObject(object);
                            z.objects[p] = object
                        }
                    }
            }
            function h(F) {
                return function(J) {
                    z.geometries[F] = J;
                    f();
                    v -= 1;
                    b()
                }
            }
            function b() {
                e({
                    total_models: y,
                    total_textures: C,
                    loaded_models: y - v,
                    loaded_textures: C - D
                }, z);
                v == 0 && D == 0 && d(z)
            }
            var j, l, p, A, q, m, B, E, H, x, I, t, k, w, u, n, o, v, D, y, C, z;
            n = g.data;
            o = new THREE.Loader;
            D = v = 0;
            z = {
                scene: new THREE.Scene,
                geometries: {},
                materials: {},
                textures: {},
                objects: {},
                cameras: {},
                lights: {},
                fogs: {}
            };
            g = function() {
                D -= 1;
                b()
            }
            ;
            for (q in n.cameras) {
                x = n.cameras[q];
                if (x.type == "perspective")
                    k = new THREE.Camera(x.fov,x.aspect,x.near,x.far);
                else if (x.type == "ortho") {
                    k = new THREE.Camera;
                    k.projectionMatrix = THREE.Matrix4.makeOrtho(x.left, x.right, x.top, x.bottom, x.near, x.far)
                }
                H = x.position;
                x = x.target;
                k.position.set(H[0], H[1], H[2]);
                k.target.position.set(x[0], x[1], x[2]);
                z.cameras[q] = k
            }
            for (A in n.lights) {
                q = n.lights[A];
                if (q.type == "directional") {
                    H = q.direction;
                    light = new THREE.DirectionalLight;
                    light.position.set(H[0], H[1], H[2]);
                    light.position.normalize()
                } else if (q.type == "point") {
                    H = q.position;
                    light = new THREE.PointLight;
                    light.position.set(H[0], H[1], H[2])
                }
                x = q.color;
                i = q.intensity || 1;
                light.color.setRGB(x[0] * i, x[1] * i, x[2] * i);
                z.scene.addLight(light);
                z.lights[A] = light
            }
            for (m in n.fogs) {
                A = n.fogs[m];
                if (A.type == "linear")
                    w = new THREE.Fog(0,A.near,A.far);
                else if (A.type == "exp2")
                    w = new THREE.FogExp2(0,A.density);
                x = A.color;
                w.color.setRGB(x[0], x[1], x[2]);
                z.fogs[m] = w
            }
            if (z.cameras && n.defaults.camera)
                z.currentCamera = z.cameras[n.defaults.camera];
            if (z.fogs && n.defaults.fog)
                z.scene.fog = z.fogs[n.defaults.fog];
            x = n.defaults.bgcolor;
            z.bgColor = new THREE.Color;
            z.bgColor.setRGB(x[0], x[1], x[2]);
            z.bgColorAlpha = n.defaults.bgalpha;
            for (j in n.geometries) {
                m = n.geometries[j];
                if (m.type == "bin_mesh" || m.type == "ascii_mesh")
                    v += 1
            }
            y = v;
            for (j in n.geometries) {
                m = n.geometries[j];
                if (m.type == "cube") {
                    t = new Cube(m.width,m.height,m.depth,m.segments_width,m.segments_height,null,m.flipped,m.sides);
                    z.geometries[j] = t
                } else if (m.type == "plane") {
                    t = new Plane(m.width,m.height,m.segments_width,m.segments_height);
                    z.geometries[j] = t
                } else if (m.type == "sphere") {
                    t = new Sphere(m.radius,m.segments_width,m.segments_height);
                    z.geometries[j] = t
                } else if (m.type == "cylinder") {
                    t = new Cylinder(m.numSegs,m.topRad,m.botRad,m.height,m.topOffset,m.botOffset);
                    z.geometries[j] = t
                } else if (m.type == "torus") {
                    t = new Torus(m.radius,m.tube,m.segmentsR,m.segmentsT);
                    z.geometries[j] = t
                } else if (m.type == "icosahedron") {
                    t = new Icosahedron(m.subdivisions);
                    z.geometries[j] = t
                } else if (m.type == "bin_mesh")
                    o.loadBinary({
                        model: m.url,
                        callback: h(j)
                    });
                else
                    m.type == "ascii_mesh" && o.loadAscii({
                        model: m.url,
                        callback: h(j)
                    })
            }
            for (B in n.textures) {
                j = n.textures[B];
                D += j.url instanceof Array ? j.url.length : 1
            }
            C = D;
            for (B in n.textures) {
                j = n.textures[B];
                if (j.mapping != undefined && THREE[j.mapping] != undefined)
                    j.mapping = new THREE[j.mapping];
                if (j.url instanceof Array) {
                    m = ImageUtils.loadArray(j.url, g);
                    m = new THREE.Texture(m,j.mapping)
                } else {
                    m = ImageUtils.loadTexture(j.url, j.mapping, g);
                    if (THREE[j.min_filter] != undefined)
                        m.min_filter = THREE[j.min_filter];
                    if (THREE[j.mag_filter] != undefined)
                        m.mag_filter = THREE[j.mag_filter]
                }
                z.textures[B] = m
            }
            for (l in n.materials) {
                B = n.materials[l];
                for (I in B.parameters)
                    if (I == "env_map" || I == "map" || I == "light_map")
                        B.parameters[I] = z.textures[B.parameters[I]];
                    else if (I == "shading")
                        B.parameters[I] = B.parameters[I] == "flat" ? THREE.FlatShading : THREE.SmoothShading;
                    else if (I == "blending")
                        B.parameters[I] = THREE[B.parameters[I]] ? THREE[B.parameters[I]] : THREE.NormalBlending;
                    else if (I == "combine")
                        B.parameters[I] = B.parameters[I] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation;
                B = new THREE[B.type](B.parameters);
                z.materials[l] = B
            }
            f();
            c(z)
        }
    },
    addMesh: function(a, c, d, e, g, f, h, b, j, l) {
        c = new THREE.Mesh(c,l);
        c.scale.x = c.scale.y = c.scale.z = d;
        c.position.x = e;
        c.position.y = g;
        c.position.z = f;
        c.rotation.x = h;
        c.rotation.y = b;
        c.rotation.z = j;
        a.addObject(c);
        return c
    },
    addPanoramaCubeWebGL: function(a, c, d) {
        var e = ShaderUtils.lib.cube;
        e.uniforms.tCube.texture = d;
        d = new THREE.MeshShaderMaterial({
            fragment_shader: e.fragment_shader,
            vertex_shader: e.vertex_shader,
            uniforms: e.uniforms
        });
        c = new THREE.Mesh(new Cube(c,c,c,1,1,null,true),d);
        a.addObject(c);
        return c
    },
    addPanoramaCube: function(a, c, d) {
        var e = [];
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[0])
        }));
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[1])
        }));
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[2])
        }));
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[3])
        }));
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[4])
        }));
        e.push(new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[5])
        }));
        c = new THREE.Mesh(new Cube(c,c,c,1,1,e,true),new THREE.MeshFaceMaterial);
        a.addObject(c);
        return c
    },
    addPanoramaCubePlanes: function(a, c, d) {
        var e = c / 2;
        c = new Plane(c,c);
        var g = Math.PI / 2
          , f = Math.PI;
        SceneUtils.addMesh(a, c, 1, 0, 0, -e, 0, 0, 0, new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[5])
        }));
        SceneUtils.addMesh(a, c, 1, -e, 0, 0, 0, g, 0, new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[0])
        }));
        SceneUtils.addMesh(a, c, 1, e, 0, 0, 0, -g, 0, new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[1])
        }));
        SceneUtils.addMesh(a, c, 1, 0, e, 0, g, 0, f, new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[2])
        }));
        SceneUtils.addMesh(a, c, 1, 0, -e, 0, -g, 0, f, new THREE.MeshBasicMaterial({
            map: new THREE.Texture(d[3])
        }))
    }
}
  , ShaderUtils = {
    lib: {
        fresnel: {
            uniforms: {
                mRefractionRatio: {
                    type: "f",
                    value: 1.02
                },
                mFresnelBias: {
                    type: "f",
                    value: 0.1
                },
                mFresnelPower: {
                    type: "f",
                    value: 2
                },
                mFresnelScale: {
                    type: "f",
                    value: 1
                },
                tCube: {
                    type: "t",
                    value: 1,
                    texture: null
                }
            },
            fragment_shader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
            vertex_shader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
        },
        normal: {
            uniforms: {
                enableAO: {
                    type: "i",
                    value: 0
                },
                enableDiffuse: {
                    type: "i",
                    value: 0
                },
                tDiffuse: {
                    type: "t",
                    value: 0,
                    texture: null
                },
                tNormal: {
                    type: "t",
                    value: 2,
                    texture: null
                },
                tAO: {
                    type: "t",
                    value: 3,
                    texture: null
                },
                uNormalScale: {
                    type: "f",
                    value: 1
                },
                tDisplacement: {
                    type: "t",
                    value: 4,
                    texture: null
                },
                uDisplacementBias: {
                    type: "f",
                    value: -0.5
                },
                uDisplacementScale: {
                    type: "f",
                    value: 2.5
                },
                uPointLightPos: {
                    type: "v3",
                    value: new THREE.Vector3
                },
                uPointLightColor: {
                    type: "c",
                    value: new THREE.Color(15658734)
                },
                uDirLightPos: {
                    type: "v3",
                    value: new THREE.Vector3
                },
                uDirLightColor: {
                    type: "c",
                    value: new THREE.Color(15658734)
                },
                uAmbientLightColor: {
                    type: "c",
                    value: new THREE.Color(328965)
                },
                uDiffuseColor: {
                    type: "c",
                    value: new THREE.Color(15658734)
                },
                uSpecularColor: {
                    type: "c",
                    value: new THREE.Color(1118481)
                },
                uAmbientColor: {
                    type: "c",
                    value: new THREE.Color(328965)
                },
                uShininess: {
                    type: "f",
                    value: 30
                }
            },
            fragment_shader: "uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}",
            vertex_shader: "attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"
        },
        cube: {
            uniforms: {
                tCube: {
                    type: "t",
                    value: 1,
                    texture: null
                }
            },
            vertex_shader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragment_shader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
        },
        convolution: {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: 0,
                    texture: null
                },
                uImageIncrement: {
                    type: "v2",
                    value: new THREE.Vector2(0.001953125,0)
                },
                cKernel: {
                    type: "fv1",
                    value: []
                }
            },
            vertex_shader: "varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"
        },
        film: {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: 0,
                    texture: null
                },
                time: {
                    type: "f",
                    value: 0
                },
                grayscale: {
                    type: "i",
                    value: 1
                }
            },
            vertex_shader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nconst float fNintensity = 0.35;\nconst float fSintensity = 0.35;\nconst float fScount = 4096.0;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin(vUv.y * fScount), cos(vUv.y * fScount) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * fSintensity;\ncResult = cTextureScreen.rgb + clamp( fNintensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"
        },
        screen: {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: 0,
                    texture: null
                },
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertex_shader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"
        },
        basic: {
            uniforms: {},
            vertex_shader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragment_shader: "void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"
        }
    },
    buildKernel: function(a) {
        var c, d, e, g, f = 2 * Math.ceil(a * 3) + 1;
        if (f > 25)
            f = 25;
        g = (f - 1) * 0.5;
        d = Array(f);
        for (c = e = 0; c < f; ++c) {
            d[c] = Math.exp(-((c - g) * (c - g)) / (2 * a * a));
            e += d[c]
        }
        for (c = 0; c < f; ++c)
            d[c] /= e;
        return d
    }
}
  , Cube = function(a, c, d, e, g, f, h, b) {
    function j(E, H, x, I, t, k, w, u) {
        var n, o, v = e || 1, D = g || 1, y = v + 1, C = D + 1, z = t / 2, F = k / 2;
        t = t / v;
        var J = k / D
          , M = l.vertices.length;
        if (E == "x" && H == "y" || E == "y" && H == "x")
            n = "z";
        else if (E == "x" && H == "z" || E == "z" && H == "x")
            n = "y";
        else if (E == "z" && H == "y" || E == "y" && H == "z")
            n = "x";
        for (o = 0; o < C; o++)
            for (k = 0; k < y; k++) {
                var Q = new THREE.Vector3;
                Q[E] = (k * t - z) * x;
                Q[H] = (o * J - F) * I;
                Q[n] = w;
                l.vertices.push(new THREE.Vertex(Q))
            }
        for (o = 0; o < D; o++)
            for (k = 0; k < v; k++) {
                l.faces.push(new THREE.Face4(k + y * o + M,k + y * (o + 1) + M,k + 1 + y * (o + 1) + M,k + 1 + y * o + M,null,u));
                l.uvs.push([new THREE.UV(k / v,o / D), new THREE.UV(k / v,(o + 1) / D), new THREE.UV((k + 1) / v,(o + 1) / D), new THREE.UV((k + 1) / v,o / D)])
            }
    }
    THREE.Geometry.call(this);
    var l = this
      , p = a / 2
      , A = c / 2
      , q = d / 2;
    h = h ? -1 : 1;
    if (f !== undefined)
        if (f instanceof Array)
            this.materials = f;
        else {
            this.materials = [];
            for (var m = 0; m < 6; m++)
                this.materials.push([f])
        }
    else
        this.materials = [];
    this.sides = {
        px: true,
        nx: true,
        py: true,
        ny: true,
        pz: true,
        nz: true
    };
    if (b != undefined)
        for (var B in b)
            if (this.sides[B] != undefined)
                this.sides[B] = b[B];
    this.sides.px && j("z", "y", 1 * h, -1, d, c, -p, this.materials[0]);
    this.sides.nx && j("z", "y", -1 * h, -1, d, c, p, this.materials[1]);
    this.sides.py && j("x", "z", 1 * h, 1, a, d, A, this.materials[2]);
    this.sides.ny && j("x", "z", 1 * h, -1, a, d, -A, this.materials[3]);
    this.sides.pz && j("x", "y", 1 * h, -1, a, c, q, this.materials[4]);
    this.sides.nz && j("x", "y", -1 * h, -1, a, c, -q, this.materials[5]);
    (function() {
        for (var E = [], H = [], x = 0, I = l.vertices.length; x < I; x++) {
            for (var t = l.vertices[x], k = false, w = 0, u = E.length; w < u; w++) {
                var n = E[w];
                if (t.position.x == n.position.x && t.position.y == n.position.y && t.position.z == n.position.z) {
                    H[x] = w;
                    k = true;
                    break
                }
            }
            if (!k) {
                H[x] = E.length;
                E.push(new THREE.Vertex(t.position.clone()))
            }
        }
        x = 0;
        for (I = l.faces.length; x < I; x++) {
            t = l.faces[x];
            t.a = H[t.a];
            t.b = H[t.b];
            t.c = H[t.c];
            t.d = H[t.d]
        }
        l.vertices = E
    }
    )();
    this.computeCentroids();
    this.computeFaceNormals();
    this.sortFacesByMaterial()
};
Cube.prototype = new THREE.Geometry;
Cube.prototype.constructor = Cube;
var Cylinder = function(a, c, d, e, g) {
    function f(l, p, A) {
        h.vertices.push(new THREE.Vertex(new THREE.Vector3(l,p,A)))
    }
    THREE.Geometry.call(this);
    var h = this, b = Math.PI, j;
    for (j = 0; j < a; j++)
        f(Math.sin(2 * b * j / a) * c, Math.cos(2 * b * j / a) * c, 0);
    for (j = 0; j < a; j++)
        f(Math.sin(2 * b * j / a) * d, Math.cos(2 * b * j / a) * d, e);
    for (j = 0; j < a; j++)
        h.faces.push(new THREE.Face4(j,j + a,a + (j + 1) % a,(j + 1) % a));
    if (d != 0) {
        f(0, 0, -g);
        for (j = a; j < a + a / 2; j++)
            h.faces.push(new THREE.Face4(2 * a,(2 * j - 2 * a) % a,(2 * j - 2 * a + 1) % a,(2 * j - 2 * a + 2) % a))
    }
    if (c != 0) {
        f(0, 0, e + g);
        for (j = a + a / 2; j < 2 * a; j++)
            h.faces.push(new THREE.Face4((2 * j - 2 * a + 2) % a + a,(2 * j - 2 * a + 1) % a + a,(2 * j - 2 * a) % a + a,2 * a + 1))
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.sortFacesByMaterial()
};
Cylinder.prototype = new THREE.Geometry;
Cylinder.prototype.constructor = Cylinder;
var Plane = function(a, c, d, e) {
    THREE.Geometry.call(this);
    var g, f = a / 2, h = c / 2;
    d = d || 1;
    e = e || 1;
    var b = d + 1
      , j = e + 1;
    a = a / d;
    var l = c / e;
    for (g = 0; g < j; g++)
        for (c = 0; c < b; c++)
            this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * a - f,-(g * l - h),0)));
    for (g = 0; g < e; g++)
        for (c = 0; c < d; c++) {
            this.faces.push(new THREE.Face4(c + b * g,c + b * (g + 1),c + 1 + b * (g + 1),c + 1 + b * g));
            this.uvs.push([new THREE.UV(c / d,g / e), new THREE.UV(c / d,(g + 1) / e), new THREE.UV((c + 1) / d,(g + 1) / e), new THREE.UV((c + 1) / d,g / e)])
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.sortFacesByMaterial()
};
Plane.prototype = new THREE.Geometry;
Plane.prototype.constructor = Plane;
var Sphere = function(a, c, d) {
    THREE.Geometry.call(this);
    var e, g = Math.PI, f = Math.max(3, c || 8), h = Math.max(2, d || 6);
    c = [];
    for (d = 0; d < h + 1; d++) {
        e = d / h;
        var b = a * Math.cos(e * g)
          , j = a * Math.sin(e * g)
          , l = []
          , p = 0;
        for (e = 0; e < f; e++) {
            var A = 2 * e / f
              , q = j * Math.sin(A * g);
            A = j * Math.cos(A * g);
            (d == 0 || d == h) && e > 0 || (p = this.vertices.push(new THREE.Vertex(new THREE.Vector3(A,b,q))) - 1);
            l.push(p)
        }
        c.push(l)
    }
    var m, B, E;
    g = c.length;
    for (d = 0; d < g; d++) {
        f = c[d].length;
        if (d > 0)
            for (e = 0; e < f; e++) {
                l = e == f - 1;
                h = c[d][l ? 0 : e + 1];
                b = c[d][l ? f - 1 : e];
                j = c[d - 1][l ? f - 1 : e];
                l = c[d - 1][l ? 0 : e + 1];
                q = d / (g - 1);
                m = (d - 1) / (g - 1);
                B = (e + 1) / f;
                A = e / f;
                p = new THREE.UV(1 - B,q);
                q = new THREE.UV(1 - A,q);
                A = new THREE.UV(1 - A,m);
                var H = new THREE.UV(1 - B,m);
                if (d < c.length - 1) {
                    m = this.vertices[h].position.clone();
                    B = this.vertices[b].position.clone();
                    E = this.vertices[j].position.clone();
                    m.normalize();
                    B.normalize();
                    E.normalize();
                    this.faces.push(new THREE.Face3(h,b,j,[new THREE.Vector3(m.x,m.y,m.z), new THREE.Vector3(B.x,B.y,B.z), new THREE.Vector3(E.x,E.y,E.z)]));
                    this.uvs.push([p, q, A])
                }
                if (d > 1) {
                    m = this.vertices[h].position.clone();
                    B = this.vertices[j].position.clone();
                    E = this.vertices[l].position.clone();
                    m.normalize();
                    B.normalize();
                    E.normalize();
                    this.faces.push(new THREE.Face3(h,j,l,[new THREE.Vector3(m.x,m.y,m.z), new THREE.Vector3(B.x,B.y,B.z), new THREE.Vector3(E.x,E.y,E.z)]));
                    this.uvs.push([p, A, H])
                }
            }
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.sortFacesByMaterial();
    this.boundingSphere = {
        radius: a
    }
};
Sphere.prototype = new THREE.Geometry;
Sphere.prototype.constructor = Sphere;
var Torus = function(a, c, d, e) {
    this.radius = a || 100;
    this.tube = c || 40;
    this.segmentsR = d || 8;
    this.segmentsT = e || 6;
    a = [];
    THREE.Geometry.call(this);
    for (c = 0; c <= this.segmentsR; ++c)
        for (d = 0; d <= this.segmentsT; ++d) {
            e = d / this.segmentsT * 2 * Math.PI;
            var g = c / this.segmentsR * 2 * Math.PI;
            this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius + this.tube * Math.cos(g)) * Math.cos(e),(this.radius + this.tube * Math.cos(g)) * Math.sin(e),this.tube * Math.sin(g))));
            a.push([d / this.segmentsT, 1 - c / this.segmentsR])
        }
    for (c = 1; c <= this.segmentsR; ++c)
        for (d = 1; d <= this.segmentsT; ++d) {
            e = (this.segmentsT + 1) * c + d;
            g = (this.segmentsT + 1) * c + d - 1;
            var f = (this.segmentsT + 1) * (c - 1) + d - 1
              , h = (this.segmentsT + 1) * (c - 1) + d;
            this.faces.push(new THREE.Face4(e,g,f,h));
            this.uvs.push([new THREE.UV(a[e][0],a[e][1]), new THREE.UV(a[g][0],a[g][1]), new THREE.UV(a[f][0],a[f][1]), new THREE.UV(a[h][0],a[h][1])])
        }
    delete a;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.sortFacesByMaterial()
};
Torus.prototype = new THREE.Geometry;
Torus.prototype.constructor = Torus;
var Icosahedron = function(a) {
    function c(A, q, m) {
        var B = Math.sqrt(A * A + q * q + m * m);
        return g.vertices.push(new THREE.Vertex(new THREE.Vector3(A / B,q / B,m / B))) - 1
    }
    function d(A, q, m, B) {
        B.faces.push(new THREE.Face3(A,q,m))
    }
    function e(A, q) {
        var m = g.vertices[A].position
          , B = g.vertices[q].position;
        return c((m.x + B.x) / 2, (m.y + B.y) / 2, (m.z + B.z) / 2)
    }
    var g = this, f = new THREE.Geometry, h;
    this.subdivisions = a || 0;
    THREE.Geometry.call(this);
    a = (1 + Math.sqrt(5)) / 2;
    c(-1, a, 0);
    c(1, a, 0);
    c(-1, -a, 0);
    c(1, -a, 0);
    c(0, -1, a);
    c(0, 1, a);
    c(0, -1, -a);
    c(0, 1, -a);
    c(a, 0, -1);
    c(a, 0, 1);
    c(-a, 0, -1);
    c(-a, 0, 1);
    d(0, 11, 5, f);
    d(0, 5, 1, f);
    d(0, 1, 7, f);
    d(0, 7, 10, f);
    d(0, 10, 11, f);
    d(1, 5, 9, f);
    d(5, 11, 4, f);
    d(11, 10, 2, f);
    d(10, 7, 6, f);
    d(7, 1, 8, f);
    d(3, 9, 4, f);
    d(3, 4, 2, f);
    d(3, 2, 6, f);
    d(3, 6, 8, f);
    d(3, 8, 9, f);
    d(4, 9, 5, f);
    d(2, 4, 11, f);
    d(6, 2, 10, f);
    d(8, 6, 7, f);
    d(9, 8, 1, f);
    for (a = 0; a < this.subdivisions; a++) {
        h = new THREE.Geometry;
        for (var b in f.faces) {
            var j = e(f.faces[b].a, f.faces[b].b)
              , l = e(f.faces[b].b, f.faces[b].c)
              , p = e(f.faces[b].c, f.faces[b].a);
            d(f.faces[b].a, j, p, h);
            d(f.faces[b].b, l, j, h);
            d(f.faces[b].c, p, l, h);
            d(j, l, p, h)
        }
        f.faces = h.faces
    }
    g.faces = f.faces;
    delete f;
    delete h;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.sortFacesByMaterial()
};
Icosahedron.prototype = new THREE.Geometry;
Icosahedron.prototype.constructor = Icosahedron;
function LathedObject(a, c, d) {
    THREE.Geometry.call(this);
    c = c || 12;
    d = d || 2 * Math.PI;
    c = d / c;
    for (var e = [], g = [], f = [], h = [], b = 0; b < a.length; b++) {
        this.vertices.push(new THREE.Vertex(a[b]));
        g[b] = this.vertices.length - 1;
        e[b] = new THREE.Vector3(a[b].x,a[b].y,a[b].z)
    }
    for (var j = THREE.Matrix4.rotationZMatrix(c), l = 0; l <= d + 0.0010; l += c) {
        for (b = 0; b < e.length; b++)
            if (l < d) {
                e[b] = j.multiplyVector3(e[b].clone());
                this.vertices.push(new THREE.Vertex(e[b]));
                f[b] = this.vertices.length - 1
            } else
                f = h;
        if (l == 0)
            h = g;
        for (b = 0; b < g.length - 1; b++) {
            this.faces.push(new THREE.Face4(f[b],f[b + 1],g[b + 1],g[b]));
            this.uvs.push([new THREE.UV(l / d,b / a.length), new THREE.UV(l / d,(b + 1) / a.length), new THREE.UV((l - c) / d,(b + 1) / a.length), new THREE.UV((l - c) / d,b / a.length)])
        }
        g = f;
        f = []
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.sortFacesByMaterial()
}
LathedObject.prototype = new THREE.Geometry;
LathedObject.prototype.constructor = LathedObject;
if (!window.Int32Array) {
    window.Int32Array = Array;
    window.Float32Array = Array
}
THREE.MarchingCubes = function(a, c) {
    THREE.Object3D.call(this);
    this.materials = c instanceof Array ? c : [c];
    this.init = function(d) {
        this.isolation = 80;
        this.size = d;
        this.size2 = this.size * this.size;
        this.size3 = this.size2 * this.size;
        this.halfsize = this.size / 2;
        this.delta = 2 / this.size;
        this.yd = this.size;
        this.zd = this.size2;
        this.field = new Float32Array(this.size3);
        this.normal_cache = new Float32Array(this.size3 * 3);
        this.vlist = new Float32Array(36);
        this.nlist = new Float32Array(36);
        this.firstDraw = true;
        this.maxCount = 4096;
        this.count = 0;
        this.hasNormal = this.hasPos = false;
        this.positionArray = new Float32Array(this.maxCount * 3);
        this.normalArray = new Float32Array(this.maxCount * 3)
    }
    ;
    this.lerp = function(d, e, g) {
        return d + (e - d) * g
    }
    ;
    this.VIntX = function(d, e, g, f, h, b, j, l, p, A) {
        h = (h - p) / (A - p);
        p = this.normal_cache;
        e[f] = b + h * this.delta;
        e[f + 1] = j;
        e[f + 2] = l;
        g[f] = this.lerp(p[d], p[d + 3], h);
        g[f + 1] = this.lerp(p[d + 1], p[d + 4], h);
        g[f + 2] = this.lerp(p[d + 2], p[d + 5], h)
    }
    ;
    this.VIntY = function(d, e, g, f, h, b, j, l, p, A) {
        h = (h - p) / (A - p);
        p = this.normal_cache;
        e[f] = b;
        e[f + 1] = j + h * this.delta;
        e[f + 2] = l;
        e = d + this.yd * 3;
        g[f] = this.lerp(p[d], p[e], h);
        g[f + 1] = this.lerp(p[d + 1], p[e + 1], h);
        g[f + 2] = this.lerp(p[d + 2], p[e + 2], h)
    }
    ;
    this.VIntZ = function(d, e, g, f, h, b, j, l, p, A) {
        h = (h - p) / (A - p);
        p = this.normal_cache;
        e[f] = b;
        e[f + 1] = j;
        e[f + 2] = l + h * this.delta;
        e = d + this.zd * 3;
        g[f] = this.lerp(p[d], p[e], h);
        g[f + 1] = this.lerp(p[d + 1], p[e + 1], h);
        g[f + 2] = this.lerp(p[d + 2], p[e + 2], h)
    }
    ;
    this.compNorm = function(d) {
        var e = d * 3;
        if (this.normal_cache[e] == 0) {
            this.normal_cache[e] = this.field[d - 1] - this.field[d + 1];
            this.normal_cache[e + 1] = this.field[d - this.yd] - this.field[d + this.yd];
            this.normal_cache[e + 2] = this.field[d - this.zd] - this.field[d + this.zd]
        }
    }
    ;
    this.polygonize = function(d, e, g, f, h, b) {
        var j = f + 1
          , l = f + this.yd
          , p = f + this.zd
          , A = j + this.yd
          , q = j + this.zd
          , m = f + this.yd + this.zd
          , B = j + this.yd + this.zd
          , E = 0
          , H = this.field[f]
          , x = this.field[j]
          , I = this.field[l]
          , t = this.field[A]
          , k = this.field[p]
          , w = this.field[q]
          , u = this.field[m]
          , n = this.field[B];
        if (H < h)
            E |= 1;
        if (x < h)
            E |= 2;
        if (I < h)
            E |= 8;
        if (t < h)
            E |= 4;
        if (k < h)
            E |= 16;
        if (w < h)
            E |= 32;
        if (u < h)
            E |= 128;
        if (n < h)
            E |= 64;
        var o = THREE.edgeTable[E];
        if (o == 0)
            return 0;
        var v = this.delta
          , D = d + v
          , y = e + v;
        v = g + v;
        if (o & 1) {
            this.compNorm(f);
            this.compNorm(j);
            this.VIntX(f * 3, this.vlist, this.nlist, 0, h, d, e, g, H, x)
        }
        if (o & 2) {
            this.compNorm(j);
            this.compNorm(A);
            this.VIntY(j * 3, this.vlist, this.nlist, 3, h, D, e, g, x, t)
        }
        if (o & 4) {
            this.compNorm(l);
            this.compNorm(A);
            this.VIntX(l * 3, this.vlist, this.nlist, 6, h, d, y, g, I, t)
        }
        if (o & 8) {
            this.compNorm(f);
            this.compNorm(l);
            this.VIntY(f * 3, this.vlist, this.nlist, 9, h, d, e, g, H, I)
        }
        if (o & 16) {
            this.compNorm(p);
            this.compNorm(q);
            this.VIntX(p * 3, this.vlist, this.nlist, 12, h, d, e, v, k, w)
        }
        if (o & 32) {
            this.compNorm(q);
            this.compNorm(B);
            this.VIntY(q * 3, this.vlist, this.nlist, 15, h, D, e, v, w, n)
        }
        if (o & 64) {
            this.compNorm(m);
            this.compNorm(B);
            this.VIntX(m * 3, this.vlist, this.nlist, 18, h, d, y, v, u, n)
        }
        if (o & 128) {
            this.compNorm(p);
            this.compNorm(m);
            this.VIntY(p * 3, this.vlist, this.nlist, 21, h, d, e, v, k, u)
        }
        if (o & 256) {
            this.compNorm(f);
            this.compNorm(p);
            this.VIntZ(f * 3, this.vlist, this.nlist, 24, h, d, e, g, H, k)
        }
        if (o & 512) {
            this.compNorm(j);
            this.compNorm(q);
            this.VIntZ(j * 3, this.vlist, this.nlist, 27, h, D, e, g, x, w)
        }
        if (o & 1024) {
            this.compNorm(A);
            this.compNorm(B);
            this.VIntZ(A * 3, this.vlist, this.nlist, 30, h, D, y, g, t, n)
        }
        if (o & 2048) {
            this.compNorm(l);
            this.compNorm(m);
            this.VIntZ(l * 3, this.vlist, this.nlist, 33, h, d, y, g, I, u)
        }
        E <<= 4;
        for (h = f = 0; THREE.triTable[E + h] != -1; ) {
            d = E + h;
            e = d + 1;
            g = d + 2;
            this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[d], 3 * THREE.triTable[e], 3 * THREE.triTable[g], b);
            h += 3;
            f++
        }
        return f
    }
    ;
    this.posnormtriv = function(d, e, g, f, h, b) {
        var j = this.count * 3;
        this.positionArray[j] = d[g];
        this.positionArray[j + 1] = d[g + 1];
        this.positionArray[j + 2] = d[g + 2];
        this.positionArray[j + 3] = d[f];
        this.positionArray[j + 4] = d[f + 1];
        this.positionArray[j + 5] = d[f + 2];
        this.positionArray[j + 6] = d[h];
        this.positionArray[j + 7] = d[h + 1];
        this.positionArray[j + 8] = d[h + 2];
        this.normalArray[j] = e[g];
        this.normalArray[j + 1] = e[g + 1];
        this.normalArray[j + 2] = e[g + 2];
        this.normalArray[j + 3] = e[f];
        this.normalArray[j + 4] = e[f + 1];
        this.normalArray[j + 5] = e[f + 2];
        this.normalArray[j + 6] = e[h];
        this.normalArray[j + 7] = e[h + 1];
        this.normalArray[j + 8] = e[h + 2];
        this.hasNormal = this.hasPos = true;
        this.count += 3;
        this.count >= this.maxCount - 3 && b(this)
    }
    ;
    this.begin = function() {
        this.count = 0;
        this.hasNormal = this.hasPos = false
    }
    ;
    this.end = function(d) {
        if (this.count != 0) {
            for (var e = this.count * 3; e < this.positionArray.length; e++)
                this.positionArray[e] = 0;
            d(this)
        }
    }
    ;
    this.addBall = function(d, e, g, f, h) {
        var b = this.size * Math.sqrt(f / h)
          , j = g * this.size
          , l = e * this.size
          , p = d * this.size
          , A = Math.floor(j - b);
        if (A < 1)
            A = 1;
        j = Math.floor(j + b);
        if (j > this.size - 1)
            j = this.size - 1;
        var q = Math.floor(l - b);
        if (q < 1)
            q = 1;
        l = Math.floor(l + b);
        if (l > this.size - 1)
            l = this.size - 1;
        var m = Math.floor(p - b);
        if (m < 1)
            m = 1;
        b = Math.floor(p + b);
        if (b > this.size - 1)
            b = this.size - 1;
        var B, E, H, x, I, t;
        for (A = A; A < j; A++) {
            p = this.size2 * A;
            E = A / this.size - g;
            I = E * E;
            for (E = q; E < l; E++) {
                H = p + this.size * E;
                B = E / this.size - e;
                t = B * B;
                for (B = m; B < b; B++) {
                    x = B / this.size - d;
                    x = f / (1.0E-6 + x * x + t + I) - h;
                    if (x > 0)
                        this.field[H + B] += x
                }
            }
        }
    }
    ;
    this.addPlaneX = function(d, e) {
        var g, f, h, b, j, l = this.size, p = this.yd, A = this.zd, q = this.field, m = l * Math.sqrt(d / e);
        if (m > l)
            m = l;
        for (g = 0; g < m; g++) {
            f = g / l;
            f = f * f;
            b = d / (1.0E-4 + f) - e;
            if (b > 0)
                for (f = 0; f < l; f++) {
                    j = g + f * p;
                    for (h = 0; h < l; h++)
                        q[A * h + j] += b
                }
        }
    }
    ;
    this.addPlaneY = function(d, e) {
        var g, f, h, b, j, l, p = this.size, A = this.yd, q = this.zd, m = this.field, B = p * Math.sqrt(d / e);
        if (B > p)
            B = p;
        for (f = 0; f < B; f++) {
            g = f / p;
            g = g * g;
            b = d / (1.0E-4 + g) - e;
            if (b > 0) {
                j = f * A;
                for (g = 0; g < p; g++) {
                    l = j + g;
                    for (h = 0; h < p; h++)
                        m[q * h + l] += b
                }
            }
        }
    }
    ;
    this.addPlaneZ = function(d, e) {
        var g, f, h, b, j, l;
        size = this.size;
        yd = this.yd;
        zd = this.zd;
        field = this.field;
        dist = size * Math.sqrt(d / e);
        if (dist > size)
            dist = size;
        for (h = 0; h < dist; h++) {
            g = h / size;
            g = g * g;
            b = d / (1.0E-4 + g) - e;
            if (b > 0) {
                j = zd * h;
                for (f = 0; f < size; f++) {
                    l = j + f * yd;
                    for (g = 0; g < size; g++)
                        field[l + g] += b
                }
            }
        }
    }
    ;
    this.reset = function() {
        var d;
        for (d = 0; d < this.size3; d++) {
            this.normal_cache[d * 3] = 0;
            this.field[d] = 0
        }
    }
    ;
    this.render = function(d) {
        this.begin();
        var e, g, f, h, b, j, l, p, A, q = this.size - 2;
        for (h = 1; h < q; h++) {
            A = this.size2 * h;
            l = (h - this.halfsize) / this.halfsize;
            for (f = 1; f < q; f++) {
                p = A + this.size * f;
                j = (f - this.halfsize) / this.halfsize;
                for (g = 1; g < q; g++) {
                    b = (g - this.halfsize) / this.halfsize;
                    e = p + g;
                    this.polygonize(b, j, l, e, this.isolation, d)
                }
            }
        }
        this.end(d)
    }
    ;
    this.generateGeometry = function() {
        var d = 0
          , e = new THREE.Geometry;
        this.render(function(g) {
            var f, h, b, j, l, p, A, q;
            for (f = 0; f < g.count; f++) {
                l = f * 3;
                A = l + 1;
                q = l + 2;
                h = g.positionArray[l];
                b = g.positionArray[A];
                j = g.positionArray[q];
                p = new THREE.Vector3(h,b,j);
                h = g.normalArray[l];
                b = g.normalArray[A];
                j = g.normalArray[q];
                l = new THREE.Vector3(h,b,j);
                l.normalize();
                l = new THREE.Vertex(p,l);
                e.vertices.push(l)
            }
            nfaces = g.count / 3;
            for (f = 0; f < nfaces; f++) {
                l = (d + f) * 3;
                A = l + 1;
                q = l + 2;
                p = e.vertices[l].normal;
                h = e.vertices[A].normal;
                b = e.vertices[q].normal;
                l = new THREE.Face3(l,A,q,[p, h, b]);
                e.faces.push(l)
            }
            d += nfaces;
            g.count = 0
        });
        e.sortFacesByMaterial();
        return e
    }
    ;
    this.init(a)
}
;
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, 10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1, 6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1, 8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
THREE.Loader = function(a) {
    this.statusDomElement = (this.showStatus = a) ? this.addStatusElement() : null
}
;
THREE.Loader.prototype = {
    addStatusElement: function() {
        var a = document.createElement("div");
        a.style.fontSize = "0.8em";
        a.style.textAlign = "left";
        a.style.background = "#b00";
        a.style.color = "#fff";
        a.style.width = "140px";
        a.style.padding = "0.25em 0.25em 0.25em 0.5em";
        a.style.position = "absolute";
        a.style.right = "0px";
        a.style.top = "0px";
        a.style.zIndex = 1E3;
        a.innerHTML = "Loading ...";
        return a
    },
    updateProgress: function(a) {
        var c = "Loaded ";
        c += a.total ? (100 * a.loaded / a.total).toFixed(0) + "%" : (a.loaded / 1E3).toFixed(2) + " KB";
        this.statusDomElement.innerHTML = c
    },
    loadAsciiOld: function(a, c) {
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.onload = c;
        d.src = a;
        document.getElementsByTagName("head")[0].appendChild(d)
    },
    loadAscii: function(a) {
        var c = a.model
          , d = a.callback
          , e = a.texture_path ? a.texture_path : THREE.Loader.prototype.extractUrlbase(c);
        a = (new Date).getTime();
        c = new Worker(c);
        c.onmessage = function(g) {
            THREE.Loader.prototype.createModel(g.data, d, e)
        }
        ;
        c.postMessage(a)
    },
    loadBinary: function(a) {
        var c = a.model
          , d = a.callback
          , e = a.texture_path ? a.texture_path : THREE.Loader.prototype.extractUrlbase(c)
          , g = a.bin_path ? a.bin_path : THREE.Loader.prototype.extractUrlbase(c);
        a = (new Date).getTime();
        c = new Worker(c);
        var f = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
        c.onmessage = function(h) {
            THREE.Loader.prototype.loadAjaxBuffers(h.data.buffers, h.data.materials, d, g, e, f)
        }
        ;
        c.onerror = function(h) {
            alert("worker.onerror: " + h.message + "\n" + h.data);
            h.preventDefault()
        }
        ;
        c.postMessage(a)
    },
    loadAjaxBuffers: function(a, c, d, e, g, f) {
        var h = new XMLHttpRequest
          , b = e + "/" + a
          , j = 0;
        h.onreadystatechange = function() {
            if (h.readyState == 4)
                h.status == 200 || h.status == 0 ? THREE.Loader.prototype.createBinModel(h.responseText, d, g, c) : alert("Couldn't load [" + b + "] [" + h.status + "]");
            else if (h.readyState == 3) {
                if (f) {
                    if (j == 0)
                        j = h.getResponseHeader("Content-Length");
                    f({
                        total: j,
                        loaded: h.responseText.length
                    })
                }
            } else if (h.readyState == 2)
                j = h.getResponseHeader("Content-Length")
        }
        ;
        h.open("GET", b, true);
        h.overrideMimeType("text/plain; charset=x-user-defined");
        h.setRequestHeader("Content-Type", "text/plain");
        h.send(null)
    },
    createBinModel: function(a, c, d, e) {
        var g = function(f) {
            function h(G, N) {
                var L = p(G, N)
                  , X = p(G, N + 1)
                  , $ = p(G, N + 2)
                  , ma = p(G, N + 3)
                  , ia = (ma << 1 & 255 | $ >> 7) - 127;
                L = ($ & 127) << 16 | X << 8 | L;
                if (L == 0 && ia == -127)
                    return 0;
                return (1 - 2 * (ma >> 7)) * (1 + L * Math.pow(2, -23)) * Math.pow(2, ia)
            }
            function b(G, N) {
                var L = p(G, N)
                  , X = p(G, N + 1)
                  , $ = p(G, N + 2);
                return (p(G, N + 3) << 24) + ($ << 16) + (X << 8) + L
            }
            function j(G, N) {
                var L = p(G, N);
                return (p(G, N + 1) << 8) + L
            }
            function l(G, N) {
                var L = p(G, N);
                return L > 127 ? L - 256 : L
            }
            function p(G, N) {
                return G.charCodeAt(N) & 255
            }
            function A(G) {
                var N, L, X;
                N = b(a, G);
                L = b(a, G + u);
                X = b(a, G + n);
                G = j(a, G + o);
                THREE.Loader.prototype.f3(x, N, L, X, G)
            }
            function q(G) {
                var N, L, X, $, ma, ia;
                N = b(a, G);
                L = b(a, G + u);
                X = b(a, G + n);
                $ = j(a, G + o);
                ma = b(a, G + v);
                ia = b(a, G + D);
                G = b(a, G + y);
                THREE.Loader.prototype.f3n(x, k, N, L, X, $, ma, ia, G)
            }
            function m(G) {
                var N, L, X, $;
                N = b(a, G);
                L = b(a, G + C);
                X = b(a, G + z);
                $ = b(a, G + F);
                G = j(a, G + J);
                THREE.Loader.prototype.f4(x, N, L, X, $, G)
            }
            function B(G) {
                var N, L, X, $, ma, ia, qa, ta;
                N = b(a, G);
                L = b(a, G + C);
                X = b(a, G + z);
                $ = b(a, G + F);
                ma = j(a, G + J);
                ia = b(a, G + M);
                qa = b(a, G + Q);
                ta = b(a, G + S);
                G = b(a, G + U);
                THREE.Loader.prototype.f4n(x, k, N, L, X, $, ma, ia, qa, ta, G)
            }
            function E(G) {
                var N, L;
                N = b(a, G);
                L = b(a, G + ca);
                G = b(a, G + da);
                THREE.Loader.prototype.uv3(x.uvs, w[N * 2], w[N * 2 + 1], w[L * 2], w[L * 2 + 1], w[G * 2], w[G * 2 + 1])
            }
            function H(G) {
                var N, L, X;
                N = b(a, G);
                L = b(a, G + T);
                X = b(a, G + O);
                G = b(a, G + Z);
                THREE.Loader.prototype.uv4(x.uvs, w[N * 2], w[N * 2 + 1], w[L * 2], w[L * 2 + 1], w[X * 2], w[X * 2 + 1], w[G * 2], w[G * 2 + 1])
            }
            var x = this, I = 0, t, k = [], w = [], u, n, o, v, D, y, C, z, F, J, M, Q, S, U, ca, da, T, O, Z, V, K, W, ba, ha, ea;
            THREE.Geometry.call(this);
            THREE.Loader.prototype.init_materials(x, e, f);
            t = {
                signature: a.substr(I, 8),
                header_bytes: p(a, I + 8),
                vertex_coordinate_bytes: p(a, I + 9),
                normal_coordinate_bytes: p(a, I + 10),
                uv_coordinate_bytes: p(a, I + 11),
                vertex_index_bytes: p(a, I + 12),
                normal_index_bytes: p(a, I + 13),
                uv_index_bytes: p(a, I + 14),
                material_index_bytes: p(a, I + 15),
                nvertices: b(a, I + 16),
                nnormals: b(a, I + 16 + 4),
                nuvs: b(a, I + 16 + 8),
                ntri_flat: b(a, I + 16 + 12),
                ntri_smooth: b(a, I + 16 + 16),
                ntri_flat_uv: b(a, I + 16 + 20),
                ntri_smooth_uv: b(a, I + 16 + 24),
                nquad_flat: b(a, I + 16 + 28),
                nquad_smooth: b(a, I + 16 + 32),
                nquad_flat_uv: b(a, I + 16 + 36),
                nquad_smooth_uv: b(a, I + 16 + 40)
            };
            I += t.header_bytes;
            u = t.vertex_index_bytes;
            n = t.vertex_index_bytes * 2;
            o = t.vertex_index_bytes * 3;
            v = t.vertex_index_bytes * 3 + t.material_index_bytes;
            D = t.vertex_index_bytes * 3 + t.material_index_bytes + t.normal_index_bytes;
            y = t.vertex_index_bytes * 3 + t.material_index_bytes + t.normal_index_bytes * 2;
            C = t.vertex_index_bytes;
            z = t.vertex_index_bytes * 2;
            F = t.vertex_index_bytes * 3;
            J = t.vertex_index_bytes * 4;
            M = t.vertex_index_bytes * 4 + t.material_index_bytes;
            Q = t.vertex_index_bytes * 4 + t.material_index_bytes + t.normal_index_bytes;
            S = t.vertex_index_bytes * 4 + t.material_index_bytes + t.normal_index_bytes * 2;
            U = t.vertex_index_bytes * 4 + t.material_index_bytes + t.normal_index_bytes * 3;
            ca = t.uv_index_bytes;
            da = t.uv_index_bytes * 2;
            T = t.uv_index_bytes;
            O = t.uv_index_bytes * 2;
            Z = t.uv_index_bytes * 3;
            f = t.vertex_index_bytes * 3 + t.material_index_bytes;
            ea = t.vertex_index_bytes * 4 + t.material_index_bytes;
            V = t.ntri_flat * f;
            K = t.ntri_smooth * (f + t.normal_index_bytes * 3);
            W = t.ntri_flat_uv * (f + t.uv_index_bytes * 3);
            ba = t.ntri_smooth_uv * (f + t.normal_index_bytes * 3 + t.uv_index_bytes * 3);
            ha = t.nquad_flat * ea;
            f = t.nquad_smooth * (ea + t.normal_index_bytes * 4);
            ea = t.nquad_flat_uv * (ea + t.uv_index_bytes * 4);
            I += function(G) {
                var N, L, X, $ = t.vertex_coordinate_bytes * 3, ma = G + t.nvertices * $;
                for (G = G; G < ma; G += $) {
                    N = h(a, G);
                    L = h(a, G + t.vertex_coordinate_bytes);
                    X = h(a, G + t.vertex_coordinate_bytes * 2);
                    THREE.Loader.prototype.v(x, N, L, X)
                }
                return t.nvertices * $
            }(I);
            I += function(G) {
                var N, L, X, $ = t.normal_coordinate_bytes * 3, ma = G + t.nnormals * $;
                for (G = G; G < ma; G += $) {
                    N = l(a, G);
                    L = l(a, G + t.normal_coordinate_bytes);
                    X = l(a, G + t.normal_coordinate_bytes * 2);
                    k.push(N / 127, L / 127, X / 127)
                }
                return t.nnormals * $
            }(I);
            I += function(G) {
                var N, L, X = t.uv_coordinate_bytes * 2, $ = G + t.nuvs * X;
                for (G = G; G < $; G += X) {
                    N = h(a, G);
                    L = h(a, G + t.uv_coordinate_bytes);
                    w.push(N, L)
                }
                return t.nuvs * X
            }(I);
            I = I;
            V = I + V;
            K = V + K;
            W = K + W;
            ba = W + ba;
            ha = ba + ha;
            f = ha + f;
            ea = f + ea;
            (function(G) {
                var N, L = t.vertex_index_bytes * 3 + t.material_index_bytes, X = L + t.uv_index_bytes * 3, $ = G + t.ntri_flat_uv * X;
                for (N = G; N < $; N += X) {
                    A(N);
                    E(N + L)
                }
                return $ - G
            }
            )(K);
            (function(G) {
                var N, L = t.vertex_index_bytes * 3 + t.material_index_bytes + t.normal_index_bytes * 3, X = L + t.uv_index_bytes * 3, $ = G + t.ntri_smooth_uv * X;
                for (N = G; N < $; N += X) {
                    q(N);
                    E(N + L)
                }
                return $ - G
            }
            )(W);
            (function(G) {
                var N, L = t.vertex_index_bytes * 4 + t.material_index_bytes, X = L + t.uv_index_bytes * 4, $ = G + t.nquad_flat_uv * X;
                for (N = G; N < $; N += X) {
                    m(N);
                    H(N + L)
                }
                return $ - G
            }
            )(f);
            (function(G) {
                var N, L = t.vertex_index_bytes * 4 + t.material_index_bytes + t.normal_index_bytes * 4, X = L + t.uv_index_bytes * 4, $ = G + t.nquad_smooth_uv * X;
                for (N = G; N < $; N += X) {
                    B(N);
                    H(N + L)
                }
                return $ - G
            }
            )(ea);
            (function(G) {
                var N, L = t.vertex_index_bytes * 3 + t.material_index_bytes, X = G + t.ntri_flat * L;
                for (N = G; N < X; N += L)
                    A(N);
                return X - G
            }
            )(I);
            (function(G) {
                var N, L = t.vertex_index_bytes * 3 + t.material_index_bytes + t.normal_index_bytes * 3, X = G + t.ntri_smooth * L;
                for (N = G; N < X; N += L)
                    q(N);
                return X - G
            }
            )(V);
            (function(G) {
                var N, L = t.vertex_index_bytes * 4 + t.material_index_bytes, X = G + t.nquad_flat * L;
                for (N = G; N < X; N += L)
                    m(N);
                return X - G
            }
            )(ba);
            (function(G) {
                var N, L = t.vertex_index_bytes * 4 + t.material_index_bytes + t.normal_index_bytes * 4, X = G + t.nquad_smooth * L;
                for (N = G; N < X; N += L)
                    B(N);
                return X - G
            }
            )(ha);
            this.computeCentroids();
            this.computeFaceNormals();
            this.sortFacesByMaterial()
        };
        g.prototype = new THREE.Geometry;
        g.prototype.constructor = g;
        c(new g(d))
    },
    createModel: function(a, c, d) {
        var e = function(g) {
            var f = this;
            THREE.Geometry.call(this);
            THREE.Loader.prototype.init_materials(f, a.materials, g);
            (function() {
                var h, b, j, l, p;
                h = 0;
                for (b = a.vertices.length; h < b; h += 3) {
                    j = a.vertices[h];
                    l = a.vertices[h + 1];
                    p = a.vertices[h + 2];
                    THREE.Loader.prototype.v(f, j, l, p)
                }
            }
            )();
            (function() {
                function h(B, E) {
                    THREE.Loader.prototype.f3(f, B[E], B[E + 1], B[E + 2], B[E + 3])
                }
                function b(B, E) {
                    THREE.Loader.prototype.f3n(f, a.normals, B[E], B[E + 1], B[E + 2], B[E + 3], B[E + 4], B[E + 5], B[E + 6])
                }
                function j(B, E) {
                    THREE.Loader.prototype.f4(f, B[E], B[E + 1], B[E + 2], B[E + 3], B[E + 4])
                }
                function l(B, E) {
                    THREE.Loader.prototype.f4n(f, a.normals, B[E], B[E + 1], B[E + 2], B[E + 3], B[E + 4], B[E + 5], B[E + 6], B[E + 7], B[E + 8])
                }
                function p(B, E) {
                    var H, x, I, t, k, w, u, n, o;
                    H = B[E];
                    x = B[E + 1];
                    I = B[E + 2];
                    t = a.uvs[H * 2];
                    u = a.uvs[H * 2 + 1];
                    k = a.uvs[x * 2];
                    n = a.uvs[x * 2 + 1];
                    w = a.uvs[I * 2];
                    o = a.uvs[I * 2 + 1];
                    THREE.Loader.prototype.uv3(f.uvs, t, u, k, n, w, o);
                    if (a.uvs2) {
                        t = a.uvs2[H * 2];
                        u = a.uvs2[H * 2 + 1];
                        k = a.uvs2[x * 2];
                        n = a.uvs2[x * 2 + 1];
                        w = a.uvs2[I * 2];
                        o = a.uvs2[I * 2 + 1];
                        THREE.Loader.prototype.uv3(f.uvs2, t, 1 - u, k, 1 - n, w, 1 - o)
                    }
                }
                function A(B, E) {
                    var H, x, I, t, k, w, u, n, o, v, D, y;
                    H = B[E];
                    x = B[E + 1];
                    I = B[E + 2];
                    t = B[E + 3];
                    k = a.uvs[H * 2];
                    o = a.uvs[H * 2 + 1];
                    w = a.uvs[x * 2];
                    v = a.uvs[x * 2 + 1];
                    u = a.uvs[I * 2];
                    D = a.uvs[I * 2 + 1];
                    n = a.uvs[t * 2];
                    y = a.uvs[t * 2 + 1];
                    THREE.Loader.prototype.uv4(f.uvs, k, o, w, v, u, D, n, y);
                    if (a.uvs2) {
                        k = a.uvs2[H * 2];
                        o = a.uvs2[H * 2 + 1];
                        w = a.uvs2[x * 2];
                        v = a.uvs2[x * 2 + 1];
                        u = a.uvs2[I * 2];
                        D = a.uvs2[I * 2 + 1];
                        n = a.uvs2[t * 2];
                        y = a.uvs2[t * 2 + 1];
                        THREE.Loader.prototype.uv4(f.uvs2, k, 1 - o, w, 1 - v, u, 1 - D, n, 1 - y)
                    }
                }
                var q, m;
                q = 0;
                for (m = a.triangles_uv.length; q < m; q += 7) {
                    h(a.triangles_uv, q);
                    p(a.triangles_uv, q + 4)
                }
                q = 0;
                for (m = a.triangles_n_uv.length; q < m; q += 10) {
                    b(a.triangles_n_uv, q);
                    p(a.triangles_n_uv, q + 7)
                }
                q = 0;
                for (m = a.quads_uv.length; q < m; q += 9) {
                    j(a.quads_uv, q);
                    A(a.quads_uv, q + 5)
                }
                q = 0;
                for (m = a.quads_n_uv.length; q < m; q += 13) {
                    l(a.quads_n_uv, q);
                    A(a.quads_n_uv, q + 9)
                }
                q = 0;
                for (m = a.triangles.length; q < m; q += 4)
                    h(a.triangles, q);
                q = 0;
                for (m = a.triangles_n.length; q < m; q += 7)
                    b(a.triangles_n, q);
                q = 0;
                for (m = a.quads.length; q < m; q += 5)
                    j(a.quads, q);
                q = 0;
                for (m = a.quads_n.length; q < m; q += 9)
                    l(a.quads_n, q)
            }
            )();
            this.computeCentroids();
            this.computeFaceNormals();
            this.sortFacesByMaterial()
        };
        e.prototype = new THREE.Geometry;
        e.prototype.constructor = e;
        c(new e(d))
    },
    v: function(a, c, d, e) {
        a.vertices.push(new THREE.Vertex(new THREE.Vector3(c,d,e)))
    },
    f3: function(a, c, d, e, g) {
        a.faces.push(new THREE.Face3(c,d,e,null,a.materials[g]))
    },
    f4: function(a, c, d, e, g, f) {
        a.faces.push(new THREE.Face4(c,d,e,g,null,a.materials[f]))
    },
    f3n: function(a, c, d, e, g, f, h, b, j) {
        f = a.materials[f];
        var l = c[b * 3]
          , p = c[b * 3 + 1];
        b = c[b * 3 + 2];
        var A = c[j * 3]
          , q = c[j * 3 + 1];
        j = c[j * 3 + 2];
        a.faces.push(new THREE.Face3(d,e,g,[new THREE.Vector3(c[h * 3],c[h * 3 + 1],c[h * 3 + 2]), new THREE.Vector3(l,p,b), new THREE.Vector3(A,q,j)],f))
    },
    f4n: function(a, c, d, e, g, f, h, b, j, l, p) {
        h = a.materials[h];
        var A = c[j * 3]
          , q = c[j * 3 + 1];
        j = c[j * 3 + 2];
        var m = c[l * 3]
          , B = c[l * 3 + 1];
        l = c[l * 3 + 2];
        var E = c[p * 3]
          , H = c[p * 3 + 1];
        p = c[p * 3 + 2];
        a.faces.push(new THREE.Face4(d,e,g,f,[new THREE.Vector3(c[b * 3],c[b * 3 + 1],c[b * 3 + 2]), new THREE.Vector3(A,q,j), new THREE.Vector3(m,B,l), new THREE.Vector3(E,H,p)],h))
    },
    uv3: function(a, c, d, e, g, f, h) {
        var b = [];
        b.push(new THREE.UV(c,d));
        b.push(new THREE.UV(e,g));
        b.push(new THREE.UV(f,h));
        a.push(b)
    },
    uv4: function(a, c, d, e, g, f, h, b, j) {
        var l = [];
        l.push(new THREE.UV(c,d));
        l.push(new THREE.UV(e,g));
        l.push(new THREE.UV(f,h));
        l.push(new THREE.UV(b,j));
        a.push(l)
    },
    init_materials: function(a, c, d) {
        a.materials = [];
        for (var e = 0; e < c.length; ++e)
            a.materials[e] = [THREE.Loader.prototype.createMaterial(c[e], d)]
    },
    createMaterial: function(a, c) {
        function d(h) {
            h = Math.log(h) / Math.LN2;
            return Math.floor(h) == h
        }
        function e(h, b) {
            var j = new Image;
            j.onload = function() {
                if (!d(this.width) || !d(this.height)) {
                    var l = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2))
                      , p = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
                    h.image.width = l;
                    h.image.height = p;
                    h.image.getContext("2d").drawImage(this, 0, 0, l, p)
                } else
                    h.image = this;
                h.image.loaded = 1
            }
            ;
            j.src = b
        }
        var g, f;
        if (a.map_diffuse && c) {
            f = document.createElement("canvas");
            g = new THREE.MeshLambertMaterial({
                map: new THREE.Texture(f)
            });
            e(g.map, c + "/" + a.map_diffuse)
        } else if (a.col_diffuse) {
            g = (a.col_diffuse[0] * 255 << 16) + (a.col_diffuse[1] * 255 << 8) + a.col_diffuse[2] * 255;
            g = new THREE.MeshLambertMaterial({
                color: g,
                opacity: a.transparency
            })
        } else
            g = a.a_dbg_color ? new THREE.MeshLambertMaterial({
                color: a.a_dbg_color
            }) : new THREE.MeshLambertMaterial({
                color: 15658734
            });
        if (a.map_lightmap && c) {
            f = document.createElement("canvas");
            g.light_map = new THREE.Texture(f);
            e(g.light_map, c + "/" + a.map_lightmap)
        }
        return g
    },
    extractUrlbase: function(a) {
        a = a.split("/");
        a.pop();
        return a.join("/")
    }
};
