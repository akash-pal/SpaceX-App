const rewire = require("rewire")
const utils = rewire("./utils")
const makeQueryParams = utils.__get__("makeQueryParams")
// @ponicode
describe("makeQueryParams", () => {
    test("0", () => {
        let callFunction = () => {
            makeQueryParams({ launch: "^5.0.0", landing: true, selectedYear: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            makeQueryParams({ launch: "v4.0.0-rc.4", landing: false, selectedYear: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            makeQueryParams({ launch: "4.0.0-beta1\t", landing: false, selectedYear: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            makeQueryParams({ launch: "4.0.0-beta1\t", landing: false, selectedYear: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            makeQueryParams({ launch: "^5.0.0", landing: false, selectedYear: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            makeQueryParams(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
