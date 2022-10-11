/**
 *  @file
 *
 *  <p>Interseção entre círculos e polígonos convexos.</p>
 *
 *  <pre>
 *  Documentation:
 *  - Ubuntu:
 *     - sudo apt install jsdoc-toolkit
 *  - MacOS:
 *     - sudo port install npm7 (or npm8)
 *     - sudo npm install -g jsdoc
 *  - jsdoc -d docCircRec circRec.js
 *
 *  Requirements:
 *  - npm init
 *  - npm install gl-matrix
 *  </pre>
 *
 *  @author Paulo Roma & Claudio Esperança
 *  @since 08/08/2022
 *  @see http://lcg.ufrj.br/cwdc/10-html5css3/circRec.html
 *  @see <a href="../circRecNoSource.js">source</a>
 *  @see https://observablehq.com/@esperanc/configurando-um-triangulo-trianguloIso
 *  @see https://drive.google.com/file/d/1MjlBWjBP-5ijNTaPDL7-7OOnd8906z6Y/view
 *  @see https://glmatrix.net
 *  @see https://dens.website/tutorials/webgl/gl-matrix
 *  @see <img src="../rect-circle.png" width="768">
 */

 "use strict";

 
 /**
  * Two dimensional vector.
  * @type {glvec2}
  */
 
 /**
  * Fills the canvas with a solid color and border.
  * @param {CanvasRenderingContext2D} ctx canvas context.
  * @param {Number} w width.
  * @param {Number} h height.
  * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  */
 function fillCanvas(ctx, w, h) {
   ctx.fillStyle = "antiquewhite";
   ctx.strokeStyle = "brown";
   ctx.lineWidth = 10;
   // clear canvas.
   ctx.fillRect(0, 0, w, h);
   // draw canvas border.
   ctx.strokeRect(0, 0, w, h);
   ctx.lineWidth = 1;
 }
 
 /**
  * Returns the closest point of the border of the polygon poly to p.
  * @param {Array<Number,Number>} p point.
  * @param {Array<Array<Number,Number>>} poly polygon.
  * @returns {Array<Number,Number>} closest point.
  * @see <img src="../closest.jpg" width="384">
  */
 function closestPolyPoint(p, poly) {}
 
 /**
  * <p>Returns true iff convex polygons poly and poly2 intersect.</p>
  * The algorithm is based on the separated axis theorem (SAT), which states that, <br>
  * if two polys do not intersect, then there is a separation line between them, <br>
  * in such a way that the vertices of poly are on one side of the line,<br>
  * and the vertices of poly2 are on the other side.
  * <p>It is enough to test the edges of each polygon as a separation line.<br>
  * If none of them do separate the polys, then they must intersect each other.</p>
  * Check the <a href="../docUtil/global.html#orient">orient</a> predicate for deciding
  * on which side of a line a point lies.
  * @param {Array<Array<Number,Number>>} poly first polygon.
  * @param {Array<Array<Number,Number>>} poly2 second polygon.
  * @returns {Boolean} intersect or not.
  * @see http://0x80.pl/articles/convex-polygon-intersection/article.html
  * @see <img src="../sample.png" width="196">
  */
 function convexPolysIntersect(poly, poly2) {}
 
 /**
  * Returns true iff convex polygon poly {@link closestPolyPoint intersects}
  * a circle with the given center and radius.
  * @param {Array<Array<Number,Number>>} poly polygon.
  * @param {Array<Number,Number>} center circle center.
  * @param {Number} radius circle radius.
  * @returns {Boolean} intersect or not.
  */
 
 /**
  * Returns true iff a circle intersects another circle with the given center and radius.
  * @param {Array<Number,Number>} center1 first circle center.
  * @param {Number} radius1 first circle radius.
  * @param {Array<Number,Number>} center2 second circle center.
  * @param {Number} radius2 second circle radius.
  * @returns {Boolean} intersect or not.
  * @see https://milania.de/blog/Intersection_area_of_two_circles_with_implementation_in_C%2B%2B
  * @see <img src="../IntersectingCirclesArea_CircularSegmentsSmallAngle.png" width="320">
  */

 const { mat2, mat3, mat4, vec2, vec3, vec4 } = glMatrix;
 
 /**
  * Returns a rectangular polygon in the form of a vertex circulation,
  * given:
  * <ul>
  * <li>its center, </li>
  * <li>a vector (u) pointing from the center to the midpoint
  *       of one of its sides, </li>
  * <li>and the size of that side.</li>
  * </ul>
  * @param {Array<Number,Number>} center retangulo center.
  * @param {Array<Number,Number>} u orientation vector.
  * @param {Number} size side size.
  * @returns {Array<Array<Number,Number>>} a retangulo (a polygon).
  * @see <img src="../cRv2l.png" width="320">
  */
 
 /**
  * Returns an array with the mid-points of the edges of polygon poly.
  * @param {Array<Array<Number,Number>>} poly polygon.
  * @returns {Array<Array<Number,Number>>} mid-points.
  */
 
 /**
  * <p>Demo: Teste de interseção entre triângulos.</p>
  *
  * Mova interativamente os pontos âncora para alterar a configuração dos triângulos.<br>
  * Se houver interseção, o desenho será vermelho, caso contrário, preto.
  *
  * <p>Triângulos são descritos por objetos:</p>
  * { basePoint: [270, 350], oppositeVertex: [300, 200], color: "black" }
  *
  * @name trianguloIsoDemo
  * @function
  */
 
 /**
  * Returns the 3 vertices of an trianguloIso triangle
  * defined by the center point of its base and the
  * opposite vertex.
  * @param {Array<Number,Number>} basePoint base midpoint.
  * @param {Array<Number,Number>} oppositeVertex opposite vertex.
  * @return {Array<Array<Number,Number>, Array<Number,Number>, Array<Number,Number>>}
  * an trianguloIso triangle (a convex polygon).
  * @see https://en.wikipedia.org/wiki/trianguloIso_triangle
  * @see <img src="../trianguloIso-Triangle.png" width="256">
  */
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const x = urlParams.get('w') || '500';
 const y = urlParams.get('h') || '500';

 let canvas = document.getElementById('theCanvas1');
 canvas.width = x;
 canvas.height = y;


let vec2d = (function () {
	/**
	 * @member {Object} glvec2 an extended vec2 from gl-matrix.
	 */
	let glvec2 = Object.assign({}, vec2);
	let glmat3 = mat3;

	/**
	 * Orientation between 3 points.
	 * @param {Array<Number,Number>} a first point.
	 * @param {Array<Number,Number>} b second point.
	 * @param {Array<Number,Number>} c third point.
	 * @returns {Number} orientation.
	 * @see https://en.wikipedia.org/wiki/Cross_product
	 * @see http://www.cs.tufts.edu/comp/163/OrientationTests.pdf
	 * @see <img src="../orient.png" width="320">
	 * @global
	 * @function
	 */
	glvec2.orient = function (a, b, c) {
		return Math.sign(
			glmat3.determinant([1, a[0], a[1], 1, b[0], b[1], 1, c[0], c[1]]),
		);
	};

	/**
	 * Returns true iff line segments a-b and c-d intersect.
	 * @param {Array<Number,Number>} a starting vertex.
	 * @param {Array<Number,Number>} b end vertex.
	 * @param {Array<Number,Number>} c starting vertex.
	 * @param {Array<Number,Number>} d end vertex.
	 * @returns {Boolean} intersect or not.
	 * @global
	 * @function
	 */
	glvec2.segmentsIntersect = function (a, b, c, d) {
		return (
			glvec2.orient(a, b, c) != glvec2.orient(a, b, d) &&
			glvec2.orient(c, d, a) != glvec2.orient(c, d, b)
		);
	};

	/**
	 * <p>Line intersection.</p>
	 *
	 * Sets 'out' to the intersection point between
	 * lines [x1,y1]-[x2,y2] and [x3,y3]-[x4,y4].
	 * @param {Array<Number,Number>} out intersection point.
	 * @param {Array<Number,Number>} param1 starting vertex.
	 * @param {Array<Number,Number>} param2 end vertex.
	 * @param {Array<Number,Number>} param3 starting vertex.
	 * @param {Array<Number,Number>} param4 end vertex.
	 * @returns {Array<Number,Number>} intersection point.
	 * @see https://en.wikipedia.org/wiki/Lineâ€“line_intersection
	 * @global
	 * @function
	 */
	glvec2.lineIntersection = function (
		out,
		[x1, y1],
		[x2, y2],
		[x3, y3],
		[x4, y4],
	) {
		const D = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
		const a = x1 * y2 - y1 * x2,
			b = x3 * y4 - y3 * x4;

		out[0] = (a * (x3 - x4) - (x1 - x2) * b) / D;
		out[1] = (a * (y3 - y4) - (y1 - y2) * b) / D;
		return out;
	};
	return glvec2;
})();

const curry = (fn) => {
	const curried = (...args) => {
		if (args.length >= fn.length) {
			return fn(...args);
		}
		return (...argsNext) => curried(...args, ...argsNext);
	};
	return curried;
};

const vScale = curry((sc, v) => [v[0] * sc, v[1] * sc]);
const vAdd = curry((v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]]);
const vMidpoint = curry((v, v2) => vScale(0.5, vAdd(v, v2)));

/**
 * Fills the canvas with a solid color and border.
 * @param {CanvasRenderingContext2D} ctx canvas context.
 * @param {Number} w width.
 * @param {Number} h height.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */

// Check if polygon degenerates to a line.
function pylygon(poly) {
	const p0 = poly[0];
	for (let i = 1; i < poly.length; i++) {
		if (vec2d.equals(p0, poly[i])) return true;
	}
	return false;
}

function retangulo(points) {
	let vertices = [];
	let center = points[0];
	for (let i = 1; i < 5; i++) {
		let v1 = vec2.sub([], points[i], center);
		let v2 = vec2.sub([], points[(i % 4) + 1], center);
		vertices.push(vec2.add([], vec2.add([], v1, v2), center));
	}
	//return all the vertices of the retangulo using the medians and the center
	return vertices;
}

function trianguloIso(tri) {
	let basePoint = tri[0];
	let oppositeVertex = tri[1];
	const u = vec2d.sub([], basePoint, oppositeVertex);
	const v = [-u[1], u[0]];
	const w = [u[1], -u[0]];
	return [
		oppositeVertex,
		vec2d.add([], basePoint, v),
		vec2d.add([], basePoint, w),
	];
}

function radius(points) {
	let radius = Math.abs(vec2.distance(points[0], points[1]));
	return radius;
}

function distToSegment(p, a, b) {
	const v = vec2d.sub([], b, a);
	const vlen = vec2d.dist(a, b);
	const vnorm = vec2d.scale([], v, 1 / vlen);
	const ap = vec2d.sub([], p, a);
	const t = vec2d.dot(vnorm, ap);
	if (t < 0) return vec2d.dist(p, a);
	if (t > vlen) return vec2d.dist(p, b);
	return vec2d.len(vec2d.sub([], ap, vec2d.scale([], vnorm, t)));
}

function pointInConvexPoly(p, poly) {
	let prevPoint = poly[poly.length - 1];
	let prevOrient = 0;
	for (let q of poly) {
		const o = vec2d.orient(prevPoint, q, p);
		if (Math.abs(o - prevOrient) > 1) return false;
		prevOrient = o;
		prevPoint = q;
	}
	return true;
}

function redondoIntersec(c1, c2) {
	let center1 = c1[0];
	let radius1 = vec2d.dist(c1[0], c1[1]);
	let center2 = c2[0];
	let radius2 = vec2d.dist(c2[0], c2[1]);
	let d = vec2d.dist(center1, center2);
	if (d > radius1 + radius2) {
		return false;
	}
	return true;
}

// Check if any point in the polygon is inside the circle.
function circlePolyIntersection(c, poly) {
	let center = c[0];
	let radius = vec2d.dist(c[0], c[1]);
	for (let p of poly) {
		if (vec2d.dist(center, p) < radius) return true;
	}
	return false;
}

// Check if polygon is a point
function isPoint(poly) {
	let p0 = poly[0];
	for (let i = 1; i < poly.length; i++) {
		if (!vec2d.equals(p0, poly[i])) return false;
	}
	return true;
}

function getInicialTri(){return [
	[
		[380, 50 + 100],
		[380, 50],
	],
	[
		[380, 200 + 100],
		[380, 200],
	],
	[
		[380, 400 + 50],
		[380, 350],
	],
];}

function circleRectIntersection(c, r) {
	let circleCenter = c[0];
	let radius = vec2d.dist(c[0], c[1]);
	let retanguloPoints = retangulo(r);

	if (isPoint(retanguloPoints)) {
		return redondoIntersec(c, [
			retanguloPoints[0],
			retanguloPoints[0],
		]);
	}

	if (
		pointInConvexPoly(circleCenter, retanguloPoints) &&
		!pylygon(retanguloPoints)
	) {
		return true;
	}

	for (let i = 0; i < 4; i++) {
		if (vec2d.equals(retanguloPoints[i], retanguloPoints[(i + 1) % 4]))
			continue;
		if (
			distToSegment(
				circleCenter,
				retanguloPoints[i],
				retanguloPoints[(i + 1) % 4],
			) <= radius
		)
			return true;
	}
	return false;
}

function circleTriangleIntersection(c, t) {
	let circleCenter = c[0];
	let radius = vec2d.dist(c[0], c[1]);
	let trianglePoints = trianguloIso(t);

	if (isPoint(trianglePoints)) {
		return redondoIntersec(c, [trianglePoints[0], trianglePoints[0]]);
	}

	if (
		pointInConvexPoly(circleCenter, trianglePoints) &&
		!pylygon(trianglePoints)
	) {
		return true;
	}

	for (let i = 0; i < 3; i++) {
		if (vec2d.equals(trianglePoints[i], trianglePoints[(i + 1) % 3])) continue;
		if (
			distToSegment(
				circleCenter,
				trianglePoints[i],
				trianglePoints[(i + 1) % 3],
			) <= radius
		)
			return true;
	}

	return false;
}

