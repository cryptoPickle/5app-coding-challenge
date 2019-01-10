import {sizeFilter, modify} from '../index';

const reqmock = {
	"payload": [
		{
			"name": "Molly",
			"count": 12,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Dolly",
			"count": 0,
			"logos": [{
				"size": "128x128",
				"url": "https://example.com/128x128.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		},
		{
			"name": "Polly",
			"count": 4,
			"logos": [{
				"size": "16x16",
				"url": "https://example.com/16x16.png"
			},{
				"size": "64x64",
				"url": "https://example.com/64x64.png"
			}]
		}
	]
}

const sizeMock =  [
{"size": "16x16","url": "https://example.com/16x16.png"},
{"size": "64x64","url": "https://example.com/64x64.png"},
{"size": "121x72","url": "https://example.com/64x64.png"},
{ "size": "56x72","url": "https://example.com/64x64.png"}
]

describe("Handler tests", () => {
  test("Should return no larger than 128x128 but no smaller than 64x64", () => {
    let res = [{"size": "64x64","url": "https://example.com/64x64.png"},{"size": "121x72", "url": "https://example.com/64x64.png"}]
    expect(sizeFilter(sizeMock)).toEqual(res)
  })
  test("size 32x128 should return nothing", () => {
    expect(sizeFilter([{size: "32x128"}])).toEqual([])
  })
  test("size 128x32 should return nothing", () => {
    expect(sizeFilter([{size: "128x32"}])).toEqual([])
  })
  test("size 128x64 should return", () => {
    const filter = sizeFilter([{size: "128x64"}])
    expect(filter.length).toEqual(1)
  })
  test("Modify should return 2 records", () => {
    const res = modify(reqmock.payload)
    expect(res.length).toBe(2)
  })
})

