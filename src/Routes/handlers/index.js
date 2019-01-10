/**
 * 
 * @param {*} logos array
 * size filter takes the logos array and splits by "x" and compares
 * each side of x if greater  or equal than 64 and smaller or equal to 128
 */

export const sizeFilter = (logos) => {
  return logos.filter(({size}) => {
    const s =  size.split("x").map(i => parseInt(i))
    return s[0] >= 64 && s[0] <= 128 && s[1] >= 64 && s[1] <= 128
  })
}

/**
 *modify function takes request and filters it first for count if it is 
 *greater than 1, if it is reduces the data, applies size filter above, 
 *and returns the data as requested. 
 */
export const modify = (data) => {
 return data.filter((i) => i.count > 1)
  .reduce((acc, cur) => {
   const sizes = sizeFilter(cur.logos)
   const item =  {
    "name": cur.name,
    "count": cur.count,
    "thumbnail": sizes[0].url
   }
   acc = [...acc, item]
   return acc
  }, [])
};