function rectRectintersection(rect, rectTwo) {
	rect = retangulo(rect);
	rectTwo = retangulo(rectTwo);

	let V = SAT.Vector;
	let P = SAT.Polygon;

	let polygon1 = new P(new V(), [
		new V(rect[0][0], rect[0][1]),
		new V(rect[1][0], rect[1][1]),
		new V(rect[2][0], rect[2][1]),
		new V(rect[3][0], rect[3][1]),
	]);

	let polygon2 = new P(new V(), [
		new V(rectTwo[0][0], rectTwo[0][1]),
		new V(rectTwo[1][0], rectTwo[1][1]),
		new V(rectTwo[2][0], rectTwo[2][1]),
		new V(rectTwo[3][0], rectTwo[3][1]),
	]);

	let response;
	let collided = SAT.testPolygonPolygon(polygon1, polygon2, response);

	return collided;
}

function rectTriangleIntersection(rect, triangle) {
	rect = retangulo(rect);
	triangle = trianguloIso(triangle);

	let V = SAT.Vector;
	let P = SAT.Polygon;

	let polygon1 = new P(new V(), [
		new V(rect[0][0], rect[0][1]),
		new V(rect[1][0], rect[1][1]),
		new V(rect[2][0], rect[2][1]),
		new V(rect[3][0], rect[3][1]),
	]);

	let polygon2 = new P(new V(), [
		new V(triangle[0][0], triangle[0][1]),
		new V(triangle[1][0], triangle[1][1]),
		new V(triangle[2][0], triangle[2][1]),
	]);

	let response;
	let collided = SAT.testPolygonPolygon(polygon1, polygon2, response);

	return collided;
}
function getInicialRedondo(){return [
	[
		[230, 100],
		[230, 100 - 50],
	],
	[
		[230, 250],
		[230 + 50, 250],
	],
	[
		[230, 400],
		[230, 400 + 50],
	],
];}
function rectCircleIntersection(rect, circle) {
	return circleRectIntersection(circle, rect);
}

function triangleRectIntersection(triangle, rect) {
	return rectTriangleIntersection(rect, triangle);
}

function triangleTriangleIntersection(triangle, triangleTwo) {
	triangle = trianguloIso(triangle);
	triangleTwo = trianguloIso(triangleTwo);

	let V = SAT.Vector;
	let P = SAT.Polygon;

	let polygon1 = new P(new V(), [
		new V(triangle[0][0], triangle[0][1]),
		new V(triangle[1][0], triangle[1][1]),
		new V(triangle[2][0], triangle[2][1]),
	]);

	let polygon2 = new P(new V(), [
		new V(triangleTwo[0][0], triangleTwo[0][1]),
		new V(triangleTwo[1][0], triangleTwo[1][1]),
		new V(triangleTwo[2][0], triangleTwo[2][1]),
	]);

	let response;
	let collided = SAT.testPolygonPolygon(polygon1, polygon2, response);

	return collided;
}

function triangleCircleIntersection(triangle, circle) {
	return circleTriangleIntersection(circle, triangle);
}

function getInicialRet() {
	return [
		[
			[100, 100],
			[100, 100 + 25],
			[100 + 50, 100],
			[100, 100 - 25],
			[100 - 50, 100],
		],
		[
			[100, 250],
			[100, 250 + 50],
			[100 + 25, 250],
			[100, 250 - 50],
			[100 - 25, 250],
		],
		[
			[100, 400],
			[100, 400 + 50],
			[100 + 50, 400],
			[100, 400 - 50],
			[100 - 50, 400],
		],
	];
}

