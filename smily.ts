export function countSmileys(arr) {
    // [:;] 0
    // [:;]? 1 not required
    // [)D] 2
    const validSmileys = /[:;][-~]?[)D]/;
    return arr.filter(face => validSmileys.test(face)).length;
}

module.exports = { countSmileys };