(function isoscelesDemo() {
	const demo = document.querySelector('#theCanvas1');
	const ctx = demo.getContext('2d');
	let [w, h] = [demo.clientWidth, demo.clientHeight];
	const rect = getInicialRet()

	const circle = getInicialRedondo()

	const triangle = getInicialTri()

	const update = () => {
		ctx.clearRect(0, 0, w, h);
		fillCanvas(ctx, w, h);

		for (let r of rect) {
			ctx.fillStyle = ctx.strokeStyle = 'black';
			for (let r2 of rect) {
				if (r == r2) continue;
				if (rectRectintersection(r, r2)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let c of circle) {
				if (rectCircleIntersection(r, c)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let t of triangle) {
				if (rectTriangleIntersection(r, t)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let p of r) {
				ctx.beginPath();
				ctx.arc(...p, 5, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.beginPath();
			for (let p of retangulo(r)) {
				ctx.lineTo(...p);
			}
			ctx.closePath();
			ctx.stroke();
		}

		for (let c of circle) {
			ctx.fillStyle = ctx.strokeStyle = 'black';

			for (let c2 of circle) {
				if (c == c2) continue;
				if (redondoIntersec(c, c2)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let r of rect) {
				if (circleRectIntersection(c, r)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let t of triangle) {
				if (circleTriangleIntersection(c, t)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let p of c) {
				ctx.beginPath();
				ctx.arc(...p, 5, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.beginPath();
			ctx.arc(c[0][0], c[0][1], radius(c), 0, Math.PI * 2);

			ctx.stroke();
		}

		for (let t of triangle) {
			ctx.fillStyle = ctx.strokeStyle = 'black';

			for (let t2 of triangle) {
				if (t == t2) continue;
				if (triangleTriangleIntersection(t, t2)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let r of rect) {
				if (triangleRectIntersection(t, r)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let c of circle) {
				if (triangleCircleIntersection(t, c)) {
					ctx.fillStyle = ctx.strokeStyle = 'red';
				}
			}

			for (let p of t) {
				ctx.beginPath();
				ctx.arc(...p, 5, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.beginPath();
			for (let p of trianguloIso(t)) {
				ctx.lineTo(...p);
			}
			ctx.closePath();
			ctx.stroke();
		}
	};

	let prevMouse = null;
	//do not touch
	const dragBase = (e, rect) => {
		let mouse = [e.offsetX, e.offsetY];
		let delta = vec2.sub([], mouse, prevMouse);
		prevMouse = mouse;
		vec2.add(rect[0], rect[0], delta);
		for (let i = 1; i < 5; i++) {
			vec2.add(rect[i], rect[i], delta);
		}
	};
	//do not touch

	const dragCircleCenter = (e, circle) => {
		let mouse = [e.offsetX, e.offsetY];
		let delta = vec2.sub([], mouse, prevMouse);
		prevMouse = mouse;
		vec2.add(circle[0], circle[0], delta);
		vec2.add(circle[1], circle[1], delta);
	};

	const dragCircleEdge = (e, circle) => {
		let mouse = [e.offsetX, e.offsetY];
		let delta = vec2.sub([], mouse, prevMouse);
		prevMouse = mouse;
		vec2.add(circle[1], circle[1], delta);
	};

	const dragVtx = (e, i, rect) => {
		let mouse = [e.offsetX, e.offsetY];
		let vtx = rect[i];
		let delta = vec2.sub([], mouse, prevMouse);
		prevMouse = mouse;
		vec2.add(vtx, vtx, delta);
		vec2.sub(rect[((i + 1) % 4) + 1], rect[((i + 1) % 4) + 1], delta);

		let size = Math.abs(vec2.dist(rect[(i % 4) + 1], rect[0]));

		vec2.rotate(rect[(i % 4) + 1], vtx, rect[0], -Math.PI / 2);
		vec2.sub(rect[(i % 4) + 1], rect[(i % 4) + 1], rect[0]);
		vec2.normalize(rect[(i % 4) + 1], rect[(i % 4) + 1]);
		vec2.scale(rect[(i % 4) + 1], rect[(i % 4) + 1], size);
		vec2.add(rect[(i % 4) + 1], rect[(i % 4) + 1], rect[0]);

		vec2.rotate(
			rect[((i - 2 + 4) % 4) + 1],
			rect[(i % 4) + 1],
			rect[0],
			Math.PI,
		);
	};

	const dragTriangleCenter = (e, tri) => {
		let mouse = [e.offsetX, e.offsetY];
		let delta = vec2d.sub([], mouse, prevMouse);
		prevMouse = mouse;
		let v = vec2d.sub([], tri[1], tri[0]);
		vec2d.add(tri[0], tri[0], delta);
		vec2d.add(tri[1], tri[0], v);
	};

	const dragTriangleEdge = (e, tri) => {
		let mouse = [e.offsetX, e.offsetY];
		let delta = vec2d.sub([], mouse, prevMouse);
		prevMouse = mouse;
		vec2d.add(tri[1], tri[1], delta);
	};

	demo.onmousedown = (e) => {
		const mouse = [e.offsetX, e.offsetY];
		prevMouse = mouse;
		demo.onmousemove = null;
		for (let r of rect) {
			for (let i of [0, 1, 2, 3, 4]) {
				let p = r[i];
				let d = vec2.distance(mouse, p);
				if (d <= 5) {
					demo.onmousemove =
						i == 0
							? (e) => {
									dragBase(e, r);
									update();
							  }
							: (e) => {
									dragVtx(e, i, r);
									update();
							  };
				}
			}
		}

		for (let c of circle) {
			for (let i of [0, 1]) {
				let p = c[i];
				let d = vec2.distance(mouse, p);
				if (d <= 5) {
					demo.onmousemove =
						i == 0
							? (e) => {
									dragCircleCenter(e, c);
									update();
							  }
							: (e) => {
									dragCircleEdge(e, c);
									update();
							  };
				}
			}
		}

		for (let t of triangle) {
			for (let i of [0, 1]) {
				let p = t[i];
				let d = vec2.distance(mouse, p);
				if (d <= 5) {
					demo.onmousemove =
						i == 0
							? (e) => {
									dragTriangleCenter(e, t);
									update();
							  }
							: (e) => {
									dragTriangleEdge(e, t);
									update();
							  };
				}
			}
		}
	};

	demo.onmouseup = () => {
		demo.onmousemove = null;
	};
	update();
})();


/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.4.3

Copyright (c) 2015-2021, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).glMatrix={})}(this,(function(t){"use strict";var n=1e-6,a="undefined"!=typeof Float32Array?Float32Array:Array,r=Math.random;var u=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var e=Object.freeze({__proto__:null,EPSILON:n,get ARRAY_TYPE(){return a},RANDOM:r,setMatrixArrayType:function(t){a=t},toRadian:function(t){return t*u},equals:function(t,a){return Math.abs(t-a)<=n*Math.max(1,Math.abs(t),Math.abs(a))}});function o(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function i(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}var h=o,c=i,s=Object.freeze({__proto__:null,create:function(){var t=new a(4);return a!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var n=new a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,n,r,u){var e=new a(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=u,e},set:function(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t},transpose:function(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null},adjoint:function(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:o,rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t},scale:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3])},LDU:function(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t},subtract:i,exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=a[0],h=a[1],c=a[2],s=a[3];return Math.abs(r-i)<=n*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=n*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=n*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-s)<=n*Math.max(1,Math.abs(o),Math.abs(s))},multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},mul:h,sub:c});function M(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function f(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}var l=M,v=f,b=Object.freeze({__proto__:null,create:function(){var t=new a(6);return a!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var n=new a(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,n,r,u,e,o){var i=new a(6);return i[0]=t,i[1]=n,i[2]=r,i[3]=u,i[4]=e,i[5]=o,i},set:function(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:M,rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t},scale:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t},translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t},subtract:f,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return Math.abs(r-c)<=n*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=n*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-M)<=n*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-f)<=n*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=n*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(h-v)<=n*Math.max(1,Math.abs(h),Math.abs(v))},mul:l,sub:v});function m(){var t=new a(9);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function d(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=p*r+x*o+y*c,t[7]=p*u+x*i+y*s,t[8]=p*e+x*h+y*M,t}function p(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}var x=d,y=p,q=Object.freeze({__proto__:null,create:m,fromMat4:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},clone:function(t){var n=new a(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromValues:function(t,n,r,u,e,o,i,h,c){var s=new a(9);return s[0]=t,s[1]=n,s[2]=r,s[3]=u,s[4]=e,s[5]=o,s[6]=i,s[7]=h,s[8]=c,s},set:function(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null},adjoint:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t},determinant:function(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)},multiply:d,translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t},rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t},scale:function(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t},normalFromMat4:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-u*o,y=a*c-e*o,q=r*h-u*i,g=r*c-e*i,_=u*c-e*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,O=M*d-l*b,j=f*d-l*m,P=p*j-x*O+y*z+q*R-g*w+_*A;return P?(P=1/P,t[0]=(i*j-h*O+c*z)*P,t[1]=(h*R-o*j-c*w)*P,t[2]=(o*O-i*R+c*A)*P,t[3]=(u*O-r*j-e*z)*P,t[4]=(a*j-u*R+e*w)*P,t[5]=(r*R-a*O-e*A)*P,t[6]=(b*_-m*g+d*q)*P,t[7]=(m*y-v*_-d*x)*P,t[8]=(v*g-b*y+d*p)*P,t):null},projection:function(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t},subtract:p,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=t[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return Math.abs(r-f)<=n*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=n*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=n*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=n*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=n*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=n*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-p)<=n*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-x)<=n*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(M-y)<=n*Math.max(1,Math.abs(M),Math.abs(y))},mul:x,sub:y});function g(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],p=n[15],x=a[0],y=a[1],q=a[2],g=a[3];return t[0]=x*r+y*i+q*M+g*b,t[1]=x*u+y*h+q*f+g*m,t[2]=x*e+y*c+q*l+g*d,t[3]=x*o+y*s+q*v+g*p,x=a[4],y=a[5],q=a[6],g=a[7],t[4]=x*r+y*i+q*M+g*b,t[5]=x*u+y*h+q*f+g*m,t[6]=x*e+y*c+q*l+g*d,t[7]=x*o+y*s+q*v+g*p,x=a[8],y=a[9],q=a[10],g=a[11],t[8]=x*r+y*i+q*M+g*b,t[9]=x*u+y*h+q*f+g*m,t[10]=x*e+y*c+q*l+g*d,t[11]=x*o+y*s+q*v+g*p,x=a[12],y=a[13],q=a[14],g=a[15],t[12]=x*r+y*i+q*M+g*b,t[13]=x*u+y*h+q*f+g*m,t[14]=x*e+y*c+q*l+g*d,t[15]=x*o+y*s+q*v+g*p,t}function A(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,p=o*c;return t[0]=1-(l+b),t[1]=M+p,t[2]=f-d,t[3]=0,t[4]=M-p,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function w(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function R(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function z(t,n){var r=new a(3);R(r,n);var u=1/r[0],e=1/r[1],o=1/r[2],i=n[0]*u,h=n[1]*e,c=n[2]*o,s=n[4]*u,M=n[5]*e,f=n[6]*o,l=n[8]*u,v=n[9]*e,b=n[10]*o,m=i+M+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(f-v)/d,t[1]=(l-c)/d,t[2]=(h-s)/d):i>M&&i>b?(d=2*Math.sqrt(1+i-M-b),t[3]=(f-v)/d,t[0]=.25*d,t[1]=(h+s)/d,t[2]=(l+c)/d):M>b?(d=2*Math.sqrt(1+M-i-b),t[3]=(l-c)/d,t[0]=(h+s)/d,t[1]=.25*d,t[2]=(f+v)/d):(d=2*Math.sqrt(1+b-i-M),t[3]=(h-s)/d,t[0]=(l+c)/d,t[1]=(f+v)/d,t[2]=.25*d),t}function O(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}var j=O;function P(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}var S=P;function E(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}var T=_,D=E,F=Object.freeze({__proto__:null,create:function(){var t=new a(16);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var n=new a(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},fromValues:function(t,n,r,u,e,o,i,h,c,s,M,f,l,v,b,m){var d=new a(16);return d[0]=t,d[1]=n,d[2]=r,d[3]=u,d[4]=e,d[5]=o,d[6]=i,d[7]=h,d[8]=c,d[9]=s,d[10]=M,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:g,transpose:function(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-u*o,y=a*c-e*o,q=r*h-u*i,g=r*c-e*i,_=u*c-e*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,O=M*d-l*b,j=f*d-l*m,P=p*j-x*O+y*z+q*R-g*w+_*A;return P?(P=1/P,t[0]=(i*j-h*O+c*z)*P,t[1]=(u*O-r*j-e*z)*P,t[2]=(b*_-m*g+d*q)*P,t[3]=(f*g-M*_-l*q)*P,t[4]=(h*R-o*j-c*w)*P,t[5]=(a*j-u*R+e*w)*P,t[6]=(m*y-v*_-d*x)*P,t[7]=(s*_-f*y+l*x)*P,t[8]=(o*O-i*R+c*A)*P,t[9]=(r*R-a*O-e*A)*P,t[10]=(v*g-b*y+d*p)*P,t[11]=(M*y-s*g-l*p)*P,t[12]=(i*w-o*z-h*A)*P,t[13]=(a*z-r*w+u*A)*P,t[14]=(b*x-v*q-m*p)*P,t[15]=(s*q-M*x+f*p)*P,t):null},adjoint:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t},determinant:function(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)},multiply:_,translate:function(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t},scale:function(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},rotate:function(t,a,r,u){var e,o,i,h,c,s,M,f,l,v,b,m,d,p,x,y,q,g,_,A,w,R,z,O,j=u[0],P=u[1],S=u[2],E=Math.hypot(j,P,S);return E<n?null:(j*=E=1/E,P*=E,S*=E,e=Math.sin(r),i=1-(o=Math.cos(r)),h=a[0],c=a[1],s=a[2],M=a[3],f=a[4],l=a[5],v=a[6],b=a[7],m=a[8],d=a[9],p=a[10],x=a[11],y=j*j*i+o,q=P*j*i+S*e,g=S*j*i-P*e,_=j*P*i-S*e,A=P*P*i+o,w=S*P*i+j*e,R=j*S*i+P*e,z=P*S*i-j*e,O=S*S*i+o,t[0]=h*y+f*q+m*g,t[1]=c*y+l*q+d*g,t[2]=s*y+v*q+p*g,t[3]=M*y+b*q+x*g,t[4]=h*_+f*A+m*w,t[5]=c*_+l*A+d*w,t[6]=s*_+v*A+p*w,t[7]=M*_+b*A+x*w,t[8]=h*R+f*z+m*O,t[9]=c*R+l*z+d*O,t[10]=s*R+v*z+p*O,t[11]=M*R+b*z+x*O,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)},rotateX:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t},rotateY:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t},rotateZ:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,a,r){var u,e,o,i=r[0],h=r[1],c=r[2],s=Math.hypot(i,h,c);return s<n?null:(i*=s=1/s,h*=s,c*=s,u=Math.sin(a),o=1-(e=Math.cos(a)),t[0]=i*i*o+e,t[1]=h*i*o+c*u,t[2]=c*i*o-h*u,t[3]=0,t[4]=i*h*o-c*u,t[5]=h*h*o+e,t[6]=c*h*o+i*u,t[7]=0,t[8]=i*c*o+h*u,t[9]=h*c*o-i*u,t[10]=c*c*o+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:A,fromQuat2:function(t,n){var r=new a(3),u=-n[0],e=-n[1],o=-n[2],i=n[3],h=n[4],c=n[5],s=n[6],M=n[7],f=u*u+e*e+o*o+i*i;return f>0?(r[0]=2*(h*i+M*u+c*o-s*e)/f,r[1]=2*(c*i+M*e+s*u-h*o)/f,r[2]=2*(s*i+M*o+h*e-c*u)/f):(r[0]=2*(h*i+M*u+c*o-s*e),r[1]=2*(c*i+M*e+s*u-h*o),r[2]=2*(s*i+M*o+h*e-c*u)),A(t,n,r),t},getTranslation:w,getScaling:R,getRotation:z,fromRotationTranslationScale:function(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,p=i*c,x=i*s,y=r[0],q=r[1],g=r[2];return t[0]=(1-(v+m))*y,t[1]=(f+x)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(f-x)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+p)*g,t[9]=(b-d)*g,t[10]=(1-(M+v))*g,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,p=h*c,x=h*s,y=h*M,q=r[0],g=r[1],_=r[2],A=u[0],w=u[1],R=u[2],z=(1-(b+d))*q,O=(l+y)*q,j=(v-x)*q,P=(l-y)*g,S=(1-(f+d))*g,E=(m+p)*g,T=(v+x)*_,D=(m-p)*_,F=(1-(f+b))*_;return t[0]=z,t[1]=O,t[2]=j,t[3]=0,t[4]=P,t[5]=S,t[6]=E,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=a[0]+A-(z*A+P*w+T*R),t[13]=a[1]+w-(O*A+S*w+D*R),t[14]=a[2]+R-(j*A+E*w+F*R),t[15]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t},perspectiveNO:O,perspective:j,perspectiveZO:function(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=u*e,t[14]=u*r*e):(t[10]=-1,t[14]=-r),t},perspectiveFromFieldOfView:function(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t},orthoNO:P,ortho:S,orthoZO:function(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=e*c,t[15]=1,t},lookAt:function(t,a,r,u){var e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2],p=u[0],x=u[1],y=u[2],q=r[0],_=r[1],A=r[2];return Math.abs(b-q)<n&&Math.abs(m-_)<n&&Math.abs(d-A)<n?g(t):(M=b-q,f=m-_,l=d-A,e=x*(l*=v=1/Math.hypot(M,f,l))-y*(f*=v),o=y*(M*=v)-p*l,i=p*f-x*M,(v=Math.hypot(e,o,i))?(e*=v=1/v,o*=v,i*=v):(e=0,o=0,i=0),h=f*i-l*o,c=l*e-M*i,s=M*o-f*e,(v=Math.hypot(h,c,s))?(h*=v=1/v,c*=v,s*=v):(h=0,c=0,s=0),t[0]=e,t[1]=h,t[2]=M,t[3]=0,t[4]=o,t[5]=c,t[6]=f,t[7]=0,t[8]=i,t[9]=s,t[10]=l,t[11]=0,t[12]=-(e*b+o*m+i*d),t[13]=-(h*b+c*m+s*d),t[14]=-(M*b+f*m+l*d),t[15]=1,t)},targetTo:function(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t},subtract:E,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],p=t[15],x=a[0],y=a[1],q=a[2],g=a[3],_=a[4],A=a[5],w=a[6],R=a[7],z=a[8],O=a[9],j=a[10],P=a[11],S=a[12],E=a[13],T=a[14],D=a[15];return Math.abs(r-x)<=n*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(u-y)<=n*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(e-q)<=n*Math.max(1,Math.abs(e),Math.abs(q))&&Math.abs(o-g)<=n*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-_)<=n*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(h-A)<=n*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(c-w)<=n*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(s-R)<=n*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(M-z)<=n*Math.max(1,Math.abs(M),Math.abs(z))&&Math.abs(f-O)<=n*Math.max(1,Math.abs(f),Math.abs(O))&&Math.abs(l-j)<=n*Math.max(1,Math.abs(l),Math.abs(j))&&Math.abs(v-P)<=n*Math.max(1,Math.abs(v),Math.abs(P))&&Math.abs(b-S)<=n*Math.max(1,Math.abs(b),Math.abs(S))&&Math.abs(m-E)<=n*Math.max(1,Math.abs(m),Math.abs(E))&&Math.abs(d-T)<=n*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(p-D)<=n*Math.max(1,Math.abs(p),Math.abs(D))},mul:T,sub:D});function I(){var t=new a(3);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function L(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function V(t,n,r){var u=new a(3);return u[0]=t,u[1]=n,u[2]=r,u}function Q(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Y(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Z(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function X(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function N(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function B(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function k(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function U(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function W(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}var C,G=Q,H=Y,J=Z,K=X,$=N,tt=L,nt=B,at=(C=I(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)C[0]=t[o],C[1]=t[o+1],C[2]=t[o+2],u(C,C,e),t[o]=C[0],t[o+1]=C[1],t[o+2]=C[2];return t}),rt=Object.freeze({__proto__:null,create:I,clone:function(t){var n=new a(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},length:L,fromValues:V,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},set:function(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t},subtract:Q,multiply:Y,divide:Z,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t},distance:X,squaredDistance:N,squaredLength:B,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:k,dot:U,cross:W,lerp:function(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t},hermite:function(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t},bezier:function(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t},random:function(t,n){n=n||1;var a=2*r()*Math.PI,u=2*r()-1,e=Math.sqrt(1-u*u)*n;return t[0]=Math.cos(a)*e,t[1]=Math.sin(a)*e,t[2]=u*n,t},transformMat4:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t},transformMat3:function(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t},transformQuat:function(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t},rotateX:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},rotateY:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},rotateZ:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},angle:function(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2],h=Math.sqrt(a*a+r*r+u*u)*Math.sqrt(e*e+o*o+i*i),c=h&&U(t,n)/h;return Math.acos(Math.min(Math.max(c,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=a[0],i=a[1],h=a[2];return Math.abs(r-o)<=n*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=n*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-h)<=n*Math.max(1,Math.abs(e),Math.abs(h))},sub:G,mul:H,div:J,dist:K,sqrDist:$,len:tt,sqrLen:nt,forEach:at});function ut(){var t=new a(4);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function et(t){var n=new a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function ot(t,n,r,u){var e=new a(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=u,e}function it(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function ht(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function ct(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function st(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Mt(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function ft(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function lt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function vt(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function bt(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function mt(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function dt(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function pt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function xt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function yt(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function qt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function gt(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=a[0],h=a[1],c=a[2],s=a[3];return Math.abs(r-i)<=n*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=n*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=n*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-s)<=n*Math.max(1,Math.abs(o),Math.abs(s))}var _t=st,At=Mt,wt=ft,Rt=vt,zt=bt,Ot=mt,jt=dt,Pt=function(){var t=ut();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),St=Object.freeze({__proto__:null,create:ut,clone:et,fromValues:ot,copy:it,set:ht,add:ct,subtract:st,multiply:Mt,divide:ft,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:lt,scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},distance:vt,squaredDistance:bt,length:mt,squaredLength:dt,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:pt,dot:xt,cross:function(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t},lerp:yt,random:function(t,n){var a,u,e,o,i,h;n=n||1;do{i=(a=2*r()-1)*a+(u=2*r()-1)*u}while(i>=1);do{h=(e=2*r()-1)*e+(o=2*r()-1)*o}while(h>=1);var c=Math.sqrt((1-i)/h);return t[0]=n*a,t[1]=n*u,t[2]=n*e*c,t[3]=n*o*c,t},transformMat4:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t},transformQuat:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:qt,equals:gt,sub:_t,mul:At,div:wt,dist:Rt,sqrDist:zt,len:Ot,sqrLen:jt,forEach:Pt});function Et(){var t=new a(4);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Tt(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Dt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ft(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function It(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Lt(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Qt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function Yt(t,a,r,u){var e,o,i,h,c,s=a[0],M=a[1],f=a[2],l=a[3],v=r[0],b=r[1],m=r[2],d=r[3];return(o=s*v+M*b+f*m+l*d)<0&&(o=-o,v=-v,b=-b,m=-m,d=-d),1-o>n?(e=Math.acos(o),i=Math.sin(e),h=Math.sin((1-u)*e)/i,c=Math.sin(u*e)/i):(h=1-u,c=u),t[0]=h*s+c*v,t[1]=h*M+c*b,t[2]=h*f+c*m,t[3]=h*l+c*d,t}function Zt(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}var Xt,Nt,Bt,kt,Ut,Wt,Ct=et,Gt=ot,Ht=it,Jt=ht,Kt=ct,$t=Dt,tn=lt,nn=xt,an=yt,rn=mt,un=rn,en=dt,on=en,hn=pt,cn=qt,sn=gt,Mn=(Xt=I(),Nt=V(1,0,0),Bt=V(0,1,0),function(t,n,a){var r=U(n,a);return r<-.999999?(W(Xt,Nt,n),tt(Xt)<1e-6&&W(Xt,Bt,n),k(Xt,Xt),Tt(t,Xt,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(W(Xt,n,a),t[0]=Xt[0],t[1]=Xt[1],t[2]=Xt[2],t[3]=1+r,hn(t,t))}),fn=(kt=Et(),Ut=Et(),function(t,n,a,r,u,e){return Yt(kt,n,u,e),Yt(Ut,a,r,e),Yt(t,kt,Ut,2*e*(1-e)),t}),ln=(Wt=m(),function(t,n,a,r){return Wt[0]=a[0],Wt[3]=a[1],Wt[6]=a[2],Wt[1]=r[0],Wt[4]=r[1],Wt[7]=r[2],Wt[2]=-n[0],Wt[5]=-n[1],Wt[8]=-n[2],hn(t,Zt(t,Wt))}),vn=Object.freeze({__proto__:null,create:Et,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:Tt,getAxisAngle:function(t,a){var r=2*Math.acos(a[3]),u=Math.sin(r/2);return u>n?(t[0]=a[0]/u,t[1]=a[1]/u,t[2]=a[2]/u):(t[0]=1,t[1]=0,t[2]=0),r},getAngle:function(t,n){var a=nn(t,n);return Math.acos(2*a*a-1)},multiply:Dt,rotateX:Ft,rotateY:It,rotateZ:Lt,calculateW:function(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t},exp:Vt,ln:Qt,pow:function(t,n,a){return Qt(t,n),tn(t,t,a),Vt(t,t),t},slerp:Yt,random:function(t){var n=r(),a=r(),u=r(),e=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=e*Math.sin(2*Math.PI*a),t[1]=e*Math.cos(2*Math.PI*a),t[2]=o*Math.sin(2*Math.PI*u),t[3]=o*Math.cos(2*Math.PI*u),t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},fromMat3:Zt,fromEuler:function(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Ct,fromValues:Gt,copy:Ht,set:Jt,add:Kt,mul:$t,scale:tn,dot:nn,lerp:an,length:rn,len:un,squaredLength:en,sqrLen:on,normalize:hn,exactEquals:cn,equals:sn,rotationTo:Mn,sqlerp:fn,setAxes:ln});function bn(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function mn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}var dn=Ht;var pn=Ht;function xn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],p=a[3];return t[0]=r*p+o*b+u*d-e*m,t[1]=u*p+o*m+e*b-r*d,t[2]=e*p+o*d+r*m-u*b,t[3]=o*p-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*p+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*p+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*p+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*p-M*b-f*m-l*d,t}var yn=xn;var qn=nn;var gn=rn,_n=gn,An=en,wn=An;var Rn=Object.freeze({__proto__:null,create:function(){var t=new a(8);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var n=new a(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n},fromValues:function(t,n,r,u,e,o,i,h){var c=new a(8);return c[0]=t,c[1]=n,c[2]=r,c[3]=u,c[4]=e,c[5]=o,c[6]=i,c[7]=h,c},fromRotationTranslationValues:function(t,n,r,u,e,o,i){var h=new a(8);h[0]=t,h[1]=n,h[2]=r,h[3]=u;var c=.5*e,s=.5*o,M=.5*i;return h[4]=c*u+s*r-M*n,h[5]=s*u+M*t-c*r,h[6]=M*u+c*n-s*t,h[7]=-c*t-s*n-M*r,h},fromRotationTranslation:bn,fromTranslation:function(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t},fromRotation:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,n){var r=Et();z(r,n);var u=new a(3);return w(u,n),bn(t,r,u),t},copy:mn,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t},getReal:dn,getDual:function(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t},setReal:pn,setDual:function(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t},getTranslation:function(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t},translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t},rotateX:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ft(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateY:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return It(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateZ:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Lt(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateByQuatAppend:function(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t},rotateByQuatPrepend:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t},rotateAroundAxis:function(t,a,r,u){if(Math.abs(u)<n)return mn(t,a);var e=Math.hypot(r[0],r[1],r[2]);u*=.5;var o=Math.sin(u),i=o*r[0]/e,h=o*r[1]/e,c=o*r[2]/e,s=Math.cos(u),M=a[0],f=a[1],l=a[2],v=a[3];t[0]=M*s+v*i+f*c-l*h,t[1]=f*s+v*h+l*i-M*c,t[2]=l*s+v*c+M*h-f*i,t[3]=v*s-M*i-f*h-l*c;var b=a[4],m=a[5],d=a[6],p=a[7];return t[4]=b*s+p*i+m*c-d*h,t[5]=m*s+p*h+d*i-b*c,t[6]=d*s+p*c+b*h-m*i,t[7]=p*s-b*i-m*h-d*c,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t},multiply:xn,mul:yn,scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t},dot:qn,lerp:function(t,n,a,r){var u=1-r;return qn(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t},invert:function(t,n){var a=An(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t},length:gn,len:_n,squaredLength:An,sqrLen:wn,normalize:function(t,n){var a=An(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=a[0],f=a[1],l=a[2],v=a[3],b=a[4],m=a[5],d=a[6],p=a[7];return Math.abs(r-M)<=n*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(u-f)<=n*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(e-l)<=n*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(o-v)<=n*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=n*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=n*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(c-d)<=n*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(s-p)<=n*Math.max(1,Math.abs(s),Math.abs(p))}});function zn(){var t=new a(2);return a!=Float32Array&&(t[0]=0,t[1]=0),t}function On(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function jn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function Pn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function Sn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function En(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function Tn(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function Dn(t){var n=t[0],a=t[1];return n*n+a*a}var Fn=Tn,In=On,Ln=jn,Vn=Pn,Qn=Sn,Yn=En,Zn=Dn,Xn=function(){var t=zn();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}(),Nn=Object.freeze({__proto__:null,create:zn,clone:function(t){var n=new a(2);return n[0]=t[0],n[1]=t[1],n},fromValues:function(t,n){var r=new a(2);return r[0]=t,r[1]=n,r},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t},set:function(t,n,a){return t[0]=n,t[1]=a,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t},subtract:On,multiply:jn,divide:Pn,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t},distance:Sn,squaredDistance:En,length:Tn,squaredLength:Dn,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},normalize:function(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t},dot:function(t,n){return t[0]*n[0]+t[1]*n[1]},cross:function(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t},random:function(t,n){n=n||1;var a=2*r()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t},transformMat2:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t},transformMat2d:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t},transformMat3:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t},transformMat4:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t},rotate:function(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t},angle:function(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=Math.sqrt(a*a+r*r)*Math.sqrt(u*u+e*e),i=o&&(a*u+r*e)/o;return Math.acos(Math.min(Math.max(i,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]},equals:function(t,a){var r=t[0],u=t[1],e=a[0],o=a[1];return Math.abs(r-e)<=n*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-o)<=n*Math.max(1,Math.abs(u),Math.abs(o))},len:Fn,sub:In,mul:Ln,div:Vn,dist:Qn,sqrDist:Yn,sqrLen:Zn,forEach:Xn});t.glMatrix=e,t.mat2=s,t.mat2d=b,t.mat3=q,t.mat4=F,t.quat=vn,t.quat2=Rn,t.vec2=Nn,t.vec3=rt,t.vec4=St,Object.defineProperty(t,"__esModule",{value:!0})}));


/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.4.3

Copyright (c) 2015-2021, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).glMatrix={})}(this,(function(t){"use strict";var n=1e-6,a="undefined"!=typeof Float32Array?Float32Array:Array,r=Math.random;var u=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var e=Object.freeze({__proto__:null,EPSILON:n,get ARRAY_TYPE(){return a},RANDOM:r,setMatrixArrayType:function(t){a=t},toRadian:function(t){return t*u},equals:function(t,a){return Math.abs(t-a)<=n*Math.max(1,Math.abs(t),Math.abs(a))}});function o(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function i(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}var h=o,c=i,s=Object.freeze({__proto__:null,create:function(){var t=new a(4);return a!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},clone:function(t){var n=new a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},fromValues:function(t,n,r,u){var e=new a(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=u,e},set:function(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t},transpose:function(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null},adjoint:function(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:o,rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t},scale:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},str:function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3])},LDU:function(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t},subtract:i,exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=a[0],h=a[1],c=a[2],s=a[3];return Math.abs(r-i)<=n*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=n*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=n*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-s)<=n*Math.max(1,Math.abs(o),Math.abs(s))},multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},mul:h,sub:c});function M(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function f(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}var l=M,v=f,b=Object.freeze({__proto__:null,create:function(){var t=new a(6);return a!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t},clone:function(t){var n=new a(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},fromValues:function(t,n,r,u,e,o){var i=new a(6);return i[0]=t,i[1]=n,i[2]=r,i[3]=u,i[4]=e,i[5]=o,i},set:function(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:M,rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t},scale:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t},translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t},subtract:f,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return Math.abs(r-c)<=n*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=n*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-M)<=n*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(o-f)<=n*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-l)<=n*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(h-v)<=n*Math.max(1,Math.abs(h),Math.abs(v))},mul:l,sub:v});function m(){var t=new a(9);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function d(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=p*r+x*o+y*c,t[7]=p*u+x*i+y*s,t[8]=p*e+x*h+y*M,t}function p(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}var x=d,y=p,q=Object.freeze({__proto__:null,create:m,fromMat4:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},clone:function(t){var n=new a(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromValues:function(t,n,r,u,e,o,i,h,c){var s=new a(9);return s[0]=t,s[1]=n,s[2]=r,s[3]=u,s[4]=e,s[5]=o,s[6]=i,s[7]=h,s[8]=c,s},set:function(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null},adjoint:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t},determinant:function(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)},multiply:d,translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t},rotate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t},scale:function(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},fromRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t},normalFromMat4:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-u*o,y=a*c-e*o,q=r*h-u*i,g=r*c-e*i,_=u*c-e*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,O=M*d-l*b,j=f*d-l*m,P=p*j-x*O+y*z+q*R-g*w+_*A;return P?(P=1/P,t[0]=(i*j-h*O+c*z)*P,t[1]=(h*R-o*j-c*w)*P,t[2]=(o*O-i*R+c*A)*P,t[3]=(u*O-r*j-e*z)*P,t[4]=(a*j-u*R+e*w)*P,t[5]=(r*R-a*O-e*A)*P,t[6]=(b*_-m*g+d*q)*P,t[7]=(m*y-v*_-d*x)*P,t[8]=(v*g-b*y+d*p)*P,t):null},projection:function(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t},subtract:p,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=t[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],p=a[6],x=a[7],y=a[8];return Math.abs(r-f)<=n*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=n*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=n*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=n*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=n*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=n*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-p)<=n*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(s-x)<=n*Math.max(1,Math.abs(s),Math.abs(x))&&Math.abs(M-y)<=n*Math.max(1,Math.abs(M),Math.abs(y))},mul:x,sub:y});function g(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],p=n[15],x=a[0],y=a[1],q=a[2],g=a[3];return t[0]=x*r+y*i+q*M+g*b,t[1]=x*u+y*h+q*f+g*m,t[2]=x*e+y*c+q*l+g*d,t[3]=x*o+y*s+q*v+g*p,x=a[4],y=a[5],q=a[6],g=a[7],t[4]=x*r+y*i+q*M+g*b,t[5]=x*u+y*h+q*f+g*m,t[6]=x*e+y*c+q*l+g*d,t[7]=x*o+y*s+q*v+g*p,x=a[8],y=a[9],q=a[10],g=a[11],t[8]=x*r+y*i+q*M+g*b,t[9]=x*u+y*h+q*f+g*m,t[10]=x*e+y*c+q*l+g*d,t[11]=x*o+y*s+q*v+g*p,x=a[12],y=a[13],q=a[14],g=a[15],t[12]=x*r+y*i+q*M+g*b,t[13]=x*u+y*h+q*f+g*m,t[14]=x*e+y*c+q*l+g*d,t[15]=x*o+y*s+q*v+g*p,t}function A(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,p=o*c;return t[0]=1-(l+b),t[1]=M+p,t[2]=f-d,t[3]=0,t[4]=M-p,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function w(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function R(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function z(t,n){var r=new a(3);R(r,n);var u=1/r[0],e=1/r[1],o=1/r[2],i=n[0]*u,h=n[1]*e,c=n[2]*o,s=n[4]*u,M=n[5]*e,f=n[6]*o,l=n[8]*u,v=n[9]*e,b=n[10]*o,m=i+M+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(f-v)/d,t[1]=(l-c)/d,t[2]=(h-s)/d):i>M&&i>b?(d=2*Math.sqrt(1+i-M-b),t[3]=(f-v)/d,t[0]=.25*d,t[1]=(h+s)/d,t[2]=(l+c)/d):M>b?(d=2*Math.sqrt(1+M-i-b),t[3]=(l-c)/d,t[0]=(h+s)/d,t[1]=.25*d,t[2]=(f+v)/d):(d=2*Math.sqrt(1+b-i-M),t[3]=(h-s)/d,t[0]=(l+c)/d,t[1]=(f+v)/d,t[2]=.25*d),t}function O(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}var j=O;function P(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}var S=P;function E(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}var T=_,D=E,F=Object.freeze({__proto__:null,create:function(){var t=new a(16);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},clone:function(t){var n=new a(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},fromValues:function(t,n,r,u,e,o,i,h,c,s,M,f,l,v,b,m){var d=new a(16);return d[0]=t,d[1]=n,d[2]=r,d[3]=u,d[4]=e,d[5]=o,d[6]=i,d[7]=h,d[8]=c,d[9]=s,d[10]=M,d[11]=f,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d},set:function(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t},identity:g,transpose:function(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],p=a*i-r*o,x=a*h-u*o,y=a*c-e*o,q=r*h-u*i,g=r*c-e*i,_=u*c-e*h,A=s*b-M*v,w=s*m-f*v,R=s*d-l*v,z=M*m-f*b,O=M*d-l*b,j=f*d-l*m,P=p*j-x*O+y*z+q*R-g*w+_*A;return P?(P=1/P,t[0]=(i*j-h*O+c*z)*P,t[1]=(u*O-r*j-e*z)*P,t[2]=(b*_-m*g+d*q)*P,t[3]=(f*g-M*_-l*q)*P,t[4]=(h*R-o*j-c*w)*P,t[5]=(a*j-u*R+e*w)*P,t[6]=(m*y-v*_-d*x)*P,t[7]=(s*_-f*y+l*x)*P,t[8]=(o*O-i*R+c*A)*P,t[9]=(r*R-a*O-e*A)*P,t[10]=(v*g-b*y+d*p)*P,t[11]=(M*y-s*g-l*p)*P,t[12]=(i*w-o*z-h*A)*P,t[13]=(a*z-r*w+u*A)*P,t[14]=(b*x-v*q-m*p)*P,t[15]=(s*q-M*x+f*p)*P,t):null},adjoint:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t},determinant:function(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)},multiply:_,translate:function(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t},scale:function(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},rotate:function(t,a,r,u){var e,o,i,h,c,s,M,f,l,v,b,m,d,p,x,y,q,g,_,A,w,R,z,O,j=u[0],P=u[1],S=u[2],E=Math.hypot(j,P,S);return E<n?null:(j*=E=1/E,P*=E,S*=E,e=Math.sin(r),i=1-(o=Math.cos(r)),h=a[0],c=a[1],s=a[2],M=a[3],f=a[4],l=a[5],v=a[6],b=a[7],m=a[8],d=a[9],p=a[10],x=a[11],y=j*j*i+o,q=P*j*i+S*e,g=S*j*i-P*e,_=j*P*i-S*e,A=P*P*i+o,w=S*P*i+j*e,R=j*S*i+P*e,z=P*S*i-j*e,O=S*S*i+o,t[0]=h*y+f*q+m*g,t[1]=c*y+l*q+d*g,t[2]=s*y+v*q+p*g,t[3]=M*y+b*q+x*g,t[4]=h*_+f*A+m*w,t[5]=c*_+l*A+d*w,t[6]=s*_+v*A+p*w,t[7]=M*_+b*A+x*w,t[8]=h*R+f*z+m*O,t[9]=c*R+l*z+d*O,t[10]=s*R+v*z+p*O,t[11]=M*R+b*z+x*O,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)},rotateX:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t},rotateY:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t},rotateZ:function(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t},fromTranslation:function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:function(t,a,r){var u,e,o,i=r[0],h=r[1],c=r[2],s=Math.hypot(i,h,c);return s<n?null:(i*=s=1/s,h*=s,c*=s,u=Math.sin(a),o=1-(e=Math.cos(a)),t[0]=i*i*o+e,t[1]=h*i*o+c*u,t[2]=c*i*o-h*u,t[3]=0,t[4]=i*h*o-c*u,t[5]=h*h*o+e,t[6]=c*h*o+i*u,t[7]=0,t[8]=i*c*o+h*u,t[9]=h*c*o-i*u,t[10]=c*c*o+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},fromXRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromYRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:A,fromQuat2:function(t,n){var r=new a(3),u=-n[0],e=-n[1],o=-n[2],i=n[3],h=n[4],c=n[5],s=n[6],M=n[7],f=u*u+e*e+o*o+i*i;return f>0?(r[0]=2*(h*i+M*u+c*o-s*e)/f,r[1]=2*(c*i+M*e+s*u-h*o)/f,r[2]=2*(s*i+M*o+h*e-c*u)/f):(r[0]=2*(h*i+M*u+c*o-s*e),r[1]=2*(c*i+M*e+s*u-h*o),r[2]=2*(s*i+M*o+h*e-c*u)),A(t,n,r),t},getTranslation:w,getScaling:R,getRotation:z,fromRotationTranslationScale:function(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,p=i*c,x=i*s,y=r[0],q=r[1],g=r[2];return t[0]=(1-(v+m))*y,t[1]=(f+x)*y,t[2]=(l-p)*y,t[3]=0,t[4]=(f-x)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+p)*g,t[9]=(b-d)*g,t[10]=(1-(M+v))*g,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},fromRotationTranslationScaleOrigin:function(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,p=h*c,x=h*s,y=h*M,q=r[0],g=r[1],_=r[2],A=u[0],w=u[1],R=u[2],z=(1-(b+d))*q,O=(l+y)*q,j=(v-x)*q,P=(l-y)*g,S=(1-(f+d))*g,E=(m+p)*g,T=(v+x)*_,D=(m-p)*_,F=(1-(f+b))*_;return t[0]=z,t[1]=O,t[2]=j,t[3]=0,t[4]=P,t[5]=S,t[6]=E,t[7]=0,t[8]=T,t[9]=D,t[10]=F,t[11]=0,t[12]=a[0]+A-(z*A+P*w+T*R),t[13]=a[1]+w-(O*A+S*w+D*R),t[14]=a[2]+R-(j*A+E*w+F*R),t[15]=1,t},fromQuat:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t},perspectiveNO:O,perspective:j,perspectiveZO:function(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=u*e,t[14]=u*r*e):(t[10]=-1,t[14]=-r),t},perspectiveFromFieldOfView:function(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t},orthoNO:P,ortho:S,orthoZO:function(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=e*c,t[15]=1,t},lookAt:function(t,a,r,u){var e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2],p=u[0],x=u[1],y=u[2],q=r[0],_=r[1],A=r[2];return Math.abs(b-q)<n&&Math.abs(m-_)<n&&Math.abs(d-A)<n?g(t):(M=b-q,f=m-_,l=d-A,e=x*(l*=v=1/Math.hypot(M,f,l))-y*(f*=v),o=y*(M*=v)-p*l,i=p*f-x*M,(v=Math.hypot(e,o,i))?(e*=v=1/v,o*=v,i*=v):(e=0,o=0,i=0),h=f*i-l*o,c=l*e-M*i,s=M*o-f*e,(v=Math.hypot(h,c,s))?(h*=v=1/v,c*=v,s*=v):(h=0,c=0,s=0),t[0]=e,t[1]=h,t[2]=M,t[3]=0,t[4]=o,t[5]=c,t[6]=f,t[7]=0,t[8]=i,t[9]=s,t[10]=l,t[11]=0,t[12]=-(e*b+o*m+i*d),t[13]=-(h*b+c*m+s*d),t[14]=-(M*b+f*m+l*d),t[15]=1,t)},targetTo:function(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t},subtract:E,multiplyScalar:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t},multiplyScalarAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],p=t[15],x=a[0],y=a[1],q=a[2],g=a[3],_=a[4],A=a[5],w=a[6],R=a[7],z=a[8],O=a[9],j=a[10],P=a[11],S=a[12],E=a[13],T=a[14],D=a[15];return Math.abs(r-x)<=n*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(u-y)<=n*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(e-q)<=n*Math.max(1,Math.abs(e),Math.abs(q))&&Math.abs(o-g)<=n*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-_)<=n*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(h-A)<=n*Math.max(1,Math.abs(h),Math.abs(A))&&Math.abs(c-w)<=n*Math.max(1,Math.abs(c),Math.abs(w))&&Math.abs(s-R)<=n*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(M-z)<=n*Math.max(1,Math.abs(M),Math.abs(z))&&Math.abs(f-O)<=n*Math.max(1,Math.abs(f),Math.abs(O))&&Math.abs(l-j)<=n*Math.max(1,Math.abs(l),Math.abs(j))&&Math.abs(v-P)<=n*Math.max(1,Math.abs(v),Math.abs(P))&&Math.abs(b-S)<=n*Math.max(1,Math.abs(b),Math.abs(S))&&Math.abs(m-E)<=n*Math.max(1,Math.abs(m),Math.abs(E))&&Math.abs(d-T)<=n*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(p-D)<=n*Math.max(1,Math.abs(p),Math.abs(D))},mul:T,sub:D});function I(){var t=new a(3);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function L(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function V(t,n,r){var u=new a(3);return u[0]=t,u[1]=n,u[2]=r,u}function Q(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Y(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Z(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function X(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function N(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function B(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function k(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function U(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function W(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}var C,G=Q,H=Y,J=Z,K=X,$=N,tt=L,nt=B,at=(C=I(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)C[0]=t[o],C[1]=t[o+1],C[2]=t[o+2],u(C,C,e),t[o]=C[0],t[o+1]=C[1],t[o+2]=C[2];return t}),rt=Object.freeze({__proto__:null,create:I,clone:function(t){var n=new a(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},length:L,fromValues:V,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},set:function(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t},subtract:Q,multiply:Y,divide:Z,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t},distance:X,squaredDistance:N,squaredLength:B,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:k,dot:U,cross:W,lerp:function(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t},hermite:function(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t},bezier:function(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t},random:function(t,n){n=n||1;var a=2*r()*Math.PI,u=2*r()-1,e=Math.sqrt(1-u*u)*n;return t[0]=Math.cos(a)*e,t[1]=Math.sin(a)*e,t[2]=u*n,t},transformMat4:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t},transformMat3:function(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t},transformQuat:function(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t},rotateX:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},rotateY:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},rotateZ:function(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t},angle:function(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2],h=Math.sqrt(a*a+r*r+u*u)*Math.sqrt(e*e+o*o+i*i),c=h&&U(t,n)/h;return Math.acos(Math.min(Math.max(c,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=a[0],i=a[1],h=a[2];return Math.abs(r-o)<=n*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=n*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-h)<=n*Math.max(1,Math.abs(e),Math.abs(h))},sub:G,mul:H,div:J,dist:K,sqrDist:$,len:tt,sqrLen:nt,forEach:at});function ut(){var t=new a(4);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function et(t){var n=new a(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function ot(t,n,r,u){var e=new a(4);return e[0]=t,e[1]=n,e[2]=r,e[3]=u,e}function it(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function ht(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function ct(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function st(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Mt(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function ft(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function lt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function vt(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function bt(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function mt(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function dt(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function pt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function xt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function yt(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function qt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function gt(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=a[0],h=a[1],c=a[2],s=a[3];return Math.abs(r-i)<=n*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=n*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=n*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(o-s)<=n*Math.max(1,Math.abs(o),Math.abs(s))}var _t=st,At=Mt,wt=ft,Rt=vt,zt=bt,Ot=mt,jt=dt,Pt=function(){var t=ut();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}(),St=Object.freeze({__proto__:null,create:ut,clone:et,fromValues:ot,copy:it,set:ht,add:ct,subtract:st,multiply:Mt,divide:ft,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:lt,scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t},distance:vt,squaredDistance:bt,length:mt,squaredLength:dt,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:pt,dot:xt,cross:function(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t},lerp:yt,random:function(t,n){var a,u,e,o,i,h;n=n||1;do{i=(a=2*r()-1)*a+(u=2*r()-1)*u}while(i>=1);do{h=(e=2*r()-1)*e+(o=2*r()-1)*o}while(h>=1);var c=Math.sqrt((1-i)/h);return t[0]=n*a,t[1]=n*u,t[2]=n*e*c,t[3]=n*o*c,t},transformMat4:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t},transformQuat:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t},zero:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:qt,equals:gt,sub:_t,mul:At,div:wt,dist:Rt,sqrDist:zt,len:Ot,sqrLen:jt,forEach:Pt});function Et(){var t=new a(4);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Tt(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Dt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ft(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function It(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Lt(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Qt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function Yt(t,a,r,u){var e,o,i,h,c,s=a[0],M=a[1],f=a[2],l=a[3],v=r[0],b=r[1],m=r[2],d=r[3];return(o=s*v+M*b+f*m+l*d)<0&&(o=-o,v=-v,b=-b,m=-m,d=-d),1-o>n?(e=Math.acos(o),i=Math.sin(e),h=Math.sin((1-u)*e)/i,c=Math.sin(u*e)/i):(h=1-u,c=u),t[0]=h*s+c*v,t[1]=h*M+c*b,t[2]=h*f+c*m,t[3]=h*l+c*d,t}function Zt(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}var Xt,Nt,Bt,kt,Ut,Wt,Ct=et,Gt=ot,Ht=it,Jt=ht,Kt=ct,$t=Dt,tn=lt,nn=xt,an=yt,rn=mt,un=rn,en=dt,on=en,hn=pt,cn=qt,sn=gt,Mn=(Xt=I(),Nt=V(1,0,0),Bt=V(0,1,0),function(t,n,a){var r=U(n,a);return r<-.999999?(W(Xt,Nt,n),tt(Xt)<1e-6&&W(Xt,Bt,n),k(Xt,Xt),Tt(t,Xt,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(W(Xt,n,a),t[0]=Xt[0],t[1]=Xt[1],t[2]=Xt[2],t[3]=1+r,hn(t,t))}),fn=(kt=Et(),Ut=Et(),function(t,n,a,r,u,e){return Yt(kt,n,u,e),Yt(Ut,a,r,e),Yt(t,kt,Ut,2*e*(1-e)),t}),ln=(Wt=m(),function(t,n,a,r){return Wt[0]=a[0],Wt[3]=a[1],Wt[6]=a[2],Wt[1]=r[0],Wt[4]=r[1],Wt[7]=r[2],Wt[2]=-n[0],Wt[5]=-n[1],Wt[8]=-n[2],hn(t,Zt(t,Wt))}),vn=Object.freeze({__proto__:null,create:Et,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:Tt,getAxisAngle:function(t,a){var r=2*Math.acos(a[3]),u=Math.sin(r/2);return u>n?(t[0]=a[0]/u,t[1]=a[1]/u,t[2]=a[2]/u):(t[0]=1,t[1]=0,t[2]=0),r},getAngle:function(t,n){var a=nn(t,n);return Math.acos(2*a*a-1)},multiply:Dt,rotateX:Ft,rotateY:It,rotateZ:Lt,calculateW:function(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t},exp:Vt,ln:Qt,pow:function(t,n,a){return Qt(t,n),tn(t,t,a),Vt(t,t),t},slerp:Yt,random:function(t){var n=r(),a=r(),u=r(),e=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=e*Math.sin(2*Math.PI*a),t[1]=e*Math.cos(2*Math.PI*a),t[2]=o*Math.sin(2*Math.PI*u),t[3]=o*Math.cos(2*Math.PI*u),t},invert:function(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},fromMat3:Zt,fromEuler:function(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t},str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},clone:Ct,fromValues:Gt,copy:Ht,set:Jt,add:Kt,mul:$t,scale:tn,dot:nn,lerp:an,length:rn,len:un,squaredLength:en,sqrLen:on,normalize:hn,exactEquals:cn,equals:sn,rotationTo:Mn,sqlerp:fn,setAxes:ln});function bn(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function mn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}var dn=Ht;var pn=Ht;function xn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],p=a[3];return t[0]=r*p+o*b+u*d-e*m,t[1]=u*p+o*m+e*b-r*d,t[2]=e*p+o*d+r*m-u*b,t[3]=o*p-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*p+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*p+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*p+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*p-M*b-f*m-l*d,t}var yn=xn;var qn=nn;var gn=rn,_n=gn,An=en,wn=An;var Rn=Object.freeze({__proto__:null,create:function(){var t=new a(8);return a!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t},clone:function(t){var n=new a(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n},fromValues:function(t,n,r,u,e,o,i,h){var c=new a(8);return c[0]=t,c[1]=n,c[2]=r,c[3]=u,c[4]=e,c[5]=o,c[6]=i,c[7]=h,c},fromRotationTranslationValues:function(t,n,r,u,e,o,i){var h=new a(8);h[0]=t,h[1]=n,h[2]=r,h[3]=u;var c=.5*e,s=.5*o,M=.5*i;return h[4]=c*u+s*r-M*n,h[5]=s*u+M*t-c*r,h[6]=M*u+c*n-s*t,h[7]=-c*t-s*n-M*r,h},fromRotationTranslation:bn,fromTranslation:function(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t},fromRotation:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},fromMat4:function(t,n){var r=Et();z(r,n);var u=new a(3);return w(u,n),bn(t,r,u),t},copy:mn,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},set:function(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t},getReal:dn,getDual:function(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t},setReal:pn,setDual:function(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t},getTranslation:function(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t},translate:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t},rotateX:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ft(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateY:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return It(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateZ:function(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Lt(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t},rotateByQuatAppend:function(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t},rotateByQuatPrepend:function(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t},rotateAroundAxis:function(t,a,r,u){if(Math.abs(u)<n)return mn(t,a);var e=Math.hypot(r[0],r[1],r[2]);u*=.5;var o=Math.sin(u),i=o*r[0]/e,h=o*r[1]/e,c=o*r[2]/e,s=Math.cos(u),M=a[0],f=a[1],l=a[2],v=a[3];t[0]=M*s+v*i+f*c-l*h,t[1]=f*s+v*h+l*i-M*c,t[2]=l*s+v*c+M*h-f*i,t[3]=v*s-M*i-f*h-l*c;var b=a[4],m=a[5],d=a[6],p=a[7];return t[4]=b*s+p*i+m*c-d*h,t[5]=m*s+p*h+d*i-b*c,t[6]=d*s+p*c+b*h-m*i,t[7]=p*s-b*i-m*h-d*c,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t},multiply:xn,mul:yn,scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t},dot:qn,lerp:function(t,n,a,r){var u=1-r;return qn(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t},invert:function(t,n){var a=An(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t},conjugate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t},length:gn,len:_n,squaredLength:An,sqrLen:wn,normalize:function(t,n){var a=An(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t},str:function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]},equals:function(t,a){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],h=t[5],c=t[6],s=t[7],M=a[0],f=a[1],l=a[2],v=a[3],b=a[4],m=a[5],d=a[6],p=a[7];return Math.abs(r-M)<=n*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(u-f)<=n*Math.max(1,Math.abs(u),Math.abs(f))&&Math.abs(e-l)<=n*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(o-v)<=n*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-b)<=n*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(h-m)<=n*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(c-d)<=n*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(s-p)<=n*Math.max(1,Math.abs(s),Math.abs(p))}});function zn(){var t=new a(2);return a!=Float32Array&&(t[0]=0,t[1]=0),t}function On(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function jn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function Pn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function Sn(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function En(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function Tn(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function Dn(t){var n=t[0],a=t[1];return n*n+a*a}var Fn=Tn,In=On,Ln=jn,Vn=Pn,Qn=Sn,Yn=En,Zn=Dn,Xn=function(){var t=zn();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}(),Nn=Object.freeze({__proto__:null,create:zn,clone:function(t){var n=new a(2);return n[0]=t[0],n[1]=t[1],n},fromValues:function(t,n){var r=new a(2);return r[0]=t,r[1]=n,r},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t},set:function(t,n,a){return t[0]=n,t[1]=a,t},add:function(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t},subtract:On,multiply:jn,divide:Pn,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},min:function(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t},max:function(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:function(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t},scaleAndAdd:function(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t},distance:Sn,squaredDistance:En,length:Tn,squaredLength:Dn,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},normalize:function(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t},dot:function(t,n){return t[0]*n[0]+t[1]*n[1]},cross:function(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t},lerp:function(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t},random:function(t,n){n=n||1;var a=2*r()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t},transformMat2:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t},transformMat2d:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t},transformMat3:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t},transformMat4:function(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t},rotate:function(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t},angle:function(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=Math.sqrt(a*a+r*r)*Math.sqrt(u*u+e*e),i=o&&(a*u+r*e)/o;return Math.acos(Math.min(Math.max(i,-1),1))},zero:function(t){return t[0]=0,t[1]=0,t},str:function(t){return"vec2("+t[0]+", "+t[1]+")"},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]},equals:function(t,a){var r=t[0],u=t[1],e=a[0],o=a[1];return Math.abs(r-e)<=n*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(u-o)<=n*Math.max(1,Math.abs(u),Math.abs(o))},len:Fn,sub:In,mul:Ln,div:Vn,dist:Qn,sqrDist:Yn,sqrLen:Zn,forEach:Xn});t.glMatrix=e,t.mat2=s,t.mat2d=b,t.mat3=q,t.mat4=F,t.quat=vn,t.quat2=Rn,t.vec2=Nn,t.vec3=rt,t.vec4=St,Object.defineProperty(t,"__esModule",{value:!0})}));
// Version 0.9.0 - Copyright 2012 - 2021 -  Jim Riecken <jimr@jimr.ca>
//
// Released under the MIT License - https://github.com/jriecken/sat-js
//
// A simple library for determining intersections of circles and
// polygons using the Separating Axis Theorem.
/** @preserve SAT.js - Version 0.9.0 - Copyright 2012 - 2021 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */

/*global define: false, module: false*/
/*jshint shadow:true, sub:true, forin:true, noarg:true, noempty:true,
  eqeqeq:true, bitwise:true, strict:true, undef:true,
  curly:true, browser:true */

// Create a UMD wrapper for SAT. Works in:
//
//  - Plain browser via global SAT variable
//  - AMD loader (like require.js)
//  - Node.js
//
// The quoted properties all over the place are used so that the Closure Compiler
// does not mangle the exposed API in advanced mode.
/**
 * @param {*} root - The global scope
 * @param {Function} factory - Factory that creates SAT module
 */
 (function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define['amd']) {
		define(factory);
	} else if (typeof exports === 'object') {
		module['exports'] = factory();
	} else {
		root['SAT'] = factory();
	}
})(this, function () {
	'use strict';

	var SAT = {};

	//
	// ## Vector
	//
	// Represents a vector in two dimensions with `x` and `y` properties.

	// Create a new Vector, optionally passing in the `x` and `y` coordinates. If
	// a coordinate is not specified, it will be set to `0`
	/**
	 * @param {?number=} x The x position.
	 * @param {?number=} y The y position.
	 * @constructor
	 */
	function Vector(x, y) {
		this['x'] = x || 0;
		this['y'] = y || 0;
	}
	SAT['Vector'] = Vector;
	// Alias `Vector` as `V`
	SAT['V'] = Vector;

	// Copy the values of another Vector into this one.
	/**
	 * @param {Vector} other The other Vector.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['copy'] = Vector.prototype.copy = function (other) {
		this['x'] = other['x'];
		this['y'] = other['y'];
		return this;
	};

	// Create a new vector with the same coordinates as this on.
	/**
	 * @return {Vector} The new cloned vector
	 */
	Vector.prototype['clone'] = Vector.prototype.clone = function () {
		return new Vector(this['x'], this['y']);
	};

	// Change this vector to be perpendicular to what it was before. (Effectively
	// roatates it 90 degrees in a clockwise direction)
	/**
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['perp'] = Vector.prototype.perp = function () {
		var x = this['x'];
		this['x'] = this['y'];
		this['y'] = -x;
		return this;
	};

	// Rotate this vector (counter-clockwise) by the specified angle (in radians).
	/**
	 * @param {number} angle The angle to rotate (in radians)
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['rotate'] = Vector.prototype.rotate = function (angle) {
		var x = this['x'];
		var y = this['y'];
		this['x'] = x * Math.cos(angle) - y * Math.sin(angle);
		this['y'] = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	};

	// Reverse this vector.
	/**
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['reverse'] = Vector.prototype.reverse = function () {
		this['x'] = -this['x'];
		this['y'] = -this['y'];
		return this;
	};

	// Normalize this vector.  (make it have length of `1`)
	/**
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['normalize'] = Vector.prototype.normalize = function () {
		var d = this.len();
		if (d > 0) {
			this['x'] = this['x'] / d;
			this['y'] = this['y'] / d;
		}
		return this;
	};

	// Add another vector to this one.
	/**
	 * @param {Vector} other The other Vector.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['add'] = Vector.prototype.add = function (other) {
		this['x'] += other['x'];
		this['y'] += other['y'];
		return this;
	};

	// Subtract another vector from this one.
	/**
	 * @param {Vector} other The other Vector.
	 * @return {Vector} This for chaiing.
	 */
	Vector.prototype['sub'] = Vector.prototype.sub = function (other) {
		this['x'] -= other['x'];
		this['y'] -= other['y'];
		return this;
	};

	// Scale this vector. An independent scaling factor can be provided
	// for each axis, or a single scaling factor that will scale both `x` and `y`.
	/**
	 * @param {number} x The scaling factor in the x direction.
	 * @param {?number=} y The scaling factor in the y direction.  If this
	 *   is not specified, the x scaling factor will be used.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['scale'] = Vector.prototype.scale = function (x, y) {
		this['x'] *= x;
		this['y'] *= typeof y != 'undefined' ? y : x;
		return this;
	};

	// Project this vector on to another vector.
	/**
	 * @param {Vector} other The vector to project onto.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['project'] = Vector.prototype.project = function (other) {
		var amt = this.dot(other) / other.len2();
		this['x'] = amt * other['x'];
		this['y'] = amt * other['y'];
		return this;
	};

	// Project this vector onto a vector of unit length. This is slightly more efficient
	// than `project` when dealing with unit vectors.
	/**
	 * @param {Vector} other The unit vector to project onto.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['projectN'] = Vector.prototype.projectN = function (other) {
		var amt = this.dot(other);
		this['x'] = amt * other['x'];
		this['y'] = amt * other['y'];
		return this;
	};

	// Reflect this vector on an arbitrary axis.
	/**
	 * @param {Vector} axis The vector representing the axis.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['reflect'] = Vector.prototype.reflect = function (axis) {
		var x = this['x'];
		var y = this['y'];
		this.project(axis).scale(2);
		this['x'] -= x;
		this['y'] -= y;
		return this;
	};

	// Reflect this vector on an arbitrary axis (represented by a unit vector). This is
	// slightly more efficient than `reflect` when dealing with an axis that is a unit vector.
	/**
	 * @param {Vector} axis The unit vector representing the axis.
	 * @return {Vector} This for chaining.
	 */
	Vector.prototype['reflectN'] = Vector.prototype.reflectN = function (axis) {
		var x = this['x'];
		var y = this['y'];
		this.projectN(axis).scale(2);
		this['x'] -= x;
		this['y'] -= y;
		return this;
	};

	// Get the dot product of this vector and another.
	/**
	 * @param {Vector}  other The vector to dot this one against.
	 * @return {number} The dot product.
	 */
	Vector.prototype['dot'] = Vector.prototype.dot = function (other) {
		return this['x'] * other['x'] + this['y'] * other['y'];
	};

	// Get the squared length of this vector.
	/**
	 * @return {number} The length^2 of this vector.
	 */
	Vector.prototype['len2'] = Vector.prototype.len2 = function () {
		return this.dot(this);
	};

	// Get the length of this vector.
	/**
	 * @return {number} The length of this vector.
	 */
	Vector.prototype['len'] = Vector.prototype.len = function () {
		return Math.sqrt(this.len2());
	};

	// ## Circle
	//
	// Represents a circle with a position and a radius.

	// Create a new circle, optionally passing in a position and/or radius. If no position
	// is given, the circle will be at `(0,0)`. If no radius is provided, the circle will
	// have a radius of `0`.
	/**
	 * @param {Vector=} pos A vector representing the position of the center of the circle
	 * @param {?number=} r The radius of the circle
	 * @constructor
	 */
	function Circle(pos, r) {
		this['pos'] = pos || new Vector();
		this['r'] = r || 0;
		this['offset'] = new Vector();
	}
	SAT['Circle'] = Circle;

	// Compute the axis-aligned bounding box (AABB) of this Circle.
	//
	// Note: Returns a _new_ `Box` each time you call this.
	/**
	 * @return {Polygon} The AABB
	 */
	Circle.prototype['getAABBAsBox'] = Circle.prototype.getAABBAsBox =
		function () {
			var r = this['r'];
			var corner = this['pos']
				.clone()
				.add(this['offset'])
				.sub(new Vector(r, r));
			return new Box(corner, r * 2, r * 2);
		};

	// Compute the axis-aligned bounding box (AABB) of this Circle.
	//
	// Note: Returns a _new_ `Polygon` each time you call this.
	/**
	 * @return {Polygon} The AABB
	 */
	Circle.prototype['getAABB'] = Circle.prototype.getAABB = function () {
		return this.getAABBAsBox().toPolygon();
	};

	// Set the current offset to apply to the radius.
	/**
	 * @param {Vector} offset The new offset vector.
	 * @return {Circle} This for chaining.
	 */
	Circle.prototype['setOffset'] = Circle.prototype.setOffset = function (
		offset,
	) {
		this['offset'] = offset;
		return this;
	};

	// ## Polygon
	//
	// Represents a *convex* polygon with any number of points (specified in counter-clockwise order)
	//
	// Note: Do _not_ manually change the `points`, `angle`, or `offset` properties. Use the
	// provided setters. Otherwise the calculated properties will not be updated correctly.
	//
	// `pos` can be changed directly.

	// Create a new polygon, passing in a position vector, and an array of points (represented
	// by vectors relative to the position vector). If no position is passed in, the position
	// of the polygon will be `(0,0)`.
	/**
	 * @param {Vector=} pos A vector representing the origin of the polygon. (all other
	 *   points are relative to this one)
	 * @param {Array<Vector>=} points An array of vectors representing the points in the polygon,
	 *   in counter-clockwise order.
	 * @constructor
	 */
	function Polygon(pos, points) {
		this['pos'] = pos || new Vector();
		this['angle'] = 0;
		this['offset'] = new Vector();
		this.setPoints(points || []);
	}
	SAT['Polygon'] = Polygon;

	// Set the points of the polygon. Any consecutive duplicate points will be combined.
	//
	// Note: The points are counter-clockwise *with respect to the coordinate system*.
	// If you directly draw the points on a screen that has the origin at the top-left corner
	// it will _appear_ visually that the points are being specified clockwise. This is just
	// because of the inversion of the Y-axis when being displayed.
	/**
	 * @param {Array<Vector>=} points An array of vectors representing the points in the polygon,
	 *   in counter-clockwise order.
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype['setPoints'] = Polygon.prototype.setPoints = function (
		points,
	) {
		// Only re-allocate if this is a new polygon or the number of points has changed.
		var lengthChanged =
			!this['points'] || this['points'].length !== points.length;
		if (lengthChanged) {
			var i;
			var calcPoints = (this['calcPoints'] = []);
			var edges = (this['edges'] = []);
			var normals = (this['normals'] = []);
			// Allocate the vector arrays for the calculated properties
			for (i = 0; i < points.length; i++) {
				// Remove consecutive duplicate points
				var p1 = points[i];
				var p2 = i < points.length - 1 ? points[i + 1] : points[0];
				if (p1 !== p2 && p1.x === p2.x && p1.y === p2.y) {
					points.splice(i, 1);
					i -= 1;
					continue;
				}
				calcPoints.push(new Vector());
				edges.push(new Vector());
				normals.push(new Vector());
			}
		}
		this['points'] = points;
		this._recalc();
		return this;
	};

	// Set the current rotation angle of the polygon.
	/**
	 * @param {number} angle The current rotation angle (in radians).
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype['setAngle'] = Polygon.prototype.setAngle = function (
		angle,
	) {
		this['angle'] = angle;
		this._recalc();
		return this;
	};

	// Set the current offset to apply to the `points` before applying the `angle` rotation.
	/**
	 * @param {Vector} offset The new offset vector.
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype['setOffset'] = Polygon.prototype.setOffset = function (
		offset,
	) {
		this['offset'] = offset;
		this._recalc();
		return this;
	};

	// Rotates this polygon counter-clockwise around the origin of *its local coordinate system* (i.e. `pos`).
	//
	// Note: This changes the **original** points (so any `angle` will be applied on top of this rotation).
	/**
	 * @param {number} angle The angle to rotate (in radians)
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype['rotate'] = Polygon.prototype.rotate = function (angle) {
		var points = this['points'];
		var len = points.length;
		for (var i = 0; i < len; i++) {
			points[i].rotate(angle);
		}
		this._recalc();
		return this;
	};

	// Translates the points of this polygon by a specified amount relative to the origin of *its own coordinate
	// system* (i.e. `pos`).
	//
	// This is most useful to change the "center point" of a polygon. If you just want to move the whole polygon, change
	// the coordinates of `pos`.
	//
	// Note: This changes the **original** points (so any `offset` will be applied on top of this translation)
	/**
	 * @param {number} x The horizontal amount to translate.
	 * @param {number} y The vertical amount to translate.
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype['translate'] = Polygon.prototype.translate = function (
		x,
		y,
	) {
		var points = this['points'];
		var len = points.length;
		for (var i = 0; i < len; i++) {
			points[i]['x'] += x;
			points[i]['y'] += y;
		}
		this._recalc();
		return this;
	};

	// Computes the calculated collision polygon. Applies the `angle` and `offset` to the original points then recalculates the
	// edges and normals of the collision polygon.
	/**
	 * @return {Polygon} This for chaining.
	 */
	Polygon.prototype._recalc = function () {
		// Calculated points - this is what is used for underlying collisions and takes into account
		// the angle/offset set on the polygon.
		var calcPoints = this['calcPoints'];
		// The edges here are the direction of the `n`th edge of the polygon, relative to
		// the `n`th point. If you want to draw a given edge from the edge value, you must
		// first translate to the position of the starting point.
		var edges = this['edges'];
		// The normals here are the direction of the normal for the `n`th edge of the polygon, relative
		// to the position of the `n`th point. If you want to draw an edge normal, you must first
		// translate to the position of the starting point.
		var normals = this['normals'];
		// Copy the original points array and apply the offset/angle
		var points = this['points'];
		var offset = this['offset'];
		var angle = this['angle'];
		var len = points.length;
		var i;
		for (i = 0; i < len; i++) {
			var calcPoint = calcPoints[i].copy(points[i]);
			calcPoint['x'] += offset['x'];
			calcPoint['y'] += offset['y'];
			if (angle !== 0) {
				calcPoint.rotate(angle);
			}
		}
		// Calculate the edges/normals
		for (i = 0; i < len; i++) {
			var p1 = calcPoints[i];
			var p2 = i < len - 1 ? calcPoints[i + 1] : calcPoints[0];
			var e = edges[i].copy(p2).sub(p1);
			normals[i].copy(e).perp().normalize();
		}
		return this;
	};

	// Compute the axis-aligned bounding box. Any current state
	// (translations/rotations) will be applied before constructing the AABB.
	//
	// Note: Returns a _new_ `Box` each time you call this.
	/**
	 * @return {Polygon} The AABB
	 */
	Polygon.prototype['getAABBAsBox'] = Polygon.prototype.getAABBAsBox =
		function () {
			var points = this['calcPoints'];
			var len = points.length;
			var xMin = points[0]['x'];
			var yMin = points[0]['y'];
			var xMax = points[0]['x'];
			var yMax = points[0]['y'];
			for (var i = 1; i < len; i++) {
				var point = points[i];
				if (point['x'] < xMin) {
					xMin = point['x'];
				} else if (point['x'] > xMax) {
					xMax = point['x'];
				}
				if (point['y'] < yMin) {
					yMin = point['y'];
				} else if (point['y'] > yMax) {
					yMax = point['y'];
				}
			}
			return new Box(
				this['pos'].clone().add(new Vector(xMin, yMin)),
				xMax - xMin,
				yMax - yMin,
			);
		};

	// Compute the axis-aligned bounding box. Any current state
	// (translations/rotations) will be applied before constructing the AABB.
	//
	// Note: Returns a _new_ `Polygon` each time you call this.
	/**
	 * @return {Polygon} The AABB
	 */
	Polygon.prototype['getAABB'] = Polygon.prototype.getAABB = function () {
		return this.getAABBAsBox().toPolygon();
	};

	// Compute the centroid (geometric center) of the polygon. Any current state
	// (translations/rotations) will be applied before computing the centroid.
	//
	// See https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
	//
	// Note: Returns a _new_ `Vector` each time you call this.
	/**
	 * @return {Vector} A Vector that contains the coordinates of the Centroid.
	 */
	Polygon.prototype['getCentroid'] = Polygon.prototype.getCentroid =
		function () {
			var points = this['calcPoints'];
			var len = points.length;
			var cx = 0;
			var cy = 0;
			var ar = 0;
			for (var i = 0; i < len; i++) {
				var p1 = points[i];
				var p2 = i === len - 1 ? points[0] : points[i + 1]; // Loop around if last point
				var a = p1['x'] * p2['y'] - p2['x'] * p1['y'];
				cx += (p1['x'] + p2['x']) * a;
				cy += (p1['y'] + p2['y']) * a;
				ar += a;
			}
			ar = ar * 3; // we want 1 / 6 the area and we currently have 2*area
			cx = cx / ar;
			cy = cy / ar;
			return new Vector(cx, cy);
		};

	// ## Box
	//
	// Represents an axis-aligned box, with a width and height.

	// Create a new box, with the specified position, width, and height. If no position
	// is given, the position will be `(0,0)`. If no width or height are given, they will
	// be set to `0`.
	/**
	 * @param {Vector=} pos A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
	 * @param {?number=} w The width of the box.
	 * @param {?number=} h The height of the box.
	 * @constructor
	 */
	function Box(pos, w, h) {
		this['pos'] = pos || new Vector();
		this['w'] = w || 0;
		this['h'] = h || 0;
	}
	SAT['Box'] = Box;

	// Returns a polygon whose edges are the same as this box.
	/**
	 * @return {Polygon} A new Polygon that represents this box.
	 */
	Box.prototype['toPolygon'] = Box.prototype.toPolygon = function () {
		var pos = this['pos'];
		var w = this['w'];
		var h = this['h'];
		return new Polygon(new Vector(pos['x'], pos['y']), [
			new Vector(),
			new Vector(w, 0),
			new Vector(w, h),
			new Vector(0, h),
		]);
	};

	// ## Response
	//
	// An object representing the result of an intersection. Contains:
	//  - The two objects participating in the intersection
	//  - The vector representing the minimum change necessary to extract the first object
	//    from the second one (as well as a unit vector in that direction and the magnitude
	//    of the overlap)
	//  - Whether the first object is entirely inside the second, and vice versa.
	/**
	 * @constructor
	 */
	function Response() {
		this['a'] = null;
		this['b'] = null;
		this['overlapN'] = new Vector();
		this['overlapV'] = new Vector();
		this.clear();
	}
	SAT['Response'] = Response;

	// Set some values of the response back to their defaults.  Call this between tests if
	// you are going to reuse a single Response object for multiple intersection tests (recommented
	// as it will avoid allcating extra memory)
	/**
	 * @return {Response} This for chaining
	 */
	Response.prototype['clear'] = Response.prototype.clear = function () {
		this['aInB'] = true;
		this['bInA'] = true;
		this['overlap'] = Number.MAX_VALUE;
		return this;
	};

	// ## Object Pools

	// A pool of `Vector` objects that are used in calculations to avoid
	// allocating memory.
	/**
	 * @type {Array<Vector>}
	 */
	var T_VECTORS = [];
	for (var i = 0; i < 10; i++) {
		T_VECTORS.push(new Vector());
	}

	// A pool of arrays of numbers used in calculations to avoid allocating
	// memory.
	/**
	 * @type {Array<Array<number>>}
	 */
	var T_ARRAYS = [];
	for (var i = 0; i < 5; i++) {
		T_ARRAYS.push([]);
	}

	// Temporary response used for polygon hit detection.
	/**
	 * @type {Response}
	 */
	var T_RESPONSE = new Response();

	// Tiny "point" polygon used for polygon hit detection.
	/**
	 * @type {Polygon}
	 */
	var TEST_POINT = new Box(new Vector(), 0.000001, 0.000001).toPolygon();

	// ## Helper Functions

	// Flattens the specified array of points onto a unit vector axis,
	// resulting in a one dimensional range of the minimum and
	// maximum value on that axis.
	/**
	 * @param {Array<Vector>} points The points to flatten.
	 * @param {Vector} normal The unit vector axis to flatten on.
	 * @param {Array<number>} result An array.  After calling this function,
	 *   result[0] will be the minimum value,
	 *   result[1] will be the maximum value.
	 */
	function flattenPointsOn(points, normal, result) {
		var min = Number.MAX_VALUE;
		var max = -Number.MAX_VALUE;
		var len = points.length;
		for (var i = 0; i < len; i++) {
			// The magnitude of the projection of the point onto the normal
			var dot = points[i].dot(normal);
			if (dot < min) {
				min = dot;
			}
			if (dot > max) {
				max = dot;
			}
		}
		result[0] = min;
		result[1] = max;
	}

	// Check whether two convex polygons are separated by the specified
	// axis (must be a unit vector).
	/**
	 * @param {Vector} aPos The position of the first polygon.
	 * @param {Vector} bPos The position of the second polygon.
	 * @param {Array<Vector>} aPoints The points in the first polygon.
	 * @param {Array<Vector>} bPoints The points in the second polygon.
	 * @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
	 *   will be projected onto this axis.
	 * @param {Response=} response A Response object (optional) which will be populated
	 *   if the axis is not a separating axis.
	 * @return {boolean} true if it is a separating axis, false otherwise.  If false,
	 *   and a response is passed in, information about how much overlap and
	 *   the direction of the overlap will be populated.
	 */
	function isSeparatingAxis(aPos, bPos, aPoints, bPoints, axis, response) {
		var rangeA = T_ARRAYS.pop();
		var rangeB = T_ARRAYS.pop();
		// The magnitude of the offset between the two polygons
		var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);
		var projectedOffset = offsetV.dot(axis);
		// Project the polygons onto the axis.
		flattenPointsOn(aPoints, axis, rangeA);
		flattenPointsOn(bPoints, axis, rangeB);
		// Move B's range to its position relative to A.
		rangeB[0] += projectedOffset;
		rangeB[1] += projectedOffset;
		// Check if there is a gap. If there is, this is a separating axis and we can stop
		if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
			T_VECTORS.push(offsetV);
			T_ARRAYS.push(rangeA);
			T_ARRAYS.push(rangeB);
			return true;
		}
		// This is not a separating axis. If we're calculating a response, calculate the overlap.
		if (response) {
			var overlap = 0;
			// A starts further left than B
			if (rangeA[0] < rangeB[0]) {
				response['aInB'] = false;
				// A ends before B does. We have to pull A out of B
				if (rangeA[1] < rangeB[1]) {
					overlap = rangeA[1] - rangeB[0];
					response['bInA'] = false;
					// B is fully inside A.  Pick the shortest way out.
				} else {
					var option1 = rangeA[1] - rangeB[0];
					var option2 = rangeB[1] - rangeA[0];
					overlap = option1 < option2 ? option1 : -option2;
				}
				// B starts further left than A
			} else {
				response['bInA'] = false;
				// B ends before A ends. We have to push A out of B
				if (rangeA[1] > rangeB[1]) {
					overlap = rangeA[0] - rangeB[1];
					response['aInB'] = false;
					// A is fully inside B.  Pick the shortest way out.
				} else {
					var option1 = rangeA[1] - rangeB[0];
					var option2 = rangeB[1] - rangeA[0];
					overlap = option1 < option2 ? option1 : -option2;
				}
			}
			// If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
			var absOverlap = Math.abs(overlap);
			if (absOverlap < response['overlap']) {
				response['overlap'] = absOverlap;
				response['overlapN'].copy(axis);
				if (overlap < 0) {
					response['overlapN'].reverse();
				}
			}
		}
		T_VECTORS.push(offsetV);
		T_ARRAYS.push(rangeA);
		T_ARRAYS.push(rangeB);
		return false;
	}
	SAT['isSeparatingAxis'] = isSeparatingAxis;

	// Calculates which Voronoi region a point is on a line segment.
	// It is assumed that both the line and the point are relative to `(0,0)`
	//
	//            |       (0)      |
	//     (-1)  [S]--------------[E]  (1)
	//            |       (0)      |
	/**
	 * @param {Vector} line The line segment.
	 * @param {Vector} point The point.
	 * @return  {number} LEFT_VORONOI_REGION (-1) if it is the left region,
	 *          MIDDLE_VORONOI_REGION (0) if it is the middle region,
	 *          RIGHT_VORONOI_REGION (1) if it is the right region.
	 */
	function voronoiRegion(line, point) {
		var len2 = line.len2();
		var dp = point.dot(line);
		// If the point is beyond the start of the line, it is in the
		// left voronoi region.
		if (dp < 0) {
			return LEFT_VORONOI_REGION;
		}
		// If the point is beyond the end of the line, it is in the
		// right voronoi region.
		else if (dp > len2) {
			return RIGHT_VORONOI_REGION;
		}
		// Otherwise, it's in the middle one.
		else {
			return MIDDLE_VORONOI_REGION;
		}
	}
	// Constants for Voronoi regions
	/**
	 * @const
	 */
	var LEFT_VORONOI_REGION = -1;
	/**
	 * @const
	 */
	var MIDDLE_VORONOI_REGION = 0;
	/**
	 * @const
	 */
	var RIGHT_VORONOI_REGION = 1;

	// ## Collision Tests

	// Check if a point is inside a circle.
	/**
	 * @param {Vector} p The point to test.
	 * @param {Circle} c The circle to test.
	 * @return {boolean} true if the point is inside the circle, false if it is not.
	 */
	function pointInCircle(p, c) {
		var differenceV = T_VECTORS.pop().copy(p).sub(c['pos']).sub(c['offset']);
		var radiusSq = c['r'] * c['r'];
		var distanceSq = differenceV.len2();
		T_VECTORS.push(differenceV);
		// If the distance between is smaller than the radius then the point is inside the circle.
		return distanceSq <= radiusSq;
	}
	SAT['pointInCircle'] = pointInCircle;

	// Check if a point is inside a convex polygon.
	/**
	 * @param {Vector} p The point to test.
	 * @param {Polygon} poly The polygon to test.
	 * @return {boolean} true if the point is inside the polygon, false if it is not.
	 */
	function pointInPolygon(p, poly) {
		TEST_POINT['pos'].copy(p);
		T_RESPONSE.clear();
		var result = testPolygonPolygon(TEST_POINT, poly, T_RESPONSE);
		if (result) {
			result = T_RESPONSE['aInB'];
		}
		return result;
	}
	SAT['pointInPolygon'] = pointInPolygon;

	// Check if two circles collide.
	/**
	 * @param {Circle} a The first circle.
	 * @param {Circle} b The second circle.
	 * @param {Response=} response Response object (optional) that will be populated if
	 *   the circles intersect.
	 * @return {boolean} true if the circles intersect, false if they don't.
	 */
	function testCircleCircle(a, b, response) {
		// Check if the distance between the centers of the two
		// circles is greater than their combined radius.
		var differenceV = T_VECTORS.pop()
			.copy(b['pos'])
			.add(b['offset'])
			.sub(a['pos'])
			.sub(a['offset']);
		var totalRadius = a['r'] + b['r'];
		var totalRadiusSq = totalRadius * totalRadius;
		var distanceSq = differenceV.len2();
		// If the distance is bigger than the combined radius, they don't intersect.
		if (distanceSq > totalRadiusSq) {
			T_VECTORS.push(differenceV);
			return false;
		}
		// They intersect.  If we're calculating a response, calculate the overlap.
		if (response) {
			var dist = Math.sqrt(distanceSq);
			response['a'] = a;
			response['b'] = b;
			response['overlap'] = totalRadius - dist;
			response['overlapN'].copy(differenceV.normalize());
			response['overlapV'].copy(differenceV).scale(response['overlap']);
			response['aInB'] = a['r'] <= b['r'] && dist <= b['r'] - a['r'];
			response['bInA'] = b['r'] <= a['r'] && dist <= a['r'] - b['r'];
		}
		T_VECTORS.push(differenceV);
		return true;
	}
	SAT['testCircleCircle'] = testCircleCircle;

	// Check if a polygon and a circle collide.
	/**
	 * @param {Polygon} polygon The polygon.
	 * @param {Circle} circle The circle.
	 * @param {Response=} response Response object (optional) that will be populated if
	 *   they interset.
	 * @return {boolean} true if they intersect, false if they don't.
	 */
	function testPolygonCircle(polygon, circle, response) {
		// Get the position of the circle relative to the polygon.
		var circlePos = T_VECTORS.pop()
			.copy(circle['pos'])
			.add(circle['offset'])
			.sub(polygon['pos']);
		var radius = circle['r'];
		var radius2 = radius * radius;
		var points = polygon['calcPoints'];
		var len = points.length;
		var edge = T_VECTORS.pop();
		var point = T_VECTORS.pop();

		// For each edge in the polygon:
		for (var i = 0; i < len; i++) {
			var next = i === len - 1 ? 0 : i + 1;
			var prev = i === 0 ? len - 1 : i - 1;
			var overlap = 0;
			var overlapN = null;

			// Get the edge.
			edge.copy(polygon['edges'][i]);
			// Calculate the center of the circle relative to the starting point of the edge.
			point.copy(circlePos).sub(points[i]);

			// If the distance between the center of the circle and the point
			// is bigger than the radius, the polygon is definitely not fully in
			// the circle.
			if (response && point.len2() > radius2) {
				response['aInB'] = false;
			}

			// Calculate which Voronoi region the center of the circle is in.
			var region = voronoiRegion(edge, point);
			// If it's the left region:
			if (region === LEFT_VORONOI_REGION) {
				// We need to make sure we're in the RIGHT_VORONOI_REGION of the previous edge.
				edge.copy(polygon['edges'][prev]);
				// Calculate the center of the circle relative the starting point of the previous edge
				var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);
				region = voronoiRegion(edge, point2);
				if (region === RIGHT_VORONOI_REGION) {
					// It's in the region we want.  Check if the circle intersects the point.
					var dist = point.len();
					if (dist > radius) {
						// No intersection
						T_VECTORS.push(circlePos);
						T_VECTORS.push(edge);
						T_VECTORS.push(point);
						T_VECTORS.push(point2);
						return false;
					} else if (response) {
						// It intersects, calculate the overlap.
						response['bInA'] = false;
						overlapN = point.normalize();
						overlap = radius - dist;
					}
				}
				T_VECTORS.push(point2);
				// If it's the right region:
			} else if (region === RIGHT_VORONOI_REGION) {
				// We need to make sure we're in the left region on the next edge
				edge.copy(polygon['edges'][next]);
				// Calculate the center of the circle relative to the starting point of the next edge.
				point.copy(circlePos).sub(points[next]);
				region = voronoiRegion(edge, point);
				if (region === LEFT_VORONOI_REGION) {
					// It's in the region we want.  Check if the circle intersects the point.
					var dist = point.len();
					if (dist > radius) {
						// No intersection
						T_VECTORS.push(circlePos);
						T_VECTORS.push(edge);
						T_VECTORS.push(point);
						return false;
					} else if (response) {
						// It intersects, calculate the overlap.
						response['bInA'] = false;
						overlapN = point.normalize();
						overlap = radius - dist;
					}
				}
				// Otherwise, it's the middle region:
			} else {
				// Need to check if the circle is intersecting the edge,
				// Change the edge into its "edge normal".
				var normal = edge.perp().normalize();
				// Find the perpendicular distance between the center of the
				// circle and the edge.
				var dist = point.dot(normal);
				var distAbs = Math.abs(dist);
				// If the circle is on the outside of the edge, there is no intersection.
				if (dist > 0 && distAbs > radius) {
					// No intersection
					T_VECTORS.push(circlePos);
					T_VECTORS.push(normal);
					T_VECTORS.push(point);
					return false;
				} else if (response) {
					// It intersects, calculate the overlap.
					overlapN = normal;
					overlap = radius - dist;
					// If the center of the circle is on the outside of the edge, or part of the
					// circle is on the outside, the circle is not fully inside the polygon.
					if (dist >= 0 || overlap < 2 * radius) {
						response['bInA'] = false;
					}
				}
			}

			// If this is the smallest overlap we've seen, keep it.
			// (overlapN may be null if the circle was in the wrong Voronoi region).
			if (
				overlapN &&
				response &&
				Math.abs(overlap) < Math.abs(response['overlap'])
			) {
				response['overlap'] = overlap;
				response['overlapN'].copy(overlapN);
			}
		}

		// Calculate the final overlap vector - based on the smallest overlap.
		if (response) {
			response['a'] = polygon;
			response['b'] = circle;
			response['overlapV']
				.copy(response['overlapN'])
				.scale(response['overlap']);
		}
		T_VECTORS.push(circlePos);
		T_VECTORS.push(edge);
		T_VECTORS.push(point);
		return true;
	}
	SAT['testPolygonCircle'] = testPolygonCircle;

	// Check if a circle and a polygon collide.
	//
	// **NOTE:** This is slightly less efficient than polygonCircle as it just
	// runs polygonCircle and reverses everything at the end.
	/**
	 * @param {Circle} circle The circle.
	 * @param {Polygon} polygon The polygon.
	 * @param {Response=} response Response object (optional) that will be populated if
	 *   they interset.
	 * @return {boolean} true if they intersect, false if they don't.
	 */
	function testCirclePolygon(circle, polygon, response) {
		// Test the polygon against the circle.
		var result = testPolygonCircle(polygon, circle, response);
		if (result && response) {
			// Swap A and B in the response.
			var a = response['a'];
			var aInB = response['aInB'];
			response['overlapN'].reverse();
			response['overlapV'].reverse();
			response['a'] = response['b'];
			response['b'] = a;
			response['aInB'] = response['bInA'];
			response['bInA'] = aInB;
		}
		return result;
	}
	SAT['testCirclePolygon'] = testCirclePolygon;

	// Checks whether polygons collide.
	/**
	 * @param {Polygon} a The first polygon.
	 * @param {Polygon} b The second polygon.
	 * @param {Response=} response Response object (optional) that will be populated if
	 *   they interset.
	 * @return {boolean} true if they intersect, false if they don't.
	 */
	function testPolygonPolygon(a, b, response) {
		var aPoints = a['calcPoints'];
		var aLen = aPoints.length;
		var bPoints = b['calcPoints'];
		var bLen = bPoints.length;
		// If any of the edge normals of A is a separating axis, no intersection.
		for (var i = 0; i < aLen; i++) {
			if (
				isSeparatingAxis(
					a['pos'],
					b['pos'],
					aPoints,
					bPoints,
					a['normals'][i],
					response,
				)
			) {
				return false;
			}
		}
		// If any of the edge normals of B is a separating axis, no intersection.
		for (var i = 0; i < bLen; i++) {
			if (
				isSeparatingAxis(
					a['pos'],
					b['pos'],
					aPoints,
					bPoints,
					b['normals'][i],
					response,
				)
			) {
				return false;
			}
		}
		// Since none of the edge normals of A or B are a separating axis, there is an intersection
		// and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
		// final overlap vector.
		if (response) {
			response['a'] = a;
			response['b'] = b;
			response['overlapV']
				.copy(response['overlapN'])
				.scale(response['overlap']);
		}
		return true;
	}
	SAT['testPolygonPolygon'] = testPolygonPolygon;

	return SAT;
});


